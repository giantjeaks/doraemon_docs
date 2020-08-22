<template>
  <div class="Koropokkur">
    <v-row justify="center">
      <v-col cols="12">
        <h1>ร้านคนแคระ (ภูติน้อย)</h1>
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
                  <h3>สินค้า</h3>
                </th>
                <th class="text-left">
                  <h3>รายละเอียด</h3>
                </th>
                <th class="text-left">
                  <h3>ราคา (Junk)</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.name">
                <td>
                  <v-row align="center">
                    <v-col cols="2" style="max-width: none;padding: 0px;">
                      <v-img width="40px" :src="item.img"></v-img>
                    </v-col>
                    <v-col cols="10" style="max-width: none;padding: 0px;">
                      {{ item.Item }}
                    </v-col>
                  </v-row>
                </td>
                <td>{{ item.Description }}</td>
                <td>{{ item.Cost }}</td>
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
  name: "Koropokkur",
  data() {
    return {
      items: [
        {
          img: "https://i.imgur.com/ex6qSg7.png",
          Item: "กระป๋องฤดูใบไม้ผลิ",
          Description: "เปลี่ยนเรือนกระจกให้เป็นฤดูใบไม้ผลิ",
          Cost: "8",
        },
        {
          img: "https://i.imgur.com/ignT4jE.png",
          Item: "กระป๋องฤดูร้อน",
          Description: "เปลี่ยนเรือนกระจกให้เป็นฤดูร้อน",
          Cost: "8",
        },
        {
          img: "https://i.imgur.com/v4RChF6.png",
          Item: "กระป๋องฤดูใบไม้ร่วง",
          Description: "เปลี่ยนเรือนกระจกให้เป็นฤดูใบไม้ร่วง",
          Cost: "8",
        },
        {
          img: "https://i.imgur.com/gGyyo83.png",
          Item: "กระป๋องฤดูหนาว",
          Description: "เปลี่ยนเรือนกระจกให้เป็นฤดูหนาว",
          Cost: "8",
        },
        {
          img: "https://i.imgur.com/KCC4WB8.png",
          Item: "หมวกก้อนหินริมทาง",
          Description:
            "เมื่อสวมหมวกนี้แล้ว ไม่ว่าจะทำอะไรอยู่ที่ไหนก็ไม่มีใครให้ความสนใจ เหมือนกับก้อนหินที่ตกอยู่ริมทาง",
          Cost: "25",
        },
        {
          img: "https://i.imgur.com/FpnQoKP.png",
          Item: "การ์ดสภาพอากาศ",
          Description: "เปลี่ยนอากาศเป็นแดดจ้า ใช้กับกล่องสภาพอากาศ (เป็นเครื่องมือที่สามารถเปลื่ยนสภาพอากาศได้ เพียงแค่ใส่การ์ดอากาศที่เราต้องการลงไป อากาศก็จะเป็นไปตามการ์ดที่เราใส่)",
          Cost: "8",
        },
        {
          img: "https://i.imgur.com/YtQyzqE.png",
          Item: "การ์ดสภาพอากาศ",
          Description: "เปลี่ยนอากาศเป็นมีเมฆ ใช้กับกล่องสภาพอากาศ (เป็นเครื่องมือที่สามารถเปลื่ยนสภาพอากาศได้ เพียงแค่ใส่การ์ดอากาศที่เราต้องการลงไป อากาศก็จะเป็นไปตามการ์ดที่เราใส่)",
          Cost: "8",
        },
        {
          img: "https://i.imgur.com/dJ35daQ.png",
          Item: "การ์ดสภาพอากาศ",
          Description: "เปลี่ยนอากาศเป็นฝนตก ใช้กับกล่องสภาพอากาศ (เป็นเครื่องมือที่สามารถเปลื่ยนสภาพอากาศได้ เพียงแค่ใส่การ์ดอากาศที่เราต้องการลงไป อากาศก็จะเป็นไปตามการ์ดที่เราใส่)",
          Cost: "8",
        },
        {
          img: "https://i.imgur.com/KYv7bDD.png",
          Item: "Ultra upgrader",
          Description: "เพิ่มประสิทธิภาพทุกเครื่องมือเป็นระดับเงินเป็นเวลา 1 ชั่วโมงเมื่อเปิดใช้",
          Cost: "8",
        },
        {
          img: "https://i.imgur.com/zPZAarC.png",
          Item: "พลาสเตอร์ชูกำลัง",
          Description: "ใช้แล้วจะไม่เหนื่อยเลยในระยะเวลาจำกัด",
          Cost: "10",
        },
        {
          img: "https://i.imgur.com/bLuMvC7.png",
          Item: "Upheavoil",
          Description: "ใช้เพื่อสลับระหว่างสวรรค์กับโลก",
          Cost: "25",
        },
        {
          img: "https://i.imgur.com/JHm0vXv.png",
          Item: "เครื่องปั๊มร่างกาย",
          Description: "ทำให้ร่างกายบางส่วนพองใหญ่ขึ้นได้ เมื่อเอาออกก็จะแฟบลงทันที",
          Cost: "25",
        },
        {
          img: "https://i.imgur.com/5u9FvWM.png",
          Item: "พระจันทร์นำโชค",
          Description: "เพิ่มโชคอย่างมาก 3 ชั่วโมง (ใช้ได้ดีมากสำหรับการตกปลา)",
          Cost: "10",
        },
        {
          img: "https://i.imgur.com/bWhKo64.png",
          Item: "ผงโตไว",
          Description: "เร่งอัตราการเจริญเติบโตของทุกสิ่งมีชีวิต",
          Cost: "10",
        },
        {
          img: "https://i.imgur.com/UJ560HR.png",
          Item: "ลูกอมขยันขันแข็ง",
          Description: "เพิ่มพลังกายเต็มเปี่ยม",
          Cost: "10",
        },
        {
          img: "https://i.imgur.com/uI8RXuR.png",
          Item: "นาฬิกาเรียกผี",
          Description: "ตั้งเวลาแล้วผีจะออกมา",
          Cost: "15",
        },
        {
          img: "https://i.imgur.com/GzHGJQK.png",
          Item: "เมฆฝนตก",
          Description: "รดน้ำในช่วง 5x5 ช่อง",
          Cost: "15",
        },
        {
          img: "https://i.imgur.com/i7flwTI.png",
          Item: "คันเบ็ดตกที่ไหนก็ได้",
          Description: "ตกปลาบนฟื้นดินได้ จะตกปลาที่ไหนก็ได้",
          Cost: "200",
        },
      ],
    };
  },
};
</script>

<style></style>
