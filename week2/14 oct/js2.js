// // //  diff between null and undefined
// // undefined means a value has not been assigned or is missing.
// // let x;
// // console.log(x)
// // // here x is undefined
// // // null means we intentionally assign an empty value.
// // let y = null;
// // console.log(y);

// // undefined
// // A variable is declared but no value is assigned.

// // let apple;

// // console.log(apple);
// // console.log(typeof apple);


// // =====================
// // null
// // We intentionally assign an empty value.

// // let mango = null;

// // console.log(mango);
// // console.log(typeof mango);


// // // null
// // // object

// // // ============================================================
// // // 1. ARRAYS
// // // ============================================================

// // // An array is used to store multiple values in a single variable.

// // //  Creating an array

// // let fruits = ["apple", "banana", "mango"];

// // console.log(fruits);



// // //  Accessing array elements

// // let numbers = [10, 20, 30, 40];

// // console.log(numbers[0]);
// // console.log(numbers[1]);
// // console.log(numbers[3]);




// // // . 3 - Updating an array element

// // let colors = ["red", "blue", "green"];

// // colors[1] = "yellow";

// // console.log(colors);

// // // --:
// // // ["red", "yellow", "green"]


// // // . 4 - Array length

// // let subjects = ["JavaScript", "Python", "Java"];

// // console.log(subjects.length);

// // // --:
// // // 3



// // // ============================================================
// // // 2. ARRAY ITERATION
// // // ============================================================

// // // Iteration means accessing array elements one by one.


// // // . 1 - Using a normal for loop
// // 
// // let numbers1 = [10, 20, 30];

// // for (let i = 0; i < numbers1.length; i++) {
// //     console.log(numbers1[i]);
// // }



// // // . 2 - Using for...of
// // // of gives the array elements.

// let fruits1 = ["apple", "banana", "mango"];

// // for (let fruit of fruits1) {
// //     console.log(fruit);
// // }



// // // . 3 - Using for...in
// // // in gives the array indexes.

// // let colors1 = ["red", "blue", "green"];

// // for (let index in colors1) {
// //     console.log(index);
// //     console.log(colors1[index])
// // }




// // // --:
// // // 0
// // // 1
// // // 2


// // // ============================================================
// // // 3. map()
// // // ============================================================

// // // map() applies an operation to every array element.
// // // It returns a new array.
// // // The original array remains unchanged unless we reassign it.


// // // . 1 - Doubling every number

// // let numbers2 = [1, 2, 3, 4];

// // let doubledNumbers = numbers2.map((number) => number * 2);

// // console.log(doubledNumbers);




// // // Adding 5 to every number

// // let numbers3 = [10, 20, 30];

// // let updatedNumbers = numbers3.map((number) => number + 5);

// // console.log(updatedNumbers);




// // // Converting names to uppercase

// // let names = ["aman", "riya", "rahul"];

// // let upperNames = names.map((name) => name.toUpperCase());

// // console.log(upperNames);




// // //  Getting the length of each word

// // let words = ["cat", "apple", "ball"];

// // let wordLengths = words.map((word) => word.length);

// // console.log(wordLengths);



// // // ============================================================
// // // 4. filter()
// // // ============================================================

// // // filter() checks a condition for every element.
// // // It returns a new array containing only the elements
// // // that satisfy the condition.


// // // . 1 - Filtering even numbers

// // let numbers4 = [1, 2, 3, 4, 5, 6];

// // let evenNumbers = numbers4.filter((number) => number % 2 === 0);

// // console.log(evenNumbers);


// // //  Filtering odd numbers

// // let numbers5 = [1, 2, 3, 4, 5, 6];

// // let oddNumbers = numbers5.filter((number) => number % 2 !== 0);

// // console.log(oddNumbers);




// //  Finding numbers greater than 10

// // let numbers6 = [5, 12, 8, 20, 15];

// // let greaterNumbers = numbers6.filter((number) => number > 10);

// // console.log(greaterNumbers);

// // // --:
// // // [12, 20, 15]


// // // . 4 - Filtering long words


// // let words1 = ["cat", "elephant", "dog", "tiger"];

// // let longWords = words1.filter((word) => word.length > 3);

// // console.log(longWords);




// // // ============================================================
// // // 5. reduce()
// // // ============================================================

// // // reduce() combines array elements into a single result.
// // // It takes an accumulator and the current element.
// // // The initial value is provided after the callback.


// // // . 1 - Finding the sum of numbers

// // let numbers7 = [10, 20, 30, 40]; 
// // // // sum = 0
// // // // sum +10
// // // // sum+20
// // // // sum+30
// // let total = numbers7.reduce((sum, number) => sum + number, 0);

// // console.log(total);




// // // Finding the product of numbers

// // let numbers8 = [2, 3, 4];

// // 1*2 = 2
// // result =2
// // 2,3
// // 2*3 = 6
// // result = 6
// // 6,4
// // 6*4 = 24

// // let product = numbers8.reduce((result, number) => result * number, 1);

// // console.log(product);



// // //  Finding the total marks

// // let marks1 = [80, 70, 90];

// // let totalMarks = marks1.reduce((sum, mark) => sum + mark, 0);

// // console.log(totalMarks);

// // let words1 = ["cat", "elephant", "dog", "tiger"]

// // let newword = words1.reduce((a,word) => a+ " " + word,"cat  ")
// // let a = "apple"

// // console.log( a+ " "+ newword)

// // // . 4 - Counting array elements

// // let numbers9 = [5, 10, 15, 20];

// // let count = numbers9.reduce((total, number) => total+number + 1, 0);
// // // (0,5)
// // // total =0
// // // total+1 = 1
// // // (1,10)
// // // total +1 = 2
// // // (2,15)
// // // total+1 = 3
// // // (3,20)
// // // total+1 = 4
// // console.log(count);




// // // ============================================================
// // // 6. map() vs filter() vs reduce()
// // // ============================================================

// // // map()    - Transforms every element and returns a new array.
// // // filter() - Selects elements that satisfy a condition.
// // // reduce() - Combines elements into a single result.




// // // ============================================================
// // // 7. find() AND sort()
// // // ============================================================


// // //  find()
// // // Returns the first element that satisfies the condition.

// // let numbers13 = [10, 20, 30, 40];

// // let foundNumber = numbers13.find((number) => number > 20);

// // console.log(foundNumber);


// // //  sort()
// // // Sorts strings alphabetically. -- in ascii letter

// // let fruits2 = ["mango", "apple", "banana"];

// // fruits2.sort();

// // console.log(fruits2);



// // // . 3 - Sorting numbers in ascending order

// // let numbers14 = [40, 10, 30, 20];
// // // numbers14.sort() 
// // // console.log(numbers14)

// // // [10,40] 
// // // 10,30
// // // 30,40

// // numbers14.sort((a, b) => a - b);

// // console.log(numbers14);



// // // . 4 - Sorting numbers in descending order

// // let numbers15 = [40, 10, 30, 20];

// // numbers15.sort((a, b) => b - a);

// // Negative (a - b < 0)	Put a before b
// // Positive (a - b > 0)	Put b before a
// // Zero (a - b === 0)	Both numbers are equal


// // console.log(numbers15);

// // // PRACTICE

// // // Question 1:
// // // Create an array of numbers and use map() to multiply
// // // each number by 3.

// // // let numbers23 = [1, 2, 3, 4];
// // // Write your code here.

// // // --:
// // // [3, 6, 9, 12]


// // // Question 2:
// // // Use filter() to get numbers greater than 5.

// // // let numbers24 = [2, 6, 3, 8, 10];
// // // Write your code here.

// // // --:
// // // [6, 8, 10]


// // // Question 3:
// // // Use reduce() to find the multiply 10 acculmator 5 of all numbers.

// // // let numbers25 = [10, 20, 30];
// // // Write your code here.
// // // 60


// // // ============================================================
// // // 8. OBJECTS
// // // ============================================================

// // // An object stores information in key-value pairs.
// // // Keys are also called properties.


// // // Creating an object

// // let student = {
// //     name: "Aman",
// //     age: 20,
// //     course: "JavaScript"
// // };

// // console.log(student);



// // // Accessing object properties

// // let student1 = {
// //     name: "Riya",
// //     age: 19,
// //     city: "Delhi"
// // };

// // console.log(student1.name);
// // console.log(student1.age);
// // console.log(student1.city);



// // // . 3 - Accessing properties using square brackets

// // let student2 = {
// //     name: "Rahul",
// //     marks: 85
// // };

// // console.log(student2["name"]);
// // console.log(student2["marks"]);




// // // . 4 - Updating an object property

// // let student3 = {
// //     name: "Aman",
// //     age: 20
// // };

// // student3.age = 21;

// // console.log(student3.age);



// // //Adding a new property

// // let student4 = {
// //     name: "Riya"
// // };

// // student4.course = "JavaScript";

// // console.log(student4);

// // // --:
// // // { name: "Riya", course: "JavaScript" }



// // //   Object containing a function
// // // A function inside an object is called a method.

// // let student6 = {
// //     name: "Aman",

// //     greet: function() {
// //         console.log("Hello, Aman");
// //     }
// // };

// // student6.greet();



// // //- Using this in an object method
// // // this refers to the object when this method is called
// // // as student7.greet().

// // let student7 = {
// //     name: "Riya",

// //     greet: function() {
// //         console.log(`Hello, ${this.name}`);
// //     }
// // };

// // student7.greet();



// // // . 9 - Getting object keys

// // let student8 = {
// //     name: "Aman",
// //     age: 20,
// //     city: "Delhi"
// // };

// // console.log(Object.keys(student8));




// // // . 10 - Getting object values

// // let student9 = {
// //     name: "Aman",
// //     age: 20
// // };

// // console.log(Object.values(student9));




// // // Getting key-value pairs

// // let student10 = {
// //     name: "Riya",
// //     age: 19
// // };

// // console.log(Object.entries(student10));

// // // --:
// // // [["name", "Riya"], ["age", 19]]


// // // . 12 - Iterating through an object

// // let student11 = {
// //     name: "Aman",
// //     age: 20
// // };

// // for (let key in student11) {
// //     console.log(key, student11[key]);
// // }



// // // ============================================================
// // // 9. DESTRUCTURING
// // // ============================================================

// // // Destructuring extracts values from arrays or objects
// // // and stores them in variables.


// // // A. ARRAY DESTRUCTURING


// // // Basic array destructuring

// // let numbers16 = [10, 20, 30];

// // let [first, second, third] = numbers16;

// // console.log(first);
// // console.log(second);
// // console.log(third);




// // //  Skipping array elements

// // let fruits3 = ["apple", "banana", "mango"];

// // let [firstFruit, , thirdFruit] = fruits3;

// // console.log(firstFruit);
// // console.log(thirdFruit);




// // // - Using default values

// // let numbers17 = [10,50];

// // let [firstNumber, secondNumber = 20] = numbers17;

// // console.log(firstNumber);
// // console.log(secondNumber);




// // // . 4 - Swapping variables

// // let a = 10;
// // let b = 20;

// // [a, b] = [b, a];

// // console.log(a);
// // console.log(b);


// // // B. OBJECT DESTRUCTURING


// // //  Basic object destructuring

// // let student12 = {
// //     name: "Aman",
// //     age: 20
// // };

// // let { name, age } = student12;

// // console.log(name);
// // console.log(age);



// // // Renaming variables during destructuring

// // let student13 = {
// //     name: "Riya",
// //     age: 19
// // };

// // let { name: studentName, age: studentAge } = student13;

// // console.log(studentName);
// // console.log(studentAge);






// // // Riya
// // // 19


// // // Default values in object destructuring

// // let student14 = {
// //     name: "Aman",
// //     city :"kolkata"
// // };

// // let { name: name1, city = "Delhi" } = student14;

// // console.log(name1);
// // console.log(city);

// // // --:
// // // Aman
// // // Delhi


// // // . 8 - Destructuring function parameters

// // let student15 = {
// //     name: "Rahul",
// //     age: 21
// // };

// // function printStudent({ name, age }) {
// //     console.log(name);
// //     console.log(age);
// // }
// // { name, age } = student15
// // printStudent(student15);

// // // --:
// // // Rahul
// // // 21


// // // ============================================================
// // // 10. SPREAD OPERATOR (...)
// // // ============================================================

// // // The spread operator expands array elements or object properties.
// // // It is useful for copying and combining arrays and objects.


// // // Copying an array

// // let numbers18 = [10, 20, 30];

// // let copiedNumbers = [...numbers18,20];

// // console.log(copiedNumbers);




// // // Combining two arrays

// // let fruits4 = ["apple", "banana"];
// // let fruits5 = ["mango", "orange"];

// // let allFruits = [...fruits4, ...fruits5];

// // console.log(allFruits);




// // //  Adding elements while copying an array

// // let numbers19 = [1, 2, 3];

// // let moreNumbers = [...numbers19, 4, 5];

// // console.log(moreNumbers);




// // // . 4 - Copying an object

// // let student16 = {
// //     name: "Aman",
// //     age: 20
// // };

// // let copiedStudent = { ...student16 };

// // console.log(copiedStudent);




// // // . 5 - Combining objects

// // let student17 = {
// //     name: "Riya"
// // };

// // let studentDetails = {
// //     age: 19,
// //     city: "Delhi"
// // };

// // let completeStudent = {
// //     ...student17,
// //     ...studentDetails
// // };

// // console.log(completeStudent);




// // // . 6 - Updating a property using spread

// // let student18 = {
// //     name: "Aman",
// //     age: 20
// // };

// // let updatedStudent = {
// //     ...student18,
// //     age: 21
// // };

// // console.log(updatedStudent);






// // // --:
// // // { name: "Aman", age: 21 }


// // // . 7 - Passing array elements to a function

// // let numbers20 = [10, 20, 30];

// // function add(a, b, c) {
// //     console.log(a + b + c);
// // }

// // add(...numbers20);

// // // --:
// // // 60
// // let num = [1,2,3]
// // let a = [4,5 ,...num] --> [4,5,1,2,3]



// // // ============================================================
// // // 11. REST OPERATOR (...)
// // // ============================================================

// // // The rest operator collects multiple values into one array
// // // or collects remaining object properties into one object.
// // // Its syntax is the same as spread, but its purpose is different.


// // // . 1 - Rest parameter in a function

// // function addNumbers(...numbers) {
// //     console.log(numbers);
// //     console.log(typeof(numbers));
// // }

// // addNumbers(10, 20, 30);



// // // . 2 - Adding any number of values

// // function addAll(...numbers) {
// //     let total = numbers.reduce((sum, number) => sum + number, 0);

// //     console.log(total);
// // }

// // addAll(10, 20, 30);
// // addAll(5, 5);








// // // Rest in array destructuring

// // let numbers21 = [10, 20, 30, 40, 50];

// // let [firstNumber1, ...remainingNumbers] = numbers21;

// // console.log(firstNumber1);
// // console.log(remainingNumbers);




// // // Rest in object destructuring

// // let student19 = {
// //     name: "Riya",
// //     age: 19,
// //     city: "Delhi"
// // };

// // let { name: studentName1, ...otherDetails } = student19;

// // console.log(studentName1);
// // console.log(otherDetails);

// // // Riya
// // // { age: 19, city: "Delhi" }


// // // ============================================================
// // // 12. SPREAD vs REST
// // // ============================================================

// // // Spread expands elements.
// // // Rest collects elements.

// // // . 1 - Spread

// // let numbers22 = [1, 2, 3];

// // let combinedNumbers = [...numbers22, 4];

// // console.log(combinedNumbers);

// // // // --:
// // // // [1, 2, 3, 4]


// // // // . 2 - Rest

// // function showNumbers(...numbers) {
// //     console.log(numbers);
// // }

// // showNumbers(1, 2, 3, 4);

// // // --:
// // // [1, 2, 3, 4]


// // // apply,bind,call

// let obj1 = {
//     "a": 456,
//     "a456": "d",
//     c: "dragonfly",
//     fns: function(){
//         console.log("This is object method")
//     } 
// }

// // console.log(obj1.a)
// // console.log(obj1.c)
// // console.log(obj1.a456)
// // obj1 = {
// //     "c": 5
// // }
// // console.log(obj1)

// // const obj2 = {
// //     var1: 40,
// //     var2: 50,
// //     var3: "Priya",
// //     func1: function() {
// //         console.log("this is second function")
// //     },
// //     func2: function(course,x){
// //         console.log(`${this.var3} likes the course ${course} , ${x}`)
// //     },
// //     func3: function() {
// //         console.log(`The first property of the obj is ${this.var1}`)
// //     }
// // }

// // const obj3 = {
// //     var1: 49
// // }
// // console.log(obj2.var1);
// // console.log(obj2.var2);

// // // // obj2.func1();
// // // // obj2.func2("MAD III");
// // // // obj2.func3();

// // let testvar = obj2.func3 // lost in context 
// // testvar  = function() {
// //         console.log(`The first property of the obj is ${this.var1}`)
// //     }
// // console.log(testvar());

// // // // testvar(); --> lost it context
// // // // apply(), call(), bind()

// // // // A] for functions without arguments

// // testvar.apply(obj2)
// // testvar.call(obj2)
// // testvar.call(obj3)
// // testvar.bind(obj2)()

// // // // B] for functions with arguments

// // // // obj2.func2("MAD III")

// // const obj2 = {
// //     var1: 40,
// //     var2: 50,
// //     var3: "Priya",
// //     func1: function() {
// //         console.log("this is second function")
// //     },
// //     func2: function(course,x){
// //         console.log(`${this.var3} likes the course ${course} , ${x}`)
// //     },
// //     func3: function() {
// //         console.log(`The first property of the obj is ${this.var1}`)
// //     }
// // }

// // const obj3 = {
// //     var1: 49
// // }
// // // console.log(obj2.func2("pdsa","iit"))
// // const testvar2 = obj2.func2;
// // // console.log(testvar2())

// // // testvar2.apply(obj2, ["DBMS II"])
// // // testvar2.apply(obj2, ["DBMS II", "elem3"])

// // // testvar2.call(obj2, "PDSA II")
// // // testvar2.call(obj2, "PDSA II", "arg4")

// // testvar2.bind(obj2)("JAVA II", "PDSA II")

// // // // context (obj) to the method (func)


// // // Question 4:
// // // Create an object with name and age properties.
// // // Print both properties.

// // // let student30 = {
// // //     name: "Aman",
// // //     age: 20
// // // };
// // // Write your code here.

// // // --:
// // // Aman
// // // 20


// // // Question 5:
// // // Use array destructuring to get the first and second values.

// // // let numbers26 = [100, 200, 300];
// // // Write your code here.

// // // --:
// // // 100
// // // 200


// // // Question 6:
// // // Use object destructuring to get the name property.

// // // let student31 = {
// // //     name: "Riya",
// // //     age: 19
// // // };
// // // Write your code here.

// // // --:
// // // Riya


// // // Question 7:
// // // Use the spread operator to combine two arrays.

// // // let firstArray = [1, 2];
// // // let secondArray = [3, 4];
// // // Write your code here.

// // // --:
// // // [1, 2, 3, 4]


// // // Question 8:
// // // Write a function that uses the rest operator
// // // to accept multiple numbers and print them.

// // // Write your code here.

// // // . call:
// // // showValues(10, 20, 30);

// // // --:
// // // [10, 20, 30]

// // // ============================================================
// // // 13. JSON
// // // ============================================================

// // // JSON stands for JavaScript Object Notation.
// // // JSON is a text format used to store and exchange data.
// // // JSON keys and string values use double quotes.


// // // . 1 - JavaScript object

// let student20 = {
//     name: "Aman",
//     age: 20,
//     course: "JavaScript"
// };

// // console.log(student20.name);

// // // --:
// // // Aman


// // // . 2 - Converting an object into a JSON string
// // // JSON.stringify() converts a JavaScript value into JSON text.

// // let student21 = {
// //     name: "Riya",
// //     age: 19
// // };

// // let jsonData = JSON.stringify(student21);

// // console.log(jsonData);

// // // --:
// // // {"name":"Riya","age":19}


// // // . 3 - Converting JSON text into an object
// // // JSON.parse() converts valid JSON text into a JavaScript value.

// // let jsonText = '{"name":"Aman","age":20}';

// // let student22 = JSON.parse(jsonText);


// // console.log(student22.name);
// // console.log(student22.age);

// // // --:
// // // Aman
// // // 20


// // // . 4 - JSON with an array

// // let fruits6 = ["apple", "banana", "mango"];

// // let jsonFruits = JSON.stringify(fruits6);

// // console.log(jsonFruits);

// // // --:
// // // ["apple","banana","mango"]


// // // // . 5 - Parsing a JSON array

// // let jsonText1 = '["red","blue","green"]';

// // let colors2 = JSON.parse(jsonText1);

// // console.log(colors2);
// // console.log(colors2[0]);

// // // --:
// // // ["red", "blue", "green"]
// // // red


// // // . 6 - Updating an object and converting it to JSON

// let student23 = {
//     name: "Rahul",
//     marks: 80
// };

// student23.marks = 90;

// let jsonStudent = JSON.stringify(student23);

// console.log(jsonStudent);

// // // --:
// // // {"name":"Rahul","marks":90}


// // // Important:
// // // JSON does not support JavaScript functions or undefined values
// // // as JSON values in the same way as ordinary JavaScript objects.
// // // JSON text must follow valid JSON syntax.







// // // ============================================================
// // // . JAVASCRIPT CLASSES
// // // ============================================================

// // // A class is a blueprint for creating objects.
// // // constructor() runs when a new object is created.
// // // this refers to the object being created or used.


// // // . 1 - Creating a simple class

// // class Student1 {
// //     constructor(name) {
// //         this.name = name;
// // //     }
// // // }

// // // let student25 = new Student1("Aman");

// // // console.log(student25.name);

// // // // --:
// // // // Aman


// // // // . 2 - Class with multiple properties

// // class Student2 {
// //     constructor(name, age) {
// //         this.name = name;
// //         this.age = age;
// //     }
// // }

// // let student26 = new Student2("Riya", 19);

// // console.log(student26.name);
// // console.log(student26.age);

// // // --:
// // // Riya
// // // 19


// // // . 3 - Class with a method

// // class Student3 {
// //     constructor(name) {
// //         this.name = name;
// //     }

// //     greet() {
// //         console.log(`Hello, ${this.name}`);
// //     }
// // }
// // let student27 = new Student3("Rahul");

// // let student50 = new Student3("Riya")
// // student27.greet();
// // student50.greet();

// // // --:
// // // Hello, Rahul


// // // // . 4 - Creating multiple objects from one class

// // class Car {
// //     constructor(brand, color) {
// //         this.brand = brand;
// //         this.color = color;
// //     }

// //     display() {
// //         console.log(`${this.brand} is ${this.color}`);
// //     }
// // }

// // let car1 = new Car("Honda", "red");
// // let car2 = new Car("Toyota", "blue");

// // car1.display();
// // car2.display();

// // // --:
// // // Honda is red
// // // Toyota is blue


// // // . 5 - Default values in a constructor

// // class Student4 {
// //     constructor(name, course = "JavaScript") {
// //         this.name = name;
// //         this.course = course;
// //     }

// //     display() {
// //         console.log(this.name);
// //         console.log(this.course);
// //     }
// // }

// // let student28 = new Student4("Aman","pdsa");

// // student28.display();

// // // --:
// // // Aman
// // // JavaScript


// // // . 6 - Updating object properties

// // class Student5 {
// //     constructor(name, marks) {
// //         this.name = name;
// //         this.marks = marks;
// // //     }
// // // }

// // // let student29 = new Student5("Riya", 80);

// // // student29.marks = 95;

// // // console.log(student29.marks);

// // // // --:
// // // // 95


// // // // . 7 - Inheritance using extends
// // // // A child class can inherit properties and methods from a parent class.
// // // // super() calls the parent constructor.

// // class Animal {
// //     constructor(name) {
// //         this.name = name;
// //     }

// //     eat() {
// //         console.log(`${this.name} is eating`);
// //     }
// // }

// // class Dog extends Animal {
// //     bark() {
// //         console.log(`${this.name} says woof`);
// //     }
// // }

// // let dog1 = new Dog("Tommy");

// // dog1.eat();
// // dog1.bark();

// // // --:
// // // Tommy is eating
// // // Tommy says woof


// // // . 8 - Using super() with a child constructor

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     display(){
//         console.log(this.name);
//     }
// }

// class Teacher extends Person {
//     constructor(name, subject) {
//         super(name);
//         this.subject = subject;
//     }

//     display() {
//         console.log(this.name);
//         console.log(this.subject);
//     }
// }

// let teacher1 = new Teacher("Aman", "JavaScript");
// let person = new Teacher("Pooja")
// teacher1.display();
// person.display()
// // // --:
// // // Aman
// // // JavaScript


// // // ============================================================
// // // PRACTICE QUESTIONS
// // // ============================================================



// // // Question 9:
// // // Convert a JavaScript object into a JSON string.

// // // let student32 = {
// // //     name: "Aman",
// // //     age: 20
// // // };
// // // Write your code here.

// // // --:
// // // {"name":"Aman","age":20}


// // // Question 10:
// // // Create a class called Book.
// // // Store title and author in the constructor.
// // // Create an object and print its title.

// // // Write your code here.


