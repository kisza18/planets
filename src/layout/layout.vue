<template>
  <div class="layout">
    <TheNav />
    <main class="max-w-7xl mx-auto">
      <div class="grid grid-cols-2 text-white">
        <Buttons class="col-span-2 order-1 md:col-span-1 md:order-3" />
        <Images
          class="col-span-2 order-2 md:order-1 lg:col-span-1 lg:row-span-2"
          :planet="data.images.planet"
          :internal="data.images.internal"
          :geology="data.images.geology"
        />
        <Infos
          class="col-span-2 order-3 md:col-span-1 md:order-2"
          :name="data.name"
          :content="data.overview.content"
          :source="data.overview.source"
        />
        <transition
          mode="out-in"
          enter-active-class="animate__backInUp"
          leave-active-class="animate__backOutDown"
        >
          <Numbers
            class="col-span-2 order-4"
            :rotation="data.rotation"
            :revolution="data.revolution"
            :radius="data.radius"
            :temperature="data.temperature"
          />
        </transition>
      </div>
    </main>
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
  background-image: url("../images/background.jpg");
  background-size: cover;
}
</style>
