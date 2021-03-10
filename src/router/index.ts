import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Story from "../views/Story.vue";

const routes: Array<RouteRecordRaw> = [
  {
    name: "Home",
    path: "/",
    component: Home
  },
  {
    name: "Story",
    path: "/story",
    component: Story
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
