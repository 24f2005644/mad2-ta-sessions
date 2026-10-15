// import {add, multiply} from './script1.js';
// import sub from './script1.js';



// console.log(add(2, 3)); // returns 5
// console.log(multiply(2, 3)); // returns 6
// console.log(sub(2, 3)); // returns -1



// hoisting;

// console.log(a);
// var a = 10;

// // console.log(b);
// let b = 20;

// // const

// test();

// function test() {
//     console.log("hello");
// }


// let fun = () => {
//     console.log("arrow function");
// }


// this keyword


// const obj = {
//     name: "Vinay",
//     age: 25,
//     greet: function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// // obj.greet();
// let hello = obj.greet

// hello(); //

// in case normal functiion this points to the object that called the function


// const obj = {
//     name: "Vinay",
//     age: 25,
//     test: this,
//     greet: function() {
//         console.log(this);
//     }
// }


// obj.greet();

// console.log(obj.test);

// var naam = "Vinay";


// const obj = {
//     naam: "Vinay",
//     age: 25,
//     greet: () =>{
//         console.log(`Hello, my name is ${this.naam} and I am ${this.age} years old.`);
//     }
// }


// obj.greet();




// const obj = {
//     naam: "Vinay",
//     age: 25,
//     greet:function () {

//         // this --> obj
//         let hello =() =>{
//         console.log(`Hello, my name is ${this.naam} and I am ${this.age} years old.`);
//     }
//     hello();

//     }
// }



// obj.greet();

// const obj = {
//     naam: "Vinay",
//     age: 25,
//     greet: () => {


//         function hello(){
//         console.log(`Hello, my name is ${this.naam} and I am ${this.age} years old.`);
//     }
//     hello();

//     }
// }

// obj.greet();


// in case of arrow function it takes the this value from the surrounding lexical scope, which is the global scope in this case. Therefore, this.naam and this.age are undefined.





// call, apply, bind

// const obj = {
//     name: "Vinay",
//     age: 25,
//     greet: function(param1, param2) {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. param1: ${param1}, param2: ${param2}`);
//     }
// }




// let obj1 = {
//     name: "John",
//     age: 30
// }

// obj.greet();

// obj.greet.call(obj1, 1,2,3);
// obj.greet.apply(obj1, [1,2,3]);

// // let boundGreet = obj.greet.bind(obj1,1);
// // boundGreet(2);
// obj.greet.bind(obj1,1)(2)

// const obj = {
//     name: "Vinay",
//     age: 25,
//     greet: (param1, param2) => {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. param1: ${param1}, param2: ${param2}`);
//     }
// }

// let obj1 = {
//     name: "John",
//     age: 30
// }

// obj.greet.call(obj1, 1,2,3);
// obj.greet.apply(obj1, [1,2,3]);

// call apply and bind will not change the context of this in case of arrow function.


// callstack and event loop

// function first() {
//     console.log("First function");
//     second();
//     console.log("First function end");
// }



// function second() {
//     console.log("Second function");
//     third();
//     console.log("Second function end");
// }


// function third() {
//     console.log("Third function");
//     four();
//     console.log("Third function end");
// }

// function four() {
//     console.log("Fourth function");

// }

// first();


// setTimeout and setInterval
// console.log("This will be executed immediately");

// setTimeout(() => {
//     console.log("This will be executed after 2 seconds");
// }, 2000);


// console.log("end of the script");


// console.log("This will be executed immediately");

// setTimeout(() => {
//     console.log("This will be executed after 2 seconds");
// }, 0);


// console.log("end of the script");

// count = 0;
// let intervalId = setInterval(() => {
//     count++;
//     console.log("This will be executed every 2 seconds", count);
// }, 2000);

// clearInterval(intervalId); // stops the interval after 10 seconds



class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

}



class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying in grade ${this.grade}.`);
    }
    greet() {
        console.log(`Hello, I am ${this.name}, a student in grade ${this.grade}.`);
    }
}

const person1 = new Person("Alice", 30);
// const person2 = new Person("Bob", 25);
// const student1 = new Student("Charlie", 20, "A");
// // person1.greet();
// student1.greet();
// student1.study();




// const obj = {
//     name: "Vinay",
//     age: 25,
//     greet: (param1, param2) => {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. param1: ${param1}, param2: ${param2}`);
//     }
// }

// jsonString = JSON.stringify(obj);
// parseJson = JSON.parse(jsonString);
// console.log(typeof jsonString);



// '{
//     "name": "Alice",
//     "age": 30,
//     "city": "New York",
//     "array": [1, 2, 3, 4, 5],
//     "nestedObject": {
//         "key1": "value1",
//         "key2": "value2"
//     }
// }'




let a = [1,2,3,4,5];

// let b= a.map((item, index, array) => {
//     // return String(item);
//     return item * item;
// }, );

// console.log(b);

// let c = a.filter((item, index, array) => {
//     return item % 2 === 0;
// });
// console.log(c);

// let d = a.reduce((accumulator, currentValue, index, array) => {
//     return accumulator + currentValue;
// }, 0);

// console.log(d);



// let e = a.find((item, index, array) => {
//     return item === 10;
// });
// console.log(e);








