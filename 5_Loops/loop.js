// while example
// const queue = ["Order A", "Order B", "Order C"];

// function processItem(item) {
//     console.log("Processing:", item);
// }

// while (queue.length > 0) {
//     const item = queue.shift();

//     processItem(item);
// }

// console.log(queue);

// -------------------------------------------------------------------
//for example
// const orders = [
//         { id: 101, amount: 500 },
//         { id: 102, amount: 1200 },
//         { id: 103, amount: 800 }
//     ];

// let total = 0;

// for (let i = 0; i < orders.length; i++) {
//         total += orders[i].amount;
// }

// console.log(`total bill amount: ${total}`);

// ------------------------------------------------------------
// do..while

// let choice;

// do {
//     console.log("\n--- Student Management System ---");
//     console.log("1. Add Student");
//     console.log("2. View Students");
//     console.log("3. Delete Student");
//     console.log("4. Exit");

//     // choice = Number(prompt("Enter your choice:"));
//     choice = Math.floor(Math.random() * 4) + 1

//     switch (choice) {
//         case 1:
//             console.log("Adding student...");
//             break;

//         case 2:
//             console.log("Showing students...");
//             break;

//         case 3:
//             console.log("Deleting student...");
//             break;

//         case 4:
//             console.log("Exiting...");
//             break;

//         default:
//             console.log("Invalid choice. Please try again.");
//     }

// } while (choice !== 4);

// console.log("Program ended.");

// -----------------------------------------------------------
//for..in
// backend sends a student object, we want to display every field and its value dynamically

// const student = {
//     name: "Gowtham",
//     dept: "AIDS",
//     semester: "7",
//     cgpa: "8.6"
// };

// for (const key in student) {
//     console.log(`${key}: ${student[key]}`);
// }

// -------------------------------------------------------------------------
// for...of
// Processing multiple expenses for approval

// const expenses = [
//     { employee: "Gowtham", amt: 500 },
//     { employee: "Priya", amt: 1200 },
//     { employee: "Giri", amt: 800 }
// ];
// for (const expense of expenses) {
//     if (expense.amt > 1000) {
//         console.log(`${expense.employee} needs manager approval`);
//     }
// }