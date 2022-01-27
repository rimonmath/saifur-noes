import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
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

    component: () =>
      import("../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes

  // base: process.env.BASE_URL,
});

export default router;
