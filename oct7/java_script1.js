// JavaScript 
// 1. What is JavaScript?

// JavaScript (JS) is a programming language mainly used to make web pages interactive and dynamic.


// A simple JavaScript statement:

console.log("Hello JavaScript"); 


// 2. Comments in JavaScript



// 2.1 Single-line comment

// Use //.

// // This is a comment

// let age = 20; // This stores the age

// Everything after // on that line is ignored.

// 2.2 Multi-line comment

// Use /* ... */.

// /*
//    This is a
//    multi-line
//    comment
// */

// let marks = 90;
// 3. JavaScript Code Structure

// JavaScript statements can be written on separate lines:

// console.log("Hello");
// console.log("World");

// Semicolons are generally used to terminate statements:

// let x = 10;
// let y = 20;
// console.log(x + y);

// JavaScript can also execute multiple statements on one line:

// let x = 10; let y = 20; console.log(x + y);



// 4. Variables

// A variable is a named storage location for a value.

// JavaScript provides three main ways to declare variables:

// let
// const
// var
// 4.1 let

// Use let when the value of a variable may change.

// let score = 50;

// console.log(score);

// score = 75;

// console.log(score);

// let → value can be reassigned.

// 4.2 const

// Use const when the variable should not be reassigned.

// const pi = 3.14159;

// console.log(pi);

// // // This is not allowed:

// const pi = 3.14159;
// const x = 1;
// x =2
// // pi = 4;   // Error
// // Important

// const means that the variable binding cannot be reassigned.

// For objects, however, the object's internal properties can still be changed.

// const student = {
//     name: "Priya",
//     age: 20,
       
// };

// student.age = 21;   // Allowed

// But:

// student = {
// };       // Error

// So remember:

// const → variable cannot be reassigned

// It does not necessarily mean the object itself is completely immutable.

// 5. var

// var is the older way of declaring variables.

// var message = "Hello";

// console.log(message);

// message = "Good morning";

// console.log(message);

// var allows reassignment.

// However, var behaves differently from let and const, especially with scope.

// For modern JavaScript:

// Prefer let and const over var.

// 6. Variable Naming


// JavaScript variable names are case-sensitive.

// let age = 20;
// let Age = 30;

// console.log(age);  // 20
// console.log(Age);  // 30

// These are two different variables.

// Common naming style

// JavaScript commonly uses camelCase:

// let studentName = "Rahul";
// let studentCon = "Rahul";
// let totalMarks = 450;
// let isStudent = true; --> if writing compond name the smallleter large etter
// 7. Data Types

// JavaScript data types can broadly be divided into:

// Primitive
// Non-Primitive
// 8. Primitive Data Types

// The important primitive types in your notes are:

// Number
// BigInt
// String
// Boolean
// null
// undefined
// Symbol
// 8.1 Number

// Used for integers and floating-point numbers.

// let age = 21;
// let price = 99.50;
// let temperature = -5;

// console.log(age);
// console.log(price);
// console.log(temperature)


// Both integers and decimal values are Number.

// typeof 25;       // "number"
// typeof 25.5;     // "number"
// 9. BigInt

// BigInt is used for very large integer values that cannot safely be represented by the normal Number type.

// Use n at the end:

// let population = 9007199254740993n;

// Notice:

// 100

// is a Number, whereas:

// 100n

// is a BigInt.

// 10. String

// A string represents text.

// Strings can be written using:

// "Hello"
// 'Hello'



// let name = "Priya";
// let city = 'Delhi';

// console.log(name);
// console.log(city);

// Numbers inside quotes are strings:

// let value = "123";

// Here "123" is a String, not a Number.

// You can convert it:

// console.log(Number("123"));

// Output:

// 123
// 11. Boolean

// Boolean has only two values:

// true
// false

// Example:

// let isLoggedIn = true;

// console.log(isLoggedIn);

// isLoggedIn = false;

// Boolean values are commonly used in conditions.

// let isAdult = true;

// if (isAdult) {
//     console.log("Allowed");
// }
// 12. null

// null represents an intentionally empty or absent value.

// let selectedUser = null;

// console.log(selectedUser);

// It basically means:
// let z;

// "There is currently no value."

// Your notes compare this conceptually with None in Python.

// 13. undefined

// undefined generally means that a variable has been declared but has not been given a value.
// let x;
// console.log(x);
// let result;
// let x= null;
// x = 10;
// console.log(x)
// console.log(result);-->undefined

// You can also explicitly assign undefined:

// let value = undefined;
// 14. Symbol

// 15. Non-Primitive Data Types
// String
// let str = "Hello";

// console.log(str.length);
// let z;
// // z = 10;
// console.log(z);

// String Template
// let name = "Ram";
// console.log(`Hello ${name}`);




// substring

// string.substring(start, end,)
let str = "JavaScript";

console.log(str.substring(0, 4));

// J-0
// a-1
// v-2
// a-3



// Object -- dict

// Objects can store multiple related values.

// const student = {
//     name: "Aman",
//     age: 21,
//     marks: 85
// };

// // Access properties using:

// console.log(student.name);
// console.log(student.marks);
// 16. Operators and Comparisons

// JavaScript provides comparison operators such as:

// ==
// ===
// <
// >
// <=
// >=
// 1. Operators & Type Coercion
// console.log(3 + 4);       // Prints: 7
// console.log('3' + '4');   // Prints: "34"
// console.log('3' + 4);     // Prints: "34" (Converts the number into a string)
// console.log('3' * '4');   // Prints: 12   (Converts both strings into numbers)

// 2. Inequality / Loose Equality (==)
// console.log(3 == 4);      // Prints: false
// console.log(3 == 3);      // Prints: true
// console.log('3' == 3);    // Prints: true  (Type coercion forces '3' to become the number 3)
// important *), whenever you use loose equality (==) to compare a String and a Number, the string is always converted into a number.
// 3. Strict Equal (===) — Most Preferable
// console.log('3' === '3');        // Prints: false (Different types: string vs number)
// console.log(undefined == null);  // Prints: true  (Loose equality treats them as structural empty values)
// console.log(undefined === null); // Prints: false (Strict equality recognizes they are different types)
// // 16.1 ==
// let x = undefined;
// let y = null;

// true 

// == checks equality after possible type conversion.

// 17. Strict Equality ===

// === checks both:
// Value
// Type

// Prefer === when you want strict equality.
// loose ineq - values ==
// strict - values+datatype ====

// 18. Lexicographical Comparison

// Strings can be compared lexicographically.

// console.log("cat" < "dog");

// // This compares characters according to their ordering.

// // Another example:

// console.log("apple" < "appple");
// a = a
// p =p
// p = p

// Output:

// true
// 20. Truthy and Falsy Values

// JavaScript values can behave as either truthy or falsy when used in a condition.

// Common falsy values
// false
// 0
// ""
// null
// undefined
// NaN - none


// Example:

// let name = "";

// if (name) {
//     console.log("Name exists");
// } else {
//     console.log("Name is empty");
// }

// Output:

// Name is empty

// Many other values are truthy, such as:

// "hello"
// 42
// -10
// []
// {}
// true
// 21. Conditional Statements

// Conditional statements allow us to execute code depending on a condition.

// if-else
// let marks = 15;

// if (marks >= 40) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }

// Output:

// Pass
// if - else if - else
// let marks = 82;

// if (marks >= 90) {
//     console.log("A+");
// } else if (marks >= 75) {
//     console.log("A");
// } else if (marks >= 60) {
//     console.log("B");
// } else {
//     console.log("C");
// }
// 22. Scope

// Scope determines where a variable can be accessed.

// Block Scope

// let and const are block-scoped.
// let x = 100;
// const y = 50;
// {
//     x = 10;
//     const y = 20;

//     console.log(x);
//     console.log(y);
// }
// console.log(x);
// console.log(y);
// let,var -- reassign
// const - reassign not allow
// let x= 10;
// x = 100;
// console.log(x);

// var x = 100;
// var x = 10;
// outside block - var variable
// outside - let , const

// Outside the block:

// console.log(x); // Error
// console.log(y); // Error

// A block can be:

// {
//     // block
// }

// or associated with:

// if (...) {
//     // block
// }

// or:
// let a = 1;
// {
//     a = 2;
//     console.log(a);
// }
// console.log(2);

// for (...) {
//     // block
// }
// var and Block Scope

// var does not have the same block scope behavior.

// var x = 10;

// {
//     var y = 20;
// }

// console.log(y);

// This is one reason let and const are generally preferred.

// 23. Loops

// for loop

// Basic structure:

// for (initialization; condition; update) {
//     // code
// }

// Example:

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// console.log(i);

// for (var i = 0; i < 3; i++) {
//     console.log(i);
// }

// console.log(i); --> 3

// for (const i = 0; i < 5; i=i+2) {
//     console.log(i);
// }
// const i = 0
//   i = i+1  
// i++ -- error



// 24. Functions


// 25.1 Conventional / Named Function
// function multiply(a, b) {
//     return a * b;
// }
// function multiply(a,b){
//     return a *b;
// }

// // // Call it:

// let result = multiply(5, 4);

// console.log(result);

// Structure:

// function functionName(parameters) {
//     // statements
//     return value;
// }
// // 26. Function Parameters and Arguments
// function greet(name) {
//     console.log(typeof(name));
//     return  name + " Hello " ;
    
// }


// // Here:

// console.log(greet(1)); 


// 27.Function Expression

// const subtract = function(a, b) {
//     return a - b;
// };

// // // Call it:

// console.log(subtract(10, 4)); 

// The function itself has no name, so it is commonly called an anonymous function.

// 28. Arrow Function

// Arrow functions provide a shorter syntax.
// const add = (a,b) => {
//     a = a+1;
//     b = b+1
//     return a +b;
    
// }
// console.log(add(2,3))
// const multiply = (a, b) => a * b;

// Call:

// console.log(multiply(6, 7));-->42
// Arrow Function with {}

// If you use {}, you generally need return to return a value.

// const multiply = (a, b) => {
//     return a * b;
// };

// This:

// const multiply = (a, b) => a * b;

// is equivalent to:

// const multiply = (a, b) => {
//     return a * b;
// };
// 29. Single Parameter Arrow Function

// Parentheses can be omitted for a single parameter.

// const square = x => x * x;

// Instead of:

// const square = (x) => x * x;

// Both work.

// 30. Immediately Invoked Function Expression — IIFE

// A function can be created and immediately called.

// (function() {
//     console.log("Hello");
// })();

// The important idea is:

// create function → immediately execute it

// Arrow-function version:

// (() => {
//     console.log("Hello");
// })();


// ----------*-----------*



