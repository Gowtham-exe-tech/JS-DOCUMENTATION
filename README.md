# JAVASCRIPT

* A high-level (relatively far away from machine's hardware, closer to human thinking)

* Dynamically typed (no need to explicitly declare the variable's type, it can hold different types at different times.)

* Interpreted :
    - Traditional Interpretation 
        JavaScript code
            ↓
        Interpreter
            ↓
        Execute
            ↓
        Next code
            ↓
        Execute
            ↓
        Next code
            ↓
        Execute

    - Modern JIT Introduction(Just-In-Time compilation)

*Note:* **Hot Code** a code that gets execute frequently.

* JIT helps when there is a hot code, it optimize it, executes faster.

* Modern JavaScript engines use a combination of interpretation/execution and JIT compilation/optimization.

            Source
            ↓
            JavaScript Engine
            ↓
            Initial execution
            ↓
            Observe runtime behavior
            ↓
            JIT compile/optimize hot code
            ↓
            Machine code
            ↓
            Execute optimized code

* If the Optimization assumption invalid, the engine have mechanisms to deoptimize or fall back.

## JS in browser:

                 BROWSER
                    │
          HTTP request to server
                    ↓
               HTML / CSS / JS
                    │
                    ↓
              ┌───────────┐
              │   Browser │
              └─────┬─────┘
                    │
        ┌───────────┴───────────┐
        ↓                       ↓
      HTML/CSS              JavaScript
        ↓                       ↓
   DOM + CSSOM              JS Engine
                                ↓
                         Execute JS
                                ↓
                       DOM/Web API changes
                                ↓
                        Rendering system
                                ↓
                          Layout / Paint
                                ↓
                             Screen

## JS in server:

                server.js
                    ↓
                Node.js runtime
                    ↓
                V8
                    ↓
                JavaScript executes

* the difference in browser and server is "The surrounding environment determines what JavaScript can interact with."

# Why JS was created?

* Web pages are static, If we wanted something to change, we generally needed another request to the server.

* JavaScript was introduced to allow the browser to execute code locally and make web pages more interactive

# JS Engine

* chrome - node.js = v8 engine

* V8 is Google's JavaScript engine.

             JavaScript
                  ↓
                Parser (Abstract Syntax tree AST)
                  ↓
              Bytecode (intermediate code that js engine can understand)
                  ↓
              Ignition (js interpreter)
                  ↓
              Execution
                  ↓
        Runtime information
                  ↓
          Is code "hot"?
             ↙        ↘
           No          Yes
           ↓            ↓
       Continue      TurboFan
                    optimization
                         ↓
                 Machine code
                         ↓
                        CPU
* It also manages memory Garbage Collector.(remove objects that no longer reachable)

            JavaScript objects
                ↓
            Memory / Heap
                ↓
            Objects no longer reachable
                ↓
            Garbage Collector
                ↓
            Memory can be reclaimed


                 JAVASCRIPT ENGINE
                        │
            ┌───────────┴───────────┐
            ↓                       ↓
       CALL STACK                 HEAP
            │                       │
      function calls          objects / dynamic data
      execution state                │
                                     ↓
                              Garbage Collector
                                     │
                                     ↓
                              unused memory
                                reclaimed

# Console.log()

* Where to use:
    Debugging
    Checking Function execution
    Inspecting data
    Understand program flow while developing

* Where no to use :
    Passwords
    Access tokens
    API keys
    Private personal information

# Comments

* Single-line comment `//comment line`

* Multi-line Comment `/* multi-line comment */`

* Use comments to explain:
    - why something unusual exists
    - business rules  
    - constraints
    - workarounds
    - non-obvious decisions

# `<script>` Tag

* The `<script>` tag is used to load or write JavaScript in HTML.

## Where to place it?

* `<head>`

`<script src="app.js" defer></script>`

* `<body>`

`<script src="app.js"></script>`

### `defer`

`defer` tells the browser to:

1. Download JavaScript while HTML is being parsed.
2. Continue parsing HTML without blocking it.
3. Execute JavaScript after HTML parsing is complete.

```html
<script src="app.js" defer></script>
```

### Script loading


* Normal:
HTML parsing → STOP → download JS → execute JS → continue HTML

* defer:
HTML parsing + download JS → HTML parsing complete → execute JS

* async:
HTML parsing + download JS → download complete → execute immediately

**note:** `defer` means **after HTML parsing**, not "after the page is fully rendered"

# Js not purely object-oriented language

* js is fundamentally prototype-based.
* objects can exist without defining a class
* js objects can inherit behavior from another object through prototype chain. 

* **note** : A prototype is another object that JavaScript looks at when the current object doesn't have the property or method you're asking for.

## property shadowing

Javascript searches from the object upward, it doesn't continue searching once it finds the property

admin
 └── name = "Admin" ← FOUND
       ↑
       STOP

user
 └── name = "User"


# Variables 

*  A name binding/ referenceto a value

* EG: `let age = 21;`

## Variable Declaration

* var, let, const -> don't treat as equally preferred.

**const**

* use when the variable binding should not be reassigned *constant*

```js
const name = "jay";
name = "Riy";
console.log(name);
```

Here the error will occur: *TypeError: Assignment to constant variable.*

* **Use-case:** Application API endpoint `const API_URL = "https://example.com/api";`

**let**

* Use when variable needs to be reassigned.

Eg: 
```js
let name = "Gowtham";
name = "Priya";
console.log(name);
```

* **Use-case:** Shopping cart quantity changes
```js
let quantity = 1;
quantity = quantity + 1;
```

**var**

* In older javascript `var` can reassign a value to variable.

* `var` and `let` differ in **Scope behaviour**

Eg: 
```js
if (true) {
    var x = 10; // function scoped
    let y = 20; //block scoped
}

console.log(x);//accessible outisde the if block
console.log(y);//not accessible outside the if block Reference error
```

**why function block  var is problem**

* easy for variables to escape the block where they logically belong.

```js
function processOrders(orders) {
    for (var i = 0; i < orders.length; i++) {
        // process order
    }

    for (var i = 0; i < customers.length; i++) {
    // process customers
    }

    console.log(i);
}
```
here `i` is still available for custoer process cause a logical bug.

* Affects scope containment(nested codes)

* Easier to accidentally share/reuse

# Data Types

# JavaScript Data Types

A data type defines **what kind of value** a variable holds.

JavaScript has **7 primitive data types**:

## 1. String

Used to store text.

```js
const name = "Gowtham";
const city = 'Coimbatore';
```

## 2. Number

Used for integers and decimal numbers.

```js
const age = 21;
const price = 499.99;
```

JavaScript uses `Number` for both integers and floating-point values.

## 3. Boolean

Represents either `true` or `false`.

```js
const isLoggedIn = true;
const isAdmin = false;
```

Commonly used in conditions and decision-making.

## 4. Undefined

A variable exists but has not been assigned a value.

```js
let username;

console.log(username); // undefined
```

Real use:
- a variable hasn't received a value
- an object property doesn't exist
- a function doesn't return a value
- an API response doesn't contain an expected field

## 5. Null

Represents an **intentional absence of a value**.

```js
let selectedUser = null;
```

null → intentionally no value

```js
typeof null; // "object"
```

## 6. BigInt

Used for very large integers that cannot be safely represented by `Number`.

```js
const largeNumber = 123456789012345678901234567890n;
```

The `n` at the end indicates a BigInt.

Use it only when large-integer precision is actually required.

## 7. Symbol

Creates a **unique value**.

```js
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false
```

Even with the same description, each Symbol is unique.

Mostly used for advanced object/property use cases.

# Object

Objects are **not primitive values**.

They are used to store collections of related data.

It allows to store data and behavior together

```js
const user = {
    id: 101,
    name: "Gowtham",
    email: "gowtham@example.com",
    role: "developer"
};
```

* Arrays and functions are also objects in JavaScript's type system.

# Checking Data Type

Use `typeof`:

```js
typeof "Hello";     // "string"
typeof 100;         // "number"
typeof true;        // "boolean"
typeof undefined;   // "undefined"
typeof 100n;        // "bigint"
typeof Symbol();    // "symbol"
typeof {};          // "object"
typeof null;        // "object"
```
# Operators

Operators are symbols or keywords used to perform operations on values and variables.

## Arithmetic Operators

Arithmetic operators are used to perform mathematical calculations.

`+` Addition
`-` Subtraction
`*` Multiplication
`/` Division
`%` Modulus (remainder)
`**` Exponentiation
`++` Increment
`--` Decrement

Ex:
```js
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a % b); // 1
console.log(a ** b); // 1000
```

**Use-case:** Used for calculations like price calculation, quantity, marks, percentage, counters etc.

*Note:* `/` returns a number and can return decimal values.
```js
console.log(10 / 3); // 3.3333333333333335
```

**post increment/decrement [ x++/x-- ]** : use current first then increase/decrease value

**pre increment/decrement [ ++x/--x ]** : first increase/decrease value then use it.

## Assignment Operators

Assignment operators are used to assign or update a value in a variable.

`= , += , -=, *= , /= , %= `

Ex:
```js
let amount = 100;

amount += 50;
console.log(amount); // 150
```
Instead of: `amount = amount + 50;`
we can write: `amount += 50;`

**OR ASSIGNENT '||='** 
```js
let username = "";
username ||= "Guest";
```
- here, if username is falsy then guest will get assigned.

**Nullish assignment '??='**

```js
let username = null;
username ??= "Guest";
console.log(username); // Guest
```

* use when we want a default only when the value is null or undefined.

* use ??= when no value provided, use ||= when value is falsy needed a fallback

* use &&= when we need only fasly value, no true value.

## Comparison Operators

Comparison operators compare two values and return a Boolean value (`true` or `false`).
```text
==     Equal
===    Strictly equal
!=     Not equal
!==    Strictly not equal
>      Greater than
<      Less than
>=     Greater than or equal
<=     Less than or equal
```

```js
const age = 21;

console.log(age >= 18); // true
console.log(age === 21); // true
```

**Use-case:** Used in conditions, validation, permissions, filtering data etc.

### `==` vs `===`

`==` compares values after allowing type conversion.

`===` compares both value and type without performing type conversion.

Ex:
```js
console.log(5 == "5");  // true implicit type coercion
console.log(5 === "5"); // false
```

*Note:* In modern JavaScript, prefer `===` and `!==` for predictable comparisons.

## Logical Operators

Logical operators are used to combine or reverse conditions.

`&&` AND
`||` OR
`!` NOT

Ex:
```js
const age = 21;
const hasID = true;

console.log(age >= 18 && hasID); // true
```

`&&` returns true only when both conditions are true.

IN ADMIN PAGE:
```js
const isLoggedIn = true;
const isAdmin = true;

if (isLoggedIn && isAdmin) {
    console.log("Show admin dashboard");
}
```

`||` returns true when at least one condition is true.

```js
let isAdmin = false;
let isManager = true;

if (isAdmin || isManager) { //true
    console.log("Can approve");
}
```

`!` reverses the Boolean result.
```js
if (!isLoggedIn) {
    console.log("Redirect to login");
}
```

Ex:
```js
console.log(!true); // false
console.log(!false); // true
```

**Why we use it:** To create more complex conditions without writing separate `if` statements.

*Note:* `&&` and `||` also work with non-Boolean values and return one of the operands. This becomes important when working with default values and short-circuiting.

* JavaScript uses **truthiness** to determine which value to return.

* `&&` returns the **first falsy value**, or the last value if everything is truthy.

* `||` returns the first truthy value.

* JavaScript can stop evaluating once the result is already known called **short-circuiting**

## Bitwise Operators

* Bitwise operators perform operations on the binary representation of numbers.

* Bitwise operators work on the individual binary bits of a number.

`&` AND
`|` OR
`^` XOR
`~` NOT
`<<` Left shift
`>>` Right shift

Ex:
```js
const a = 5; // 101
const b = 3; // 011

console.log(a & b); // 1

console.log(5<<1) //10 normally left shift multiple by 2
console.log(20>>1) //10 normally right shift divides by 2
```

**Use-case:** Used in low-level operations, bit flags, permissions and some performance-sensitive operations.

* User permission on READ, Write, Delete like that 
```text
    Read = 1<<0   //0001
    Write = 1<<1  //0010
    Delete = 1<<2 //0100
    user = Read | Write //0011

    if (user & read){    // 0011 & 0001 = 0001 true 
        code to execute
    }
```
## Ternary Operator

The ternary operator is a short way to write a simple `if...else` condition.

Syntax:

`condition ? valueIfTrue : valueIfFalse`

Eg:

```js
const isLoggedIn = true;
const message = isLoggedIn ? "Welcome back" : "Please login";
console.log(message);
```

**Use-case:** Used when a simple condition needs to produce **one of two values**

*Do not use nested or complicated ternary expressions because they become difficult to read. Use `if...else` when the logic is more complex.*

# Control Flow

Control flow means controlling which parts of your JavaScript code should execute and when.

## `if`

`if` executes a block of code when a condition is true.

Eg:

```js
if (amount > 10000) {
    requireManagerApproval();
}
```

**Use-case:** Used when a piece of code should execute only when a specific condition is satisfied.

## `else`

`else` executes when the `if` condition is false.

Ex:
```js
const isLoggedIn = false;

if (isLoggedIn) {
    console.log("Show dashboard");
} else {
    console.log("Show login page");
}
```

## `else if`

`else if` is used when there are multiple conditions that need to be checked.

Put more specific / higher-priority conditions before broader ones(Order Matters)

Ex: Expense approval
```js
const amount = 15000;

if (amount <= 5000) {
    console.log("Accounts approval");
} else if (amount <= 10000) {
    console.log("Manager approval");
} else {
    console.log("MD approval");
}
```
* Used when the program needs to select one path from multiple possible conditions.

* JavaScript checks the conditions from top to bottom and executes the first matching block.

**Note** the conditions doesn't require to be true or false, 
            false
            0
            ""
            null
            undefined
            NaN
        The above mentioned are falsy other than that almost everything is falsy.

```js
if (username) {
    console.log("Username exists");
}

//alternative
if (username !== "") {
    console.log("Username exists");
}
```

* Ternary is better when we choose between two values
* if..else is better when we perform actions based on condition.

## `switch` (=== strict matching)

`switch` is used to execute different code based on the value of an expression.

It is used when we want to compare **one value against multiple exact values.**

Ex:

```js
const status = "approved";

switch (status) {
    case "pending":
        console.log("Waiting for approval");
        break;

    case "approved":
        console.log("Approved");
        break;

    case "rejected":
        console.log("Rejected");
        break;

    default:
        console.log("Unknown status");
}
```

**Use-case:** Useful when one value needs to be compared against several known fixed values.

*`break` prevents execution from continuing into the next case. fall-through*

*`default` executes when no case matches.*

# Loops

Loops are used to repeatedly execute a block of code while a condition is satisfied.

## `for` Loop

The `for` loop is commonly used when the number of iterations or loop structure is known.

Ex: **The iteration is the main idea**
    Receive orders:
```js
    const orders = [
        { id: 101, amount: 500 },
        { id: 102, amount: 1200 },
        { id: 103, amount: 800 }
    ];

    let total = 0;

    for (let i = 0; i < orders.length; i++) {
        total += orders[i].amount;
    }
    // Here, for every order we need to do something repeatedly
```

* Iterating through arrays, repeating an operation a known number of times, generating values etc.

* Use to avoid writing the same code repeatedly.

The three parts are:

`initialization` → runs once before the loop

`condition` → checked before every iteration

`update` → runs after every iteration

## `while` Loop

The `while` loop repeatedly executes code as long as the condition is true.

Example: **Keep doing this as long as this condition is true/ untill it becomes false**

```js
const queue = ["Order A", "Order B", "Order C"];

function processItem(item) {
    console.log("Processing:", item);
}

while (queue.length > 0) {
    const item = queue.shift();

    processItem(item);
}
// here, the logic is keep processing while there are items in queue
```

* Useful when the number of iterations is not known beforehand and depends on a condition.

* Make sure the condition eventually becomes false, otherwise it can create an infinite loop.

## `do...while` Loop

The `do...while` loop executes the code at least once before checking the condition.

Example:
```js
let choice;

do {
    showMenu();
    choice = getUserChoice();

    handleChoice(choice);

} while (choice !== 4);

// Show and process the menu, then continue until the user chooses 4
```

* Useful when the operation must happen at least once before checking the condition.

Example: Asking a user for input at least once.

* Difference from `while`: `while` checks first, `do...while` executes first.

## `break`

`break` immediately stop the loop and exists.

Ex: Searching a customer
```js
const students = ["Arun", "Priya", "Kumar", "Ravi"];

for (let i = 0; i < students.length; i++) {
    if (students[i] === "Kumar") {
        console.log("Student found");
        break;
    }
}
```
* Used when the required result has already been found and continuing the loop is unnecessary.

## `continue`

`continue` skips the current iteration and moves to the next iteration.

Ex: In expenses we want to remove invalid amount '0'
```js
const expenses = [500, 1200, 0, 800, 1500];
for (const amount of expenses) {
    if (amount === 0) {
        continue;
    }

    console.log("Processing:", amount);
}
```
* Used when certain items should be ignored while the loop continues processing the remaining items.

## `for...in`

* It is mainly used to loop through the **property keys of an object**.

Example:
```js
const user = {
    name: "Gowtham",
    age: 21
};

for (const key in user) {
    console.log(key);
}
```

* Mainly used for iterating over object properties.

* Do not normally use `for...in` to iterate through arrays because it iterates over keys/properties rather than array values.

## `for...of` (ES6 2015)

* It iterates over the **values of an iterable** such as an array or string.

Eg:
```js
const expenses = [500, 1200, 800, 1500];

for (const amount of expenses) {
    if (amount > 1000) {
        console.log("High-value expense:", amount);
    }
}
```

* Useful when you need each value from an array or another iterable.

* It provides a clean way to process values without manually managing an index.

*`for...in` → keys/properties*

*`for...of` → values*

# Functions

A function is a reusable block of code that performs a specific task.

Ex:
```js
const order = {
    id: "ORD101",
    customer: "Gowtham",
    items: [
        { name: "Laptop", price: 50000, quantity: 1 },
        { name: "Mouse", price: 1000, quantity: 2 }
    ]
};

function calculateTotal(items) {
    let total = 0;
    for (const item of items) {
        total += item.price * item.quantity;
    }
    return total;
}
const total = calculateTotal(order.items);
console.log(`Order total: ${total}`);
```
- calculateTotal : function name
- items : parameters
- order.items : arguments
- return total : sends the result back

* parameters : when defining (placeholder)

* arguments : when calling(actual value)

* Used to organize logic into reusable units such as validation, calculations, API processing etc.

* Reuse + separation of responsibility + maintainability

* **return** sends a value out of function.

* while writing function remember that one function should have single responsibilty.

## Function Declaration

A function declaration defines a named function using the `function` keyword.

eg:
```js
function add(a, b) {
    return a + b;
}
```

## Parameters

Parameters are variables defined in a function that receive values when the function is called.

eg:
```js
function greet(name) {
    console.log("Hello " + name);
}

greet("Gowtham");
```

Here `name` is a parameter and `"Gowtham"` is an argument.

## Return

`return` sends a value back from the function and stops that function's execution.

ex:
```js
function add(a, b) {
    return a + b;
}

const result = add(10, 20);
```

* Used when a function needs to produce a result that another part of the application can use.

* If a function doesn't explicitly return a value, it returns `undefined`.

## Function Expression

* A function expression means creating a function and storing it inside a variable

eg:
```js
const calculateDiscount = function (total) {
    if (total >= 50000) {
        return total * 0.10;
    }
    return 0;
};
const discount = calculateDiscount(total);
console.log(`Discount: ${discount}`);
```
* Useful when functions need to be stored in variables, passed as arguments or used as callbacks.

## Arrow Function

An arrow function is a shorter syntax for writing functions.

Example:
```js
const add = (a, b) => {
    return a + b;
};
```

For a single expression, it can be shortened further:

```js
const add = (a, b) => a + b;
```

* Commonly used for callbacks and short functions.

Ex:
```js
const paymentAmount = (total, discount) => {
    return total - discount;
};
console.log(`Amount to pay: ${paymentAmount(total,discount)}`);
```

* if the function contains only one expression, we can remove the `{}` and `return` called **implicit return**

## Parameters and arguments

* Parameters are the inputs a function accepts.

* parameters values are assigned based on position.

* If the argument is missing when needed parmeter is needed, the parameter will get `undefined`.

### Default parameter

```js
function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet();
```
* use when the argument is undefined or not supplied.

## Rest parameters

* Use rest paramter when we don't know how many arguments the function will receive

* The rest parameter collects all the remaining arguments into an array.

* It shoud be the last parameter of the function

```js
function logging (message, ...details) {
    console.log(`Log: ${message}`);

    for (const detail of details) {
        console.log(" ",detail);
    }
}
```

## Hoisting

* Hoisting is JavaScript's behavior where declarations are processed before the code actually executes.

* Before executing your code, JavaScript creates/sets up bindings for declarations.

Ex:
```js
greet();

function greet() {
    console.log("Hello");
}
```

* This works because function declarations are hoisted.

But:

```js
greet();

const greet = () => {
    console.log("Hello");
};
```

This does not work because the variable is not initialized before it is accessed.

* Because `greet` is a const variable.

* The binding exists during setup, but it cannot be accessed before its initialization.

* This period is related to the Temporal Dead Zone (TDZ).

# Scope & Closures

Scope determines **where a variable can be accessed in the code**.

## Global Scope

A variable declared in the global scope can generally be accessed from code that is within that global environment.
eg:
```js
const appName = "Expense App";

function showAppName() {
    console.log(appName);
}
```
* Global values can be useful when something genuinely needs application-wide access.

* Avoid creating unnecessary global variables because they can be changed or accessed from many places, making the code harder to maintain.

## Local Scope

A variable declared inside a function is available only within that function.

Ex:
```js
function calculateTotal() {
    const price = 500;
    const quantity = 2;

    return price * quantity;
}
console.log(calculateTotal());
```

`price` and `quantity` cannot be directly accessed outside the function.

* Used to keep variables limited to the part of the application where they are required.

* Reduces accidental changes and prevents unnecessary variables from being accessible everywhere.


## Block Scope

Variables declared using `let` and `const` inside a block are available only inside that block.

Ex:
```js
if (true) {
    const message = "Hello";
    console.log(message);
}

console.log(message); // ReferenceError
```

* Useful for keeping variables limited to a specific `if`, `for`, `while` or other block.

* `let` and `const` are block scoped, while `var` is function scoped.

## Shadowing
    
* It happens when an innner scope creates a variable with the **same name** as a vaiable in an outer scope.
    
* Inner variable hides outer variable with same name.

## Lexical Scope

* Lexical scope means a variable's accessibility is determined by its physical location within the source code at the time it is written.


* It is determined during the compile time by its physical location rather than run time, it remains static. 
Ex:
```js
const company = "ABC";

function employee() {
    console.log(company); //ABC 
}

function manager() {
    const company = "XYZ";
    employee();
}

manager();
```

* manager is the one who called employee, but employee() is global scope, it looks for company value in global scope

* Javascript looks at where a function is written to determiine which outer variables it can access.

**Note** outer scope cannot access variable inside the innner scope. 

## Variable Shadowing

Variable shadowing happens when an inner scope declares a variable with the same name as a variable in an outer scope.

Ex:
```js
const name = "Gowtham";

function showName() {
    const name = "Priya";

    console.log(name);
}

showName();
console.log(name);
```

Output:
```js
Priya
Gowtham
```

- The inner `name` shadows the outer `name` inside the function.

* Sometimes useful when a local variable represents the same concept as an outer variable, but unnecessary shadowing can make code confusing.

* The inner variable does not change the outer variable.

## Closure

* A closure is created when a function remembers and can access variables from its surrounding lexical scope even after the outer function has finished executing.

* maintains the state of the variable and keep it private.

* Encapsulates variables and make them private.

Ex:
```js
//let count = 0; state maintained but not private
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
```

* Here the returned function still has access to `count` even though `createCounter()` has already finished.

* Closures are useful for maintaining private state, creating function factories, callbacks and encapsulating data.

* A closure allows a function to preserve access to required variables without exposing those variables directly.

* The closure does not store a copy of the variable each time. It maintains access to the variable from its lexical environment.

```js
function createUserSession(userId) {
    let sessionActive = true;

    return {
        isActive() {
            return sessionActive;
        },

        logout() {
            sessionActive = false;
        }
    };
}

const session = createUserSession(101);
console.log(session.isActive()); // true
session.logout();
console.log(session.isActive()); // false
```

* Here `sessionActive` cannot be directly accessed from outside, but the returned methods can access and modify it through the closure.

* Closures are powerful, but don't create unnecessary long-lived closures that keep large objects in memory. This can contribute to memory leaks when references are unintentionally retained.

# Arrays

* An array is an ordered collection of values stored under one variable.

* They are commonly used when we have a collection of related data such as users, products, orders, expenses, students etc.

## Creating an Array

* An array can contain multiple values and the values can be accessed using their index.

```js
const products = ["Laptop", "Mouse", "Keyboard"];
console.log(products);

//new array 

const students = []; // typeof array

const students = new Array(); //typeof object
```
* An array can contain different data types, but in real applications it is usually better to keep related data in a consistent structure.

## Indexing

* Index = how far away from the beginning.( Offset from the beginning)

* Arrays are **zero based-indexing**, so the first value starts from index `0`.

* It is used to access or change a particular value in an array.

* **Even** if we are using **const**  array supports** elements update but **not reassigning**.

```js
const products = ["Laptop", "Mouse", "Keyboard"];

console.log(products[0]); // Laptop
console.log(products[2]); // Keyboard
```
Ex: Updating a product name

```js
const products = ["Laptop", "Mouse", "Keyboard"];

products[1] = "Wireless Mouse";

console.log(products);
```
* `array.length` gives the number of elements in the array.

* In real applications, ApIs return collections of data.

* eg:
```js
const expenses = [
    { employee: "Arun", amount: 500 },
    { employee: "Priya", amount: 1200 },
    { employee: "Kumar", amount: 800 }
];
for (const expense of expenses) {
    console.log(expense.employee);
}
```

## `push()`

* Adds one or more elements to the end of an array.
*  It returns a **new length of array**.
Ex: Adding a new order to an order list

```js
const orders = ["ORD101", "ORD102"];
orders.push("ORD103");
console.log(orders);
```

* `push()` changes the original array.
* Useful when new data needs to be added to the end of a collection.

## `pop()`

* Removes the last element from an array.
* Returns the **element that was removed**
Eg: Processing a stack of pending tasks

```js
const tasks = ["Task A", "Task B", "Task C"];

const task = tasks.pop();
console.log(task);  // Task C
console.log(tasks); // ["Task A", "Task B"]
```

* `pop()` changes the original array.
* It returns the removed element.

## `shift()`

* It removes the first element from an array.
Example: Processing the first customer in a queue

```js
const customerQueue = ["Customer A", "Customer B", "Customer C"];

const customer = customerQueue.shift();
console.log(customer);       // Customer A
console.log(customerQueue);  // ["Customer B", "Customer C"]
```

* Useful when implementing a simple queue.
* It changes the original array.

## `unshift()`

* It adds one or more elements to the beginning of an array.
Eg: Adding an urgent support ticket to the front of a queue

```js
const tickets = ["Ticket 102", "Ticket 103"];

tickets.unshift("Urgent Ticket 101");
console.log(tickets);
```

* Useful when a new item needs to be placed at the beginning.
* It changes the original array.

## `splice()`

* It is used to add, remove, or replace elements at a specific position.

The basic structure is:
`array.splice(start, deleteCount, items);`

Eg:

```js

//Remove
const orders = ["ORD101", "ORD102", "ORD103"];
orders.splice(1, 1);
console.log(orders);

// Here:
// - `1` → start from index 1
// - `1` → remove one element

//ADD
const orders = ["ORD101", "ORD102", "ORD103"];
orders.splice(1, 0, "ORD105");
console.log(orders);

//Replace
const orders = ["ORD101", "ORD102", "ORD103"];
orders.splice(1, 1, "ORD105");
console.log(orders);

```
* `splice()` modifies the original array.
* Useful when we need to change the array at a specific position.

## `slice()`
* It creates a new array containing a portion of the original array.

* It returns copied portion.

```js
const orders = ["ORD101", "ORD102", "ORD103", "ORD104"];

const recentOrders = orders.slice(1,2); //end is excluded
console.log(recentOrders);
```

* `slice()` → creates a new portion of an array.
* `splice()` → changes the original array.

**Example**:
* splice() : Removing an item from the locl cart

* slice() : Displaying only the first 10 products among the product complete list.

## `map()` "transform every element"

* It creates a new array by transforming every element of the original array.

Eg: Getting product names from product objects

```js
const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 1000 },
    { id: 3, name: "Keyboard", price: 2000 }
];

const productNames = products.map(product => product.name);
console.log(productNames);
```

O/P:
`["Laptop", "Mouse", "Keyboard"]`

* Use `map()` when we want to transform every item.
* It returns a new array.
* The original array is not changed.

Ex: Adding tax to product prices

```js
const prices = [1000, 2000, 3000];
const pricesWithTax = prices.map(price => price * 1.18);
console.log(pricesWithTax);
```

## `filter()` "keep elements that satisfy consdition"

* creates a new array containing only the elements that satisfy a condition.

Ex: Getting high-value orders

```js
const orders = [
    { id: 101, amount: 500 },
    { id: 102, amount: 1500 },
    { id: 103, amount: 800 },
    { id: 104, amount: 2000 }
];

const highValueOrders = orders.filter(order => order.amount > 1000);
console.log(highValueOrders);
```

* Use `filter()` when we want to select some items from an array.
* It does not modify the original array.
* The callback must produce a truthy/falsy result.

## `reduce()` "combine elements into one result"

* It is used when we want to combine all array elements into a single result.

Ex: Calculating total order amount
```js
const orders = [
    { id: 101, amount: 500 },
    { id: 102, amount: 1500 },
    { id: 103, amount: 800 }
];

const total = orders.reduce((sum,order)=>sum + order.amount, 0);
console.log(total);
```

Here:
`sum` → accumulated result
`order` → current item
`0` → initial value

* Useful for calculating totals, counts, averages, grouping values etc.
* Unlike `map()` and `filter()`, the final result does not have to be an array.

- `map()` → transform every item
- `filter()` → select some items
- `reduce()` → combine items into one result

# Objects

* Objects are used to represent a real-world entity using properties and values.

Ex:A user has a name, email and role.

```js
const user = {
    name: "Gowtham",
    email: "gowtham@example.com",
    role: "Developer"
};
```

## Properties

*  Properties represent the data belonging to an object.

```js
console.log(user.name);
console.log(user["email"]);
```

* Properties can also be accessed using bracket notation.
* Bracket notation is useful when the property name is stored dynamically.

```js
const property = "email";
console.log(user[property]);
```

## Updating and Adding Properties

```js
const user = {
    name: "Gowtham",
    role: "Developer"
};

user.role = "Full Stack Developer";
user.experience = 1;
console.log(user);
```

* Objects are commonly used to represent API data, database records, users, products, orders etc.

## Dynamic property access

```js
function updateField(user,field, value){
    user[field] = value;
}

updateField(user,"role","tester");
```


## Methods

* A method is a function stored as a property of an object.

Ex:

```js
const expense = {
    employee: "Gowtham",
    amount: 2500,
    status: "Pending",

    approve() {
        this.status = "Approved";
        console.log(`${this.employee}'s expense was approved`);
    }
};

expense.approve();
```

Here `login()` is a method of the `user` object.

* **this** is commonly refers to the object that called the function.

* Methods are useful when an action is related to the object.

## Nested Objects

* An object can contain another object as a property.

Ex: User profile information

```js
const user = {
    name: "Gowtham",
    email: "gowtham@example.com",

    address: {
        city: "Coimbatore",
        country: "India"
    }
};

console.log(user.address.city);
```

* Nested objects are commonly found in API responses and database data.
* They allow related information to be grouped together.

## Deleting

```js
const employee = {
    name: "Gowtham",
    role: "Developer",
    salary: 45000
};

delete employee.salary;
console.log(employee);
```

* But deleting an property in real applications to semd needed object details frontend is not the way.

* Instead we can do this:

```js
const employee = {
    name: "Gowtham",
    role: "Developer",
    salary: 45000,
    password: "secret"
};

const publicEmployee = {
    name: employee.name,
    role: employee.role
};
```
* To check whether a property exists in object use **in** operator.

## Nested Objects

```js
const employee = {
    id: 101,
    name: "Gowtham",
    role: "Developer",

    department: {
        name: "Development",
        code: "DEV"
    },

    address: {
        city: "Tiruppur",
        state: "Tamil Nadu"
    }
};

console.log(employee.department.code);

```

* Object inside object = nested object.

* Array inside object = collection belonging to that object.

* Objects inside an array = multiple real-world records.

## Destructuring

* Destructuring is used to extract values from objects or arrays directly into variables.

Ex:

```js
const expense = {
    id: 501,
    employee: "Gowtham",
    category: "Travel",
    amount: 2500,
    status: "Pending"
};

const {employee, amount, status: approval} = expense;

console.log(employee);
console.log(amount);
console.log(approval);
```

* Destructuring is very common when working with API responses and function parameters.

Ex:

```js
function showEmployee({ name, role }) {
    console.log(name);
    console.log(role);
}

const employee = {
    name: "Gowtham",
    role: "Developer"
};

showEmployee(employee);
```

* uses for " From object -> take the values needed -> create convnient varibles.

## `Object.keys()`

* It returns an array containing the object's property names.

```js
const user = {
    name: "Gowtham",
    role: "Developer",
    active: true
};

console.log(Object.keys(user));
```

O/P:
`["name", "role", "active"]`

* Useful when we need to dynamically inspect or iterate through an object's properties.

## `Object.values()`

* It returns an array containing the object's property values.

```js
const user = {
    name: "Gowtham",
    role: "Developer",
    active: true
};

console.log(Object.values(user));
```

## `Object.entries()`

* It returns an array containing `[key, value]` pairs.

```js
const user = {
    name: "Gowtham",
    role: "Developer"
};

console.log(Object.entries(user));
```

Ex: Displaying user information dynamically

```js
for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}
```

* `Object.keys()` → keys
* `Object.values()` → values
* `Object.entries()` → key + value pairs

# Strings

* Strings are used to represent text.

* Strings are **immutable**, methods don't directly modify the original string, neeed to store the returned value.

* Examples include usernames, emails, names, passwords, API messages, URLs, search text, status messages, etc

```js
const userName = "Gowtham";
const email = "gowtham@example.com";
```

* **String Interpolation** including variables inside a string.

## String Length

* `length` returns the number of characters in a string.

Ex: Checking minimum password length

```js
if (password.length < 8) {
    console.log("Password must contain at least 8 characters");
}
```

## String Methods

* String methods are used to process and manipulate text.

Example:

```js
const email = "  GOWTHAM@EXAMPLE.COM  ";
const cleanedEmail = email.trim().toLowerCase();
console.log(cleanedEmail);
```

Common methods:

`trim()` : removes whitespace from beginning and end

`toUpperCase()` :  converts to uppercase

`toLowerCase()` : converts to lowercase

`includes()` :  checks whether text exists
```js
const productName = "Wireless Keyboard";

if (productName.toLowerCase().includes("keyboard")) {
    console.log("Keyboard product found");
}
```

`startsWith()` : checks beginning

`endsWith()` : checks ending

```js
const email = "user@gmail.com";

if (email.endsWith("@gmail.com")) {
    console.log("Gmail account");
}
```

`indexof()` : retunrs the position where a pieceof text starts if not returns '-1'.

`replace()` : finds text and returns a new string with the replacement, for first matching occurence & `replaceall()` for every matching occurence.

```js
const username = "Gowtham Kumar";
const formattedUsername = username.replaceAll(" ", "_");
console.log(formattedUsername);
```

`split()` : converts a string into an array
 based on separator.

```js
const skills = "Js, Python, Html";
const skillArray = skills.split(",");
console.log(skillArray);
```

`join()` : converts the array into string.

```js
const skills = ["JS", "Node.js", "Express"];
const result = skills.join(", ");
console.log(result);
```
## Template Literals

* It use backticks and allow variables or expressions to be inserted using `${}`.

```js
const customer = "Gowtham";
const amount = 1500;

console.log(`Hello ${customer}, your order amount is ₹${amount}`);
```

* Useful for dynamically creating messages.
* Commonly used when displaying API/database data in the UI.

## Concatenation

* Concatenation means joining strings together.

```js
const firstName = "Gowtham";
const lastName = "G";

const fullName = firstName + " " + lastName;
```

* Template literals are usually easier to read when the string contains multiple values.

## Escaping

* Some characters have special meaning inside strings. A backslash `\` is used to escape them.

```js
const message = "User said \"Hello\"";

console.log(message);
```

Other common escape sequences:

 - \n  new line
 - \t  tab
 - \"  double quote
 - \'  single quote
 - \\  backslash

Ex:

```js
console.log("Order Details:\nLaptop\nMouse\nKeyboard");
```

# Numbers & Math

* JavaScript uses the `Number` type for normal numeric values such as prices, quantities, marks, percentages etc.

```js
const price = 1500;
const quantity = 3;

const total = price * quantity;
```

## `parseInt()`

* converts a value into an integer.

Example: Converting user input

```js
const quantity = parseInt(
    document.querySelector("#quantity").value,
    10
);
```

* The `10` specifies that the number should be interpreted as decimal, base.

* Useful when receiving integer values as strings from forms, URLs or APIs.

## `parseFloat()`

* converts a value into a number that can contain decimal values.

Ex:
```js
const price = "1499.50";
const numericPrice = parseFloat(price);
console.log(numericPrice);
```

* Useful for price, tax, measurements etc.

## `toFixed()`

* Formats a number to a specific number of decimal places.

Ex: Displaying an invoice amount

```js
const amount = 1499.567;
console.log(amount.toFixed(2));
```

Result: `1499.57`

* Note: `toFixed()` returns a **string**.

```js
const amount = 1499.567;
const formattedAmount = amount.toFixed(2);
console.log(typeof formattedAmount); // string
```
**ParseInt, ParseFloat : conversion**
**toFixed : formatting**

## `isNaN()`

* checks whether a value is `NaN` (Not a Number).

Ex: Validating numeric input

```js
const amount = Number("abc");

if (Number.isNaN(amount)) {
    console.log("Invalid amount");
}
```

* Useful when converting user input and checking whether the conversion produced a valid number.

`Number.isNaN()` is generally preferred when we specifically want to check whether a value is the numeric `NaN`.

## `Math` Methods

* The `Math` object provides commonly used mathematical operations.

Ex: Generating a random OTP digit

```js
const otpDigit = Math.floor(Math.random() * 10);
console.log(otpDigit);
```

Common methods:

`Math.round()` → rounds to nearest integer

`Math.floor()` → rounds down

`Math.ceil()` → rounds up

`Math.max()` → returns largest value

`Math.min()` → returns smallest value

`Math.random()` → generates a random number between `0` and less than `1`

Ex: Finding the highest mark

```js
const marks = [78, 92, 85, 67];
const highestMark = Math.max(...marks);
console.log(highestMark);
```

# Dates & Times

* JavaScript uses the `Date` object to work with dates and times (i.e) **representing a specific point in time.**

* Dates are commonly used for order dates, payment dates, login times, deadlines, created dates etc.

## Creating a Date

```js
const currentDate = new Date();
console.log(currentDate); //2026-09-22T09:24:23.945Z
```

* This creates a `Date` object containing the current date and time.

Ex: Recording when an order was created

```js
const order = {
    id: "ORD101",
    amount: 1500,
    createdAt: new Date()
};

console.log(order);
```

## Date Methods

`getFullYear()` → gets year

`getMonth()` → gets month, starts from 0

`getDate()` → gets day of the month

`getDay()` → gets day of the week

`getHours()` → gets hour

`getMinutes()` → gets minutes

Ex:

```js
const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
```

Note: `getMonth()` returns a zero-based month.

`0` → January
`1` → February
...
`11` → December

## Formatting Dates

* It can be used to display a date in a human-readable format.

Example:
```js
const orderDate = new Date();

console.log(
    orderDate.toLocaleDateString("en-IN")
); //22/9/2026

const formatted = orderDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
});

console.log(formatted); //22 Sept 2026
```

* Useful when displaying dates to users.
* The exact output depends on the locale.

## Timestamps

* represents a date/time as the number of milliseconds since January 1, 1970 UTC.

Ex: Measuring how long an operation takes

```js
const startTime = Date.now();

// some operation

const endTime = Date.now();

console.log(`Operation took ${endTime - startTime} ms`);
```

* Timestamps are useful for comparing dates and measuring elapsed time.
* APIs and databases commonly store dates in standardized formats or timestamps.

**current date = new Date(); timestamp = Date.now();** 


## Comparing Dates

* Dates can be compared using their timestamp values.

Ex: Checking whether a payment deadline has passed

```js
const deadline = new Date("2026-09-20");
const currentDate = new Date();

if (currentDate > deadline) {
    console.log("Payment deadline has passed");
} else {
    console.log("Payment is still pending");
}
```

* Useful for deadlines, expiry dates, due dates, appointments etc.

* Be careful with time zones when working with real-world applications across different countries.

# 13. Error Handling

* Error handling is used to prevent the application from breaking when
something unexpected happens.

* **Error** when they are **uncaught** break the flow of the program.

Main concepts:
-   `try`
-   `catch`
-   `finally`
-   `throw`
-   Custom errors

## try

* `try` contains code that may produce an error.

* In a real application, this is useful around operations such as API calls, JSON parsing, file operations, or database operations.

## catch

* `catch` handles the error when something fails.

* The error object normally gives useful information such as:

``` js
error.message
error.name
error.stack
```

## finally

* `finally` runs whether the operation succeeds or fails.

* A common use is cleanup, such as hiding a loading indicator after an API
request.

## throw

* `throw` is used when our application detects an invalid condition and
wants to stop the current operation with an error.

* For example, an API may return a response successfully, but the
application may still consider it invalid because required data is
missing.

## Custom errors

* Custom errors are useful when a larger application needs to distinguish
between different types of failures.

For example:
-   validation error
-   authentication error
-   authorization error
-   network error


# 14. Events

Events are actions that happen in an application.

Examples:

-   user clicks a button
-   user types into an input
-   user submits a form
-   user selects an option
-   keyboard key is pressed

## Event listeners

`addEventListener()` connects an event with application logic.

## Real application example --- Expense approval form

Imagine an expense management application.

A user enters an expense amount and submits the form.

The application should:

1.  listen for form submission
2.  prevent the browser's default page reload
3.  read the form values
4.  validate the amount
5.  process the expense

``` html
<form id="expenseForm">
    <input
        id="description"
        type="text"
        placeholder="Expense description"
    >

    <input
        id="amount"
        type="number"
        placeholder="Amount"
    >

    <button type="submit">Submit Expense</button>

    <p id="message"></p>
</form>
```

``` js
const expenseForm = document.querySelector("#expenseForm");
const message = document.querySelector("#message");

expenseForm.addEventListener("submit", function (event) {
    // Stop normal browser form submission
    event.preventDefault();

    const description =
        document.querySelector("#description").value.trim();

    const amount =
        Number(document.querySelector("#amount").value);

    if (!description) {
        message.textContent = "Expense description is required";
        return;
    }

    if (!amount || amount <= 0) {
        message.textContent = "Enter a valid expense amount";
        return;
    }

    const expense = {
        description,
        amount,
        status: "Pending"
    };

    console.log("Expense submitted:", expense);

    message.textContent = "Expense submitted successfully";
});
```

The event listener is the connection between the user's action and application logic.

## Event object

The browser passes an event object to the event handler.

``` js
expenseForm.addEventListener("submit", function (event) {
    console.log(event);
});
```

Useful properties include:

``` js
event.target
event.currentTarget
event.type
```

### `event.target`

* The actual element where the event originated.

### `event.currentTarget`

* The element whose event listener is currently running.

* This distinction becomes important when working with event bubbling and
delegation.

## Event bubbling

* When an event happens on a child element, the event can travel upward
through its parent elements.

* For example, an expense row may contain buttons:

``` html
<div id="expenseList">
    <div class="expense">
        <span>Travel Expense</span>

        <button class="approve-btn">
            Approve
        </button>

        <button class="reject-btn">
            Reject
        </button>
    </div>
</div>
```

* If the button is clicked, the event can move upward:

``` text
Approve button
      ↓
Expense row
      ↓
Expense list
      ↓
Document
      ↓
Window
```

This is event bubbling.

## Event delegation

* Event delegation uses bubbling intentionally.

* Instead of adding a listener to every button, we add one listener to the
parent.

* This is especially useful when elements are created dynamically.

## Real application example --- Expense approval list

``` js
const expenseList = document.querySelector("#expenseList");

expenseList.addEventListener("click", function (event) {
    const clickedElement = event.target;

    if (clickedElement.classList.contains("approve-btn")) {
        const expenseRow = clickedElement.closest(".expense");

        console.log("Approving expense:", expenseRow);
        approveExpense(expenseRow);
    }

    if (clickedElement.classList.contains("reject-btn")) {
        const expenseRow = clickedElement.closest(".expense");

        console.log("Rejecting expense:", expenseRow);
        rejectExpense(expenseRow);
    }
});

function approveExpense(expenseRow) {
    expenseRow.dataset.status = "Approved";
    expenseRow.querySelector(".approve-btn").disabled = true;

    console.log("Expense approved");
}

function rejectExpense(expenseRow) {
    expenseRow.dataset.status = "Rejected";
    expenseRow.querySelector(".reject-btn").disabled = true;

    console.log("Expense rejected");
}
```

### Why delegation is useful

Suppose the application initially has 20 expenses.

Later, JavaScript loads 100 more expenses from an API.

With event delegation, we still need only:

``` js
expenseList.addEventListener("click", ...);
```

We don't need to create a separate listener for every new button.

### Where to use

Good use cases:

-   tables
-   lists
-   shopping carts
-   notification lists
-   dynamically generated buttons
-   dashboards

### Common mistake

Do not assume:

``` js
event.target
```

is always the button you expect.

If the button contains an icon or span:

``` html
<button class="approve-btn">
    <span>Approve</span>
</button>
```

the target may be the `<span>`.

Using:

``` js
event.target.closest(".approve-btn")
```

can be more robust when appropriate.

# 15. DOM Manipulation

DOM stands for **Document Object Model**.

The browser represents HTML as objects that JavaScript can read and
modify.

Main concepts:

-   `getElementById`
-   `querySelector`
-   `createElement`
-   `innerHTML`
-   `classList`
-   attributes

## Real application example --- Student management dashboard

Imagine an application that receives students from an API and displays
them in a table/list.

The application needs to:

1.  find the container
2.  create elements
3.  insert student data
4.  add classes
5.  set attributes
6.  update the UI when data changes

``` html
<div id="studentDashboard">
    <h2>Students</h2>

    <div id="studentList"></div>
</div>
```

``` js
const studentList = document.getElementById("studentList");

const students = [
    {
        id: 101,
        name: "Arun",
        department: "CSE"
    },
    {
        id: 102,
        name: "Priya",
        department: "ECE"
    },
    {
        id: 103,
        name: "Kumar",
        department: "IT"
    }
];

function renderStudents(students) {
    // Clear previous UI
    studentList.innerHTML = "";

    students.forEach((student) => {
        const studentCard = document.createElement("div");

        studentCard.classList.add("student-card");

        studentCard.setAttribute(
            "data-student-id",
            student.id
        );

        studentCard.innerHTML = `
            <h3>${student.name}</h3>
            <p>Department: ${student.department}</p>
            <button class="view-btn">View</button>
        `;

        studentList.appendChild(studentCard);
    });
}

renderStudents(students);
```

## `getElementById`

Useful when selecting an element by a unique ID.

``` js
const studentList = document.getElementById("studentList");
```

Since an ID should be unique, this is useful when the application has a
known single element.

## `querySelector`

Uses CSS selector syntax.

``` js
const dashboard = document.querySelector("#studentDashboard");

const firstStudent =
    document.querySelector(".student-card");
```

It returns the first matching element.


## `createElement`

Creates an element through JavaScript.

``` js
const studentCard = document.createElement("div");
```

Creating elements programmatically is useful when rendering dynamic API
data.

## `innerHTML`

Used to read or replace HTML inside an element.

In the example:

``` js
studentCard.innerHTML = `
    <h3>${student.name}</h3>
    <p>Department: ${student.department}</p>
    <button class="view-btn">View</button>
`;
```

This is convenient when generating known HTML structures.

### Security warning

Be careful when putting untrusted user input directly into `innerHTML`.

For example, do not blindly do:

``` js
element.innerHTML = userInput;
```

For plain user-controlled text, prefer:

``` js
element.textContent = userInput;
```

## `classList`

Used to manage CSS classes.

``` js
studentCard.classList.add("student-card");
```

Other useful methods:

``` js
studentCard.classList.remove("student-card");

studentCard.classList.toggle("selected");

studentCard.classList.contains("selected");
```

A common application pattern:

``` js
button.addEventListener("click", () => {
    studentCard.classList.toggle("selected");
});
```

JavaScript controls the state, while CSS controls the visual appearance.


## Attributes

HTML attributes contain additional information about elements.

For example:

``` html
<div data-student-id="101"></div>
```

JavaScript can manage attributes:

``` js
studentCard.setAttribute("data-student-id", student.id);

const id = studentCard.getAttribute("data-student-id");

studentCard.removeAttribute("data-student-id");
```

For custom application metadata, `data-*` attributes are commonly
useful.


# 16. BOM --- Browser Object Model

BOM allows JavaScript to interact with the browser environment.

The main object is:

``` js
window
```

DOM mainly deals with the document/page.

BOM mainly deals with the browser environment.


## Real application example --- Login and browser navigation

Imagine a web application where:

1.  a user logs in
2.  the application stores information
3.  the application redirects the user
4.  the application checks browser information
5.  the application may ask for confirmation before leaving



## `window`

`window` represents the browser window.

Many browser APIs are available through it.

``` js
console.log(window.innerWidth);
console.log(window.innerHeight);
```

For example, an application can react to browser resizing:

``` js
window.addEventListener("resize", () => {
    console.log("Viewport width:", window.innerWidth);
});
```


## `alert`

Displays a browser dialog.

``` js
alert("Your session has expired.");
```

It can be useful for simple demonstrations or basic applications, but
modern production applications often use custom notification components
because browser dialogs interrupt the user's workflow.


## `confirm`

Useful when an action needs confirmation.

Real application example:

``` js
function deleteStudent(studentId) {
    const confirmed = confirm(
        "Are you sure you want to delete this student?"
    );

    if (!confirmed) {
        console.log("Delete cancelled");
        return;
    }

    console.log("Deleting student:", studentId);

    // API call would happen here
}

deleteStudent(101);
```

`confirm()` returns:

``` text
true  → user selected OK
false → user selected Cancel
```


## `prompt`

Gets input from the user.

For example, an admin application could ask for a department code:

``` js
const departmentCode =
    prompt("Enter department code:");

if (departmentCode) {
    console.log(
        "Searching department:",
        departmentCode
    );
}
```

`prompt()` returns a string or `null` if the user cancels.

In modern production UIs, a custom form/modal is often preferred over
`prompt()`.


## `location`

Provides information about the current URL and allows navigation.

Real application example:

``` js
console.log("Current page:", location.href);
```

After successful login:

``` js
function loginSuccess() {
    location.href = "/dashboard.html";
}
```

This is commonly used for navigation and redirects.


## `navigator`

Provides information and browser-related APIs.

For example:

``` js
console.log("Language:", navigator.language);
console.log("Online:", navigator.onLine);
```

An application can react to online/offline state:

``` js
window.addEventListener("online", () => {
    console.log("Internet connection restored");
});

window.addEventListener("offline", () => {
    console.log("Internet connection lost");
});
```

This can be useful in applications that need to warn users when network
connectivity changes.

## `screen`

Provides information about the user's physical screen.

``` js
console.log("Screen width:", screen.width);
console.log("Screen height:", screen.height);
```

Do not confuse:

``` js
screen.width
```

with:

``` js
window.innerWidth
```

`screen.width` describes the screen.

`window.innerWidth` describes the browser viewport.

For responsive UI, CSS media queries are normally preferred.


# 17. Timers

Timers allow JavaScript to schedule code.

Main concepts:

-   `setTimeout`
-   `setInterval`
-   `clearTimeout`
-   `clearInterval`

Timers are asynchronous scheduling mechanisms. They do not mean that
JavaScript creates a separate thread that runs the callback immediately.


## `setTimeout`

Runs a function once after a delay.

## Real application example --- Auto-hide notification

Suppose a web application displays:

``` text
Expense approved successfully
```

The notification should disappear after 3 seconds.

``` js
function showNotification(message) {
    const notification =
        document.querySelector("#notification");

    notification.textContent = message;
    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000);
}

showNotification("Expense approved successfully");
```

The important idea is:

``` text
Show notification
       ↓
Wait approximately 3 seconds
       ↓
Hide notification
```

## `clearTimeout`

Sometimes we need to cancel a scheduled operation.

Example: a search box waits for the user to stop typing before making an
API request.

``` js
let searchTimer;

function searchStudents(searchText) {
    clearTimeout(searchTimer);

    searchTimer = setTimeout(() => {
        console.log("Searching API for:", searchText);

        // API request would happen here
    }, 500);
}
```

Now if the user types:

``` text
A
Ar
Aru
Arun
```

the previous timeout is cancelled each time.

Only after the user stops typing for approximately 500ms does the search
run.

This pattern is called **debouncing**.

It is commonly used for:

-   search boxes
-   autocomplete
-   filtering
-   resize handlers
-   API requests triggered by typing


## `setInterval`

Runs a function repeatedly at approximately the specified interval.

## Real application example --- Dashboard polling

Suppose an admin dashboard periodically checks whether new expense
requests are available.

``` js
let pollingTimer;

async function checkPendingExpenses() {
    try {
        const response =
            await fetch("/api/expenses/pending");

        if (!response.ok) {
            throw new Error("Failed to fetch expenses");
        }

        const expenses = await response.json();

        console.log(
            "Pending expenses:",
            expenses.length
        );

        updateExpenseCount(expenses.length);

    } catch (error) {
        console.error(
            "Polling failed:",
            error.message
        );
    }
}

function updateExpenseCount(count) {
    const element =
        document.querySelector("#expenseCount");

    element.textContent = count;
}

// Check immediately
checkPendingExpenses();

// Then check periodically
pollingTimer = setInterval(
    checkPendingExpenses,
    30000
);
```

This checks the server approximately every 30 seconds.


## `clearInterval`

When the application no longer needs polling, stop it.

``` js
clearInterval(pollingTimer);
```

For example, if the user logs out:

``` js
function logout() {
    clearInterval(pollingTimer);

    location.href = "/login.html";
}
```

This prevents unnecessary background work.


# Timer decision

Use:

``` js
setTimeout()
```

when the operation should happen **once after a delay**.

Example:

``` text
Show message → wait 3 seconds → hide message
```

Use:

``` js
setInterval()
```

when something needs to happen **repeatedly**.

Example:

``` text
Check server → wait 30 seconds → check again
```

Use:

``` js
clearTimeout()
```

to cancel a timeout.

Use:

``` js
clearInterval()
```

to stop an interval.

# Important practical mistakes with timers

## 1. Forgetting to clear intervals

This can cause unnecessary work after a page/component is no longer
needed.

``` js
const timer = setInterval(() => {
    // work
}, 1000);

// Later
clearInterval(timer);
```

## 2. Assuming exact timing

This:

``` js
setTimeout(callback, 1000);
```

means approximately **not before the callback can be scheduled after
1000ms**, not that it will execute at exactly 1000ms.

The callback waits for the JavaScript event loop to be able to run it.

## 3. Creating multiple intervals accidentally

Bad pattern:

``` js
function startPolling() {
    setInterval(checkServer, 5000);
}
```

If `startPolling()` is called five times, you may create five intervals.

A safer application pattern is to keep the timer ID and manage its
lifecycle.

``` js
let pollingTimer = null;

function startPolling() {
    if (pollingTimer !== null) {
        return;
    }

    pollingTimer = setInterval(
        checkServer,
        5000
    );
}

function stopPolling() {
    clearInterval(pollingTimer);
    pollingTimer = null;
}
```

This prevents accidentally starting duplicate polling timers.

# ES6+ Features

- `let` and `const` are modern ways to create variables. `let` is used when the value needs to change, and `const` is used when the variable should not be reassigned. Both are block scoped, so they are safer than `var`.

```js
let status = "Pending";
status = "Approved";

const expense = {
    amount: 2500,
    status: "Pending"
};

expense.status = "Approved";
```

`const` does not make an object completely unchangeable. It only prevents assigning a new value to the variable.

- Arrow functions are a shorter way to write function expressions. They are commonly used for callbacks like `map()`, `filter()`, and event-related logic.

```js
const expenses = [
    { employee: "Arun", amount: 500 },
    { employee: "Priya", amount: 1500 }
];

const pendingAmounts = expenses.map(expense => expense.amount);
```

They are useful when the function is small and simple. Normal functions are still useful when you need their own `this` behavior or other normal-function features.

- Template literals use backticks and `${}` to put variables or expressions directly inside a string.

```js
const employee = "Gowtham";
const amount = 2500;

const message = `${employee} submitted an expense of ₹${amount}`;
console.log(message);
```

They are useful when creating dynamic messages, HTML text, logs, API messages, and UI content.

- Spread syntax `...` expands values. It is commonly used to copy or combine arrays and objects without directly changing the original value.

```js
const oldExpense = {
    employee: "Gowtham",
    amount: 2500
};

const updatedExpense = {
    ...oldExpense,
    status: "Approved"
};

console.log(updatedExpense);
```

Here the properties of `oldExpense` are copied into a new object and `status` is added.

- Rest syntax `...` collects multiple values into one array. It is mainly used when a function can receive any number of arguments.

```js
function calculateTotal(...amounts) {
    return amounts.reduce((total, amount) => total + amount, 0);
}

console.log(calculateTotal(500, 1200, 800));
```

Spread expands values, while rest collects values.

- Destructuring extracts values from arrays or objects into variables. It is useful when working with API responses and objects with many properties.

```js
const employee = {
    id: 101,
    name: "Gowtham",
    role: "Developer"
};

const { name, role } = employee;

console.log(name);
console.log(role);
```

Instead of repeatedly writing `employee.name` and `employee.role`, the required values are directly available.

- Modules allow JavaScript code to be separated into different files. This makes large applications easier to maintain because each file can handle a specific responsibility.

```js
// employee.js
export const employee = {
    name: "Gowtham",
    role: "Developer"
};
```

```js
// app.js
import { employee } from "./employee.js";

console.log(employee.name);
```

Modules use `export` to make values available from a file and `import` to use those values in another file.

# Modules

- Named exports are used when a file needs to export multiple values.

```js
// calculation.js
export const taxRate = 0.18;

export function calculateTax(amount) {
    return amount * taxRate;
}
```

```js
// app.js
import { calculateTax, taxRate } from "./calculation.js";

console.log(calculateTax(2500));
console.log(taxRate);
```

The imported name normally matches the exported name.

- A default export is used when a module has one main value or functionality. The importing file can give it any name.

```js
// api.js
export default function getExpenses() {
    return ["Travel", "Food", "Office"];
}
```

```js
// app.js
import getExpenses from "./api.js";

console.log(getExpenses());
```

A file can have one default export, while it can have multiple named exports.

- In the browser, modules can be loaded using `type="module"`.

```html
<script type="module" src="./app.js"></script>
```

This allows `import` and `export` to work between JavaScript files.

- In a real project, applications usually contain many modules such as API logic, components, utilities, and configuration. A module bundler/build tool processes these files and prepares the application for development and production.

```text
src/
├── api/
│   └── expenseApi.js
├── components/
│   └── ExpenseList.js
├── utils/
│   └── formatCurrency.js
└── app.js
```

Webpack and Vite are tools used in JavaScript projects for development and building. Vite provides a fast development server and production build process. Webpack is a more configurable bundler that can process modules and assets.

# JSON

- JSON means JavaScript Object Notation. It is a text format commonly used for sending and storing structured data. APIs commonly send JSON between frontend and backend.

```json
{
    "id": 101,
    "name": "Gowtham",
    "role": "Developer"
}
```

JSON looks similar to a JavaScript object, but JSON is text data and follows stricter syntax.

- `JSON.parse()` converts a JSON string into a JavaScript value.

```js
const response = '{"id":101,"name":"Gowtham","role":"Developer"}';

const employee = JSON.parse(response);

console.log(employee.name);
```

This is commonly used when JSON data is received from an API.

- `JSON.stringify()` converts a JavaScript value into a JSON string.

```js
const employee = {
    id: 101,
    name: "Gowtham",
    role: "Developer"
};

const jsonData = JSON.stringify(employee);

console.log(jsonData);
```

This is commonly used when sending data to an API or storing structured data as text.

- JSON can be used with APIs to send data from frontend to backend and receive data back.

```js
const employee = {
    name: "Gowtham",
    role: "Developer"
};

fetch("/api/employees", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(employee)
});
```

The JavaScript object is converted to JSON text before being sent.

- A shallow copy copies only the first level of an object. Nested objects are still referenced from the original object.

```js
const employee = {
    name: "Gowtham",
    department: {
        name: "Development"
    }
};

const copy = { ...employee };

copy.name = "Arun";
copy.department.name = "Testing";

console.log(employee.name);
console.log(employee.department.name);
```

The top-level `name` is independent, but `department` is still shared.

- A deep copy creates an independent copy of nested data. For simple JSON-compatible data, `JSON.stringify()` followed by `JSON.parse()` can be used.

```js
const employee = {
    name: "Gowtham",
    department: {
        name: "Development"
    }
};

const copy = JSON.parse(JSON.stringify(employee));

copy.department.name = "Testing";

console.log(employee.department.name);
console.log(copy.department.name);
```

This works for common JSON-compatible data, but it is not suitable for values such as functions, `undefined`, `BigInt`, `Date`, `Map`, and `Set`.

# Storage

* Browser storage is used when frontend applications need to keep small amounts of data in the user's browser.
* The main options are `localStorage`, `sessionStorage`, and cookies.
* `localStorage` keeps data even after the browser is closed, so it can be used for things like theme preference, language preference, or simple non-sensitive application settings.
* `sessionStorage` keeps data only for the current browser tab/session, so it can be useful for temporary form data or temporary UI state.
* Cookies are small pieces of data that are automatically sent with requests to matching domains, so they are commonly used for server-related sessions and authentication.
* `localStorage` and `sessionStorage` store values as strings, so objects and arrays need to be converted with `JSON.stringify()` before storing them.
* `JSON.parse()` is used when reading stored JSON back into a JavaScript object.
* Do not store passwords, secret API keys, or other sensitive information in `localStorage` because JavaScript running on the page can access it.

```js
const user = {
    name: "Gowtham",
    role: "Developer"
};

localStorage.setItem("user", JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem("user"));

console.log(storedUser.name);
```

* In a real expense application, `localStorage` could remember the user's selected dashboard view or theme, while actual expense records should normally come from the backend/database.
* `localStorage.setItem()` stores a value, `getItem()` reads it, `removeItem()` removes one item, and `clear()` removes all items for that storage area.

# Fetch / AJAX

* Frontend applications often need to communicate with a backend server without reloading the whole page.
* AJAX means making asynchronous requests from the browser to a server and updating the page with the result.
* `fetch()` is the modern browser API commonly used for HTTP requests.
* A frontend can use `fetch()` to request employee data, submit an expense, update an approval status, or delete a record through backend APIs.
* `fetch()` returns a Promise because the server response does not arrive immediately.
* The response body usually needs to be converted from JSON text into a JavaScript value using `response.json()`.

```js
fetch("/api/expenses")
    .then(response => response.json())
    .then(expenses => {
        console.log(expenses);
    })
    .catch(error => {
        console.error(error);
    });
```

* In a real expense approval application, the connection is usually frontend → fetch → backend API → database → backend response → frontend.
* `fetch()` does not automatically reject the Promise for HTTP errors like `404` or `500`, so checking `response.ok` is important.

```js
fetch("/api/expenses")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch expenses");
        }

        return response.json();
    })
    .then(expenses => {
        console.log(expenses);
    })
    .catch(error => {
        console.error(error.message);
    });
```

* `method` is used to specify the HTTP method such as `GET`, `POST`, `PUT`, `PATCH`, or `DELETE`.
* `headers` tell the backend what kind of data is being sent.
* `body` contains the data sent to the backend, and JSON request bodies normally use `JSON.stringify()`.

```js
const expense = {
    employee: "Gowtham",
    amount: 2500,
    category: "Travel"
};

fetch("/api/expenses", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(expense)
});
```

* `XMLHttpRequest` is the older API used for AJAX requests, and you may still see it in older JavaScript applications.
* `fetch()` is generally preferred in modern JavaScript because its Promise-based design works naturally with `.then()` and `async/await`.

# Promises

* A Promise is a JavaScript object that represents the eventual result of an asynchronous operation. Instead of waiting for the operation to finish and blocking the rest of the program, JavaScript can continue executing other code and handle the result when it becomes available.

* Promises are mainly used when an operation does not finish immediately, such as fetching data from a backend API, reading a file in Node.js, querying a database, waiting for a timer, or performing some other asynchronous operation.

* The main problem Promises solve is handling asynchronous results in a clean and predictable way. Older JavaScript commonly used callbacks:

```js
getUser(function(user) {
    getOrders(user.id, function(orders) {
        getPayment(orders, function(payment) {
            console.log(payment);
        });
    });
});
```

* When many asynchronous operations depend on each other, callbacks can become deeply nested. This is commonly called callback hell. Promises provide a way to represent each asynchronous operation as a value that can be handled later.

* A Promise has three states:

  * `pending` means the operation has not finished yet.
  * `fulfilled` means the operation completed successfully.
  * `rejected` means the operation failed.

* A Promise starts in the `pending` state. It can later move to either `fulfilled` or `rejected`. Once it becomes fulfilled or rejected, it is settled and cannot change to another state.

* You can create a Promise using the `Promise` constructor:

```js
const promise = new Promise((resolve, reject) => {
    // asynchronous operation

    if (success) {
        resolve(result);
    } else {
        reject(error);
    }
});
```

* `resolve()` means the asynchronous operation was successful and provides the result of that operation.

* `reject()` means the asynchronous operation failed and provides the reason for the failure.

* `resolve()` and `reject()` do not mean "return from the Promise". They settle the Promise. The actual result is received later using methods such as `.then()` or `await`.

* For example:

```js
const paymentPromise = new Promise((resolve, reject) => {
    const paymentSuccessful = true;

    if (paymentSuccessful) {
        resolve("Payment completed");
    } else {
        reject("Payment failed");
    }
});
```

* The Promise itself is not the final data. `paymentPromise` is an object representing a future result.

* `.then()` is used to handle a fulfilled Promise:

```js
paymentPromise.then((message) => {
    console.log(message);
});
```

* If the Promise resolves with `"Payment completed"`, the value is received by the callback passed to `.then()`.

* `.catch()` is used to handle rejection:

```js
paymentPromise.catch((error) => {
    console.log(error);
});
```

* `.finally()` runs after the Promise is settled, regardless of whether it was fulfilled or rejected:

```js
paymentPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Payment request finished");
    });
```

* `finally()` is useful for cleanup operations such as hiding a loading spinner, closing a connection, or resetting UI state.

* In a real expense management application, the frontend may send an expense request to the backend:

```js
fetch("/api/expenses/501")
    .then((response) => response.json())
    .then((expense) => {
        console.log(expense);
    })
    .catch((error) => {
        console.error(error);
    });
```

* `fetch()` returns a Promise. The HTTP request does not immediately return the final response object as normal synchronous code would. Instead, `fetch()` immediately gives JavaScript a Promise representing the future HTTP response.

* When the server responds, that Promise becomes fulfilled and the first `.then()` receives the response.

* `response.json()` also returns a Promise because converting the response body into JavaScript data is asynchronous.

* That is why two `.then()` calls are commonly used:

```js
fetch("/api/expenses/501")
    .then((response) => response.json())
    .then((expense) => {
        console.log(expense.amount);
    });
```

* The first `.then()` receives the HTTP response.

* `response.json()` starts reading and parsing the response body and returns another Promise.

* The second `.then()` waits for that Promise and receives the actual JavaScript object.

* Promise chaining works because `.then()` itself returns a new Promise.

```js
fetch("/api/expenses/501")
    .then((response) => response.json())
    .then((expense) => {
        return fetch(`/api/employees/${expense.employeeId}`);
    })
    .then((response) => response.json())
    .then((employee) => {
        console.log(employee.name);
    })
    .catch((error) => {
        console.error(error);
    });
```

* Returning a Promise from `.then()` causes the next `.then()` to wait for that Promise.

* This is one of the most important concepts in Promise chaining. The chain does not simply execute every callback immediately. Each step waits for the value or Promise returned by the previous step.

* If a `.then()` returns a normal value, the next `.then()` receives that value:

```js
Promise.resolve(100)
    .then((amount) => {
        return amount * 2;
    })
    .then((result) => {
        console.log(result); // 200
    });
```

* If a `.then()` returns another Promise, the next `.then()` waits for that Promise:

```js
Promise.resolve(100)
    .then((amount) => {
        return Promise.resolve(amount * 2);
    })
    .then((result) => {
        console.log(result); // 200
    });
```

* This behavior allows multiple asynchronous operations to be connected together without deeply nested callbacks.

* Errors inside a Promise chain can be handled using `.catch()`:

```js
fetch("/api/expenses/501")
    .then((response) => response.json())
    .then((expense) => {
        if (expense.amount > 100000) {
            throw new Error("Expense amount is too high");
        }

        return expense;
    })
    .then((expense) => {
        console.log("Valid expense:", expense);
    })
    .catch((error) => {
        console.error(error.message);
    });
```

* `throw` inside a `.then()` causes the returned Promise from that `.then()` to become rejected, so the error can be handled by a later `.catch()`.

* A very important point is that `fetch()` does not automatically reject its Promise for HTTP errors such as `404` or `500`. It generally rejects for network-level failures. Therefore, application code commonly checks `response.ok`:

```js
fetch("/api/expenses/501")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
    })
    .then((expense) => {
        console.log(expense);
    })
    .catch((error) => {
        console.error(error);
    });
```

* This distinction is important in real applications because receiving an HTTP response does not necessarily mean the API operation was successful.

* Promises are especially useful when multiple asynchronous operations are independent and can run at the same time.

```js
const employeesPromise = fetch("/api/employees");
const expensesPromise = fetch("/api/expenses");
const departmentsPromise = fetch("/api/departments");
```

* If these requests do not depend on one another, there is no reason to wait for the first request before starting the second.

* `Promise.all()` is used when multiple Promises need to run together and the application needs all of their results:

```js
const [employeesResponse, expensesResponse, departmentsResponse] =
    await Promise.all([
        fetch("/api/employees"),
        fetch("/api/expenses"),
        fetch("/api/departments")
    ]);
```

* `Promise.all()` fulfills only when all supplied Promises fulfill.

* If even one Promise rejects, `Promise.all()` rejects.

* This makes `Promise.all()` useful for dashboard pages where several independent API requests are required before displaying the complete page.

* `Promise.allSettled()` is useful when every operation should be allowed to finish even if some fail:

```js
const results = await Promise.allSettled([
    fetch("/api/employees"),
    fetch("/api/expenses"),
    fetch("/api/departments")
]);
```

* Unlike `Promise.all()`, `Promise.allSettled()` gives the final status of every operation.

* `Promise.race()` settles when the first Promise settles. It can be useful when implementing a timeout or choosing whichever asynchronous operation finishes first.

* `Promise.any()` fulfills when the first Promise fulfills. It ignores rejected Promises unless all supplied Promises reject.

* Promises do not make asynchronous operations themselves faster. They provide a structured way to represent and handle operations that already happen asynchronously.

* A Promise also does not automatically create a new thread. JavaScript's asynchronous behavior depends on the runtime environment, such as browser APIs or Node.js APIs, together with the event loop.

# async and await

* `async` and `await` are modern JavaScript syntax built around Promises. They make Promise-based asynchronous code easier to read and write.

* An `async` function always returns a Promise, even when the function appears to return a normal value.

```js
async function getAmount() {
    return 5000;
}

const result = getAmount();

console.log(result);
```

* The result of `getAmount()` is a Promise, not directly the number `5000`.

* Conceptually, returning a normal value from an async function is similar to resolving a Promise with that value:

```js
async function getAmount() {
    return 5000;
}
```

* behaves conceptually like:

```js
function getAmount() {
    return Promise.resolve(5000);
}
```

* `await` is used inside an `async` function to wait for a Promise to settle and obtain its fulfilled value.

```js
async function loadExpense() {
    const response = await fetch("/api/expenses/501");
    const expense = await response.json();

    console.log(expense);
}
```

* `await` makes asynchronous code look sequential, but it does not block the entire JavaScript program while the network request is happening.

* When JavaScript reaches:

```js
const response = await fetch("/api/expenses/501");
```

* the `fetch()` operation continues asynchronously. The current async function pauses at that point, allowing other JavaScript work to continue. When the Promise settles, the async function resumes with the result.

* This is why `await` should be mentally understood as "pause this async function until the Promise settles", not "freeze JavaScript".

* `await` normally gives the fulfilled value of a Promise:

```js
const promise = Promise.resolve(100);

async function test() {
    const value = await promise;

    console.log(value); // 100
}
```

* If the Promise rejects, `await` throws the rejection reason. This allows normal `try...catch` syntax to handle asynchronous errors:

```js
async function loadExpense() {
    try {
        const response = await fetch("/api/expenses/501");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const expense = await response.json();

        console.log(expense);
    } catch (error) {
        console.error("Failed to load expense:", error);
    }
}
```

* This is one of the major advantages of `async/await`: asynchronous errors can be handled using the same `try...catch` structure used for synchronous errors.

* A common mistake is writing several independent `await` operations sequentially:

```js
const employees = await fetch("/api/employees");
const expenses = await fetch("/api/expenses");
const departments = await fetch("/api/departments");
```

* If these requests are independent, this causes the second request to wait for the first and the third to wait for the second.

* For independent operations, start them together and then await them together:

```js
const employeesPromise = fetch("/api/employees");
const expensesPromise = fetch("/api/expenses");
const departmentsPromise = fetch("/api/departments");

const [employees, expenses, departments] = await Promise.all([
    employeesPromise,
    expensesPromise,
    departmentsPromise
]);
```

* This is an important real-world performance pattern: use sequential `await` when operations depend on previous results, and use `Promise.all()` when independent operations can run concurrently.

* For example, this should be sequential because the employee ID is required before requesting that employee's expenses:

```js
const employee = await getEmployee();
const expenses = await getExpenses(employee.id);
```

* But this can be concurrent because neither request depends on the other:

```js
const [employees, departments] = await Promise.all([
    getEmployees(),
    getDepartments()
]);
```

* `async/await` does not replace Promises. It is built on top of Promises. Understanding Promises first makes `async/await` much easier to understand.

* Promise style and async/await style can perform the same asynchronous workflow:

```js
fetch("/api/expenses/501")
    .then((response) => response.json())
    .then((expense) => {
        console.log(expense);
    })
    .catch((error) => {
        console.error(error);
    });
```

* The same logic can be written using async/await:

```js
async function loadExpense() {
    try {
        const response = await fetch("/api/expenses/501");
        const expense = await response.json();

        console.log(expense);
    } catch (error) {
        console.error(error);
    }
}
```

* Modern application code commonly uses `async/await` because longer asynchronous workflows are usually easier to read, especially when several dependent operations are involved.

* Promise methods such as `Promise.all()`, `Promise.allSettled()`, `Promise.race()`, and `Promise.any()` are still important when working with async/await because async/await does not remove the need to control multiple asynchronous operations.

* A common mistake is forgetting that an async function returns a Promise:

```js
async function getUser() {
    return {
        name: "Gowtham"
    };
}

const user = getUser();

console.log(user.name); // undefined
```

* The correct approach is:

```js
const user = await getUser();
console.log(user.name);
```

* Or, when outside an async function, use `.then()`:

```js
getUser().then((user) => {
    console.log(user.name);
});
```

* Another common mistake is using `await` on a value that is not a Promise. JavaScript allows it, but it simply produces the value:

```js
const value = await 100;
```

* `await` is mainly useful when dealing with Promise-based asynchronous operations.

* Another common mistake is assuming that `await` makes the application completely synchronous. It only pauses the execution of the current async function. Other JavaScript work can continue while the awaited asynchronous operation is pending.

* In a frontend application, a common flow is:

```text
User clicks Approve
        ↓
Event handler runs
        ↓
async function starts
        ↓
fetch() sends API request
        ↓
Promise remains pending
        ↓
Browser continues other work
        ↓
Backend processes request
        ↓
Response arrives
        ↓
Promise fulfills/rejects
        ↓
async function resumes
        ↓
UI is updated
```

* This pattern is used everywhere in modern frontend development: loading pages, submitting forms, approving expenses, retrieving user profiles, searching data, uploading files, and communicating with backend APIs.

* In Node.js backend applications, the same concepts are used for database queries, filesystem operations, HTTP requests, authentication services, external APIs, and other I/O operations.

* The important mental model is that a Promise represents a future result, `.then()`/`.catch()` attach handlers to that future result, `async` makes a function Promise-based, and `await` allows that async function to pause until a Promise settles.

* Promises are the underlying concept. `async/await` is a cleaner syntax for working with those Promises.

* For modern JavaScript development, `async/await` is generally the easiest syntax for sequential asynchronous workflows, while Promise methods such as `Promise.all()` remain important for concurrency and handling multiple asynchronous operations.

* When reading older JavaScript code, `.then().catch()` chains are still important to understand because many existing applications and libraries use them. Knowing both styles prevents confusion when working with real codebases.

# Classes

* **Technical definition:** A class in JavaScript is a syntactic structure used to define objects and their behavior. JavaScript classes internally use the prototype-based inheritance system.

* A class is a blueprint from which I can create multiple objects that have similar data and behavior.

* **What it does:**
  * defines how an object should be created
  * initializes object data using `constructor()`
  * defines methods that can be shared through the prototype
  * allows inheritance using `extends`
  * allows parent functionality to be accessed using `super`
  * allows class-level methods and properties using `static`

* The main reason I use classes is when my application has multiple objects belonging to the same type and those objects need common behavior.

* Example: In an e-commerce application, thousands of orders may have:
  * order ID
  * customer
  * items
  * total
  * status
  * payment information
  * methods such as `calculateTotal()`, `cancel()`, `updateStatus()`

* Instead of manually creating unrelated objects and functions, I can define the structure and behavior once using a class.
```js
  class Order {
      constructor(id, customer, items) {
          this.id = id;
          this.customer = customer;
          this.items = items;
          this.status = "pending";
      }

      calculateTotal() {
          return this.items.reduce(
              (total, item) => total + item.price * item.quantity,
              0
          );
      }

      cancel() {
          if (this.status === "shipped") {
              throw new Error("Shipped order cannot be cancelled");
          }

          this.status = "cancelled";
      }
  }
```
* `constructor()` is a special method that runs automatically when I use `new Order(...)`.
* It is normally used to initialize the object's properties.
* `this` inside the constructor refers to the newly created object.

* When I create:

  const order = new Order(101, customer, items);

  JavaScript creates a new object and initializes it through the constructor.

* Methods such as `calculateTotal()` are not normally copied separately into every order object.
* They are placed on the class prototype and can be shared by instances.

* `extends` allows one class to inherit from another class.
```js
  class DigitalOrder extends Order {
      downloadInvoice() {
          return `/invoices/${this.id}.pdf`;
      }
  }
```
* `DigitalOrder` inherits the functionality of `Order`.
* I use inheritance when there is a genuine "is-a" relationship.
* A digital order **is an** order, so inheritance can make sense.

* `super()` calls the parent constructor.
```js
  class DigitalOrder extends Order {
      constructor(id, customer, items, downloadUrl) {
          super(id, customer, items);
          this.downloadUrl = downloadUrl;
      }
  }
```
* `super()` is important because the parent class is responsible for initializing its part of the object.
* In a derived class constructor, I cannot use `this` before calling `super()`.

* `super.method()` can call a method from the parent class when I want to extend rather than completely replace its behavior.

* `static` creates a method belonging to the class itself rather than individual instances.
```js
  class Order {
      static isValidId(id) {
          return Number.isInteger(id) && id > 0;
      }
  }

  Order.isValidId(101);
```
* I use static methods when the operation is related to the class but does not require a particular object instance.

* Real use cases for classes:
  * Order management
  * User management
  * Payment processing
  * Product models
  * File handling
  * API clients
  * WebSocket connections
  * authentication services
  * game entities
  * database/domain models

* I should not create a class just because something exists in the application.
* If I only need a few independent operations, normal functions may be simpler.

* **Key points:**
  * class = blueprint for objects
  * `new` creates an instance
  * `constructor()` initializes instance data
  * methods define object behavior
  * `extends` provides inheritance
  * `super()` accesses parent constructor/functionality
  * `static` belongs to the class itself
  * classes are built on JavaScript prototypes internally


# Prototypes & Inheritance

* **Technical definition:** A prototype is an object from which another object can inherit properties and methods. JavaScript performs property lookup through a prototype chain when a property is not found directly on the object.

*  An object can use properties and methods from another object through a linked chain.

* JavaScript inheritance is fundamentally prototype-based.
* Classes are only a cleaner syntax built on top of this mechanism.

* Example:
```js
  const userMethods = {
      login() {
          console.log(`${this.name} logged in`);
      }
  };

  const user = Object.create(userMethods);

  user.name = "Gowtham";
  user.login();
```
* `user` does not directly contain `login()`.
* JavaScript looks at `user`, does not find `login()`, then checks its prototype.
* It finds `login()` there and executes it.

* This lookup process is the **prototype chain**.

  user
    ↓
  userMethods
    ↓
  Object.prototype
    ↓
  null

* If JavaScript cannot find a property anywhere in the chain, the result is usually `undefined`.

* Constructor functions were traditionally used to create reusable object structures.
```js
  function User(name, role) {
      this.name = name;
      this.role = role;
  }

  User.prototype.hasPermission = function () {
      return this.role === "admin";
  };
```
* Every object created with:
```js
  const user = new User("Gowtham", "admin");

  can access `hasPermission()` through `User.prototype`.
```
* The important point is that the method does not need to be recreated for every object.

* `__proto__` exposes the object's prototype.

  `user.__proto__ === User.prototype;`

* I should know what `__proto__` means because it appears often when inspecting JavaScript objects.
* For normal application code, I should prefer clearer APIs such as `Object.getPrototypeOf()` instead of manually manipulating `__proto__`.

* `Object.create()` creates an object whose prototype is the object supplied to it.

* This can be useful when I want objects to inherit behavior directly without creating a class.

* **What inheritance actually does:** It allows an object or class to reuse functionality defined somewhere else instead of duplicating that functionality.

* Real application use case:
  * A base `Notification` object can provide common behavior.
  * `EmailNotification`, `SMSNotification`, and `PushNotification` can provide specialized behavior.
  * Shared functionality does not need to be duplicated.

* With classes, this same prototype mechanism appears through `extends`.

* **Key points:**
  * JavaScript uses prototype-based inheritance
  * objects can inherit properties/methods from prototypes
  * property lookup follows the prototype chain
  * `Object.prototype` is near the top of most normal object chains
  * `null` represents the end of the chain
  * constructor functions can use `.prototype`
  * classes use prototypes internally
  * `__proto__` refers to an object's prototype
  * `Object.create()` can create objects with a chosen prototype


# this Keyword

* **Technical definition:** `this` is a special value determined by the execution context of a function. For regular functions, its value depends primarily on how the function is called.

* `this` tells a function which object or context it is currently operating with.

* The most important rule is that I should not decide what `this` means by looking only at where the function was written.
* For regular functions, I should look at **how the function was called**.

* In an object method:
```js
  const order = {
      total: 5000,

      getTotal() {
          return this.total;
      }
  };

  order.getTotal();
```
* `this` refers to `order` because the method was called through `order`.

* In classes, `this` normally refers to the current instance.
```js
  class Cart {
      constructor() {
          this.items = [];
      }

      addItem(item) {
          this.items.push(item);
      }
  }
```
* If I create:

  `const cart = new Cart();`

* `this` inside `addItem()` refers to that particular `cart` object.

* This is useful because the same method can work with many different instances.

* Arrow functions are different.
* Arrow functions do not create their own `this`.
* They take `this` from their surrounding lexical scope.

* This becomes important in asynchronous callbacks and event handlers.
```js
  class Dashboard {
      constructor() {
          this.count = 0;

          document
              .querySelector("#increase")
              .addEventListener("click", () => {
                  this.count++;
                  this.render();
              });
      }

      render() {
          document.querySelector("#count").textContent = this.count;
      }
  }
```
* The arrow function keeps the `this` belonging to the `Dashboard` instance.

* `call()` executes a function immediately while explicitly setting its `this`.

* `apply()` does the same but receives function arguments as an array.

* `bind()` creates a new function with a fixed `this`.

* Real application use case:
  * A class method is passed to `setTimeout()`, an event listener, or another callback.
  * The original object context can be lost.
  * `bind()` can explicitly preserve the object context.

  setTimeout(notification.send.bind(notification), 1000);

* `this` is heavily used in:
  * classes
  * object methods
  * event handling
  * callback handling
  * reusable object behavior
  * APIs that depend on object context

* **Key points:**
  * regular function → `this` depends on how it is called
  * object method → normally the object before the dot
  * class method → instance when called normally through the instance
  * arrow function → does not have its own `this`
  * `call()` → invoke now with chosen `this`
  * `apply()` → invoke now with chosen `this` and argument array
  * `bind()` → create a new function with chosen `this`


# Higher-Order Functions

* **Technical definition:** A higher-order function is a function that accepts another function as an argument, returns a function, or both.

* A function can receive another function as data or create another function as its result.

* JavaScript supports this because functions are first-class values.
* I can store a function in a variable, pass it to another function, return it, or store it in an object/array.

* Higher-order functions are heavily used in application development because they allow behavior to be passed around instead of hard-coding behavior into every function.

* `map()` transforms every item into another value.

* Real application:
```js
  const invoiceRows = invoices.map(invoice => ({
      id: invoice.id,
      customer: invoice.customerName,
      amount: invoice.total,
      status: invoice.status
  }));
```
* Here I am converting backend invoice objects into the structure required by the frontend.

* `filter()` creates a new array containing only values that satisfy a condition.
```js
  const pendingInvoices = invoices.filter(
      invoice => invoice.status === "pending"
  );
```
* This is useful when displaying only pending records in an admin dashboard.

* `reduce()` processes multiple values and produces one final result.
```js
  const totalRevenue = invoices.reduce(
      (total, invoice) => total + invoice.total,
      0
  );
```
* This is useful for dashboard calculations such as:
  * total revenue
  * total expenses
  * total marks
  * inventory value
  * transaction totals

* `forEach()` runs a function for each item but does not create a transformed array.
```js
  notifications.forEach(notification => {
      notification.markAsRead();
  });
```
* I should use `map()` when I need a new transformed array.
* I should use `filter()` when I need selected items.
* I should use `reduce()` when I need to combine items into a result.
* I should use `forEach()` when I simply need to perform an action for every item.

* A function can also return another function.
```js
  function createRoleChecker(requiredRole) {
      return function (user) {
          return user.role === requiredRole;
      };
  }

  const isAdmin = createRoleChecker("admin");
```
* This is useful when I want to create reusable behavior based on configuration.

* Higher-order functions are common in:
  * frontend data processing
  * Express middleware
  * event handling
  * validation
  * authorization
  * callbacks
  * array processing
  * reusable business logic

* **Key points:**
  * functions can be passed as values
  * functions can return functions
  * `map`, `filter`, `reduce`, and `forEach` use callbacks
  * higher-order functions help separate data from behavior
  * they are heavily used in modern JavaScript


# Functional Programming Concepts

* **Technical definition:** Functional programming is a programming style that treats computation as transformations using functions while minimizing mutable state and side effects.

* Instead of constantly changing existing data, I can create functions that take data, process it, and return new data.

* JavaScript is not a purely functional language.
* It supports functional programming along with object-oriented and procedural programming.

* A **pure function** produces the same output for the same input and does not create observable side effects.
```js
  function calculateTax(amount, rate) {
      return amount * rate;
  }
```
* This is predictable because the result depends only on the parameters.

* Pure functions are useful for:
  * calculations
  * validation
  * formatting
  * data transformation
  * business rules

* A function becomes harder to predict when it depends on or modifies external state.

* **Immutability** means I do not directly modify existing data when updating application state.
```js
  const updatedUser = {
      ...user,
      role: "manager"
  };
```
* Instead of modifying `user`, I create a new object.

* This is especially useful in frontend applications where predictable state changes are important.

* **Composition** means combining smaller functions to build a larger operation.

* For an order processing system, I might have:

  validateOrder()
  → applyDiscount()
  → calculateTax()
  → calculateShipping()
  → createInvoice()

* Each function has one responsibility.
* I can test each function independently and combine them into a larger workflow.

* **Currying** means converting a function that accepts multiple arguments into multiple functions that each accept fewer arguments, commonly one argument at a time.

* This is useful when part of the configuration can be fixed first and reused later.

* Real application example:
```js
  function createDiscountCalculator(discountRate) {
      return function (amount) {
          return amount - amount * discountRate;
      };
  }

  const employeeDiscount = createDiscountCalculator(0.15);

  employeeDiscount(5000);
```
* Here the discount rate is configured once and the returned function can be reused for multiple prices.

* Functional programming concepts are useful when:
  * processing collections
  * transforming API responses
  * handling application state
  * writing business calculations
  * creating reusable utilities
  * reducing unexpected side effects

* **Key points:**
  * pure function → predictable input/output
  * immutability → avoid directly changing existing data
  * composition → combine small functions
  * currying → configure functions progressively
  * JavaScript supports functional programming but is not purely functional


# Regular Expressions (RegEx)

* **Technical definition:** A regular expression is a pattern used to match, search, extract, validate, or replace sequences of characters in text.

* Regex allows me to describe a text pattern and ask JavaScript whether some text follows or contains that pattern.

* Regex is useful when the structure of the text matters.

* Example from an employee management system:

  `const employeeIdPattern = /^EMP-\d{4}$/;`

* This checks whether an employee ID follows the expected structure such as:

 ` EMP-2045`

* `^` means the pattern must start at the beginning.
* `$` means the pattern must end at the end.
* `\d` represents a digit.
* `{4}` means exactly four digits.

* `test()` returns `true` or `false`.

  `employeeIdPattern.test(employeeId);`

* This is useful for validation.

* `match()` finds matching text.

  `const invoiceIds = text.match(/INV-\d+/g);`

* This can be useful when processing uploaded invoice text and extracting invoice identifiers.

* `replace()` replaces matching text.

  `const cleanedPhone = phone.replace(/\D/g, "");`

* This removes non-digit characters from a phone number before storing it in a standardized format.

* `exec()` performs a match and provides detailed match information including captured groups.

* Regex flags modify how the pattern behaves:
  * `g` → find all matches
  * `i` → ignore uppercase/lowercase differences
  * `m` → multiline behavior
  * `u` → Unicode handling
  * `s` → allows `.` to match line terminators

* Common regex symbols:
  * `^` → beginning
  * `$` → end
  * `.` → any character
  * `\d` → digit
  * `\w` → word character
  * `\s` → whitespace
  * `+` → one or more
  * `*` → zero or more
  * `?` → zero or one
  * `[]` → character set
  * `()` → capture group
  * `|` → OR

* Real application use cases:
  * employee ID validation
  * invoice number extraction
  * phone number cleaning
  * searching logs
  * validating structured codes
  * extracting IDs from text
  * replacing unwanted characters
  * frontend input validation

* Regex should not be used just because it is powerful.
* If a normal JavaScript condition is clearer, use the normal condition.
* Extremely complicated regex becomes difficult to read, debug, and maintain.

* Also, frontend regex validation is not enough for security.
* Important validation must still be performed on the backend because users can bypass frontend JavaScript.

* **Key points:**
  * regex describes a text pattern
  * `test()` → check whether pattern exists
  * `match()` → retrieve matches
  * `replace()` → replace matching content
  * `exec()` → detailed matching information
  * flags modify regex behavior
  * regex is useful for structured text, not complex data parsing


# Error Handling - Advanced

* **Technical definition:** Advanced error handling is the process of creating, propagating, identifying, transforming, logging, and handling errors across different layers of an application.

* It is not only about catching an error. I need to understand where the error happened, how it travels through the application, and which layer should handle it.

* `Error` represents a runtime/application failure.

* A custom error extends `Error` when I need an error type specific to my application.
```js
  class ValidationError extends Error {
      constructor(message, field) {
          super(message);
          this.name = "ValidationError";
          this.field = field;
      }
  }
```
* Now I can throw:
```js
  throw new ValidationError(
      "Email is required",
      "email"
  );
```
* The benefit is that the error carries structured information.
* The error handler can check its type and respond appropriately.

* Real applications may have:

  ValidationError
  AuthenticationError
  AuthorizationError
  NotFoundError
  PaymentError

* **Error propagation** means an error moves upward through the call stack when the current function does not handle it.

* Example application flow:

  API Controller
      ↓
  Order Service
      ↓
  Payment Service
      ↓
  Payment API
      ↓
  Error occurs
      ↓
  Error propagates upward
      ↓
  Appropriate error handler handles it

* I should not catch an error just because I can.
* The current layer should catch an error only when it knows what to do with it.

* For example, a low-level database function may not know how to display an error to the user.
* It can allow the error to propagate to a service/controller layer that knows how to convert it into an appropriate response.

* Rethrowing allows the current layer to perform some work and then pass the error upward.
```js
  try {
      await saveOrder(order);
  } catch (error) {
      console.error("Order save failed");
      throw error;
  }

* A custom error can also wrap a lower-level error.

  try {
      await paymentService.charge(amount);
  } catch (error) {
      throw new PaymentError(
          "Payment processing failed",
          { cause: error }
      );
  }
```
* `cause` allows the original error to be preserved while giving the application a more meaningful error.

* **Stack trace** contains information about where the error occurred and the sequence of function calls that led to it.

* Example:

  Error: Payment failed
      at processPayment()
      at checkout()
      at handleCheckout()

* Stack traces are mainly for developers and logging systems.
* I should not send raw stack traces to users because they may expose internal application information.

* In a real backend application, the flow can be:

  Database error
      ↓
  Service catches or propagates
      ↓
  Controller receives error
      ↓
  Central error handler
      ↓
  Log detailed stack trace
      ↓
  Convert to safe API response
      ↓
  Frontend displays user-friendly message

* Expected errors and unexpected errors should be treated differently.

* Expected:
  * invalid input
  * unauthorized request
  * resource not found
  * duplicate record
  * payment rejected

* Unexpected:
  * programming bug
  * unexpected database failure
  * corrupted application state
  * unknown runtime failure

* Expected errors can usually be converted into meaningful responses.
* Unexpected errors should be logged carefully and normally result in a generic user-facing message.

* With asynchronous JavaScript, `try/catch` works when I `await` the Promise inside the `try` block.
```js
  async function loadOrders() {
      try {
          const response = await fetch("/api/orders");

          if (!response.ok) {
              throw new Error("Failed to load orders");
          }

          return await response.json();
      } catch (error) {
          console.error("Order loading failed:", error);
          throw error;
      }
  }
```
* A common mistake is silently swallowing errors:
```js
  try {
      await saveOrder(order);
  } catch (error) {
  }
```
* This is bad because the application loses useful debugging information.

* Another common mistake is showing the raw technical error directly to users.

  Error: SQL connection refused at DatabaseConnection.js:42

* The user does not need that information.
* The developer needs it in logs.

* A better separation is:

  Developer log:
  "Database connection refused..."

  User response:
  "We couldn't complete your request. Please try again."

* **Key points:**
  * custom errors represent application-specific failures
  * `extends Error` creates specialized error types
  * errors can propagate through multiple layers
  * catch an error where meaningful handling is possible
  * rethrow when another layer should handle it
  * stack traces help developers find the failure path
  * `cause` can preserve the original error
  * detailed errors belong in logs
  * safe, meaningful messages belong in user-facing responses
  * asynchronous errors should be handled correctly with `await` / Promise handling

