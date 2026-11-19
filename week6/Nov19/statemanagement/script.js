Vue.component('inner-component', {
    // props: ['innerMessage'],
    template: `<div>
    <h2>{{ innerMessage }}</h2>
    </div>`,
    computed: {
        innerMessage() {
            return this.$store.state.innerMessage
        }
    }
})

Vue.component('child-component', {
    // props: ['childMessage', 'innerMessage'],
    template: `<div>
    <h2 @click = "updateChildMessage">{{ childMessage }}</h2>
    <inner-component ></inner-component>
    </div>`,
    computed: {
        childMessage() {
            return this.$store.state.childMessage
        }
    },
    methods: {
        updateChildMessage() {
            this.$store.commit('updateChildMessage', 'Hello from child component! This is a new message.')
        }
    }
})

Vue.component('counter-button', {
    // props: ['message', 'message2'],
    template: `<div>
    <!-- <child-component :childMessage="message" :innerMessage="message2"></child-component> -->
    <child-component ></child-component>
    <button v-on:click="incrementCounter">{{ counter }}</button></div>`,
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter: function () {
            this.counter += 1
        }
    }
})







new Vue({
    el: '#app',
    store: store,
    data: {

        show: true

    },

    computed: {
        message() {
            return this.$store.state.message
        },
        combinedMessage() {
            return this.$store.getters.combinedMessage
        }
    },
    methods: {
        updateMessage() {
            this.$store.dispatch('getData')
        }
    }

})


// main --> counter-button --> child-component --> inner-component
