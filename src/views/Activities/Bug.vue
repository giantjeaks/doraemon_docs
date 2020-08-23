<template>
  <div class="Bug">
    <v-row justify="center">
      <v-col cols="12">
        <h1>แมลง</h1>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>ข้อมูลของแมลงน้า อาจจะยังไม่ครับกำลังทยอยเพิ่มจ้า</v-card-text>
        </v-responsive>
      </v-col>
    </v-row>

      <v-row justify="center">
        <v-col cols="12">
          <v-simple-table dark>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    <h3>รูป</h3>
                  </th>
                  <th class="text-left">
                    <h3>แมลง</h3>
                  </th>
                  <th class="text-left">
                    <h3>สถานที่ที่พบ</h3>
                  </th>
                  <th class="text-left">
                    <h3>ฤดูที่พบ</h3>
                  </th>
                  <th class="text-left">
                    <h3>โน๊ต</h3>
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
                <tr v-for="(item) in Bug" :key="item.name">
                  <td>
                    <v-img width="4.753rem" :src="item.img"></v-img>
                  </td>
                  <td>{{ item.bug }}</td>
                  <td>
                    <span v-for="(ing,i) in item.Location" :key="i">
                    {{i+1}}.{{ing}}
                      <br />
                    </span>
                  </td>
                  <td>{{ item.Season }}</td>
                  <td>{{ item.Note }}</td>
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
</template>

<script>
export default {
  name: "Bug",
  computed: {},
  data() {
    return {
      Bug: [
        { img:"https://i.imgur.com/q502vsx.jpg" ,bug:" Colias Erate ",Location:[ "ป่าของคนตัดไม้","ฟาร์ม","ทะเลสาบเดรนช์","ทางเข้าภูเขา"],Season:"ฤดูใบไม้ผลิ",Note:"",S05:" 40 ",S1:" 46 ",S15:" 52 ",S2:" 59 ",S25:" 67 ",S3:" 76 ",S35:" 86 ",S4:" 98 ",S45:" 111 ",S5:" 126 "},
{ img:"https://i.imgur.com/ovBCVqh.jpg" ,bug:" Cabbage White ",Location:[ "ป่าของคนตัดไม้","ฟาร์ม","ทะเลสาบเดรนช์","ทางเข้าภูเขา","แม่น้ำแพลช","ป่าไม้ล้มลุก"],Season:"ฤดูใบไม้ผลิ",Note:"",S05:" 40 ",S1:" 46 ",S15:" 52 ",S2:" 59 ",S25:" 67 ",S3:" 76 ",S35:" 86 ",S4:" 98 ",S45:" 111 ",S5:" 126 "},
{ img:"https://i.imgur.com/Gs2YNDX.jpg" ,bug:" Honey Bee ",Location:[ "แม่น้ำแพลช","ทะเลสาบเดรนช์","ทางตะวันออกของเมืองนาทูร่า","น้ำตกผิวปาก","ป่าไม้ล้มลุก"],Season:"ฤดูใบไม้ผลิ",Note:"",S05:" 40 ",S1:" 46 ",S15:" 52 ",S2:" 59 ",S25:" 67 ",S3:" 76 ",S35:" 86 ",S4:" 98 ",S45:" 111 ",S5:" 126 "},
{ img:"https://i.imgur.com/WbcWgXO.jpg" ,bug:" Swallowtail ",Location:[ "ฟาร์ม","ทางเข้าภูเขา","ทะเลสาบเดรนช์"],Season:"ฤดูใบไม้ผลิ",Note:"",S05:" 80 ",S1:" 91 ",S15:" 103 ",S2:" 117 ",S25:" ",S3:" 151 ",S35:" ",S4:" ",S45:" ",S5:" 249 "},
{ img:"https://i.imgur.com/JxI0Njr.jpg" ,bug:" C.Peacock ",Location:[ "ทางตะวันออกของเมืองนาทูร่า","น้ำตกผิวปาก","ฟาร์ม"],Season:"ฤดูใบไม้ผลิ",Note:"",S05:" 80 ",S1:" 91 ",S15:" 103 ",S2:" 117 ",S25:" ",S3:" 151 ",S35:" ",S4:" ",S45:" ",S5:" 249 "},
{ img:"https://i.imgur.com/KaQ6BXJ.jpg" ,bug:" Long Locust ",Location:[ "ทะเลสาบเดรนช์","ทางตะวันตกของเมืองนาทูร่า"],Season:"ฤดูใบไม้ผลิ",Note:"",S05:" 40 ",S1:" 46 ",S15:" 52 ",S2:" 59 ",S25:" 67 ",S3:" 76 ",S35:" 86 ",S4:" 98 ",S45:" 111 ",S5:" 126 "},
{ img:"https://i.imgur.com/eiGAR73.jpg" ,bug:" Spotted Locust ",Location:[ "ป่าไม้ล้มลุก","ทางตะวันตกของเมืองนาทูร่า","ทะเลสาบเดรนช์"],Season:"ฤดูใบไม้ผลิ",Note:"",S05:" 40 ",S1:" 46 ",S15:" 52 ",S2:" 59 ",S25:" 67 ",S3:" 76 ",S35:" 86 ",S4:" 98 ",S45:" 111 ",S5:" 126 "},
{ img:"https://i.imgur.com/i5mOgzy.jpg" ,bug:" Asian Comma ",Location:[ "ฟาร์ม","ป่าของคนตัดไม้","ป่าไม้ล้มลุก"],Season:"ฤดูใบไม้ผลิ",Note:"",S05:" 80 ",S1:" 91 ",S15:" 103 ",S2:" 117 ",S25:" ",S3:" 151 ",S35:" ",S4:" ",S45:" ",S5:" 249 "},
{ img:"https://i.imgur.com/ulSF1X1.jpg" ,bug:" Mole Cricket ",Location:[ "ป่าของคนตัดไม้","ทางตะวันตกของเมืองนาทูร่า","ถ้ำซาซาน"],Season:"ฤดูใบไม้ผลิ",Note:"",S05:" 40 ",S1:" 46 ",S15:" 52 ",S2:" 59 ",S25:" 67 ",S3:" 76 ",S35:" 86 ",S4:" 98 ",S45:" 111 ",S5:" 126 "},
{ img:"https://i.imgur.com/fh3cB60.jpg" ,bug:" C-7 Ladybug ",Location:[ "ป่าของคนตัดไม้","ฟาร์ม,แม่น้ำแพลช,ทางเข้าภูเขา"],Season:"ฤดูใบไม้ผลิ",Note:"",S05:" 40 ",S1:" 46 ",S15:" 52 ",S2:" 59 ",S25:" 67 ",S3:" 76 ",S35:" 86 ",S4:" 98 ",S45:" 111 ",S5:" 126 "},
{ img:"https://i.imgur.com/ijTLcHo.jpg" ,bug:" Yellow LadyBug ",Location:[ "ทางตะวันออกของเมืองนาทูร่า "],Season:"ฤดูใบไม้ผลิ",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/9kGQ5sM.jpg" ,bug:" Mantis ",Location:[ "ทางตะวันตกของเมืองนาทูร่า","ป่าของคนตัดไม้","ป่าไม้ล้มลุก","ทะเลสาบเดรนช์"],Season:"ฤดูร้อน",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/4j1vrpU.jpg" ,bug:" Migratory Locust ",Location:[ "ทางตะวันตกของเมืองนาทูร่า","ป่าของคนตัดไม้","ทะเลสาบเดรนช์","ป่าไม้ล้มลุก"],Season:"ฤดูร้อน",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/svroNYF.jpg" ,bug:" Rajah Brooke ",Location:[ "ป่าไม้ล้มลุก","ทะเลสาบเดรนช์","ทางเข้าภูเขา／ฟาร์ม"],Season:"ฤดูร้อน",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/ZBQwlHh.jpg" ,bug:" Firefly ",Location:[ "ทะเลสาบเดรนช์" ],Season:"ฤดูร้อน",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/1DGHiLZ.jpg" ,bug:" Lesser Emperor ",Location:[ "ทางตะวันออกของเมืองนาทูร่า","ป่าของคนตัดไม้","ป่าไม้ล้มลุก","ฟาร์ม","น้ำตกผิวปาก","แม่น้ำแพลช"],Season:"ฤดูร้อน",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/FmySjNL.jpg" ,bug:" Jumbo Dragonfly ",Location:[ "ทางตะวันออกของเมืองนาทูร่า","ฟาร์ม","ป่าของคนตัดไม้","แม่น้ำแพลช"],Season:"ฤดูร้อน",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/jVmMwPL.jpg" ,bug:" Blue Morpho ",Location:[ "ป่าของคนตัดไม้","ฟาร์ม","แม่น้ำแพลช"],Season:"ฤดูร้อน",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/MefUXz2.jpg" ,bug:" Luna Moth ",Location:[ "น้ำตกผิวปาก"],Season:"ฤดูร้อน",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/l2hyAg3.jpg" ,bug:" Brown Cicada ",Location:[ "ป่าของคนตัดไม้","แม่น้ำแพลช","ป่าไม้ล้มลุก","ทะเลสาบเดรนช์"],Season:"ฤดูร้อน",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/S4ix2Mk.jpg" ,bug:" Dusk Cicada ",Location:[ "แม่น้ำแพลช","ทะเลสาบเดรนช์"],Season:"ฤดูร้อน",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/p2INsFx.jpg" ,bug:" Min-min cicada ",Location:[ "ทางตะวันออกของเมืองนาทูร่า","ป่าของคนตัดไม้","ทะเลสาบเดรนช์","ป่าไม้ล้มลุก","แม่น้ำแพลช"],Season:"ฤดูร้อน",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/y2yGutj.jpg" ,bug:" Walker’s Cicada ",Location:[ "ป่าไม้ล้มลุก","น้ำตกผิวปาก"],Season:"ฤดูร้อน",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/j3BhTya.jpg" ,bug:" Rhino Beetle ",Location:[ "น้ำตกผิวปาก","ทางตะวันออกของเมืองนาทูร่า","ป่าไม้ล้มลุก"],Season:"ฤดูร้อน",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/IVkgT05.jpg" ,bug:" Horned Atlas ",Location:[ "ป่าไม้ล้มลุก","แม่น้ำแพลช"],Season:"ฤดูร้อน",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/zLCT3qD.jpg" ,bug:" Hercules Beetle ",Location:[ "แม่น้ำแพลช "],Season:"ฤดูร้อน",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/BDxeSfM.jpg" ,bug:" Big Gt Stag ",Location:[ "ทางตะวันออกของเมืองนาทูร่า","ป่าไม้ล้มลุก","ถ้ำซาซาน"],Season:"ฤดูร้อน",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/3Hza9Mb.jpg" ,bug:" Saw Stag ",Location:[ "Swoosh Fall","ทางตะวันออกของเมืองนาทูร่า","แม่น้ำแพลช"],Season:"ฤดูร้อน",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/Y9Gd97Y.jpg" ,bug:" Hirata Stag ",Location:[ "น้ำตกผิวปาก","แม่น้ำแพลช"],Season:"ฤดูร้อน",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/wwpGCgQ.jpg" ,bug:" Miyami Stag ",Location:[ "ป่าไม้ล้มลุก","น้ำตกผิวปาก"],Season:"ฤดูร้อน",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/yR5jw64.jpg" ,bug:" Grasshopper ",Location:[ "น้ำตกผิวปาก","ฟาร์ม","แม่น้ำแพลช","ป่าของคนตัดไม้","ทางเข้าภูเขา"],Season:"ฤดูใบไม้ร่วง",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/xNYAWwo.jpg" ,bug:" Bell Cricket ",Location:[ "ทะเลสาบเดรนช์","ทางตะวันตกของเมืองนาทูร่า"],Season:"ฤดูใบไม้ร่วง",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/DRWeE7m.jpg" ,bug:" Bridal Cricket ",Location:[ "ทะเลสาบเดรนช์","ทางตะวันตกของเมืองนาทูร่า","ป่าของคนตัดไม้"],Season:"ฤดูใบไม้ร่วง",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/zPLYcJE.jpg" ,bug:" Cricket ",Location:[ "ป่าของคนตัดไม้","ทางตะวันตกของเมืองนาทูร่า","ถ้ำซาซาน","ทะเลสาบเดรนช์"],Season:"ฤดูใบไม้ร่วง",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/CgaVyEV.jpg" ,bug:" Blue Diadam ",Location:[ "ฟาร์ม,แม่น้ำแพลช","ป่าไม้ล้มลุก"],Season:"ฤดูใบไม้ร่วง",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/To9g9k0.jpg" ,bug:" Idea Leuconoe ",Location:[ "ทะเลสาบเดรนช์","ฟาร์ม","ป่าไม้ล้มลุก","แม่น้ำแพลช"],Season:"ฤดูใบไม้ร่วง",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/nusuDvh.jpg" ,bug:" Birdwing ",Location:[ "ฟาร์ม","แม่น้ำแพลช","ป่าไม้ล้มลุก"],Season:"ฤดูใบไม้ร่วง",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/1uFviWm.jpg" ,bug:" Oak Silk Moth ",Location:[ "น้ำตกผิวปาก","ป่าไม้ล้มลุก","ฟาร์ม","ทางตะวันออกของเมืองนาทูร่า","ทางตะวันตกของเมืองนาทูร่า"],Season:"ฤดูใบไม้ร่วง",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/t6zuGVF.jpg" ,bug:" Scarab Beetle ",Location:[ "ป่าไม้ล้มลุก","ทางตะวันออกของเมืองนาทูร่า","ป่าของคนตัดไม้"],Season:"ฤดูใบไม้ร่วง",Note:"",S05:" 0.5 ",S1:" 1 ",S15:" 1.5 ",S2:" 2 ",S25:" 2.5 ",S3:" 3 ",S35:" 3.5 ",S4:" 4 ",S45:" 4.5 ",S5:" 126 "},
{ img:"https://i.imgur.com/kIjP48D.jpg" ,bug:" Jewel Beetle ",Location:["ทะเลสาบเดรนช์","ป่าของคนตัดไม้","แม่น้ำแพลช","น้ำตกผิวปาก","ทางตะวันออกของเมืองนาทูร่า","ป่าไม้ล้มลุก"],Season:"ฤดูใบไม้ร่วง",Note:"",S05:" 0.5 ",S1:" 46 ",S15:" 1.5 ",S2:" 2 ",S25:" 2.5 ",S3:" 3 ",S35:" 3.5 ",S4:" 4 ",S45:" 4.5 ",S5:" 5 "},
{ img:"https://i.imgur.com/VlVugEK.jpg" ,bug:" Roly-Poly ",Location:[ "ฟาร์ม","ทางตะวันตกของเมืองนาทูร่า","ถ้ำซาซาน","ทางเข้าภูเขา","ป่าไม้ล้มลุก"],Season:"ทุกฤดู",Note:"",S05:" 20 ",S1:" 23 ",S15:" 26 ",S2:" ",S25:" ",S3:" ",S35:" 45 ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/PkOBSQD.jpg" ,bug:" Wharf Roach ",Location:[ "ถ้ำซาซาน"],Season:"ทุกฤดู",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/n2PujNa.jpg" ,bug:" Centipede ",Location:[ "ป่าไม้ล้มลุก","ป่าของคนตัดไม้","ทางตะวันออกของเมืองนาทูร่า","ฟาร์ม"],Season:"ทุกฤดู",Note:"",S05:" ",S1:" ",S15:" ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "},
{ img:"https://i.imgur.com/c5BSH1f.jpg" ,bug:" Ant ",Location:[ "ทางตะวันตกของเมืองนาทูร่า","ทางตะวันออกของเมืองนาทูร่า","ป่าไม้ล้มลุก","ถ้ำซาซาน","ทะเลสาบเดรนช์","แม่น้ำแพลช,ฟาร์ม"],Season:"ทุกฤดู",Note:"",S05:" 20 ",S1:" 23 ",S15:" 26 ",S2:" ",S25:" ",S3:" ",S35:" ",S4:" ",S45:" ",S5:" "}
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