// const name = "jay";
// name = "Riy";
// console.log(name);

// let name = "Gowtham";
// name = "Priya";
// console.log(name);

// ----------------------------------------------
// to understand object prototype chain
// --------------------------------------------

// const user = {
//     login() {
//         console.log("Logged in");
//     }
// };

// const admin = Object.create(user);

// admin.name = "Admin";

// admin.login();
// console.log(admin.name);


// let u = 4;

// let x = u++;

// console.log(x++);
// console.log(u);
// console.log(x);

// let isActive = true;

// isActive &&= true;

// console.log(isActive); // false

// function first() {
//     console.log("A");
//     second();
//     console.log("C");
// }

// function second() {
//     console.log("B");
// }

// first();


// const read = 1<<0;
// const write = 1<<1;
// const del = 1<<2;

// user1per = read | write;

// user2per = read | write | del;

// user3per = read | del;

// if(user1per & read) {
//     console.log(`user read permission granted`);
// }

// console.log(user1per);
// console.log(user2per);
// console.log(user3per);

// function greet(name) {
//     console.log(`Hello ${name}`);
// }

// const result = greet("Gowtham");

// console.log(result);

// const orders = ["ORD101", "ORD102", "ORD103", "ORD104"];

// const recentOrders = orders.slice(1,2);
// console.log(recentOrders);
// console.log(orders);



// -----------------------------------------------------------------------------------------------
//OBJECTS
//------------------------------------------------------------------------------------------------------
// const objectnew = {
//     name:"hey",
//     likes: "100",
//     followers: "150"
// };

// const neew = "likes";
// console.log(objectnew[neew]);

// const user = {
//     name: "Gowtham",

//     greet() {
//         console.log(this);
//     }
// };

// user.greet();

// const myobj = {};
// const str = "MyString";

// myobj.str = "this is a string field";
// myobj.num_field = "this is a number field";
// myobj["i43_field"] = "this is a 43 field";

// console.log(myobj["i43_field"]);
// console.log(myobj);

// const obj1 = {name:"heyyy"};
// const obj2 = obj1;

// obj1["age"] = 23;

// console.log(obj1===obj2);

// const user = {
//     name : "hey",

//     greet :  () => {
//         console.log(this.name);
//     },
// }


// user.greet();


// const employee = {
//     id: 101,
//     name: "Gowtham",
//     role: "Developer",

//     department: {
//         name: "Development",
//         code: "DEV"
//     },

//     address: {
//         city: "Tiruppur",
//         state: "Tamil Nadu"
//     }
// };

// console.log(employee.department.code);


// const employee = {
//     id: 101,
//     name: "Gowtham",

//     skills: [
//         "JavaScript",
//         "Node.js",
//         "Express"
//     ],

//     expenses: [
//         {
//             id: 1,
//             category: "Travel",
//             amount: 1200
//         },
//         {
//             id: 2,
//             category: "Food",
//             amount: 500
//         }
//     ]
// };

// const expenseTotal = employee.expenses.reduce((sum,expense) =>  {
//             sum = sum+expense.amount
// ,0});


// const expense = {
//     id: 501,
//     employee: "Gowtham",
//     category: "Travel",
//     amount: 2500,
//     status: "Pending"
// };

// const {employee, amount, status} = expense;

// console.log(employee);
// console.log(amount);
// console.log(status);

// const keysOfExpense = Object.keys(expense);
// const valueOfExpense = Object.values(expense);
// const entriesOfExpense = Object.entries(expense);

// console.log(keysOfExpense);
// console.log(valueOfExpense);
// console.log(entriesOfExpense);


// for (const {key, value} of Object.entries(expense)) {
//     console.log(`${key}: ${value}`);
// }



// hello();

// const hello = function () {
//     console.log(`Hello`);
// }

// let x = 10;
// let power = (M) => x**2;
// console.log(power());
 

// function logging (message, ...details) {
//     console.log(`Log: ${message}`);

//     for (const detail of details) {
//         console.log(" -> ",detail);
//     }
// }

// logging("server started.....");
// logging("payment failed",102,"upi",1500);
// logging("user logged in",200);

// let amountInput = "90.99";

// const amount = parseFloat(amountInput);

// if (Number.isNaN(amount)) {
//     console.log("Invalid amount");
// } else {
//     const displayAmount = amount.toFixed(2);

//     console.log(`₹${displayAmount}`);
// }

// const expense = {
//     id : 101,
//     amount: 3500,
//     Status: "pending",
//     submittedAt: new Date(),
// }

// console.log(expense);

// const dis_per = 10;
// const amount = 500;

// const discount = () => amount * (dis_per / 100);

// console.log(discount());

// const expense = {
//     id : 101,
//     amount: 3500,
//     Status: "pending",
//     submittedAt: Date.now(),//timestamp
// }

// console.log(expense);

// const createdAt = new Date(expense.submittedAt);

// //format for user
// const date = createdAt.toLocaleString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
// });

// console.log(date);


// const ne = "hi";
// console.log(Number(ne));

const arr = ['hi', 'hello', 'king'];
console.log(arr.at('-1'));