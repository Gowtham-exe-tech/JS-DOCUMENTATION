const name = "Gowtham";
const message = 'Hello World';
const greeting = `Hello ${name}`;
const text = "JavaScript";

console.log(text.length);
console.log(text[0]);
console.log(text[text.length - 1]); // last charc


console.log(text.toUpperCase());
console.log(text.toLowerCase());


const userName = "   Gowtham   ";
console.log(userName.trim());


const email = "gowtham@gmail.com";
console.log(email.includes("@"));
console.log(email.includes("gmail"));


const file = "resume.pdf";
console.log(file.startsWith("resume"));
console.log(file.endsWith(".pdf"));



const sentence = "JavaScript is powerful";
console.log(sentence.indexOf("Script"));
console.log(sentence.indexOf("Python"));



const language = "JavaScript";
console.log(language.slice(0, 4));
console.log(language.slice(4));
console.log(language.slice(-6));
console.log(language.substring(0, 4));



const message1 = "Hello Gowtham";
console.log(message1.replace("Gowtham", "Developer"));
 

const data = "apple apple apple";
console.log(data.replaceAll("apple", "orange"));


const fruits = "apple,banana,mango";
const fruitArray = fruits.split(",");
console.log(fruitArray);


const names = ["Gowtham", "Arun", "Priya"];
console.log(names.join(", "));


const firstName = "Gowtham";
const lastName = "G";
console.log(firstName.concat(" ", lastName));


const user = "Gowtham";
const age = 21;
const info = `My name is ${user} and I am ${age} years old.`;
console.log(info);


const quote = "He said \"Hello\"";
const path = "C:\\Users\\Gowtham";
console.log(quote);
console.log(path);

// Login example
const inputEmail = "  GOWTHAM@GMAIL.COM  ";
const cleanEmail = inputEmail.trim().toLowerCase();

if (cleanEmail.endsWith("@gmail.com")) {
    console.log("Valid Gmail address");
}


//search example
const productName = "Dell Inspiron Laptop";
const search = "laptop";

if (productName.toLowerCase().includes(search.toLowerCase())) {
    console.log("Product found");
}


//define username
const fullName = "Gowtham G";
const username = fullName
    .trim()
    .toLowerCase()
    .replaceAll(" ", "_");
console.log(username);