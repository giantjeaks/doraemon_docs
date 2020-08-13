import Vue from "vue";
import VueRouter from "vue-router";

import SuperGloves from "../views/SecretGadgets/SuperGloves.vue";
import AnywhereDoor from "../views/SecretGadgets/AnywhereDoor.vue";
import PassLoop from "../views/SecretGadgets/PassLoop.vue";
import ComeHereCat from "../views/SecretGadgets/ComeHereCat.vue";
import InventionInventor from "../views/SecretGadgets/InventionInventor.vue";
import SpriteSummoner from "../views/SecretGadgets/SpriteSummoner.vue";
import WhateverWeatherBox from "../views/SecretGadgets/WhateverWeatherBox.vue";

import Foraging from "../views/Activities/Foraging.vue";
import Mining from "../views/Activities/Mining.vue";
import Cooking from "../views/Activities/Cooking.vue";
import Bug from "../views/Activities/Bug.vue";
import Fish from "../views/Activities/Fish.vue";

import Stamina from "../views/basics/Stamina.vue";
import Friendship from "../views/basics/Friendship.vue";
import Animals from "../views/basics/Animals.vue";
import Villagers from "../views/basics/Villagers.vue";
import Crops from "../views/basics/Crops.vue";

import Stores from "../views/basics/shop/Stores.vue";
import Blacksmith from "../views/basics/shop/Blacksmith.vue";
import Carpenter from "../views/basics/shop/Carpenter.vue";
import Koropokkur from "../views/basics/shop/Koropokkur.vue";
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
    path: "/stores",
    name: "Stores",
    component: Stores
  },
  {
    path: "/blacksmith",
    name: "Blacksmith",
    component: Blacksmith
  },
  {
    path: "/carpenter",
    name: "Carpenter",
    component: Carpenter
  },{
    path: "/koropokkur",
    name: "Koropokkur",
    component: Koropokkur
  },
  {
    path: "/villagers",
    name: "Villagers",
    component: Villagers
  },{
    path: "/crops",
    name: "Crops",
    component: Crops
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
    path: "/superGloves",
    name: "SuperGloves",
    component: SuperGloves
  },{
    path: "/anywhereDoor",
    name: "AnywhereDoor",
    component: AnywhereDoor
  },{
    path: "/passLoop",
    name: "PassLoop",
    component: PassLoop
  },{
    path: "/comeHereCat",
    name: "ComeHereCat",
    component: ComeHereCat
  },{
    path: "/inventionInventor",
    name: "InventionInventor",
    component: InventionInventor
  },{
    path: "/spriteSummoner",
    name: "SpriteSummoner",
    component: SpriteSummoner
  },{
    path: "/whateverWeatherBox",
    name: "WhateverWeatherBox",
    component: WhateverWeatherBox
  },
];

const router = new VueRouter({
  routes
});

export default router;
