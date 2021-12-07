import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layout/layout.vue";

export const routes = [
  { path: "/planets", redirect: "/mercury" },
  { path: "/planets/:planet", component: Layout },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
