<template>
  <div class="home">
    <TheNav />
    <h1 class="text-white text-6xl w-full text-center pt-20 px-6">
      EXPLORE OUR SOLAR SYSTEM
    </h1>
  </div>
</template>

<script>
import TheNav from "../components/TheNavbar.vue";
export default {
  components: {
    TheNav,
  },
};
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: hsl(240, 67%, 8%);
  background-image: url("../images/background-stars.svg");
  background-size: cover;
}
</style>
