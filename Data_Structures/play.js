// const tickets = [
//     {id:101, customer: "Riya", priority: "high"},
//     {id:102, customer: "priya", priority: "low"},
//     {id:103, customer: "jaya", priority: "medium"},
// ];

// tickets.push({id:104, customer:"latha", priority:"low"});
// tickets.push({id:105, customer:"maha", priority:"high"});

// // Removing operations would return the remove item
// tickets.pop();
// tickets.shift();

// console.log(tickets);
// --------------------------------------------------------------------------

// const tickets = [];

// for(let i = 0; i<=5; i++){
//     tickets.push({
//         id: i,
//         customer: `customer ${i}`,
//     });
// }

// tickets.pop(); //O(1) coz element is removed no elements moved
// tickets.shift(); // O(n) coz first element is removed and other elements get shifted or reindexed to fill its position
// console.log(tickets);
// ------------------------------------------------------------------------------------------------------

// const numbers = [];

// for (let i = 1; i <= 100000; i++) {
//     numbers.push(i);
// }
// console.time("shift");
// numbers.shift();
// console.timeEnd("shift");

// console.time("pop");
// numbers.pop();
// console.timeEnd("pop");

// //Big O describe how the amount of work changes as the input grows.

// ----------------------------------------------------------------------------------

// const ticket = {
//     id: 101,
//     status: "pending",
// };
// // 

// const anotherTicket = ticket; //copied reference to the object
// anotherTicket.status = "approved";

// console.log(ticket);
// console.log(anotherTicket); //one object is created, both variables refer to that same object

// console.log(ticket === anotherTicket);

// -----------------------------------------------------------------------------------------------------

// const ticket = {
//     id: 101,
//     customer: {
//         name: "Riya",
//         city: "Coimbatore"
//     }
// };

// const anotherTicket = {
//     ...ticket
// };

// anotherTicket.customer.name = "Priya";

// console.log(ticket.customer.name);
// console.log(anotherTicket.customer.name);
// console.log(ticket === anotherTicket); // false

// // (nested references)here customer is the same object which gets referenced from ticket and anotherticket objects
// console.log(ticket.customer === anotherTicket.customer); //true

// ---------------------------------------------------------------------------------------

const departments = [
    {
        id: 1,
        name: "Engineering",
        children: [
            {
                id: 2,
                name: "Computer Science",
                children: [
                    {
                        id: 3,
                        name: "AI Research",
                        children: []
                    }
                ]
            },
            {
                id: 4,
                name: "Mechanical",
                children: []
            }
        ]
    },
    {
        id: 5,
        name: "Management",
        children: []
    }
];

//like this nested structure we need to 'know the level of depth' when we use nested loops, 
// but recursion solves this 

//without recursion
for (const department of departments) {
    console.log(department.name);

    for (const child of department.children) {
        console.log(child.name);

        for (const subChild of child.children) {
            console.log(subChild.name);
        }
    }
}

// with recursion

function printDept(departments){
    for (const dept of departments){
        console.log(dept.name);

        printDept(dept.children);
    }

}
printDept(departments);// the empty list is the n atural stopping point is called base case.
