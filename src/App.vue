<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
const defaultLayout = "default";
export default {
  name: "App",
  computed: {
    layout() {
      return defaultLayout;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Antonio:wght@100;200;300;400;500;600;700&display=swap");
#app {
  font-family: "Antonio", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
