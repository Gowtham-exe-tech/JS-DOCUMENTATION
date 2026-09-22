// let choice; //global

// do {
//     console.log("\n--- Student Management System ---");
//     console.log("1. Add Student");
//     console.log("2. View Students");
//     console.log("3. Delete Student");
//     console.log("4. Exit");

//     // choice = Number(prompt("Enter your choice:"));
//     let choice = Math.floor(Math.random() * 4) + 1 //local same as global

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

// } while (choice !== 4);// here value will be undefined

// console.log("Program ended.");


// --------------------------------------------------------------------------
// function check(){
//     var x = 10;
//     var x = 20;
//     console.log(x);
// }

// check();

// --------------------------------------------------------------------------------------
//lexical scope

// const company = "ABC";
// function employee() {
//     console.log(company);
// }

// function manager() {
//     const company = "XYZ";
//     employee();
// }

// manager();

// --------------------------------------------------------------------------------

// closure

function  createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(count);
    }
    return {increment};
}

let counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
