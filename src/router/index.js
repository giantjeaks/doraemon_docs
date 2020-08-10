import Vue from "vue";
import VueRouter from "vue-router";

import Gadgets from "../views/Gadgets.vue";

import Trick from "../views/Trick.vue";

import Summary from "../views/Summary.vue";

import Stamina from "../views/basics/Stamina.vue";
import Friendship from "../views/basics/Friendship.vue";
import Animals from "../views/basics/Animals.vue";
import Villagers from "../views/basics/Villagers.vue";

import Foraging from "../views/Activities/Foraging.vue";
import Mining from "../views/Activities/Mining.vue";
import Cooking from "../views/Activities/Cooking.vue";
import Bug from "../views/Activities/Bug.vue";
import Fish from "../views/Activities/Fish.vue";
import Blacksmith from "../views/basics/shop/Blacksmith.vue";
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
    path: "/blacksmith",
    name: "Blacksmith",
    component: Blacksmith
  },
  {
    path: "/villagers",
    name: "Villagers",
    component: Villagers
  },
  {
    path: "/foraging",
    name: "Foraging",
    component: Foraging
  },
  {
    path: "/mining",
    name: "Mining",
    component: Mining
  },
  {
    path: "/cooking",
    name: "Cooking",
    component: Cooking
  },
  {
    path: "/bug",
    name: "Bug",
    component: Bug
  },
  {
    path: "/fish",
    name: "Fish",
    component: Fish
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
