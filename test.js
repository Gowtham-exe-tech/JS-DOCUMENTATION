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

// const arr = ['hi', 'hello', 'king'];
// console.log(arr.at('-1')); // actual index = length + negative index

// const orders = [
//     { id: 101, amount: 500 },
//     { id: 102, amount: 1500 },
//     { id: 103, amount: 800 },
//     { id: 104, amount: 2000 }
// ];

// const highValueOrders = orders.filter(order => order.amount >= 800 && order.amount <= 1500);
// console.log(highValueOrders);

// const products = [
//     {
//         id : 101,
//         name: "product 1",
//         rating: 4,
//     },
//     {
//         id : 102,
//         name: "product 2",
//         rating: 1,
//     },
//     {
//         id : 103,
//         name: "product 3",
//         rating: 3,
//     },
//     {
//         id : 104,
//         name: "product 4",
//         rating: 4,
//     },
//     {
//         id : 105,
//         name: "product 5",
//         rating: 1,
//     },
// ];

// for (let i=0; i < products.length; i++){
//     let mini = i;

//     for (let j=i+1; j<products.length; j++){
//         if(products[j].rating > products[mini].rating){
//             mini = j;
//         }
//     }
//     let temp = products[i];
//     products[i] = products[mini];
//     products[mini] = temp;

// }

// console.log(products);

// built-in sort

// products.sort((a,b) => a.rating - b.rating);
// console.log(products);


// const users = [
//     {
//         id: 1,
//         skills: [
//             {
//                 name: 'python',
//                 rating: 5,
//             },
//             {
//                 name: 'c',
//                 rating: 3,
//             }
//         ]
//     },
//     {
//         id: 2,
//         skills: [
//             {
//                 name: 'python',
//                 rating: 2,
//             },
//             {
//                 name: 'c',
//                 rating: 4,
//             },
//             {
//                 name: 'java',
//                 rating: 3,
//             }
//         ]
//     },
//     {
//         id: 3,
//         skills: [
//             {
//                 name: 'python',
//                 rating: 4,
//             },
//             {
//                 name: 'c',
//                 rating: 5,
//             }
//         ]
//     }

// ]


// users.forEach(user => {
//     user.skills.sort((a, b) => b.rating - a.rating);
// });



// users.sort((a, b) => {
//     const totalA = a.skills.reduce((sum, skill) => sum + skill.rating, 0);
//     const totalB = b.skills.reduce((sum, skill) => sum + skill.rating, 0);
//     return totalB - totalA;
// });


// users.forEach(user => {
//     let output = `${user.id}: `;

//     user.skills.forEach(skill => {
//         output += `${skill.name}(${skill.rating}) `;
//     });

//     console.log(output);
// });

const a = 10;
const b = 20;

if (a<b){
    a = 30;
    b = 40;
}

console.log(a);
console.log(b);