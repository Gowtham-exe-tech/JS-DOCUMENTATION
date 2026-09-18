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

###Default parameter

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
function calculateTotal(...amounts) {
    let total = 0;

    for (const amount of amounts) {
        total += amount;
    }
    return total;
}
console.log(calculateTotal(100, 200, 300));
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

* Arrays are used to store multiple values in a single variable.

* They are commonly used when we have a collection of related data such as users, products, orders, expenses, students etc.

## Creating an Array

* An array can contain multiple values and the values can be accessed using their index.

```js
const products = ["Laptop", "Mouse", "Keyboard"];

console.log(products);
```

* Arrays are zero-indexed, so the first value starts from index `0`.
* An array can contain different data types, but in real applications it is usually better to keep related data in a consistent structure.

## Indexing

* It is used to access or change a particular value in an array.

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

* Useful when we know the position of the value we want to access.
* `array.length` gives the number of elements in the array.

## `push()`

* Adds one or more elements to the end of an array.

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

Eg: Removing a cancelled order from an order list

```js
const orders = ["ORD101", "ORD102", "ORD103"];
orders.splice(1, 1);
console.log(orders);
```
Here:
- `1` → start from index 1
- `1` → remove one element

Ex: Replace a product

```js
const products = ["Laptop", "Mouse", "Keyboard"];

products.splice(1, 1, "Wireless Mouse");
console.log(products);
```

* `splice()` modifies the original array.
* Useful when we need to change the array at a specific position.

## `slice()`
* It creates a new array containing a portion of the original array.

```js
const orders = ["ORD101", "ORD102", "ORD103", "ORD104"];

const recentOrders = orders.slice(2);
console.log(recentOrders);
```

`slice()` does not change the original array.

Eg:

```js
const orders = ["ORD101", "ORD102", "ORD103", "ORD104"];

const selectedOrders = orders.slice(1, 3);
console.log(selectedOrders);
```

This gets the elements from index `1` up to, but not including, index `3`.

* `slice()` → creates a new portion of an array.
* `splice()` → changes the original array.

## `map()`

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

## `filter()`

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

## `reduce()`

* It is used when we want to combine all array elements into a single result.

Ex: Calculating total order amount
```js
const orders = [
    { id: 101, amount: 500 },
    { id: 102, amount: 1500 },
    { id: 103, amount: 800 }
];

const total = orders.reduce((sum, order) => {
    return sum + order.amount;
}, 0);
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
console.log(user.email);
```

* Properties can also be accessed using bracket notation.

```js
console.log(user["name"]);
```

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

## Methods

* A method is a function stored as a property of an object.

Ex:

```js
const user = {
    name: "Gowtham",

    login() {
        console.log(`${this.name} logged in`);
    }
};

user.login();
```

Here `login()` is a method of the `user` object.

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

## Destructuring

* Destructuring is used to extract values from objects or arrays into variables.

Ex:

```js
const user = {
    name: "Gowtham",
    email: "gowtham@example.com",
    role: "Developer"
};

const { name, email } = user;

console.log(name);
console.log(email);
```

Instead of:

```js
const name = user.name;
const email = user.email;
```


* Destructuring is very common when working with API responses and function parameters.

Ex:

```js
function displayUser({ name, email }) {
    console.log(name);
    console.log(email);
}

displayUser(user);
```

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

* Examples include names, emails, messages, product names, addresses etc.

```js
const userName = "Gowtham";
const email = "gowtham@example.com";
```

## String Length

* `length` returns the number of characters in a string.

```js
const password = "secret123";
console.log(password.length);
```

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

`trim()` → removes whitespace from beginning and end

`toUpperCase()` → converts to uppercase

`toLowerCase()` → converts to lowercase

`includes()` → checks whether text exists

`startsWith()` → checks beginning

`endsWith()` → checks ending

`replace()` → replaces matching text

`split()` → converts a string into an array

 * Example: Checking an email domain

```js
const email = "user@gmail.com";

if (email.endsWith("@gmail.com")) {
    console.log("Gmail account");
}
```

* Example: Searching a product

```js
const productName = "Wireless Keyboard";

if (productName.toLowerCase().includes("keyboard")) {
    console.log("Keyboard product found");
}
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

- `\n` → new line

- `\t` → tab

- `\\` → backslash

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
const quantity = "5";
const parsedQuantity = parseInt(quantity, 10);
console.log(parsedQuantity);
```

* The `10` specifies that the number should be interpreted as decimal.

* Useful when receiving integer values as strings from forms, URLs or APIs.

## `parseFloat()`

* converts a value into a number that can contain decimal values.

Ex:
```js
const price = "1499.50";
const numericPrice = parseFloat(price);
console.log(numericPrice);
```

* Useful for prices, measurements, percentages etc.

## `toFixed()`

* Formats a number to a specific number of decimal places.

Ex: Displaying an invoice amount

```js
const amount = 1499.567;
console.log(amount.toFixed(2));
```

Result:

`1499.57`

* Note: `toFixed()` returns a string.

```js
const amount = 1499.567;
const formattedAmount = amount.toFixed(2);
console.log(typeof formattedAmount); // string
```

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

* JavaScript uses the `Date` object to work with dates and times.

* Dates are commonly used for order dates, payment dates, login times, deadlines, created dates etc.

## Creating a Date

```js
const currentDate = new Date();
console.log(currentDate);
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

Common methods:

`getFullYear()` → gets year

`getMonth()` → gets month

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

```js
const orderDate = new Date();
console.log(orderDate.toLocaleDateString());
```

Example:
```js
const orderDate = new Date();

console.log(
    orderDate.toLocaleDateString("en-IN")
);
```

* Useful when displaying dates to users.
* The exact output depends on the locale.

## Timestamps

* represents a date/time as the number of milliseconds since January 1, 1970 UTC.

```js
const timestamp = Date.now();

console.log(timestamp);
```

Ex: Measuring how long an operation takes

```js
const startTime = Date.now();

// some operation

const endTime = Date.now();

console.log(`Operation took ${endTime - startTime} ms`);
```

* Timestamps are useful for comparing dates and measuring elapsed time.
* APIs and databases commonly store dates in standardized formats or timestamps.

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
