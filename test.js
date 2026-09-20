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

const orders = ["ORD101", "ORD102", "ORD103", "ORD104"];

const recentOrders = orders.slice(1,2);
console.log(recentOrders);
console.log(orders);