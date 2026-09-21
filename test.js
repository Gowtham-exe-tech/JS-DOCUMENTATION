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
