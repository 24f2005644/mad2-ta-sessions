
const user = Vue.component('user', {
    data() {
        return {
            name: '',
            age: '',
            city: '',
            email: ''
        }
    },
    mounted() {
        const storedData = fetch('http://127.0.0.1:5000/api/hello', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}` // Include the access token in the request header
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Data fetched from API:', data);
                this.name = data.name;
                this.age = data.Age;
                this.city = data.city;
                this.email = data.email;

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        },

    template: `
        <div>
            <h2>User Information</h2>
            <p><strong>Name:</strong> {{ name }}</p>
            <p><strong>Age:</strong> {{ age }}</p>
            <p><strong>City:</strong> {{ city }}</p>
            <p><strong>Email:</strong> {{ email }}</p>
        </div>
    `
});





const loginForm = {
    template: `
        <div>
            <h2>Login</h2>
            <form>
                <div>
                    <label for="username">Username:</label>
                    <input type="text" v-model="username" id="username">
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    `,
    data() {
        return {
            username: ''
        }
    },
    created() {
        // Fetch the access token when the component is created
        const accessToken = fetch('http://127.0.0.1:5000/api/login', {
            method: 'POST'

        })
            .then(response => response.json())
            .then(data => {
                console.log('Access token fetched from API:', data);
                // You can store the access token in localStorage or use it as needed
                localStorage.setItem('accessToken', data.access_token);
            })
            .catch(error => {
                console.error('Error fetching access token:', error);
            });
    }
}



const routes = [
  { path: "/login", component: loginForm },
  {path: "/user", component: user}
]

const router= new VueRouter({
    routes
})


new Vue({
    el: '#app',
    router,
    components: {
        'user': user,
        'login-form': loginForm
    },

})
