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

function first() {
    console.log("A");
    second();
    console.log("C");
}

function second() {
    console.log("B");
}

first();

