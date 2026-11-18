// Each component is one screen shown inside <router-view>.
const Home = { template: '<h2>Home</h2>' };
const About = { template: '<h2>About</h2>' };
const Contact = { template: '<h2>Contact</h2>' };
const NotFound = { template: '<h2>404 Not Found</h2>' };

const Events = {
  template: `
    <div>
      <h2>Events</h2>
      <ul>
        <li v-for="event in events" :key="event.id">
          {{ event.name }} - {{ event.date }}
        </li>
      </ul>
    </div>
  `,
  data() {
    return {
      events: [
        { id: 1, name: 'Club Meeting', date: '2024-06-15' },
        { id: 2, name: 'Workshop', date: '2024-06-20' },
        { id: 3, name: 'Social Gathering', date: '2024-06-25' }
      ]
    };
  }
};

const Help = {
  template: `
    <div>
      <h2>Help</h2>
      <p>If you need assistance, please contact our support team.</p>
    </div>
  ` 
}





// A route connects a URL path to the component for that screen.
const routes = [
  {"path": '/', component: Home },
  {"path": '/about', component: About },
  {"path": '/contact', component: Contact },
  {"path": '*', component: NotFound },
  {"path": '/events', component: Events },
  {"path": '/help', component: Help }
]


// The router watches the URL and selects the matching component.
const router = new VueRouter({
  routes
});


// Attach Vue and the router to the page.
new Vue({
  el: '#app',
  router
});
