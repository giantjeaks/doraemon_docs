<template>
  <div class="Villagers">
    <v-row justify="center">
      <v-col cols="12">
        <h1>ชาวบ้าน และ ของขวัญ</h1>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-simple-table dark>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  <h3>ชาวบ้าน</h3>
                </th>
                <th class="text-left">
                  <h3>โปรดปราน</h3>
                </th>
                <th class="text-left">
                  <h3>ชอบ</h3>
                </th>
                <th class="text-left">
                  <h3>ไม่ชอบ</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in Villagers" :key="item.name">
                <td>
                  <v-row justify="center">
                    <v-col
                      cols="12"
                      style="max-width: none;padding-bottom: 0px;"
                    >
                      <v-img
                        style="max-width: none;"
                        width="50px"
                        :src="item.img"
                      ></v-img>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="12" style="max-width: none;padding-top: 0px;">
                      {{ item.Villager }}
                    </v-col>
                  </v-row>
                </td>
                <td>{{ item.Love }}</td>
                <td><span v-for=" (l,index) in item.Like" :key="index">{{ l }}<br/></span></td>
                <td><span v-for=" (j,index) in item.Dislike" :key="index">{{ j }}<br/></span></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Villagers",
  data() {
    return {
      Villagers: [
        {
          img: "https://i.imgur.com/ozbz98T.png",
          Villager: "โดเรม่อน",
          Love: "Dorayaki",
          Like: ["Udon","Sunflower","Watermelon","Cabbage White"],
          Dislike: ["Weed"],
        },
        {
          img: "https://i.imgur.com/ZO2gHjs.png",
          Villager: "ชิซูกะ",
          Love: "Baked Potato",
          Like: ["Cheesecake","Paris Daisy","Yam","Sweet Potato"],
          Dislike: ["Centipede","Yucky Food"],
        },
        {
          img: "https://i.imgur.com/D9maui2.png",
          Villager: "ไจแอนท์",
          Love: "Curry",
          Like: ["Stew","Green Pepper","Migratory Locust","Normal Wood"],
          Dislike: ["Yucky Food"],
        },
        {
          img: "https://i.imgur.com/7VRGz88.png",
          Villager: "ซึเนโอะ",
          Love: "Marlin Steak",
          Like: ["Truffled Egg","Melon","Truffle","Diamond"],
          Dislike: ["Corn","Yucky Food"],
        },
        {
          img: "https://i.imgur.com/0PG0ieK.png",
          Villager: "ฮาม่อน",
          Love: "Tempura",
          Like: ["Chikuzenni","Potato","Sunflower","Fodder"],
          Dislike: ["Weed"],
        },
        {
          img: "https://i.imgur.com/QXXdCK2.png",
          Villager: "ราวี่",
          Love: "Namasu",
          Like: ["Autumn Salad","Pink","Burdock","Fertilizer"],
          Dislike: ["Weed"],
        },
        {
          img: "https://i.imgur.com/TqzSxsf.png",
          Villager: "วีร่า",
          Love: "Compote",
          Like: ["Cheesecake","Paris Daisy","Yam","Sweet Potato"],
          Dislike: ["Yucky Food"],
        },
        {
          img: "https://i.imgur.com/43IHxf3.png",
          Villager: "เฮเลน",
          Love: "Walnut Bread",
          Like: ["Caramel Almond","Goldfish","Strawberry","Egg"],
          Dislike: ["Yucky Food"],
        },
        {
          img: "https://i.imgur.com/LKT7f6k.png",
          Villager: "เฮนสัน",
          Love: "Fritter",
          Like: ["Gratin","Crab","Horse Mackerel","Cheese"],
          Dislike: ["Yucky Food"],
        },
        {
          img: "https://i.imgur.com/GRyDZNC.png",
          Villager: "คูเปอร์",
          Love: "Horned Atlas",
          Like: ["Strawberry Milk","Honey Bee","Mantis","Mayonnaise"],
          Dislike: ["Wharf Roach","Yucky Food"],
        },
        {
          img: "https://i.imgur.com/qWTfItD.png",
          Villager: "ธอรัส",
          Love: "Amberjack Daikon",
          Like: ["Baked Beans","Pumpkin","Plum","Milk"],
          Dislike: ["Yucky Food"],
        },
        {
          img: "https://i.imgur.com/smB2a5V.png",
          Villager: "เอรี่ส์",
          Love: "Boiled Carp",
          Like: ["Palbochae","Pea","Iris","Yarn"],
          Dislike: ["Yucky Food"],
        },
        {
          img: "https://i.imgur.com/p1pz8GO.png",
          Villager: "เรม",
          Love: "Pudding",
          Like: ["Ebi Chili","Morning Glory","Dandelion","Wool"],
          Dislike: ["Yucky Food"],
        },
        {
          img: "https://i.imgur.com/KnBVI7G.png",
          Villager: "เพนท์",
          Love: "Udon",
          Like: ["Oden","Watermelon","Royal Fern","Hard Wood"],
          Dislike: ["Yucky Food"],
        },
        {
          img: "https://i.imgur.com/0zWMlkT.png",
          Villager: "สมิธตี้",
          Love: "Seared Bonito",
          Like: ["Namasu","Daikon","Ginger","Copper Ore"],
          Dislike: ["Yucky Food"],
        },
        {
          img: "https://i.imgur.com/Wrdxj34.png",
          Villager: "เบลค",
          Love: "Ajillo",
          Like: ["Carpaccio","Lily","Cucumber","Iron Ore"],
          Dislike: ["Yucky Food"],
        },
        {
          img: "https://i.imgur.com/zXfBmc5.png",
          Villager: "เจนนี่",
          Love: "Carpaccio",
          Like: ["Spring Salad","Carnation","Red Saxifrage","Wheat"],
          Dislike: ["Yucky Food"],
        },
        {
          img: "https://i.imgur.com/6Lsmj2j.png",
          Villager: "มาร์ค",
          Love: "Pot-au-feu",
          Like: ["Gratin","Firefly","Cauliflower","Ant"],
          Dislike: ["Yucky Food"],
        },
        {
          img: "https://i.imgur.com/nnHSnQB.png",
          Villager: "เจมม่า",
          Love: "Apple Tart",
          Like: ["Bagna Càuda","Paris Daisy","Carrot","Pudding"],
          Dislike: ["Yucky Food"],
        },
        {
          img: "https://i.imgur.com/u7Gg0jp.png",
          Villager: "ไรอัม",
          Love: "Sashimi Boat",
          Like: ["Truffled Egg","Daikon","Matsutake","Ruby"],
          Dislike: ["Weed"],
        },
        {
          img: "https://i.imgur.com/ae937aF.png",
          Villager: "รีเจส",
          Love: "Strange food",
          Like: ["Stir-fry","Shepherd’s Purse","Lily","Spice"],
          Dislike: ["Yucky Food"],
        },
        {
          img: "https://i.imgur.com/u5fFnNZ.png",
          Villager: "เซเรน่า",
          Love: "Shortcake",
          Like: ["Terrine","Aloe","Red Rose","Shepherd’s purse"],
          Dislike: ["Weed"],
        },
        {
          img: "https://i.imgur.com/euK3t3D.png",
          Villager: "คาเฟ่ต์",
          Love: "Sandwich",
          Like: ["Strange Food","Pumpkin","Apple","Bean Paste"],
          Dislike: ["Weed"],
        },
        {
          img: "https://i.imgur.com/UTy82sX.png",
          Villager: "เอเรีย",
          Love: "Spring Salad",
          Like: ["Sauteed Salad","Lily","Melon","Flour"],
          Dislike: ["Weed"],
        },
        {
          img: "https://i.imgur.com/2j0uBy8.png",
          Villager: "แซนดี้",
          Love: "Marlin",
          Like: ["Fried Cheese","Hibiscus","Squid","Groundbait"],
          Dislike: ["Yucky Food"],
        },
        {
          img: "https://i.imgur.com/OSxaiak.png",
          Villager: "สการ์เล็ต",
          Love: "Junk",
          Like: ["Apple Pie","Carnation","Bell Pepper","Wool"],
          Dislike: ["Yucky Food"],
        },
        {
          img: "https://i.imgur.com/EYCDCuz.png",
          Villager: "สกาย",
          Love: "Junk",
          Like: ["Summer Salad","Tomato","Iris","Fodder"],
          Dislike: ["Yucky Food"],
        },
        {
          img: "https://i.imgur.com/znlUcNq.png",
          Villager: "เจด",
          Love: "Junk",
          Like: ["Green Potage","Spinach","Bell Cricket","Soft Woord"],
          Dislike: ["Yucky Food"],
        },
        {
          img: "https://i.imgur.com/3bMN5It.png",
          Villager: "แอมเบอร์",
          Love: "Junk",
          Like: ["Sole Meunière","Pumpkin","Horse Tail","Butter"],
          Dislike: ["Yucky Food"],
        },
        {
          img: "https://i.imgur.com/WJ2viVe.png",
          Villager: "ไวโอเล็ต",
          Love: "Junk",
          Like: ["Quiche","Campanula","Bardock","Iron Ore"],
          Dislike: ["Yucky Food"],
        },
        {
          img: "https://i.imgur.com/k9ehOcp.png",
          Villager: "หมี",
          Love: "Cherry Salmon, Salmon",
          Like: ["Bamboo Shoot","Watermelon","Walnut","Bee’s Nest"],
          Dislike: ["Weed"],
        },
        {
          img: "https://i.imgur.com/vjIxjjg.png",
          Villager: "กระต่าย",
          Love: "Corn, Carrot",
          Like: ["Dandelion","Pumpkin","Apple","Cabbage"],
          Dislike: ["Weed"],
        },
        {
          img: "https://i.imgur.com/yxWge1G.png",
          Villager: "กระรอก",
          Love: "Almond, Walnut",
          Like: ["Potato","Pumpkin","Spinach","Pea"],
          Dislike: ["Weed"],
        },
        {
          img: "https://i.imgur.com/81Hdns2.png",
          Villager: "ลูกลิง",
          Love: "Potato, Apple",
          Like: ["Turnip","Corn","Yam","Watermelon"],
          Dislike: ["Weed"],
        }
      ],
    };
  },
};
</script>

<style></style>
