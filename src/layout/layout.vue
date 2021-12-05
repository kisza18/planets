<template>
  <div class="layout">
    <TheNav />
    <transition
      leave-active-class="animate__animated animate__fadeOut"
      mode="out-in"
    >
      <main class="max-w-7xl mx-auto" :key="$route">
        <div class="grid grid-cols-2 text-white">
          <Buttons
            :key="$route"
            @overviewBtn="contentChangeOverview()"
            @structureBtn="contentChangeStructure()"
            @surfaceBtn="contentChangeSurface()"
            class="col-span-2 order-1 md:col-span-1 md:order-3 animate__animated animate__fadeInRight"
          />
          <Images
            :key="$route.path"
            class="col-span-2 order-2 md:order-1 lg:col-span-1 lg:row-span-2"
            :planet="image"
            :content="content"
          />
          <Infos
            class="col-span-2 order-3 md:col-span-1 md:order-2"
            :name="data.name"
            :content="content"
            :source="source"
          />
          <Numbers
            class="col-span-2 order-4"
            :rotation="data.rotation"
            :revolution="data.revolution"
            :radius="data.radius"
            :temperature="data.temperature"
          />
        </div>
      </main>
    </transition>
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
      content: "",
      source: "",
      image: "",
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
      this.content = this.data.overview.content;
      this.image = this.data.images.planet;
    },
    contentChangeOverview() {
      this.content = this.data.overview.content;
      this.source = this.data.overview.source;
      this.image = this.data.images.planet;
    },
    contentChangeStructure() {
      this.content = this.data.structure.content;
      this.source = this.data.structure.source;
      this.image = this.data.images.internal;
    },
    contentChangeSurface() {
      this.content = this.data.geology.content;
      this.source = this.data.geology.source;
      this.image = this.data.images.geology;
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
    app.$functions.activeBtn();
  },
};
</script>

<style scoped>
.layout {
  min-height: 100vh;
  background: hsl(240, 67%, 8%);
  background-image: url("../images/background.jpg");
  background-size: auto;
}
</style>
