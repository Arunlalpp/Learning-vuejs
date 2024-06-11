import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/team",
      component: () => import("../views/Team.vue"),
    },
    {
      path: "/contact",
      component: () => import("../views/Contact.vue"),
    },
    {
      path: "/sample",
      component: () => import("../views/Sample.vue"),
    },
    {
      path: "/parentComponent",
      component: () => import("../views/ParentComponent.vue"),
    },
  ],
});

export default router;
