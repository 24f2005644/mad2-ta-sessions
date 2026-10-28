// // q1.


// let var1 = 20;
// var var2 = 30;
// const val = 10;

// {
//     let var1 = 40;
//     console.log(var1 + val); 
// }

// console.log(var1 + val);

// {
//     var var2 = 50;
//     console.log(var2 + val);
// }

// console.log(var2 + val);
// 50 30 60 60

// // q2.

// let x = 2;
// function op(x) {
//     x *= 3;
//     x += 4;
//     x -= 1;
//     return x
// }
// console.log(op(x));
// console.log(op(x));
// console.log(x);

// q3.
// let x = 5;
// (function () {
//     let x= 10;
//     console.log(x);
//     // let x = 10;
// })();

// q4
// const obj1 = {
//     prop1: "Germany",
//     prop2: "Spain",
//     prop3: 50,
//     method1: function(){
//         console.log(`The European countries are ${this.prop2} and ${this.prop1}.`)
//     },
//     method2: function(param){
//         let value = param + 2*this.prop3;
//         console.log(`The final numerical value is: ${value}.`)
//     }
// }

// const obj2 = {
//     prop1: "England",
//     prop2: "Italy",
//     prop3: "25"
// }

// const func1 = obj1.method1;
// const func2 = obj1.method2;

// func1.apply(obj1);
// func2.bind(obj2)(15);
// func2.call(obj1,15);


// q5 

// Which of the following Vue directives are correctly matched with their purpose?

// Options :

// v-show → fetching api

// v-for → Iteration over lists

// v-bind → Conditional rendering

// v-model → Event handling only

// q6 
// console.log("1")

// setTimeout(() => {
//     console.log("3")
//     setTimeout(() => console.log("2"), 0)
    
// }, 0)

// console.log("4")


// q7. 

// Consider running the following in the browser console:

// console.log(typeof setTimeout);
// console.log(typeof document);











// Which statements are correct?
// Options:
// - The first line prints "function".

// - The second line prints "object".

// - document works in a browser because V8 provides the DOM.

// - Different runtimes can provide different APIs even when they use the same JS engine.





// q11.

// const obj1 = { prop1: "Aluminium", prop2: "Gold", prop3: "Silver" };
// // { prop1: "Aluminium", prop2: "Gold", prop3: "Silver",propA: "Argon", propB: "Neon"}
// const obj2 = { propA: "Argon", propB: "Neon" };

// const { prop2: element1, propA: element2 } = { ...obj2, ...obj1 };

// console.log(`The selected elements are: ${element1} and ${element2}`);

// Options:
// - Gold and Argon

// - Aluminium and Silver

// - Argon and Neon

// - Gold and Neon

// - Argon and Gold






// class MathUtils {
//     add(a, b) { return a + b; }
//     multiply(a, b) { return a * b; }
// }
// const utils = new MathUtils();


// console.log(utils.add(5, 3)); 8

// // console.log(utils.add(5, 3));           
// console.log(utils.multiply(5, 3)); 
// console.log(utils.multiply(5, 3)); 


// 881515


// // Which calls work correctly, and what do they return?

// console.log(MathUtils.add(5, 3));   // returns 8

// console.log(utils.add(5, 3));           // add is static, so this is not a valid call
// console.log(utils.multiply(5, 3));      // returns 15

// console.log(MathUtils.multiply(5, 3));  // multiply is an instance method




// var var1 = 25;
// var var2 = 35;
// const obj = {
//     var1: 45,
//     var2: 55,
//     func1: function () {
//         console.log(`You are accessing: ${this.var1}`);
//     },
//     func2: () => {
//         console.log(`You are accessing: ${this.var2}`);
//     }
// };
// obj.func1();

// obj.func2();
// 
// What is printed in a browser console?

// Options:
// - 45, then 55

// - 25, then 35

// - 25, then 55

// - 45, then 35


// q11

// console.log(z);
// var a = "alpha";
// console.log(a);
// let b = "beta";
// console.log(b);
// d();
// console.log(c);
// const c = "charlie";
// function d() { console.log("delta"); }
// var z = function () { console.log("zeta"); };


// What is printed before the error?
// Options:
// - undefined, alpha, beta, delta, Reference Error
// - zeta, undefined, beta, delta, Reference Error
// - undefined, Reference Error, beta, charlie, undefined
// - zeta, Reference Error, beta, charlie, undefined


// q13

// function first() {
//     console.log("First start");
//     setTimeout(function () { console.log("First timeout"); }, 0);
//     console.log("First end");
// }
// function second() {
//     console.log("Second start");
//     // setTimeout(function () { console.log("Second timeout"); }, 0);
// }
// console.log("Program start");
// first();
// second();
// console.log("Program end");


