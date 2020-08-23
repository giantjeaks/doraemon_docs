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
          Love: "โดรายากิ",
          Like: ["อูด้ง","ดอกทานตะวัน","แตงโม","ผีเสื้อหนอนกะหล่ำ"],
          Dislike: ["หญ้า"],
        },
        {
          img: "https://i.imgur.com/ZO2gHjs.png",
          Villager: "ชิซูกะ",
          Love: "มันอบ",
          Like: ["ชีสเค้ก","ดอกปารีสเดซี่","มันม่วง","มันหวาน"],
          Dislike: ["ตะขาบ","อาหารขยะแขยง"],
        },
        {
          img: "https://i.imgur.com/D9maui2.png",
          Villager: "ไจแอนท์",
          Love: "แกงกะหรี่",
          Like: ["หม้อไฟ","พริกหยวกเขียว","ตั๊กแตนโลคัสตา","ไม้"],
          Dislike: ["อาหารขยะแขยง"],
        },
        {
          img: "https://i.imgur.com/7VRGz88.png",
          Villager: "ซึเนโอะ",
          Love: "เสต็กปลา",
          Like: ["ทราฟเฟิลไข่","เมล่อน","ทราฟเฟิล","แร่เพชร"],
          Dislike: ["ข้าวโพด","อาหารขยะแขยง"],
        },
        {
          img: "https://i.imgur.com/0PG0ieK.png",
          Villager: "ฮาม่อน",
          Love: "เทมปุระ",
          Like: ["ชิคุเซนนิ","มันฝรั่ง","ดอกทานตะวัน","อาหารสัตว์"],
          Dislike: ["หญ้า"],
        },
        {
          img: "https://i.imgur.com/QXXdCK2.png",
          Villager: "ราวี่",
          Love: "นามัสสุ",
          Like: ["สลัดฤดูใบไม้ร่วง","ดอกพิงค์","โกโบ้","ปุ๋ย"],
          Dislike: ["หญ้า"],
        },
        {
          img: "https://i.imgur.com/TqzSxsf.png",
          Villager: "วีร่า",
          Love: "คอมโพเต้",
          Like: ["ชีสเค้ก","ดอกปารีสเดซี่","มันม่วง","มันหวาน"],
          Dislike: ["อาหารขยะแขยง"],
        },
        {
          img: "https://i.imgur.com/43IHxf3.png",
          Villager: "เฮเลน",
          Love: "ขนมอบวอลนัท",
          Like: ["คาราเมลอัลมอนด์","ปลาทอง","สตอเบอร์รี่","ไข่"],
          Dislike: ["อาหารขยะแขยง"],
        },
        {
          img: "https://i.imgur.com/LKT7f6k.png",
          Villager: "เฮนสัน",
          Love: "ชุปแป้งทอด",
          Like: ["กราแตง","ปู","ปลาทูแขก","ชีส"],
          Dislike: ["อาหารขยะแขยง"],
        },
        {
          img: "https://i.imgur.com/GRyDZNC.png",
          Villager: "คูเปอร์",
          Love: "ด้วงสามเขา",
          Like: ["นมสตอเบอร์รี่","ผึ้งน้ำผึ้ง","ตั๊กแตนตำข้าว","มายองเนส"],
          Dislike: ["แมลงสาบท่าเรือ","อาหารขยะแขยง"],
        },
        {
          img: "https://i.imgur.com/qWTfItD.png",
          Villager: "ธอรัส",
          Love: "ปลาฮามาจิต้มไชเท้า",
          Like: ["ถั่วอบ","ฟักทอง","พลัม","นม"],
          Dislike: ["อาหารขยะแขยง"],
        },
        {
          img: "https://i.imgur.com/smB2a5V.png",
          Villager: "เอรี่ส์",
          Love: "ปูต้ม",
          Like: ["พัลบาแช","ถั่ว","ดอกไอริส","ไหมพรม"],
          Dislike: ["อาหารขยะแขยง"],
        },
        {
          img: "https://i.imgur.com/p1pz8GO.png",
          Villager: "เรม",
          Love: "พุดดิ้ง",
          Like: ["กุ้งผัดซอสพริก","ดอกมอร์นิ่่งกลอรี่","ดอกแดนดิไลออน","ขนสัตว์"],
          Dislike: ["อาหารขยะแขยง"],
        },
        {
          img: "https://i.imgur.com/KnBVI7G.png",
          Villager: "เพนท์",
          Love: "อูด้ง",
          Like: ["โอเด้ง","แตงโม","รอยัลเฟิร์น","ไม้แข็ง"],
          Dislike: ["อาหารขยะแขยง"],
        },
        {
          img: "https://i.imgur.com/0zWMlkT.png",
          Villager: "สมิธตี้",
          Love: "จี่ปลาโอ",
          Like: ["นามัสสุ","ไชเท้า","ขิง","แร่ทองแดง"],
          Dislike: ["อาหารขยะแขยง"],
        },
        {
          img: "https://i.imgur.com/Wrdxj34.png",
          Villager: "เบลค",
          Love: "อจิลโล",
          Like: ["คาปาซิโอ","ดอกลิลลี่","แตงกวา","แร่เหล็ก"],
          Dislike: ["อาหารขยะแขยง"],
        },
        {
          img: "https://i.imgur.com/zXfBmc5.png",
          Villager: "เจนนี่",
          Love: "คาปาซิโอ",
          Like: ["สลัดฤดูใบไม้ผลิ","ดอกคาร์เนชั่น","ดอกป็อปปี้สีแดง","ข้าวสาลี"],
          Dislike: ["อาหารขยะแขยง"],
        },
        {
          img: "https://i.imgur.com/6Lsmj2j.png",
          Villager: "มาร์ค",
          Love: "พอตอู้เฟือ",
          Like: ["กราแตง","หิ่งห้อย","ดอกกะหล่ำ","มด"],
          Dislike: ["อาหารขยะแขยง"],
        },
        {
          img: "https://i.imgur.com/nnHSnQB.png",
          Villager: "เจมม่า",
          Love: "แอปเปิ้ลทาร์ต",
          Like: ["บังนา เกาด้า","ดอกปารีสเดซี่","แครอท","พุดดิ้ง"],
          Dislike: ["อาหารขยะแขยง"],
        },
        {
          img: "https://i.imgur.com/u7Gg0jp.png",
          Villager: "ไรอัม",
          Love: "ซาชิมิลงเรือ",
          Like: ["ทราฟเฟิลไข่","ไชเท้า","เห็ดมัทซีตาเกะ","แร่ทับทิม"],
          Dislike: ["หญ้า"],
        },
        {
          img: "https://i.imgur.com/ae937aF.png",
          Villager: "รีเจส",
          Love: "อาหารแปลก",
          Like: ["ผัดผัก","Shepherd’s Purse","ดอกลิลลี่","เครื่องเทศ"],
          Dislike: ["อาหารขยะแขยง"],
        },
        {
          img: "https://i.imgur.com/u5fFnNZ.png",
          Villager: "เซเรน่า",
          Love: "ช็อตเค้ก",
          Like: ["เทอร์รีน","ว่านหางจระเข้","กุหลาบแดง","Shepherd’s purse"],
          Dislike: ["หญ้า"],
        },
        {
          img: "https://i.imgur.com/euK3t3D.png",
          Villager: "คาเฟ่ต์",
          Love: "แซนด์วิช",
          Like: ["อาหารแปลก","ฟักทอง","แอปเปิ้ล","ซอสถั่ว"],
          Dislike: ["หญ้า"],
        },
        {
          img: "https://i.imgur.com/UTy82sX.png",
          Villager: "เอเรีย",
          Love: "สลัดฤดูใบไม้ผลิ",
          Like: ["ซอทีดสลัด","ดอกลิลลี่","เมล่อน","แป้ง"],
          Dislike: ["หญ้า"],
        },
        {
          img: "https://i.imgur.com/2j0uBy8.png",
          Villager: "แซนดี้",
          Love: "ปลากระโทง",
          Like: ["ชีสทอด","ชบา","ปลาหมึกยัก","เหยื่อตกปลา"],
          Dislike: ["อาหารขยะแขยง"],
        },
        {
          img: "https://i.imgur.com/OSxaiak.png",
          Villager: "สการ์เล็ต",
          Love: "ขยะ",
          Like: ["พายแอปเปิ้ล","ดอกคาร์เนชั่น","พริกหยวกแดง","ขนสัตว์"],
          Dislike: ["อาหารขยะแขยง"],
        },
        {
          img: "https://i.imgur.com/EYCDCuz.png",
          Villager: "สกาย",
          Love: "ขยะ",
          Like: ["สลัดฤดูร้อน","มะเขือเทศ","ดอกไอริส","อาหารสัตว์"],
          Dislike: ["อาหารขยะแขยง"],
        },
        {
          img: "https://i.imgur.com/znlUcNq.png",
          Villager: "เจด",
          Love: "ขยะ",
          Like: ["ซุปเขียว","ผักโขม","จั๊กจั่น","ไม้อ่อน"],
          Dislike: ["อาหารขยะแขยง"],
        },
        {
          img: "https://i.imgur.com/3bMN5It.png",
          Villager: "แอมเบอร์",
          Love: "ขยะ",
          Like: ["ปลาราดซอสมูเนียร์","ฟักทอง","หญ้าหางม้า","เนย"],
          Dislike: ["อาหารขยะแขยง"],
        },
        {
          img: "https://i.imgur.com/WJ2viVe.png",
          Villager: "ไวโอเล็ต",
          Love: "ขยะ",
          Like: ["คีช","ดอกระฆัง","โบโก้","แร่เหล็ก"],
          Dislike: ["อาหารขยะแขยง"],
        },
        {
          img: "https://i.imgur.com/k9ehOcp.png",
          Villager: "หมี",
          Love: "เชอร์รี่แซลมอน, แซลมอน",
          Like: ["หน่อไม้","แตงโม","วอลนัท","รังผึ้ง"],
          Dislike: ["หญ้า"],
        },
        {
          img: "https://i.imgur.com/vjIxjjg.png",
          Villager: "กระต่าย",
          Love: "ข้าวโพด, แครอท",
          Like: ["ดอกแดนดิไลออน","ฟักทอง","แอปเปิ้ล","กะหล่ำปลี"],
          Dislike: ["หญ้า"],
        },
        {
          img: "https://i.imgur.com/yxWge1G.png",
          Villager: "กระรอก",
          Love: "อัลมนอต์, วอลนัท",
          Like: ["มันฝรั่ง","ฟักทอง","ผักโขม","ถั่ว"],
          Dislike: ["หญ้า"],
        },
        {
          img: "https://i.imgur.com/81Hdns2.png",
          Villager: "ลูกลิง",
          Love: "มันฝรั่ง, แอปเปิ้ล",
          Like: ["หัวผักกาด","ข้าวโพด","มันม่วง","แตงโม"],
          Dislike: ["หญ้า"],
        }
      ],
    };
  },
};
</script>

<style></style>
