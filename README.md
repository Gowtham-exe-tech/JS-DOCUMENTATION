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

## Basic test structure

* Arrange -> prepare input.
* Act -> call the function.
* Assert -> verify the result.

## Real applicant validation example

```js
function validateAge(age) {
    return age >= 18 && age <= 100;
}
```

* Tests should cover normal and boundary cases.

```js
expect(validateAge(25)).toBe(true);
expect(validateAge(18)).toBe(true);
expect(validateAge(17)).toBe(false);
expect(validateAge(100)).toBe(true);
expect(validateAge(101)).toBe(false);
```

* This is better than testing only `25`.
* Boundary values often reveal mistakes.

## Jest

* Jest is a JavaScript testing framework.
* It provides test runners, assertions and mocking features.

```js
test("age 17 should be rejected", () => {
    expect(validateAge(17)).toBe(false);
});
```

* Real application example:
  * Before changing applicant validation rules, I can run the tests.
  * If a change breaks the age rules, the test tells me immediately.

## Mocha

* Mocha is another JavaScript test framework.
* It provides a structure for organizing and running tests.
* It is commonly combined with assertion and mocking libraries.

```js
describe("validateAge", () => {
    it("rejects age below 18", () => {
        // assertion
    });
});
```

* Mocha and Jest solve similar testing needs but have different ecosystems and APIs.
* A project normally chooses a consistent testing setup.

## Chai

* Chai is an assertion library.
* It can be used with Mocha.

```js
expect(validateAge(17)).to.equal(false);
```

* Jest already includes an assertion system, so I would not add Chai to a Jest project without a reason.

## Mocking

* Mocking replaces a real dependency with a controlled fake.
* Real application example:
  * `approveApplication()` may call an email service.
  * I do not want a unit test to actually send an email.
  * I mock the email service.
  * Then I test whether the function attempted to send the correct email.

* Mocking keeps the unit test focused on the function being tested.

# 38. Security

* Security means protecting application data, users and functionality from misuse.
* Client-side JavaScript cannot be treated as trusted because users control their browser.
* Important validation and authorization must also happen on the server.

## XSS

* XSS means Cross-Site Scripting.
* It happens when attacker-controlled content becomes executable HTML or JavaScript in another user's browser.
* Example dangerous pattern:

```js
result.innerHTML = applicant.name;
```

* If `applicant.name` contains malicious HTML, the browser may interpret it as markup.
* Safer for plain text:

```js
result.textContent = applicant.name;
```

* Real application example:
  * An applicant enters a name.
  * The admin page displays the name.
  * I treat the name as untrusted data.
  * I safely render it as text rather than assuming it is safe HTML.

## CSRF

* CSRF means Cross-Site Request Forgery.
* The attacker tries to make an authenticated user's browser perform an unwanted state-changing request.
* This matters especially for applications that authenticate with cookies.
* Common defenses include CSRF tokens and appropriate cookie settings such as `SameSite`.
* Real application example:
  * An admin is logged into an expense approval system.
  * An attacker should not be able to trick that browser into approving an expense without the admin intentionally doing it.
* The exact defense depends on the authentication architecture.

## Input validation

* Validation checks whether data follows the application's expected rules.
* Example:

```js
function validateApplicantAge(age) {
    return Number.isInteger(age) &&
           age >= 18 &&
           age <= 100;
}
```

* Real application example:
  * My form accepts age from 18 to 100.
  * Browser validation gives immediate feedback.
  * The backend must repeat the validation because a user can bypass my frontend completely.

## Sanitization

* Sanitization means cleaning or transforming input so it can be safely used in a particular context.
* Validation asks "Is this value acceptable?"
* Sanitization asks "How can I safely handle this value for this context?"
* They are related but not identical.

## Content Security Policy

* CSP is a browser security policy delivered mainly through HTTP response headers.
* It tells the browser which resources are allowed.
* A CSP can restrict script sources, image sources, styles and other resources.
* Real application example:
  * My application can define trusted script sources and reduce the ability of injected scripts to execute.
* CSP is an additional security layer, not a replacement for safe coding and input handling.

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

* Browser JavaScript runs inside a browser environment.
* The browser provides APIs that Node.js does not provide by default.
* Examples are DOM, localStorage, Notifications, Geolocation and browser history.

## DOM

* JavaScript can inspect and change HTML through the DOM.
* Real application example:
  * Add/remove education fields in my application form.
  * Update application status in the admin dashboard.
  * Display API results in a table.

## Events

* Events represent things happening in the browser.
* Examples:
  * `click`
  * `input`
  * `submit`
  * `change`
  * `keydown`
  * `scroll`
* I register listeners to respond to these events.

```js
form.addEventListener("submit", submitApplication);
```

* Real application example:
  * When the applicant submits the form, the submit event runs validation, collects data and sends it to the backend.

## Rendering

* Rendering is how the browser converts HTML/CSS and visual changes into what I see.
* A JavaScript change can cause style recalculation, layout and painting.
* If I repeatedly make expensive DOM changes, the browser may have more rendering work.
* Real application example:
  * Updating a 5,000-row table one row at a time can be expensive.
  * I can reduce unnecessary DOM work by creating the needed content efficiently.

## Storage

* Browser applications can store data using localStorage, sessionStorage, IndexedDB and cookies, depending on the requirement.
* Each has different behavior and security characteristics.
* Real application example:
  * Small non-sensitive form preferences -> localStorage.
  * Larger structured client-side data -> IndexedDB.
  * Server-managed authentication/session state -> often cookies depending on architecture.

## History API

* The History API lets JavaScript change browser history and URLs without necessarily performing a full page reload.
* `pushState()` adds a history entry.
* `replaceState()` changes the current history entry.
* `popstate` fires when the active history entry changes through browser navigation.

```js
history.pushState(
    { applicantId: 42 },
    "",
    "/applications/42"
);
```

* Real application example:
  * In an admin SPA, clicking an applicant can change the URL to `/applications/42` and display the details without reloading the entire page.

## Media API

* Browser media APIs allow applications to work with audio, video, cameras and microphones.
* `getUserMedia()` can request camera or microphone access.
* Real application example:
  * A video interview platform can request camera and microphone permission and stream the media to the application.
* Permissions and privacy are important.

# 41. JavaScript in Node.js

* Node.js lets me run JavaScript outside the browser.
* It is commonly used for APIs, backend services, command-line tools and server-side applications.
* Node.js provides APIs that are different from browser APIs.

## Modules

* Modules let me split code into separate files.
* With ES modules:

```js
export function calculateTotal(amount) {
    return amount;
}
```

```js
import { calculateTotal } from "./expense.js";
```

* Real application example:
  * My Express backend can have:
    * routes
    * controllers
    * services
    * models
    * utilities
  * Each module has a focused responsibility.

## Filesystem

* Node provides filesystem APIs.
* I can read and write files.

```js
import { readFile } from "node:fs/promises";

const data = await readFile("./data.json", "utf8");
```

* Real application example:
  * A backend might temporarily process uploaded documents or read configuration files.
  * File paths from users must never be blindly trusted.

## HTTP

* Node can create HTTP servers and handle HTTP requests.
* Express provides a higher-level framework over Node's HTTP functionality.

```js
app.get("/applications", async (req, res) => {
    res.json(applications);
});
```

* Real application example:
  * My job application frontend can call `GET /applications`.
  * Node/Express receives the request.
  * The backend reads application data.
  * It returns JSON.
  * The browser receives the response and updates the DOM.

## npm packages

* Node projects can install external packages.
* Examples include Express, Mongoose and testing tools.
* Real application example:
  * My college management backend can use Express for routing and Mongoose for MongoDB interaction.
* Third-party packages should be reviewed because they become part of the application's dependency chain.

## process object

* Node provides the global `process` object.
* It gives access to environment variables, command-line arguments and process information.

```js
const port = process.env.PORT || 3000;
```

* Real application example:
  * I can keep the MongoDB connection string in an environment variable instead of hardcoding it in the source code.
* Secrets should not be committed to Git.

# 42. WebSockets

* WebSockets create a persistent two-way communication channel between the browser and server.
* Normal HTTP commonly follows a request -> response pattern.
* WebSocket allows the server to send data to the client when an event occurs without waiting for a new request from the client.

## Why I use WebSockets

* Useful for:
  * Chat.
  * Live notifications.
  * Live dashboards.
  * Collaborative editing.
  * Real-time status.
  * Live tracking.
* It is unnecessary for normal pages where occasional HTTP requests are enough.

## How WebSocket works

* The browser initially contacts the server.
* A WebSocket handshake establishes the connection.
* After the connection is established, both sides can send messages.
* The connection remains open until it is closed.

## Real application example

* Imagine my expense approval system has an admin dashboard.
* Admin A approves an expense.
* Without WebSocket:
  * Admin B's browser may need to request the latest data again.
  * Polling every few seconds can create unnecessary requests.
* With WebSocket:
  * Server processes the approval.
  * Server emits an event.
  * Admin B's connected browser receives the event.
  * JavaScript updates the status immediately.

## Important things to handle

* Connection failure.
* Reconnection.
* Authentication/authorization.
* Message validation.
* Server resource usage.
* Proper connection cleanup.

## Socket.IO

* Socket.IO is a library that provides event-based real-time communication and features such as reconnection handling.
* It is not simply the same thing as the native WebSocket API.
* It provides its own client/server protocol and can use different transports.

## Real Socket.IO example

* Server:

```js
io.emit("applicationUpdated", {
    id: 42,
    status: "Approved"
});
```

* Client:

```js
socket.on("applicationUpdated", (application) => {
    updateApplicationRow(application);
});
```

* Real application flow:
  * Admin approves application 42.
  * Backend updates database.
  * Backend emits `applicationUpdated`.
  * Connected admin browsers receive it.
  * Frontend updates the matching row.

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

