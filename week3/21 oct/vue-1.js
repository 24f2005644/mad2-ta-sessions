// Vue lesson examples
// The examples below are off. Remove // from one example to use it.
// Also uncomment its matching HTML example in vue-teaching-guide.html.
// Use one example at a time.

// 1. Vue app, el, and data
// const app1 = new Vue({
//     el: "#demo1",
//     data: { message: "Hello!" }
// });


// // 2. v-bind
// const app2 = new Vue({
//     el: "#demo2",
//     data: { val: "font-size: 30px;color: blue;" }
// });

// 3. v-if
// const app3 = new Vue({
//     el: "#demo3",
//     data: { show: false }
// });

// // v-show
// const app9 = new Vue({
//     el: "#demo9",
//     data: { showMessage: false }
// });

// 4. v-for
// const app4 = new Vue({
//     el: "#demo4",
//     data: { items: ["Code","Read", "Write", "Learn"] }
// });

// 5. v-model 
// const app5 = new Vue({
//     el: "#demo5",
//     data: { message:"app" }
// });

// 6. Click event and methods
// v-on:click="functionName" or @click="functionName"
// const app6 = new Vue({
//     el: "#demo6",
//     data: {
//         name: "",
//         message: ""
//     },
//     methods: {
//         changeMessage: function () {
//             this.message = "Hello, " + this.name + "!"+"welcome to Vue.js";
//         }
//     }
// });

// 7. computed
// const app7 = new Vue({
//     el: "#demo7",
//     data: { firstName: "Asha", lastName: "Rao" },
//     computed: {
//         fullName: function () {
//             return this.firstName + " " + this.lastName;
//         }
//     }
// });

// 8. watch
const app8 = new Vue({
    el: "#demo8",
    data: { message: "", info: "Type 8 letters" },
    watch: {
        message: function (newText) {
            if (newText.length >= 8) {
                this.info = "Good job!";
            } else {
                this.info = "Keep typing.";
            }
        }
    }
});
