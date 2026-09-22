const expenses = [
  { category: "Office", amount: 1200, status: "approved" },
  { category: "Travel", amount: 4500, status: "approved" },
  { category: "Office", amount: 800, status: "pending" },
  { category: "Food", amount: 650, status: "approved" }
];

// Pure function: same input gives same output and it does not modify outside state.
function calculateTax(amount, rate) {
  return amount * rate;
}
// Pure transformation: creates a new object instead of modifying the original.
function addTax(expense, taxRate) {
  return {
    ...expense,
    tax: calculateTax(expense.amount, taxRate),
    total: expense.amount + calculateTax(expense.amount, taxRate)
  };
}

// Currying: configure tax once, then reuse the returned function.
function createTaxCalculator(rate) {
  return amount => amount + calculateTax(amount, rate);
}

const withTax = createTaxCalculator(0.18);
// Composition: each function performs one part of the workflow.
function getApprovedOfficeExpenses(data) {
  return data
    .filter(expense => expense.category === "Office")
    .filter(expense => expense.status === "approved")
    .map(expense => addTax(expense, 0.18));
}

function createReport(data) {
  const processed = getApprovedOfficeExpenses(data);
  const total = processed.reduce(
    (sum, expense) => sum + expense.total,
    0
  );
  return { processed, total };
}

function render() {
  const report = createReport(expenses);
  document.querySelector("#report").innerHTML = `
    <h3>Approved Office Expenses</h3>
    <ul>
      ${report.processed.map(expense =>
        `<li>₹${expense.amount} + tax = ₹${expense.total.toFixed(2)}</li>`
      ).join("")}
    </ul>
    <strong>Total: ₹${report.total.toFixed(2)}</strong>
    <p>Original data was not modified.</p>
  `;
}

document.querySelector("#raise").addEventListener("click", () => {
  const amount = 1000;
  const amountWithTax = withTax(amount);
  document.querySelector("#report").insertAdjacentHTML(
    "afterbegin",
    `<p>Configured tax calculator: ₹${amount} → ₹${amountWithTax.toFixed(2)}</p>`
  );
});

render();
