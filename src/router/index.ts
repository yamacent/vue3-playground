import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Story from "../views/Story.vue";

const routes: Array<RouteRecordRaw> = [
  {
    name: "Story",
    path: "/",
    component: Story
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
