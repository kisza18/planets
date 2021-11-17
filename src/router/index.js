import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Earth from "../views/Earth.vue";
import Jupiter from "../views/Jupiter.vue";
import Mars from "../views/Mars.vue";
import Mercury from "../views/Mercury.vue";
import Neptune from "../views/Neptune.vue";
import Saturn from "../views/Saturn.vue";
import Uranus from "../views/Uranus.vue";
import Venus from "../views/Venus.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/earth", component: Earth },
  { path: "/jupiter", component: Jupiter },
  { path: "/mars", component: Mars },
  { path: "/mercury", component: Mercury },
  { path: "/neptune", component: Neptune },
  { path: "/saturn", component: Saturn },
  { path: "/uranus", component: Uranus },
  { path: "/venus", component: Venus },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
