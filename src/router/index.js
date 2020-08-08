import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Activities from "../views/Activities.vue";
import Gadgets from "../views/Gadgets.vue";
import Trick from "../views/Trick.vue";
import Summary from "../views/Summary.vue";
import Friendship from "../views/Friendship.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/friendship",
    name: "Friendship",
    component: Friendship
  },
  {
    path: "/activities",
    name: "Activities",
    component: Activities
  },
  {
    path: "/gadgets",
    name: "Gadgets",
    component: Gadgets
  },
  {
    path: "/trick",
    name: "Trick",
    component: Trick
  },
  {
    path: "/summary",
    name: "Summary",
    component: Summary
  }
];

const router = new VueRouter({
  routes
});

export default router;
