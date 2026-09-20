// const products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Phone", price: 20000 },
//     { name: "Monitor", price: 10000 }
// ];

// const expensiveProducts = products.filter(product => product.price > 15000)
//                                 .map(product => product.name);

// console.log(expensiveProducts);
// -------------------------------------------------------------------------------------------------------
const expenses = [
    { id: 1, employee: "Arun", category: "Travel", amount: 1200, status: "Pending" },
    { id: 2, employee: "Priya", category: "Food", amount: 500, status: "Approved" },
    { id: 3, employee: "Kumar", category: "Travel", amount: 2500, status: "Pending" },
    { id: 4, employee: "Meena", category: "Office", amount: 800, status: "Rejected" },
    { id: 5, employee: "Rahul", category: "Food", amount: 1500, status: "Pending" }
];

const totalExpenses = expenses.length;

expenses.push({
    id: 6,
    employee: "Vijay",
    category: "Travel",
    amount: 900,
    status: "Pending"
});

const pendingExpenses = expenses.filter(
    expense => expense.status === "Pending"
);

const employeeNames = expenses.map(
    expense => expense.employee
);

const totalAmount = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
);

const pendingAmount = expenses
    .filter(expense => expense.status === "Pending")
    .reduce((total, expense) => total + expense.amount, 0);

const approvalRequired = expenses
    .filter(expense => expense.amount > 1000)
    .map(expense => expense.employee);


console.log("Total expenses:", totalExpenses);
console.log("Pending expenses:", pendingExpenses);
console.log("Employee names:", employeeNames);
console.log("Total amount:", totalAmount);
console.log("Pending amount:", pendingAmount);
console.log("Approval required:", approvalRequired);