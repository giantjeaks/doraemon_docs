<template>
  <div class="Fish">
    <v-row justify="center">
      <v-col cols="12">
        <h1>ตกปลา</h1>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text><span>มีปลาหลากหลายรูปแบบที่คุณสามารถจับได้โดยขึ้นอยู่กับฤดูกาลและสภาพอากาศคุณสามารถซื้อ เหยื่อตกปลา และ เหยื่อตกปลาชั้นดี ได้ที่ ร้านตกปลาของคุณซีฟี่ เพื่อเพิ่มโอกาสในการจับปลาตัวใหญ่ขึ้นโดยจะมีผลเฉพาะปลา 3 ตัวแรกที่เกิดใหม่ บางครั้งเหยื่อของคุณจะติดเมื่อใช้เวลานานในการรอปลาเกิดใหม่และคุณจะได้รับไอเท็มเช่น หินก่อสร้าง, หญ้า, ไม้ หรือ เหยื่อตกปลา / เหยื่อตกปลาชั้นดี หรืออัญมณีที่ดีกว่า (เฉพาะ ทะเลสาบป๋อมแป๋ม และ เบ็ดตกปลาบนบก เท่านั้น)</span></v-card-text>
           <v-alert border="right" colored-border type="info" elevation="3">
              เมื่อคุณพยายามตกปลา ปลาจะได้รับการแจ้งเตือนซึ่งหมายความว่ายิ่งอยู่นานปลาก็จะกินเหยื่อของคุณยากขึ้น หากต้องการรีเซ็ตคุณต้องงีบหลับ
            </v-alert>
            <v-alert border="right" colored-border type="info" elevation="3">
              เพื่อประสิทธิภาพของเวลาพยายามงีบหลับก่อนที่วินาทีจะนับเป็น 30 ตัวอย่างเช่นหากคุณงีบหลับเวลา 10:25 คุณจะตื่นเวลา 11.00 น. แต่ถ้าคุณพยายามงีบหลับเวลา 10:40 น. คุณจะตื่นเวลา 12:00 น.
            </v-alert>
        </v-responsive>
      </v-col>
    </v-row>

    <v-card
      class="mx-auto"
      max-width="100%"
      v-for="(s, index) in Season"
      :key="index"
    >
      <v-img :src="s.img" height="200px"></v-img>

      <v-card-title>{{ s.name }}</v-card-title>
       <v-card-subtitle>
      {{ s.Desc }}
    </v-card-subtitle>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn icon @click="s.show = !s.show">
          <v-icon>{{ s.show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="s.show">
          <v-divider></v-divider>

          <v-card-text>
            <v-simple-table dark>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      <h3>รูป</h3>
                    </th>
                    <th class="text-left">
                      <h3>สัตว์น้ำ</h3>
                    </th>
                    <th class="text-left">
                      <h3>สถานที่พบ</h3>
                    </th>
                    <th class="text-left">
                      <h3>เงา</h3>
                    </th>
                    <th class="text-left">
                      <h3>โน๊ต</h3>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in s.lit" :key="item.name">
                    <td>
                      <v-img width="5.5rem" :src="item.img"></v-img>
                    </td>
                    <td>{{ item.Fish }}</td>
                    <td>
                      <span v-for="(loc,index) in item.Location" :key="index">{{ loc }}, </span>
                      
                    </td>
                    <td>{{ item.Shadow }}</td>
                    <td>{{ item.Note }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>

    
  </div>
</template>

<script>
import FISH from "../../const/fish.js"
import COMMON from "../../const/common.js"

export default {
  name: "Fish",
  computed: {},
  data() {
    return {
     Season: [
        {
          img: COMMON.SEASON.SPRING.img,
          name: COMMON.SEASON.SPRING.NAME,
          show: false,
          lit: FISH.SPRING
        },
         {
          img: COMMON.SEASON.SUMMER.img,
          name: COMMON.SEASON.SUMMER.NAME,
          show: false,
          Desc: "ปลาเอ็มเบ็งกะ หนึ่งในปลาในตำนานที่มีราคาสูงหากคุณจับได้ (ขั้นต่ำใช้ เบ็ดทองแดง)ต้องใช้ เหยื่อตกปลาอย่างดี เพื่อเพิ่มโอกาส ในวันที่มีพายุ(ฝนตกหนักลมแรงและฟ้าผ่า)เกิดขึ้นแล้วประมาณ 3 ชั่วโมง อย่าลืมใช้โอกาสนี้ในการลองตกปลาฉลาม",
          lit: FISH.SUMMER},
        {
          img: COMMON.SEASON.AUTUMN.img,
          name: COMMON.SEASON.AUTUMN.NAME,
          show: false,
          Desc: "ปลาช่อนเมซอน หนึ่งในปลาในตำนานที่มีราคาสูงหากคุณสามารถจับได้ (ขั้นต่ำโดยใช้ เบ็ดทองแดง) ต้องใช้ เหยื่อตกปลาอย่างดี เพื่อเพิ่มโอกาสขณะเผชิญหน้ากับน้ำตกใน น้ำตกหวีดหวิว",
          lit: FISH.AUTUMN,
        },
        {
          img: COMMON.SEASON.WINTER.img,
          name: COMMON.SEASON.WINTER.NAME,
          show: false,
          Desc: "ปลาออฟิชยักษ์ หนึ่งในปลาในตำนานที่มีราคาสูงหากคุณจับได้(ขั้นต่ำโดยใช้ เบ็ดทองแดง) ต้องใช้เหยื่อตกปลาชั้นดีเพื่อเพิ่มโอกาสที่แหลมซัดซาดหลังบ้านของซีฟี่ตรงโขดหินด้านซ้ายของแผนที่ เมื่อเกิดพายุหิมะ / หิมะตกให้ลองใช้โอกาสนี้ในการตกปลาคาร์บ นางฟ้าทะเล ปลาทูน่าและ ปลาสำลี",
          lit: FISH.WINTER,
        },
        {
          img: COMMON.SEASON.ALL.img,
          name: COMMON.SEASON.ALL.NAME,
          show: false,
          Desc: "ปลาฉลามครุย หนึ่งในปลาในตำนานที่มีราคาสูงหากคุณสามารถจับได้(ขั้นต่ำโดยใช้ เบ็ดทองแดง) ต้องใช้ เหยื่อตกปลาชั้นดีเพื่อเพิ่มโอกาส",
          lit: FISH.ALL,
        },
        {
          img: COMMON.SEASON.LANDFISHING.img,
          name: COMMON.SEASON.LANDFISHING.NAME,
          show: false,
          Desc: "การอัปเดตใหม่ขอแนะนำสัตว์ทะเลหายากที่มีรูปร่างหน้าตาแปลก ๆ ที่เราไม่ค่อยพบเห็นหรือไดโนเสาร์ที่สูญพันธุ์ไปแล้วในยุคก่อนประวัติศาสตร์ คุณสามารถซื้อรูปปั้นปลา Coelacant, Anomalocaris, Umbrella Octo และ Bathynomus ได้ที่เพ็นเตอร์ Anomalocaris, Hallucigenia และ Dunkleosteus มีราคาสูง Opabinia มีราคาสูงสุดจากทั้งหมด",
          lit: FISH.LANDROD,
        }
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