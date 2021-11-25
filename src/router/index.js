import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Layout from "../layout/layout.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/:planet", component: Layout },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
