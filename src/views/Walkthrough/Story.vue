<template>
  <div class="Story">
    <v-row justify="center">
      <v-col cols="12">
        <h1>Story Guide Chapter Summary</h1>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="8">
        <v-simple-table dark>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  <h3>เรื่องราว</h3>
                </th>
                <th class="text-left">
                  <h3>ปัจจุบัน</h3>
                </th>
                <th class="text-left">
                  <h3>รวม</h3>
                </th>
                <th class="text-left">
                  <h3>%</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in Story" :key="item.name">
                <td>
                  <img width="100px" :src="item.img" />
                  {{ item.Story }}
                </td>
                <td>{{ item.Current }}</td>
                <td>{{ item.Total }}</td>
                <td>{{ item.Percen }}</td>
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
    name: "Story",
    data() {
      return {
        Story:[
          {img:"https://i.imgur.com/YsVDLjC.png",Story:"เนื้อเรื่องหลัก",Current:"14",Total:"14",Percen:"100"},
          {img:"https://i.imgur.com/WUjZgx5.png",Story:"ช่างไม้",Current:"15",Total:"15",Percen:"100"},
          {img:"https://i.imgur.com/1MhHLDk.png",Story:"คลีนิค",Current:"15",Total:"15",Percen:"100"},
          {img:"https://i.imgur.com/pcKOBim.png",Story:"ร้านค้าตำราอาหาร",Current:"15",Total:"15",Percen:"100"},
          {img:"https://i.imgur.com/xypianl.png",Story:"ร้านช่างตีเหล็ก",Current:"11",Total:"11",Percen:"100"},
          {img:"https://i.imgur.com/8vzn7nR.png",Story:"ร้านค้าทั่วไป",Current:"11",Total:"11",Percen:"100"},
          {img:"https://i.imgur.com/z20eRtB.png",Story:"ร้านไก่",Current:"11",Total:"11",Percen:"100"},
          {img:"https://i.imgur.com/79LcU17.png",Story:"ร้านวัวแกะ",Current:"11",Total:"11",Percen:"100"},
          {img:"https://i.imgur.com/bDsAgA9.png",Story:"ร้านขายอุปกรณ์",Current:"1",Total:"1",Percen:"100"},
          {img:"https://i.imgur.com/je7Av8F.png",Story:"นายอำเภอ",Current:"0",Total:"8",Percen:"0"},
          {img:"https://i.imgur.com/tSTVshH.png",Story:"ฮาม่อน",Current:"5",Total:"5",Percen:"100"},
          {img:"https://i.imgur.com/YIgZgss.png",Story:"คนแคระ(ภูติน้อย)",Current:"6",Total:"6",Percen:"100"},
          {img:"https://i.imgur.com/JeiKAq7.png",Story:"น้องหมา",Current:"2",Total:"2",Percen:"100"},
          {img:"https://i.imgur.com/AzC1ChZ.png",Story:"ม้า",Current:"4",Total:"4",Percen:"100"},
          {img:"https://i.imgur.com/kScWB9i.png",Story:"น้องแมว",Current:"2",Total:"2",Percen:"100"},
          {img:"https://i.imgur.com/OKIv9Pg.png",Story:"หมี",Current:"2",Total:"2",Percen:"100"},
          {img:"https://i.imgur.com/UrFk2Uy.png",Story:"ลิง",Current:"0",Total:"2",Percen:"0"},
          {img:"https://i.imgur.com/i4OKfSh.png",Story:"กระต่าย",Current:"0",Total:"2",Percen:"0"},
          {img:"https://i.imgur.com/xLQUD61.png",Story:"กระรอก",Current:"0",Total:"2",Percen:"0"},
          {img:"https://i.imgur.com/SKheB5y.png",Story:"ของวิเศษ",Current:"0",Total:"6",Percen:"0"},
          {img:"https://i.imgur.com/d4z5vtq.png",Story:"ถ้ำ",Current:"4",Total:"4",Percen:"100"},
        ]
      }
    },
}
</script>

<style>

</style>