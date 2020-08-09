import Vue from "vue";
import VueRouter from "vue-router";
import Stamina from "../views/Stamina.vue";
import Activities from "../views/Activities.vue";
import Gadgets from "../views/Gadgets.vue";
import Trick from "../views/Trick.vue";
import Summary from "../views/Summary.vue";
import Friendship from "../views/Friendship.vue";
import Animals from "../views/Animals.vue";
import Villagers from "../views/Villagers.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/stamina",
    name: "Stamina",
    component: Stamina
  },
  {
    path: "/friendship",
    name: "Friendship",
    component: Friendship
  },
  {
    path: "/animals",
    name: "animals",
    component: Animals
  },
  {
    path: "/villagers",
    name: "Villagers",
    component: Villagers
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
