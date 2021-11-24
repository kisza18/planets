<template>
  <div class="layout">
    <the-navbar></the-navbar>
    <Buttons />
    <h1 class="text-white">{{ data.name }}</h1>
    <Images />
    <Infos />
    <Numbers />
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";
import Buttons from "../components/Buttons.vue";
import Images from "../components/Images.vue";
import Infos from "../components/Infos.vue";
import Numbers from "../components/Numbers.vue";

export default {
  data() {
    return {
      planet: "",
      data: [],
    };
  },
  components: {
    TheNavbar,
    Buttons,
    Images,
    Infos,
    Numbers,
  },
  methods: {
    loadRoute(route) {
      this.planet = route.params.planet;
    },
    loadData(planet) {
      this.data = this.$json[planet];
    },
  },
  created() {
    this.loadRoute(this.$route);
    this.loadData(this.planet);
  },
  watch: {
    $route(newRoute) {
      this.loadRoute(newRoute);
      this.loadData(newRoute.params.planet);
    },
  },
};
</script>

<style scoped>
.layout {
  min-height: 100vh;
  background: hsl(240, 67%, 8%);
  background-image: url("../images/background-stars.svg");
  background-size: cover;
}
</style>
