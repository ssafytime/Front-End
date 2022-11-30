import { createWebHistory, createRouter } from "vue-router";
import MainPage from "@/views/MainPage";
const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/board",
    name: "Appboard",
    component: () => import("@/views/AppBoard"),
  },
  {
    path: "/bus",
    name: "Appbus",
    component: () => import("@/views/AppBus"),
  },
  {
    path: "/timetable",
    name: "AppTime",
    component: () => import("@/views/AppTime"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
