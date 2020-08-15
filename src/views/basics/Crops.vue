<template>
  <div class="Crops">
    <v-row justify="center">
      <v-col cols="12">
        <h1>การเก็บเกี่ยว</h1>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <div v-for="(table,i) in tables" :key="i">
      <v-row>
        <!-- <v-col cols="1">
          <v-img width="35px" :src="table[2]"></v-img>
        </v-col> -->
        <v-col cols="11">
          <h2>{{table[1]}}</h2>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12">
          <v-simple-table dark>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    <h3>เมล็ดพันธฺู์</h3>
                  </th>
                  <th class="text-left">
                    <h3>เวลาในการเติบโต (วัน)</h3>
                  </th>
                  <th class="text-left">
                    <h3>ราคาซื้อ</h3>
                  </th>
                  <th class="text-left">
                    <h3>เก็บได้หลายครั้ง</h3>
                  </th>
                  <th class="text-left">
                    <h3>เงื่อนไข</h3>
                  </th>
                  <th class="text-left">
                    <h3>0.5 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>1 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>1.5 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>2 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>2.5 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>3 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>3.5 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>4 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>4.5 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>5 ★</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item) in datafortable(table[0])" :key="item.name">
                  <td>
                    <v-img width="50px" :src="item.img"></v-img>
                    {{ item.Seed }}
                  </td>
                  <td>{{ item.Growth }}</td>
                  <td>{{ item.Buying }}</td>
                  <td><v-icon :color="item.Harvest=='Yes'? 'green':'red'">{{item.Harvest=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon>{{ item.Harvest }}</td>
                  <td>{{ item.Unlock }}</td>

                  <td>{{ item.S05 }}</td>
                  <td>{{ item.S1 }}</td>
                  <td>{{ item.S15 }}</td>
                  <td>{{ item.S2 }}</td>
                  <td>{{ item.S25 }}</td>
                  <td>{{ item.S3 }}</td>
                  <td>{{ item.S35 }}</td>
                  <td>{{ item.S4 }}</td>
                  <td>{{ item.S45 }}</td>
                  <td>{{ item.S5 }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Crops",
  computed: {},
  data() {
    return {
      tables: [
        ["Spring", "🌺 ฤดูใบไม้ผลิ","https://i.imgur.com/YX0nOCB.png"],
        ["Summer", "🌞 ฤดูร้อน","https://i.imgur.com/mQxODft.png"],
        ["Autumn", "🍂 ฤดูใบไม้ร่าง","https://i.imgur.com/UaODini.png"],
        ["Winter", "⛄ ฤดูหนาว","https://i.imgur.com/sTbnGEp.png"],
        ["All", "☁️ ทุกฤดู","https://i.imgur.com/CQ0GUAD.png"]
      ],
      datas: [
        {
          name: "Spring",
          data: [
            {
              img: require("../../assets/Crops/Turnip.jpg"),
              Seed: "หัวผักกาด",
              Growth: "5",
              Buying: "30 G",
              Harvest: "No",
              Unlock: "-",
              S05: "110 G",
              S1: "125 G",
              S15: "142 G",
              S2: "161 G",
              S25: "182 G",
              S3: "206 G",
              S35: "233 G",
              S4: "264 G",
              S45: "299 G",
              S5: "338 G"
            },
            {
              img: require("../../assets/Crops/Potato.jpg"),
              Seed: "มันฝรั่ง",
              Growth: "8",
              Buying: "50 G",
              Harvest: "No",
              Unlock: "-",
              S05: "210 G",
              S1: "238 G",
              S15: "269 G",
              S2: "304 G",
              S25: "344 G",
              S3: "389 G",
              S35: "440 G",
              S4: "498 G",
              S45: "563 G",
              S5: "637 G"
            },
            {
              img: require("../../assets/Crops/Cabbage.jpg"),
              Seed: "กะหล่ำปลี",
              Growth: "13",
              Buying: "90 G",
              Harvest: "Yes",
              Unlock: "Year 2",
              S05: "120 G",
              S1: "136 G",
              S15: "154 G",
              S2: "175 G",
              S25: "198 G",
              S3: "224 G",
              S35: "254 G",
              S4: "288 G",
              S45: "326 G",
              S5: "369 G"
            },
            {
              img: require("../../assets/Crops/Cucumber.jpg"),
              Seed: "แตงกวา",
              Growth: "9",
              Buying: "80 G",
              Harvest: "Yes",
              Unlock: "-",
              S05: "210 G",
              S1: "238 G",
              S15: "269 G",
              S2: "304 G",
              S25: "344 G",
              S3: "389 G",
              S35: "440 G",
              S4: "498 G",
              S45: "563 G",
              S5: "637 G"
            },
            {
              img: require("../../assets/Crops/Strawberry.jpg"),
              Seed: "สตรอว์เบอร์รี่",
              Growth: "15",
              Buying: "150 G",
              Harvest: "Yes",
              Unlock: "Year 2",
              S05: "240 G",
              S1: "272 G",
              S15: "308 G",
              S2: "349 G",
              S25: "395 G",
              S3: "447 G",
              S35: "506 G",
              S4: "572 G",
              S45: "647 G",
              S5: "732 G"
            },
            {
              img: require("../../assets/Crops/Cauliflower.jpg"),
              Seed: "ดอกกะหล่ำ",
              Growth: "12",
              Buying: "80 G",
              Harvest: "No",
              Unlock: "Year 2",
              S05: "360 G",
              S1: "407 G",
              S15: "460 G",
              S2: "520 G",
              S25: "588 G",
              S3: "665 G",
              S35: "752 G",
              S4: "850 G",
              S45: "961 G",
              S5: "1086 G"
            },
            {
              img: require("../../assets/Crops/Pea.jpg"),
              Seed: "ถั่ว",
              Growth: "10",
              Buying: "80 G",
              Harvest: "Yes",
              Unlock: "Year 2",
              S05: "130 G",
              S1: "147 G",
              S15: "167 G",
              S2: "189 G",
              S25: "214 G",
              S3: "242 G",
              S35: "274 G",
              S4: "310 G",
              S45: "351 G",
              S5: "397 G"
            },
            {
              img: require("../../assets/Crops/ParisDaisy.jpg"),
              Seed: "ดอกปารีส เดซี่",
              Growth: "7",
              Buying: "40 G",
              Harvest: "No",
              Unlock: "-",
              S05: "170 G",
              S1: "193 G",
              S15: "219 G",
              S2: "248 G",
              S25: "281 G",
              S3: "318 G",
              S35: "360 G",
              S4: "407 G",
              S45: "460 G",
              S5: "520 G"
            },
            {
              img: require("../../assets/Crops/Campanula.jpg"),
              Seed: "ดอกระฆัง",
              Growth: "11",
              Buying: "70 G",
              Harvest: "No",
              Unlock: "Year 2",
              S05: "320 G",
              S1: "362 G",
              S15: "410 G",
              S2: "464 G",
              S25: "525 G",
              S3: "594 G",
              S35: "672 G",
              S4: "760 G",
              S45: "859 G",
              S5: "971 G"
            },
            {
              img: require("../../assets/Crops/Carnation.jpg"),
              Seed: "ดอกคาเนชั่น",
              Growth: "12",
              Buying: "80 G",
              Harvest: "No",
              Unlock: "Year 2",
              S05: "360 G",
              S1: "407 G",
              S15: "460 G",
              S2: "520 G",
              S25: "588 G",
              S3: "665 G",
              S35: "752 G",
              S4: "850 G",
              S45: "961 G",
              S5: "1086 G"
            },
          ]
        },
        {
          name: "Summer",
          data: [
            {
              img: require("../../assets/Crops/Corn.jpg"),
              Seed: "ข้าวโพด",
              Growth: "14",
              Buying: "140 G",
              Harvest: "Yes",
              Unlock: "-",
              S05: "220 G",
              S1: "249 G",
              S15: "282 G",
              S2: "319 G",
              S25: "361 G",
              S3: "361 G",
              S35: "462 G",
              S4: "523 G",
              S45: "591 G",
              S5: "668 G"
            },
            {
              img: require("../../assets/Crops/Onion.jpg"),
              Seed: "หัวหอม",
              Growth: "6",
              Buying: "30 G",
              Harvest: "No",
              Unlock: "Year 2",
              S05: "140 G",
              S1: "159 G",
              S15: "180 G",
              S2: "204 G",
              S25: "231 G",
              S3: "262 G",
              S35: "297 G",
              S4: "336 G",
              S45: "380 G",
              S5: "430 G"
            },
            {
              img: require("../../assets/Crops/Pumpkin.jpg"),
              Seed: "ฟักทอง",
              Growth: "4",
              Buying: "20 G",
              Harvest: "No",
              Unlock: "Year 2",
              S05: "90 G",
              S1: "102 G",
              S15: "116 G",
              S2: "132 G",
              S25: "150 G",
              S3: "170 G",
              S35: "193 G",
              S4: "219 G",
              S45: "248 G",
              S5: "281 G"
            },
            {
              img: require("../../assets/Crops/Watermelon.jpg"),
              Seed: "แตงโม",
              Growth: "7",
              Buying: "40 G",
              Harvest: "No",
              Unlock: "Year 2",
              S05: "170 G",
              S1: "193 G",
              S15: "219 G",
              S2: "248 G",
              S25: "281 G",
              S3: "318 G",
              S35: "360 G",
              S4: "407 G",
              S45: "460 G",
              S5: "520 G"
            },
            {
              img: require("../../assets/Crops/Tomato.jpg"),
              Seed: "มะเขือเทศ",
              Growth: "12",
              Buying: "110 G",
              Harvest: "Yes",
              Unlock: "-",
              S05: "180 G",
              S1: "204 G",
              S15: "231 G",
              S2: "262 G",
              S25: "297 G",
              S3: "336 G",
              S35: "380 G",
              S4: "430 G",
              S45: "486 G",
              S5: "550 G"
            },
            {
              img: require("../../assets/Crops/Melon.jpg"),
              Seed: "เมล่อน",
              Growth: "18",
              Buying: "140 G",
              Harvest: "Yes",
              Unlock: "Year 2",
              S05: "660 G",
              S1: "746 G",
              S15: "843 G",
              S2: "953 G",
              S25: "1077 G",
              S3: "1218 G",
              S35: "1377 G",
              S4: "1557 G",
              S45: "1760 G",
              S5: "1989 G"
            },
            {
              img: require("../../assets/Crops/Pineapple.jpg"),
              Seed: "สัปปะรด",
              Growth: "13",
              Buying: "100 G",
              Harvest: "Yes",
              Unlock: "Year 2",
              S05: "250 G",
              S1: "283 G",
              S15: "320 G",
              S2: "362 G",
              S25: "410 G",
              S3: "464 G",
              S35: "525 G",
              S4: "594 G",
              S45: "672 G",
              S5: "760 G"
            },
            {
              img: require("../../assets/Crops/RedPepper.jpg"),
              Seed: "พริกหยวกแดง",
              Growth: "10",
              Buying: "80 G",
              Harvest: "Yes",
              Unlock: "Year 2",
              S05: "130 G",
              S1: "147 G",
              S15: "167 G",
              S2: "189 G",
              S25: "214 G",
              S3: "242 G",
              S35: "274 G",
              S4: "310 G",
              S45: "351 G",
              S5: "397 G"
            },
            {
              img: require("../../assets/Crops/Sunflower.jpg"),
              Seed: "ดอกทานตะวัน",
              Growth: "12",
              Buying: "80 G",
              Harvest: "No",
              Unlock: "-",
              S05: "360 G",
              S1: "407 G",
              S15: "460 G",
              S2: "520 G",
              S25: "588 G",
              S3: "665 G",
              S35: "752 G",
              S4: "850 G",
              S45: "961 G",
              S5: "1086 G"
            },
            {
              img: require("../../assets/Crops/MorningGlory.jpg"),
              Seed: "ดอกผักบุ้งฝรั่ง",
              Growth: "7",
              Buying: "40 G",
              Harvest: "No",
              Unlock: "Year 2",
              S05: "170 G",
              S1: "193 G",
              S15: "219 G",
              S2: "248 G",
              S25: "281 G",
              S3: "318 G",
              S35: "360 G",
              S4: "407 G",
              S45: "460 G",
              S5: "520 G"
            },
            {
              img: require("../../assets/Crops/Lily.jpg"),
              Seed: "ลิลลี่",
              Growth: "11",
              Buying: "70 G",
              Harvest: "No",
              Unlock: "Year 2",
              S05: "320 G",
              S1: "362 G",
              S15: "410 G",
              S2: "464 G",
              S25: "525 G",
              S3: "594 G",
              S35: "672 G",
              S4: "760 G",
              S45: "859 G",
              S5: "971 G"
            },
            {
              img: require("../../assets/Crops/Hibiscus.jpg"),
              Seed: "ชบา",
              Growth: "7",
              Buying: "40 G",
              Harvest: "No",
              Unlock: "Year 2",
              S05: "170 G",
              S1: "193 G",
              S15: "219 G",
              S2: "248 G",
              S25: "281 G",
              S3: "318 G",
              S35: "360 G",
              S4: "407 G",
              S45: "460 G",
              S5: "520 G"
            },
            {
              img: require("../../assets/Crops/RedRose.jpg"),
              Seed: "กุหลาบแดง",
              Growth: "9",
              Buying: "50 G",
              Harvest: "No",
              Unlock: "Year 2",
              S05: "240 G",
              S1: "272 G",
              S15: "308 G",
              S2: "349 G",
              S25: "395 G",
              S3: "447 G",
              S35: "506 G",
              S4: "572 G",
              S45: "647 G",
              S5: "732 G"
            }
          ]
        },
        {
          name: "Autumn",
          data: [
            {
              img: require("../../assets/Crops/Burdock.jpg"),
              Seed: "โกโบ้",
              Growth: "9",
              Buying: "50 G",
              Harvest: "No",
              Unlock: "Year 2",
              S05: "240 G",
              S1: "272 G",
              S15: "308 G",
              S2: "349 G",
              S25: "395 G",
              S3: "447 G",
              S35: "506 G",
              S4: "572 G",
              S45: "647 G",
              S5: "732 G"
            },
            {
              img: require("../../assets/Crops/Carrot.jpg"),
              Seed: "แครอท",
              Growth: "12",
              Buying: "80 G",
              Harvest: "No",
              Unlock: "-",
              S05: "360 G",
              S1: "407 G",
              S15: "460 G",
              S2: "520 G",
              S25: "588 G",
              S3: "665 G",
              S35: "752 G",
              S4: "850 G",
              S45: "961 G",
              S5: "1086 G"
            },
             {
              img: require("../../assets/Crops/Yam.jpg"),
              Seed: "มันหวาน",
              Growth: "5",
              Buying: "40 G",
              Harvest: "Yes",
              Unlock: "-",
              S05: "60 G",
              S1: "68 G",
              S15: "77 G",
              S2: "88 G",
              S25: "100 G",
              S3: "113 G",
              S35: "128 G",
              S4: "145 G",
              S45: "164 G",
              S5: "186 G"
            },
             {
              img: require("../../assets/Crops/Spinach.jpg"),
              Seed: "ผักโขม",
              Growth: "5",
              Buying: "30 G",
              Harvest: "No",
              Unlock: "Year 2",
              S05: "110 G",
              S1: "125 G",
              S15: "142 G",
              S2: "161 G",
              S25: "182 G",
              S3: "206 G",
              S35: "233 G",
              S4: "264 G",
              S45: "299 G",
              S5: "338 G"
            },
             {
              img: require("../../assets/Crops/Eggplant.jpg"),
              Seed: "มะเขือม่วง",
              Growth: "11",
              Buying: "70 G",
              Harvest: "No",
              Unlock: "Year 2",
              S05: "320 G",
              S1: "362 G",
              S15: "410 G",
              S2: "464 G",
              S25: "525 G",
              S3: "594 G",
              S35: "672 G",
              S4: "760 G",
              S45: "859 G",
              S5: "971 G"
            },
             {
              img: require("../../assets/Crops/GreenPepper.jpg"),
              Seed: "พริกหยวกเขียว",
              Growth: "12",
              Buying: "90 G",
              Harvest: "Yes",
              Unlock: "Year 2",
              S05: "140 G",
              S1: "159 G",
              S15: "180 G",
              S2: "204 G",
              S25: "231 G",
              S3: "262 G",
              S35: "297 G",
              S4: "336 G",
              S45: "380 G",
              S5: "430 G"
            },
             {
              img: require("../../assets/Crops/Pink.jpg"),
              Seed: "ดอกพิงค์",
              Growth: "8",
              Buying: "50 G",
              Harvest: "No",
              Unlock: "-",
              S05: "210 G",
              S1: "238 G",
              S15: "269 G",
              S2: "304 G",
              S25: "344 G",
              S3: "389 G",
              S35: "440 G",
              S4: "498 G",
              S45: "563 G",
              S5: "637 G"
            },
             {
              img: require("../../assets/Crops/Gerbera.jpg"),
              Seed: "เยอบีร่า",
              Growth: "14",
              Buying: "90 G",
              Harvest: "No",
              Unlock: "Year 2",
              S05: "450 G",
              S1: "509 G",
              S15: "576 G",
              S2: "651 G",
              S25: "736 G",
              S3: "832 G",
              S35: "941 G",
              S4: "1064 G",
              S45: "1203 G",
              S5: "1360 G"
            },
          ]
        },
        {
          name: "Winter",
          data: [
            {
              img: require("../../assets/Crops/Daikon.jpg"),
              Seed: "หัวไชเท้า",
              Growth: "4",
              Buying: "20 G",
              Harvest: "No",
              Unlock: "-",
              S05: "90 G",
              S1: "102 G",
              S15: "116 G",
              S2: "132 G",
              S25: "150 G",
              S3: "170 G",
              S35: "193 G",
              S4: "219 G",
              S45: "248 G",
              S5: "281 G"
            },
            {
              img: require("../../assets/Crops/NapaCabbage.jpg"),
              Seed: "ผักกาดขาว",
              Growth: "12",
              Buying: "80 G",
              Harvest: "No",
              Unlock: "Year 2",
              S05: "360 G",
              S1: "407 G",
              S15: "460 G",
              S2: "520 G",
              S25: "588 G",
              S3: "665 G",
              S35: "752 G",
              S4: "850 G",
              S45: "961 G",
              S5: "1086 G"
            },
            {
              img: require("../../assets/Crops/Broccoli.jpg"),
              Seed: "บล็อคโคลี่",
              Growth: "8",
              Buying: "60 G",
              Harvest: "Yes",
              Unlock: "Year 2",
              S05: "90 G",
              S1: "102 G",
              S15: "116 G",
              S2: "132 G",
              S25: "150 G",
              S3: "170 G",
              S35: "193 G",
              S4: "219 G",
              S45: "248 G",
              S5: "281 G"
            },
            {
              img: require("../../assets/Crops/SnowDrop.jpg"),
              Seed: "สโนว์ดรอป",
              Growth: "9",
              Buying: "50 G",
              Harvest: "No",
              Unlock: "-",
              S05: "240 G",
              S1: "272 G",
              S15: "308 G",
              S2: "349 G",
              S25: "395 G",
              S3: "447 G",
              S35: "506 G",
              S4: "572 G",
              S45: "647 G",
              S5: "732 G"
            },
            
          ]
        },
        {
          name: "All",
          data: [
            {
              img: require("../../assets/Crops/Grass.jpg"),
              Seed: "หญ้าแห้ง",
              Growth: "10",
              Buying: "30 G",
              Harvest: "No",
              Unlock: "-",
              S05: "-",
              S1: "-",
              S15: "-",
              S2: "-",
              S25: "-",
              S3: "-",
              S35: "-",
              S4: "-",
              S45: "-",
              S5: "-"
            },
            {
              img: require("../../assets/Crops/Wheat.jpg"),
              Seed: "ข้าวสาลี",
              Growth: "15",
              Buying: "50 G",
              Harvest: "Yes",
              Unlock: "-",
              S05: "50 G",
              S1: "57 G",
              S15: "65 G",
              S2: "74 G",
              S25: "84 G",
              S3: "95 G",
              S35: "108 G",
              S4: "123 G",
              S45: "139 G",
              S5: "158 G"
            },
          ]
        },
      ]
    };
  },
  methods: {
    datafortable: function(namedata) {
      const result = this.datas.find(({ name }) => name == namedata);
      return result.data;
    }
  }
};
</script>

<style>
</style>