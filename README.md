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

* Array is used when we need to store multiple values in one variable.
* In real applications, arrays usually contain objects and nested arrays instead of simple values.
* Example: In a job application system, one application can contain education, skills, internships, documents and reviews.

```js
const applications = [
    {
        applicationId: "APP-2026-0001",
        applicant: {
            name: "Gowtham Kumar",
            location: {
                city: "Coimbatore",
                state: "Tamil Nadu"
            },
            education: [
                {
                    degree: "B.E",
                    department: "Computer Science",
                    cgpa: 8.4
                }
            ],
            skills: [
                {
                    name: "JavaScript",
                    level: "Intermediate",
                    experience: 1.5
                },
                {
                    name: "Python",
                    level: "Intermediate",
                    experience: 2
                },
                {
                    name: "React",
                    level: "Beginner",
                    experience: 0.8
                }
            ],
            internships: [
                {
                    company: "Tech Solutions Pvt Ltd",
                    role: "Software Developer Intern",
                    duration: "3 months",
                    technologies: ["JavaScript", "Node.js", "Express", "MongoDB"]
                }
            ]
        },
        position: {
            title: "Full Stack Developer",
            department: "Engineering"
        },
        status: "Pending",
        submittedAt: "2026-09-20",
        review: null
    }
]
```

## Creating arrays

* Arrays can be created using `[]`.
* In production applications, arrays are normally created from API responses, database queries, user input or data processing rather than manually writing every item.

```js
const applications = [
    {
        id: 1,
        name: "Gowtham",
        status: "Pending"
    },
    {
        id: 2,
        name: "Arun",
        status: "Shortlisted"
    }
]
```

* The important thing is that an array can contain objects, and those objects can contain more arrays and objects.

## Accessing array elements

* Array index starts from `0`.
* We use an index when we specifically need one item from an array.

```js
const applications = [
    { id: 1, name: "Gowtham" },
    { id: 2, name: "Arun" },
    { id: 3, name: "Priya" }
]

console.log(applications[1].name)
```

```text
Arun
```

* In a real application, this can be used when we already know the position of an item, but normally we use methods like `find()` when we need to locate an object using its ID.

## Changing array values

* Arrays are mutable, which means existing elements can be changed.
* This is useful when application state changes, such as changing an applicant status.

```js
applications[0].status = "Shortlisted"
```

* The original object inside the array is modified.

## Adding items with push()

* `push()` adds one or more items to the end of an array.
* Production example: when an admin adds another skill to an applicant.

```js
application.applicant.skills.push({
    name: "Docker",
    level: "Beginner",
    experience: 0.5
})
```

* The new skill becomes part of the existing applicant data.

## Removing items with pop()

* `pop()` removes the last item from an array.
* It is useful when the latest item needs to be removed, but in production we usually remove data based on an ID or condition instead of assuming the last item is the one we need.

```js
const lastSkill = application.applicant.skills.pop()
```

## Adding items with unshift()

* `unshift()` adds an item to the beginning of an array.
* This can be useful when the newest activity or notification should appear first.

```js
notifications.unshift({
    id: "NOT-1005",
    message: "New application received",
    createdAt: "2026-09-24T09:30:00"
})
```

## Removing items with shift()

* `shift()` removes the first item from an array.
* It can be useful for queue-like data where the oldest item is processed first.

```js
const nextApplication = applicationQueue.shift()
```

* After removing the first application, the next application becomes the first item.

## length

* `length` tells how many elements are currently inside an array.
* In production, it can be used for dashboard counts, validation and checking whether data exists.

```js
const totalApplications = applications.length
```

```text
5
```

## forEach()

* `forEach()` runs a function for every item in an array.
* It is commonly used when we need to perform an action for every item, such as creating table rows or displaying notifications.

```js
applications.forEach(application => {
    console.log(
        application.applicationId,
        application.applicant.name,
        application.status
    )
})
```

* It is mainly used for side effects. It does not create a new array from the returned values.

## map()

* `map()` creates a new array by transforming every item.
* In production, it is useful when API data needs to be converted into UI data or another structure.

```js
const applicantNames = applications.map(application => {
    return application.applicant.name
})
```

```text
[
    "Gowtham Kumar",
    "Arun Prakash",
    "Priya Devi"
]
```

* Example of converting API data for a dashboard:

```js
const dashboardData = applications.map(application => ({
    id: application.applicationId,
    applicant: application.applicant.name,
    position: application.position.title,
    status: application.status
}))
```

## filter()

* `filter()` creates a new array containing only the items that satisfy a condition.
* This is heavily used in production for search, status filters, permissions and reports.

```js
const shortlistedApplications = applications.filter(application => {
    return application.status === "Shortlisted"
})
```

* The original `applications` array is not changed.

## find()

* `find()` returns the first object that matches a condition.
* This is useful when we need one specific record, usually by ID.

```js
const application = applications.find(application => {
    return application.applicationId === "APP-2026-0003"
})
```

* This is commonly used when an admin clicks `View Application`.

## findIndex()

* `findIndex()` returns the index of the first matching item.
* It is useful when we need to find an item and then update or remove it.

```js
const index = applications.findIndex(application => {
    return application.applicationId === "APP-2026-0003"
})
```

* If no item is found, it returns `-1`.

## some()

* `some()` checks whether at least one item satisfies a condition.
* It returns `true` or `false`.

```js
const hasShortlistedApplicant = applications.some(application => {
    return application.status === "Shortlisted"
})
```

* Production use: checking whether an admin has any pending approval, whether a cart contains restricted products, or whether a user has a required permission.

## every()

* `every()` checks whether all items satisfy a condition.
* It also returns `true` or `false`.

```js
const allApplicationsReviewed = applications.every(application => {
    return application.review !== null
})
```

* This can be useful when checking whether every application in a review batch has been processed.

## includes()

* `includes()` checks whether an array contains a specific value.
* It is useful for simple arrays such as roles, permissions or technologies.

```js
const allowedRoles = [
    "HR",
    "Manager",
    "Admin"
]

if (allowedRoles.includes(currentUser.role)) {
    console.log("Access allowed")
}
```

* For arrays containing objects, `includes()` is usually not enough because it checks object references. Methods like `some()` or `find()` are better.

## sort()

* `sort()` rearranges the original array.
* In production, it can be used to sort applications by submission date, experience, CGPA or priority.

```js
applications.sort((a, b) => {
    return new Date(b.submittedAt) - new Date(a.submittedAt)
})
```

* This sorts the newest applications first.

* Another production example:

```js
applications.sort((a, b) => {
    return b.applicant.education[0].cgpa -
           a.applicant.education[0].cgpa
})
```

* Be careful because `sort()` changes the original array.

## reverse()

* `reverse()` reverses the order of an array.
* It changes the original array.

```js
applications.reverse()
```

* In production, it can be useful when changing display order, but we should avoid changing shared application state accidentally.

## slice()

* `slice()` creates a portion of an array without changing the original array.
* It is useful for pagination.

```js
const pageSize = 10
const currentPage = 2
const start = (currentPage - 1) * pageSize
const end = start + pageSize
const pageApplications = applications.slice(start, end)
```

* This is a common pattern for displaying only one page of a large dataset.

## splice()

* `splice()` can add, remove or replace items inside an array.
* Unlike `slice()`, it changes the original array.

```js
applications.splice(index, 1)
```

* This can remove an application from local application state, but in a real production system the backend/database would normally also need to be updated.

## reduce()

* `reduce()` processes the entire array and produces one final value.
* It is very useful for totals, counts, grouping and dashboard calculations.

```js
const totalApplications = applications.reduce((total, application) => {
    return total + 1
}, 0)
```

* A more useful production example:

```js
const statusCount = applications.reduce((result, application) => {

    const status = application.status

    if (!result[status]) {
        result[status] = 0
    }

    result[status]++

    return result

}, {})
```

Result:

```js
{
    Pending: 2,
    Shortlisted: 2,
    Rejected: 1
}
```

* This type of logic is useful for admin dashboards and analytics.

## flat()

* `flat()` converts nested arrays into a single-level array.
* It is useful when API data contains arrays inside arrays.

```js
const allTechnologies = applications.flatMap(application => {
    return application.applicant.internships.map(internship => {
        return internship.technologies
    })
})
```

* If the result contains nested arrays, `flat()` can flatten them.

## flatMap()

* `flatMap()` combines `map()` and one level of `flat()`.
* It is useful when every application can contain multiple internships, skills or documents and we want one combined list.

```js
const allSkills = applications.flatMap(application => {
    return application.applicant.skills
})
```

* Now `allSkills` contains the skills from all applicants in one array.

## Array.isArray()

* `Array.isArray()` checks whether a value is actually an array.
* This is useful when processing API data because the backend may return `null`, an object or an array depending on the situation.

```js
if (Array.isArray(application.applicant.internships)) {
    console.log("Internship data exists")
}
```

* This prevents mistakes such as calling `.map()` or `.forEach()` on a non-array value.

## Checking an empty array

* An empty array is truthy in JavaScript.

```js
if (application.applicant.internships) {
    // This still runs when internships = []
}
```

* The correct way to check whether it contains data is:

```js
if (application.applicant.internships.length > 0) {
    console.log("Applicant has internships")
}
```

## Chaining array methods

* Production code often combines multiple array methods to process data.
* Example: find all JavaScript developers who are shortlisted and have more than one year of experience.

```js
const result = applications
    .filter(application => application.status === "Shortlisted")
    .filter(application => {
        return application.applicant.skills.some(skill =>
            skill.name === "JavaScript" &&
            skill.experience >= 1
        )
    })
```

* Each method handles one responsibility, making the data processing easier to understand.

## Arrays with nested objects

* Real application data is usually not a simple array of strings.
* One array item can contain objects, and those objects can contain other arrays.

```js
const applications = [
    {
        applicant: {
            name: "Gowtham",
            skills: [
                {
                    name: "JavaScript",
                    experience: 2
                }
            ],
            internships: [
                {
                    company: "ABC Technologies",
                    technologies: [
                        "JavaScript",
                        "Node.js",
                        "MongoDB"
                    ]
                }
            ]
        }
    }
]
```

* To access the technology:

```js
applications[0]
    .applicant
    .internships[0]
    .technologies[1]
```

```text
Node.js
```

* This type of nested structure is common when frontend applications receive structured JSON from backend APIs.

## Array destructuring

* Destructuring allows values from an array to be stored in separate variables.
* It is useful when we know the position of the values we need.

```js
const skills = [
    "JavaScript",
    "Python",
    "React"
]

const [primarySkill, secondSkill] = skills
```

* `primarySkill` gets `"JavaScript"` and `secondSkill` gets `"Python"`.

## Spread operator with arrays

* The spread operator `...` copies array values into another array.
* It is commonly used when creating a new array without modifying the original one.

```js
const existingSkills = [
    "JavaScript",
    "Python"
]

const updatedSkills = [
    ...existingSkills,
    "React"
]
```

* This pattern is very common in frontend state management because we often create a new array instead of directly modifying existing state.

## Rest parameter with arrays

* Rest `...` collects multiple values into an array.
* It is useful when a function can receive an unknown number of values.

```js
function calculateTotal(...amounts) {

    return amounts.reduce((total, amount) => {
        return total + amount
    }, 0)
}
```

```js
calculateTotal(1200, 500, 800, 300)
```

* `amounts` becomes an array containing all the arguments.

## Converting API data into arrays

* In production, arrays commonly come from API responses.
```js
const response = await fetch("/api/applications")
const applications = await response.json()
```

* After parsing the response, we can use normal array methods like `filter()`, `map()`, `find()` and `reduce()`.

* Example:
```js
const pendingApplications = applications.filter(
    application => application.status === "Pending"
)
```

## Important difference between array methods

* `forEach()` → perform something for every item
* `map()` → transform every item into a new array
* `filter()` → keep matching items
* `find()` → get one matching item
* `findIndex()` → get the index of one matching item
* `some()` → check if at least one matches
* `every()` → check if all match
* `reduce()` → combine many items into one result
* `sort()` → reorder items
* `slice()` → copy part of an array
* `splice()` → modify part of an array
* `flat()` → flatten nested arrays
* `flatMap()` → map and flatten one level

## Array processing in a real application

* A production admin page can use many array methods together.

```text
applications.json
       ↓
fetch()
       ↓
applications[]
       ↓
filter() → status/search
       ↓
find() → view one application
       ↓
map() → create table data
       ↓
some() → check skills
       ↓
sort() → order applications
       ↓
reduce() → dashboard statistics
       ↓
flatMap() → collect all applicant skills
       ↓
slice() → pagination
```

# Objects

* Object is used to represent one entity with related data.
* In real applications, objects usually represent things like users, applicants, products, orders, employees, API responses, etc.
* An object can contain strings, numbers, arrays, other objects and even functions.

## Job application object

* In our job application system, one application can be represented as one large object.

```js
const application = {
    applicationId: "APP-2026-0001",

    applicant: {
        personal: {
            firstName: "Gowtham",
            lastName: "Kumar",
            age: 21,
            phone: "+91-9876543210"
        },

        address: {
            doorNo: "12/45",
            street: "Gandhi Nagar",
            city: "Coimbatore",
            state: "Tamil Nadu",
            pincode: "641001"
        },

        education: [
            {
                degree: "B.E",
                department: "Computer Science",
                institution: "Erode Sengunthar Engineering College",
                graduationYear: 2027,
                cgpa: 8.4
            },
            {
                degree: "HSC",
                institution: "ABC Higher Secondary School",
                graduationYear: 2023,
                percentage: 89
            }
        ],

        skills: [
            {
                name: "JavaScript",
                level: "Intermediate",
                experience: 1.5,
                verified: true
            },
            {
                name: "Python",
                level: "Intermediate",
                experience: 2,
                verified: true
            },
            {
                name: "React",
                level: "Beginner",
                experience: 0.8,
                verified: false
            }
        ],

        internships: [
            {
                company: "Tech Solutions Pvt Ltd",
                role: "Software Developer Intern",
                duration: "3 months",
                technologies: [
                    "JavaScript",
                    "Node.js",
                    "Express",
                    "MongoDB"
                ]
            }
        ]
    },

    position: {
        title: "Full Stack Developer",
        department: "Engineering",
        experienceRequired: 1
    },

    applicationStatus: {
        current: "Pending",
        updatedAt: "2026-09-20T10:30:00",
        updatedBy: "System"
    },

    documents: {
        resume: {
            fileName: "gowtham-resume.pdf",
            fileType: "application/pdf",
            fileSize: 245760,
            uploadedAt: "2026-09-20T10:20:00"
        }
    },

    review: {
        reviewed: false,
        reviewer: null,
        rating: null,
        comments: null
    },

    metadata: {
        source: "company-career-page",
        ipAddress: "192.168.1.20",
        createdAt: "2026-09-20T10:15:00",
        lastModifiedAt: "2026-09-20T10:30:00"
    }
}
```

## Creating an object

* Objects are created using `{}`.
* Objects store data using `key: value` pairs.

```js
const applicant = {
    name: "Gowtham",
    age: 21,
    position: "Full Stack Developer"
}
```

* In production, an object usually represents one complete record instead of only a few values.

## Object properties

* A property is a key-value pair inside an object.
* The key describes what the value represents.

```js
const application = {
    applicationId: "APP-2026-0001",
    status: "Pending",
    submittedAt: "2026-09-20"
}
```

* Here `applicationId`, `status` and `submittedAt` are properties.

## Accessing object properties

* We can access properties using dot notation.
* Dot notation is normally the easiest way when the property name is known.

```js
console.log(application.applicationId)
console.log(application.status)
```

```text
APP-2026-0001
Pending
```

## Bracket notation

* Bracket notation is useful when the property name is stored inside a variable or when the property name contains special characters.

```js
const field = "applicationStatus"

console.log(application[field])
```

* This is very useful in dynamic forms and API-driven applications where the property we want to access is decided at runtime.

## Dot notation vs bracket notation

```js
application.applicant.personal.firstName
```

* Use dot notation when we already know the property name.

```js
const field = "firstName"

application.applicant.personal[field]
```

* Use bracket notation when the property name comes dynamically.

## Nested objects

* Objects can contain other objects.
* Production data is usually nested because one entity can have many related details.

```js
application.applicant.address.city
```

```text
Coimbatore
```

* Here we move through multiple levels:

```text
application
    ↓
applicant
    ↓
address
    ↓
city
```

## Objects containing arrays

* An object can contain arrays.
* This is very common when one entity can have multiple values.

```js
application.applicant.skills
```

* The value is an array containing multiple skill objects.

```js
application.applicant.skills[0].name
```

```text
JavaScript
```

* This means we are combining object and array access.

## Arrays containing objects

* Arrays can contain multiple objects.
* This is the normal structure for API collections.

```js
const applications = [
    {
        applicationId: "APP-2026-0001",
        applicant: {
            name: "Gowtham"
        }
    },
    {
        applicationId: "APP-2026-0002",
        applicant: {
            name: "Arun"
        }
    }
]
```

* Each array element represents one application object.

## Adding a property

* JavaScript allows us to add a new property to an existing object.
* This can be useful when additional information becomes available.

```js
application.review.status = "Pending"
```

* If `review.status` did not exist before, JavaScript creates it.

## Updating a property

* Existing object properties can be changed.
* This is common when application state changes.

```js
application.applicationStatus.current = "Shortlisted"
```

* The application now contains the updated status.

## Deleting a property

* `delete` removes a property from an object.
* It should be used carefully because removing data can affect other parts of the application.

```js
delete application.metadata.ipAddress
```

* The `ipAddress` property no longer exists in that object.

## Checking whether a property exists

* We sometimes need to check whether an object contains a property before using it.

```js
if ("review" in application) {
    console.log("Review information exists")
}
```

* This is useful when API responses can have optional fields.

## Object.hasOwn()

* `Object.hasOwn()` checks whether a property directly belongs to the object.
* It is useful when processing dynamic API or configuration objects.

```js
if (Object.hasOwn(application, "review")) {
    console.log("Application has review data")
}
```

* This is safer for checking an object's own properties than relying only on inherited properties.

## Optional chaining

* Optional chaining `?.` allows us to safely access nested properties that may not exist.
* This is extremely useful with API data because some fields may be `null` or missing.

```js
const reviewer =
    application.review?.reviewer?.name
```

* If `reviewer` or `name` does not exist, JavaScript returns `undefined` instead of throwing an error.

## Nullish coalescing

* `??` gives a fallback value when the left side is `null` or `undefined`.
* It is useful when displaying optional API data.

```js
const reviewer =
    application.review?.reviewer?.name ?? "Not reviewed yet"
```

* If there is no reviewer, the UI can show `Not reviewed yet`.

## Object destructuring

* Destructuring allows us to extract properties into variables.
* It is useful when we repeatedly use values from a large object.

```js
const {
    applicationId,
    applicationStatus,
    position
} = application
```

* Now we can directly use:

```js
console.log(applicationId)
console.log(applicationStatus.current)
console.log(position.title)
```

## Nested destructuring

* We can also destructure nested objects.
* This can make complex API data easier to work with.

```js
const {
    applicant: {
        personal: {
            firstName,
            lastName
        }
    }
} = application
```

```js
console.log(firstName)
console.log(lastName)
```

* This is useful when a function needs only a small part of a large API object.

## Renaming during destructuring

* A property can be stored using a different variable name.

```js
const {
    applicationId: id
} = application
```

* The object property is still called `applicationId`, but the local variable is called `id`.

## Default values in destructuring

* We can provide a default value when a property is `undefined`.

```js
const {
    reviewer = "Not assigned"
} = application.review
```

* This is useful for optional fields.

## Object spread operator

* The spread operator `...` copies properties from one object into another object.
* It is commonly used when creating updated objects without changing the original object.

```js
const updatedApplication = {
    ...application,
    applicationStatus: {
        ...application.applicationStatus,
        current: "Shortlisted"
    }
}
```

* This is very common in frontend state updates.

## Why spread is useful

* Instead of directly changing shared data:

```js
application.applicationStatus.current = "Shortlisted"
```

* We can create a new object:

```js
const updatedApplication = {
    ...application,
    applicationStatus: {
        ...application.applicationStatus,
        current: "Shortlisted"
    }
}
```

* This is especially important when working with UI state and frameworks where detecting a new object reference matters.

## Object.assign()

* `Object.assign()` copies properties from one or more objects into another object.
* It can be used when combining configuration or updating an object.

```js
const applicationFlags = {
    reviewed: true,
    shortlisted: true
}
Object.assign(application, applicationFlags)
```

* The properties from `applicationFlags` are copied into `application`.

## Object.keys()

* `Object.keys()` returns an array containing an object's property names.
* It is useful when we do not know the object's keys beforehand.

```js
const fields = Object.keys(application.applicationStatus)
console.log(fields)
```

```text
[
    "current",
    "updatedAt",
    "updatedBy"
]
```

* This is useful for dynamic forms, validation and admin interfaces.

## Object.values()

* `Object.values()` returns an array containing the values of an object.
* It is useful when we only care about the values and not their property names.

```js
const statusData = Object.values(
    application.applicationStatus
)

console.log(statusData)
```

## Object.entries()

* `Object.entries()` converts an object into an array of `[key, value]` pairs.
* This is useful when dynamically displaying or processing object data.

```js
const statusData = Object.entries(application.applicationStatus)
statusData.forEach(([key, value]) => {
    console.log(key, value)
})
```

* This is useful for building dynamic admin tables or debugging API responses.

## Computed property names

* Computed properties allow us to create an object property using a variable.
* This is useful when form fields or API fields are dynamic.

```js
const fieldName = "status"
const fieldValue = "Pending"
const applicationData = { [fieldName]: fieldValue}
```

Result:

```js
{
    status: "Pending"
}
```

* This is commonly used when building dynamic form data.

## Object shorthand

* If the property name and variable name are the same, we can write the property only once.

```js
const applicantName = "Gowtham"
const applicantAge = 21
const applicant = {applicantName,applicantAge}
```

* Instead of:

```js
const applicant = {
    applicantName: applicantName,
    applicantAge: applicantAge
}
```

## Methods inside objects

* An object can contain functions.
* When a function belongs to an object, it can represent an action related to that object.

```js
const application = {
    applicationId: "APP-2026-0001",
    status: "Pending",
    approve() {
        this.status = "Shortlisted"
    }
}
```

* Calling `application.approve()` changes the application's status.

## this inside an object

* `this` normally refers to the object that calls the method.
* This allows an object's method to work with that object's own data.

```js
const application = {
    status: "Pending",
    approve() {
        this.status = "Shortlisted"
    }
}
application.approve()
console.log(application.status)
```

```text
Shortlisted
```

## Objects and dynamic application state

* Objects are commonly used to represent the current state of an application.
* For example, an admin review can change several related values.

```js
application.review = {
    reviewed: true,
    reviewer: {
        id: "EMP-102",
        name: "HR Team"
    },
    rating: 4.5,
    comments: "Strong backend fundamentals",
    reviewedAt: "2026-09-24T10:30:00"
}
```

* The object now contains the complete review information.

## Copying an object

* Objects are reference values.
* Assigning one object to another variable does not create a completely independent object.

```js
const original = {
    status: "Pending"
}
const copy = original
copy.status = "Shortlisted"
console.log(original.status)
```
* Both variables refer to the same object in memory.

## Shallow copy
* Spread syntax creates a shallow copy of an object.
* The top-level properties are copied, but nested objects still share references.

```js
const copiedApplication = {
    ...application
}
```
* Changing a top-level property is separate, but nested objects can still point to the same data.

## Deep copy

* Deep copying creates a separate copy of nested data too.
* One common modern approach is `structuredClone()`.

```js
const copiedApplication =
    structuredClone(application)
```

* Now nested objects and arrays are also copied.

* This can be useful when we need to modify a complex application object independently from the original.

## Object.freeze()

* `Object.freeze()` prevents changes to an object's top-level properties.
* It can be useful for configuration or constant application data.

```js
const applicationConfig = {
    maxResumeSize: 5242880,
    allowedFileTypes: ["pdf", "doc", "docx"]
}

Object.freeze(applicationConfig)
```

* Freeze is shallow, so nested objects and arrays require additional handling if deep immutability is needed.

## Object.seal()

* `Object.seal()` prevents adding or deleting properties.
* Existing properties can still be changed.

```js
Object.seal(application)
```

* This can be useful when the object structure should remain fixed but values can still change.

## Object with dynamic data

* Applications often receive objects where the keys are not known beforehand.
* Example: skill statistics generated from applicant data.

```js
const skillSummary = {
    JavaScript: {
        applicants: 42,
        averageExperience: 1.8
    },

    Python: {
        applicants: 31,
        averageExperience: 2.1
    },

    React: {
        applicants: 28,
        averageExperience: 1.6
    }
}
```

* We can access a dynamic skill using bracket notation.

```js
const skill = "JavaScript"

console.log(
    skillSummary[skill].applicants
)
```

## Object containing arrays and nested objects

* Real objects are usually a combination of all these structures.
* One application can contain nested objects, arrays of objects and arrays inside those objects.

```js
const application = {

    applicationId: "APP-2026-0001",

    applicant: {

        personal: {
            name: "Gowtham Kumar"
        },

        skills: [
            {
                name: "JavaScript",

                certifications: [
                    {
                        name: "JavaScript Algorithms",
                        issuer: "FreeCodeCamp",
                        year: 2026
                    }
                ]
            }
        ],

        internships: [
            {
                company: "Tech Solutions",

                projects: [
                    {
                        name: "Employee Management",
                        technologies: [
                            "JavaScript",
                            "Node.js",
                            "MongoDB"
                        ]
                    }
                ]
            }
        ]
    }
}
```

* Accessing deeply nested data:
```js
application.applicant.internships[0].projects[0].technologies[1]
```
* This type of nesting is common in complex API responses.

## Objects from API responses

* In real frontend development, objects usually come from a backend API.

```js
const response = await fetch("/api/applications")
const applications = await response.json()
```

* Each application returned by the API is an object.

```js
applications[0].applicant.personal.name
```

* After receiving the data, object and array operations are used together to display and process it.

## example

* Suppose an admin wants to find the names of shortlisted applicants who have JavaScript experience greater than one year.

```js
const shortlistedDevelopers = applications
    .filter(application =>
        application.applicationStatus.current === "Shortlisted"
    )
    .filter(application =>
        application.applicant.skills.some(skill =>
            skill.name === "JavaScript" &&
            skill.experience > 1
        )
    )
    .map(application =>
        application.applicant.personal.name
    )
```

* Here objects and arrays are working together.

```text
applications
    ↓
filter()
    ↓
application object
    ↓
applicant object
    ↓
skills array
    ↓
skill object
    ↓
some()
    ↓
map()
    ↓
applicant names
```

## Important 

* Object → represents one entity or record.
* Property → data stored inside an object.
* Nested object → object inside another object.
* Array inside object → used when one entity has multiple records.
* Dot notation → access a known property.
* Bracket notation → access a dynamic property.
* Destructuring → extract properties into variables.
* Spread → create a new object using existing properties.
* Optional chaining → safely access possibly missing nested data.
* `??` → provide a fallback for `null` or `undefined`.
* `Object.keys()` → get property names.
* `Object.values()` → get property values.
* `Object.entries()` → get key-value pairs.
* `Object.hasOwn()` → check whether a property belongs directly to the object.
* `structuredClone()` → create a deep copy of supported data.
* Objects are reference values, so assigning an object to another variable normally copies the reference, not the whole object.

# JavaScript Strings

* A string is used to store text in JavaScript.
* Strings can contain names, email addresses, phone numbers, application status, file names, descriptions, locations, etc.
* Strings can be written using single quotes, double quotes, or template literals.

```js
const firstName = "Gowtham";
const lastName = 'Kumar';
const position = `Full Stack Developer`;
```

* In my Job Application project, most user-entered form values are strings.

```js
const applicantName = "Gowtham Kumar";
const email = "gowtham@example.com";
const phone = "+91-9876543210";
const city = "Coimbatore";
const status = "Pending";
```

* Even if the user enters a number in an HTML input, the value received from the input is normally a string.

```js
const age = document.querySelector("#age").value;

console.log(typeof age);
```

* The output will be:

```text
string
```

* If I actually need a number, I have to convert it.

```js
const age = Number(
    document.querySelector("#age").value
);
```

## Creating Strings

* I can create strings using single quotes.

```js
const name = 'Gowtham';
```

* I can also use double quotes.

```js
const name = "Gowtham";
```

* Template literals use backticks.

```js
const name = `Gowtham`;
```

* Template literals are useful when I need to insert variables inside a string.

```js
const name = "Gowtham";
const position = "Full Stack Developer";

const message = `${name} applied for ${position}.`;
```

## Accessing Characters

* A string has indexes starting from `0`.

```js
const name = "Gowtham";

console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
```

Output:

```text
G
o
w
```

* This is useful when I need to access a particular character.

```js
const applicationId = "APP-2026-0001";

console.log(applicationId[0]);
```

* Output:

```text
A
```

## length

* `length` gives the number of characters in a string.

```js
const name = "Gowtham";

console.log(name.length);
```

* In my Job Application project, I can use it to validate input length.

```js
const name = "Gowtham Kumar";

if (name.length < 3) {
    console.log("Name is too short");
}
```

* It can also be used when limiting long text before displaying it.

## Strings are Immutable

* Strings cannot be changed directly after they are created.
* String methods normally return a new string instead of modifying the original string.

```js
let name = "gowtham";

name.toUpperCase();

console.log(name);
```

Output:

```text
gowtham
```

* The original string is still unchanged.

```js
const name = "gowtham";

const formattedName = name.toUpperCase();

console.log(formattedName);
```

Output:

```text
GOWTHAM
```

* This is important when cleaning or formatting form values because I should store the returned value if I need the changed string.

## toUpperCase()

* Converts all characters into uppercase.

```js
const status = "pending";

const formattedStatus =
    status.toUpperCase();

console.log(formattedStatus);
```

Output:

```text
PENDING
```

* In my Job Application project, I can use this when displaying application status in a consistent format.

```js
const status =
    application.applicationStatus.current;

console.log(status.toUpperCase());
```

## toLowerCase()

* Converts all characters into lowercase.

```js
const email = "GOWTHAM@EXAMPLE.COM";

const normalizedEmail =
    email.toLowerCase();
```

* This is useful for email and search values because users may enter uppercase or lowercase characters.

```js
const enteredEmail =
    " Gowtham@Example.com ";

const email =
    enteredEmail
        .trim()
        .toLowerCase();

console.log(email);
```

Output:

```text
gowtham@example.com
```

## trim()

* Removes spaces from the beginning and end of a string.
* It does not remove spaces between words.

```js
const name = "   Gowtham Kumar   ";

const cleanedName = name.trim();

console.log(cleanedName);
```

Output:

```text
Gowtham Kumar
```

* In my Job Application form, users may accidentally enter spaces before or after their name or email.
* I can clean the value before validating or sending it.

```js
const email =
    document.querySelector("#email").value
        .trim()
        .toLowerCase();
```

## trimStart()

* Removes spaces from the beginning of a string.

```js
const name = "   Gowtham";

console.log(name.trimStart());
```

Output:

```text
Gowtham
```

## trimEnd()

* Removes spaces from the end of a string.

```js
const name = "Gowtham   ";

console.log(name.trimEnd());
```

Output:

```text
Gowtham
```

## includes()

* Checks whether a string contains another string.
* It returns `true` or `false`.

```js
const position = "Full Stack Developer";

console.log(
    position.includes("Stack")
);
```

Output:

```text
true
```

* In my admin page, I can use it when searching applications.

```js
const position =
    application.position.title;

if (position.includes("Developer")) {
    console.log("Developer position");
}
```

* `includes()` is case-sensitive.

```js
console.log(
    "JavaScript".includes("javascript")
);
```

Output:

```text
false
```

* So for user search, I normally convert both values to lowercase.

```js
const search =
    searchValue.trim().toLowerCase();

const position =
    application.position.title.toLowerCase();

if (position.includes(search)) {
    console.log("Application found");
}
```

## startsWith()

* Checks whether a string starts with a particular value.

```js
const applicationId = "APP-2026-0001";

console.log(
    applicationId.startsWith("APP-")
);
```

Output:

```text
true
```

* In my Job Application project, application IDs follow a format like `APP-2026-0001`.
* I can check whether the ID starts with the expected prefix.

```js
const applicationId =
    application.applicationId;

if (applicationId.startsWith("APP-")) {
    console.log("Valid application ID format");
}
```

## endsWith()

* Checks whether a string ends with a particular value.

```js
const fileName =
    "gowtham-resume.pdf";

console.log(
    fileName.endsWith(".pdf")
);
```

Output:

```text
true
```

* This can be useful when checking uploaded resume file names.

```js
const fileName =
    application.documents.resume.fileName;

if (fileName.toLowerCase().endsWith(".pdf")) {
    console.log("PDF resume");
}
```

## indexOf()

* `indexOf()` returns the position where a value first appears.
* If the value does not exist, it returns `-1`.

```js
const position =
    "Full Stack Developer";

console.log(
    position.indexOf("Stack")
);
```

* This can be useful when I need the exact position of a character or substring.

```js
const email =
    application.applicant.personal.email;

const atPosition =
    email.indexOf("@");

console.log(atPosition);
```

* I can use this to find where the `@` character exists in an email.

## lastIndexOf()

* `lastIndexOf()` finds the last occurrence of a value.

```js
const fileName =
    "gowtham.resume.final.pdf";

console.log(
    fileName.lastIndexOf(".")
);
```

* This is useful for file extensions because the last `.` normally separates the extension.

```js
const fileName =
    application.documents.resume.fileName;

const extension =
    fileName
        .slice(fileName.lastIndexOf("."))
        .toLowerCase();

console.log(extension);
```

Output:

```text
.pdf
```

## charAt()

* `charAt()` returns the character at a specific index.

```js
const name = "Gowtham";

console.log(
    name.charAt(0)
);
```

Output:

```text
G
```

* It is another way of accessing characters besides bracket notation.

## at()

* `at()` also returns a character using its index.

```js
const name = "Gowtham";

console.log(name.at(0));
```

Output:

```text
G
```

* One useful difference is that `at()` supports negative indexes.

```js
const name = "Gowtham";

console.log(name.at(-1));
```

Output:

```text
m
```

* This is useful when I need the last character without calculating `length - 1`.

## slice()

* `slice()` extracts part of a string.
* It returns a new string.

```js
const position =
    "Full Stack Developer";

const result =
    position.slice(0, 9);

console.log(result);
```

Output:

```text
Full Stack
```

* The ending index is not included.

* In my Job Application project, I can use it to get a file extension.

```js
const fileName =
    application.documents.resume.fileName;

const extension =
    fileName.slice(
        fileName.lastIndexOf(".")
    );

console.log(extension);
```

* I can also use it to limit long descriptions.

```js
const description =
    application.applicant.internships[0]
        .description;

const preview =
    description.slice(0, 60);

console.log(`${preview}...`);
```

## substring()

* `substring()` also extracts part of a string.

```js
const position =
    "Full Stack Developer";

const result =
    position.substring(0, 9);
```

* `slice()` supports negative indexes, while `substring()` handles negative values differently.
* For most normal text extraction, `slice()` is easier to remember.

## replace()

* `replace()` replaces the first matching value.

```js
const position =
    "Full Stack Developer";

const updated =
    position.replace(
        "Developer",
        "Engineer"
    );

console.log(updated);
```

Output:

```text
Full Stack Engineer
```

* It does not modify the original string.

## replaceAll()

* `replaceAll()` replaces every occurrence.

```js
const skills =
    "JavaScript, JavaScript, JavaScript";

const result =
    skills.replaceAll(
        "JavaScript",
        "JS"
    );

console.log(result);
```

Output:

```text
JS, JS, JS
```

* This is useful when the same text appears multiple times and all occurrences need to be changed.

## split()

* `split()` converts a string into an array.
* The value passed to `split()` tells JavaScript where to divide the string.

```js
const skills =
    "JavaScript,Python,React";

const result =
    skills.split(",");

console.log(result);
```

Output:

```text
[
    "JavaScript",
    "Python",
    "React"
]
```

* This is useful when I receive comma-separated values from a form or API.

```js
const skillText =
    "JavaScript,Python,React";

const skills =
    skillText
        .split(",")
        .map(skill => skill.trim());
```

* Now each skill is separated and extra spaces can be removed.

## join()

* `join()` converts array values into one string.
* The value passed to `join()` is placed between the elements.

```js
const skills = [
    "JavaScript",
    "Python",
    "React"
];

const result =
    skills.join(", ");

console.log(result);
```

Output:

```text
JavaScript, Python, React
```

* In my Job Application project, I can use it when displaying internship technologies.

```js
const technologies =
    application.applicant.internships[0]
        .technologies;

const technologyText =
    technologies.join(", ");

console.log(technologyText);
```

Output:

```text
JavaScript, Node.js, Express, MongoDB
```

## split() + join()

* `split()` can break a string into pieces.
* `join()` can combine those pieces again.
* This is useful when I need to change the format of text.

```js
const skillText =
    "JavaScript,Python,React";

const formattedSkills =
    skillText
        .split(",")
        .map(skill => skill.trim())
        .join(" | ");

console.log(formattedSkills);
```

Output:

```text
JavaScript | Python | React
```

## concat()

* `concat()` joins strings together.

```js
const firstName = "Gowtham";
const lastName = "Kumar";

const fullName =
    firstName.concat(
        " ",
        lastName
    );

console.log(fullName);
```

* In my Job Application project:

```js
const firstName =
    application.applicant.personal.firstName;

const lastName =
    application.applicant.personal.lastName;

const fullName =
    firstName.concat(
        " ",
        lastName
    );
```

* Template literals are usually easier to read when there are many values.

## Template Literals

* Template literals use backticks.
* They allow variables and expressions to be inserted using `${}`.

```js
const firstName = "Gowtham";
const position = "Full Stack Developer";
const status = "Pending";

const message =
    `${firstName} applied for ${position}. Current status: ${status}.`;
```

* In my Job Application admin page, this is useful when creating dynamic text.

```js
const firstName =
    application.applicant.personal.firstName;

const position =
    application.position.title;

const status =
    application.applicationStatus.current;

const message =
    `${firstName} applied for ${position}. Current status: ${status}.`;
```

## Escape Characters

* Escape characters allow special characters to be written inside strings.

```js
const message =
    "Applicant's application is pending.";
```

* If I use the same quote type inside the string, I can escape it.

```js
const message =
    "Applicant's name is \"Gowtham\"";
```

* Common escape characters:

```text
\n  new line
\t  tab
\"  double quote
\'  single quote
\\  backslash
```

## Comparing Strings

* Strings can be compared using `===`.

```js
const status = "Pending";

if (status === "Pending") {
    console.log("Application is pending");
}
```

* String comparison is case-sensitive.

```js
console.log("Pending" === "pending");
```

Output:

```text
false
```

* When comparing user input, I can normalize the case first.

```js
const enteredStatus =
    "pending";

if (
    enteredStatus.toLowerCase() ===
    "pending"
) {
    console.log(
        "Application is pending"
    );
}
```

## Case-Insensitive Search

* Search values entered by users can have different uppercase and lowercase characters.
* I can convert both values to lowercase before searching.

```js
const searchValue =
    "FULL STACK";

const position =
    "Full Stack Developer";

if (
    position
        .toLowerCase()
        .includes(
            searchValue.toLowerCase()
        )
) {
    console.log(
        "Application found"
    );
}
```

* This is useful in the admin search box.

## Cleaning Form Input

* Form values should normally be cleaned before using them.
* `trim()` removes accidental spaces.
* `toLowerCase()` can normalize values like email addresses.

```js
const enteredEmail =
    document.querySelector("#email").value;

const email =
    enteredEmail
        .trim()
        .toLowerCase();
```

* This prevents values like:

```text
   Gowtham@Example.com
```

* From being stored as:

```text
   Gowtham@Example.com
```

* Instead I can store:

```text
gowtham@example.com
```

## File Name Processing

* Resume files contain useful string information in their names.
* I can use string methods to find the extension.

```js
const fileName =
    application.documents.resume.fileName;

const extension =
    fileName
        .slice(fileName.lastIndexOf("."))
        .toLowerCase();

console.log(extension);
```

* If the file name is:

```text
gowtham-resume.pdf
```

* The result is:

```text
.pdf
```

## Phone Number Formatting

* Phone numbers are usually stored as strings instead of numbers because they can contain `+`, spaces, country codes, or leading zeros.

```js
const phone =
    application.applicant.personal.phone;

console.log(phone);
```

* Example:

```text
+91-9876543210
```

* If I need to remove hyphens:

```js
const formattedPhone =
    phone.replaceAll("-", "");

console.log(formattedPhone);
```

## Masking Sensitive Information

* Sometimes I should not display the complete email address on an admin screen.

```js
const email =
    application.applicant.personal.email;

const [username, domain] =
    email.split("@");

const maskedEmail =
    `${username.slice(0, 2)}***@${domain}`;

console.log(maskedEmail);
```

* For example:

```text
gowtham@example.com
```

* Can be displayed as:

```text
go***@example.com
```

## Displaying Applicant Name

* In the JSON data, first name and last name are separate strings.

```js
const firstName =
    application.applicant.personal.firstName;

const lastName =
    application.applicant.personal.lastName;
```

* I can create the full name using a template literal.

```js
const fullName =
    `${firstName} ${lastName}`;
```

* This value can then be displayed in the admin table.

## Creating Application Summary

* I can use multiple strings from an application to create a readable summary.

```js
const firstName =
    application.applicant.personal.firstName;

const position =
    application.position.title;

const city =
    application.applicant.address.city;

const status =
    application.applicationStatus.current;

const summary =
    `${firstName} applied for ${position} from ${city}. Status: ${status}.`;

console.log(summary);
```

* This can be used for table text, notification messages, logs, or application details.

## Regular Expressions with Strings

* Regular expressions are useful when simple string methods are not enough.
* They are commonly used for pattern checking.

```js
const email =
    application.applicant.personal.email;

const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (emailPattern.test(email)) {
    console.log("Valid email");
}
```

* Another example is checking an application ID format.

```js
const applicationId =
    application.applicationId;

const pattern =
    /^APP-\d{4}-\d{4}$/;

if (pattern.test(applicationId)) {
    console.log("Valid application ID");
}
```

## match()

* `match()` searches a string using a regular expression.
* It can return the matching values.

```js
const text =
    "Application ID: APP-2026-0001";

const result =
    text.match(/APP-\d{4}-\d{4}/);

console.log(result);
```

* This can be useful when extracting application IDs from larger text.

## search()

* `search()` returns the position where a pattern is found.
* If there is no match, it returns `-1`.

```js
const email =
    "gowtham@example.com";

const position =
    email.search("@");

console.log(position);
```

* It is useful when I only need to know whether or where a pattern exists.

## padStart()

* `padStart()` adds characters to the beginning of a string until it reaches a specific length.

```js
const number = "25";

const formatted =
    number.padStart(4, "0");

console.log(formatted);
```

Output:

```text
0025
```

* This can be useful when creating formatted IDs or numbers.

```js
const applicationNumber =
    "25";

const formattedId =
    `APP-2026-${applicationNumber.padStart(4, "0")}`;
```

Result:

```text
APP-2026-0025
```

## padEnd()

* `padEnd()` adds characters to the end of a string.

```js
const status = "Pending";

console.log(
    status.padEnd(12, ".")
);
```

* It can be useful for fixed-width text output such as console reports.

## repeat()

* `repeat()` repeats a string a specified number of times.

```js
const separator =
    "-".repeat(30);

console.log(separator);
```

* This can be useful for console-based reports.

## String()

* `String()` converts a value into a string.

```js
const applicationNumber = 25;

const value =
    String(applicationNumber);

console.log(typeof value);
```

Output:

```text
string
```

* This is useful when I need to make sure a value is treated as text.

## Converting Numbers to Strings

* Numbers can be converted to strings using `String()` or `.toString()`.

```js
const experience = 2;

const result =
    String(experience);
```

* Or:

```js
const result =
    experience.toString();
```

* After conversion, string methods can be used.

```js
const experience = 2;

const value =
    experience.toString();

console.log(
    value.padStart(2, "0")
);
```

## JSON.stringify()

* `JSON.stringify()` converts a JavaScript object into a JSON string.

```js
const application = {
    applicationId: "APP-2026-0001",
    status: "Pending"
};

const jsonData =
    JSON.stringify(application);

console.log(jsonData);
```

* This is useful when sending JavaScript data to an API or storing object data as JSON text.

## JSON.parse()

* `JSON.parse()` converts a JSON string back into a JavaScript object.

```js
const jsonData =
    '{"applicationId":"APP-2026-0001","status":"Pending"}';

const application =
    JSON.parse(jsonData);

console.log(
    application.applicationId
);
```

* In my Job Application project, the `applications.json` file contains JSON data that is converted into JavaScript values when I call:

```js
const response =
    await fetch("../data/applications.json");

const applications =
    await response.json();
```

## Searching Application Data

* In the admin page, I need to search applications using values such as name, email, position, city, or skill.
* String methods are useful for this.

```js
function matchesApplication(
    application,
    searchValue
) {
    const search =
        searchValue
            .trim()
            .toLowerCase();

    const name =
        `${application.applicant.personal.firstName}
        ${application.applicant.personal.lastName}`
            .toLowerCase();

    const email =
        application.applicant.personal.email
            .toLowerCase();

    const position =
        application.position.title
            .toLowerCase();

    const city =
        application.applicant.address.city
            .toLowerCase();

    return (
        name.includes(search) ||
        email.includes(search) ||
        position.includes(search) ||
        city.includes(search)
    );
}
```

* The important idea here is:
* First clean the search value.
* Convert values to the same case.
* Use `includes()` to check whether the search text exists.

## Creating Skill Display Text

* In the application data, a skill contains separate information such as name, level, and experience.

```js
const skill = {
    name: "JavaScript",
    level: "Intermediate",
    experience: 1.5
};
```

* When displaying it in the admin page, I can create readable text.

```js
const skillText =
    `${skill.name} - ${skill.level} - ${skill.experience} years`;
```

* Result:

```text
JavaScript - Intermediate - 1.5 years
```

## Creating Internship Technology Text

* The internship data contains technology names.
* I can create a readable string for displaying them.

```js
const technologies =
    application.applicant
        .internships[0]
        .technologies;

const technologyText =
    technologies.join(", ");
```

* Result:

```text
JavaScript, Node.js, Express, MongoDB
```

## Limiting Long Text

* Application descriptions can become long.
* I can display only a small part in the table and show the complete text in the details page.

```js
const description =
    application.applicant
        .internships[0]
        .description;

function createPreview(
    text,
    limit = 60
) {
    const cleanedText =
        text.trim();

    if (cleanedText.length <= limit) {
        return cleanedText;
    }

    return `${cleanedText.slice(0, limit)}...`;
}
```

* If the description is longer than the limit, only the required portion is displayed.

## Common String Mistakes

* Forgetting that strings are immutable.

```js
const name = "gowtham";

name.toUpperCase();

console.log(name);
```

* The result is still:

```text
gowtham
```

* Correct way:

```js
const name = "gowtham";

const upperName =
    name.toUpperCase();
```

* Forgetting that `includes()` is case-sensitive.

```js
"JavaScript".includes("javascript");
```

* Better for user search:

```js
"JavaScript"
    .toLowerCase()
    .includes(
        "javascript".toLowerCase()
    );
```

* Forgetting to use `trim()` on form values.

```js
const email =
    input.value;
```

* Better:

```js
const email =
    input.value.trim();
```

* Using `==` instead of `===` when comparing values.

```js
if (status === "Pending") {
    // ...
}
```

* Forgetting that HTML input values are strings.

```js
const age =
    document.querySelector("#age").value;

console.log(typeof age);
```

* If a number is required:

```js
const age =
    Number(
        document.querySelector("#age").value
    );
```

## How I Used Strings in My Job Application Project

* Applicant names are stored as strings.
* Email addresses are cleaned using `trim()` and `toLowerCase()`.
* Application IDs are checked using `startsWith()`.
* Resume file extensions are extracted using `lastIndexOf()` and `slice()`.
* Search functionality uses `trim()`, `toLowerCase()`, and `includes()`.
* Applicant names and application summaries are created using template literals.
* Internship technologies are converted into readable text using `join()`.
* Long internship descriptions are shortened using `slice()`.
* Email addresses can be partially hidden using `split()` and `slice()`.
* Application data can be converted between JavaScript objects and JSON strings using `JSON.stringify()` and `JSON.parse()`.

## String Flow in My Job Application

```text
HTML form
    ↓
User enters text
    ↓
Read input value
    ↓
trim()
    ↓
Normalize case if required
    ↓
Validate
    ↓
Store or send data
    ↓
Receive data
    ↓
Search / format / display
```

## Important 
* String is mainly used for text.
* String indexes start from `0`.
* `length` gives the number of characters.
* Strings are immutable.
* Most string methods return a new string.
* `trim()` is useful for cleaning form input.
* `toLowerCase()` is useful for case-insensitive search.
* `includes()` checks whether text exists.
* `startsWith()` checks the beginning.
* `endsWith()` checks the ending.
* `indexOf()` finds the position of text.
* `slice()` extracts part of a string.
* `replace()` changes the first matching value.
* `replaceAll()` changes all matching values.
* `split()` converts a string into an array.
* `join()` creates a string from array values.
* Template literals make dynamic text easier to create.
* Regular expressions are useful for pattern validation.
* `JSON.stringify()` converts an object into a JSON string.
* `JSON.parse()` converts JSON text into a JavaScript object.
* In my Job Application project, strings are mainly used for user input, validation, searching, formatting, file names, status values, IDs, and displaying information.

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

# Error Handling

- Error handling means detecting when something goes wrong in an application and deciding what the application should do about it.
- Errors can happen because of invalid user input, failed API requests, unavailable services, unexpected data, programming mistakes, or external systems failing.
- Error handling is not only about preventing the application from crashing.
- It is also about:
  - giving useful feedback to the user
  - keeping the application in a safe state
  - logging useful information for debugging
  - deciding whether the operation can be retried
  - stopping invalid data from moving further into the application
  - separating technical error details from messages shown to users

In a job application application, errors can happen at different stages:

```
User fills application
        ↓
Validate application
        ↓
Upload resume
        ↓
Send API request
        ↓
Backend processes request
        ↓
Database stores application
        ↓
Email notification
        ↓
Return response
        ↓
Show result to user
```

Any of these steps can fail, so error handling should be considered throughout the complete flow.

## Error Object

JavaScript provides the Error object to represent an error.

```js
const error = new Error("Application submission failed");

console.log(error.name);
console.log(error.message);
console.log(error.stack);
```

- `error.name` gives the type of error → `Error`
- `error.message` gives the explanation of the error → `Application submission failed`
- `error.stack` gives information about where the error happened and the function call path that led to it. The stack is mainly useful when debugging.

In an application, the error object can contain much more useful information than just a message.

```js
const error = new Error("Resume upload failed");

console.error(error);
```

Usually, developers log the complete error internally while showing a simpler message to the user.

**Developer:**
```
Resume upload failed
TypeError...
stack trace...
```

**User:**
```
Unable to upload your resume. Please try again.
```

## Common JavaScript Error Types

**Error** is the general error type.
```js
throw new Error("Application submission failed");
```

**TypeError** usually happens when an operation is performed on a value of an unexpected type.
```js
const applicant = null;

console.log(applicant.name);
```

**ReferenceError** happens when JavaScript tries to access a variable that does not exist.
```js
console.log(applicationData);
```

**SyntaxError** happens when JavaScript syntax is invalid.
```js
const application = {
    name: "Gowtham"
```

**RangeError** happens when a value is outside an allowed range.
```js
const numbers = new Array(-1);
```

I don't need to memorize every error type. I mainly need to understand what kind of problem caused the error and how to investigate it.


## throw

`throw` is used when I want to deliberately create an error. This is useful when my application detects invalid data or a condition that should stop the current operation.

```js
function validateApplication(application) {

    if (!application.email) {
        throw new Error("Email is required");
    }

    if (!application.resume) {
        throw new Error("Resume is required");
    }

    return true;
}
```

If email is missing, this line executes:
```js
throw new Error("Email is required");
```

The function stops immediately. Code after the throw inside that execution path will not run.

```js
function validateApplication(application) {

    if (!application.email) {
        throw new Error("Email is required");
    }

    console.log("Validation completed");
}
```

If email is missing, `"Validation completed"` will not execute.

## try and catch

- `try` contains code that may produce an error.
- `catch` handles the error if an error occurs inside the try block.

```js
try {

    validateApplication(application);

} catch (error) {

    console.error(error);
}
```

The basic flow is:
```
try
 ↓
execute code
 ↓
error?
 ├── no → continue normally
 └── yes
       ↓
     catch
       ↓
   handle error
```

`try...catch` does not prevent an error from happening. It gives me a place where I can handle the error.

### catch Error Object

```js
try {

    validateApplication(application);

} catch (error) {

    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
```

- `error.name` tells me the error type.
- `error.message` tells me what happened.
- `error.stack` helps me find where the error originated.

In real application code, I should usually log the error with enough context.

```js
try {

    await submitApplication(application);

} catch (error) {

    console.error(
        "Job application submission failed:",
        error
    );
}
```

## finally

`finally` runs whether the operation succeeds or fails. It is useful for cleanup operations.

```js
try {

    await submitApplication(application);

} catch (error) {

    console.error(error);

} finally {

    setLoading(false);
}
```

For example, when a user submits a job application:

```
User clicks Submit
       ↓
Loading starts
       ↓
API request
       ↓
 ┌─────┴─────┐
Success      Error
   ↓           ↓
Success      Show error
   └─────┬─────┘
         ↓
   Stop loading
```

`finally` is useful because I don't want the loading state to remain active when an error happens.


## Error Propagation

An error can travel through multiple function calls until it reaches a catch.

```js
function validateApplication(application) {

    if (!application.email) {
        throw new Error("Email is required");
    }
}

function createApplication(application) {

    validateApplication(application);

    return application;
}

function submitApplication(application) {

    return createApplication(application);
}

try {

    submitApplication({
        name: "Gowtham"
    });

} catch (error) {

    console.log(error.message);
}
```

The error flow is:
```
submitApplication()
        ↓
createApplication()
        ↓
validateApplication()
        ↓
throw Error
        ↓
validateApplication stops
        ↓
createApplication stops
        ↓
submitApplication stops
        ↓
catch receives error
```

This is called error propagation. I don't always need to catch an error exactly where it occurs. I can allow the error to move upward to a layer that knows how to handle it.


## Call Stack and Errors

JavaScript keeps track of function calls using the call stack. When an error is thrown, the current execution stops and JavaScript looks for a suitable catch. This connects error handling directly with the call stack concept.

```
submitApplication()
        ↓
createApplication()
        ↓
validateApplication()
        ↓
throw Error
        ↓
JavaScript searches upward
        ↓
catch
```

If no suitable catch handles the error, the error can become an uncaught error.


## Don't Catch Errors Without a Purpose

I should not use `try...catch` everywhere just because an operation might fail.

**Bad example:**
```js
try {

    const total = price * quantity;

} catch (error) {

    console.log("Something went wrong");
}
```

There is no useful error-handling strategy here. Catching an error only to hide it can make debugging harder.

**Bad:**
```js
try {

    submitApplication();

} catch (error) {

    console.log("Something happened");
}
```

This loses useful information. A better approach is to log the actual error and handle it appropriately.

```js
try {

    await submitApplication();

} catch (error) {

    console.error(
        "Application submission failed:",
        error
    );

    showError(
        "Unable to submit your application. Please try again."
    );
}
```

## Validation Errors

Validation errors happen when the user provides data that does not satisfy the application's rules. These errors are expected and should normally be handled differently from unexpected system failures.

```js
function validateApplication(application) {

    if (!application.name) {
        throw new Error("Name is required");
    }

    if (!application.email) {
        throw new Error("Email is required");
    }

    if (!application.resume) {
        throw new Error("Resume is required");
    }
}
```

The user can correct these errors. The application should tell the user what needs to be corrected.
```
Email is required
Resume is required
```

## Custom Errors

Generic Error objects are sometimes not enough for larger applications. I can create custom error classes to represent different types of errors.

```js
class ValidationError extends Error {

    constructor(message) {

        super(message);

        this.name = "ValidationError";
    }
}
```

Now I can throw a specific validation error.

```js
function validateEmail(email) {

    if (!email.includes("@")) {

        throw new ValidationError(
            "Invalid email address"
        );
    }
}
```

I can create other error types when the application needs them.

```js
class AuthenticationError extends Error {

    constructor(message) {

        super(message);

        this.name = "AuthenticationError";
    }
}

class AuthorizationError extends Error {

    constructor(message) {

        super(message);

        this.name = "AuthorizationError";
    }
}

class NotFoundError extends Error {

    constructor(message) {

        super(message);

        this.name = "NotFoundError";
    }
}
```

This allows the application to distinguish between different problems:
- ValidationError
- AuthenticationError
- AuthorizationError
- NotFoundError
- DatabaseError
- ExternalServiceError

## instanceof

`instanceof` checks whether an object belongs to a particular class or constructor.

```js
const error = new ValidationError("Invalid email");

console.log(error instanceof ValidationError);
```
`true`

A custom error also belongs to the Error hierarchy.
```js
console.log(error instanceof Error);
```
`true`

This allows me to handle different errors differently.

```js
try {

    validateApplication(application);

} catch (error) {

    if (error instanceof ValidationError) {

        showError(error.message);

    } else {

        showError(
            "Something went wrong. Please try again."
        );
    }
}
```

## Re-throwing Errors

Sometimes a function catches an error only to log additional information and then sends the error back to the caller. This is called re-throwing.

```js
async function saveApplication(application) {

    try {

        return await database.save(application);

    } catch (error) {

        console.error(
            "Database save failed:",
            error
        );

        throw error;
    }
}
```

`throw error` is important here. Without it, the caller may not know that the database operation failed.

```
database
   ↓
error
   ↓
saveApplication()
   ↓
log error
   ↓
throw error
   ↓
caller handles it
```

## Synchronous Error Handling

Synchronous code runs immediately. Errors from synchronous code can be handled with normal `try...catch`.

```js
try {

    const result = calculateApplicationScore();

} catch (error) {

    console.error(error);
}
```

## Asynchronous Error Handling

Modern applications perform many asynchronous operations:
- API requests
- database operations
- file uploads
- authentication requests
- email services
- external APIs

With async/await, `try...catch` can be used naturally.

```js
async function loadApplications() {

    try {

        const response = await fetch(
            "/api/applications"
        );

        const data = await response.json();

        return data;

    } catch (error) {

        console.error(
            "Failed to load applications:",
            error
        );
    }
}
```

## Promise Error Handling

Promise chains can handle errors using `.catch()`.

```js
fetch("/api/applications")
    .then(response => response.json())
    .then(applications => {

        console.log(applications);

    })
    .catch(error => {

        console.error(
            "Failed to load applications:",
            error
        );
    });
```

The same operation using async/await:

```js
async function loadApplications() {

    try {

        const response = await fetch(
            "/api/applications"
        );

        const applications = await response.json();

        return applications;

    } catch (error) {

        console.error(
            "Failed to load applications:",
            error
        );
    }
}
```

When working with modern JavaScript applications, I should be comfortable handling errors with async/await.

## fetch and HTTP Errors

One important point about `fetch()` is that an HTTP error such as 400, 404, or 500 does not automatically cause `fetch()` to throw an error. `fetch()` mainly rejects when the request itself fails, such as a network failure.

```js
const response = await fetch("/api/applications");
```

If the server responds with `500 Internal Server Error`, the promise can still resolve with a Response object. Therefore I should check `response.ok`.

```js
if (!response.ok) {

    throw new Error(
        `Request failed with status ${response.status}`
    );
}
```

A proper API function can look like:

```js
async function loadApplications() {

    try {

        const response = await fetch(
            "/api/applications"
        );

        if (!response.ok) {

            throw new Error(
                `Request failed with status ${response.status}`
            );
        }

        const applications =
            await response.json();

        return applications;

    } catch (error) {

        console.error(
            "Failed to load applications:",
            error
        );

        throw error;
    }
}
```

The important difference is:
```
Network failure
      ↓
fetch rejects
      ↓
catch

HTTP 500
      ↓
fetch may resolve
      ↓
response.ok === false
      ↓
I decide to throw an error
```

## HTTP Status and Error Handling

Different HTTP errors can represent different problems.
- 400 → invalid request
- 401 → authentication required
- 403 → user does not have permission
- 404 → resource not found
- 409 → conflict
- 422 → validation problem
- 429 → too many requests
- 500 → server error
- 503 → service unavailable

I should not treat every status code exactly the same. The exact handling depends on the application's requirements.

**Example:**
```js
if (response.status === 401) {

    throw new AuthenticationError(
        "Authentication required"
    );
}

if (response.status === 403) {

    throw new AuthorizationError(
        "You don't have permission"
    );
}

if (response.status === 404) {

    throw new NotFoundError(
        "Application not found"
    );
}
```

## User Errors vs Developer Errors

The technical error shown to a developer and the message shown to a user should not always be the same.

**Bad:**
```js
catch (error) {

    document.querySelector("#error").textContent =
        error.stack;
}
```

Stack traces and internal system information should not normally be displayed to users.

**Better:**
```js
catch (error) {

    console.error(error);

    showError(
        "We couldn't submit your application. Please try again."
    );
}
```

- Developer gets detailed information.
- User gets a safe and useful message.

```
Developer
    ↓
technical error
stack
request information
debugging information

User
    ↓
simple explanation
possible action
```

## API Boundary Error Handling

The frontend and backend communicate through an API. The API boundary should be treated carefully because the response may fail, contain unexpected data, or return an error status.

```js
async function submitApplication(application) {

    try {

        const response = await fetch(
            "/api/applications",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(application)
            }
        );

        if (!response.ok) {

            if (response.status === 400) {

                throw new ValidationError(
                    "Application data is invalid"
                );
            }

            if (response.status === 401) {

                throw new AuthenticationError(
                    "Authentication required"
                );
            }

            throw new Error(
                `Server error: ${response.status}`
            );
        }

        return await response.json();

    } catch (error) {

        console.error(
            "Application API failed:",
            error
        );

        throw error;
    }
}
```

The API function handles technical communication. The UI layer decides what the user should see.

```js
async function handleSubmit(application) {

    setLoading(true);

    try {

        await submitApplication(application);

        showSuccess(
            "Application submitted successfully."
        );

    } catch (error) {

        if (error instanceof ValidationError) {

            showError(error.message);

        } else if (
            error instanceof AuthenticationError
        ) {

            showError(
                "Please log in before submitting."
            );

        } else {

            showError(
                "Unable to submit your application. Please try again."
            );
        }

    } finally {

        setLoading(false);
    }
}
```

This creates a clean separation:
```
UI
 ↓
API/service function
 ↓
backend
 ↓
database
```

Lower layers can provide technical error information. Higher layers decide how that error should affect the user interface.

## JSON.parse Errors

`JSON.parse()` converts JSON text into a JavaScript value. If the JSON is invalid, it throws a `SyntaxError`.

```js
try {

    const data = JSON.parse(serverData);

} catch (error) {

    console.error(
        "Invalid JSON received:",
        error
    );
}
```

This matters when handling external or stored JSON data.

## Fallback Handling

Not every error means the entire application must stop. Sometimes the application can provide fallback behavior.

**Example:**
```js
async function loadProfile() {

    try {

        const response = await fetch(
            "/api/profile"
        );

        if (!response.ok) {
            throw new Error("Profile request failed");
        }

        return await response.json();

    } catch (error) {

        console.error(error);

        return {
            name: "Guest",
            profileLoaded: false
        };
    }
}
```

The application can continue with limited functionality instead of completely failing.

## Retry Handling

Some failures are temporary. A network request may fail because of a temporary connection problem. An external service may temporarily be unavailable.

```
API request
    ↓
temporary failure
    ↓
retry
    ↓
success
```

I should not retry every error. For example:
- Network timeout → may retry
- 503 → may retry
- 400 → usually don't retry
- 401 → authentication handling
- 403 → permission handling
- 404 → usually don't retry

Retry logic should consider the type of error and the operation being performed. Repeating a request that changes data can sometimes create duplicate operations, so retry behavior must be designed carefully.


## Loading State and finally

UI operations often have loading states.

```js
async function handleSubmit(application) {

    setLoading(true);

    try {

        await submitApplication(application);

        showSuccess("Application submitted");

    } catch (error) {

        console.error(error);

        showError(
            "Unable to submit your application."
        );

    } finally {

        setLoading(false);
    }
}
```

Without `finally`, I may forget to stop the loading state in one of the error paths. `finally` is useful for cleanup that must happen regardless of success or failure.


## Global Error Handling

Sometimes an error is not handled anywhere in the application. A browser application can listen for global errors.

```js
window.addEventListener(
    "error",
    event => {

        console.error(
            "Unhandled error:",
            event.error
        );
    }
);
```

Promise rejections that are not handled can also be detected.

```js
window.addEventListener(
    "unhandledrejection",
    event => {

        console.error(
            "Unhandled promise rejection:",
            event.reason
        );
    }
);
```

These are a final safety net. They should not replace proper error handling around operations where I already know how to respond.


## Error Logging

Logging helps developers understand what happened when something fails. A useful log should contain enough context to investigate the problem.

```js
console.error(
    "Application submission failed",
    {
        applicationId,
        error: error.message
    }
);
```

In larger applications, errors are usually sent to a monitoring/logging system. The important information can include:
- error type
- error message
- stack trace
- operation being performed
- request information
- relevant non-sensitive identifiers
- time of occurrence

I should never log sensitive information unnecessarily. Examples of information I should be careful about:
- passwords
- authentication tokens
- private keys
- credit card information
- sensitive personal information

## Expected Errors vs Unexpected Errors

This is one of the most important concepts.

An **expected error** is something the application knows can happen.

**Example:**
- Email is missing
- Resume is missing
- Invalid file type
- User is not authenticated
- User doesn't have permission

The application can provide a meaningful response.

```js
if (!email) {

    throw new ValidationError(
        "Email is required"
    );
}
```

An **unexpected error** is something the application did not expect.

**Example:**
- Database suddenly unavailable
- Unexpected server response
- Programming bug
- Unexpected null value
- External service failure

These should usually be:
- logged
- handled safely
- shown to the user with a general message
- investigated by the developer


## Complete Job Application Error Handling Example

A job application submission can contain several layers of error handling.

```js
class ValidationError extends Error {

    constructor(message) {

        super(message);

        this.name = "ValidationError";
    }
}

class AuthenticationError extends Error {

    constructor(message) {

        super(message);

        this.name = "AuthenticationError";
    }
}

function validateApplication(application) {

    if (!application.name) {

        throw new ValidationError(
            "Applicant name is required"
        );
    }

    if (!application.email) {

        throw new ValidationError(
            "Email is required"
        );
    }

    if (!application.resume) {

        throw new ValidationError(
            "Resume is required"
        );
    }
}

async function submitApplication(application) {

    try {

        validateApplication(application);

        const response = await fetch(
            "/api/applications",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(application)
            }
        );

        if (response.status === 401) {

            throw new AuthenticationError(
                "Authentication required"
            );
        }

        if (!response.ok) {

            throw new Error(
                `Application request failed: ${response.status}`
            );
        }

        const result = await response.json();

        return result;

    } catch (error) {

        console.error(
            "Job application submission failed:",
            error
        );

        throw error;
    }
}

async function handleSubmit(application) {

    setLoading(true);

    try {

        const result =
            await submitApplication(application);

        showSuccess(
            "Application submitted successfully."
        );

        return result;

    } catch (error) {

        if (error instanceof ValidationError) {

            showError(error.message);

        } else if (
            error instanceof AuthenticationError
        ) {

            showError(
                "Please log in before submitting your application."
            );

        } else {

            showError(
                "We couldn't submit your application. Please try again."
            );
        }

    } finally {

        setLoading(false);
    }
}
```

The complete flow is:
```
User clicks Submit
        ↓
handleSubmit()
        ↓
set loading = true
        ↓
submitApplication()
        ↓
validateApplication()
        ↓
invalid?
 ┌──────┴───────┐
yes             no
 ↓               ↓
throw           fetch API
 ↓               ↓
catch            HTTP response
                 ↓
            response.ok?
             ┌───┴────┐
            no        yes
             ↓         ↓
          throw      parse JSON
             ↓         ↓
             └────┬────┘
                  ↓
              handleSubmit
                  ↓
          ┌───────┼─────────┐
          ↓       ↓         ↓
     validation  auth    unexpected
          ↓       ↓         ↓
       message  login     general message
                  ↓
               finally
                  ↓
          set loading = false
```

## Error Handling Mental Model

When I see an operation that can fail, I should think:
```
Can this operation fail?
        ↓
What kind of failure can happen?
        ↓
Can the user fix it?
        ↓
Can the application recover?
        ↓
Should I retry?
        ↓
Should I throw the error?
        ↓
Which layer should handle it?
        ↓
What should be logged?
        ↓
What should the user see?
```
## Important Mistakes to Avoid

- Don't use `try...catch` everywhere without a reason.
- Don't silently ignore errors.

**Bad:**
```js
try {

    submitApplication();

} catch (error) {

}
```

- Don't replace useful errors with meaningless messages.

**Bad:**
```js
catch (error) {

    throw new Error("Something went wrong");
}
```

- Don't expose stack traces or internal system details to users.
- Don't assume `fetch()` throws for HTTP 400, 404, or 500. Check `response.ok` or handle status codes when appropriate.
- Don't catch an error and forget to re-throw it when the caller still needs to know about the failure.
- Don't retry every error automatically.
- Don't log passwords, tokens, or other sensitive information.
- Don't treat expected validation errors and unexpected system failures exactly the same.
- Don't let the UI layer contain all API, validation, and business logic in one huge function.


## Main Things I Need to Remember

- `throw` creates an error and stops the current execution path.
- `try` contains code that may fail.
- `catch` handles an error.
- `finally` runs whether the operation succeeds or fails.
- Errors can propagate through multiple function calls.
- Error contains useful information such as name, message, and stack.
- Custom error classes allow different errors to be handled differently.
- `instanceof` can identify custom error types.
- Errors can be re-thrown after logging or adding context.
- async/await errors can be handled using try...catch.
- Promise chains can use `.catch()`.
- `fetch()` does not automatically reject just because the server returns 400 or 500.
- `response.ok` should be checked when appropriate.
- Validation errors are different from unexpected system errors.
- Technical error details are for developers; user messages should be simple and safe.
- `finally` is useful for cleanup such as stopping loading indicators.
- Global error handlers are a final safety net, not a replacement for proper local handling.
- Good error handling means deciding how the application should recover, stop, retry, log, or communicate the failure.


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

* When the project becomes big, writing everything in one `app.js` file becomes a mess. Modules let me split the code into small files, and each file has one job (API calls, helper functions, constants, UI code).
* Variables inside a module are private to that file (not global). Other files can use them only if the module exports them.
* Named exports are used when a file needs to export multiple values.

```js
// utils/formatDate.js
export const STATUSES = ["Applied", "Shortlisted", "Interview", "Rejected", "Hired"];

export function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}
```

```js
// admin/admin.js
import { STATUSES, formatDate } from "../utils/formatDate.js";

console.log(STATUSES);
console.log(formatDate("2025-06-12T10:30:00Z"));
```

* The imported name must match the exported name (inside `{ }`). If there is a name clash, I can rename it with `as`.

```js
import { formatDate as showDate } from "../utils/formatDate.js";
```

* A default export is used when the file has one main thing. The importing file can give it any name. A file can have only one default export but many named exports.

```js
// api/applicationApi.js
export default async function getApplications(filters) {
    const params = new URLSearchParams(filters);
    const response = await fetch(`/api/applications?${params}`);

    if (!response.ok) {
        throw new Error("Failed to load applications");
    }

    return response.json();
}

export async function deleteApplication(id) {
    const response = await fetch(`/api/applications/${id}`, { method: "DELETE" });

    if (!response.ok) {
        throw new Error("Failed to delete application");
    }
}
```

```js
// admin/admin.js
import getApplications, { deleteApplication } from "../api/applicationApi.js";

const data = await getApplications({ status: "Applied" });
```

* Here `getApplications` is the default import (no braces, any name works) and `deleteApplication` is a named import (braces, exact name).
* In the browser, modules are loaded using `type="module"`.

```html
<script type="module" src="./admin/admin.js"></script>
```

* Things I noticed about `type="module"`:
  * It works like `defer`, so the script runs after the HTML is parsed.
  * It needs a server (Live Server, Vite, etc). Opening the file directly with `file://` gives a CORS error.
  * A module is executed only once even if many files import it.
* In a real project the folder structure looks something like this:

```text
src/
├── api/
│   ├── request.js
│   ├── applicationApi.js
│   └── jobApi.js
├── components/
│   ├── ApplicationForm.js
│   ├── ApplicationTable.js
│   └── FilterBar.js
├── utils/
│   ├── formatDate.js
│   ├── validators.js
│   └── storage.js
├── pages/
│   ├── apply.js
│   └── admin.js
└── constants.js
```

* Webpack and Vite are build tools. During development they give a dev server with auto reload. For production they combine all modules into a few small files, minify them, and add hash names for caching.
* Vite is faster to set up. Webpack is more configurable. Since my project has two pages (apply and admin), Vite needs both entries in the config:

```js
// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                apply: "apply.html",
                admin: "admin.html"
            }
        }
    }
});
```

* `npm run dev` starts the dev server and `npm run build` creates the production `dist/` folder.
* Dynamic `import()` can load a module only when needed. For example the admin page can load the "export to Excel" code only when the button is clicked, so the first page load is faster.

```js
document.querySelector("#exportBtn").addEventListener("click", async () => {
    const { exportToExcel } = await import("../utils/exportExcel.js");
    exportToExcel(applications);
});
```

# JSON

* JSON means JavaScript Object Notation. It is text format used to send and store structured data. The frontend and backend of the job portal talk to each other using JSON.
* JSON looks like a JS object but it is only text and the rules are stricter: keys must be in double quotes, no comments, no trailing commas, no functions.
* This is what the admin API may send back for the applications list:

```json
{
    "total": 42,
    "page": 1,
    "applications": [
        {
            "id": 501,
            "name": "Gowtham",
            "email": "gowtham@example.com",
            "position": "Frontend Developer",
            "experience": 1,
            "skills": ["JavaScript", "React"],
            "status": "Applied",
            "appliedOn": "2025-06-12T10:30:00Z"
        }
    ]
}
```

* `JSON.parse()` converts a JSON string into a JS value. Normally `response.json()` does this for me when using fetch, but `JSON.parse()` is needed when reading text from other places like `localStorage`.

```js
const text = '{"id":501,"name":"Gowtham","status":"Applied"}';

const application = JSON.parse(text);

console.log(application.status);
```

* If the text is not valid JSON, `JSON.parse()` throws an error, so in real code I wrap it in `try...catch` when the data comes from outside (like storage).

```js
try {
    JSON.parse("{name: 'Gowtham'}");
} catch (error) {
    console.error("Invalid JSON:", error.message);
}
```

* `JSON.stringify()` converts a JS value into a JSON string. It is used when sending the application form data to the backend.

```js
const application = {
    name: "Gowtham",
    email: "gowtham@example.com",
    position: "Frontend Developer",
    experience: 1,
    skills: ["JavaScript", "React"]
};

const jsonData = JSON.stringify(application);

fetch("/api/applications", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: jsonData
});
```

* The `Content-Type: application/json` header tells the backend that the body is JSON, so it can parse it.
* Shallow copy copies only the first level. Nested objects are still shared with the original.
* Example from the admin page: when HR clicks "Edit" on an application, I want to keep a copy in the edit popup, so the original table data does not change until HR clicks Save.

```js
const application = {
    id: 501,
    name: "Gowtham",
    address: {
        city: "Erode"
    }
};

const editCopy = { ...application };

editCopy.name = "Arun";
editCopy.address.city = "Chennai";

console.log(application.name);
console.log(application.address.city);
```

* `name` stays "Gowtham" but `city` becomes "Chennai" in the original too, because `address` is still the same object. This bug can silently change table data.
* Deep copy fixes this. For simple JSON data I can use `JSON.parse(JSON.stringify())`.

```js
const editCopy = JSON.parse(JSON.stringify(application));

editCopy.address.city = "Chennai";

console.log(application.address.city);
```

* `structuredClone(application)` is the newer built-in way and it handles `Date`, `Map` and `Set` also.
* Limitations of JSON copy and JSON in general:
  * `Date` becomes a string. That is why `appliedOn` comes as `"2025-06-12T10:30:00Z"` and I need `new Date(appliedOn)` to use it as a date.
  * `undefined` and functions are removed. `BigInt` throws an error. `Map` and `Set` become empty objects.

# Storage

* Browser storage is for small amounts of data that should stay in the user's browser. In the job portal I use it only for UI convenience, not for real application data. Real applications are saved in the database through the backend.
* `localStorage` keeps data even after closing the browser. I use it in the admin page to remember HR's last filter, sort and page size, so they don't need to select everything again every day.
* Both storages save only strings, so objects need `JSON.stringify()` before saving and `JSON.parse()` after reading.

```js
// utils/storage.js
export function savePreferences(preferences) {
    localStorage.setItem("adminPreferences", JSON.stringify(preferences));
}

export function loadPreferences() {
    const defaults = { status: "", position: "", sortBy: "appliedOn", order: "desc", pageSize: 20 };

    try {
        const saved = JSON.parse(localStorage.getItem("adminPreferences"));
        return { ...defaults, ...saved };
    } catch {
        return defaults;
    }
}
```

* `getItem()` returns `null` when the key does not exist, and the saved value can also be corrupted, so I use `try...catch` and default values.
* Using it on the admin page:

```js
import { savePreferences, loadPreferences } from "../utils/storage.js";

const filters = loadPreferences();

document.querySelector("#statusFilter").addEventListener("change", (event) => {
    filters.status = event.target.value;
    savePreferences(filters);
    loadApplications();
});
```

* `sessionStorage` keeps data only for the current tab. It is cleared when the tab is closed. I use it in the application form to save a draft, so if the candidate refreshes the page by mistake, the typed data does not go away.

```js
const form = document.querySelector("#applicationForm");

form.addEventListener("input", () => {
    const draft = {
        name: form.name.value,
        position: form.position.value,
        experience: form.experience.value
    };

    sessionStorage.setItem("applicationDraft", JSON.stringify(draft));
});

const draft = JSON.parse(sessionStorage.getItem("applicationDraft"));

if (draft) {
    form.name.value = draft.name;
    form.position.value = draft.position;
    form.experience.value = draft.experience;
}
```

* After the form is submitted successfully, the draft should be removed.

```js
sessionStorage.removeItem("applicationDraft");
```

* Cookies are small data that the browser automatically sends to the same domain with every request. In the job portal, the admin login session is stored in a cookie set by the backend.
* Important cookie flags:
  * `HttpOnly` means JavaScript cannot read the cookie, so XSS attacks cannot steal it.
  * `Secure` means the cookie is sent only over HTTPS.
  * `SameSite` helps to reduce CSRF attacks.
* To send cookies with `fetch()` to the backend, I need `credentials: "include"` (or `"same-origin"` if same domain).

```js
fetch("/api/applications", { credentials: "include" });
```

* Things I should NOT store in `localStorage`: passwords, auth tokens (if XSS happens the script can read it), and applicants' personal data like phone number, email and resume details. Any script running on the page can read `localStorage`.
* Methods to remember:
  * `setItem(key, value)` saves, `getItem(key)` reads, `removeItem(key)` deletes one item, `clear()` deletes everything in that storage.
* Quick difference for my notes:
  * `localStorage` → stays until removed, same browser (used for admin filter preferences and theme).
  * `sessionStorage` → only for that tab (used for form draft).
  * Cookie → sent to server automatically (used for login session).

# Fetch / AJAX

* AJAX means the browser sends a request to the server in the background and updates only a part of the page, without reloading the whole page. In the admin page, when HR changes a filter, only the table changes.
* `fetch()` is the modern API for this. It returns a Promise because the server does not reply immediately.
* Basic GET request to load the applications:

```js
fetch("/api/applications")
    .then((response) => response.json())
    .then((data) => {
        console.log(data.applications);
    })
    .catch((error) => {
        console.error(error);
    });
```

* `fetch()` does not reject the Promise for `404` or `500`. It rejects only for network failures. So I must check `response.ok` myself.
* In a real project, I don't want to repeat this checking in every function, so I create one reusable helper.

```js
// api/request.js
export async function request(path, { headers, ...options } = {}) {
    const response = await fetch(`/api${path}`, {
        credentials: "include",
        headers: { "Content-Type": "application/json", ...headers },
        ...options
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
        throw new Error(data?.message || `Request failed with status ${response.status}`);
    }

    return data;
}
```

* This helper adds the cookie credentials, sets the JSON header, reads the JSON, and throws a proper error when the status is not OK (like 400 validation error from the backend).
* Submitting the job application form (POST). `method` is the HTTP method, `headers` describe the data, `body` is the data.

```js
import { request } from "../api/request.js";

async function submitApplication(application) {
    return request("/applications", {
        method: "POST",
        body: JSON.stringify(application)
    });
}
```

* Using it in the form submit event, with loading state and error message:

```js
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const application = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        position: form.position.value,
        experience: Number(form.experience.value)
    };

    submitButton.disabled = true;

    try {
        await submitApplication(application);
        messageBox.textContent = "Application submitted successfully";
        sessionStorage.removeItem("applicationDraft");
        form.reset();
    } catch (error) {
        messageBox.textContent = error.message;
    } finally {
        submitButton.disabled = false;
    }
});
```

* Disabling the button in `try` and enabling it in `finally` stops the candidate from clicking submit twice and creating duplicate applications.
* Resume upload needs `FormData` and not JSON, because a file is binary data.

```js
const formData = new FormData();

formData.append("resume", resumeInput.files[0]);
formData.append("applicationId", 501);

fetch("/api/applications/501/resume", {
    method: "POST",
    credentials: "include",
    body: formData
});
```

* Here I should NOT set `Content-Type` manually. The browser sets `multipart/form-data` with the correct boundary automatically. If I set it myself, the upload breaks. (So this one does not use my `request()` helper, since it forces the JSON header.)
* Loading the admin table with filters, sorting and pagination. The filter values go in the URL as query parameters. `URLSearchParams` builds it properly and encodes special characters.

```js
export function getApplications(filters) {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
        if (value) {
            params.append(key, value);
        }
    });

    return request(`/applications?${params}`);
}

// example result: /api/applications?status=Applied&sortBy=experience&order=desc&page=1
```

* Filtering, sorting and pagination should be done in the backend/database, not in the frontend. If there are 10,000 applications, the frontend should not download everything and filter in JavaScript. It should ask the backend only for the required page.
* Updating status (PATCH) and deleting (DELETE):

```js
export function updateStatus(id, status) {
    return request(`/applications/${id}/status`, {
        method: "PATCH",
        body: JSON.stringify({ status })
    });
}

export function deleteApplication(id) {
    return request(`/applications/${id}`, { method: "DELETE" });
}
```

* `PUT` replaces the whole record, `PATCH` changes only some fields. Status update only changes one field, so `PATCH` fits better.
* Search box problem: if the user types "gowtham" quickly, many requests are sent, and an older slow request may return after the new one and show wrong data. Two fixes: debounce (wait until typing stops) and `AbortController` (cancel the old request).

```js
let controller = null;

async function searchApplications(text) {
    if (controller) {
        controller.abort();
    }

    controller = new AbortController();

    try {
        const data = await request(`/applications?search=${encodeURIComponent(text)}`, { signal: controller.signal });
        renderTable(data.applications);
    } catch (error) {
        if (error.name !== "AbortError") {
            showError(error.message);
        }
    }
}
```

* `XMLHttpRequest` is the older AJAX API. I may see it in old projects. `fetch()` is preferred now because it works with Promises and `async/await`.
* Full connection in my project: table filter change → `fetch()` with query params → backend API checks the cookie/login → database query → JSON response → `renderTable()` updates the page.

# Promises

* A Promise is an object that represents a result which will come in the future. JavaScript does not wait and block everything. It continues running other code and handles the result when it is ready.
* In the job portal, Promises are used for: submitting the form, loading the applications, uploading the resume, updating the status, waiting for a timer, etc.
* Before Promises, callbacks were used, and when one async task depends on another, code became nested (callback hell).

```js
getApplication(501, function(application) {
    getJob(application.jobId, function(job) {
        getRecruiter(job.recruiterId, function(recruiter) {
            console.log(recruiter.name);
        });
    });
});
```

* Promise has three states:
  * `pending` means work is still going on.
  * `fulfilled` means it completed successfully.
  * `rejected` means it failed.
* It starts as `pending` and moves to either `fulfilled` or `rejected`. Once it is settled it cannot change again.
* A Promise can be created using the `Promise` constructor. `resolve()` marks it successful with the result, `reject()` marks it failed with the reason.

```js
const uploadPromise = new Promise((resolve, reject) => {
    const fileSizeMB = 3;

    if (fileSizeMB <= 5) {
        resolve("Resume uploaded");
    } else {
        reject("File is too large, maximum 5 MB");
    }
});
```

* `resolve()` and `reject()` don't "return" the value. They settle the Promise, and the value is received later using `.then()`, `.catch()` or `await`.
* `uploadPromise` is not the final data. It is only an object representing a future result.
* `.then()` handles success, `.catch()` handles failure, `.finally()` runs always.

```js
uploadPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Upload request finished");
    });
```

* `finally()` is good for cleanup, like hiding the loading spinner in the admin table.

```js
showSpinner();

getApplications(filters)
    .then((data) => renderTable(data.applications))
    .catch((error) => showError(error.message))
    .finally(() => hideSpinner());
```

* Without `finally`, the spinner would keep running forever if the request failed.
* `fetch()` immediately returns a Promise (of the response). When the server replies, it becomes fulfilled. `response.json()` also returns a Promise because reading the body is async. That is why there are two `.then()`.

```js
fetch("/api/applications/501")
    .then((response) => response.json())
    .then((application) => {
        console.log(application.name);
    });
```

* Chaining works because `.then()` returns a new Promise. If a `.then()` returns a normal value, the next `.then()` gets that value. If it returns a Promise, the next `.then()` waits for it.

```js
Promise.resolve(2)
    .then((years) => years * 12)
    .then((months) => {
        console.log(months); // 24
    });
```

* Real use: open one application, then load the job details for that application. The second request needs `jobId` from the first response, so they must run one after another.

```js
fetch("/api/applications/501")
    .then((response) => response.json())
    .then((application) => {
        return fetch(`/api/jobs/${application.jobId}`);
    })
    .then((response) => response.json())
    .then((job) => {
        console.log(job.title);
    })
    .catch((error) => {
        console.error(error);
    });
```

* If I forget to `return` the inner `fetch()`, the next `.then()` receives `undefined` and does not wait. This was an easy mistake to make.
* Error handling: `throw` inside `.then()` makes that step rejected, and the next `.catch()` handles it.

```js
fetch("/api/applications/501")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
    })
    .then((application) => {
        if (application.status === "Hired") {
            throw new Error("Hired applications cannot be edited");
        }

        console.log("Editable:", application);
    })
    .catch((error) => {
        console.error(error.message);
    });
```

* One `.catch()` at the end can handle errors from any step above it in the chain.
* When requests are independent, do not wait for one before starting another. The admin dashboard needs applications, jobs and statistics, and none of them depends on the other.
* `Promise.all()` starts all together and gives all results. It fails if even one Promise fails.

```js
async function loadDashboard() {
    const [applications, jobs, stats] = await Promise.all([
        request("/applications?page=1"),
        request("/jobs"),
        request("/applications/stats")
    ]);

    renderTable(applications.applications);
    fillJobFilter(jobs);
    showStats(stats);
}
```

* If these three ran one after another, the total time would be the sum of all three. With `Promise.all()` it is roughly the time of the slowest one.
* `Promise.allSettled()` waits for all and tells the status of each one, even if some failed. Useful when the page can still show partial data, for example if the stats API fails but the table should still load.

```js
const results = await Promise.allSettled([
    request("/applications"),
    request("/jobs"),
    request("/applications/stats")
]);

results.forEach((result) => {
    if (result.status === "fulfilled") {
        console.log("Success:", result.value);
    } else {
        console.error("Failed:", result.reason.message);
    }
});
```

* `Promise.race()` settles as soon as the first Promise settles (success or failure). I can use it to add a timeout to a slow request.

```js
function timeout(ms) {
    return new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Request timed out")), ms);
    });
}

const data = await Promise.race([request("/applications"), timeout(5000)]);
```

* `Promise.any()` fulfills with the first successful Promise and ignores failures unless all fail. Example: try the main API server and a backup server, use whichever answers successfully first.
* A small helper that returns a Promise: `wait()`, which can be used for retrying a failed request.

```js
function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function retry(task, attempts = 3) {
    for (let i = 1; i <= attempts; i++) {
        try {
            return await task();
        } catch (error) {
            if (i === attempts) {
                throw error;
            }

            await wait(1000 * i);
        }
    }
}

const data = await retry(() => request("/applications"));
```

* `async/await` is just a cleaner way to write Promises. An `async` function always returns a Promise, and `await` pauses that function (not the whole page) until the Promise is settled. Errors are handled with `try...catch`, which is what I used in the form submit code above.
* Points I want to remember:
  * A Promise does not make the operation faster. It only gives a clean way to handle something that is already asynchronous.
  * A Promise does not create a new thread. The async work is done by browser APIs (or Node.js APIs), and the event loop brings the result back to JavaScript.
  * `.then()` callbacks are microtasks, so they run before `setTimeout` callbacks.


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

Ex: When you build a payment checkout system, every payment method (Credit Card, PayPal, Apple Pay) shares common behavior (like generating transaction IDs, writing audit logs,, but each has its own unique processing logic.

```js

// Base prototype / parent class
class PaymentProcessor {
  constructor(amount, currency = "USD") {
    this.amount = amount;
    this.currency = currency;
    this.transactionId = `TXN-${Math.random().toString(36).substr(2, 9)}`;
  }

  // Shared method residing on PaymentProcessor.prototype
  logTransaction(status) {
    console.log(`[AUDIT] ${this.transactionId} | ${this.amount} ${this.currency} | Status: ${status}`);
  }
}

// Child class inheriting from PaymentProcessor via Prototype Chain
class StripeProcessor extends PaymentProcessor {
  constructor(amount, currency, cardNumber) {
    super(amount, currency); // Runs parent constructor
    this.cardNumber = cardNumber;
  }

  process() {
    // Unique processing logic...
    const success = true;
    this.logTransaction(success ? "SUCCESS" : "FAILED"); // Inherited up the prototype chain
    return success;
  }
}

const checkout = new StripeProcessor(150, "USD", "**** **** **** 4242");
checkout.process();
```

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
          this.count = 0; // Here 'this' refers to the Dashboard instance

          document.querySelector("#increase").addEventListener ("click", () => {  
            // Arrow function looks outside its own scope to constructor()
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
* `call()` lets an object borrow a function and run it immediately by passing this explicitly, followed by arguments.

```js
const printer = {
  paperType: "A4 Standard",
  printDocument(documentTitle) {
    console.log(`Printing "${documentTitle}" using ${this.paperType}`);
  }
};

const sarah = { paperType: "Glossy Photo Paper" };
// "Hey Printer, run printDocument RIGHT NOW, but use Sarah's settings!"
printer.printDocument.call(sarah, "Marketing Flyer");

// Output: Printing "Marketing Flyer" using Glossy Photo Paper
```

* `apply()` does the same but receives function arguments as an array.
* `apply()` is identical to `call()`, but takes the parameters as an array instead of individual items

```js
const sarah = { paperType: "Glossy Photo Paper" };
const printArgs = ["Marketing Flyer"]; // Arguments packed in an array
printer.printDocument.apply(sarah, printArgs);

// Output: Printing "Marketing Flyer" using Glossy Photo Paper
```

* `bind()` creates a new function with a fixed `this`.
* bind() doesn't run the function immediately. It returns a brand-new function with this permanently attached so it can be passed into timers or event listeners safely

```js
const boss = { paperType: "Official Letterhead" };

// Create a NEW function where `this` is permanently locked to `boss`
const scheduledJob = printer.printDocument.bind(boss, "Daily Financial Report");

// Hand the locked function to setTimeout to run 5 seconds later
setTimeout(scheduledJob, 5000);

// Output (after 5s): Printing "Daily Financial Report" using Official Letterhead
```

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
* This is useful when dis
playing only pending records in an admin dashboard.

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

# Event Loop & Concurrency

* JavaScript uses a single-threaded execution model for running JavaScript code, while the surrounding runtime handles asynchronous operations so JavaScript does not have to wait synchronously for every operation.

* The main pieces are:

* Call Stack
* Web APIs / Runtime APIs
* Task Queue
* Microtask Queue
* Event Loop
* Rendering

* The simplified lifecycle is:

```text
Synchronous JavaScript | Call Stack | Async operation | Queue | Event Loop | Callback execution
```

# Call Stack

Definition: The call stack is the structure JavaScript uses to keep track of the functions currently being executed.

* When a function is called, it is pushed onto the call stack.
* When it finishes, it is removed.
* JavaScript executes the function at the top of the stack.

```js
function createTask() {
    console.log("Creating task");
}

function handleRequest() {
    createTask();
}

handleRequest();
```

* The execution can be understood as:

```text
handleRequest() | createTask() | console.log() | createTask finishes | handleRequest finishes
```

* The stack follows LIFO: Last In, First Out.
* This matters because another JavaScript function cannot execute on the same call stack while long-running synchronous code is occupying it.

## Blocking the Call Stack

Definition: Blocking happens when synchronous JavaScript keeps the call stack busy for a long time and prevents other JavaScript work from executing.

```js
function processLargeTaskList() {
    for (let i = 0; i < 10000000000; i++) {
        // heavy processing
    }
}

processLargeTaskList();

console.log("Request completed");
```

* `"Request completed"` cannot run until the loop finishes.
* In a browser, this can freeze the UI.
* In Node.js, CPU-heavy synchronous work can delay other requests and callbacks.

# Web APIs / Runtime APIs

Definition: Runtime APIs are asynchronous capabilities provided by the environment around JavaScript, such as browser APIs or Node.js APIs.

* In a browser, examples include:
* `setTimeout`
* `fetch`
* DOM events
* browser APIs

* In Node.js, asynchronous file, network, timer, and other system operations are handled by the Node.js runtime.

```js
console.log("Start");

setTimeout(() => {
    console.log("Timer finished");
}, 2000);

console.log("End");
```

* The synchronous code executes first:

```text
console.log("Start") | setTimeout() | console.log("End")
```

* The timer is handled by the runtime.
* Its callback becomes eligible for execution after the timer expires.
* The callback still has to wait for the call stack and scheduling rules.

# Task Queue

Definition: The task queue stores callbacks from completed asynchronous tasks that are waiting for the JavaScript call stack to become available.

* It is also commonly called the macrotask queue.
* Timer callbacks and browser events are common examples.
* A `0` millisecond timer does not execute immediately.

```js
console.log("Start");

setTimeout(() => {
    console.log("Task callback");
}, 0);

console.log("End");
```

* Output:

```text
Start | End | Task callback
```

* The important sequence is:

```text
Synchronous code | Call stack becomes empty | Task callback becomes executable | Event loop moves it to the call stack
```

# Microtask Queue

Definition: The microtask queue contains promise-related callbacks and other microtasks that are processed after the current synchronous execution finishes and before the next normal task.

* Common microtasks include:
* `Promise.then()`
* `Promise.catch()`
* `Promise.finally()`
* `queueMicrotask()`
* continuation of an `async` function after `await`

```js
console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise callback");
});

setTimeout(() => {
    console.log("Timer callback");
}, 0);

console.log("End");
```

* Output:

```text
Start | End | Promise callback | Timer callback
```

* The reason is:

```text
Synchronous code | Microtasks | Next task
```

* Promise callbacks therefore normally run before a timer task that is already waiting.

# Event Loop

Definition: The event loop coordinates when queued asynchronous callbacks can move onto the call stack for JavaScript execution.

* A simplified model is:

```text
Call Stack | Synchronous execution | Call Stack empty | Microtasks | Next task | Repeat
```

* The event loop does not execute JavaScript itself.
* It coordinates when queued callbacks are allowed to enter the call stack.

```js
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
```

* Output:

```text
A | D | C | B
```

* The execution is:

```text
A | register timer | register promise callback | D | stack empty | C | B
```

# `async` / `await`

Definition: `async` and `await` provide a readable way to work with promises, but `await` pauses only the current async function rather than blocking the entire JavaScript runtime.

```js
async function loadTasks() {
    console.log("Before API call");

    const response = await fetch("/api/tasks");

    console.log("After API call");
}

loadTasks();

console.log("Continue running");
```

* When execution reaches `await`, the network operation continues asynchronously.
* The `loadTasks()` function pauses until the promise settles.
* Other JavaScript can execute during that time.

```text
loadTasks() | fetch starts | await pauses loadTasks | other JavaScript runs | response arrives | continuation runs
```

* This is why `async/await` is useful in API development.

# Promise Microtasks

Definition: Promise callbacks are scheduled as microtasks, so they run after the current synchronous code finishes.

```js
console.log("1");

Promise.resolve().then(() => {
    console.log("2");
});

console.log("3");
```

* Output:

```text
1 | 3 | 2
```

* The Promise callback does not interrupt the current synchronous execution.

# Task Queue vs Microtask Queue

Definition: Both queues hold callbacks waiting to execute, but microtasks are processed before the next normal task.

```js
setTimeout(() => {
    console.log("Timer");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});
```

* Output:

```text
Promise | Timer
```

* The simplified order is:

```text
Current JavaScript finishes | Microtask queue | Promise callback | Task queue | Timer callback
```

## Too Many Microtasks

Definition: Excessive microtask work can delay normal tasks because the runtime processes pending microtasks before moving to the next task.

```js
function createMicrotasks() {
    Promise.resolve().then(() => {
        console.log("Microtask");

        createMicrotasks();
    });
}

createMicrotasks();

setTimeout(() => {
    console.log("Timer");
}, 0);
```

* This keeps creating microtasks.
* The timer can be delayed because the microtask queue keeps receiving more work.
* The lesson is that asynchronous does not automatically mean inexpensive.

# Rendering

Definition: Rendering is the browser's process of updating the visible page after JavaScript changes, style/layout work, and painting are handled.

* Rendering is mainly relevant to browser JavaScript.
* Suppose a job application dashboard has an Approve button:

```js
button.addEventListener("click", () => {
    statusElement.textContent = "Approved";
});
```

* JavaScript changes the DOM.
* The browser then needs to update what the user sees.

```text
User interaction | JavaScript | DOM changes | Browser rendering work | Updated screen
```

* If JavaScript performs a very long synchronous calculation, rendering can be delayed and the interface can appear frozen.

# Event Loop and Rendering Together

Definition: In browser applications, event processing, microtasks, JavaScript execution, and rendering work together to keep the interface responsive.

* Imagine a job application dashboard.
* The user clicks Approve.
* The click handler runs as a task.
* JavaScript updates state or the DOM.
* Promise callbacks scheduled by that work may run as microtasks.
* The browser can then get an opportunity to render the updated interface.

```text
Click event | JavaScript task | Microtasks | Browser gets rendering opportunity | Updated UI
```

* If the JavaScript task takes too long:

```text
Click event | Huge synchronous calculation | Call stack remains busy | Rendering delayed | UI feels frozen
```

# Concurrency

Definition: Concurrency means multiple operations can make progress during overlapping periods even though JavaScript execution on the main call stack happens one piece at a time.

* Consider a Task Manager dashboard loading three APIs:

```js
async function loadDashboard() {
    const tasksPromise = fetch("/api/tasks");
    const usersPromise = fetch("/api/users");
    const statisticsPromise = fetch("/api/statistics");

    const [
        tasksResponse,
        usersResponse,
        statisticsResponse
    ] = await Promise.all([
        tasksPromise,
        usersPromise,
        statisticsPromise
    ]);

    console.log("Dashboard data received");
}
```

* The requests are started without waiting synchronously for the first request to finish.

```text
Start tasks request | Start users request | Start statistics request | Network operations continue | Responses arrive | Promise continuation runs
```

* This is concurrency.
* It does not mean three JavaScript functions are simultaneously executing on the same call stack.

# Concurrency vs Parallelism

Definition: Concurrency is overlapping progress between operations, while parallelism means multiple operations are actually executing at the same time using separate execution resources.

* For three API requests:

```text
Request A | waiting for network
Request B | waiting for network
Request C | waiting for network
```

* JavaScript can start these operations and continue doing other work.
* That is concurrency.
* Parallelism is different: separate CPU execution resources can perform work simultaneously.
* Do not use "concurrent" and "parallel" as if they mean exactly the same thing.

# Why This Matters in Node.js

Definition: Node.js uses an event-driven, non-blocking architecture where the event loop allows JavaScript to continue processing other work while asynchronous I/O operations are pending.

* Suppose the Task Manager API receives:

```text
POST /tasks | GET /tasks | GET /tasks/42
```

* One request might start a database operation.
* While the database is waiting, Node.js can continue processing other available work.

```text
Request A | start database operation | waiting asynchronously
Request B | process request
Request C | process request
Database A completes | continuation runs | response sent
```

* This is a major reason Node.js works well for I/O-heavy applications.

# Blocking vs Non-Blocking Work

Definition: Blocking work keeps JavaScript execution busy, while non-blocking asynchronous work allows the runtime to continue handling other work while the operation is pending.

* Blocking example:

```js
const data = fs.readFileSync("large-file.csv");
```

* JavaScript waits for the synchronous file operation.

* Non-blocking example:

```js
fs.readFile("large-file.csv", (error, data) => {
    if (error) {
        console.error(error);
        return;
    }

    console.log(data);
});

console.log("Continue processing");
```

* The asynchronous file operation can finish later.
* JavaScript can continue executing other work before the callback runs.

# Common Mistake: `setTimeout(..., 0)`

Definition: A zero-delay timer makes a callback eligible for a later task; it does not make the callback execute immediately.

```js
console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

console.log("End");
```

* Output:

```text
Start | End | Timer
```

* The timer cannot interrupt synchronous code already running.

# Common Mistake: Promise Means Immediate Execution

Definition: A Promise callback is asynchronous even when the Promise is already resolved.

```js
console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

* Output:

```text
Start | End | Promise
```

* The callback waits for the current synchronous execution to finish.

# Common Mistake: `await` Blocks the Entire Application

Definition: `await` pauses the current async function until its promise settles; it does not freeze the entire JavaScript runtime.

```js
async function loadTasks() {
    const response = await fetch("/api/tasks");

    console.log("Tasks loaded");
}

loadTasks();

console.log("Other work");
```

* `"Other work"` can execute while the network operation is pending.

# Debugging Event Loop Problems

Definition: Event loop debugging means identifying which synchronous work, microtask, task, or asynchronous operation is affecting execution order or responsiveness.

* Start with logs:

```js
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
```

* Compare the output with the scheduling rules.

* If an application feels slow, ask:

* Is the call stack busy?
* Is there expensive synchronous code?
* Are too many microtasks being generated?
* Is an asynchronous operation being unnecessarily waited on?
* In a browser, is rendering being delayed by a long JavaScript task?

# Complete Mental Model

Definition: The event loop model explains how synchronous JavaScript, runtime APIs, queued callbacks, promise continuations, and browser rendering cooperate to execute asynchronous applications.

```text
JavaScript code | Call Stack | Async operation starts | Runtime handles operation | Callback becomes ready | Event Loop | Microtasks | Next task | Browser may render
```

* The important rules to remember:

* Synchronous JavaScript runs on the call stack.
* A busy call stack prevents other JavaScript callbacks from executing.
* Runtime APIs handle asynchronous operations outside the normal synchronous call stack.
* `setTimeout` callbacks are tasks.
* Promise callbacks are microtasks.
* Microtasks are processed before the next normal task.
* `await` pauses the current async function, not the entire application.
* Zero-delay timers are not immediate.
* Concurrency does not automatically mean parallel JavaScript execution.
* Long synchronous work can block Node.js request handling and browser UI updates.

# Practical Task Manager Example

Definition: A Task Manager API request connects the event loop concepts to actual backend development because database/network operations are asynchronous while the controller's JavaScript still executes sequentially.

```js
async function getTasks(req, res) {
    const tasks = await Task.find();

    res.json({
        success: true,
        data: tasks
    });
}
```

* The simplified execution is:

```text
GET /api/tasks | Express route starts | Task.find() starts | Database operation is pending | getTasks pauses at await | Node.js can handle other work | Database result arrives | Promise continuation runs | getTasks continues | res.json() | Response sent
```

* The important lesson is not that the database operation is running on the JavaScript call stack.
* The important lesson is that JavaScript does not need to keep the call stack blocked while waiting for an I/O operation.
* This is the foundation of asynchronous programming in Node.js.


# Memory Management

* JavaScript automatically manages memory for us. We don't normally allocate and release memory manually like C/C++.

* Whenever an application creates data such as objects, arrays, functions, API responses, DOM elements, etc., memory is required to store that data.

* The basic memory lifecycle is:

  * Memory is allocated when data is created
  * Application uses that data
  * Data is no longer needed
  * If nothing can reach that data anymore, it becomes unreachable
  * Garbage collector can then reclaim that memory

* In a real application, memory management becomes important when we are dealing with large amounts of data, long-running pages, API responses, caches, timers, event listeners, WebSockets, etc.

* Example: imagine an admin dashboard for a job application system.

* The admin page loads applications from the backend:

```js
const applicationState = {
    applications: [],
    selectedApplication: null,
    filters: {
        status: "pending",
        department: "engineering"
    },
    search: "",
    pagination: {
        page: 1,
        limit: 20
    }
};
```

* After receiving data from the API:

```js
const response = await fetch("/api/applications");
const applications = await response.json();

applicationState.applications = applications;
```

* Suppose the API returns:

```js
[
    {
        id: 1001,
        applicant: {
            name: "Gowtham",
            email: "gowtham@example.com"
        },
        job: {
            id: 501,
            title: "Full Stack Developer",
            department: "Engineering"
        },
        skills: [
            { name: "JavaScript", level: 5 },
            { name: "Node.js", level: 4 },
            { name: "MongoDB", level: 4 }
        ],
        documents: [
            {
                type: "resume",
                url: "/files/resume-1001.pdf",
                size: 245000
            }
        ],
        interview: {
            rounds: [
                {
                    type: "technical",
                    score: 85,
                    interviewer: "Rahul"
                },
                {
                    type: "hr",
                    score: 90,
                    interviewer: "Priya"
                }
            ]
        }
    }
]
```

* This is not just one simple object. In a real application, an object can contain many nested objects and arrays.

* When this data is stored in `applicationState.applications`, the state contains references to these objects.

* Conceptually:

```text
applicationState
      |
      v
applications array
      |
      +---- application object
                |
                +---- applicant object
                |
                +---- job object
                |
                +---- skills array
                |
                +---- documents array
                |
                +---- interview object
                            |
                            +---- rounds array
```

* The important point is that these nested objects occupy memory and are connected through references.

* A reference means something still has access to an object in memory.

* Example:

```js
const application = {
    id: 1001,
    applicant: {
        name: "Gowtham"
    }
};

const selectedApplication = application;
```

* Both variables refer to the same object.

```text
application --------\
                     ---> application object
selectedApplication-/
```

* So changing one reference can affect the same object:

```js
selectedApplication.applicant.name = "Arun";

console.log(application.applicant.name);
// Arun
```

* We did not create another application object.

* We only created another reference to the existing object.

* This is very important in production applications because multiple parts of an application may hold references to the same data.

* For example:

```js
const applicationState = {
    applications: [],
    selectedApplication: null
};

applicationState.applications = applications;

applicationState.selectedApplication =
    applicationState.applications[0];
```

* Now the selected application is not a completely separate object.

* It points to the same application object inside the applications array.

```text
applicationState
      |
      +---- applications
      |         |
      |         +---- application #1001 <----+
      |                                      |
      +---- selectedApplication -------------+
```

* If we do:

```js
applicationState.selectedApplication.status = "approved";
```

* The application inside `applications` can also reflect that change because both references point to the same object.

* This is why understanding references is important before modifying application state.

* Garbage collection is the process where JavaScript identifies objects that are no longer reachable and eventually releases their memory.

* Example:

```js
let selectedApplication = {
    id: 1001,
    applicant: {
        name: "Gowtham"
    }
};

selectedApplication = null;
```

* Before setting it to `null`:

```text
selectedApplication
        |
        v
application object
```

* After:

```text
selectedApplication ---> null

application object
        X
   unreachable
```

* If there are no other references to that object, the object becomes unreachable.

* The garbage collector can eventually remove it from memory.

* Garbage collection does not mean JavaScript immediately deletes the object when we set the variable to `null`.

* It means the object is now eligible for garbage collection. The JavaScript engine decides when the cleanup actually happens.

* Example where the object is still reachable:

```js
let application = {
    id: 1001,
    applicant: {
        name: "Gowtham"
    }
};

let selectedApplication = application;

application = null;
```

* Even though `application` is now `null`, the object is still reachable through `selectedApplication`.

```text
application --------> null

selectedApplication
        |
        v
application object
```

* So the object cannot be garbage collected yet.

* If we also do:

```js
selectedApplication = null;
```

* Now neither variable references the object.

* The object becomes unreachable and can eventually be collected.

* This is the main idea behind garbage collection:

```text
Reachable object
       ↓
Keep it

Unreachable object
       ↓
Can be garbage collected
```

* In production applications, memory leaks happen when data is no longer logically needed but something still keeps a reference to it.

* Example: imagine our admin application has a cache.

```js
const applicationCache = new Map();

function cacheApplication(application) {
    applicationCache.set(application.id, application);
}
```

* Every time the admin opens an application:

```js
cacheApplication(application);
```

* Suppose the admin opens 50,000 applications.

* The cache now contains references to 50,000 application objects.

* Even if the admin no longer needs the old applications, the `applicationCache` still references them.

```text
applicationCache
      |
      +---- application #1
      +---- application #2
      +---- application #3
      +---- application #4
      ...
      +---- application #50000
```

* The garbage collector cannot remove those objects because they are still reachable through the cache.

* If the cache continues growing forever, memory usage can continue increasing.

* This is a memory leak.

* The problem is not that garbage collection is broken.

* The problem is that our application is accidentally keeping references to data that should have been released.

* A real cache should normally have some cleanup strategy.

```js
function removeApplicationFromCache(id) {
    applicationCache.delete(id);
}
```

* Or the application may use an expiration policy so old data is automatically removed.

* Event listeners are another common source of memory leaks.

* Example:

```js
function openApplication(application) {

    const modal = document.getElementById("applicationModal");

    function handleApproval() {
        approveApplication(application.id);
    }

    modal.addEventListener("click", handleApproval);
}
```

* If `openApplication()` is called many times and we keep attaching new listeners without removing the old ones, we can create unnecessary references.

* The listener function can also keep access to `application` through its closure.

```text
DOM element
    |
    +---- event listener
              |
              +---- handleApproval
                        |
                        +---- application
```

* If the application object is large, this chain can keep more data alive than expected.

* A better approach is to clean up listeners when the modal is closed or destroyed.

```js
modal.removeEventListener("click", handleApproval);
```

* The function reference must be the same one that was originally registered.

* Timers can create a similar problem.

* Example:

```js
function monitorApplication(application) {

    return setInterval(() => {
        console.log(application.status);
    }, 5000);
}
```

* The interval callback has access to `application`.

* As long as the interval continues running, the callback can continue holding that reference.

* If the application is closed but we forget to stop the interval:

```js
const intervalId = monitorApplication(application);
```

* the interval can continue running unnecessarily.

* We should clean it up:

```js
clearInterval(intervalId);
```

* A common production pattern is therefore:

```js
const intervalId = setInterval(checkApplicationStatus, 5000);

// when component/page/application is destroyed
clearInterval(intervalId);
```

* Closures can also keep data alive.

* Example:

```js
function createApplicationController(application) {

    return {
        getApplication() {
            return application;
        },

        approve() {
            application.status = "approved";
        }
    };
}
```

* The returned object contains functions that still have access to `application`.

* Even after `createApplicationController()` finishes executing, the `application` object can remain alive because the returned functions still reference it.

* This is normal closure behavior.

* A closure itself is not a memory leak.

* The problem happens when a long-lived object unintentionally keeps large amounts of data alive.

* Example:

```js
const controllers = [];

function createController(application) {
    return {
        getApplication() {
            return application;
        }
    };
}

for (const application of applications) {
    controllers.push(createController(application));
}
```

* Now `controllers` keeps all those controller functions alive.

* Those functions keep their corresponding applications alive through closures.

```text
controllers
    |
    +---- controller
    |       |
    |       +---- application
    |
    +---- controller
    |       |
    |       +---- application
    |
    +---- controller
            |
            +---- application
```

* If the application keeps adding controllers and never removes old ones, memory usage can continuously increase.

* This is why long-lived arrays, caches, timers, listeners, subscriptions and global state need careful management.

* Another important point is that `const` does not mean the object itself cannot change.

```js
const application = {
    status: "pending"
};

application.status = "approved";
```

* This works because `const` prevents changing the variable's reference, not changing the object's internal properties.

* This:

```js
application = {};
```

* is not allowed because we are trying to change the reference stored in the `const` variable.

* But this:

```js
application.status = "approved";
```

* changes the existing object.

* Arrays work the same way.

```js
const applications = [];

applications.push(application);
```

* The array reference stays the same while its contents change.

* This becomes important when large arrays are kept in application state.

* Suppose an admin dashboard loads 100,000 applications:

```js
const applications = await fetchAllApplications();
```

* Keeping all 100,000 complex objects in browser memory may consume much more memory than loading only the required records.

* Instead, production applications commonly use pagination:

```text
GET /applications?page=1&limit=20
```

* Instead of:

```text
100,000 applications
        ↓
Browser memory
```

* we can have:

```text
20 applications
        ↓
Browser memory
```

* Then when the user moves to another page, the application can replace or update the current data.

* This is not only about performance. It also reduces unnecessary memory usage.

* Large files should also not always be loaded completely into memory.

* For example, if an application processes a 500 MB video or CSV file, loading the entire file into memory at once can create unnecessary memory pressure.

* Production applications may use streaming or process data in smaller chunks instead.

* A useful way to think about memory leaks is:

```text
Application no longer needs data
              ↓
Developer expects it to disappear
              ↓
But some reference still exists
              ↓
Object is still reachable
              ↓
Garbage collector keeps it
              ↓
Memory usage increases
```

* Common places to check when debugging a memory leak:

```text
Global variables
        ↓
Large arrays
        ↓
Caches
        ↓
Event listeners
        ↓
Timers
        ↓
Closures
        ↓
Subscriptions
        ↓
DOM references
        ↓
WebSocket connections
```

* In browser applications, Chrome DevTools provides the Memory tab for investigating memory problems.

* Heap snapshots can help identify which objects are consuming memory and what is keeping those objects reachable.

* The important questions when debugging memory are:

```text
Why is this object still in memory?

Who is referencing it?

Is that reference still required?

If it is not required, why wasn't it removed?

Is a timer/listener/cache/closure keeping it alive?
```

* Memory management is therefore not about manually deleting everything.

* JavaScript already has garbage collection.

* Our job as developers is to make sure unnecessary objects do not remain reachable accidentally.

* The main concepts to remember:

```text
Reference
→ something that provides access to an object

Reachable
→ object can still be accessed through existing references

Unreachable
→ no active reference can reach the object

Garbage collection
→ JavaScript eventually reclaims memory occupied by unreachable objects

Memory leak
→ application keeps references to data that it no longer needs
```

* Real production example:

```text
Admin opens application
        ↓
API returns complex application object
        ↓
State stores the object
        ↓
Selected application references the object
        ↓
Modal event listener references the selected application
        ↓
Timer monitors the application
        ↓
Cache stores the application
```

* Now the same application can be reachable through several paths.

* If the admin closes the modal but we only remove the UI element while leaving the timer, cache, or listener active, the application may still remain in memory.

* Proper cleanup means removing references that are no longer required.

```text
Close modal
    ↓
Remove event listener

Stop monitoring
    ↓
clearInterval()

Remove unnecessary cache entry
    ↓
cache.delete(id)

Remove unused state reference
    ↓
selectedApplication = null
```

# Web APIs

* Web APIs are features provided by the browser that allow my JavaScript code to communicate with the browser, page, device and browser-managed resources.
* JavaScript itself gives me things like variables, functions, objects, arrays and promises.
* The browser gives me additional APIs like DOM, Canvas, Geolocation, Storage, Notifications, Fetch, History and Media APIs.
* I use Web APIs when my JavaScript needs to interact with something outside normal JavaScript language operations.
* Example: JavaScript knows how to store an object in memory, but it does not automatically know how to change an HTML button. The browser's DOM API gives JavaScript that ability.
* Another important point is that Web APIs are environment features. The same JavaScript language can run in a browser or Node.js, but the available APIs are different.

## How Web APIs and JavaScript work together

* When I call something like `document.querySelector()` or `localStorage.getItem()`, JavaScript is accessing an object provided by the browser.
* For asynchronous browser operations, the browser can perform work outside the normal JavaScript call stack.
* When that work is ready, the result is made available through the event loop and JavaScript can continue executing the callback or promise continuation.
* This is why JavaScript can start an asynchronous operation without freezing the entire page.

## Real application example

* In my job application system:
  * DOM API reads applicant form fields.
  * Events detect when the user clicks `Add Education` or submits the form.
  * Web Storage can save a non-sensitive draft.
  * Fetch can send the application to the backend.
  * Notifications can tell the user that an important operation completed.
  * Canvas can display analytics.
  * Geolocation could be used only if the application genuinely needs location.
* These are not separate JavaScript languages. They are browser capabilities that my JavaScript uses.

# DOM API

* DOM means Document Object Model.
* When the browser loads HTML, it creates an object representation of the document.
* JavaScript can use this representation to find elements, change them, create new elements and remove elements.
* I use DOM when the UI has to change based on user actions or application data.

## Selecting elements

* `getElementById()` finds an element by its id.
* `querySelector()` returns the first element matching a CSS selector.
* `querySelectorAll()` returns all matching elements.
* I normally prefer `querySelector()` and `querySelectorAll()` because they allow CSS-style selectors.

```js
const nameInput = document.querySelector("#applicantName");
const educationFields = document.querySelectorAll(".education");
```

* Real application example:
  * My applicant form contains a name input, education sections and internship sections.
  * Instead of manually reading every value from hardcoded variables, I can select the relevant elements when I need their values.

## Changing content

* `textContent` changes the text inside an element.
* I use it when the value should be treated as plain text.
* `innerHTML` changes the HTML inside an element.
* I should not put untrusted user input directly into `innerHTML` because it can create an XSS problem.

```js
const statusElement = document.querySelector(".status");

statusElement.textContent = "Application submitted";
```

* Real application example:
  * After an applicant submits the form, I can change a status element from `Draft` to `Submitted`.
  * Since the status is plain text, `textContent` is the safer choice.

## Changing styles and classes

* I can change styles directly with `element.style`.
* I can also use `classList.add()`, `classList.remove()`, `classList.toggle()` and `classList.contains()`.
* For larger UI changes, using CSS classes is usually cleaner than putting many style values directly in JavaScript.

```js
statusElement.classList.add("approved");
statusElement.classList.remove("pending");
```

* Real application example:
  * The admin page can show an approved applicant with an `approved` CSS class and a rejected applicant with a `rejected` class.
  * JavaScript decides the state and CSS decides how that state looks.

## Creating elements

* `document.createElement()` creates a new DOM element.
* I can set its content, classes, attributes and event listeners and then insert it into the page.

```js
const skill = document.createElement("div");
skill.classList.add("skill-item");
skill.textContent = "JavaScript";

document.querySelector("#skillsContainer").appendChild(skill);
```

* Real application example:
  * My job application form allows the applicant to add many skills.
  * I cannot know how many skills the user will enter before the page opens.
  * JavaScript creates another skill field whenever the user clicks `Add Skill`.

## Removing elements

* I can remove an element using `element.remove()`.
* Real application example:
  * If an applicant added the wrong internship, clicking `Remove Internship` can remove only that internship section from the DOM.

## Attributes

* Attributes are values such as `id`, `class`, `src`, `href`, `data-id` and `disabled`.
* `getAttribute()` reads an attribute.
* `setAttribute()` changes or creates one.
* `removeAttribute()` removes one.

```js
button.setAttribute("data-applicant-id", "42");
```

* Real application example:
  * Each admin applicant card can have `data-applicant-id="42"`.
  * When the admin clicks the card, JavaScript can identify which applicant was selected.

## DOM events

* The DOM works together with events.
* `addEventListener()` tells the browser what function should run when a particular event occurs.

```js
addEducationBtn.addEventListener("click", addEducation);
```

* Real application example:
  * When the user clicks `Add Education`, the browser creates a click event.
  * The event listener runs `addEducation()`.
  * The function creates another education block and inserts it into the DOM.

## Event bubbling

* An event normally starts at the element where it happened and then bubbles through its ancestors.
* This allows event delegation.
* Event delegation is useful when I have many dynamically created elements.

```js
skillsContainer.addEventListener("click", (event) => {
    if (event.target.matches(".remove-skill")) {
        event.target.parentElement.remove();
    }
});
```

* Real application example:
  * My form may contain 20 skill remove buttons.
  * Instead of adding 20 separate listeners, I can put one listener on the skills container.
  * Because click events bubble, the container can identify which remove button was clicked.

## DOM common mistakes

* Selecting an element before it exists gives `null`.
* Calling `.style`, `.value` or `.textContent` on `null` causes an error.
* Repeatedly rebuilding a large DOM tree can hurt performance.
* Using `innerHTML` with untrusted input can create security problems.
* Mixing data logic and DOM logic everywhere makes a large application difficult to maintain.

# Canvas API

* Canvas is an HTML element that gives JavaScript a drawing area.
* I use it when I need to draw graphics, charts, animations, images or custom visual content.
* Normal HTML elements are better for forms, text, buttons and accessible page structure.
* Canvas is better when I need direct drawing control.

## How Canvas works

* First I create a canvas element.

```html
<canvas id="expenseChart" width="700" height="350"></canvas>
```

* JavaScript gets the canvas element.
* Then I request a rendering context.

```js
const canvas = document.querySelector("#expenseChart");
const ctx = canvas.getContext("2d");
```

* The context provides drawing methods.

```js
ctx.fillRect(50, 50, 200, 100);
```

* The browser renders those drawing operations inside the canvas.

## Real application example

* In my expense approval application, the admin dashboard could show monthly expense totals.
* Suppose the backend returns:

```js
const monthlyExpenses = [
    { month: "Jan", amount: 42000 },
    { month: "Feb", amount: 51000 },
    { month: "Mar", amount: 47000 }
];
```

* JavaScript can convert these values into bars or points on a Canvas chart.
* The important part is that Canvas is useful for drawing the visual result from dynamic data.
* I should not use Canvas just to display an ordinary table. A normal HTML table is more accessible and easier to inspect.

## Canvas and user interaction

* Canvas does not automatically create individual DOM elements for every shape.
* If I draw 20 bars, the browser does not give me 20 separate HTML elements.
* If I want click interaction, I need to calculate which part of the canvas the user clicked.
* This is one reason ordinary HTML/SVG can be easier for interactive UI in some cases.

# Geolocation API

* Geolocation allows a website to request the user's geographic position.
* The browser normally asks the user for permission.
* I use it only when location provides an actual feature benefit.

## How it works

```js
navigator.geolocation.getCurrentPosition(
    (position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    },
    (error) => {
        console.error(error.message);
    }
);
```

* The browser requests a position from available location sources.
* The user can allow or deny the request.
* The result contains coordinates and related information such as accuracy.
* The application should handle errors and permission denial.

## Real application example

* Imagine I build a delivery management application.
* The delivery person opens the application and allows location access.
* The browser gives latitude and longitude.
* The application sends that information to the backend.
* The backend can associate the delivery worker's latest location with the active delivery.
* The customer-facing page can then display the delivery status/location.

## Important security and privacy point

* Location is sensitive.
* I should not request it simply because the browser allows it.
* I should explain why the application needs it.
* I should handle denied permissions gracefully.

# Web Storage

* Web Storage gives me `localStorage` and `sessionStorage`.
* Both store key-value pairs in the browser.
* The values are strings.

## localStorage

* `localStorage` normally stays after the browser is closed and reopened.
* It remains until the application or user removes it.

```js
localStorage.setItem("theme", "dark");

const theme = localStorage.getItem("theme");
```

## sessionStorage

* `sessionStorage` is associated with the browser tab/session.
* It is useful when the data should not normally survive closing the tab.

```js
sessionStorage.setItem("currentStep", "2");
```

## Objects and arrays

* Storage stores strings, not JavaScript objects directly.
* I can use JSON conversion.

```js
const draft = {
    name: "Gowtham",
    age: 21,
    skills: ["JavaScript", "Node.js"]
};

localStorage.setItem("applicationDraft", JSON.stringify(draft));

const savedDraft = JSON.parse(
    localStorage.getItem("applicationDraft")
);
```

## Real application example

* In my job application form, the user may fill 15 fields and accidentally refresh the page.
* I can save non-sensitive draft values to localStorage.
* When the page opens again, I can read the saved draft and refill the fields.
* This improves the user experience because the user does not lose all progress.

## What I should not store

* I should not treat localStorage as a secure database.
* I should not store passwords there.
* I should be very careful with authentication tokens because JavaScript can access localStorage and XSS can expose them.
* Large amounts of structured data are better handled with IndexedDB or a backend database.

# Notifications API

* Notifications allow a website to show system-level notifications.
* They are different from simply changing a message inside the webpage.
* Permission is required.

## How it works

```js
const permission = await Notification.requestPermission();

if (permission === "granted") {
    new Notification("Application Updated", {
        body: "Your application status has changed."
    });
}
```

* The browser asks for permission.
* If permission is granted, JavaScript can request a notification.
* The browser controls how and where the notification appears.

## Real application example

* In an applicant portal, an applicant submits a job application.
* Later the application status changes from `Under Review` to `Interview`.
* If notifications are appropriate and permission was granted, the user can receive a notification saying the application status changed.
* Notifications should be used for useful events, not every small UI action.

# 35. Debugging

* Debugging is the process of finding why my code behaves differently from what I expected.
* The goal is not just to remove the error message.
* The goal is to find the root cause.

## My debugging process

* First reproduce the problem.
* Read the exact error.
* Find the line where the failure happens.
* Inspect the values at that point.
* Trace backwards to understand why the value became wrong.
* Fix the actual cause.
* Test the original case again.
* Test related cases.

## Real application example

* I previously had an error:

```text
Cannot read properties of null (reading 'style')
```

* This means I was trying to access `.style` on `null`.
* The important question is not "How do I stop the error?"
* The important question is "Why did my DOM selector return null?"
* Possible causes:
  * The id is wrong.
  * The element does not exist.
  * The script runs before the HTML element exists.
  * The element was removed.
* I should inspect the selector and DOM instead of randomly adding conditions.

## Console methods

* `console.log()` is general debugging output.
* `console.error()` is useful for error information.
* `console.warn()` is useful for warnings.
* `console.table()` is excellent for arrays of objects.
* `console.dir()` helps inspect object structures.
* `console.time()` and `console.timeEnd()` measure elapsed time.

```js
console.table(applications);
console.log("Selected applicant:", selectedApplicant);
```

* Real application example:
  * If my admin page receives 50 applicants from an API, `console.table(applications)` lets me quickly inspect id, name, status and score instead of printing an unreadable object.

## Breakpoints

* A breakpoint pauses execution at a specific line.
* This is better than adding `console.log()` everywhere when I need to understand the exact execution flow.
* In DevTools I can inspect:
  * Local variables.
  * Function parameters.
  * Call stack.
  * Current execution line.
  * Object properties.
* I can step over a line, step into a function or step out of a function.

## Real breakpoint example

* Suppose clicking `Approve` changes the wrong applicant.
* I put a breakpoint inside the approval function.
* I inspect `applicant.id`.
* I inspect `applicant.status`.
* I step through the code.
* If the wrong id is already present before the API call, my frontend selection logic is wrong.
* If the id is correct but the server changes another applicant, I know the problem is later in the system.

## DevTools

* Elements -> inspect HTML and CSS.
* Console -> JavaScript errors and output.
* Sources -> JavaScript debugging.
* Network -> requests, responses, status codes, headers and timing.
* Application -> storage, cookies and service workers.
* Performance -> runtime and rendering performance.

## Network debugging example

* Suppose my admin application page shows an empty list.
* I open Network.
* I check whether `GET /api/applications` was sent.
* I check the HTTP status.
* `200` means the request reached the server successfully, but I still need to inspect the response.
* `401` can indicate authentication problems.
* `404` can indicate a wrong route.
* `500` means the server reported an internal error.
* This separates frontend rendering problems from backend/network problems.

## Watch expressions

* A watch expression lets me monitor an expression while the debugger is paused.
* Example:

```js
applications.length
filteredApplications.length
selectedApplicant.status
```

* Real application example:
  * If my applicant search returns too few records, I can watch `applications.length` and `filteredApplications.length`.
  * While stepping through the filter code, I can see exactly where the count changes incorrectly.

# 36. Performance Optimization

* Performance optimization means reducing unnecessary work so the application responds smoothly.
* I should not optimize randomly.
* First I should identify the expensive operation using measurement and DevTools.
* Then I optimize the actual bottleneck.

## Debounce

* Debounce waits until rapid repeated activity stops before running the function.
* It is useful when I only care about the final action after the user pauses.

## Real applicant search example

```js
function debounce(callback, delay) {
    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

const searchApplicants = debounce((event) => {
    const search = event.target.value.trim();

    fetch(`/api/applications?search=${encodeURIComponent(search)}`);
}, 300);

searchInput.addEventListener("input", searchApplicants);
```

* If the user types `Gowtham`, the input event fires multiple times.
* Without debounce, I could send requests for `G`, `Go`, `Gow`, `Gowt`, `Gowth`, `Gowtha`, `Gowtham`.
* With debounce, every new keystroke resets the timer.
* Only after the user stops typing for 300ms does the search function run.
* This reduces unnecessary requests and processing.

## Throttle

* Throttle limits a function so it runs at a controlled rate while the event continues.

```js
function throttle(callback, delay) {
    let waiting = false;

    return (...args) => {
        if (waiting) return;

        callback(...args);
        waiting = true;

        setTimeout(() => {
            waiting = false;
        }, delay);
    };
}
```

* Real application example:
  * An admin page can have a scroll listener that checks whether more applicants should be loaded.
  * Scroll events can fire very frequently.
  * Throttling prevents the check from running hundreds of times per second.

## Debounce vs throttle

* Debounce -> wait until the rapid activity stops.
* Throttle -> allow execution at controlled intervals while activity continues.
* Search input -> debounce is usually useful.
* Continuous scroll handling -> throttle can be useful.

## Lazy loading

* Lazy loading means loading something only when it is needed.
* Example:
  * A list has 500 applicants.
  * Each applicant has a large resume preview.
  * Loading all 500 previews immediately wastes bandwidth.
  * I can load a resume preview only when the admin opens that applicant.
* Images can also use browser-supported lazy loading.

```html
<img src="resume-preview.jpg" loading="lazy">
```

* The goal is to reduce the initial amount of work.

## Async loading

* Resources can sometimes be loaded without blocking other work.
* For scripts:
  * `async` downloads in parallel and executes as soon as ready.
  * `defer` downloads in parallel but waits until HTML parsing is complete and preserves order among deferred scripts.
* Real application example:
  * If my main JavaScript file depends on another script, using `async` for both without considering execution order can create a race condition.
  * `defer` is often more appropriate for scripts that should run after the HTML is parsed.

## Web Workers

* A Web Worker runs JavaScript in a separate worker thread.
* The main browser thread handles UI work.
* Heavy CPU calculations on the main thread can make the page freeze.
* A worker can perform those calculations separately.

```js
const worker = new Worker("analytics-worker.js");

worker.postMessage(largeApplicantDataset);

worker.onmessage = (event) => {
    console.log(event.data);
};
```

* The worker cannot directly manipulate the DOM.
* It communicates through messages.
* Real application example:
  * An analytics page receives 100,000 expense records.
  * Calculating complex statistics directly on the main thread could make the interface unresponsive.
  * A worker can process the records and send the result back.
* I should not create a Web Worker for every normal calculation. It adds complexity and communication overhead.

# 37. Unit Testing

* Unit testing means testing small pieces of application logic separately.

* A unit can be a function or a small module.

* The purpose is to automatically verify expected behavior.

* Instead of manually checking the application every time I change code, unit tests allow me to verify important behavior automatically.

* A good unit test should be:

  * Small
  * Focused on one behavior
  * Repeatable
  * Independent from other tests
  * Easy to understand

## Basic test structure

* A common unit testing pattern is:

  Arrange | prepare the input and test conditions.

  Act | call the function being tested.

  Assert | verify that the result is what I expected.

* Example:

```js
test("age 17 should be rejected", () => {
    // Arrange
    const age = 17;

    // Act
    const result = validateAge(age);

    // Assert
    expect(result).toBe(false);
});
```

* The test is easier to understand when I can clearly identify what I am preparing, executing and checking.

## Real application example - Cart logic

* In my unit testing project, I created a small cart module instead of testing a simple mathematical function.

* The module contains three functions:

  `addItem()` | adds a product to a cart

  `total()` | calculates the total cart price

  `getUser()` | retrieves a user through a fetch dependency

* This gives me different types of logic to test: synchronous logic, validation, array manipulation, calculation and asynchronous external dependencies.

## addItem()

* The `addItem()` function validates the product before adding it to the cart.

```js
function addItem(cart, item) {
    if (!item.name || item.price <= 0) {
        throw new Error("invalid item");
    }

    return [...cart, item];
}
```

* It rejects an item when the name is missing or the price is less than or equal to zero.

* If the item is valid, it returns a new array containing the existing cart items and the new item.

* My tests check both successful and invalid cases.

```js
test("adds an item", () => {
    cart = addItem(cart, { name: "Pen", price: 10 });

    expect(cart).toHaveLength(1);
});
```

* I also test invalid input:

```js
test("throws for bad item", () => {
    expect(() => addItem(cart, { name: "", price: 0 }))
        .toThrow("invalid item");
});
```

* This is important because testing only the successful case would not prove that my validation works.

## Testing business rules

* Unit tests should test the actual rules of the application.

* For example, my cart has a rule that an item must have a name and a positive price.

* I test:

  Valid item | should be added

  Missing name | should be rejected

  Zero price | should be rejected

  Negative price | should be rejected

* This means I am testing the business rule rather than simply testing whether the function runs.

## Testing boundary and invalid cases

* Tests should cover normal values, boundary values and invalid values.

* For example, if an application accepts an age from 18 to 100:

```js
expect(validateAge(25)).toBe(true);
expect(validateAge(18)).toBe(true);
expect(validateAge(17)).toBe(false);
expect(validateAge(100)).toBe(true);
expect(validateAge(101)).toBe(false);
```

* This is better than testing only `25`.

* Boundary values often reveal mistakes in conditions such as `<` versus `<=`.

* The same idea applies to my cart project.

* Instead of testing only a valid product, I also test invalid prices such as `0` and negative values.

## total()

* The `total()` function calculates the total price of all products in the cart.

```js
function total(cart) {
    return cart.reduce(
        (sum, i) => sum + i.price * (i.qty || 1),
        0
    );
}
```

* The function also supports quantity.

* If an item does not have a `qty`, it uses `1`.

* Example:

```text
Pen
Price = 10
Quantity = 1
Total = 10
```

* Another example:

```text
Pen
Price = 10
Quantity = 3
Total = 30
```

* My Jest test verifies this behavior:

```js
test("respects qty", () => {
    expect(total([
        { name: "Pen", price: 10, qty: 3 }
    ])).toBe(30);
});
```

* I also test an empty cart:

```js
it("returns 0 for empty cart", function () {
    expect(total([])).to.equal(0);
});
```

* This verifies that the function handles an important edge case instead of assuming that the cart always contains products.

## Testing immutability

* My `addItem()` function uses:

```js
return [...cart, item];
```

* This creates a new array instead of modifying the original cart.

* I explicitly test this behavior:

```js
test("does not change old cart", () => {
    const next = addItem(cart, {
        name: "Pen",
        price: 10
    });

    expect(cart).toHaveLength(0);
    expect(next).not.toBe(cart);
});
```

* This test checks two things:

  The old cart is still empty.

  The returned cart is a different array.

* This is useful because changing existing state unexpectedly can create difficult bugs in larger applications.

* A unit test can therefore verify not only the final result but also an important implementation behavior such as preserving the original state.

## beforeEach()

* My Jest tests use `beforeEach()`:

```js
beforeEach(() => {
    cart = [];
});
```

* This runs before every test.

* It gives each test a fresh cart.

* Without resetting the cart, one test could accidentally affect another test.

* For example:

```text
Test 1 → adds Pen
Test 2 → starts with Pen already inside cart
```

* This would make Test 2 dependent on Test 1.

* With `beforeEach()`:

```text
Test 1 → fresh cart
Test 2 → fresh cart
Test 3 → fresh cart
```

* This makes tests independent and more reliable.

## Jest

* Jest is a JavaScript testing framework.

* It provides test runners, assertions and mocking features.

* My project uses Jest as one of the testing frameworks.

* My `package.json` contains:

```json
"test": "jest"
```

* Therefore I can run:

```bash
npm test
```

* My Jest tests use:

```js
test("total is correct", () => {
    cart = addItem(
        addItem(cart, { name: "Pen", price: 10 }),
        { name: "Book", price: 40 }
    );

    expect(total(cart)).toBe(50);
});
```

* Here I am testing actual application behavior:

  Add Pen | ₹10

  Add Book | ₹40

  Calculate total | ₹50

* This is more meaningful than simply testing whether a function returns a hardcoded value.

## Testing errors

* Unit tests should also verify that invalid operations fail correctly.

* In my project, `addItem()` throws an error for an invalid item.

```js
expect(() => addItem(cart, {
    name: "",
    price: 0
})).toThrow("invalid item");
```

* The test verifies both:

  Invalid input causes an error.

  The error contains the expected message.

* Testing failures is important because production applications need to behave correctly when users provide invalid data.

## Mocha

* Mocha is another JavaScript test framework.

* It provides a structure for organizing and running tests.

* My project also contains a Mocha test file so I can compare the testing style with Jest.

* Example:

```js
describe("total()", function () {
    it("adds prices", function () {
        expect(total([
            { price: 5 },
            { price: 15 }
        ])).to.equal(20);
    });
});
```

* Mocha itself provides the test structure and runner.

* My project combines Mocha with Chai for assertions.

## Chai

* Chai is an assertion library.

* It can be used with Mocha.

* My project uses:

```js
const { expect } = require("chai");
```

* Example:

```js
expect(total([
    { price: 5 },
    { price: 15 }
])).to.equal(20);
```

* Chai provides assertion styles such as:

```js
.to.equal()
.to.deep.equal()
.to.have.lengthOf()
.to.throw()
.to.be.a()
```

* Jest already provides its own assertion system, so I do not need Chai when writing normal Jest tests.

## Jest vs Mocha + Chai

* My project intentionally demonstrates both approaches.

```text
Jest
→ Test runner
→ Assertions
→ Mocking
→ One integrated testing framework

Mocha + Chai
→ Mocha = test runner / test structure
→ Chai = assertions
→ Additional libraries can be added for mocking
```

* My `package.json` contains scripts for both:

```json
"test": "jest",
"test:mocha": "mocha cart.mocha.js",
"test:all": "jest && mocha cart.mocha.js"
```

* `npm test` runs the Jest tests.

* `npm run test:mocha` runs the Mocha tests.

* `npm run test:all` runs both test suites.

* In a real project, I would normally choose a consistent testing stack rather than adding multiple frameworks without a reason.

## Mocking

* Mocking replaces a real dependency with a controlled fake.

* It is especially useful when the function being tested depends on something external.

* My `getUser()` function makes an API request:

```js
async function getUser(id, fetcher = fetch) {
    const res = await fetcher("/api/users/" + id);
    return res.json();
}
```

* The important design decision here is:

```js
fetcher = fetch
```

* Normally the function uses the real `fetch`.

* During testing, I can provide a fake `fetcher`.

* This allows me to test the function without making a real network request.

## Mocking a successful API response

* My Jest test creates a mock fetch function:

```js
const mockFetch = jest
    .fn()
    .mockResolvedValue({
        json: () => Promise.resolve({
            id: 1,
            name: "Ravi"
        })
    });
```

* This means I am controlling what the API call returns.

* Then I call:

```js
const user = await getUser(1, mockFetch);
```

* I verify that the function called the expected endpoint:

```js
expect(mockFetch).toHaveBeenCalledWith("/api/users/1");
```

* I also verify that it was called exactly once:

```js
expect(mockFetch).toHaveBeenCalledTimes(1);
```

* Finally, I verify the returned data:

```js
expect(user.name).toBe("Ravi");
```

* I am therefore testing three things:

  Correct endpoint | `/api/users/1`

  Correct number of calls | `1`

  Correct returned data | `"Ravi"`

## Mocking an API failure

* Unit tests should also verify how the application behaves when an external dependency fails.

* My project uses:

```js
const badFetch = jest
    .fn()
    .mockRejectedValue(new Error("network down"));
```

* Then I test:

```js
await expect(
    getUser(2, badFetch)
).rejects.toThrow("network down");
```

* This simulates a network failure without actually disconnecting the computer from the internet.

* This is one of the main reasons mocking is useful.

* I can test situations that are difficult, slow or unreliable to reproduce with real external services.

## Why I mock external dependencies

* Imagine `getUser()` directly calls a real user API during every unit test.

* Then the test depends on:

  Network availability

  API availability

  API response

  API authentication

  API speed

* If the external API is down, my unit test could fail even when my own function is correct.

* By mocking the dependency, I isolate the unit being tested.

```text
getUser()
    |
    ↓
fetcher
    |
    ├── Real fetch → actual API
    |
    └── Mock fetch → controlled test response
```

* This allows my unit test to focus on the behavior of `getUser()` rather than testing the external API itself.

## What my project currently tests

* My Jest tests cover:

  Adding an item

  Calculating cart totals

  Product quantity

  Invalid items

  Preserving the original cart

  Successful API response

  API endpoint and call count

  API/network failure

* My Mocha + Chai tests cover:

  Empty cart

  Price calculation

  Return type

  Adding an item

  Invalid price handling

* This gives the project examples of both normal behavior and failure behavior.

## Running my tests

* My project has these npm scripts:

```bash
npm test
```

* Runs the Jest test suite.

```bash
npm run test:mocha
```

* Runs the Mocha + Chai test suite.

```bash
npm run test:all
```

* Runs Jest first and then the Mocha test suite.

* My `package.json` defines these scripts and includes Jest, Mocha and Chai as development dependencies.

## What I learned from this project

* Unit testing is not just about checking whether a function returns the expected value.

* I learned to test:

  Normal behavior

  Invalid input

  Edge cases

  Errors

  State isolation

  Immutability

  Asynchronous behavior

  External dependencies

  Mocked success responses

  Mocked failure responses

* The main purpose is to catch regressions when application code changes.

* For example, if I later change the cart calculation logic, I can run the existing tests and immediately know whether the expected behavior has been broken.

* The most important principle I learned is:

  **A good unit test verifies a meaningful behavior of the application and isolates the code being tested from unrelated dependencies.**


# 38. Security

* Security means protecting application data, users and functionality from misuse.

* Client-side JavaScript cannot be treated as trusted because users control their browser.

* Important validation and authorization must also happen on the server.

* Security should be handled in multiple layers instead of depending on a single protection.

* A typical security flow is:

  User input | Validation | Authorization | Safe processing | Secure response

## XSS

* XSS means Cross-Site Scripting.

* It happens when attacker-controlled content becomes executable HTML or JavaScript in another user's browser.

* The main problem is not simply that the user entered `<script>`.

* The real problem is that the application takes untrusted data and puts it into a context where the browser interprets it as executable HTML or JavaScript.

* Example dangerous pattern:

```js
result.innerHTML = applicant.name;
```

* If `applicant.name` contains malicious HTML, the browser may interpret it as markup.

* Example attacker input:

```html
<img src="x" onerror="alert('XSS')">
```

* If this value is inserted using `innerHTML`, the browser may interpret the `<img>` element and execute the event handler.

* Safer for plain text:

```js
result.textContent = applicant.name;
```

* `textContent` treats the value as text instead of parsing it as HTML.

### Real application example - Applicant Management System

* Imagine my application has an applicant management page.

* An applicant enters their name:

```text
Gowtham
```

* The admin page later displays that name.

* Normally there is nothing dangerous about displaying a name.

* But an attacker could submit something like:

```html
<img src=x onerror=alert('Hacked')>
```

* If the admin page does this:

```js
applicantName.innerHTML = applicant.name;
```

* The browser may interpret the attacker-controlled value as HTML.

* If I instead do:

```js
applicantName.textContent = applicant.name;
```

* The browser displays the value as text.

* The important rule is:

  **User-controlled data should not automatically be treated as trusted HTML.**

### How my security project demonstrates XSS

* My security project intentionally contains an unsafe `innerHTML` example so I can understand the vulnerability.

* It also contains an `escapeHtml()` approach and a `textContent` approach.

* The `textContent` approach creates a paragraph element and assigns the user input as text instead of HTML.

```js
const p = document.createElement("p");
p.textContent = input.value;
box.appendChild(p);
```

* This lets me compare:

  `innerHTML` | potentially dangerous when handling untrusted HTML

  `escapeHtml()` | converts dangerous HTML characters into safe text

  `textContent` | treats the value directly as text

* I also added CSP as another layer of protection.

## CSRF

* CSRF means Cross-Site Request Forgery.

* The attacker tries to make an authenticated user's browser perform an unwanted state-changing request.

* This matters especially for applications that authenticate with cookies because browsers automatically send applicable cookies with requests.

### Real application example - Expense Approval System

* Imagine I have an expense management system.

* A manager is already logged into the application.

* The manager has permission to approve expenses.

* Suppose the application has an endpoint:

```text
POST /api/expenses/EXP-1024/approve
```

* The manager normally clicks an **Approve** button.

* Without appropriate CSRF protection, an attacker could try to make the manager's browser send an unwanted approval request.

* The dangerous situation is:

  Manager logs into expense application | Browser has authenticated session | Attacker tricks browser into making a request | Expense gets approved without the manager intentionally approving it

* The important point is that the attacker does not necessarily need to know the manager's password.

* The attack abuses the browser's existing authenticated session.

### CSRF protection

* A common defense is a CSRF token.

* The server generates a token that an attacker cannot simply guess.

* The legitimate frontend sends that token with the state-changing request.

* The server verifies the token before processing the request.

* Example:

```text
POST /api/expenses/EXP-1024/approve

X-CSRF-Token: random-server-generated-token
```

* If the token is missing or invalid, the server rejects the request.

* Appropriate cookie settings such as `SameSite` can provide additional protection depending on the authentication architecture.

### How my security project demonstrates CSRF

* My project has a `/token` endpoint that generates a random token.

* The frontend requests that token and stores it.

* When making the POST request, the frontend sends:

```js
headers["X-CSRF-Token"] = csrfToken;
```

* The server checks whether the token exists before accepting the request.

* With the token:

```text
200 OK
```

* Without the token:

```text
403 Forbidden
```

* This demonstrates the basic idea of requiring proof that the request came from the legitimate application flow.

## Input validation

* Validation checks whether data follows the application's expected rules.

* Validation is mainly about deciding whether a value is acceptable according to business and application rules.

* Example:

```js
function validateApplicantAge(age) {
    return Number.isInteger(age) &&
           age >= 18 &&
           age <= 100;
}
```

### Real application example - Job Application

* Suppose my job application form accepts an applicant's age.

* My business rule is:

```text
Minimum age = 18
Maximum age = 100
```

* A normal user might submit:

```text
Age = 23
```

* This is valid.

* But someone can modify the request manually and send:

```text
Age = 12
```

* Or:

```text
Age = 150
```

* Or even:

```text
Age = "twenty"
```

* Browser-side validation can prevent some of these values during normal usage.

* But I cannot trust browser validation because the user controls the browser.

* Therefore, the backend must validate the value again.

### Important distinction

* Frontend validation improves the user experience.

* Backend validation protects the application.

```text
Frontend validation
        |
        | fast feedback to user
        ↓
Backend validation
        |
        | actual security/business rule
        ↓
Process the request
```

* Never assume that because a field was validated in JavaScript, the backend can trust it.

## Sanitization

* Sanitization means cleaning or transforming input so it can be safely used in a particular context.

* Validation asks:

```text
"Is this value acceptable?"
```

* Sanitization asks:

```text
"How can I safely handle this value for this context?"
```

* They are related but not identical.

### Real application example - Comment System

* Imagine my application allows users to add comments.

* A comment could contain:

```text
Great application!
```

* That is normal content.

* But a malicious user could submit:

```html
<img src=x onerror=alert('XSS')>
```

* If I display this value as HTML without proper handling, it can become an XSS problem.

* Depending on the context, I can safely render it as text or apply appropriate output encoding.

* My security project demonstrates this using `escapeHtml()` and server-side HTML escaping.

* The server also escapes the submitted comment before returning it.

* This is important because I should not depend only on the frontend to protect the data.

### Validation vs sanitization

```text
Input: "<script>alert('XSS')</script>"

Validation:
"Is this acceptable as a comment?"
        |
        ↓
May reject it based on application rules

Sanitization / output encoding:
"How can I safely represent this value?"
        |
        ↓
Treat dangerous characters as text
```

* The exact approach depends on where the data will be used.

* HTML, URLs, SQL queries, shell commands and other contexts have different security requirements.

## Content Security Policy

* CSP is a browser security policy delivered mainly through HTTP response headers.

* It tells the browser which resources are allowed.

* A CSP can restrict script sources, image sources, styles and other resources.

### Real application example

* Imagine an admin dashboard where user-generated content is displayed.

* An attacker somehow manages to inject HTML containing an inline script or event handler.

* CSP can tell the browser:

```text
Only execute scripts loaded from trusted sources.
Do not execute inline scripts.
```

* This can reduce the impact of certain XSS attacks.

* For example, my project uses Helmet to configure CSP.

```js
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'"],
            styleSrc: ["'self'"],
            objectSrc: ["'none'"]
        }
    }
}));
```

* Here `'self'` means resources should come from my own application origin.

* `scriptSrc` controls where scripts can be loaded from.

* `objectSrc: ["'none'"]` prevents object-based resources.

### Important security principle

* CSP is an additional security layer, not a replacement for safe coding and input handling.

* I should not think:

```text
"I have CSP, so using innerHTML with user input is safe."
```

* Instead:

```text
Safe rendering
        +
Input handling
        +
Server-side protection
        +
CSP
        |
        ↓
Defense in depth
```

## Security principles I learned from this project

* **Never trust the client**

  The browser and frontend JavaScript are controlled by the user.

* **Validate on the server**

  Frontend validation is useful for user experience, but the backend must enforce important rules.

* **Treat user input as untrusted**

  User input should not automatically be treated as HTML, JavaScript, SQL, commands or any other trusted format.

* **Use context-appropriate output handling**

  `textContent` is appropriate when I want to display plain text. HTML escaping or other context-specific encoding may be required in other situations.

* **Use defense in depth**

  I should not depend on only one security mechanism. Safe coding, validation, authorization, secure cookies, CSRF protection and CSP can work together.

* **Security is not only about preventing attacks**

  It is also about limiting what an attacker can do if one protection fails.

## My Security Project

* I created a small Express.js security demonstration application.

* The project demonstrates two major web security problems:

  XSS | Cross-Site Scripting

  CSRF | Cross-Site Request Forgery

* For XSS, I demonstrate:

  `innerHTML` | unsafe handling of untrusted HTML

  `escapeHtml()` | escaping dangerous HTML characters

  `textContent` | treating user input as plain text

  CSP | additional browser-level protection

* For CSRF, I demonstrate:

  `/token` | generating a random CSRF token

  `X-CSRF-Token` | sending the token with the request

  Server validation | rejecting requests without a valid token

* The project also performs server-side HTML escaping, giving an additional layer of protection.

* The main lesson from the project is:

  **Security should not depend on trusting the browser. The server must enforce important security rules, and multiple layers of protection should work together.**


# 39. Tooling

## npm

* npm is a package manager and project tool for JavaScript.
* It installs dependencies.
* It manages project metadata in `package.json`.
* It can run scripts.

```json
{
    "scripts": {
        "dev": "node server.js",
        "test": "jest"
    }
}
```

* Real application example:
  * My Node.js project can use `npm install express` to install Express.
  * `npm run dev` can start the development server.
  * `npm test` can run automated tests.

## package.json

* `package.json` describes the project and its dependencies/scripts.
* `dependencies` contain packages needed by the application.
* `devDependencies` contain packages mainly needed during development.
* The lock file records resolved dependency versions.

## Yarn

* Yarn is another JavaScript package manager.
* It performs many of the same package-management tasks as npm.
* I should avoid mixing package managers casually in the same project because their lock files can represent different dependency resolutions.

## ESLint

* ESLint checks JavaScript code for configured problems.
* Example problems:
  * Unused variables.
  * Certain dangerous patterns.
  * Incorrect coding patterns.
* Real application example:
  * If I declare `const applicantCount` and never use it, ESLint can identify it before I waste time looking for the issue later.

## Prettier

* Prettier formats code automatically.
* It handles indentation, spacing, line wrapping and other formatting.
* It does not primarily decide whether my business logic is correct.
* Real application example:
  * In a team project, everyone can save JavaScript in the same formatting style without manually arguing about spaces and line breaks.

## Bundlers

* A bundler processes modules and application assets so they can be delivered efficiently.
* Modern frontend tools can also perform code splitting, asset handling, transformations and optimization.
* Vite is a development/build tool commonly used with modern frontend applications.
* Real application example:
  * My Vue or React application may have dozens of imported modules.
  * The build process prepares the application for browser delivery instead of me manually combining every file.

# 40. JavaScript in the Browser

## What JavaScript in the Browser Means

JavaScript in the browser allows me to make an HTML page dynamic and interactive.

HTML defines the structure, CSS controls the appearance, and JavaScript controls the behavior.

My project is a browser-based Notes App built using:

```text
HTML
|
| Page structure

CSS
|
| Styling

JavaScript
|
| Application logic
| DOM manipulation
| Events
| Storage
| Navigation
| Media APIs
```

I intentionally built it using **plain JavaScript without React, Vue, or another framework**.

This helped me understand the browser APIs directly before depending on framework abstractions.

My application supports:

* Creating notes
* Reading notes
* Deleting notes
* Persisting notes using `localStorage`
* Keyboard interaction using `Enter`
* Event delegation
* Browser navigation using the History API
* Back/forward navigation using `popstate`
* Voice recording using the Media API
* Dynamic DOM updates
* Browser permission handling
* Audio playback
* Resource cleanup

The overall architecture is:

```text
User
|
v
Browser
|
+-- HTML
|   |-- Input
|   |-- Buttons
|   |-- Notes list
|
+-- CSS
|   |-- Layout
|   |-- Styling
|
+-- JavaScript
    |
    +-- DOM
    +-- Events
    +-- localStorage
    +-- History API
    +-- Media API
    +-- Application state
```

# 1. Browser JavaScript

## Definition

Browser JavaScript is JavaScript running inside a web browser with access to browser-provided APIs.

JavaScript itself is the language.

The browser provides additional APIs such as:

```text
DOM API
Storage API
History API
Media API
Fetch API
Timer API
```

My Notes App uses several of these APIs directly.

For example:

```js
localStorage
history.pushState()
navigator.mediaDevices.getUserMedia()
MediaRecorder
document.querySelector()
setTimeout()
```

These are browser capabilities available to JavaScript running in the page.

# 2. Browser Environment

When my JavaScript runs in the browser, it has access to objects such as:

```text
window
document
navigator
localStorage
history
location
```

For example:

```js
document.querySelector("#notes")
```

uses the DOM API.

And:

```js
localStorage.setItem(...)
```

uses the browser's Web Storage API.

The browser provides these capabilities around the JavaScript language.

Conceptually:

```text
Browser
|
+-- JavaScript Engine
|
+-- DOM API
+-- Storage API
+-- History API
+-- Media API
+-- Fetch API
+-- Timer API
```

# 3. DOM

## Definition

DOM stands for **Document Object Model**.

The browser converts the HTML document into a tree-like object structure that JavaScript can access and modify.

For example, my HTML may contain:

```html
<ul id="notes"></ul>
```

JavaScript can access it using:

```js
const notesList = document.querySelector("#notes");
```

Now JavaScript has a reference to that DOM element.

The flow is:

```text
HTML
|
v
Browser parses HTML
|
v
DOM
|
v
JavaScript
|
v
Modify DOM
|
v
Browser updates page
```

# 4. DOM Manipulation

## Definition

DOM manipulation means using JavaScript to create, remove, update, or modify elements on the page.

My Notes App dynamically renders notes.

When I add:

```text
Tested login module
```

JavaScript creates the corresponding list item and adds it to the `<ul>`.

Conceptually:

```text
User enters note
|
v
JavaScript
|
v
Create <li>
|
v
Set note text
|
v
Add <li> to #notes
|
v
Browser displays note
```

This means the page does not need to be manually refreshed after adding a note.

# 5. Creating Notes

My application allows the user to type a note into an input field.

For example:

```text
Tested login module
```

Then the user can either:

```text
Click Add
```

or:

```text
Press Enter
```

The JavaScript handles both interactions.

The flow is:

```text
User enters text
|
+-- Click Add
|
+-- Press Enter
|
v
JavaScript event handler
|
v
Read input value
|
v
Create note
|
v
Save note
|
v
Render notes
```

# 6. Keyboard Events

## Definition

Keyboard events allow JavaScript to respond when the user interacts with the keyboard.

My Notes App supports:

```text
Enter
```

to add a note.

For example, conceptually:

```js
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addNote();
    }
});
```

The important part is:

```js
event.key
```

It tells me which key triggered the event.

The flow is:

```text
User presses Enter
|
v
keydown event
|
v
Check event.key
|
v
"Enter"?
|
v
addNote()
```

This makes the application more convenient because the user doesn't always need to click the Add button.

# 7. Browser Events

## Definition

An event represents something that happened in the browser.

Examples:

```text
click
keydown
input
change
submit
load
popstate
```

My application uses events for multiple features.

For example:

```text
Add button
|
v
click

Input
|
v
keydown

Notes list
|
v
click

Browser navigation
|
v
popstate

Voice recording
|
v
MediaRecorder events
```

The browser detects the event and calls the JavaScript event handler.

# 8. Event Listeners

## Definition

An event listener tells JavaScript what to do when a particular event happens.

For example:

```js
button.addEventListener("click", addNote);
```

This means:

```text
When button is clicked
|
v
Run addNote()
```

In my Notes App, event listeners connect the user's actions to application behavior.

Without event listeners, the browser would display the UI but my JavaScript would not know when the user interacts with it.

# 9. Event Delegation

## Definition

Event delegation means attaching one event listener to a parent element instead of creating separate listeners for every child element.

This is one of the important concepts demonstrated by my Notes App.

Suppose I have:

```html
<ul id="notes">
    <li>Learn Node.js</li>
    <li>Practice Express</li>
    <li>Review MongoDB</li>
</ul>
```

Instead of doing:

```text
li 1 | listener
li 2 | listener
li 3 | listener
```

I attach one listener to:

```text
#notes
```

The flow is:

```text
User clicks a note
|
v
Event reaches <li>
|
v
Event bubbles to <ul>
|
v
#notes listener
|
v
Identify clicked <li>
|
v
Delete corresponding note
```

# 10. Event Bubbling

Event delegation works because events can bubble from the target element toward its ancestors.

For example:

```text
<li>
|
v
<ul>
|
v
<body>
|
v
document
```

If I click the `<li>`, the event can reach the parent `<ul>`.

My application uses this behavior to handle note deletion from one parent listener.

# 11. Why I Used Event Delegation

Imagine the application contains 1,000 notes.

If I create one event listener for every note:

```text
1000 notes
|
v
1000 listeners
```

I have more listener registrations to manage.

With event delegation:

```text
1000 notes
|
v
1 listener on #notes
```

The handler determines which note was clicked.

This makes the code simpler and works especially well when list items are dynamically created.

This is important in my app because notes are not fixed in the HTML.

They are created dynamically by JavaScript.

# 12. Dynamic DOM Rendering

My notes are stored as application data and then rendered into the DOM.

Conceptually:

```text
notes array
|
v
renderNotes()
|
v
Create <li> elements
|
v
Append to #notes
|
v
Browser displays notes
```

When the data changes, I can render the updated state again.

For example:

```text
Before:
notes = [Note A, Note B]

Delete Note A

After:
notes = [Note B]

Render again
|
v
Browser displays only Note B
```

This introduces an important frontend concept:

```text
Application data
|
v
UI representation
```

# 13. Local Storage

## Definition

`localStorage` allows the browser to store small amounts of data as key-value pairs that persist across page reloads.

My Notes App uses it to save notes.

For example:

```js
localStorage.setItem("notes", ...)
```

The important point is that `localStorage` belongs to the browser.

The data is stored on the user's device rather than being sent to my backend server.

# 14. Why I Used localStorage

My Notes App does not require a backend database just to demonstrate persistent notes.

Without localStorage:

```text
Add note
|
v
Refresh page
|
v
Notes disappear
```

With localStorage:

```text
Add note
|
v
Save to localStorage
|
v
Refresh page
|
v
Read localStorage
|
v
Restore notes
```

This allowed me to implement persistence entirely on the client side.

# 15. localStorage Stores Strings

One important limitation is that `localStorage` stores values as strings.

But my notes are represented as an array.

For example:

```js
const notes = [
    "Learn JavaScript",
    "Practice Node.js"
];
```

I cannot directly store the JavaScript array as an array in localStorage.

I convert it to JSON:

```text
JavaScript array
|
v
JSON.stringify()
|
v
String
|
v
localStorage
```

When retrieving:

```text
localStorage
|
v
String
|
v
JSON.parse()
|
v
JavaScript array
```

# 16. JSON Serialization

## Definition

Serialization converts JavaScript data into a format that can be stored or transmitted.

My Notes App uses:

```js
JSON.stringify(notes)
```

before storing notes.

For example:

```js
[
    "Learn JavaScript",
    "Practice Node.js"
]
```

becomes JSON text.

When reading it back:

```js
JSON.parse(savedNotes)
```

converts it back into a JavaScript value.

The complete flow is:

```text
JavaScript array
|
v
JSON.stringify()
|
v
localStorage
|
v
JSON string
|
v
JSON.parse()
|
v
JavaScript array
```

# 17. Loading Notes After Refresh

When the page loads, JavaScript checks whether notes already exist in localStorage.

The flow is:

```text
Page loads
|
v
Read localStorage
|
v
Find "notes"
|
+-- Notes exist
|   |
|   v
|   JSON.parse()
|
+-- No notes
    |
    v
    Start with empty array
|
v
Render notes
```

This gives the application persistence across browser refreshes.

# 18. CRUD in My Notes App

CRUD means:

```text
Create
Read
Update
Delete
```

My current Notes App mainly demonstrates:

```text
Create | Add a note
Read   | Load and display notes
Delete | Click note to remove it
```

The basic flow is:

```text
Create
|
v
Add note
|
v
Save to localStorage
|
v
Render

Read
|
v
Load localStorage
|
v
Render

Delete
|
v
Identify selected note
|
v
Remove from array
|
v
Update localStorage
|
v
Render again
```

Even though this is a small application, it demonstrates the same fundamental data lifecycle used in larger frontend applications.

# 19. State in My Application

The notes array acts as client-side application state.

Conceptually:

```text
notes
|
+-- Note A
+-- Note B
+-- Note C
```

The UI is based on this state.

For example:

```text
State
|
v
notes = [A, B, C]
|
v
DOM
|
v
A
B
C
```

After deleting B:

```text
State
|
v
notes = [A, C]
|
v
DOM
|
v
A
C
```

This separation between data and UI becomes extremely important in larger frontend applications.

Frameworks such as React and Vue provide more structured ways to manage this concept, but I implemented the basic idea manually using plain JavaScript.

# 20. History API

## Definition

The History API allows JavaScript to control browser history and URL navigation without necessarily performing a full page reload.

My Notes App has two views:

```text
Home
All Notes
```

I use URLs such as:

```text
?view=home
?view=all
```

When I move between these views, I update the browser URL using:

```js
history.pushState()
```

without reloading the entire page.

# 21. Single-Page Navigation

Normally, navigating to another page could mean:

```text
Click link
|
v
Browser requests new HTML
|
v
Page reload
```

My Notes App instead does:

```text
Click All Notes
|
v
JavaScript handles navigation
|
v
history.pushState()
|
v
URL changes
|
v
JavaScript changes DOM view
|
v
No full page reload
```

This is a basic form of single-page application behavior.

I did not use React Router or Vue Router.

I implemented the navigation behavior directly using the browser's History API.

# 22. history.pushState()

## Definition

`history.pushState()` adds a new entry to the browser's history without reloading the page.

For example:

```text
Current:
?view=home

User clicks All Notes

After:
?view=all
```

The flow is:

```text
User clicks All Notes
|
v
JavaScript
|
v
history.pushState()
|
v
URL becomes ?view=all
|
v
Render All Notes view
```

The browser remains on the same loaded document.

# 23. popstate

## Definition

The `popstate` event fires when the active history entry changes through browser history navigation such as Back and Forward.

This is important in my application because changing the URL using `pushState()` does not automatically render my UI.

I need to listen for:

```js
window.addEventListener("popstate", ...)
```

The flow is:

```text
User clicks Back
|
v
Browser history changes
|
v
popstate event
|
v
JavaScript reads URL
|
v
Determine view
|
v
Render Home
```

# 24. Browser Back and Forward

My application supports the browser's native navigation buttons.

For example:

```text
Home
|
v
All Notes
|
v
Back
|
v
Home
```

The important flow is:

```text
All Notes
|
| Browser Back
v
popstate
|
v
Read URL
|
v
?view=home
|
v
Render Home
```

This gives the application a more natural browser experience.

# 25. Why pushState and popstate Are Different

This is an important point.

`pushState()`:

```text
JavaScript
|
v
Changes browser history
```

`popstate`:

```text
Browser history changes
|
v
Notifies JavaScript
```

So they solve different problems.

In my application:

```text
Click navigation
|
v
pushState()
|
v
Update view
```

But:

```text
Browser Back / Forward
|
v
popstate
|
v
Update view
```

# 26. URL as Application State

My URL contains:

```text
?view=home
```

or:

```text
?view=all
```

This means the URL itself tells my application which view should be displayed.

Conceptually:

```text
URL
|
v
?view=all
|
v
Read query parameter
|
v
View = all
|
v
Render All Notes
```

This is useful because the browser history can preserve navigation state.

It also means the current view is represented by something the browser understands, rather than only by an internal JavaScript variable.

# 27. URLSearchParams

To read the query parameter, browser JavaScript can use `URLSearchParams`.

For example:

```js
const params = new URLSearchParams(window.location.search);
const view = params.get("view");
```

For:

```text
?view=all
```

the result is:

```text
view = "all"
```

Then my application can decide which view to render.

# 28. Media API

## Definition

The Media APIs allow browser JavaScript to interact with media devices such as microphones and cameras.

My Notes App uses:

```js
navigator.mediaDevices.getUserMedia()
```

to request microphone access.

The browser asks the user for permission before giving JavaScript access to the microphone.

The flow is:

```text
User clicks Record
|
v
getUserMedia()
|
v
Browser permission
|
+-- Allow
|   |
|   v
|   Microphone stream
|
+-- Deny
    |
    v
    Handle permission error
```

# 29. Microphone Permission

Browser applications cannot silently access the user's microphone.

The browser asks for permission.

This is important from a security and privacy perspective.

My application requests:

```js
{ audio: true }
```

The browser then provides a media stream if the user allows access.

Conceptually:

```text
JavaScript
|
| Request microphone
v
Browser security permission
|
+-- Allowed
|   |
|   v
|   MediaStream
|
+-- Denied
    |
    v
    Error
```

# 30. MediaStream

## Definition

A `MediaStream` represents a stream of media data coming from a source such as a microphone.

After:

```js
navigator.mediaDevices.getUserMedia({ audio: true })
```

I receive a stream.

That stream contains audio tracks.

Conceptually:

```text
Microphone
|
v
MediaStream
|
v
Audio Track
|
v
MediaRecorder
```

# 31. MediaRecorder

## Definition

`MediaRecorder` records media from a `MediaStream`.

My application creates a recorder using the microphone stream.

The flow is:

```text
Microphone
|
v
getUserMedia()
|
v
MediaStream
|
v
MediaRecorder
|
v
Audio chunks
|
v
Blob
|
v
Audio element
```

This demonstrates an asynchronous browser API that interacts with real hardware.

# 32. Recording Audio Chunks

The recorder does not necessarily give me one complete audio file immediately.

Instead, audio data can arrive through recorder events.

Conceptually:

```text
Recording starts
|
v
Audio chunk
|
v
Audio chunk
|
v
Audio chunk
|
v
Recording stops
|
v
Combine chunks
```

My application stores the binary chunks in an array.

For example:

```text
audioChunks
|
+-- chunk 1
+-- chunk 2
+-- chunk 3
...
```

# 33. Blob

## Definition

A `Blob` represents immutable raw data that can be treated as a file-like object in browser JavaScript.

After recording:

```text
Audio chunks
|
v
Blob
|
v
Object URL
|
v
<audio>
```

The Blob allows me to treat the recorded binary data as something the browser can play.

# 34. Audio Preview

My application creates an `<audio>` element dynamically.

The flow is:

```text
Recording complete
|
v
Create Blob
|
v
Create object URL
|
v
Create <audio>
|
v
Set audio source
|
v
Add to DOM
|
v
User clicks Play
|
v
Browser plays recording
```

This demonstrates another example of dynamic DOM manipulation.

The `<audio>` element did not need to exist in the original HTML.

JavaScript creates it when the user finishes recording.

# 35. Object URLs

The browser can create a temporary URL that points to the Blob.

Conceptually:

```text
Blob
|
v
URL.createObjectURL()
|
v
blob URL
|
v
audio.src
```

The `<audio>` element can then use that URL as its source.

This allows the browser to play the recorded audio without uploading it to a backend server.

# 36. Recording for 3 Seconds

My application records for three seconds.

The flow is:

```text
Click Record
|
v
Request microphone
|
v
Start MediaRecorder
|
v
Collect audio chunks
|
v
Wait 3 seconds
|
v
Stop MediaRecorder
|
v
Create Blob
|
v
Create audio preview
```

The three-second duration is controlled using a browser timer.

This demonstrates how multiple asynchronous APIs can work together.

# 37. setTimeout()

## Definition

`setTimeout()` schedules a function to run after a specified delay.

My application uses it to stop recording after three seconds.

Conceptually:

```text
Start recording
|
v
setTimeout()
|
| 3000 ms
|
v
Stop recording
```

This does not mean JavaScript blocks for three seconds.

The browser schedules the callback and continues handling other events.

# 38. Asynchronous Media Operations

The microphone and recording APIs are asynchronous.

My application cannot assume:

```text
Click Record
|
v
Audio is immediately available
```

Instead:

```text
Click Record
|
v
Request permission
|
v
Wait for browser response
|
v
Receive MediaStream
|
v
Start recording
|
v
Receive chunks asynchronously
|
v
Stop
|
v
Create Blob
```

This is a good example of why event-driven programming is important in browser JavaScript.

# 39. Resource Cleanup

One important part of my voice recording implementation is cleanup.

After recording finishes, I stop the microphone tracks.

Conceptually:

```text
Recording complete
|
v
stream.getTracks()
|
v
track.stop()
|
v
Microphone released
```

This is important because simply stopping `MediaRecorder` does not mean the underlying hardware stream should remain active forever.

The application should release resources it no longer needs.

# 40. Why Resource Cleanup Matters

If I forget to stop the microphone stream:

```text
Recording finished
|
v
Microphone stream still active
```

the browser may continue holding access to the microphone.

That can:

* Waste resources
* Keep the microphone active unnecessarily
* Cause privacy concerns
* Create problems when starting another recording

So the correct lifecycle is:

```text
Request
|
v
Use
|
v
Stop
|
v
Release
```

# 41. Permissions and Browser Security

Browser APIs involving sensitive hardware are protected.

For example:

```text
Microphone
Camera
Location
Notifications
```

usually require permission.

My application demonstrates this with:

```js
navigator.mediaDevices.getUserMedia()
```

The browser controls the permission.

JavaScript cannot simply bypass that permission.

This is one of the major differences between browser JavaScript and server-side Node.js.

# 42. Browser JavaScript vs Node.js

This distinction became clearer to me through my different projects.

My Notes App runs in:

```text
Browser
|
v
Browser JavaScript
|
+-- document
+-- localStorage
+-- history
+-- navigator
+-- MediaRecorder
```

My Node.js HTTP Log Server runs in:

```text
Node.js
|
v
Server-side JavaScript
|
+-- http
+-- fs
+-- path
+-- os
+-- process
+-- events
```

So:

```text
Browser
|
| UI + user interaction + browser APIs

Node.js
|
| Server + filesystem + networking + OS APIs
```

They both execute JavaScript, but their available runtime APIs are different.

# 43. No Framework

I intentionally built the Notes App using plain JavaScript.

I did not use:

```text
React
Vue
Angular
```

That means I manually handle:

```text
DOM updates
Event listeners
Application state
Routing
Storage
Media recording
```

For example, a framework may provide a router abstraction.

In my project, I use:

```text
history.pushState()
popstate
URLSearchParams
```

directly.

A framework may provide a state management abstraction.

In my project:

```text
notes array
+
localStorage
+
renderNotes()
```

form the basic state-management approach.

This helped me understand the underlying browser APIs.

# 44. Complete Add Note Flow

This is one of the main flows in my project.

```text
User types note
|
v
Input value
|
v
Click Add / Press Enter
|
v
Event handler
|
v
Read input
|
v
Add note to array
|
v
JSON.stringify()
|
v
localStorage.setItem()
|
v
Render notes
|
v
Create <li>
|
v
DOM update
|
v
Browser displays note
```

This one feature demonstrates:

```text
Events
DOM
State
JSON
localStorage
```

# 45. Complete Delete Note Flow

```text
User clicks note
|
v
click event
|
v
Event bubbles to #notes
|
v
Event delegation handler
|
v
Identify clicked note
|
v
Remove note from array
|
v
Update localStorage
|
v
Render notes
|
v
DOM updates
```

This demonstrates:

```text
Event bubbling
Event delegation
DOM manipulation
State management
localStorage
```

# 46. Complete Navigation Flow

When I click **All Notes**:

```text
Click All Notes
|
v
Click event
|
v
history.pushState()
|
v
URL becomes ?view=all
|
v
Render All Notes
|
v
No full page reload
```

When I click the browser Back button:

```text
Back button
|
v
History changes
|
v
popstate
|
v
Read URL
|
v
?view=home
|
v
Render Home
```

This demonstrates:

```text
History API
URL state
Events
DOM rendering
Single-page navigation
```

# 47. Complete Voice Recording Flow

```text
User clicks Record 3s voice
|
v
getUserMedia()
|
v
Browser asks microphone permission
|
v
MediaStream
|
v
Create MediaRecorder
|
v
Start recording
|
v
Receive audio chunks
|
v
Store chunks in array
|
v
3 second timer completes
|
v
Stop recorder
|
v
Create Blob
|
v
Create object URL
|
v
Create <audio>
|
v
Append audio to DOM
|
v
Stop microphone tracks
```

This one feature demonstrates:

```text
Browser permissions
Media API
MediaStream
MediaRecorder
Events
setTimeout
Blob
Object URLs
DOM manipulation
Resource cleanup
```



# 41. JavaScript in Node.js

## What JavaScript in Node.js Means

JavaScript was originally designed to run inside browsers, but Node.js allows JavaScript to run outside the browser.

Node.js is a **JavaScript runtime environment** built on Chrome's V8 JavaScript engine.

In my project, I used Node.js without Express or any external NPM package. I built a lightweight HTTP Log Server using only Node.js core modules.

My project helped me understand how Node.js handles:

* HTTP requests
* File-system operations
* Streams
* Events
* Asynchronous operations
* Process information
* Operating-system information
* Static file serving
* Error handling
* Graceful shutdown
* Basic security

My project structure is conceptually:

```text
Node.js Runtime
|
|-- HTTP Server
|   |-- Static file serving
|   |-- POST /log
|   |-- GET /logs
|   |-- GET /info
|
|-- EventEmitter
|   |-- log event
|
|-- File System
|   |-- Read logs
|   |-- Append logs
|
|-- Streams
|   |-- Request body chunks
|
|-- OS / Process
|   |-- Memory
|   |-- Platform
|   |-- Node version
|   |-- Uptime
|   |-- PID
|
|-- Process Lifecycle
    |-- uncaughtException
    |-- SIGINT
```

This project was useful because instead of hiding Node.js concepts behind Express APIs, I worked directly with the Node.js core APIs.

# 1. Node.js Runtime

## Definition

Node.js is a runtime environment that allows JavaScript code to execute outside the browser.

Normally:

```text
Browser
|
| JavaScript
|
| DOM
| document
| window
| fetch
```

With Node.js:

```text
Node.js
|
| JavaScript
|
| http
| fs
| path
| os
| process
| events
```

Node.js provides APIs that are useful for server-side applications.

For example, the browser does not normally provide Node's `fs` module for directly reading and writing server files.

In my project, Node.js provides the environment where I can create an HTTP server and access the server's file system.

```js
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { EventEmitter } from "node:events";
```

These are Node.js core modules.

No external package is required.

# 2. Node.js Core Modules

## Definition

Node.js core modules are built-in modules provided by Node.js itself.

My project mainly uses:

```text
http  | Create HTTP server
fs    | Read and write files
path  | Safely work with file paths
os    | Get operating-system information
events| Create event-driven communication
process | Access Node.js process information
```

Because these modules are built into Node.js, I don't need:

```bash
npm install express
```

or another third-party package.

This makes my project useful for understanding what frameworks such as Express are doing underneath.

# 3. HTTP Module

## Definition

The `http` module allows Node.js to create HTTP servers and directly handle incoming requests and outgoing responses.

In my project, I create the server using:

```js
const server = http.createServer((req, res) => {
    // Handle request
});
```

Whenever a browser sends a request, Node.js gives me:

```text
req | Incoming request
res | Server response
```

For example:

```text
Browser
|
| GET /
|
v
Node.js HTTP Server
|
| req
|
| route handling
|
v
res
|
| HTML
|
v
Browser
```

This helped me understand what happens underneath Express.

With Express, I might write:

```js
app.get("/", handler);
```

But in my project, I manually inspect:

```js
req.method
req.url
```

and decide what the server should do.

# 4. HTTP Methods

My project handles different types of HTTP requests.

For example:

```text
GET /
GET /logs
GET /info
POST /log
```

The meaning is different for each request.

### GET

Used when the client wants to retrieve information.

My project uses:

```text
GET /logs
GET /info
GET /
```

For example:

```text
Browser
|
| GET /info
|
v
Node.js
|
| Collect system information
|
v
JSON response
```

### POST

Used when the client wants to send data to the server.

My project uses:

```text
POST /log
```

The frontend sends a log message to the server.

```text
Browser
|
| POST /log
| { message: "Tested login module" }
|
v
Node.js
|
| Read request body
|
| Emit "log"
|
v
logs/app.log
```

# 5. Request Object

## Definition

The `req` object contains information about the incoming HTTP request.

In my project, I use values such as:

```js
req.method
req.url
```

For example:

```text
GET /info
```

can be understood as:

```js
req.method // "GET"
req.url    // "/info"
```

This allows my server to decide what operation needs to happen.

Unlike Express, I am manually doing the routing logic.

# 6. Response Object

## Definition

The `res` object is used by the server to send a response back to the client.

For example:

```js
res.writeHead(200, {
    "Content-Type": "application/json"
});

res.end(JSON.stringify(data));
```

The response contains:

```text
Status code
Headers
Body
```

For example:

```text
200
Content-Type: application/json
```

and then the JSON response body.

This helped me understand what Express eventually abstracts for us.

# 7. Static File Serving

## Definition

Static file serving means returning files such as HTML, CSS, JavaScript, images, etc. directly from the server.

My project contains a `public` directory:

```text
public/
|
|-- index.html
|-- style.css
|-- script.js
```

When I open:

```text
http://localhost:3000
```

the Node.js server serves:

```text
public/index.html
```

The browser then requests additional files such as:

```text
/style.css
/script.js
```

and my server serves those files as well.

The flow is:

```text
Browser
|
| GET /
v
public/index.html

Browser
|
| GET /style.css
v
public/style.css

Browser
|
| GET /script.js
v
public/script.js
```

This taught me that Express's static middleware is ultimately solving a problem that can be implemented manually using Node.js APIs.

# 8. Content-Type

## Definition

The server needs to tell the browser what type of content it is receiving.

For example:

```text
.html | text/html
.css  | text/css
.js   | text/javascript
.json | application/json
```

My `serveStatic` logic checks the file extension and sends the appropriate `Content-Type`.

For example:

```text
index.html
|
| Content-Type: text/html
|
v
Browser renders HTML
```

Without the correct content type, browsers may not interpret the response correctly.

# 9. Path Module

## Definition

The `path` module provides utilities for safely working with file and directory paths.

My project uses it to resolve files inside the `public` directory.

For example:

```js
path.join(publicDir, requestedPath)
```

Instead of manually concatenating:

```js
publicDir + "/" + requestedPath
```

I use Node's path utilities because path formats can differ between operating systems.

For example:

```text
Windows | \
Linux   | /
```

Node's `path` module handles these differences.

# 10. Directory Traversal Security

## Definition

Directory traversal is an attack where a user tries to access files outside the intended directory using paths such as `../`.

Suppose my server is supposed to serve:

```text
public/
|
|-- index.html
|-- style.css
```

An attacker might request:

```text
../../secret.txt
```

If I blindly use that path, the server might accidentally expose files outside `public`.

My project protects against this.

The basic idea is:

```text
Requested path
|
v
Normalize path
|
v
Create full path
|
v
Check whether it stays inside publicDir
|
+-- Yes | serve file
|
+-- No  | reject request
```

I use:

```js
path.normalize()
```

and a boundary check such as:

```js
full.startsWith(publicDir)
```

This is important because file-serving code should never blindly trust a path received from the client.

# 11. File System Module

## Definition

The `fs` module allows Node.js applications to interact with files and directories.

My project uses `fs` for:

```text
Reading log files
Writing log entries
Checking files
Serving static files
```

For example:

```text
POST /log
|
v
Create log entry
|
v
fs.appendFile()
|
v
logs/app.log
```

And:

```text
GET /logs
|
v
fs.readFile()
|
v
logs/app.log
|
v
Browser
```

# 12. Asynchronous File Operations

Node.js applications commonly use asynchronous APIs for I/O operations.

For example:

```js
fs.appendFile(...)
```

allows the application to start the file operation without blocking the entire JavaScript execution flow while the disk operation completes.

This is important because file operations can be much slower than CPU operations.

Conceptually:

```text
Request
|
v
Start file operation
|
|--------------------|
| Disk is working    |
|--------------------|
|
v
Callback / Promise completes
|
v
Continue processing
```

The important idea is:

```text
Node.js does not need to sit idle waiting for the disk.
```

# 13. Event-Driven Architecture

## Definition

Node.js is heavily based on events.

Instead of every part of the application constantly checking whether something happened, an event can be emitted when something happens.

My project uses an `EventEmitter`.

```js
const emitter = new EventEmitter();
```

I register a listener:

```js
emitter.on("log", (message) => {
    // Save log
});
```

Then another part of the application can emit:

```js
emitter.emit("log", message);
```

The flow is:

```text
POST /log
|
v
Receive log message
|
v
emit("log")
|
v
"log" listener
|
v
fs.appendFile()
|
v
logs/app.log
```

This separates:

```text
Receiving the request
```

from:

```text
Deciding how the log should be stored
```

That separation becomes more useful as an application grows.

# 14. EventEmitter

## Definition

`EventEmitter` is a Node.js core API used to create and listen for custom events.

My project creates:

```js
const emitter = new EventEmitter();
```

Then:

```js
emitter.on("log", (message) => {
    // Handle log
});
```

And:

```js
emitter.emit("log", message);
```

The important concept is:

```text
emit() | Announces that an event happened
on()   | Listens for that event
```

In my project:

```text
HTTP request
|
v
emit("log")
|
v
log listener
|
v
Append to file
```

This is a simple example of event-driven architecture.

# 15. Streams

## Definition

A stream allows data to be processed piece by piece instead of waiting for the complete data to be available.

This is important for handling large amounts of data efficiently.

My project demonstrates this through the incoming HTTP request body.

For:

```text
POST /log
```

the request body can arrive in chunks.

I listen for:

```js
req.on("data", (chunk) => {
    // Receive chunk
});
```

and:

```js
req.on("end", () => {
    // All chunks received
});
```

The flow is:

```text
Client
|
| Request body
|
| chunk 1
| chunk 2
| chunk 3
|
v
req.on("data")
|
v
Collect/process chunks
|
v
req.on("end")
|
v
Complete request body
```

This is different from assuming that the entire body is immediately available.

# 16. Why Request Body Streaming Matters

Suppose a client sends:

```json
{
    "message": "Tested login module"
}
```

The data might arrive in one or multiple chunks.

So I cannot safely assume:

```js
const body = req.body;
```

because raw Node.js HTTP does not automatically provide Express-style `req.body`.

Instead, I handle the stream:

```js
req.on("data", ...)
req.on("end", ...)
```

This helped me understand what middleware such as:

```js
express.json()
```

is doing at a lower level.

# 17. JSON Parsing

The browser sends the log information as JSON.

Conceptually:

```json
{
    "message": "Tested login module"
}
```

The server receives the body as data chunks.

After receiving the complete body:

```text
Chunks
|
v
Complete string
|
v
JSON.parse()
|
v
JavaScript object
```

This is an important distinction:

```text
JSON | Data format
JavaScript object | Runtime data structure
```

The incoming JSON needs to be parsed before I can access its properties as a JavaScript object.

# 18. Client-Server Communication

My frontend uses `fetch()` to communicate with the Node.js server.

For example:

```text
Browser
|
| fetch("/log", {
|   method: "POST",
|   ...
| })
|
v
Node.js HTTP Server
|
v
Read request body
|
v
Emit log event
|
v
Write to app.log
```

For reading logs:

```text
Browser
|
| fetch("/logs")
|
v
Node.js
|
| Read app.log
|
v
Response
|
v
Browser displays logs
```

This gives me a complete understanding of how frontend JavaScript communicates with backend JavaScript.

# 19. /logs Endpoint

My `/logs` endpoint reads the existing log file.

The flow is:

```text
GET /logs
|
v
Node.js
|
v
fs.readFile()
|
v
logs/app.log
|
v
Return text response
|
v
Browser
```

The log file contains both:

```text
HTTP access logs
```

and:

```text
Custom user logs
```

Each log contains an ISO timestamp so I can understand when the event happened.

For example, conceptually:

```text
2026-10-07T10:30:00.000Z GET /logs
2026-10-07T10:31:00.000Z Tested login module
```

This makes the project behave like a very small custom logging server.

# 20. /info Endpoint

My `/info` endpoint demonstrates how Node.js can access information about the running system and process.

It returns information such as:

```text
platform
freeMemMB
node version
uptimeSec
pid
```

For example:

```json
{
    "platform": "win32",
    "freeMemMB": 1234,
    "node": "v24.x.x",
    "uptimeSec": 120,
    "pid": 12345
}
```

This is useful for understanding that Node.js is not restricted to handling HTTP.

It can also interact with the environment where the application is running.

# 21. OS Module

## Definition

The `os` module provides information about the operating system.

My project uses it for system telemetry.

For example:

```js
os.platform()
os.freemem()
```

This allows my `/info` endpoint to expose information about the server.

The flow is:

```text
GET /info
|
v
os.platform()
os.freemem()
|
v
process.version
process.pid
process.uptime()
|
v
JSON response
```

# 22. Process Object

## Definition

The Node.js `process` object provides information and controls related to the currently running Node.js process.

My project uses:

```js
process.env.PORT
process.version
process.pid
process.uptime()
```

### process.env.PORT

Allows the server port to be configured through an environment variable.

Conceptually:

```text
Environment variable
|
v
process.env.PORT
|
v
HTTP server
|
v
Port 3000
```

This is better than permanently hardcoding configuration values when deploying applications.

### process.version

Provides the Node.js version running the application.

### process.pid

Provides the process ID.

### process.uptime()

Provides how long the Node.js process has been running.

# 23. Environment Variables

Environment variables allow configuration to be provided from outside the source code.

For example:

```text
PORT=3000
```

can be accessed using:

```js
process.env.PORT
```

This becomes useful when the same application runs in different environments.

For example:

```text
Development | 3000
Testing     | 4000
Production  | Platform-provided port
```

The application code does not need to be rewritten just because the port changes.

# 24. Node.js Event Loop

## Definition

The Node.js event loop allows Node.js to handle asynchronous operations without blocking the main JavaScript execution thread for every I/O operation.

My project performs several I/O operations:

```text
HTTP requests
File reads
File writes
Request streams
```

For example:

```text
POST /log
|
v
Receive request
|
v
Start asynchronous file operation
|
| Node.js can continue handling other work
|
v
File operation completes
|
v
Callback / completion handler
```

This is one reason Node.js is effective for I/O-heavy applications.

# 25. Why Async I/O Matters in My Project

Imagine multiple users are sending logs:

```text
User A | POST /log
User B | POST /log
User C | GET /logs
User D | GET /info
```

The server should not completely stop responding to everyone just because one file operation is taking time.

Node.js is designed around this asynchronous I/O model.

This does not mean Node.js magically makes CPU-heavy work parallel.

The important distinction is:

```text
I/O-heavy work
|
| Node.js handles very well

CPU-heavy JavaScript work
|
| Can block the event loop
```

# 26. Error Handling

A server needs to handle errors rather than allowing unexpected failures to crash silently.

My project listens for:

```js
process.on("uncaughtException", ...)
```

This allows me to detect an exception that was not handled elsewhere.

The idea is:

```text
Unexpected error
|
v
uncaughtException
|
v
Log the failure
|
v
Perform controlled shutdown
```

However, `uncaughtException` should not be treated as a normal error-handling strategy for every application error.

Expected errors should be handled close to where they occur.

For example:

```text
File not found
Invalid request
Invalid JSON
Unsupported route
```

should be handled normally.

`uncaughtException` is more of a last-resort safety mechanism for unexpected failures.

# 27. HTTP Error Responses

My server should also respond appropriately when something goes wrong.

For example:

```text
404 | Requested resource does not exist
400 | Invalid client request
500 | Unexpected server error
```

The status code tells the client what happened.

For example:

```text
GET /something-that-does-not-exist
|
v
404 Not Found
```

This is better than returning a successful `200` response for every situation.

# 28. Graceful Shutdown

## Definition

Graceful shutdown means allowing the server to stop cleanly instead of immediately terminating everything.

My project listens for:

```js
process.on("SIGINT", ...)
```

When I press:

```text
Ctrl + C
```

the operating system sends a `SIGINT` signal to the process.

My server catches that signal and performs cleanup.

The flow is:

```text
Ctrl + C
|
v
SIGINT
|
v
Shutdown handler
|
v
Close HTTP server
|
v
Exit process
```

This is different from suddenly killing the process.

# 29. Why Graceful Shutdown Matters

Imagine the server is handling requests when I press `Ctrl+C`.

If the process disappears immediately, active requests may be interrupted.

A graceful shutdown gives the application an opportunity to:

```text
Stop accepting new connections
|
v
Finish existing work
|
v
Close resources
|
v
Exit
```

In larger applications, graceful shutdown can also involve:

```text
Database connections
Message queues
Background workers
File handles
Socket connections
```

# 30. HTTP Server Lifecycle

My project helped me understand the complete lifecycle:

```text
Start Node.js process
|
v
Create HTTP server
|
v
Listen on PORT
|
v
Receive request
|
v
Identify route
|
v
Perform operation
|
v
Send response
|
v
Continue listening
|
v
SIGINT
|
v
Graceful shutdown
|
v
Process exits
```

This is the basic lifecycle of a Node.js server.

# 31. Complete POST /log Flow

This is one of the most important flows in my project.

When I type:

```text
Tested login module
```

and click:

```text
Save log
```

the complete flow is:

```text
Browser
|
| fetch("/log", POST)
|
v
Node.js HTTP Server
|
v
req.on("data")
|
| Receive request chunks
|
v
req.on("end")
|
| Complete body received
|
v
Parse JSON
|
v
emitter.emit("log")
|
v
"log" listener
|
v
fs.appendFile()
|
v
logs/app.log
|
v
HTTP response
|
v
Browser
```

This one feature demonstrates several Node.js concepts together:

```text
HTTP
Streams
Events
JSON
Asynchronous I/O
File System
```

# 32. Complete GET /logs Flow

```text
User clicks "Read logs"
|
v
Browser
|
| GET /logs
|
v
Node.js
|
v
fs.readFile()
|
v
logs/app.log
|
v
Response
|
v
Browser
|
v
Display logs
```

This demonstrates:

```text
HTTP
File System
Asynchronous I/O
Client-server communication
```

# 33. Complete GET /info Flow

```text
User clicks "Server info"
|
v
Browser
|
| GET /info
|
v
Node.js
|
| os.platform()
| os.freemem()
| process.version
| process.uptime()
| process.pid
|
v
Create JSON
|
v
HTTP response
|
v
Browser
```

This demonstrates:

```text
OS module
Process object
HTTP
JSON
Runtime information
```

# 34. Why I Built This Without Express

This was an intentional learning decision.

If I immediately used Express:

```js
app.get(...)
app.post(...)
app.use(express.json())
app.use(express.static(...))
```

many low-level Node.js concepts would be hidden behind framework APIs.

Instead, I used:

```text
http
fs
path
os
events
process
```

directly.

This helped me understand what is happening underneath Express.

For example:

```text
Express
|
v
Node.js HTTP module
|
v
HTTP server
```

Express makes server development easier, but Node.js is the underlying runtime.

# 35. Node.js vs Express

Node.js:

```text
Runtime environment
```

Express:

```text
Web framework built on Node.js
```

For example:

```text
My project:

Node.js
|
| http
| fs
| path
| os
| events
|
v
My custom server
```

A typical Express application:

```text
Node.js
|
v
Express
|
| routing
| middleware
| body parsing
| static serving
|
v
Application
```

Express does not replace Node.js.

It makes building HTTP applications easier.

# 36. Security Considerations in My Project

My project is small, but I still considered security.

### Path Traversal

I prevent requests from escaping the `public` directory.

```text
../
|
v
Normalize
|
v
Boundary check
|
v
Reject unsafe path
```

### Request Validation

The server should not blindly trust the request body.

For example:

```json
{
    "message": "Tested login module"
}
```

should be validated before writing it to the log.

A production system could additionally check:

```text
Is body valid JSON?
Is message present?
Is message a string?
Is message too large?
Does it contain unexpected content?
```

### Resource Limits

Because request bodies arrive through streams, I can also enforce a maximum body size.

This prevents a client from sending an unnecessarily large payload and consuming server memory.

# 37. Memory and Performance

One important lesson from this project is that Node.js applications need to be careful with memory.

For small log messages, collecting the request body is reasonable.

But imagine:

```text
POST /log
|
v
500 MB request body
```

If the server stores the entire body in memory, memory usage can become a problem.

For larger data, streaming is preferable.

The general idea is:

```text
Small data
|
v
Buffering can be acceptable

Large data
|
v
Streaming is safer
```

This is the same reason streaming was important in my previous CSV processing POC.

# 38. Logging Architecture

My project has two types of useful logs:

```text
HTTP access logs
```

and:

```text
User-generated logs
```

For example:

```text
GET /info
GET /logs
POST /log
```

can be recorded automatically.

Then a user can also create:

```text
Tested login module
```

The `EventEmitter` provides a clean way to send these logging events to the logging handler.

Conceptually:

```text
Request
|
v
Logging event
|
v
EventEmitter
|
v
Logging handler
|
v
app.log
```

# 39. What Happens When Multiple Requests Arrive?

Suppose three requests arrive:

```text
GET /info
POST /log
GET /logs
```

Node.js receives and processes these events through its event-driven architecture.

The server doesn't create a completely new JavaScript process for every request.

Instead, the Node.js process continues running and handles incoming events.

Conceptually:

```text
Node.js Process
|
|-- Request A
|-- Request B
|-- Request C
|-- File I/O
|-- Timers
|-- Network events
|
v
Event Loop
```

This is one of the core architectural ideas behind Node.js.




# 42. WebSockets

WebSockets provide a persistent, two-way communication channel between a client and server.

With normal HTTP, communication commonly follows:

```text
Client
|
| Request
v
Server
|
| Response
v
Client
```

The client normally has to initiate the request.

With WebSockets:

```text
Client <=====================> Server
          persistent
        two-way connection
```

After the connection is established:

* Client can send data to server.
* Server can send data to client.
* Both can communicate without creating a new HTTP request for every message.

This makes WebSockets useful when the application needs real-time updates.

## Why WebSockets Are Useful

WebSockets are useful when the client needs updates quickly and continuously.

Common use cases include:

* Chat applications.
* Live notifications.
* Live dashboards.
* Collaborative editing.
* Real-time application status.
* Online gaming.
* Live tracking.
* Real-time monitoring.

For example, a normal employee management page does not necessarily need WebSockets if the data only changes when the user refreshes the page.

But a chat application does.

If Alice sends:

```text
Hello Bob
```

Bob should receive it immediately.

The application should not require Bob to repeatedly click Refresh.

## HTTP Polling vs WebSocket

One way to implement real-time behavior without WebSockets is polling.

For example:

```text
Browser
|
| GET /messages
v
Server
|
| messages
v
Browser

Wait 5 seconds

Browser
|
| GET /messages
v
Server
|
| messages
v
Browser

Wait 5 seconds
...
```

This creates repeated requests even when there are no new messages.

For a chat application with many users, this can create unnecessary traffic.

With WebSockets:

```text
Browser
|
| Establish connection
v
Server
|
| Connection remains open
|
| <----- message
| <----- message
| <----- typing event
| <----- notification
```

The server can send an event when something actually happens.

## Important Point About WebSockets

WebSocket is a communication protocol.

Socket.IO is a library that provides a higher-level real-time communication system.

They should not be treated as exactly the same thing.

```text
WebSocket
|
|-- Standard communication protocol/API
|
Socket.IO
|
|-- Higher-level real-time library
|-- Event-based API
|-- Rooms
|-- Reconnection support
|-- Acknowledgements
|-- Multiple transports
```

Socket.IO can use WebSocket as a transport, but Socket.IO is not simply another name for WebSocket.

## How a WebSocket Connection Works

The communication starts with the client contacting the server.

A simplified flow is:

```text
Browser
|
| Initial connection
v
Server
|
| Handshake
v
Connection established
|
+--------------------------+
|                          |
v                          v
Client can send        Server can send
messages               messages
|                          |
+------------+-------------+
             |
             v
       Persistent connection
```

The connection stays open until one side closes it or the connection is lost.

## My Real Project: Multi-User Chat Application

My POC is a real-time multi-user chat application built using:

* Node.js.
* Express.
* Socket.IO.
* HTML/CSS/JavaScript.

The purpose of the POC is to demonstrate:

* Persistent real-time communication.
* Full-duplex communication.
* Event-based messaging.
* Multiple users.
* Room management.
* Targeted broadcasting.
* Typing indicators.
* Connection lifecycle.
* Reconnection.
* In-memory user state.

The application can be tested using two browser tabs.

```text
Browser Tab 1
Alice
|
|
+----------+
           |
           v
        Server
           ^
           |
+----------+
|
|
Bob
Browser Tab 2
```

Both users maintain their own Socket.IO connection with the server.

## Creating the HTTP Server

My application uses Node's HTTP server together with Socket.IO.

Conceptually:

```js
const httpServer = http.createServer(app);

const io = new Server(httpServer);
```

This is important because Socket.IO needs to attach its communication layer to the HTTP server.

The architecture becomes:

```text
Node.js
|
+-- HTTP Server
|      |
|      +-- Express
|      |
|      +-- HTTP routes
|
+-- Socket.IO
       |
       +-- Real-time connections
       +-- Events
       +-- Rooms
```

The same server can therefore handle normal HTTP requests and real-time Socket.IO communication.

## Full-Duplex Communication

Full-duplex means both sides can communicate independently.

In my chat application:

```text
Alice
|
| "Hello Bob"
v
Server
|
| "Hello Bob"
v
Bob
```

But the server can also initiate communication.

For example, when Bob joins the room:

```text
Bob
|
| join event
v
Server
|
| "Bob joined"
v
Alice
```

Alice did not send a request asking:

```text
"Has someone joined?"
```

The server proactively sent the event.

That is one of the important differences between normal request/response communication and persistent real-time communication.

# Socket Connections

Every connected client gets a unique Socket.IO socket.

The socket has an identifier:

```js
socket.id
```

For example:

```text
Alice -> socket.id = abc123
Bob   -> socket.id = xyz789
```

I use this socket ID to track connected users.

My POC maintains:

```js
const users = new Map();
```

The conceptual state looks like:

```text
users Map

socket.id
    |
    v
{
  name: "Alice",
  room: "general"
}
```

Another connection:

```text
socket.id
    |
    v
{
  name: "Bob",
  room: "general"
}
```

This allows the server to know which user belongs to which room.

## Why Use a Map?

A JavaScript `Map` provides a convenient way to associate a unique socket ID with user information.

Conceptually:

```text
socket.id
    |
    v
user information
```

For example:

```js
users.set(socket.id, {
  name,
  room
});
```

Later I can retrieve the user:

```js
const user = users.get(socket.id);
```

When the user disconnects:

```js
users.delete(socket.id);
```

This gives the server a simple in-memory representation of currently connected users.

## Rooms

A room allows connected sockets to be grouped together.

In my POC, users join the `general` room.

For example:

```js
socket.join(room);
```

If Alice and Bob are both in:

```text
general
```

the server can send an event specifically to that room.

```text
general room
|
+-- Alice
|
+-- Bob
|
+-- Charlie
```

If another user is in a different room:

```text
private-room
|
+-- David
```

David should not receive messages intended for `general`.

This is why rooms are useful.

## Real Project Example: Joining a Room

When Alice joins:

```text
Alice
|
| join room
v
Server
|
| socket.join("general")
v
general room
|
+-- Alice
```

When Bob joins:

```text
Bob
|
| join room
v
Server
|
| socket.join("general")
v
general room
|
+-- Alice
+-- Bob
```

Now both users are members of the same room.

# Event-Based Communication

Socket.IO uses named events.

For example:

```js
socket.on("join", handler);
```

means:

```text
When the "join" event arrives,
execute handler.
```

The client can emit:

```js
socket.emit("join", data);
```

The server can listen:

```js
socket.on("join", (data) => {
  // handle join
});
```

This is different from thinking only in terms of URLs.

Instead of:

```text
POST /join
GET /messages
POST /typing
```

the real-time layer can work with events:

```text
join
message
typing
disconnect
```

## My POC Event Flow

My chat application uses events for different real-time actions.

Conceptually:

```text
Client
|
+-- join
+-- message
+-- typing
|
Server
|
+-- join notification
+-- message broadcast
+-- typing notification
+-- disconnect notification
```

Each event has a specific purpose.

# Broadcasting

Broadcasting means sending an event to one or more connected clients.

Socket.IO provides different ways to control who receives the event.

This is an important part of my POC.

## socket.to(room).emit()

This sends the event to everyone in the room except the sender.

For example:

```js
socket.to(room).emit("userJoined", {
  name
});
```

Suppose:

```text
general
|
+-- Alice
+-- Bob
```

Bob joins the room.

The server executes:

```js
socket.to("general").emit("userJoined", {
  name: "Bob"
});
```

The result is:

```text
Bob
|
| userJoined
v
Server
|
+---------> Alice
|
X
Bob does not receive his own broadcast
```

This is useful for system notifications.

In my POC:

```text
Bob joins
|
v
Bob sees:
"You joined general"

Alice sees:
"Bob joined"
```

This happens because the join confirmation can be sent to Bob separately while the room notification uses:

```js
socket.to(room).emit(...)
```

## io.to(room).emit()

This sends an event to all sockets in the room, including the sender.

For example:

```js
io.to(room).emit("message", {
  name,
  message
});
```

Suppose Alice sends:

```text
Hello Bob!
```

The server broadcasts:

```text
general
|
+-- Alice
+-- Bob
```

Both receive the message.

```text
Alice <------+
             |
             v
           Server
             |
             +------> Alice
             |
             +------> Bob
```

This is useful for chat messages because the sender also needs to see the message.

## Difference Between socket.to() and io.to()

This is an important interview/mentor discussion point.

```text
socket.to(room).emit()
|
+-- Everyone in room
+-- Except sender

io.to(room).emit()
|
+-- Everyone in room
+-- Including sender
```

My POC uses this difference intentionally.

```text
Join notification
|
socket.to(room).emit()
|
Other users receive it

Chat message
|
io.to(room).emit()
|
All room users receive it
```

# Real-Time Chat Message

When Alice types:

```text
Hello Bob!
```

and sends it:

```text
Alice
|
| message event
v
Server
|
| io.to(room).emit()
v
general room
|
+-- Alice
+-- Bob
```

Both browser tabs immediately display:

```text
Alice: Hello Bob!
```

No browser refresh is required.

This demonstrates real-time communication.

# Typing Indicator

My POC also implements a typing indicator.

When Bob starts typing, the client detects an input event.

Conceptually:

```text
Bob types
|
v
input event
|
v
socket.emit("typing")
|
v
Server
|
v
socket.to(room).emit("typing")
|
v
Alice sees:
"Bob is typing..."
```

The important point is that the typing state is also communicated as a real-time event.

## Why Not Send Every Character to the Server?

If the user types:

```text
Hello
```

there are multiple input events:

```text
H
He
Hel
Hell
Hello
```

Sending too much unnecessary traffic can be inefficient.

The client can control how long the typing indicator remains visible.

My POC uses a timer.

```js
clearTimeout(typingTimer);

typingTimer = setTimeout(() => {
  // stop typing indicator
}, 1500);
```

The idea is:

```text
User types
|
v
Show typing indicator
|
v
Timer starts
|
+-- User types again
|     |
|     v
|   Reset timer
|
+-- No more typing
      |
      v
   1.5 seconds
      |
      v
Hide indicator
```

This is a simple example of controlling client-side event frequency and state.

# Connection Lifecycle

A WebSocket connection is not guaranteed to remain available forever.

The network can fail.

The browser can close.

The server can restart.

The user can lose internet connectivity.

Therefore, real-time applications need to handle connection lifecycle events.

My POC handles events such as:

```text
connect
disconnect
reconnection
```

## connect

When the client successfully connects:

```text
Browser
|
v
Socket.IO connection
|
v
connect
|
v
UI shows:
Connected
```

This helps the user understand whether the real-time connection is currently active.

## disconnect

Suppose Bob closes his browser tab.

The server detects the disconnect.

```text
Bob's browser
|
X
|
Connection lost
|
v
Server
|
v
disconnect event
```

The server can then:

```text
1. Find Bob using socket.id.
2. Find Bob's room.
3. Remove Bob from users Map.
4. Notify other room members.
```

In my POC:

```text
Bob closes tab
|
v
disconnect
|
v
users.delete(socket.id)
|
v
socket.to(room).emit(...)
|
v
Alice sees:
"Bob left"
```

This is important because otherwise stale users could remain in server-side state.

# Automatic Reconnection

Network connections can temporarily fail.

Socket.IO provides reconnection support.

For example:

```text
Browser
|
| Connected
v
Server

Internet connection lost
|
v
Socket disconnected
|
v
Socket.IO attempts reconnection
|
v
Connection restored
|
v
Connected again
```

My POC listens to connection state changes so the UI can reflect whether the socket is connected.

This is better than assuming:

```text
"If the page loaded, the connection will always remain available."
```

Real networks do not work that way.

# Authentication and Authorization

A production WebSocket application should not blindly trust every connected client.

A connection may need authentication.

For example:

```text
User
|
| Authentication credentials
v
Server
|
v
Verify identity
|
v
Create socket connection
```

Then authorization determines what the user is allowed to do.

For example:

```text
User A
|
+-- Can join general
+-- Can join team-a
X-- Cannot join admin-only room
```

Authentication answers:

```text
"Who are you?"
```

Authorization answers:

```text
"What are you allowed to do?"
```

My current POC is intentionally simpler and uses a name/room model for learning.

In a production application, I would integrate authentication rather than trusting a client-provided username as proof of identity.

# Message Validation

Clients cannot be trusted.

For example, a malicious client could emit:

```js
socket.emit("message", {
  message: "<malicious input>"
});
```

The server should validate incoming data.

For example:

```text
message
|
v
Validate
|
+-- Is it an object?
+-- Is message present?
+-- Is it a string?
+-- Is it within length limits?
|
v
Process
```

This is important because WebSocket messages are still user-controlled input.

The fact that they arrive through a WebSocket connection does not make them trusted.

# Server Resource Usage

WebSockets keep connections open.

This is different from a short request/response interaction.

For example:

```text
100 users
|
v
100 persistent connections
```

If the application grows:

```text
100,000 users
|
v
100,000 connections
```

the server needs to manage those connections efficiently.

Important considerations include:

* Memory usage.
* Connection limits.
* CPU usage.
* Network bandwidth.
* Heartbeats/ping-pong.
* Cleanup.
* Reconnection storms.
* Horizontal scaling.

This is one reason real-time architecture becomes more complicated at large scale.

# Connection Cleanup

When a socket disconnects, the server should remove associated state.

My POC uses:

```js
users.delete(socket.id);
```

Conceptually:

```text
Before disconnect

users
|
+-- abc123 -> Alice
+-- xyz789 -> Bob


Bob disconnects

users.delete("xyz789")


After disconnect

users
|
+-- abc123 -> Alice
```

This prevents stale user information from remaining in memory.

# Socket.IO

Socket.IO is a real-time communication library for Node.js and browsers.

It provides an event-based programming model.

For example:

```js
socket.emit("message", data);
```

and:

```js
socket.on("message", handler);
```

It also provides features such as:

* Rooms.
* Event-based communication.
* Reconnection handling.
* Connection lifecycle events.
* Broadcasting.
* Acknowledgements.
* Multiple transport mechanisms.

Socket.IO should not be described as simply:

```text
Socket.IO = WebSocket
```

A better explanation is:

```text
WebSocket
|
|-- Standard protocol/API for persistent two-way communication

Socket.IO
|
|-- Higher-level real-time library
|-- Provides event-based APIs and additional features
|-- Can use WebSocket as a transport
```

# My Socket.IO POC Architecture

My application can be represented as:

```text
                    Node.js Server
                         |
              +----------+----------+
              |                     |
           Express               Socket.IO
              |                     |
        HTTP requests         Persistent connections
                                    |
                         +----------+----------+
                         |          |          |
                       Alice       Bob       Charlie
                         |          |          |
                         +----------+----------+
                                    |
                              general room
```

The server maintains:

```js
const users = new Map();
```

Each socket is associated with:

```text
socket.id
|
+-- name
+-- room
```

Rooms determine who should receive events.

# Complete Real-Time Flow in My POC

## User 1 Joins

Alice enters her name and joins `general`.

```text
Alice
|
| join
v
Server
|
+-- users.set(socket.id, Alice)
|
+-- socket.join("general")
|
+-- Send join confirmation to Alice
|
+-- Notify existing room members
```

Result:

```text
Alice:
"You joined general"

Existing users:
"Alice joined"
```

## User 2 Joins

Bob joins the same room.

```text
Bob
|
| join
v
Server
|
+-- users.set(socket.id, Bob)
|
+-- socket.join("general")
|
+-- Bob receives confirmation
|
+-- Existing users receive "Bob joined"
```

Now:

```text
general
|
+-- Alice
+-- Bob
```

## Alice Sends a Message

Alice sends:

```text
Hello Bob!
```

Flow:

```text
Alice
|
| message
v
Server
|
| io.to("general").emit()
v
general
|
+-- Alice receives message
+-- Bob receives message
```

Both tabs immediately display:

```text
Alice: Hello Bob!
```

## Bob Starts Typing

```text
Bob
|
| typing
v
Server
|
| socket.to("general").emit()
v
Alice
|
v
"Bob is typing..."
```

Bob does not need to receive his own typing indicator.

## Bob Stops Typing

The client-side timer waits for 1.5 seconds.

```text
Bob stops typing
|
v
Timer expires
|
v
Typing indicator cleared
|
v
Alice no longer sees:
"Bob is typing..."
```

## Bob Disconnects

```text
Bob closes tab
|
v
disconnect
|
v
Server finds socket.id
|
v
users.delete(socket.id)
|
v
socket.to(room).emit()
|
v
Alice sees:
"Bob left"
```

# Full POC Flow

```text
Browser
|
| Connect
v
Socket.IO Server
|
v
connect
|
| Join room
v
users Map + socket.join()
|
v
general room
|
+-----------------------+
|                       |
v                       v
Alice                   Bob
|                       |
| message               |
+-----------> Server <--+
               |
               v
        io.to(room).emit()
               |
        +------+------+
        |             |
        v             v
      Alice          Bob


Typing:

Bob
|
| typing
v
Server
|
| socket.to(room).emit()
v
Alice


Disconnect:

Bob
|
X
|
v
disconnect
|
v
users.delete(socket.id)
|
v
socket.to(room).emit()
|
v
Alice sees "Bob left"
```



# 43. Service Workers & PWA

* A Service Worker is a special browser-managed JavaScript file that can work separately from the webpage.
* It can intercept certain network requests and work with browser caches.
* PWAs use browser capabilities to provide a more app-like experience.
* Service Workers normally require a secure context such as HTTPS, while localhost is treated specially for development.

## Service Worker registration

```js
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js");
}
```

* The browser downloads and registers the Service Worker.
* The Service Worker has its own lifecycle.
* It can install, activate and handle fetch events.

## Offline caching

* A Service Worker can cache important application resources.
* When the network is unavailable, the Service Worker can return cached resources.

```js
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
```

* Real application example:
  * A field employee uses an inventory application in an area with unstable internet.
  * The application shell and previously needed assets are cached.
  * The user can still open the application when temporarily offline.
* Caching does not mean every piece of application data is automatically available offline.

## Background Sync

* Background Sync can allow deferred work to be retried when connectivity becomes available, where supported.
* Real application example:
  * A field worker fills a report while offline.
  * The application stores the pending operation locally.
  * When network connectivity returns, the application can attempt to send the pending report.
* The UI should clearly say `Pending sync` rather than showing `Submitted` before the server actually receives it.

## Installable PWA

* A PWA can be installed from the browser and launched more like an application.
* A Web App Manifest describes information such as:
  * application name
  * icons
  * start URL
  * display mode
* HTTPS and browser-specific installability requirements are important.

## Real PWA example

* Imagine I create an employee task management application.
* The employee opens it in the browser.
* The app can:
  * cache the application shell
  * work with selected data while offline
  * synchronize pending changes later
  * provide an installable experience
* From the employee's point of view, it can feel more like an installed application even though it is still a web application.

# How these topics connect in a real application

* A real application does not use these technologies separately.
* Example: my job application/admin system could work like this:

```text
User
  |
  v
Browser
  |
  +--> DOM + Events
  |      |
  |      +--> Form input
  |      +--> Add Education
  |      +--> Add Skills
  |      +--> Submit
  |
  +--> Web Storage
  |      |
  |      +--> Save non-sensitive draft
  |
  +--> Fetch / HTTP
  |      |
  |      v
  |   Node.js / Express
  |      |
  |      +--> Validation
  |      +--> Business logic
  |      +--> Database
  |
  +--> WebSocket
  |      |
  |      +--> Live admin status update
  |
  +--> Notifications
  |      |
  |      +--> Important status notification
  |
  +--> DevTools
  |      |
  |      +--> Debug errors
  |      +--> Inspect network
  |      +--> Measure performance
  |
  +--> Security
         |
         +--> Validate input
         +--> Prevent XSS
         +--> Protect state-changing requests
```

# Notes

* JavaScript language -> gives me the programming language itself.
* Browser Web APIs -> let my JavaScript communicate with browser/device capabilities.
* DOM -> controls the page structure.
* Events -> tell my JavaScript that something happened.
* Storage -> keeps selected client-side data.
* Canvas -> draws custom graphics.
* Geolocation -> gets location with permission.
* Notifications -> communicates important events outside the page UI.
* DevTools -> helps me understand what the application is doing.
* Performance -> reduces unnecessary work.
* Unit testing -> automatically checks expected behavior.
* Security -> protects users and application data.
* npm/ESLint/Prettier/bundlers -> help manage the codebase.
* Browser JavaScript -> handles user-facing application behavior.
* Node.js -> handles server-side JavaScript.
* WebSockets -> provide real-time two-way communication.
* Service Workers/PWA -> add offline, caching and app-like browser capabilities.

# Key Points

* Browser JavaScript is not the same environment as Node.js.
* `document`, `window`, `localStorage`, `navigator.geolocation` and Notifications are browser-related APIs.
* `fs`, `process`, Node's HTTP APIs and many server-side modules belong to Node.js.
* I should understand which environment my code is running in before assuming an API exists.
* Client-side validation is for user experience and early feedback.
* Server-side validation is required for trust and security.
* Performance optimization should be based on actual measurement.
* Security should be considered while designing the feature, not added only after an attack happens.
* Testing should focus on expected behavior and important edge cases.
* Real application development is about connecting these concepts together rather than using each API in isolation.

# 45. Design Patterns

* Design patterns are common ways of organizing code to solve problems that appear repeatedly in software development.
* A design pattern is not a ready-made piece of code that I copy everywhere.
* It is more like a proven structure or approach that helps me decide how different parts of my application should communicate.
* I use patterns when the application becomes large enough that simple functions and files are no longer enough to keep responsibilities clear.
* I should not force a design pattern into a small application just to say that I used one.
* The main goal is easier maintenance, testing, extension and understanding.

# Singleton

* Singleton means I keep one shared instance of a particular object/service during the application's lifetime.
* I use it when creating multiple instances would be unnecessary or could create conflicting state.
* The important idea is not simply "one object exists" but "the application accesses one shared instance."

## How it works

* The class or module controls how the instance is created.
* When the application asks for the service again, it receives the same instance instead of creating another one.

```js
class AppConfig {
    constructor() {
        if (AppConfig.instance) {
            return AppConfig.instance;
        }

        this.apiBaseUrl = "/api";
        this.environment = "development";

        AppConfig.instance = this;
    }
}

const config1 = new AppConfig();
const config2 = new AppConfig();

console.log(config1 === config2); // true
```

* In JavaScript, modules themselves are often enough to provide singleton-like behavior because an imported module is normally evaluated once and its exported state can be shared.

## Real application example

* In my admin application, I may have one application configuration object containing:
  * API base URL.
  * Environment information.
  * Feature configuration.
* I do not need every component to create a separate configuration object.
* Instead, I can export one configuration module and reuse it.

```js
// config.js

const config = {
    apiBaseUrl: "/api",
    environment: "development"
};

export default config;
```

```js
import config from "./config.js";

console.log(config.apiBaseUrl);
```

* Every part of the application imports the same configuration module.

## When I should use it

* Shared application configuration.
* A single logging service.
* A carefully designed connection manager.
* A shared cache manager where one shared instance is actually required.

## When I should not use it

* I should not make every service a Singleton just because it is convenient.
* Global shared state can make testing harder.
* If multiple independent instances are useful, Singleton is the wrong choice.

# Factory Pattern

* Factory means I create objects through a separate function or class instead of directly deciding the exact object everywhere.
* I use it when the application needs to create different types of related objects depending on some input.

## How it works

* The calling code gives the factory some information.
* The factory decides which object should be created.
* The calling code does not need to know all the object creation details.

```js
class EmailNotification {
    send(message) {
        console.log("Email:", message);
    }
}

class SmsNotification {
    send(message) {
        console.log("SMS:", message);
    }
}

function createNotification(type) {
    if (type === "email") {
        return new EmailNotification();
    }

    if (type === "sms") {
        return new SmsNotification();
    }

    throw new Error("Unsupported notification type");
}
```

## Real application example

* In my job application system, different events may require different notification methods.
* For example:
  * Application submitted -> email.
  * Interview reminder -> email or SMS.
  * Important admin alert -> another notification mechanism.
* Instead of putting `new EmailNotification()` and `new SmsNotification()` all over my application, I can use a factory.

```js
const notification = createNotification("email");

notification.send("Your application was submitted.");
```

* Later, if I add `PushNotification`, the creation decision stays mainly inside the factory instead of being duplicated throughout the application.

## When I should use it

* When I have multiple related object types.
* When object creation has conditions.
* When the calling code should not care about the exact class being created.

## When I should not use it

* If there is only one simple object and no creation complexity, a factory adds unnecessary code.

# Observer Pattern

* Observer means one object publishes a change/event and multiple interested objects can react to it.
* The publisher does not need to know every detail of what each subscriber will do.
* I use it when one event can affect multiple parts of an application.

## How it works

```js
class EventEmitter {
    constructor() {
        this.listeners = {};
    }

    on(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    emit(event, data) {
        const callbacks = this.listeners[event] || [];

        callbacks.forEach(callback => callback(data));
    }
}
```

* One part of the application emits an event.
* Other parts subscribe to that event.
* When the event happens, all subscribers are notified.

## Real application example

* In my expense approval system, when an expense is approved:
  * The dashboard may need to update.
  * An audit log may need to be created.
  * A notification may need to be sent.
  * Analytics may need to update.
* Instead of making the approval function directly control every part, it can publish an `expenseApproved` event.

```js
events.emit("expenseApproved", {
    expenseId: 42,
    amount: 15000
});
```

* Different listeners can respond:

```js
events.on("expenseApproved", updateDashboard);
events.on("expenseApproved", createAuditLog);
events.on("expenseApproved", sendNotification);
```

* This reduces direct coupling between the approval logic and every side effect.

## Browser connection

* DOM events follow a similar event-driven idea.
* For example:

```js
button.addEventListener("click", handleClick);
```

* The browser is effectively notifying the registered listener that an event occurred.

## Important point

* I should clean up listeners when they are no longer needed in long-running applications.
* Otherwise, unused listeners can keep references alive and cause memory or behavior problems.

# Module Pattern

* Module means separating code into independent units where each module has a focused responsibility.
* A module can keep some internal details private and expose only what other parts need.
* Modern JavaScript uses ES modules with `export` and `import`.

## How it works

```js
// applicantValidator.js

function validateAge(age) {
    return age >= 18 && age <= 100;
}

export function validateApplicant(applicant) {
    return validateAge(applicant.age);
}
```

```js
import { validateApplicant } from "./applicantValidator.js";
```

* `validateAge()` does not need to be exported because it is an internal implementation detail.
* `validateApplicant()` is the public function other modules need.

## Real application example

* My job application project can be divided into:
  * `form.js` -> handles form interaction.
  * `validation.js` -> validates applicant data.
  * `api.js` -> communicates with backend.
  * `ui.js` -> updates the interface.
  * `storage.js` -> handles draft storage.
* This is easier to understand than putting everything into one `app.js`.

## Why modules are important

* Reduce global variables.
* Separate responsibilities.
* Make code reusable.
* Make testing easier.
* Make dependencies visible through imports.
* Make a large application easier to navigate.

## Common mistake

* A module should not become a dumping ground for unrelated functions.
* If one file contains validation, API calls, DOM rendering, authentication and database logic, I have technically used a module but still have poor organization.

# MVC

* MVC means Model, View and Controller.
* It separates application responsibilities into three major parts.

## Model

* Model represents application data and business-related operations.
* In a backend application, models often communicate with the database.

## View

* View is what the user sees.
* In a traditional server-rendered application, this can be HTML templates.
* In a frontend application, the UI framework can represent the view layer.

## Controller

* Controller receives an action/request and coordinates what should happen.
* It connects the request to the appropriate application logic and response.

## Real application example

* In my college management backend:

```text
POST /students
        |
        v
Student Controller
        |
        v
Student Service / Business Logic
        |
        v
Student Model
        |
        v
MongoDB
        |
        v
Controller returns response
```

* The frontend is responsible for displaying the returned data.
* The controller should not contain every piece of business logic.
* The model should not become responsible for the whole application.

## Why MVC is useful

* It separates responsibilities.
* Changes to the UI do not necessarily require changing database code.
* Database logic does not need to be mixed with HTTP response logic.
* Testing becomes easier because responsibilities are separated.

# Strategy Pattern

* Strategy means I define multiple ways of performing an operation and choose the required strategy at runtime.
* I use it when one piece of business logic can be performed using different algorithms or rules.

## How it works

```js
const approvalStrategies = {
    normal: expense => expense.amount < 10000,

    manager: expense => expense.amount < 50000,

    executive: expense => expense.amount >= 50000
};

function checkApproval(expense, strategy) {
    return strategy(expense);
}
```

* The main function does not need to contain every algorithm.
* I pass the strategy I want.

```js
checkApproval(expense, approvalStrategies.manager);
```

## Real application example

* My expense approval application can have different approval rules depending on:
  * Expense amount.
  * Employee role.
  * Department.
  * Expense category.
* Instead of writing one huge `if/else` block, I can separate different approval strategies.

```js
const strategies = {
    accounts: expense => expense.amount <= 10000,

    manager: expense =>
        expense.amount > 10000 &&
        expense.amount <= 50000,

    md: expense =>
        expense.amount > 50000
};
```

* The workflow can select the correct strategy based on the current approval stage.

## When Strategy is useful

* Different calculation methods.
* Different pricing rules.
* Different validation rules.
* Different payment methods.
* Different approval rules.
* Different notification behavior.

## Common mistake

* If I have only one algorithm, creating a Strategy structure can add unnecessary complexity.
* Strategy becomes useful when the application genuinely has interchangeable behaviors.

# How these Design Patterns differ

* Singleton -> controls shared instance creation.
* Factory -> controls object creation.
* Observer -> handles one-to-many event communication.
* Module -> separates code and controls what is exposed.
* MVC -> separates application responsibilities into model, view and controller.
* Strategy -> allows interchangeable algorithms or behaviors.

# Real application combination

* These patterns can work together.
* Example from an expense approval application:

```text
Controller
   |
   v
Service
   |
   +--> Strategy
   |      |
   |      +--> Amount approval rule
   |      +--> Department approval rule
   |
   +--> Factory
   |      |
   |      +--> Email notification
   |      +--> SMS notification
   |
   +--> Observer
          |
          +--> Audit log
          +--> Dashboard update
          +--> Notification
```

* Modules organize each part into separate files.
* MVC provides the larger application structure.
* Strategy handles interchangeable business rules.
* Factory handles object creation.
* Observer handles events.
* Singleton can provide a genuinely shared service when needed.

# 46. Code Organization

* Code organization means deciding how I divide code, files, folders and responsibilities so the project remains understandable as it grows.
* Good organization is not about having many folders.
* It is about knowing where a particular responsibility belongs.
* If I have to search through ten unrelated files to find one small piece of logic, the organization is probably not helping me.

# MVC in Code Organization

* MVC can be used as one way to organize application responsibilities.
* A common backend structure can look like:

```text
server/
    controllers/
        applicationController.js

    models/
        applicationModel.js

    routes/
        applicationRoutes.js

    services/
        applicationService.js

    middleware/
        authMiddleware.js

    utils/
        validation.js

    config/
        database.js

    app.js
    server.js
```

## What each folder does

* `routes/`
  * Defines API endpoints.
  * Example: `GET /applications`.

* `controllers/`
  * Receives the request.
  * Reads parameters/body.
  * Calls the required service.
  * Sends the HTTP response.

* `services/`
  * Contains business logic.
  * Example: determine whether an application can move from `Pending` to `Approved`.

* `models/`
  * Represents database structures and database-related operations.

* `middleware/`
  * Handles cross-cutting request processing.
  * Example: authentication, authorization, request logging.

* `utils/`
  * Contains small reusable utilities that do not belong to one specific business feature.

* `config/`
  * Contains application configuration and setup.

## Real application example

* Suppose my API receives:

```http
POST /applications/42/approve
```

* The flow can be:

```text
Route
  |
  v
Controller
  |
  v
Service
  |
  v
Model / Database
  |
  v
Service result
  |
  v
Controller
  |
  v
HTTP response
```

* The route should not contain database queries.
* The controller should not contain a 100-line approval algorithm.
* The model should not send HTTP responses.

# MVVM

* MVVM means Model, View and ViewModel.
* It is commonly associated with UI applications where the ViewModel connects UI state with application data/logic.

## Model

* Model represents the application's data and domain state.

## View

* View is the UI the user interacts with.

## ViewModel

* ViewModel prepares and manages the state the View needs.
* It acts as a bridge between the View and Model.

## Real application example

* In an applicant admin page, the View contains:
  * Search input.
  * Status filter.
  * Applicant table.
  * Applicant details panel.

* The ViewModel-like layer can contain:
  * `applications`
  * `filteredApplications`
  * `selectedApplicant`
  * `searchText`
  * `statusFilter`
  * functions for loading/filtering/selecting applications.

* The View does not need to know how the API request is implemented.
* It receives the state it needs and displays it.

## Framework connection

* Modern frontend frameworks can encourage patterns that look similar to MVVM, even if they do not explicitly call the architecture "MVVM."
* Vue's reactive state and component structure can be organized in an MVVM-like way.
* The important thing is understanding the separation between UI, state and application logic rather than memorizing the label.

# Folder Structure

* Folder structure should make it easy to find code.
* There is no single folder structure that is correct for every application.
* A small project can use a simple structure.
* A large application usually benefits from organizing around features or responsibilities.

## Simple frontend structure

```text
src/
    components/
    pages/
    services/
    utils/
    assets/
    styles/
    app.js
```

* This can work for a smaller frontend.

## Feature-based structure

* When the application becomes large, organizing by feature can be easier.

```text
src/
    features/
        applications/
            components/
            services/
            validation/
            applicationApi.js
            applicationState.js

        authentication/
            components/
            services/
            authApi.js

        expenses/
            components/
            services/
            expenseApi.js

    shared/
        components/
        utils/
        constants/
```

## Why feature-based organization can help

* All code related to one business feature stays close together.
* If I need to modify the application feature, I know where to look.
* It reduces the problem where one giant `components` folder contains 100 unrelated components.

## Real application example

* My job application system can have:

```text
src/
    features/
        applicant/
            components/
                ApplicantForm.js
                EducationFields.js
                InternshipFields.js
                SkillFields.js

            services/
                applicantApi.js

            validation/
                applicantValidation.js

            applicantState.js

        admin/
            components/
                ApplicantTable.js
                ApplicantDetails.js
                ApplicantFilters.js

            services/
                adminApi.js
```

* The applicant feature contains applicant-related code.
* The admin feature contains admin-related code.
* Shared utilities can remain outside both.

# Clean Code Practices

* Clean code means code that is understandable, predictable and easy to change.
* Clean code does not mean making every function tiny or using complicated architecture.
* The main goal is reducing unnecessary mental effort for the developer reading the code.

## Use meaningful names

* Bad:

```js
const x = 10;
const y = 20;
```

* Better:

```js
const minimumAge = 18;
const maximumAge = 100;
```

* The second version tells me what the values mean without needing another explanation.

## Keep functions focused

* A function should have a clear responsibility.
* Bad:

```js
function submitApplication() {
    // validate fields
    // create HTML
    // save localStorage
    // send API request
    // show notification
    // update admin table
}
```

* This function is doing too many unrelated things.
* Better:

```js
validateApplication();
saveDraft();
submitApplicationToApi();
showSuccessMessage();
```

* Each function has a clearer responsibility.

## Avoid duplicate logic

* If the same validation logic appears in five places, changing the rule means changing five places.
* I should centralize reusable logic.

```js
function isValidAge(age) {
    return age >= 18 && age <= 100;
}
```

* Then the relevant parts of the application can reuse it.

## Avoid giant if/else chains

* Large conditional blocks can become difficult to maintain.
* Sometimes Strategy or a configuration object is cleaner.

```js
const handlers = {
    pending: handlePending,
    approved: handleApproved,
    rejected: handleRejected
};

handlers[application.status]?.(application);
```

* I should still use normal `if/else` when it is clearer. A design pattern is not automatically better.

## Keep business logic away from UI logic

* UI code should deal with displaying information and handling user interaction.
* Business logic should decide what the application is allowed to do.
* Example:
  * UI -> user clicked `Approve`.
  * Service -> check whether this application can be approved.
  * API -> send approval request.
  * Database -> persist the new status.

## Handle errors at the correct layer

* A low-level function should provide useful error information.
* A UI layer can decide how to communicate that error to the user.
* I should not show raw database errors directly to users.

## Avoid magic numbers

* Bad:

```js
if (age >= 18) {
}
```

* Better when the value has business meaning:

```js
const MINIMUM_APPLICANT_AGE = 18;

if (age >= MINIMUM_APPLICANT_AGE) {
}
```

* This makes the rule easier to understand and change.

## Keep dependencies clear

* A module should make it clear what it depends on through imports or parameters.
* Hidden global dependencies make testing and debugging harder.

## Comments should explain why

* I should not comment obvious code.

```js
// increment applicant count by 1
applicantCount++;
```

* This does not add much value.
* A useful comment explains a non-obvious reason:

```js
// Keep the draft for 24 hours so applicants can continue
// if they accidentally close the browser.
```

## Avoid premature abstraction

* I should not create a generic framework for something that happens only once.
* First understand the repeated pattern.
* If the same behavior genuinely appears in multiple places, then extract it.

## Keep files manageable

* A file with 2,000 lines containing unrelated logic is difficult to maintain.
* Splitting by responsibility or feature can make the code easier to navigate.
* But creating 50 tiny files for 50 tiny functions can also make a project harder to follow.
* The goal is useful separation, not maximum separation.

# Real Project Organization Example

* For my job application system, I could organize the JavaScript like this:

```text
src/
    features/
        applicant/
            applicantForm.js
            applicantValidation.js
            applicantStorage.js
            applicantApi.js
            applicantUi.js

        admin/
            adminApi.js
            adminFilters.js
            adminUi.js
            adminState.js

    shared/
        notification.js
        debounce.js
        formatters.js

    config/
        api.js

    app.js
```

## How responsibilities are separated

* `applicantForm.js`
  * Reads form-related DOM elements.
  * Handles Add Education, Add Skill and Add Internship.

* `applicantValidation.js`
  * Validates age, phone, education, CGPA and required fields.

* `applicantStorage.js`
  * Saves and restores non-sensitive draft data.

* `applicantApi.js`
  * Sends applicant data to the backend.

* `applicantUi.js`
  * Displays success/error messages and updates applicant-related UI.

* `adminApi.js`
  * Gets application data from the backend.

* `adminFilters.js`
  * Handles search and status filtering logic.

* `adminState.js`
  * Stores the current application data and selected applicant state.

* `adminUi.js`
  * Displays the application table and details.

* `debounce.js`
  * Provides reusable debounce behavior.

* `notification.js`
  * Handles application notifications.

* `app.js`
  * Starts the application and connects the major pieces.

# How Design Patterns and Code Organization work together

* Design patterns solve recurring design problems.
* Code organization decides where those responsibilities live in the project.
* They are related but not the same thing.

## Example

* I can have a Strategy pattern for expense approval rules:

```text
services/
    expenseApprovalService.js

strategies/
    managerApproval.js
    mdApproval.js
    accountsApproval.js
```

* I can have an Observer-style event system:

```text
events/
    applicationEvents.js
```

* I can have Factory logic:

```text
factories/
    notificationFactory.js
```

* Modules connect these pieces through imports.

# Design Patterns

Design patterns are common ways of structuring code when the same type of software problem appears repeatedly.

A design pattern is not a library and it is not something I should force into every feature.

The important question is:

```text
What problem am I solving?
        |
        v
What responsibilities exist?
        |
        v
Are some responsibilities changing independently?
        |
        v
Would a known pattern make the code easier to maintain?
```

In a real application, I should understand the problem first and then choose a pattern.

## Singleton

* Singleton means the application maintains one shared instance of a particular object.

* The main idea is:

```text
Application
    |
    +---- Module A ----+
    |                  |
    +---- Module B ----+----> Same shared instance
    |                  |
    +---- Module C ----+
```

* A real example is application configuration.

```js
class AppConfig {
    static instance;

    constructor() {
        if (AppConfig.instance) {
            return AppConfig.instance;
        }

        this.apiUrl = "https://api.example.com";
        this.timeout = 5000;

        AppConfig.instance = this;
    }
}

const config1 = new AppConfig();
const config2 = new AppConfig();

console.log(config1 === config2);
```

* Both references point to the same instance.

* In an application, I might have:

```text
API configuration
Database configuration
Logger
Cache manager
Application settings
```

* If every module creates its own configuration manager, different parts of the application could end up using different configuration values.

* A shared instance avoids that.

## Real application example

* Suppose my frontend has:

```text
applicationService.js
userService.js
notificationService.js
analyticsService.js
```

* All of them need the API base URL.

* Instead of:

```js
const apiUrl = "...";
```

* being duplicated everywhere, configuration can be centralized.

```js
class Config {
    static instance;

    constructor() {
        if (Config.instance) {
            return Config.instance;
        }

        this.apiBaseUrl = "/api";
        this.requestTimeout = 10000;

        Config.instance = this;
    }
}

export const config = new Config();
```

* Other modules can use:

```js
import { config } from "./config.js";

fetch(`${config.apiBaseUrl}/applications`);
```

* The important benefit is centralized configuration.

## When Singleton becomes a problem

* Singleton can easily become global mutable state.

* If many unrelated modules can modify the same object:

```js
config.timeout = 999999;
```

* debugging becomes difficult because any module could have changed it.

* Therefore I should not make every shared object a Singleton.

* If normal module exports already provide the shared behavior I need, I don't need to create a complicated Singleton class.

## Factory Pattern

* Factory is useful when creating an object requires a decision.

* Instead of every caller deciding how to construct the object, the factory handles creation.

```text
Caller
   |
   v
Factory
   |
   +---- Email notification
   |
   +---- SMS notification
   |
   +---- Push notification
```

## Real application example

* Suppose my application supports different notification methods.

```js
function createNotification(type) {
    if (type === "email") {
        return {
            send(message) {
                console.log("Email:", message);
            }
        };
    }

    if (type === "sms") {
        return {
            send(message) {
                console.log("SMS:", message);
            }
        };
    }

    if (type === "push") {
        return {
            send(message) {
                console.log("Push:", message);
            }
        };
    }

    throw new Error("Unsupported notification type");
}
```

* Now the application can do:

```js
const notification = createNotification("email");

notification.send(
    "Your application has been received"
);
```

* The caller does not need to know how the email implementation was created.

## Why this helps

Without a factory:

```js
if (type === "email") {
    // create email object
}

if (type === "sms") {
    // create SMS object
}

if (type === "push") {
    // create push object
}
```

* This decision may become duplicated across controllers, services, and background jobs.

* With a factory:

```text
All creation logic
       |
       v
Notification Factory
```

* Adding another notification implementation becomes more controlled.

## Real application connection

* A job application system could have:

```text
Notification
    |
    +-- EmailNotification
    +-- SMSNotification
    +-- PushNotification
```

* A workflow engine could similarly create different step handlers:

```text
Step Factory
    |
    +-- TaskStep
    +-- ApprovalStep
    +-- NotificationStep
```

* This is much closer to how the pattern appears in actual software.

## Strategy Pattern

* Strategy is used when the same operation can be performed using different algorithms or rules.

```text
                  Payment
                     |
          +----------+----------+
          |          |          |
         Card       UPI       Wallet
```

* The caller chooses a strategy without changing the main workflow.

## Real application example - application filtering

* Imagine an admin can filter applicants using different strategies.

```text
Filter
 |
 +-- By skills
 |
 +-- By experience
 |
 +-- By CGPA
 |
 +-- By status
```

* Instead of writing one huge function:

```js
function filterApplications(
    applications,
    type,
    value
) {
    // huge if/else
}
```

* I can separate strategies.

```js
const filterStrategies = {
    status(applications, value) {
        return applications.filter(
            application =>
                application.status === value
        );
    },

    skill(applications, value) {
        return applications.filter(
            application =>
                application.skills.includes(value)
        );
    },

    cgpa(applications, value) {
        return applications.filter(
            application =>
                application.education.some(
                    education =>
                        education.cgpa >= value
                )
        );
    }
};
```

* Then:

```js
function filterApplications(
    applications,
    strategy,
    value
) {
    const filter = filterStrategies[strategy];

    if (!filter) {
        throw new Error(
            "Unsupported filter strategy"
        );
    }

    return filter(applications, value);
}
```

* Now the filtering mechanism can change without changing the caller.

## Real application connection

Strategy is useful for:

* Payment methods.

* Pricing rules.

* Authentication methods.

* Filtering.

* Sorting.

* File processing.

* Notification methods.

* Validation rules.

* Approval rules.

* The important idea is:

```text
Same job
   |
Different ways to perform it
   |
Strategy
```

## Observer Pattern

* Observer allows one object to notify multiple interested parts when something happens.

```text
             Application Submitted
                     |
        +------------+------------+
        |            |            |
        v            v            v
     Email        Analytics      Audit
```

* The application event happens once.

* Multiple listeners respond.

## JavaScript example

```js
class EventEmitter {
    constructor() {
        this.listeners = {};
    }

    on(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    emit(event, data) {
        const callbacks =
            this.listeners[event] || [];

        for (const callback of callbacks) {
            callback(data);
        }
    }
}
```

* Usage:

```js
const events = new EventEmitter();

events.on(
    "applicationSubmitted",
    application => {
        console.log("Send confirmation email");
    }
);

events.on(
    "applicationSubmitted",
    application => {
        console.log("Create audit log");
    }
);

events.emit(
    "applicationSubmitted",
    application
);
```

* Both listeners react to the same event.

## Real application example

* When a job application is submitted:

```text
Application submitted
        |
        v
   Event emitted
        |
        +---- Send confirmation email
        |
        +---- Update application count
        |
        +---- Create audit record
        |
        +---- Notify admin
```

* The application submission logic doesn't need to contain all those unrelated operations.

* This reduces coupling.

## Important production consideration

* In a small application, an in-memory event emitter is enough.

* In a distributed system:

```text
Server 1
Server 2
Server 3
```

* may need a shared event/message system.

* Otherwise an event emitted inside Server 1 is not automatically known by Server 2.

* This is where message brokers and event-driven architecture become relevant.

## Module Pattern

* The Module Pattern groups related data and functions together and controls what other parts of the application can access.

* Modern JavaScript already provides modules using:

```js
export
import
```

## Real application example

Instead of putting everything inside:

```text
app.js
```

I can separate:

```text
applicationService.js
applicationValidator.js
applicationApi.js
applicationFormatter.js
```

Example:

```js
const applications = [];

function addApplication(application) {
    applications.push(application);
}

function getApplications() {
    return [...applications];
}

export {
    addApplication,
    getApplications
};
```

* Internal data is not directly exposed.

* Other modules use the public functions.

```js
import {
    addApplication,
    getApplications
} from "./applicationStore.js";
```

## Why this matters

* Without modules:

```text
Everything
    |
    v
Global variables
    |
    v
Name collisions
    |
    v
Hard to understand dependencies
```

* With modules:

```text
Application Service
        |
        +-- imports validator
        +-- imports repository
        +-- exports service methods
```

* Modules are one of the most important foundations of maintainable JavaScript applications.

## MVC

* MVC means:

```text
Model
View
Controller
```

* Each part has a different responsibility.

```text
Browser
   |
   v
Controller
   |
   v
Model
   |
   v
Database
```

* The response eventually goes back toward the View.

## Model

* Model represents application data and often database interaction.

Example:

```js
const applicationSchema = {
    name: String,
    email: String,
    status: String
};
```

* With MongoDB/Mongoose, this could become a model representing the application collection.

## Controller

* Controller handles the HTTP request.

```js
async function createApplication(req, res) {
    try {
        const application =
            await applicationService.create(
                req.body
            );

        res.status(201).json(application);
    } catch (error) {
        res.status(500).json({
            message: "Unable to create application"
        });
    }
}
```

* The controller should not contain every business rule.

## View

* In a Vue application, the frontend UI acts as the View.

```text
ApplicationForm.vue
ApplicationList.vue
ApplicationDetails.vue
```

* The frontend sends requests to the backend and displays the returned data.

## Real application flow

```text
User submits application
        |
        v
Vue form
        |
        v
POST /applications
        |
        v
Express route
        |
        v
Controller
        |
        v
Service
        |
        v
Model / Repository
        |
        v
MongoDB
        |
        v
Response
        |
        v
Vue UI
```

* This separation makes the system easier to understand.

## MVVM

* MVVM means:

```text
Model
View
ViewModel
```

```text
Model
  |
  v
ViewModel
  |
  v
View
```

* MVVM is particularly useful for frontend applications where UI state and user interactions are complex.

## Real application example

* Imagine a job application form.

```text
Applicant Form
 |
 +-- name
 +-- age
 +-- education
 +-- skills
 +-- internships
 +-- resume
```

* The UI needs state:

```js
const form = {
    name: "",
    age: null,
    skills: [],
    education: [],
    internships: []
};
```

* The ViewModel-like layer handles:

```text
form state
validation state
loading state
error state
submission state
```

* The View displays that state.

* Vue's reactive system makes this style natural.

## MVVM becomes useful when

* The UI has a lot of state.

* Multiple components depend on shared state.

* User interactions change the UI dynamically.

* Validation and loading states are complex.

## Adapter Pattern

* Adapter converts one interface into another interface expected by the application.

```text
External API
     |
     v
 Adapter
     |
     v
Application format
```

## Real application example

* Suppose an external API returns:

```js
{
    user_id: 101,
    full_name: "Gowtham",
    email_address: "gowtham@example.com"
}
```

* My application expects:

```js
{
    id: 101,
    name: "Gowtham",
    email: "gowtham@example.com"
}
```

* Instead of changing the entire application:

```js
function adaptUser(apiUser) {
    return {
        id: apiUser.user_id,
        name: apiUser.full_name,
        email: apiUser.email_address
    };
}
```

* Now:

```js
const user = adaptUser(apiResponse);

console.log(user.name);
```

* The rest of my application does not need to know how the external API is structured.

## Real production-style use

* Third-party payment API.

* External authentication provider.

* Different cloud storage providers.

* Multiple email providers.

* Legacy APIs.

* Database migration layers.

* The adapter protects the rest of the application from external API changes.

## Decorator Pattern

* Decorator adds behavior to an existing function without changing its original implementation.

## Real application example

Suppose:

```js
async function getApplications() {
    return database.findApplications();
}
```

* I want logging.

```js
function withLogging(fn) {
    return async (...args) => {
        console.log("Request started");

        const result = await fn(...args);

        console.log("Request completed");

        return result;
    };
}
```

* Now:

```js
const getApplicationsWithLogging =
    withLogging(getApplications);
```

* I didn't modify `getApplications`.

* I wrapped it with additional behavior.

## Real uses

* Logging.

* Performance measurement.

* Caching.

* Authorization.

* Retry behavior.

* Metrics.

* Validation.

* The important idea is:

```text
Original behavior
       +
Additional behavior
       =
Wrapped behavior
```

## Command Pattern

* Command represents an action as a separate object or function.

```text
Action
 |
 v
Command
 |
 v
Execute
```

## Real application example

* Admin actions:

```text
Approve Application
Reject Application
Cancel Application
Retry Workflow
```

* Instead of directly mixing the logic into UI code:

```js
const approveApplication = {
    execute(application) {
        application.status = "Approved";
    }
};
```

* The UI only requests the action.

```js
approveApplication.execute(application);
```

* This becomes more useful when actions need:

* Undo.

* Logging.

* History.

* Queuing.

* Retry.

* Delayed execution.

## Workflow engine example

```text
Admin clicks Retry
       |
       v
RetryWorkflowCommand
       |
       v
Execute workflow retry
       |
       +--> Audit log
       +--> Update status
       +--> Queue job
```

* The command represents the action independently from the UI.

## Dependency Injection

* Dependency Injection means giving an object or function the dependencies it needs instead of creating those dependencies internally.

Bad:

```js
class ApplicationService {
    constructor() {
        this.database = new MongoDatabase();
    }
}
```

* The service is tightly coupled to MongoDatabase.

Better:

```js
class ApplicationService {
    constructor(database) {
        this.database = database;
    }
}
```

* Now:

```js
const database = new MongoDatabase();

const service =
    new ApplicationService(database);
```

## Why this matters for testing

* I can provide a fake database:

```js
const fakeDatabase = {
    async save(application) {
        return {
            ...application,
            id: 101
        };
    }
};
```

* Then:

```js
const service =
    new ApplicationService(fakeDatabase);
```

* The service can be tested without connecting to the real database.

## Real application architecture

```text
Controller
    |
    v
ApplicationService
    |
    v
ApplicationRepository
    |
    v
Database
```

* Each dependency can be injected.

* This reduces tight coupling.

## Repository Pattern

* Repository separates database access from business logic.

Instead of:

```js
async function approveApplication(id) {
    const application =
        await Application.findById(id);

    application.status = "Approved";

    await application.save();
}
```

* I can have:

```js
class ApplicationRepository {
    async findById(id) {
        return Application.findById(id);
    }

    async updateStatus(id, status) {
        return Application.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );
    }
}
```

* The service then handles the business rule:

```js
async function approveApplication(id) {
    const application =
        await repository.findById(id);

    if (!application) {
        throw new Error(
            "Application not found"
        );
    }

    if (application.status === "Rejected") {
        throw new Error(
            "Rejected applications cannot be approved"
        );
    }

    return repository.updateStatus(
        id,
        "Approved"
    );
}
```

* Now:

```text
Controller
    |
Service -> business rules
    |
Repository -> database operations
```

* This is a very useful structure for backend applications.

## Service Layer

* The service layer contains business logic.

* Example:

```text
POST /applications/:id/approve
```

* Controller:

```js
async function approve(req, res) {
    const result =
        await applicationService.approve(
            req.params.id
        );

    res.json(result);
}
```

* Service:

```js
async function approve(id) {
    const application =
        await repository.findById(id);

    if (!application) {
        throw new Error("Application not found");
    }

    if (application.status !== "Pending") {
        throw new Error(
            "Only pending applications can be approved"
        );
    }

    return repository.updateStatus(
        id,
        "Approved"
    );
}
```

* The service owns the business rule.

* This is important because the same business operation might later be triggered by:

```text
Admin API
Background job
CLI
Workflow engine
Scheduled task
```

* I don't want the business rule duplicated in every entry point.

## Facade Pattern

* Facade provides a simpler interface over a complicated subsystem.

```text
             Complex subsystem
          /        |        \
     Database   Email      Storage
          \        |        /
               Facade
                  |
                  v
             Simple API
```

## Real application example

* Submitting an application may require:

```text
Validate
Save
Upload resume
Create audit log
Send email
Notify admin
```

* Instead of the controller knowing every operation:

```js
await validate();
await save();
await upload();
await audit();
await sendEmail();
await notifyAdmin();
```

* I can expose:

```js
await applicationService.submit(data);
```

* The service/facade coordinates the complicated process.

# Code Organization

Code organization means deciding where code belongs, who is responsible for it, and how different parts communicate.

The goal is not to create the largest folder structure.

The goal is to make it obvious:

```text
Where is this logic?
Who owns this responsibility?
What does this module depend on?
Can I change one part without breaking unrelated parts?
```

## Separation of Concerns

* Different responsibilities should not be unnecessarily mixed together.

Bad:

```js
app.post("/applications", async (req, res) => {
    // validate request
    // check duplicate email
    // upload resume
    // save database record
    // send email
    // create audit log
    // calculate analytics
    // return response
});
```

* This route has too many responsibilities.

Better:

```text
Route
  |
Controller
  |
Service
  |
Repository
```

* Each layer has a clearer responsibility.

## Route

* Route defines which HTTP endpoint exists.

```js
router.post(
    "/applications",
    applicationController.create
);
```

* The route should not contain business logic.

* It answers:

```text
Which URL?
Which HTTP method?
Which controller?
```

## Controller

* Controller handles HTTP-specific concerns.

```js
async function create(req, res) {
    const application =
        await applicationService.create(
            req.body
        );

    res.status(201).json(application);
}
```

* Controller should handle things such as:

* Request parameters.

* Request body.

* Authentication context.

* HTTP status.

* HTTP response.

* It should not become a giant business-logic file.

## Service

* Service contains business rules.

```js
async function create(data) {
    const exists =
        await repository.findByEmail(data.email);

    if (exists) {
        throw new Error(
            "Application already exists"
        );
    }

    const application =
        await repository.create(data);

    await notificationService.sendConfirmation(
        application
    );

    return application;
}
```

* This is where the application decides what should happen.

## Repository

* Repository handles persistence.

```js
async function create(data) {
    return Application.create(data);
}

async function findByEmail(email) {
    return Application.findOne({ email });
}
```

* The service does not need to know the exact database query.

## Model

* Model defines how persistent data is represented.

For MongoDB/Mongoose:

```js
const applicationSchema = new Schema({
    name: String,
    email: String,
    status: String
});
```

* The model describes the database structure and may contain database-level behavior.

## Middleware

* Middleware runs between the incoming request and the final controller.

```text
Request
   |
Authentication
   |
Validation
   |
Logging
   |
Controller
```

Example:

```js
function requireAdmin(req, res, next) {
    if (!req.user) {
        return res
            .status(401)
            .json({
                message: "Authentication required"
            });
    }

    if (req.user.role !== "admin") {
        return res
            .status(403)
            .json({
                message: "Admin access required"
            });
    }

    next();
}
```

* Middleware is useful for behavior shared across multiple routes.

## Validation Layer

* Validation checks whether incoming data satisfies the required structure.

```text
name -> required
email -> valid email
age -> 18-100
skills -> array
resume -> allowed file type
```

* Validation should happen before business operations.

* Example:

```js
function validateApplication(data) {
    if (!data.name) {
        throw new Error("Name is required");
    }

    if (data.age < 18 || data.age > 100) {
        throw new Error(
            "Age must be between 18 and 100"
        );
    }
}
```

* For larger applications, dedicated validation libraries are often preferable.

## Utility Functions

* Utilities should contain genuinely reusable generic operations.

Good:

```text
dateFormatter.js
pagination.js
fileExtension.js
```

Bad:

```text
helper.js
common.js
misc.js
```

* A file named `utils.js` containing 50 unrelated functions usually indicates poor organization.

## Frontend Code Organization

A Vue/React-style application can be organized like:

```text
src/
├── components/
├── pages/
├── services/
├── stores/
├── hooks/
├── utils/
├── validators/
├── router/
├── assets/
└── main.js
```

## Components

* Reusable UI pieces.

```text
ApplicationCard
ApplicationTable
ApplicationForm
StatusBadge
SearchInput
```

## Pages

* Complete screens.

```text
ApplicationListPage
ApplicationDetailsPage
AdminDashboardPage
LoginPage
```

## Services

* API communication.

```js
export async function getApplications() {
    const response =
        await fetch("/api/applications");

    return response.json();
}
```

* The component does not need to know how the API request is constructed.

## State Management

* Shared state should be separated from local component state when appropriate.

Example:

```text
Authentication state
Current user
Selected application
Notifications
Global filters
```

* A central store can manage state used by many components.

* But not every variable belongs in global state.

* A form field used by one component should usually remain local.

## Feature-Based Organization

For a larger application, organizing everything only by technical type can become difficult.

Instead of:

```text
components/
services/
controllers/
models/
```

I can also organize around features.

```text
src/
├── applications/
│   ├── components/
│   ├── services/
│   ├── validators/
│   └── pages/
│
├── authentication/
│   ├── components/
│   ├── services/
│   └── pages/
│
├── notifications/
│   ├── services/
│   └── components/
```

* This becomes useful when the application becomes large.

* All code related to one business feature stays closer together.

## Layer-Based vs Feature-Based Organization

Layer-based:

```text
controllers/
services/
repositories/
models/
```

Feature-based:

```text
applications/
authentication/
notifications/
workflows/
```

* Both approaches are valid.

* A small project may be easier to understand with layers.

* A large application can benefit from feature boundaries.

* A hybrid approach is often practical:

```text
src/
├── modules/
│   ├── applications/
│   │   ├── controller.js
│   │   ├── service.js
│   │   ├── repository.js
│   │   └── model.js
│   │
│   ├── authentication/
│   └── workflows/
│
├── middleware/
├── config/
└── utils/
```

## Dependency Direction

* A healthy architecture should have predictable dependency direction.

Example:

```text
Controller
    |
    v
Service
    |
    v
Repository
    |
    v
Database
```

* The repository should not suddenly call the controller.

* Otherwise responsibilities become tangled.

Bad:

```text
Repository
   |
   v
Controller
   |
   v
Service
   |
   v
Repository
```

* This creates circular dependencies and makes the system difficult to reason about.

## Circular Dependencies

* Circular dependency happens when:

```text
A -> B
B -> A
```

* Example:

```js
// userService.js
import { orderService } from "./orderService.js";

// orderService.js
import { userService } from "./userService.js";
```

* This can cause initialization problems and confusing behavior.

* If two modules strongly depend on each other, it may indicate that some shared responsibility should be moved into a third module.

```text
A ----\
       \
        Shared Service
       /
B ----/
```

## Clean Code

Clean code is code that another developer can understand and safely modify.

It is not code that simply looks fancy.

## Clear naming

Bad:

```js
const d = 7;
const x = getData();
```

Better:

```js
const applicationLimit = 7;
const applications = getApplications();
```

* Names should communicate intent.

## Small focused functions

Bad:

```js
function processApplication() {
    // 200 lines
}
```

Better:

```js
validateApplication();
checkDuplicate();
saveApplication();
sendConfirmation();
createAuditLog();
```

* Each function should have a clear responsibility.

## DRY

* DRY means Don't Repeat Yourself.

Bad:

```js
if (age < 18 || age > 100) {
    // validation
}
```

* repeated in multiple files.

Better:

```js
function validateAge(age) {
    return age >= 18 && age <= 100;
}
```

* But DRY should not mean "extract every repeated line."

* If abstraction makes the code harder to understand, the abstraction may not be worth it.

## YAGNI

* YAGNI means You Aren't Gonna Need It.

* Don't build features just because they might be useful someday.

Bad:

```text
Application
 |
 +-- Email
 +-- SMS
 +-- WhatsApp
 +-- Telegram
 +-- Slack
 +-- Discord
```

* when the current requirement only needs email.

* Start with the requirement that actually exists.

## Early Returns

Deep nesting:

```js
if (user) {
    if (user.role === "admin") {
        if (application) {
            // logic
        }
    }
}
```

Better:

```js
if (!user) {
    return;
}

if (user.role !== "admin") {
    return;
}

if (!application) {
    return;
}

// actual logic
```

* This makes the main logic easier to read.

## Pure Functions

* A pure function:

* Gives the same result for the same input.

* Does not modify external state.

```js
function calculateApplicationScore(
    cgpa,
    experience
) {
    return cgpa * 10 + experience * 5;
}
```

* This is easy to test.

* Pure functions are especially useful for:

* Calculations.

* Formatting.

* Validation.

* Filtering.

* Transforming API data.

## Side Effects

* A side effect changes something outside the function.

Examples:

```text
Database write
API request
DOM update
File upload
LocalStorage update
Email sending
```

* I should keep side effects controlled.

Example:

```text
Pure business logic
        |
        v
Database operation
        |
        v
External side effect
```

* This makes the application easier to test.

## Error Boundaries

* Different layers should handle errors appropriately.

```text
Validation error
    -> 400

Authentication error
    -> 401

Authorization error
    -> 403

Resource not found
    -> 404

Conflict
    -> 409

Unexpected server error
    -> 500
```

* The frontend should receive useful error information but not internal implementation details.

## Environment Configuration

* Configuration should not be hardcoded into application logic.

Bad:

```js
const databaseUrl =
    "mongodb://username:password@server";
```

Better:

```js
const databaseUrl =
    process.env.DATABASE_URL;
```

* Environment-specific configuration belongs in environment/configuration management.

```text
.env
.env.example
config/
```

* Secrets should never be committed to Git.

## Logging

* Logging should provide enough information to understand what happened.

Bad:

```js
console.log("error");
```

Better:

```js
console.error(
    "Application creation failed",
    {
        applicationId,
        error: error.message
    }
);
```

* In larger applications, structured logging systems are normally used.

## Testing and Organization

A well-organized application makes testing easier.

Example:

```text
applicationService.js
applicationService.test.js
```

* Service tests can provide fake repositories.

```js
const fakeRepository = {
    async findByEmail() {
        return null;
    },

    async create(data) {
        return {
            id: 101,
            ...data
        };
    }
};
```

* This is another reason dependency injection and separation of concerns matter.

## Real Job Application System Architecture

A complete application might look like:

```text
Frontend
│
├── pages/
│   ├── LoginPage
│   ├── ApplicationPage
│   ├── AdminDashboard
│   └── ApplicationDetails
│
├── components/
│   ├── ApplicationForm
│   ├── ApplicationTable
│   ├── StatusBadge
│   └── SearchInput
│
├── services/
│   ├── applicationApi
│   ├── authenticationApi
│   └── notificationApi
│
└── stores/
    ├── authStore
    └── applicationStore


Backend
│
├── routes/
│   ├── applicationRoutes
│   ├── authRoutes
│   └── workflowRoutes
│
├── controllers/
│   ├── applicationController
│   ├── authController
│   └── workflowController
│
├── services/
│   ├── applicationService
│   ├── authenticationService
│   ├── notificationService
│   └── workflowService
│
├── repositories/
│   ├── applicationRepository
│   └── userRepository
│
├── models/
│   ├── Application
│   └── User
│
├── validators/
│   └── applicationValidator
│
├── middleware/
│   ├── authentication
│   └── authorization
│
├── config/
│   └── database
│
└── utils/
    ├── dateFormatter
    └── pagination
```

## Real Example - Workflow Engine

Suppose the workflow engine supports:
- Task
- Approval
- Notification


The architecture could be:

```text
Workflow Controller
        |
Workflow Service
        |
        +---- Step Factory
        |       |
        |       +---- Task Handler
        |       +---- Approval Handler
        |       +---- Notification Handler
        |
        +---- Rule Strategy
        |
        +---- Workflow Repository
        |
Database
```

* Factory decides which step handler to create.

* Strategy handles different rule evaluation approaches.

* Repository handles database access.

* Service controls the workflow business logic.

* Controller handles the HTTP request.

* Observer/event handling can notify other systems when a workflow finishes.

* Dependency Injection provides the required repository, services, and handlers.

## Real Example - Expense Approval System

Suppose an expense has different approval levels:

```text
Amount
 |
 +-- < 5,000
 |      |
 |    Manager
 |
 +-- 5,000 - 50,000
 |      |
 |    Manager
 |      |
 |    Accounts
 |
 +-- > 50,000
        |
      Manager
        |
      Accounts
        |
        MD
```

* This is business logic.

* I should not put all of it inside the Express controller.

Better:

```text
Controller
    |
Expense Service
    |
    +---- Approval Strategy
    |
    +---- Expense Repository
    |
    +---- Notification Service
    |
    +---- Audit Event
```

* The approval strategy can determine the required approval path.

* The repository stores the expense.

* The notification service sends messages.

* The event system records or triggers other actions.


# Data Structures

Data structures are different ways of storing and organizing data so that the application can perform operations efficiently.

In JavaScript, I already use arrays, objects, Map, Set, etc. without always thinking about them as data structures.

The important part is understanding why one structure is better than another for a particular problem.

For every feature, I should think about:

* How much data can exist?
* How will I access the data?
* Will I search by ID?
* Do I need uniqueness?
* Does order matter?
* Will I insert/remove frequently?
* Do I need relationships between data?
* Do I need the smallest/highest priority item quickly?
* How much memory can I use?

# Array

* An array stores multiple values in an ordered collection.

```js
const applications = [
    {
        id: 101,
        name: "Gowtham",
        status: "Pending"
    },
    {
        id: 102,
        name: "Arun",
        status: "Approved"
    }
];
```

* The important thing about an array is that the data has a position.

```js
applications[0];
applications[1];
```

* In a job application admin system, an API might return:

```js
const applications = [
    {
        id: 101,
        name: "Gowtham",
        age: 21,
        education: [
            {
                degree: "B.E",
                institution: "Erode Sengunthar Engineering College",
                cgpa: 8.2
            }
        ],
        skills: [
            "JavaScript",
            "Node.js",
            "Express",
            "MongoDB"
        ],
        internships: [
            {
                company: "ABC Technologies",
                role: "Full Stack Intern",
                duration: "3 months"
            }
        ],
        status: "Pending"
    },
    {
        id: 102,
        name: "Arun",
        age: 22,
        education: [],
        skills: ["Python", "Django"],
        internships: [],
        status: "Approved"
    }
];
```

* This is a natural use case for an array because the frontend needs to display a collection of applications.

* Common operations are:

```js
applications.push(newApplication);
applications.pop();
applications.map(application => application.name);
applications.filter(application => application.status === "Pending");
applications.find(application => application.id === 101);
applications.some(application => application.status === "Rejected");
applications.every(application => application.age >= 18);
```

* If I need to display all applications, an array is a natural choice.

```js
for (const application of applications) {
    renderApplication(application);
}
```

* Array lookup by index is fast.

```js
applications[500];
```

* But searching by an application ID is different.

```js
applications.find(application => application.id === 500);
```

* This may need to check many elements.

* If there are 100,000 applications and I repeatedly search by ID, scanning the array every time is inefficient.

* In that situation, I may create a Map.

```js
const applicationById = new Map();

for (const application of applications) {
    applicationById.set(application.id, application);
}

const application = applicationById.get(500);
```

* The array is still useful for ordered display.

* The Map is useful for fast ID-based lookup.

* This is an important production concept:

```text
Array -> good for collection/order/iteration

Map -> good for lookup by key
```

* I should not replace every array with Map.

* If the UI needs to render applications in their current order, an array is simple and readable.

* Arrays are also useful for API responses because JSON naturally represents collections as arrays.

## Array insertion and deletion

* Adding at the end is straightforward.

```js
applications.push(application);
```

* Removing the last item:

```js
applications.pop();
```

* Adding at the beginning:

```js
applications.unshift(application);
```

* Removing from the beginning:

```js
applications.shift();
```

* `shift()` and `unshift()` can be expensive for large arrays because indexes of the remaining elements may need to change.

* This matters when implementing something like a large queue.

* For normal UI lists with hundreds of records, this usually isn't something I need to over-engineer.

* For high-volume processing, I should choose a better structure.

# Stack

* A stack follows LIFO:

```text
Last In
   |
   v
First Out
```

* The last item added is the first item removed.

```js
const stack = [];

stack.push("Application 101");
stack.push("Application 102");
stack.push("Application 103");

const latest = stack.pop();

console.log(latest);
```

* `Application 103` is removed first.

## Real application example

* Imagine an admin reviews an application and changes several fields.

```text
Original application

        |
        v

Change name

        |
        v

Change skills

        |
        v

Change status

        |
        v

Change education
```

* If the admin presses Undo, the application should usually undo the most recent action first.

* A stack can store these actions.

```js
const undoStack = [];

undoStack.push({
    type: "UPDATE_EDUCATION",
    previousValue: oldEducation
});

undoStack.push({
    type: "UPDATE_STATUS",
    previousValue: "Pending"
});

undoStack.push({
    type: "UPDATE_SKILLS",
    previousValue: oldSkills
});
```

* When the user presses Undo:

```js
const lastAction = undoStack.pop();
```

* The most recent action is retrieved first.

* This is exactly where LIFO makes sense.

## Browser history

* Browser navigation also behaves like stack-based history.

```text
Page A
  |
Page B
  |
Page C
  |
Page D
```

* Going back means removing the most recent navigation state.

## Function call stack

* JavaScript itself uses a call stack.

```js
function submitApplication() {
    validateApplication();
}

function validateApplication() {
    validateEmail();
}

function validateEmail() {
    console.log("checking email");
}
```

* Calls are placed on the call stack.

```text
submitApplication()
        |
validateApplication()
        |
validateEmail()
```

* When `validateEmail()` finishes, it is removed first.

* This is another example of LIFO.

## Stack implementation

```js
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}
```

* `peek()` allows me to see the latest item without removing it.

* A stack is useful for:

* Undo/redo.

* Browser history.

* Function calls.

* Expression evaluation.

* Backtracking.

* DFS.

* Parsing nested structures.

# Queue

* A queue follows FIFO:

```text
First In
   |
   v
First Out
```

* The first item added is processed first.

## Real application example

* Imagine the job application system receives 10,000 applications during a placement drive.

* Each application may require:

```text
Application received
        |
        +--> Store application
        |
        +--> Generate confirmation email
        |
        +--> Process resume
        |
        +--> Extract resume information
        |
        +--> Create admin notification
```

* Doing all these operations inside the user's HTTP request can make the request slow.

* Instead, the application can put background work into a queue.

```text
User submits application
        |
        v
API
        |
        +--> Save application
        |
        +--> Add email job
        |
        +--> Add resume processing job
        |
        +--> Add notification job
        |
        v
Return response

             Queue
               |
       +-------+-------+
       |       |       |
      Job1    Job2    Job3
       |
       v
    Worker
```

* The queue controls which job gets processed next.

```js
const queue = [];

queue.push({
    type: "SEND_EMAIL",
    applicationId: 101
});

queue.push({
    type: "PROCESS_RESUME",
    applicationId: 101
});

queue.push({
    type: "SEND_NOTIFICATION",
    applicationId: 101
});
```

* A simple queue can be processed like:

```js
let front = 0;

while (front < queue.length) {
    const job = queue[front];

    front++;

    processJob(job);
}
```

* This avoids repeatedly removing the first element with `shift()`.

## Why a real application uses a queue service

* An in-memory JavaScript array disappears when the server restarts.

* Multiple server instances also cannot reliably share the same in-memory queue.

* Real applications therefore use external queue systems or message brokers.

* Examples include Redis-based job queues, RabbitMQ, Kafka, or cloud queue services.

* The data structure idea remains the same.

```text
Producer
   |
   v
Queue
   |
   +--> Worker 1
   +--> Worker 2
   +--> Worker 3
```

* This allows background work to be distributed among workers.

## Queue use cases

* Email processing.

* Notifications.

* Video processing.

* Resume parsing.

* Image processing.

* Report generation.

* Payment processing.

* Order processing.

* Background API jobs.

* The important idea is:

* A queue separates "request received now" from "work that can be processed later."

# Priority Queue

* A normal queue processes items based on arrival order.

* A priority queue processes the most important item first.

* Imagine the workflow engine receives:

```text
Normal task
Critical task
Low priority task
High priority task
```

* A normal queue processes:

```text
Normal
Critical
Low
High
```

* But a priority queue can process:

```text
Critical
High
Normal
Low
```

* This is useful when every job does not have equal importance.

```js
const tasks = [
    {
        id: 1,
        priority: 3,
        name: "Generate report"
    },
    {
        id: 2,
        priority: 1,
        name: "Payment verification"
    },
    {
        id: 3,
        priority: 2,
        name: "Send email"
    }
];

tasks.sort((a, b) => a.priority - b.priority);

const nextTask = tasks.shift();
```

* This works for a small dataset.

* For a huge stream of jobs, repeatedly sorting the entire collection is inefficient.

* A heap is normally used to implement an efficient priority queue.

# Linked List

* A linked list stores data in nodes.

* Each node contains the data and a reference to another node.

```text
Node A
 value
 next ------> Node B
                |
                v
              Node C
```

```js
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
```

* Creating a list:

```js
const first = new Node("Application 101");
const second = new Node("Application 102");
const third = new Node("Application 103");

first.next = second;
second.next = third;
```

```text
Application 101
       |
       v
Application 102
       |
       v
Application 103
       |
      null
```

## Why linked lists exist

* Arrays store elements by indexes.

```text
0 -> A
1 -> B
2 -> C
3 -> D
```

* A linked list stores relationships through references.

```text
A -> B -> C -> D
```

* If I already have a reference to a node and need to insert another node after it, I can change references without shifting all later values.

```text
Before:

A -> B -> C

After inserting X:

A -> B -> X -> C
```

* In an array, inserting in the middle can require elements after that position to move.

## Doubly Linked List

* A doubly linked list has both previous and next references.

```text
null <- A <-> B <-> C -> null
```

```js
class Node {
    constructor(value) {
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}
```

* This allows movement in both directions.

## Real application connection

* Linked lists are useful for understanding structures such as:

* LRU caches.

* Certain queue implementations.

* Browser navigation models.

* Memory-oriented structures.

* Graph adjacency structures.

* In normal frontend development, I will usually use arrays instead of manually implementing linked lists.

* But understanding linked lists is important because it teaches references, nodes, insertion, deletion, and pointer manipulation.

# Set

* Set stores unique values.

```js
const skills = new Set();

skills.add("JavaScript");
skills.add("Node.js");
skills.add("JavaScript");
```

* The second `"JavaScript"` is not added again.

```js
console.log(skills.size);
```

* The result is `2`.

## Real application example

* Suppose the job application form allows users to add skills.

```text
JavaScript
React
Node.js
JavaScript
React
```

* I don't want duplicate skills.

```js
const skills = new Set();

skills.add("JavaScript");
skills.add("React");
skills.add("Node.js");
skills.add("JavaScript");
```

* Before saving:

```js
const uniqueSkills = [...skills];
```

* Result:

```js
[
    "JavaScript",
    "React",
    "Node.js"
]
```

## Membership checking

* Suppose an admin wants to check whether an applicant has a required skill.

```js
const skills = new Set([
    "JavaScript",
    "Node.js",
    "MongoDB"
]);

if (skills.has("Node.js")) {
    console.log("Required skill available");
}
```

* This is a natural use of Set.

## Large data example

* Suppose 500,000 application records contain skills.

* I need to find all unique skills used across the system.

```js
const allSkills = new Set();

for (const application of applications) {
    for (const skill of application.skills) {
        allSkills.add(skill);
    }
}
```

* The Set automatically handles duplicates.

* Without Set, I would repeatedly search an array before inserting.

# Map

* Map stores key-value pairs.

```js
const applications = new Map();

applications.set(101, {
    name: "Gowtham",
    status: "Pending"
});
```

* Retrieve:

```js
const application = applications.get(101);
```

## Real application problem

* Suppose the admin page has 50,000 applications.

* The UI receives:

```js
const applications = [...];
```

* Then the admin opens:

```text
/application/45892
```

* If I use:

```js
applications.find(application => application.id === 45892);
```

* I may need to scan a large portion of the array.

* If I repeatedly perform this operation, I can create unnecessary work.

* I can build an index:

```js
const applicationById = new Map();

for (const application of applications) {
    applicationById.set(application.id, application);
}
```

* Now:

```js
const application = applicationById.get(45892);
```

* The important idea is:

```text
Array

Good for:
display
iteration
ordered collections


Map

Good for:
lookup
indexing
key-value relationships
```

## Map with complex keys

* Map keys don't have to be strings.

```js
const cache = new Map();

const request = {
    userId: 101,
    endpoint: "/applications"
};

cache.set(request, {
    timestamp: Date.now()
});
```

* Map is also useful for caches, indexes, grouped data, counters, and lookup tables.

# WeakMap

* WeakMap stores object keys without keeping those objects alive just because they exist as keys.

```js
const metadata = new WeakMap();

const application = {
    id: 101,
    name: "Gowtham"
};

metadata.set(application, {
    viewedByAdmin: true,
    viewedAt: Date.now()
});
```

* The metadata is associated with the object but isn't part of the actual application object.

* This can be useful when a library needs to attach internal metadata to objects.

* WeakMap keys must be objects.

* WeakMap is not a replacement for Map.

* I use Map when I need normal key-value storage.

* I use WeakMap for special object-lifecycle-related use cases.

# WeakSet

* WeakSet stores object references.

```js
const processed = new WeakSet();

const application = {
    id: 101
};

processed.add(application);
```

* I can check:

```js
if (processed.has(application)) {
    console.log("Already processed");
}
```

* It can be useful when tracking objects that have been processed without maintaining a strong reference to those objects.

# Hashing and Hash Tables

* Hashing converts a key into a location or bucket used for fast lookup.

* JavaScript's `Map` and `Set` provide hash-table-like behavior internally, although their exact implementation is an engine detail.

* The important application concept is fast lookup.

## Real application example

* Suppose I receive 100,000 users.

```js
const users = [
    {
        id: 1001,
        name: "Gowtham"
    },
    ...
];
```

* I repeatedly need to find users by ID.

* Scanning the array every time is expensive.

* I can create a lookup structure:

```js
const usersById = new Map();

for (const user of users) {
    usersById.set(user.id, user);
}
```

* Then:

```js
const user = usersById.get(1001);
```

* The Map acts like an index.

* This idea is also common in databases.

* Databases create indexes so they don't have to scan every row for every lookup.

# Tree

* A tree represents hierarchical relationships.

```text
                 Application System
                       |
          +------------+------------+
          |                         |
       Frontend                  Backend
                                    |
                           +--------+--------+
                           |                 |
                       Services          Database
```

* A tree contains parent-child relationships.

## Real application example

* A file management application might contain:

```text
Documents
 |
 +-- Resume
 |
 +-- Certificates
 |     |
 |     +-- Degree
 |     +-- Course
 |
 +-- Projects
       |
       +-- Workflow Engine
       +-- Expense System
```

* This is naturally represented as a tree.

```js
const folder = {
    name: "Documents",
    children: [
        {
            name: "Certificates",
            children: [
                {
                    name: "Degree",
                    children: []
                }
            ]
        },
        {
            name: "Projects",
            children: []
        }
    ]
};
```

* Recursive functions are useful for traversing this structure.

```js
function printTree(node) {
    console.log(node.name);

    for (const child of node.children) {
        printTree(child);
    }
}
```

* Trees are also used by the browser DOM.

```text
html
 |
 +-- body
      |
      +-- div
           |
           +-- h1
           +-- form
```

* When JavaScript interacts with nested DOM elements, it is effectively working with a tree structure.

# Binary Tree

* A binary tree is a tree where each node has at most two children.

```text
          10
        /    \
       5      20
      / \    /  \
     2   7  15  30
```

```js
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
```

* Binary trees are useful for understanding hierarchical algorithms.

# Binary Search Tree

* A Binary Search Tree maintains an ordering rule.

```text
left values < current value < right values
```

```text
          50
        /    \
      30      70
     /  \    /  \
   20   40  60   80
```

* Searching for `60`:

```text
60 < 50 ? No
go right

60 < 70 ? Yes
go left

60 found
```

* This can be much faster than checking every node when the tree is balanced.

* A badly unbalanced tree can become:

```text
10
  \
   20
     \
      30
        \
         40
```

* Now the tree behaves almost like a linked list.

* Balanced trees are therefore important in practical implementations.

# Heap

* A heap is a tree-based structure designed for quickly retrieving the highest-priority item.

## Min Heap

* The smallest value stays at the top.

```text
       1
      / \
     3   5
    / \
   8   7
```

## Max Heap

* The largest value stays at the top.

```text
       10
      /  \
     8    7
    / \
   3   5
```

## Real application example

* Imagine the workflow engine has thousands of tasks:

```js
[
    {
        id: 1,
        priority: 10
    },
    {
        id: 2,
        priority: 1
    },
    {
        id: 3,
        priority: 5
    }
]
```

* Priority `1` means the task needs to be processed first.

* If I repeatedly sort the entire array every time a task arrives, I am doing unnecessary work.

* A priority queue backed by a heap is designed specifically for this problem.

* The worker can repeatedly retrieve the highest-priority task.

```text
Priority Queue

Critical task
High priority task
Normal task
Low priority task
```

* Heaps are especially useful in scheduling and graph algorithms.

# Graph

* A graph represents relationships between entities.

```text
A ----- B
|       |
|       |
C ----- D
```

* The entities are vertices.

* The connections are edges.

## Real application example - workflow engine

* Imagine a workflow:

```text
Start
 |
 v
Validate Application
 |
 v
Manager Approval
 |
 +-------> Reject
 |
 v
Finance Approval
 |
 v
Send Email
 |
 v
Complete
```

* This is a graph because each step has relationships to other steps.

```js
const workflow = {
    start: ["validate"],
    validate: ["managerApproval"],
    managerApproval: [
        "financeApproval",
        "reject"
    ],
    financeApproval: ["sendEmail"],
    sendEmail: ["complete"],
    reject: []
};
```

* Graph structures become useful when workflows become more complicated.

```text
A -> B
|    |
v    v
C -> D
```

* I can traverse the graph to determine reachable steps.

## Directed graph

* An edge has a direction.

```text
A -> B
```

* A workflow is normally directed because execution moves from one step to another.

## Undirected graph

* The relationship works both ways.

```text
A --- B
```

* A social friendship relationship can be modeled this way.

## Weighted graph

* Edges contain a cost.

```text
A --5-- B
|
2
|
C
```

* Maps can have travel distances.

* Networks can have latency.

* A recommendation system can have similarity scores.

* Weighted graphs are used by algorithms such as Dijkstra's algorithm.

# Adjacency List

* One common way to store a graph is an adjacency list.

```js
const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A"],
    D: ["B"]
};
```

* This means:

```text
A -> B, C
B -> A, D
C -> A
D -> B
```

* It is efficient when most possible relationships do not actually exist.

# Adjacency Matrix

* Another representation uses a matrix.

```text
    A B C
A   0 1 1
B   1 0 0
C   1 0 0
```

* `1` means a connection exists.

* This can be useful when the graph is dense or constant-time edge checking is important.

# Data Structure Selection

* Use Array when I need an ordered collection.

* Use Set when I need uniqueness or membership checking.

* Use Map when I need key-based lookup.

* Use Stack when the newest item should be processed first.

* Use Queue when the oldest item should be processed first.

* Use Priority Queue when the highest-priority item should be processed first.

* Use Tree when data is hierarchical.

* Use Graph when data represents relationships.

* Use Heap when I repeatedly need the minimum or maximum priority item.

* Use Linked List when node-based sequential relationships are useful.

* The data structure should come from the problem.

# Algorithms

Algorithms are step-by-step methods for solving problems.

The same result can often be produced by multiple algorithms, but the amount of time and memory required can be very different.

# Big O

* Big O describes how the amount of work grows as the input becomes larger.

Common complexities:

```text
O(1)
O(log n)
O(n)
O(n log n)
O(n²)
O(2ⁿ)
```

## O(1)

* The operation does not grow with the input size.

```js
const firstApplication = applications[0];
```

* Whether there are 10 applications or 1,000,000, accessing a known array index is considered constant time.

## O(n)

* The amount of work grows with the number of items.

```js
for (const application of applications) {
    process(application);
}
```

* If the number of applications doubles, the loop may do roughly twice the work.

## O(n²)

* A common example is nested loops.

```js
for (const application of applications) {
    for (const skill of skills) {
        compare(application, skill);
    }
}
```

* If both collections grow, the number of comparisons can grow rapidly.

## Real application example

* Suppose I have:

```text
10,000 applicants
10,000 blocked emails
```

* If I check every applicant against every blocked email:

```text
10,000 × 10,000
```

* That creates around 100 million comparisons.

* Instead, I can store blocked emails in a Set.

```js
const blockedEmails = new Set(blockedEmailList);

for (const application of applications) {
    if (blockedEmails.has(application.email)) {
        reject(application);
    }
}
```

* Now the lookup is much more efficient.

* This is where data structures and algorithms work together.

# Linear Search

* Linear search checks values one after another.

```js
function findApplication(applications, applicationId) {
    for (const application of applications) {
        if (application.id === applicationId) {
            return application;
        }
    }

    return null;
}
```

* This is O(n).

## Real application example

* If the admin page contains 30 applications, linear search is perfectly reasonable.

* The code is simple:

```js
const application = applications.find(
    application => application.id === 101
);
```

* I should not build a complicated indexing system just because Map can theoretically be faster.

* If the data becomes large and the lookup happens repeatedly, I can build a Map.

```js
const applicationById = new Map(
    applications.map(application => [
        application.id,
        application
    ])
);
```

* Then:

```js
applicationById.get(101);
```

* The important engineering decision is based on access pattern and data size.

# Binary Search

* Binary search works by repeatedly cutting a sorted search space in half.

```text
[10, 20, 30, 40, 50, 60, 70]

             40
             |
       search left/right
```

* Example:

```js
function binarySearch(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left <= right) {
        const middle = Math.floor(
            (left + right) / 2
        );

        if (numbers[middle] === target) {
            return middle;
        }

        if (numbers[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}
```

* Suppose there are 1,000,000 sorted values.

* Linear search may check a very large number of values.

* Binary search keeps cutting the search space:

```text
1,000,000
500,000
250,000
125,000
...
```

* This gives O(log n).

* The important condition is that the data must satisfy the ordering requirement.

* If the data is unsorted, I cannot blindly use binary search.

# Bubble Sort

* Bubble sort compares neighboring values and swaps them when they are in the wrong order.

```js
function bubbleSort(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                [numbers[j], numbers[j + 1]] = [
                    numbers[j + 1],
                    numbers[j]
                ];
            }
        }
    }

    return numbers;
}
```

* Example:

```text
[5, 2, 4, 1]

5 > 2 -> swap
[2, 5, 4, 1]

5 > 4 -> swap
[2, 4, 5, 1]

5 > 1 -> swap
[2, 4, 1, 5]
```

* Eventually the largest values move toward the end.

* Bubble sort is O(n²).

* I would not normally use it for large application data.

* It is useful for learning how sorting works.

# Selection Sort

* Selection sort repeatedly finds the smallest remaining value.

```text
[5, 2, 4, 1]

smallest = 1

[1, 2, 4, 5]
```

* The algorithm divides the collection conceptually into:

```text
sorted | unsorted
```

* It repeatedly selects an element from the unsorted part.

* Complexity is generally O(n²).

* It is useful for understanding sorting logic but not normally my first choice for large application datasets.

# Insertion Sort

* Insertion sort builds the sorted portion one element at a time.

```text
[3, 5, 7] | [4]
```

* `4` is inserted into its correct location.

```text
[3, 4, 5, 7]
```

* It works particularly well when data is already mostly sorted.

* For example, if an application continuously receives small changes to an already sorted list, insertion-based techniques can be useful.

* Complexity is O(n²) in the worst case.

# Merge Sort

* Merge sort uses divide and conquer.

```text
[8, 3, 5, 1]

       |
      split

[8, 3]   [5, 1]

   |        |
 [3,8]    [1,5]

       |
      merge

[1,3,5,8]
```

* The algorithm:

```text
1. Divide
2. Sort each part
3. Merge the sorted parts
```

* Time complexity is O(n log n).

* The major trade-off is additional memory for merging.

* Merge sort is useful for understanding how large datasets can be sorted efficiently.

# Quick Sort

* Quick sort chooses a pivot and separates values around that pivot.

```text
[8, 3, 5, 1, 7]

pivot = 5

smaller: [3, 1]
pivot:   [5]
larger:  [8, 7]
```

* Then the smaller and larger parts are processed recursively.

* Average complexity is O(n log n).

* Poor pivot choices can lead to O(n²).

* In real JavaScript applications, I normally use the built-in `sort()` rather than manually implementing quick sort.

# JavaScript Sort

* JavaScript provides `sort()`.

```js
applications.sort(
    (a, b) => a.age - b.age
);
```

* Sorting objects requires a comparator.

```js
applications.sort(
    (a, b) => a.name.localeCompare(b.name)
);
```

* For an admin application:

```js
applications.sort(
    (a, b) => {
        return new Date(b.createdAt)
            - new Date(a.createdAt);
    }
);
```

* This displays the newest applications first.

* In a real application, if the database contains millions of records, I should usually let the database perform filtering and sorting rather than downloading everything and sorting it in the browser.

# Recursion

* Recursion means a function calls itself with a smaller or simpler problem.

* Every recursive function needs a base case.

```js
function factorial(number) {
    if (number <= 1) {
        return 1;
    }

    return number * factorial(number - 1);
}
```

* The calls look like:

```text
factorial(4)
    |
factorial(3)
    |
factorial(2)
    |
factorial(1)
```

* Once the base case is reached, the calls return.

## Real application example - nested workflow

* A workflow engine may contain nested structures.

```js
const workflow = {
    name: "Expense Approval",
    steps: [
        {
            name: "Manager Approval",
            children: [
                {
                    name: "Finance Approval",
                    children: []
                }
            ]
        }
    ]
};
```

* I don't know how deeply nested the workflow can become.

* A recursive function can process every step.

```js
function processStep(step) {
    console.log(step.name);

    for (const child of step.children) {
        processStep(child);
    }
}
```

* This is much cleaner than writing separate loops for level 1, level 2, level 3, etc.

* Recursion is especially useful for trees.

# Two Pointers

* Two pointers means maintaining two positions while processing data.

## Real application example - duplicate detection

* Suppose I have sorted applicant IDs:

```js
const ids = [
    101,
    103,
    103,
    107,
    110
];
```

* I want to detect duplicates.

```js
let left = 0;
let right = 1;

while (right < ids.length) {
    if (ids[left] === ids[right]) {
        console.log("Duplicate:", ids[left]);
    }

    left++;
    right++;
}
```

* For more complex problems, the two pointers can move at different speeds or from opposite ends.

## Palindrome example

```js
function isPalindrome(value) {
    let left = 0;
    let right = value.length - 1;

    while (left < right) {
        if (value[left] !== value[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}
```

* Instead of creating a reversed copy, the algorithm compares both ends.

# Sliding Window

* Sliding window is useful when I need to analyze a continuous range of data.

## Real application example - API monitoring

* Suppose I collect request counts every minute:

```js
const requests = [
    20, 25, 30, 80, 90,
    100, 120, 110, 50
];
```

* I want to know the maximum number of requests in any 3-minute window.

* A naive approach calculates every group from scratch.

```text
20 + 25 + 30
25 + 30 + 80
30 + 80 + 90
...
```

* A sliding window reuses the previous calculation.

```text
[20, 25, 30]
      |
remove 20
add 80
      |
[25, 30, 80]
```

* Implementation:

```js
function maxWindowSum(numbers, size) {
    let windowSum = 0;

    for (let i = 0; i < size; i++) {
        windowSum += numbers[i];
    }

    let maxSum = windowSum;

    for (let i = size; i < numbers.length; i++) {
        windowSum += numbers[i];
        windowSum -= numbers[i - size];

        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}
```

* The algorithm avoids repeatedly adding the entire window.

* This can reduce an O(n × windowSize) approach to O(n).

## Other uses

* Maximum requests in the last 5 minutes.
* Longest active user session.
* Longest substring.
* Rolling analytics.
* Time-based metrics.
* Monitoring systems.

# Hashing

* Hash-based lookup is useful when I repeatedly need to determine whether something exists.

## Real application example - blocked users

* Suppose I have:

```js
const applications = [
    { email: "a@example.com" },
    { email: "b@example.com" },
    { email: "c@example.com" }
];
```

* And:

```js
const blockedEmails = [
    "b@example.com",
    "x@example.com"
];
```

* A poor approach compares every application against every blocked email.

```js
for (const application of applications) {
    for (const email of blockedEmails) {
        if (application.email === email) {
            // blocked
        }
    }
}
```

* This becomes expensive as both datasets grow.

* Instead:

```js
const blockedEmailSet = new Set(blockedEmails);

for (const application of applications) {
    if (blockedEmailSet.has(application.email)) {
        application.status = "Rejected";
    }
}
```

* This is a classic example of using a data structure to improve an algorithm.

# Breadth-First Search

* BFS explores a graph level by level.

```text
A
|
+-- B
|   |
|   +-- D
|
+-- C
    |
    +-- E
```

* BFS visits:

```text
A
B
C
D
E
```

* A queue is normally used.

```js
function bfs(graph, start) {
    const queue = [start];
    const visited = new Set();
    let index = 0;

    while (index < queue.length) {
        const node = queue[index];
        index++;

        if (visited.has(node)) {
            continue;
        }

        visited.add(node);

        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                queue.push(neighbor);
            }
        }
    }

    return visited;
}
```

## Real application example

* Imagine a company organization graph:

```text
CEO
 |
 +-- Engineering Manager
 |       |
 |       +-- Developer A
 |       +-- Developer B
 |
 +-- HR Manager
         |
         +-- HR Executive
```

* If I need to find people level by level, BFS is natural.

* BFS is also useful when I need the shortest number of connections in an unweighted graph.

## Why a queue?

* BFS means:

```text
Process current level
then process next level
then next level
```

* A queue naturally provides this behavior.

# Depth-First Search

* DFS explores as deeply as possible before moving to another branch.

```text
A
|
B
|
D
```

* DFS can use recursion:

```js
function dfs(node, graph, visited = new Set()) {
    if (visited.has(node)) {
        return;
    }

    visited.add(node);

    for (const neighbor of graph[node]) {
        dfs(neighbor, graph, visited);
    }
}
```

## Real application example - workflow dependency checking

* Imagine:

```text
Build Frontend
     |
     v
Run Tests
     |
     v
Deploy
```

* Before deploying, I may need to inspect dependencies.

* DFS can traverse dependency relationships.

* DFS is also useful for:

* Tree traversal.

* Dependency graphs.

* Detecting connected components.

* Exploring nested structures.

* Cycle detection.

* Backtracking.

# BFS vs DFS

* BFS uses a queue.

* DFS commonly uses recursion or a stack.

* BFS explores level by level.

* DFS explores one path deeply before backtracking.

```text
BFS:

A
B C
D E F G


DFS:

A
|
B
|
D
|
...
```

* If I need the shortest number of edges in an unweighted graph, BFS is often appropriate.

* If I need to completely explore a branch or recursively process nested data, DFS is often natural.

# Greedy Algorithm

* A greedy algorithm makes the best-looking choice at the current step.

* The important warning is that greedy does not always produce the globally optimal result.

## Real application example - meeting scheduling

* Suppose an interview system has:

```text
Interview A: 9:00 - 10:00
Interview B: 9:30 - 10:00
Interview C: 10:00 - 11:00
Interview D: 11:00 - 11:30
```

* If the goal is to schedule the maximum number of non-overlapping meetings, a classic greedy strategy is to select the meeting that finishes earliest.

```text
A finishes 10:00
B finishes 10:00
```

* After selecting one, continue with meetings that start after the selected end time.

* This works because the problem has the mathematical property required by the greedy approach.

* I should not assume every optimization problem can be solved greedily.

# Dynamic Programming

* Dynamic programming is useful when a problem contains overlapping subproblems and the results of smaller problems can be reused.

## Real application example

* Imagine an expense system calculates possible approval paths.

* The number of possible combinations can grow rapidly.

* If the same subproblem is calculated repeatedly, I can cache its result.

## Fibonacci example

Naive recursion:

```js
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) +
           fibonacci(n - 2);
}
```

* The problem is that the same values are calculated repeatedly.

```text
fib(5)
 |
 +-- fib(4)
 |    |
 |    +-- fib(3)
 |
 +-- fib(3)
      |
      +-- ...
```

* `fib(3)` is calculated multiple times.

* Memoization stores the result.

```js
function fibonacci(n, memo = {}) {
    if (n <= 1) {
        return n;
    }

    if (memo[n] !== undefined) {
        return memo[n];
    }

    memo[n] =
        fibonacci(n - 1, memo) +
        fibonacci(n - 2, memo);

    return memo[n];
}
```

* Now once `fib(3)` is calculated, its result is reused.

## Dynamic programming components

* A DP problem usually needs:

```text
State
Transition
Base case
Stored results
```

* State describes what subproblem I am solving.

* Transition describes how a larger problem is built from smaller problems.

* Base case provides the smallest known result.

* Stored results prevent repeated work.

# Memoization

* Memoization means caching the result of a function.

## Real application example - expensive calculation

```js
const cache = new Map();

function calculateEligibility(applicationId) {
    if (cache.has(applicationId)) {
        return cache.get(applicationId);
    }

    const result = performComplexEligibilityCheck(
        applicationId
    );

    cache.set(applicationId, result);

    return result;
}
```

* If the same application is checked repeatedly, the expensive operation does not need to run every time.

* In real applications, caching requires careful thinking about:

* How long should data remain cached?

* When does it become stale?

* What happens when the underlying data changes?

* How much memory can the cache use?

* Can multiple users see outdated information?

* Caching is not simply "store everything forever."

# Backtracking

* Backtracking explores possible choices and reverses a choice when it cannot produce a valid solution.

```text
choose
  |
explore
  |
valid?
 /   \
yes   no
 |     |
continue
       |
      undo
```

## Real application example - workflow paths

* Imagine a workflow engine allows:

```text
Start
 |
 +-- Manager Approval
 |       |
 |       +-- Finance
 |
 +-- Direct Approval
         |
         +-- Finance
```

* The system may need to generate possible execution paths.

* Backtracking can explore each possibility.

```js
function explore(path, choices, results) {
    if (choices.length === 0) {
        results.push([...path]);
        return;
    }

    for (let i = 0; i < choices.length; i++) {
        const choice = choices[i];

        path.push(choice);

        const remaining = [
            ...choices.slice(0, i),
            ...choices.slice(i + 1)
        ];

        explore(path, remaining, results);

        path.pop();
    }
}
```

* `push()` represents choosing.

* Recursive call represents exploring.

* `pop()` represents undoing the choice.

* Backtracking is useful for:

* Permutations.

* Combinations.

* Sudoku.

* Maze solving.

* Scheduling possibilities.

* Configuration generation.

* Constraint problems.

* The major problem is that the number of possibilities can become extremely large.

# Divide and Conquer

* Divide and conquer breaks a large problem into smaller independent problems.

```text
Large problem
      |
    divide
    /    \
small    small
 |        |
solve    solve
 \        /
   combine
```

* Merge sort is a classic example.

* Binary search also repeatedly reduces the search space.

* The advantage is that a difficult problem can become easier when broken into smaller pieces.

# Sorting in Real Applications

* Suppose the admin dashboard has:

```text
10,000 applications
```

* The admin wants:

```text
Newest applications first
```

* If all 10,000 applications are already loaded:

```js
applications.sort(
    (a, b) =>
        new Date(b.createdAt) -
        new Date(a.createdAt)
);
```

* But if there are 10 million records in the database, I should not fetch all 10 million records into JavaScript and sort them.

* Instead, the backend/database should handle:

```text
WHERE
ORDER BY
LIMIT
OFFSET
```

* For example:

```text
Database
    |
    | status = Pending
    | order by createdAt DESC
    | limit 20
    |
    v
Backend
    |
    v
Frontend
```

* This is a major real-world lesson:

* Knowing an algorithm is not enough.

* I also need to understand where the operation should happen.

# Search in Real Applications

* Suppose an admin searches:

```text
"javascript"
```

* For 100 records, filtering in JavaScript is simple:

```js
const results = applications.filter(
    application =>
        application.skills.some(
            skill =>
                skill
                    .toLowerCase()
                    .includes("javascript")
        )
);
```

* For millions of records, searching in the frontend is not realistic.

* The backend/database should perform the search.

```text
Frontend
   |
   | GET /applications?search=javascript
   v
Backend
   |
   v
Database
   |
   v
Matching records
```

* This demonstrates an important principle:

* An algorithm that is fine for 100 records may be completely inappropriate for millions of records.

# Time and Space Trade-Off

* Sometimes I can make an algorithm faster by using additional memory.

## Example

* Searching an array repeatedly:

```js
applications.find(
    application => application.id === id
);
```

* Instead, build a Map:

```js
const applicationMap = new Map();

for (const application of applications) {
    applicationMap.set(
        application.id,
        application
    );
}
```

* Now I use additional memory for the Map, but repeated lookup becomes much faster.

```text
Memory increases
      |
      v
Lookup becomes faster
```

* This is a time-space trade-off.

* There is no universal "fastest" solution.

# Data Structure + Algorithm Together

* Data structures and algorithms are closely connected.

## Example - Duplicate application detection

* Requirement:

```text
Reject duplicate applications using email.
```

* Poor approach:

```js
for (const application of applications) {
    for (const existing of existingApplications) {
        if (application.email === existing.email) {
            // duplicate
        }
    }
}
```

* This can become O(n²).

* Better approach:

```js
const existingEmails = new Set();

for (const application of existingApplications) {
    existingEmails.add(application.email);
}

for (const application of applications) {
    if (existingEmails.has(application.email)) {
        application.status = "Duplicate";
    }
}
```

* Here:

```text
Data Structure -> Set
Algorithm      -> one-pass lookup
Problem solved -> duplicate detection
```

# Example - Application Lookup

* Requirement:

```text
Admin opens /applications/50001
```

* If I only have an array:

```js
applications.find(
    application => application.id === 50001
);
```

* The application may need to scan records.

* If I create an index:

```js
const applicationById = new Map();

for (const application of applications) {
    applicationById.set(
        application.id,
        application
    );
}
```

* Then:

```js
applicationById.get(50001);
```

* Here:

```text
Data Structure -> Map
Problem        -> repeated ID lookup
Benefit        -> fast key-based access
```

# Example - Workflow Dependency

* Requirement:

```text
Before executing step C,
make sure step A and B have completed.
```

* This is a relationship problem.

* A graph is appropriate.

```text
A ----\
       ---> C ---> D
B ----/
```

* The graph can represent:

```js
const dependencies = {
    A: ["C"],
    B: ["C"],
    C: ["D"],
    D: []
};
```

* Graph traversal can determine which steps are reachable and whether dependencies exist.

* If cycles are allowed accidentally:

```text
A -> B
B -> C
C -> A
```

* The workflow can never finish.

* Graph algorithms can be used to detect such cycles.

# Example - Priority Workflow Processing

* Requirement:

```text
Critical approval tasks must be processed before normal tasks.
```

* A normal queue is not enough because arrival order is not the only requirement.

* A priority queue is more appropriate.

```text
Priority 1 -> Critical
Priority 2 -> High
Priority 3 -> Normal
Priority 4 -> Low
```

* A heap can efficiently maintain the highest-priority task.

# Example - Recent Activity

* Requirement:

```text
Show the last 10 actions performed by an admin.
```

* A stack-like structure can help maintain recent actions.

```js
const recentActions = [];

recentActions.push(action);

if (recentActions.length > 10) {
    recentActions.shift();
}
```

* For small data this is simple.

* For a more specialized high-volume implementation, a fixed-size circular buffer can avoid repeated shifting.

# Circular Buffer

* A circular buffer reuses a fixed amount of storage.

```text
[ A ][ B ][ C ][ D ][ E ]
  ^
  |
write position
```

* When the end is reached, writing continues from the beginning.

* This is useful when I only care about the most recent N values.

## Real application

* API monitoring:

```text
Keep last 60 seconds of metrics.
```

* Instead of continuously growing:

```js
[
    metric1,
    metric2,
    metric3,
    ...
]
```

* I can maintain a fixed-size buffer.

* This prevents memory from growing indefinitely.

