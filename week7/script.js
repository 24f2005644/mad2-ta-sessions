const Home = {template: `
  <div>
    <h1>Welcome to the Home Page</h1>
    <p>This is the main landing page of our application.</p>
  </div>
`};


const About = {template: `
  <div>
    <h1>About Us</h1>
    <p>This page provides information about our company and team.</p>
  </div>
`};

const Contact = {template: `
  <div>
    <h1>Contact Us</h1>
    <p>If you have any questions, feel free to reach out to us.</p>
  </div>
`};

const Dashboard = {template: `
  <div>
    <h1>Dashboard</h1>
    <p>This is the dashboard where you can view your stats and manage your account.</p>
  </div>
`};





const userProfile = {
  template: `
    <div>
      <h2>User #{{ $route.params.userId }}</h2>
    </div>
  `
}


const routes = [ {
    path: '/',
    component: Home
  },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    { path: "/users/:userId", component: userProfile }

]

const router = new VueRouter({
    routes: routes
})

new Vue({
    el: '#app',
    router
})
