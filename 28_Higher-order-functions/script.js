const orders = [
  { id: 101, customer: "Arun", total: 7200, status: "paid" },
  { id: 102, customer: "Priya", total: 3100, status: "pending" },
  { id: 103, customer: "Gowtham", total: 8600, status: "paid" },
  { id: 104, customer: "Karthik", total: 4200, status: "paid" }
];
const rows = document.querySelector("#rows");
const revenue = document.querySelector("#revenue");

// Higher-order function: receives a callback.
function renderOrders(transform) {
  const visibleOrders = transform(orders);
  rows.innerHTML = visibleOrders
    .map(order => `
      <tr>
        <td>#${order.id}</td>
        <td>${order.customer}</td>
        <td>₹${order.total}</td>
        <td>${order.status}</td>
      </tr>
    `)
    .join("");

  // reduce() combines many values into one result.
  const total = visibleOrders.reduce(
    (sum, order) => sum + order.total,
    0
  );
  revenue.textContent = `₹${total}`;
}

document.querySelector("#all").addEventListener("click", () => {
  renderOrders(data => data);
});
document.querySelector("#paid").addEventListener("click", () => {
  renderOrders(data => data.filter(order => order.status === "paid"));
});
document.querySelector("#high").addEventListener("click", () => {
  renderOrders(data => data.filter(order => order.total > 5000));
});

renderOrders(data => data);
