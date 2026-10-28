// Vue examples for practice. Uncomment a snippet to study its setup.

// Data: data values can be shown in HTML with {{ message }}.
// new Vue({ el: "#app", data: { message: "Hello Vue!" } });

// v-bind: connect a Vue value to an HTML attribute.
// HTML: <img v-bind:src="imageUrl">
// data: { imageUrl: "https://picsum.photos/200" }

// v-model: connect an input to a data value.
// HTML: <input v-model="name">
// data: { name: "" }

// v-show and v-if: display content based on a true/false value.
// HTML: <p v-show="show">Tip</p>  <p v-if="show">Welcome</p>
// data: { show: true }

// v-for: make one element for every item in a list.
// HTML: <li v-for="fruit in fruits">{{ fruit }}</li>
// data: { fruits: ["Apple", "Mango"] }

// Computed: create a value from other data.
// computed: { doubleDays: function () { return this.days * 2; } }

// Watcher: run code when a data value changes.
// watch: { typedMessage: function (text) { this.status = text; } }

// Plain JavaScript countdown, shown without Vue in the HTML.
// let plainCount = 15;
// let plainTimerRunning = false;
// document.getElementById("plainCount").innerText = plainCount;

// function startPlainTimer() {
//     if (plainTimerRunning) return;

//     plainCount = 15;
//     plainTimerRunning = true;
//     document.getElementById("plainCount").innerText = plainCount;

//     const timer = setInterval(function () {
//         plainCount--;
//         document.getElementById("plainCount").innerText = plainCount;

//         if (plainCount === 0) {
//             clearInterval(timer);
//             plainTimerRunning = false;
//         }
//     }, 1000);
// }

// One Vue app controls all Vue examples on the page.
new Vue({
    el: "#app",

    data: {
        message: "Hello Vue!",
        imageUrl: "https://picsum.photos/200",
        name: "Plain",
        showTip: true,
        fruits: ["Apple", "Mango", "Banana", "Orange"],
        days: 5,
        typedMessage: "",
        status: "Start typing",
        count: 10,
        timerRunning: false
    },

    computed: {
        doubleDays: function () {
            return this.days * 2;
        }
    },

    // watch: {
    //     typedMessage: function (text) {
    //         this.status = text.length > 5 ? "Good message!" : "Keep typing";
    //     }
    // },

    // methods: {
    //     startVueTimer: function () {
    //         if (this.timerRunning) return;

    //         this.count = 10;
    //         this.timerRunning = true;

    //         const timer = setInterval(() => {
    //             this.count--;

    //             if (this.count === 0) {
    //                 clearInterval(timer);
    //                 this.timerRunning = false;
    //             }
    //         }, 1000);
    //     }
    // }
});
