class Order {
  static nextId = 1001;

  constructor(customer, items) {
    this.id = Order.nextId++;
    this.customer = customer;
    this.items = items;
    this.status = "Pending";
  }

  calculateTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  cancel() {
    if (this.status === "Shipped") {
      throw new Error("A shipped order cannot be cancelled.");
    }
    this.status = "Cancelled";
  }

  getSummary() {
    return `#${this.id} - ${this.customer} - ₹${this.calculateTotal()}`;
  }
}

// Inheritance DigitalOrder iS an order.
class DigitalOrder extends Order {
  constructor(customer, items, downloadUrl) {
    super(customer, items);
    this.downloadUrl = downloadUrl;
  }

  downloadInvoice() {
    return `Invoice download prepared: ${this.downloadUrl}`;
  }
}

const orders = [
  new Order("Arun", [
    { name: "Keyboard", price: 1800, qty: 1 },
    { name: "Mouse", price: 700, qty: 2 }
  ]),
  new DigitalOrder("Gowtham", [
    { name: "JavaScript Course", price: 2500, qty: 1 }
  ], "/invoices/1002.pdf")
];

const container = document.querySelector("#orders");
const output = document.querySelector("#output");

function renderOrders() {
  container.innerHTML = "";
  orders.forEach(order => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>Order #${order.id}</h3>
      <p>Customer: ${order.customer}</p>
      <p>Total: ₹${order.calculateTotal()}</p>
      <p class="status">Status: ${order.status}</p>
      <button data-action="cancel">Cancel</button>
      ${order instanceof DigitalOrder ? '<button data-action="invoice">Invoice</button>' : ''}
    `;

    card.addEventListener("click", event => {
      const action = event.target.dataset.action;

      try {
        if (action === "cancel") {
          order.cancel();
          renderOrders();
        }
        if (action === "invoice") {
          output.textContent = order.downloadInvoice();
        }
      } catch (error) {
        output.textContent = error.message;
      }
    });
    container.appendChild(card);
  });
}

renderOrders();
output.textContent = `Valid order ID? ${Order.nextId > 0}`;
