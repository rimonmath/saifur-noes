import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // redirect: "/dashboard"
  },
  {
    path: "/revision-notes/:type",
    name: "RevisionNotes",
    component: () =>
      import("../views/RevNotes.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes

  // base: process.env.BASE_URL,
});

export default router;
