const output = document.querySelector("#output");

const createOrder = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ orderId: 501, amount: 2499 }), 700);
  });

const reserveInventory = (order) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (order.amount > 5000) {
        reject(new Error("Inventory reservation failed"));
        return;
      }
      resolve({ ...order, inventoryReserved: true });
    }, 700);
  });

const chargePayment = (order) =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ ...order, paymentId: "PAY-9001" }), 700);
  });

const sendConfirmation = (order) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(`Order ${order.orderId} confirmed`), 500);
  });

document.querySelector("#checkoutBtn").addEventListener("click", () => {
  output.textContent = "Starting checkout...";

  createOrder()
    .then(reserveInventory)
    .then(chargePayment)
    .then(sendConfirmation)
    .then(message => {
      output.textContent = message;
    })
    .catch(error => {
      output.textContent = `Checkout failed: ${error.message}`;
    })
    .finally(() => {
      console.log("Checkout workflow finished.");
    });
});

// Promise.all example: independent requests/tasks can run together.
const loadDashboard = () => {
  const users = Promise.resolve("users loaded");
  const orders = Promise.resolve("orders loaded");
  return Promise.all([users, orders]);
};

// Promise.race example: first result wins, useful for timeouts/fallbacks.
const fastestSource = () =>
  Promise.race([
    new Promise(resolve => setTimeout(() => resolve("cache"), 300)),
    new Promise(resolve => setTimeout(() => resolve("server"), 800))
  ]);
