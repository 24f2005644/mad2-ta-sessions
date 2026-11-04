# Vue.js Lifecycle Hooks

Vue lifecycle hooks are methods that run at specific stages of a component's life:

1. Creation
2. Mounting
3. Updating
4. Destruction

This example uses Vue 2.

## 1. Creation Hooks

### `beforeCreate()`

`beforeCreate()` runs before Vue initializes the component's data, computed
properties, and methods.

```js
beforeCreate() {
    console.log("The component is starting.");
    console.log(this.message); // undefined
}
```

### `created()`

`created()` runs after Vue initializes the component's data and methods.
The DOM is not available yet, but component data can be used.

This is a good place to:

- Fetch data from an API
- Load data from local storage
- Initialize values

```js
created() {
    console.log("The component has been created.");
    console.log(this.message); // "Hello Vue.js"
}
```

## 2. Mounting Hooks

### `beforeMount()`

Runs before Vue inserts the component into the page.

```js
beforeMount() {
    console.log("The component is about to appear.");
}
```

### `mounted()`

Runs after the component is inserted into the DOM. Use it when you need to
access HTML elements, add event listeners, or start a timer.

```js
mounted() {
    console.log("The component is visible.");
}
```

## 3. Updating Hooks

### `beforeUpdate()`

Runs before Vue updates the DOM after reactive data changes.

### `updated()`

Runs after Vue finishes updating the DOM.

```js
beforeUpdate() {
    console.log("The data changed; the DOM will update.");
},

updated() {
    console.log("The DOM has been updated.");
}
```

## 4. Destruction Hooks

### `beforeDestroy()`

Runs before Vue removes the component. Use it to remove event listeners,
cancel timers, or stop subscriptions.

### `destroyed()`

Runs after Vue removes the component.

```js
beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
},

destroyed() {
    console.log("The component was removed.");
}
```

## Lifecycle Order

```text
beforeCreate()
created()
beforeMount()
mounted()
beforeUpdate()
updated()
beforeDestroy()
destroyed()
```

`beforeUpdate()` and `updated()` run only when reactive data changes.

## Simple Example

```html
<div id="app">
    <p>{{ message }}</p>
    <button @click="changeMessage">Change Message</button>
</div>

<script>
new Vue({
    el: "#app",

    data() {
        return {
            message: "Hello Vue.js"
        };
    },

    beforeCreate() {
        console.log("1. beforeCreate: Data is not ready.");
    },

    created() {
        console.log("2. created: Data and methods are ready.");
        console.log(this.message);
    },

    mounted() {
        console.log("3. mounted: The app is in the DOM.");
    },

    methods: {
        changeMessage() {
            this.message = "The message changed!";
        }
    }
});
</script>
```

## Key Difference

| Hook | Data available? | DOM available? | Common use |
|---|---:|---:|---|
| `beforeCreate()` | No | No | Initial logging |
| `created()` | Yes | No | API calls and data setup |
| `mounted()` | Yes | Yes | DOM work and event listeners |
| `beforeDestroy()` | Yes | Yes | Cleanup |
