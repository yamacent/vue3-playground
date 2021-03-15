import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import StoryDetail from "../views/StoryDetail.vue";

const routes: Array<RouteRecordRaw> = [
  {
    name: "Home",
    path: "/",
    component: Home
  },
  {
    name: "Story",
    path: "/story",
    component: StoryDetail
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
