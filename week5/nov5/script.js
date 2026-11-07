// console.log("Hello, World!");
// setTimeout(() => {
//     console.log("This message is displayed after 2 seconds.");
// }, 2000);

// console.log("This message is displayed immediately after the first log.");


// promise  - it is a object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous fashion, making it easier to read and maintain.

// let condition = false;
// let promise = new Promise((resolve, reject) => {
//     if (condition) {
//         resolve("Promise resolved successfully!");
//     }
//     else {
//         reject("Promise rejected!");
//     }
// })


// promise
// .then((message) => {
//     console.log(message);
// })
// .catch((error) => {
//     console.log(error);
// })


function login(){

    return new Promise((resolve,reject)=>{

        let passwordCorrect=true;

        if(passwordCorrect){
            resolve("Login Successful");
        }
        else{
            reject("Wrong Password");
        }

    });

}

// login()
// .then(result=>console.log(result))
// .catch(error=>console.log(error));

// finally()

// login()
// .then(result=> {throw new Error("Error in the first then block")})
// .then(result=>console.log("This is the second then block"))
// .catch(error=>console.log(error))
// .finally(()=>{
//     console.log("Request Finished");
// });


// function step1(){

//     return Promise.resolve("Step 1");

// }

// function step2(previous){

//     console.log(previous);

//     return Promise.reject("Step 2");

// }

// step1()
// .then(step2)  // step2("Step 1")
// .then(console.log) // result => console.log(result)
// .catch(error => console.log(error)); // error => console.log(error)




// Promise.all([
//     Promise.resolve(10),
//     Promise.resolve(20),
//     Promise.resolve(30)
// ])
// .then(console.log);


// Promise.allSettled([
//     Promise.resolve(10),
//     Promise.reject(20),
//     Promise.resolve(30)
// ])
// .then(console.log);

// Promise.race([
//     Promise.reject(20),
//     Promise.resolve(10),
//     Promise.resolve(30)
// ])
// .then(console.log);


// Promise.any([
//     Promise.reject(20),
//     Promise.resolve(30),
//     Promise.resolve(10)
// ])
// .then(console.log);

// Promise.any([
//     Promise.reject(20),
//     Promise.reject(30),
//     Promise.reject(10)
// ])
// .then(console.log)
// .catch(error=>console.log(error));






// Promise.all([p1,p3,p2])
// .then(result=>console.log(result))
// .catch(error=>console.log(error));

// Promise.allSettled([p1,p3,p2])
// .then(result=>console.log(result))
// .catch(error=>console.log(error));


// Promise.race([p1,p3,p2])
// .then(result=>console.log(result))
// .catch(error=>console.log(error));

// Promise.any([p1,p3,p2])
// .then(result=>console.log(result))
// .catch(error=>console.log(error));

p1 = new Promise((res,rej)=>{
    setTimeout(() => {
        res("promise1 resolved")
    },5000);
})


p2 = new Promise((res,rej)=>{
    setTimeout(() => {
        res("promise2 resolved")
    }, 2000);
})


p3 = new Promise((res,rej)=>{
    setTimeout(() => {
        res("promise3 resolved")
    }, 2000);
})


// function fun1(){
//     p2.then((data)=>console.log(data))


//     console.log("after promise")
// }

// fun1()

// async function fun(){
//     console.log("start")
//     let b = await p1;
//     console.log(b);
//     console.log("hello")


//     let a = await p2;
//     console.log(a);
// }

// fun()

// console.log("after function")


// all => if one reject all will reject
// allsettle => always return response of all promises even if reject
// race => first promise will settle which will get settled first will return
// any => first promise will resolve which will get resolved first will return





// fetch


// async function getData(){

//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     const data = await response.json();

//     console.log(data);

// }

// getData();




// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>response.json())

// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))







async function getData(){

    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response);

}

getData()




