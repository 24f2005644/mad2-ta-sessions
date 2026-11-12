
// console.log(var1); // ReferenceError: Cannot access 'var1' before initialization
// let var1 = 10;



// var1 = 20; // assignment
// let var1 = 20; // declaration
// console.log(var1);


//const
// console.log(var1); // ReferenceError: Cannot access 'var2' before initialization
// const var2 = 'vinay';

// var2 = 'kumar'; // TypeError: Assignment to constant variable.

// console.log(var2)

// const obj = {
//     name: 'vinay',
//     age: 25
// }
// // obj = {} // not allowed
// console.log(obj);


// obj.name = 'kumar';

// obj.addr = "bangalore";
// console.log(obj);



//var
// console.log(var3); // undefined
// var var3 = 30;

// var var3 = 40;
// var3 = 50;

// // assignment
// console.log(var3); // 40


// test();

// function test() {
//     // console.log(var4); // ReferenceError: Cannot access 'var4' before initialization
//     let var4 = 100;
//     console.log(var4); // 100
// }

// func()
// var func = function test() {
//     // console.log(var4); // ReferenceError: Cannot access 'var4' before initialization
//     let var4 = 100;
//     console.log(var4); // 100
// }


{
    // let var5 = 100; // block scope
    // const  var6 = 200;

    // var var7 = 300;
}

// console.log(var7); // ReferenceError: var5 is not defined




// !true           // false
// true && false   // false


// true || false || true  // true


// console.log('5'+5)
// console.log('5'-5)
// console.log('5'*5)


// array

const fruits = ["apple", "banana", "cherry"];

// fruits[1] = "blueberry"; // Update the second element



fruits.push("date"); // Add a new element at the end

fruits.pop(); // Remove the last element

// const newfruit = fruits.map((fruit, index) => {
//     fruit = fruit.toUpperCase();
//     return fruit;
// })

// console.log(newfruit); // ["APPLE", "BANANA", "CHERRY"]

// const filtereedfru = fruits.filter((fruit) => {
//     return fruit.length > 5;
// })

// console.log(filtereedfru); // ["banana", "cherry"]

// reducedfru = fruits.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue.length;
// }, 0)


// console.log(reducedfru); // 17




// let obj1 = {
//     name: 'vinay',
//     age: 25,
//     key: this,
//     fnc1: function() {
//         console.log(this); // obj1.name

//         return function() {
//             console.log(this);
//         }
//     }
// }

// // obj1.fnc1();
// const func2 = obj1.fnc1();

// func2(); // window.func2

// console.log(obj1.key); // undefined

// obj1.address = 'bangalore';


// console.log(this);


// var age = 30;
// let age = 30;


// let obj1 = {
//     name: 'vinay',
//     age: 25,

//     fnc1: function() {
//         // console.log(this); // obj1
//         return () => {
//             console.log(this.age);
//         }
//     }
// }

// console.log(obj1.key)

// const func2 = obj1.fnc1();

// func2();

// in case of normal function always look at who is calling it.
// in case of arrow function always look at sarrounding.

// var var1 = 25;
// var var2 = 35;
// const obj = {
//     var1: 45,
//     var2: 55,
//     func1: function () {
//         console.log(`You are accessing: ${var1}`)
//     },
//     func2: () => {
//         console.log(`You are accessing: ${this.var2}`)
//     },
// }
// obj.func1()
// obj.func2()


// const globalvar = 50;

// const object1 = {
//     globalvar: 100,
//     method1: function () {
//         console.log(globalvar, this.globalvar);
//         return () => {
//             console.log(globalvar, this.globalvar);
//         }
//     }
// }
// const object2 = {
//     globalvar: 200,

//     method2: () => {
//         console.log(globalvar, this.globalvar);
//         return function () {
//             console.log(globalvar, this.globalvar);
//         }
//     }
// }


// const fn1 = object1.method1();
// fn1();
// const fn2 = object2.method2();



// fn2.apply(object1, ['arg1', 'arg2']);
// fn2.call(object1, 'arg1', 'arg2');
// fn2.bind(object1, 'arg1', 'arg2')();





// normal funct   this -> who is calling it
// arrow funct   this -> surrounding context



// a = [1,2,3,4,5,6,7,8,9,10];


// result = a.reduce((acc, current) => {

//     return acc + current;
// }, 10)



