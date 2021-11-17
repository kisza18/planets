<template>
  <div class="layout">
    <the-navbar></the-navbar>
    <slot></slot>
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";

export default {
  components: {
    TheNavbar,
  },
};
</script>

<style scoped>
.layout {
  height: 100vh;
  background: hsl(240, 67%, 8%);
  background-image: url("../images/background-stars.svg");
  background-size: cover;
}
</style>
