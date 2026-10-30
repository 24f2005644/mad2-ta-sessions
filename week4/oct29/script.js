// const app = new Vue({
//    el: '#app',
//    data: {
//       message: 'Hello Vue!',
//       firstName: 'John',
//       lastName: 'Doe',
//       courses:["Mad1", "MLP", "Mad2", "MLT", "Mlf" ],
//       user: {
//          name: 'John Doe',
//          age: 30,
//          email: "user@email.com"

//    },
//    count: 0,
//    visible: true
// },

// methods: {

//    greet: function() {
//       alert('Hello ' + this.user.name);
//    },
//    change: function() {
//       this.message = 'Hello Mad2 students!';
//    },
//    counter: function() {
//         this.count++;
//    },
// //    isVisible: function() {
// //       this.visible = !this.visible;
// //    }
//     fullname1: function() {
//         console.log('from method');
//         return this.firstName + ' ' + this.lastName;
//     }


// },

// computed: {
//    fullname: function() {
//         console.log('from computed');
//         return this.firstName + ' ' + this.lastName;

//     }
// },

// watch: {
//     count: function(newValue, oldValue) {
//         console.log('Count changed from ' + oldValue + ' to ' + newValue);
//     }

// }


// });

// Components in Vue



// Vue.component("user-card", {
//     props: ['name', 'age', 'email'],
//     template: `
//         <div class="card">
//             <h3>{{ name }}</h3>
//             <p>Age: {{ age }}</p>
//             <p>Email: {{ email }}</p>
//         </div>
//     `
// });


// Vue.component("counter-button", {

//     data() {
//         return {
//             count: 0
//         };
//     },

//     template: `
//         <button @click="count++">
//             {{ count }}
//         </button>
//     `
// });

// Vue.component("hello-world", {
//     template: `
//     <div>
//         <h2>Hello from Component</h2>
//         <counter-button></counter-button>
//     </div>
//     `
// });




// Vue.component("child-component", {

//     data() {
//         return {
//             message: "Hello from Child Component"
//         };
//     },

//     template: `
//         <button @click="sendMessage">
//             Send Message
//         </button>
//     `,

//     methods: {
//         sendMessage() {

//             this.$emit("message-sent", this.message);

//         }
//     }
// });

// new Vue({
//     el: '#app',
//     data: {
//         Name: 'John Doe',
//         Age: 30,
//         Email: "user@email.com",
//         child: ""
//     },
//     methods: {
//         childMessage(msg) {
//             this.child = msg;
//         }
//     }
// })


//     Basic Slot Example


Vue.component("card", {
    template: `
        <div class="card">
            <slot name="header"> Default header fallback </slot>
            <h1>Card Component</h1>
            <slot><p>Default (fallback) Value</p></slot>

            <h2>Footer</h2>
            <slot name="content"> Default content fallback </slot>

        </div>
    `
});



new Vue({
   el: '#app',
    data: {
        Name: 'John Doe',
        Age: 30,
        Email:""

    }
});


