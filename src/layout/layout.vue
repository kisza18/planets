<template>
  <div class="layout">
    <TheNav />
    <Buttons />
    <Images
      :planet="data.images.planet"
      :internal="data.images.internal"
      :geology="data.images.geology"
    />
    <Infos
      :name="data.name"
      :content="data.overview.content"
      :source="data.overview.source"
    />
    <Numbers
      :rotation="data.rotation"
      :revolution="data.revolution"
      :radius="data.radius"
      :temperature="data.temperature"
    />
  </div>
</template>

<script>
import TheNav from "../components/TheNavbar.vue";
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
    TheNav,
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
  mounted() {
    let app = this;
    app.$functions.switchContent(app);
    app.$functions.activeBtn();
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
