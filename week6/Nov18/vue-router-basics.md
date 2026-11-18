# Vue Router Basics: Campus Club Hub

## What this lesson teaches

This small Vue 2 project shows how to change the visible screen from one URL to another without reloading the whole page. The example is a Campus Club Hub with three screens: **Events**, **Clubs**, and **Help**. The HTML is kept plain so the routing parts are easy to find.

## 1. Navigation and a single-page app

Navigation is moving between views. In a traditional site, the browser requests a new page and reloads it. In a single-page application (SPA), Vue Router changes the URL and replaces the relevant view while the surrounding page stays in place.

The browser address still changes. Vue Router listens for that change and chooses which component to display.

## 2. Components are screens

A Vue component is a reusable piece of interface. Here, `Events`, `Clubs`, and `Help` are small component objects. Each has a `template` describing the content for one screen.

```js
const Events = {
  template: '<h2>Upcoming events</h2>'
};
```

The actual demo uses a template string with backticks so its HTML can span multiple lines.

## 3. Routes connect paths and components

A route object tells Vue Router what to display for a path:

```js
{ path: '/clubs', component: Clubs }
```

This means the `/clubs` path displays the `Clubs` component. The demo has three such routes. The root path `/` redirects to `/events`, so opening the page starts on the Events screen.

## 4. Create the router

```js
const router = new VueRouter({ routes });
```

`VueRouter` is provided by the Vue Router CDN script. The `routes` option supplies the path-to-component map. The shorter `{ routes }` syntax is equivalent to `{ routes: routes }`.

## 5. Navigation links

```html
<router-link to="/clubs">Clubs</router-link>
```

`router-link` creates a navigation link managed by Vue Router. `to` is the destination path. Selecting it updates the URL and view without a full-page reload. Vue Router also marks the current link active, which the demo styles.

## 6. The view outlet

```html
<router-view></router-view>
```

`router-view` is the outlet where the component for the current URL appears. The title and links remain on screen while this view changes.

## 7. Connect Vue and Vue Router

```js
new Vue({
  el: '#app',
  router
});
```

`el: '#app'` attaches Vue to the HTML element with `id="app"`. Passing `router` installs the router in this Vue app, enabling `router-link` and `router-view`.

## 8. How the pieces work together

1. The browser opens the demo and Vue starts.
2. Vue Router reads the current URL.
3. It finds the matching route.
4. It displays that route's component in `router-view`.
5. Clicking a `router-link` changes the URL and displayed component without reloading the page.

## 9. Files and how to run

- `basicVue-router.html` contains the page structure, navigation links, view outlet, and CDN scripts.
- `basicVue-router.js` contains the screen components, route table, router, and Vue setup.
- `vue-router-basics.md` is this lesson.
- `vue-router-code.md` contains the full HTML and JavaScript code together for reading or printing.

Open `basicVue-router.html` in a browser while connected to the internet so the CDN scripts can load. Click Events, Clubs, and Help. The content changes while the title and navigation links stay on screen.

## 10. Key terms

| Term | Meaning in this example |
| --- | --- |
| Component | One screen, such as `Events` or `Clubs` |
| Route | A mapping from a URL path to a component |
| Router | The object that matches paths and manages navigation |
| `router-link` | A link that navigates through Vue Router |
| `router-view` | The place where the matched component is displayed |
| SPA | A site that changes views without reloading the whole page |

## Teaching prompt

Ask students to add a `News` component, add a `/news` route, then add a `router-link` to `/news`. They can see how each piece has one job: component for content, route for mapping, link for navigation, and view outlet for display.
