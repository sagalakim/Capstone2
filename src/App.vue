<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  />
  <div id="app">
    <Menu />
    <router-view></router-view>
  </div>
</template>

<script>
import "./Menu.css";
import Menu from "./components/Menu";
import Dashboard from "./components/Dashboard";

export default {
  name: "App",
  data: () => ({}),
  components: {
    Menu,
    Dashboard,
  },
};
</script>