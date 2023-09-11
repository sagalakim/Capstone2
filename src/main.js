import { createApp } from "vue";
import App from "./App.vue";
import Menu from "./components/Menu.vue";
import Dashboard from "./components/Dashboard.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/Menu", component: Menu },
  { path: "/Dashboard", component: Dashboard }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: "active"
});

const app = createApp(App);
app.use(router);
app.mount("#app");