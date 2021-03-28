import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import StoryDetail from "../views/StoryDetail.vue";
import User from "../views/User.vue";

const routes: Array<RouteRecordRaw> = [
  {
    name: "Home",
    path: "/",
    component: Home
  },
  {
    name: "StoryDetail",
    path: "/story",
    component: StoryDetail
  },
  {
    name: "User",
    path: "/users/:userId",
    component: User
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
