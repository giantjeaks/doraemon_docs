import Vue from "vue";
import VueRouter from "vue-router";

import comment from "../views/comment.vue";

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

import Story from "../views/Walkthrough/Story.vue";
import BigTree from "../views/Walkthrough/BigTree.vue";
import Carpenter2 from "../views/Walkthrough/Carpenter.vue";
import Clinic from "../views/Walkthrough/Clinic.vue";
import RecipeShop from "../views/Walkthrough/RecipeShop.vue";
import Blacksmith2 from "../views/Walkthrough/Blacksmith.vue";
import GeneralStore from "../views/Walkthrough/GeneralStore.vue";
import ChickenShop from "../views/Walkthrough/ChickenShop.vue";
import CattleShop from "../views/Walkthrough/CattleShop.vue";
import TackleShop from "../views/Walkthrough/TackleShop.vue";
import Mayor from "../views/Walkthrough/Mayor.vue";
import Harmon from "../views/Walkthrough/Harmon.vue";
import Koropokkur2 from "../views/Walkthrough/Koropokkur.vue";
import Dog from "../views/Walkthrough/Dog.vue";
import Horse from "../views/Walkthrough/Horse.vue";
import Cat from "../views/Walkthrough/Cat.vue";
import Bear from "../views/Walkthrough/Bear.vue";
import Monkey from "../views/Walkthrough/Monkey.vue";
import Rabbit from "../views/Walkthrough/Rabbit.vue";
import Squirrel from "../views/Walkthrough/Squirrel.vue";
import Gadgets from "../views/Walkthrough/Gadgets.vue";
import Cave from "../views/Walkthrough/Cave.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/comment",
    name: "comment",
    component: comment
  },
  {
    path: "/story",
    name: "Story",
    component: Story
  },
  {
    path: "/bigTree",
    name: "BigTree",
    component: BigTree
  },
  {
    path: "/carpenter2",
    name: "Carpenter2",
    component: Carpenter2
  },
  {
    path: "/clinic",
    name: "Clinic",
    component: Clinic
  },
  {
    path: "/recipeShop",
    name: "RecipeShop",
    component: RecipeShop
  },
  {
    path: "/blacksmith2",
    name: "Blacksmith2",
    component: Blacksmith2
  },
  {
    path: "/generalStore",
    name: "GeneralStore",
    component: GeneralStore
  },
  {
    path: "/chickenShop",
    name: "ChickenShop",
    component: ChickenShop
  },
  {
    path: "/cattleShop",
    name: "CattleShop",
    component: CattleShop
  },
  {
    path: "/tackleShop",
    name: "TackleShop",
    component: TackleShop
  },
  {
    path: "/mayor",
    name: "Mayor",
    component: Mayor
  },
  {
    path: "/harmon",
    name: "Harmon",
    component: Harmon
  },
  {
    path: "/koropokkur2",
    name: "Koropokkur2",
    component: Koropokkur2
  },
  {
    path: "/dog",
    name: "Dog",
    component: Dog
  },
  {
    path: "/horse",
    name: "Horse",
    component: Horse
  },
  {
    path: "/cat",
    name: "Cat",
    component: Cat
  },
  {
    path: "/bear",
    name: "Bear",
    component: Bear
  },
  {
    path: "/monkey",
    name: "Monkey",
    component: Monkey
  },
  {
    path: "/rabbit",
    name: "Rabbit",
    component: Rabbit
  },
  {
    path: "/squirrel",
    name: "Squirrel",
    component: Squirrel
  },
  {
    path: "/gadgets",
    name: "Gadgets",
    component: Gadgets
  },
  {
    path: "/cave",
    name: "Cave",
    component: Cave
  },
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
  },
  {
    path: "/koropokkur",
    name: "Koropokkur",
    component: Koropokkur
  },
  {
    path: "/villagers",
    name: "Villagers",
    component: Villagers
  },
  {
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
  },
  {
    path: "/anywhereDoor",
    name: "AnywhereDoor",
    component: AnywhereDoor
  },
  {
    path: "/passLoop",
    name: "PassLoop",
    component: PassLoop
  },
  {
    path: "/comeHereCat",
    name: "ComeHereCat",
    component: ComeHereCat
  },
  {
    path: "/inventionInventor",
    name: "InventionInventor",
    component: InventionInventor
  },
  {
    path: "/spriteSummoner",
    name: "SpriteSummoner",
    component: SpriteSummoner
  },
  {
    path: "/whateverWeatherBox",
    name: "WhateverWeatherBox",
    component: WhateverWeatherBox
  },
];

const router = new VueRouter({
  routes
});

export default router;
