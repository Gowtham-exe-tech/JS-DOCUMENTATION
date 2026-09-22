const expense = {
    id : 101,
    amount: 3500,
    Status: "pending",
    submittedAt: Date.now(),//timestamp
}

console.log(expense);

const createdAt = new Date(expense.submittedAt);

//format for user
const date = createdAt.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
});

console.log(date);