

// let const var

// let and const are block scoped
// var is function scoped


// let a = 10;

// const b = 50;

// let a = 10;
// {
//    let a = 100;
// //    a = 200;
//     console.log(a)
// }

// console.log(a)
// console.log(b) // ReferenceError: a is not defined


// let - declare once assign many times
// const - declare once assign once



// let s = 10
// s = 20


// const c = 30;
//  // TypeError: Assignment to constant variable.



//  {
//     c = 40
//     console.log(c)
//  }



// function printValue() {
//     var v = 10;
//     console.log(v)
// }

// printValue()
// console.log(v)

// == vs ===

// == checks for value equality
// === checks for value and type equality

// console.log(10 == '10') // true


// console.log(10 === '10') // false

// console.log( Number("ten" + 10)) // inside "ten10"



// let user ;
// user = 70
// console.log(a) // null
// console.log(user) /
// / 70

// let a = 5

// let b= a++

// console.log(a)
// console.log(b)

// let a = 5

// let b= ++a

// console.log(a)
// console.log(b)


// let a = 5

// let b= --a

// console.log(a)
// console.log(b)


// let a = 5

// let b= 9.88




// console.log(typeof a)
// console.log(typeof b)


// console.log(9 -"20") // 9

// console.log(Boolean({})) // 0/

// if(9==0) {
//     console.log("true");
// }
// else if(9==9) {
//     console.log("false");
// };
// else{
//     console.log("false");
// }


// let key = prompt("Enter a number")

// switch(key) {
//     case "1":
//         console.log("one")
//         break;
//     case "2":
//         console.log("two")
//         break;
//     default:
//         console.log("not found")
// }


// function add(a, b) {
//     return a + b;
// }

// console.log(add(5, 10)); // 15


// const multiply = function(a, b) {
//     return a * b;
// }

// console.log(multiply(5, 10)); // 50



// let hello = (a, b) => {

//     return a - b;
// }


let hello = (a, b) => a - b;

console.log(hello(10, 5)); // 5



function printValue(fn) {
    fn();
}


function printHello() {
    console.log("Hello, World!");
}

printValue(printHello); // Output: Hello, World!
// let datestirng = "2022-03-25"
// let datestring2 = "2022-03-27"
// const d = new Date(datestirng);
// const d2 = new Date(datestring2);



// console.log(d2.getDate() - d.getDate()) // 2







