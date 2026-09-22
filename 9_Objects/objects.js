const employee = {
    id: 101,
    name: "Gowtham",
    role: "Developer",
    department: {
        name: "Development",
        code: "DEV"
    },
    expenses: [
        {
            id: 1,
            category: "Travel",
            amount: 1200,
            status: "Pending"
        },
        {
            id: 2,
            category: "Food",
            amount: 500,
            status: "Approved"
        },
        {
            id: 3,
            category: "Office",
            amount: 800,
            status: "Pending"
        }
    ],

    introduce() {
        console.log(`Employee: ${this.name}`);
    }
};

console.log(employee.name);
console.log(employee.department.name);
employee.introduce();

const { name:emp_name, role } = employee;
console.log(emp_name);
console.log(role);

console.log(Object.keys(employee));


const pendingExpenses = employee.expenses.filter(
    expense => expense.status === "Pending"
);
const totalExpense = employee.expenses.reduce(
    (total, expense) => total + expense.amount,
    0
);
const categories = employee.expenses.map(
    expense => expense.category
);


console.log(pendingExpenses);
console.log(totalExpense);
console.log(categories);