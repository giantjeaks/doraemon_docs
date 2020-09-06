/* eslint-disable */
<template>
  <div class="Bug">
    <v-row justify="center">
      <v-col cols="12">
        <h1>จับแมลง</h1>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>
            <span>
              มีแมลงหลายชนิดที่คุณสามารถจับได้โดยขึ้นอยู่กับฤดูกาลยกเว้นฤดูหนาวที่จะไม่มีแมลงตามฤดูกาล
              อยู่รอบ ๆ ตรวจสอบจุดเกิดใหม่ของแมลงได้ที่
              <a>Critter Spawn</a>
            </span>
            <p>
              ด้วงฤดูร้อนจะปรากฏเฉพาะเวลา 00.00 น. ถึง 8.00 น. แขวนอยู่บนต้นไม้
              เมื่อคุณจับแมลงบางชนิดเช่นด้วงจักจั่นหิ่งห้อยและเต่าทองคุณต้องเดินช้าๆเพื่อเข้าใกล้ไม่เช่นนั้นมันจะบินหนีไปเมื่อคุณวิ่ง
            </p>
            <p>
              น่าเสียดายที่ไม่มีสัตว์เลื้อยคลานในฤดูหนาวหรือแม้แต่กบ /
              หอยทากในเกมนี้
            </p>
            <v-alert border="right" colored-border type="info" elevation="3">
              ฤดูใบไม้ผลิคุณสามารถใช้ ผึ้ง เพื่อผลิตน้ำผึ้ง
              <img
                width="50px"
                src="https://vignette.wikia.nocookie.net/hmwikia/images/8/8d/1588951327015.jpg/revision/latest?cb=20200508152837"
              />ได้สูงสุด 5 ครั้งทุกๆ 2 วันด้วย "รังผึ้งที่" ได้จาก เพนท์
              (ช่างตัดไม้)
              <br />
              <img
                width="75%"
                src="https://vignette.wikia.nocookie.net/hmwikia/images/e/ed/20200508221832_1.jpg/revision/latest?cb=20200508152727"
              />
            </v-alert>
          </v-card-text>
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
                      <h3>แมลง</h3>
                    </th>
                    <th class="text-left">
                      <h3>สถานที่พบ</h3>
                    </th>
                    <th class="text-left">
                      <h3>ฤดู</h3>
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
                    <td>{{ item.Bug }}</td>
                    <td>
                      <span v-for="(ing, i) in item.Location" :key="i"
                        >{{ ing }},</span
                      >
                    </td>
                    <td>{{ item.Season }}</td>
                    <td>{{ item.Note }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>

    <v-row justify="center">
      <v-col cols="12"></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Bug",
  computed: {},
  data() {
    return {
      Season: [
        {
          img:
            "https://vignette.wikia.nocookie.net/hmwikia/images/1/12/20200417133155_1.jpg/revision/latest?cb=20200417065905",
          name: "ฤดูใบไม้ผลิ",
          show: false,
          lit: [
            {
              img:
                "https://vignette.wikia.nocookie.net/hmwikia/images/d/d5/C7ladybug.png/revision/latest/scale-to-width-down/100?cb=20200419130026",
              Bug: "แมลงเต่าทอง",
              Location: [
                "ป่าตัดฟืน",
                "ฟาร์ม",
                "แม่น้ำจ๋อมแจ๋ม",
                "หุบเขาหีดหวิว",
                "น้ำตก ซ่าซ่า",
              ],
              Season: "ฤดูใบไม้ผลิ",
              Note: "แฟชั่นไอดอลแห่งโลกแมลง ดูเธอวางมาด! (5,4 มม. ~ 8,9 มม.)",
            },
            {
              img:
                "https://vignette.wikia.nocookie.net/hmwikia/images/f/fe/Yellowladybug.png/revision/latest/scale-to-width-down/100?cb=20200419130123",
              Bug: "แมลงเต่าทองสีเหลือง",
              Location: ["เมืองซีเซ็น ตะวันออก", "ฟาร์ม", "น้ำตก ซ่าซ่า"],
              Season: "ฤดูใบไม้ผลิ",
              Note:
                "หน่วยกู้ภัยสีเหลืองของคณะที่กำลังจะตาย เป็นแมลงที่ขยันจริงๆ (4,3 มม. ~ 5,8 มม.)",
            },
            {
              img:
                "https://vignette.wikia.nocookie.net/hmwikia/images/3/3b/Longlocust.png/revision/latest/scale-to-width-down/100?cb=20200419130154",
              Bug: "ตั๊กแตนยาว",
              Location: [
                "ทะเลสาบ ป๋อมแป๋ม, เมืองซีเซ็น ตะวันตก, ป่าตัดฟืน, ป่ากลมกลิ้ง, ถ้ำ",
              ],
              Season: "ฤดูใบไม้ผลิ",
              Note: "เฮ้ ทำไมหน้ายาวจัง อุปส์แมลงอะไรเนี่ย!",
            },
            {
              img:
                "https://vignette.wikia.nocookie.net/hmwikia/images/4/46/Spottedlocust.png/revision/latest/scale-to-width-down/100?cb=20200419130221",
              Bug: "ตั๊กแตนด่าง",
              Location: [
                "ป่ากลมกลิ้ง, เมืองซีเซ็น ตะวันตก, ทะเลสาบ ป๋อมแป๋ม, ป่าตัดฟืน",
              ],
              Season: "ฤดูใบไม้ผลิ",
              Note: "จุดด่างดำและต่อยเหมือน ... ตั๊กแตน (27,8 มม. ~ 35,8 มม.)",
            },
            {
              img:
                "https://vignette.wikia.nocookie.net/hmwikia/images/a/a3/Molecricket.png/revision/latest/scale-to-width-down/100?cb=20200419130245",
              Bug: "จิ๊งหรีดตัวตุ่น",
              Location: [
                "ทะเลสาบ ป๋อมแป๋ม, ป่าตัดฟืน, เมืองซีเซ็น ตะวันตก, ถ้ำ",
              ],
              Season: "ฤดูใบไม้ผลิ",
              Note:
                "มันคือไฝ? คริกเก็ต? ไม่! มันคือจิ้งหรีดตัวตุ่น! (29,5 มม. ~ 35,5 มม.)",
            },
            {
              img:
                "https://vignette.wikia.nocookie.net/hmwikia/images/4/4b/Asiancomma.png/revision/latest/scale-to-width-down/100?cb=20200419130321",
              Bug: "ผีเสื้อเอเชียนคอมม่า",
              Location: ["ฟาร์ม, ป่าตัดฟืน, ป่ากลมกลิ้ง"],
              Season: "ฤดูใบไม้ผลิ",
              Note:
                "ลวดลายสีน้ำตาลดูปราณีตที่สุด รักการอาบแดด. (51,4 มม. ~ 62,8 มม.)",
            },
            {
              img:
                "https://vignette.wikia.nocookie.net/hmwikia/images/c/cb/Cabbagewhite.png/revision/latest/scale-to-width-down/100?cb=20200419130346",
              Bug: "ผีเสื้อกำหล่ำปลีขาว",
              Location: [
                "ป่าตัดฟืน, ฟาร์ม, ทะเลสาบ ป๋อมแป๋ม, หุบเขาหีดหวิว, แม่น้ำจ๋อมแจ๋ม, ป่ากลมกลิ้ง",
              ],
              Season: "ฤดูใบไม้ผลิ",
              Note:
                "มักจะเห็นที่สนามเด็กเล่น การมาของมันถึงหมายถึงฤดูใบไม้ผลิในไม่ช้า (33 มม. ~ 47,5 มม.)",
            },
            {
              img:
                "https://vignette.wikia.nocookie.net/hmwikia/images/0/0d/Coliaerata.png/revision/latest/scale-to-width-down/100?cb=20200419130706",
              Bug: "ผีเสื้อลายเมฆสีเหลือง",
              Location: [
                "ป่าตัดฟืน, ฟาร์ม, ทะเลสาบ ป๋อมแป๋ม, หุบเขาหีดหวิว, แม่น้ำจ๋อมแจ๋ม",
              ],
              Season: "ฤดูใบไม้ผลิ",
              Note:
                "มักจะเห็นที่สนามเด็กเล่น การมาของมันถึงหมายถึงฤดูใบไม้ผลิในไม่ช้า (33 มม. ~ 47,5 มม.)",
            },
            {
              img:
                "https://vignette.wikia.nocookie.net/hmwikia/images/8/85/Cpeacock.png/revision/latest/scale-to-width-down/100?cb=20200419125322",
              Bug: "ผีเสื้อลายนกยูง",
              Location: ["เมืองซีเซ็น ตะวันออก, น้ำตก ซ่าซ่า, ฟาร์ม, ป่าตัดฟืน"],
              Season: "ฤดูใบไม้ผลิ",
              Note:
                "นกยูงแห่งโลกแมลงตัวนี้ชอบอวดปีกสีน้ำเงิน ลองดูสิ! (104,4 มม. ~ 128,7 มม.)",
            },
            {
              img:
                "https://vignette.wikia.nocookie.net/hmwikia/images/e/ef/Swallowtail.png/revision/latest/scale-to-width-down/100?cb=20200419130423",
              Bug: "ผีเสื้อหางแฉก",
              Location: ["ฟาร์ม, หุบเขาหีดหวิว, ทะเลสาบ ป๋อมแป๋ม"],
              Season: "ฤดูใบไม้ผลิ",
              Note: "ผีเสื้อคลาสสิก มีญาติมากมาย (65,9 มม. ~ 86,9 มม.)",
            },
            {
              img:
                "https://vignette.wikia.nocookie.net/hmwikia/images/b/b8/Honeybee.png/revision/latest/scale-to-width-down/100?cb=20200419130459",
              Bug: "ผึ้ง",
              Location: [
                "แม่น้ำจ๋อมแจ๋ม, ทะเลสาบ ป๋อมแป๋ม, เมืองซีเซ็น ตะวันออก, น้ำตก ซ่าซ่า, ป่ากลมกลิ้ง, หุบเขาหีดหวิว, ฟาร์ม",
              ],
              Season: "ฤดูใบไม้ผลิ",
              Note:
                "ผู้จัดส่งของทางธรรมชาติ พวกเขายุ่งมากกับการทำน้ำผึ้งสำหรับรัง (12,8 มม. ~ 18,4 มม.)",
            },
          ],
        },
        {
          img:
            "https://vignette.wikia.nocookie.net/hmwikia/images/5/58/20200421161018_1.jpg/revision/latest?cb=20200421134123",
          name: "ฤดูร้อน",
          show: false,
          Desc: "ด้วงในฤดูร้อนจะปรากฏเฉพาะในบางช่วงเวลาตั้งแต่เวลา 00.00 น. ถึง 8.00 น.",
          lit: [
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/d/d7/Firefly.png/revision/latest/scale-to-width-down/100?cb=20200419131818",
              Bug: "แมลงวัน",
              Location: [
                "กลางคืน ทะเลสาบ ป๋อมแป๋ม",
              ],
              Season: "ฤดูร้อน",
              Note:
                "แมลงในฤดูร้อนที่โรแมนติก ดูพวกเขาสิในขณะที่คุณกินแตงโม (23,2 มม. ~ 42,1 มม.)",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/9/91/Lunamoth.png/revision/latest/scale-to-width-down/100?cb=20200419131836",
              Bug: "ผีเสื้อราตรีลูน่า",
              Location: [
                "กลางคืน/ไฟถนน น้ำตก ซ่าซ่า, เมืองซีเซ็น ตะวันตก, เมืองซีเซ็น ตะวันออก",
              ],
              Season: "ฤดูร้อน",
              Note:
                "มีปีกหยกกึ่งโปร่งแสง ขาวเหมือนนางฟ้า. (76,1 มม. ~ 93,9 มม.)",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/4/48/Mantis.png/revision/latest/scale-to-width-down/100?cb=20200419131902",
              Bug: "ตั๊กแตนตำข้าว",
              Location: [
                "เมืองซีเซ็น ตะวันตก, ป่าตัดฟืน, ป่ากลมกลิ้ง, ทะเลสาบ ป๋อมแป๋ม",
              ],
              Season: "ฤดูร้อน",
              Note:
                "นักล่าที่เก่งกาจ แต่มักจะไม่ตรงกับภรรยาของพวกเขา (61,5 มม. ~ 92,5 มม.)",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/b/bb/Bluemorph.png/revision/latest/scale-to-width-down/100?cb=20200419131949",
              Bug: "ผีเสื้อมอร์โฟ",
              Location: [
                "ป่าตัดฟืน",
              ],
              Season: "ฤดูร้อน",
              Note:
                "หายาก ปีกสีฟ้าสวยงามที่แทบจะดูดคุณเข้าไป (105 มม. ~ 145,2 มม.)",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/6/6b/Rajahbrooke.png/revision/latest/scale-to-width-down/100?cb=20200419132007",
              Bug: "ผีเสื้อราชาบรุค",
              Location: [
                "ป่ากลมกลิ้ง, ทะเลสาบ ป๋อมแป๋ม, หุบเขาหีดหวิว, ฟาร์ม",
              ],
              Season: "ฤดูร้อน",
              Note:
                "หากซานต้าเป็นแมลงเขาจะใช้สิ่งนี้เพื่อเป็นแนวทางในการเลื่อนของเขา (191,8 มม. ~ 238,4 มม.)",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/1/19/Herculesbeetle.png/revision/latest/scale-to-width-down/100?cb=20200419132104",
              Bug: "ด้วงเฮอคิวริส",
              Location: [
                "แม่น้ำจ๋อมแจ๋ม, ป่ากลมกลิ้ง, ถ้ำ",
              ],
              Season: "ฤดูร้อน",
              Note:
                "หายาก ตั้งชื่อตามนักกีฬาโอลิมปิกที่มีชื่อเสียง จะไม่โยนผ้าเช็ดตัว",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/0/01/Hornedatlas.png/revision/latest/scale-to-width-down/100?cb=20200419131535",
              Bug: "ด้วงสามเขา",
              Location: [
                "ป่ากลมกลิ้ง, เมืองซีเซ็น ตะวันออก, แม่น้ำจ๋อมแจ๋ม",
              ],
              Season: "ฤดูร้อน",
              Note:
                "ด้วงที่รักของคูเปอร์ (หายาก) พร้อมที่จะต่อสู้กับเขาทั้งสามของมัน อย่ายุ่งกับผู้ชายคนนี้!",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/2/21/Rhinobeetle.png/revision/latest/scale-to-width-down/100?cb=20200419132123",
              Bug: "ด้วงแรด",
              Location: [
                "น้ำตก ซ่าซ่า, เมืองซีเซ็น ตะวันออก, ป่ากลมกลิ้ง, แม่น้ำจ๋อมแจ๋ม, เมืองซีเซ็น ตะวันตก",
              ],
              Season: "ฤดูร้อน",
              Note:
                "แตรของมันทำให้เป็นที่นิยมของทุกคน เขาของมันเป็นประเด็นในวันนี้ (60,6 มม. ~ 83,2 มม.)",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/3/33/Biggtstag.png/revision/latest/scale-to-width-down/100?cb=20200419132143",
              Bug: "ด้วงเขี้ยวกาง",
              Location: [
                "น้ำตก ซ่าซ่า, เมืองซีเซ็น ตะวันออก, ป่ากลมกลิ้ง, แม่น้ำจ๋อมแจ๋ม, เมืองซีเซ็น ตะวันตก",
              ],
              Season: "ฤดูร้อน",
              Note:
                "เพชรดำ เหยื่อที่ติดอยู่ในขากรรไกรล่างขนาดยักษ์นี้จะไม่หนีไปไหน (45,1 มม. ~ 80,6 มม.)",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/3/34/Sawbeetle.png/revision/latest/scale-to-width-down/100?cb=20200419132205",
              Bug: "ด้วงฟันเลื่อย",
              Location: [
                "น้ำตก ซ่าซ่า, เมืองซีเซ็น ตะวันตก, แม่น้ำจ๋อมแจ๋ม, Large Rolin Stump, หุบเขาหีดหวิว, ฟาร์ม River, Zazan Beach, ถ้ำ",
              ],
              Season: "ฤดูร้อน",
              Note:
                "กรามที่เหมือนเลื่อยของมันทำให้มันกลายเป็นนักรบที่น่ากลัว (36,8 มม. ~ 75,2 มม.)",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/7/70/Hiratabeetle.png/revision/latest/scale-to-width-down/100?cb=20200419132229",
              Bug: "ด้วงฮิราตะ",
              Location: [
                "น้ำตก ซ่าซ่า, เมืองซีเซ็น ตะวันตก, แม่น้ำจ๋อมแจ๋ม, Large Rolin Stump, หุบเขาหีดหวิว, ฟาร์ม River, Zazan Beach, ถ้ำ",
              ],
              Season: "ฤดูร้อน",
              Note:
                "คู่แข่งที่ซ่อนอยู่ ลือกันว่าแข็งแกร่งที่สุดในชนิดนี้ (30,3 มม. ~ 74,6 มม.)",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/7/70/Hiratabeetle.png/revision/latest/scale-to-width-down/100?cb=20200419132229",
              Bug: "ด้วงมิยามะ",
              Location: [
                "ป่ากลมกลิ้ง, น้ำตก ซ่าซ่า, แม่น้ำจ๋อมแจ๋ม, เมืองซีเซ็น ตะวันตก",
              ],
              Season: "ฤดูร้อน",
              Note:
                "พบในป่าญี่ปุ่น น่าแปลกที่มันแข็งแกร่งในเวลากลางวัน (42,8 มม. ~ 75,6 มม.)",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/c/c5/Jumbodragonfly.png/revision/latest/scale-to-width-down/100?cb=20200419132345",
              Bug: "แมลงปอยักษ์",
              Location: [
                "เมืองซีเซ็น ตะวันออก, ฟาร์ม, ป่าตัดฟืน, แม่น้ำจ๋อมแจ๋ม",
              ],
              Season: "ฤดูร้อน",
              Note:
                "เครื่องบินขนาดใหญ่ของแมลงปอ มันค่อนข้างตรงไปตรงมา (74,7 มม. ~ 124,3 มม.)",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/0/05/Lesseremperor.png/revision/latest/scale-to-width-down/100?cb=20200419132406",
              Bug: "แมลงปอจักรพรรดิ",
              Location: [
                "เมืองซีเซ็น ตะวันออก, ป่าตัดฟืน, ป่ากลมกลิ้ง, ฟาร์ม, น้ำตก ซ่าซ่า, แม่น้ำจ๋อมแจ๋ม",
              ],
              Season: "ฤดูร้อน",
              Note:
                "อานสีน้ำเงินโดดเด่น แต่ไม่มีการขี่ใด ๆ (55,1 มม. ~ 90,4 มม.)",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/0/01/Browncicada.png/revision/latest/scale-to-width-down/100?cb=20200419132425",
              Bug: "จั๊กจั่นสีน้ำตาล",
              Location: [
                "ป่าตัดฟืน, แม่น้ำจ๋อมแจ๋ม, ป่ากลมกลิ้ง, ทะเลสาบ ป๋อมแป๋ม",
              ],
              Season: "ฤดูร้อน",
              Note:
                "จักจั่นนี้มรขลุ่ย โปรดทราบว่าฤดูร้อนมาถึงแล้ว (53,6 มม. ~ 67,7 มม.)",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/8/82/Duskcicada.png/revision/latest/scale-to-width-down/100?cb=20200419132443",
              Bug: "จั๊กจั่นเป็ด",
              Location: [
                "6PM~7:30PM (Dawn) แม่น้ำจ๋อมแจ๋ม, ทะเลสาบ ป๋อมแป๋ม, เมืองซีเซ็น ตะวันตก, ป่าตัดฟืน",
              ],
              Season: "ฤดูร้อน",
              Note:
                "เสียงร้องเบา ๆ ช่วยให้คุณรู้ว่าถึงเวลากลับบ้านแล้ว",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/e/ea/Minmincicada.png/revision/latest/scale-to-width-down/100?cb=20200419132506",
              Bug: "จั๊กจั่น มินมิน",
              Location: [
                "เมืองซีเซ็น ตะวันออก, ป่าตัดฟืน, ทะเลสาบ ป๋อมแป๋ม, ป่ากลมกลิ้ง, แม่น้ำจ๋อมแจ๋ม",
              ],
              Season: "ฤดูร้อน",
              Note:
                "เกือบจะเหมือนกับว่ามันเข้ากันกับเสียงตะโกนของจั๊กจั่นสีน้ำตาล (53,4 มม. ~ 65,8 มม.)",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/0/0b/Walkercicada.png/revision/latest/scale-to-width-down/100?cb=20200419132527",
              Bug: "จั๊กจั่นนักเดิน",
              Location: [
                "ป่ากลมกลิ้ง, น้ำตก ซ่าซ่า",
              ],
              Season: "ฤดูร้อน",
              Note:
                "เสียงร้องที่ชัดเจนทำให้คุณรู้ว่าฤดูร้อนกำลังจะสิ้นสุดลง",
            },
          ],
        },
        {
          img:
            "https://vignette.wikia.nocookie.net/hmwikia/images/e/e8/20200427140323_1.jpg/revision/latest?cb=20200427071957",
          name: "ฤดูใบไม้ร่วง",
          show: false,
          lit: [
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/1/12/Bellcricket.png/revision/latest/scale-to-width-down/100?cb=20200419133220",
              Bug: "จั๊กจั่นระฆัง",
              Location: [
                "กลางคืน ทะเลสาบ ป๋อมแป๋ม, เมืองซีเซ็น ตะวันตก",
              ],
              Season: "ฤดูใบไม้ร่วง",
              Note:
                "หายาก เพลงสูงส่งบ่งบอกถึงการเริ่มต้นฤดูใบไม้ร่วง เดินทางไปกับลมเย็น ๆ (17,4 มม. ~ 28,6 มม.)",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/1/15/Bridalcricket.png/revision/latest/scale-to-width-down/100?cb=20200419133239",
              Bug: "จั๊กจั่นเจ้าสาว",
              Location: [
                "ทะเลสาบ ป๋อมแป๋ม, เมืองซีเซ็น ตะวันตก",
              ],
              Season: "ฤดูใบไม้ร่วง",
              Note:
                "ตั้งชื่อตามม้าบิต เสียงเหมือนรถจนตรอก",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/3/3d/Cricket.png/revision/latest/scale-to-width-down/100?cb=20200419133259",
              Bug: "จั๊กจั่น",
              Location: [
                "ป่าตัดฟืน, เมืองซีเซ็น ตะวันตก, ถ้ำ, ทะเลสาบ ป๋อมแป๋ม",
              ],
              Season: "ฤดูใบไม้ร่วง",
              Note:
                "เสียงเหมือนนกตัวเล็ก ๆ ยังส่งสัญญาณถึงการเริ่มต้นฤดูใบไม้ร่วง (15,7 มม. ~ 46,2 มม.)",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/f/fc/Grasshopper.png/revision/latest/scale-to-width-down/100?cb=20200419133323",
              Bug: "ตั๊กแตน",
              Location: [
                "น้ำตก ซ่าซ่า, ฟาร์ม, แม่น้ำจ๋อมแจ๋ม, ป่าตัดฟืน, หุบเขาหีดหวิว",
              ],
              Season: "ฤดูใบไม้ร่วง",
              Note:
                "กีฬาโปรดของ ตั๊กแตน คืออะไร คริกเก็ต! (27,7 มม. ~ 41,8 มม.)",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/a/a9/Jewelbeetle.png/revision/latest/scale-to-width-down/100?cb=20200419133346",
              Bug: "แมงทับ",
              Location: [
                "ทะเลสาบ ป๋อมแป๋ม, ป่าตัดฟืน, แม่น้ำจ๋อมแจ๋ม, น้ำตก ซ่าซ่า, เมืองซีเซ็น ตะวันออก, ป่ากลมกลิ้ง",
              ],
              Season: "ฤดูใบไม้ร่วง",
              Note:
                "แมลงที่ทันสมัย โพสท่าด้วยเสื้อคลุมสีแดงและเขียวของคุณ (25,8 มม. ~ 43,2 มม.)",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/d/dc/Scarabbeetle.png/revision/latest/scale-to-width-down/100?cb=20200419133409",
              Bug: "แมงกินูน",
              Location: [
                "ป่ากลมกลิ้ง, เมืองซีเซ็น ตะวันออก, ป่าตัดฟืน",
              ],
              Season: "ฤดูใบไม้ร่วง",
              Note:
                "ครั้งหนึ่งเคยเป็นแมลงที่หวาดกลัว แต่มันก็เป็นเพียงด้วงธรรมดา (13,6 มม. ~ 17,5 มม.)",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/d/dc/Bluediadem.png/revision/latest/scale-to-width-down/100?cb=20200419133427",
              Bug: "ผีเสื้อบลูไดเดม",
              Location: [
                "ฟาร์ม, แม่น้ำจ๋อมแจ๋ม, ป่ากลมกลิ้ง",
              ],
              Season: "ฤดูใบไม้ร่วง",
              Note:
                "มีรูปลักษณ์ที่กว้างไกลด้วยสีดำและสีม่วงที่ตัดกัน",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/a/ae/Idealeuconoe.png/revision/latest/scale-to-width-down/100?cb=20200419133450",
              Bug: "ผีเสื้อว่าวกระดาษ",
              Location: [
                "ฟาร์ม, แม่น้ำจ๋อมแจ๋ม, ทะเลสาบ ป๋อมแป๋ม, ป่ากลมกลิ้ง",
              ],
              Season: "ฤดูใบไม้ร่วง",
              Note:
                "จากรังไหมทองคำ งดงามเมื่อนั่งบนดอกไม้ (114,7 มม. ~ 138,2 มม.)",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/3/38/Birdwing.png/revision/latest/scale-to-width-down/100?cb=20200419133509",
              Bug: "ผีเสื้อปีกนก",
              Location: [
                "ฟาร์ม, แม่น้ำจ๋อมแจ๋ม, ทะเลสาบ ป๋อมแป๋ม, ป่ากลมกลิ้ง",
              ],
              Season: "ฤดูใบไม้ร่วง",
              Note:
                "หายาก ตั้งชื่อตามอเล็กซานดราแห่งเดนมาร์ก มีปีกสีน้ำเงินเมทัลลิก",
            },
            {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/9/92/Oaksilkmoth.png/revision/latest/scale-to-width-down/100?cb=20200419133526",
              Bug: "มอดไหมโอ๊ก",
              Location: [
                "กลางคืน/ไฟถนน น้ำตก ซ่าซ่า, ป่ากลมกลิ้ง, ฟาร์ม, เมืองซีเซ็น ตะวันออก, เมืองซีเซ็น ตะวันตก",
              ],
              Season: "ฤดูใบไม้ร่วง",
              Note:
                "สามารถอยู่ได้โดยไม่ต้องกินอาหาร ประหยัดหรืออาจจะพยายามลดน้ำหนัก",
            }
            ],
        },
        {
          img:
            "https://vignette.wikia.nocookie.net/doraemon/images/7/78/Doraemon-story-of-seasons-switch-hero.jpg/revision/latest?cb=20200901132037&path-prefix=en",
          name: "ทุกฤดู",
          show: false,
          lit: [
             {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/5/56/Ant.png/revision/latest/scale-to-width-down/100?cb=20200419133743",
              Bug: "มด",
              Location: [
                "เมืองซีเซ็น ตะวันตก, เมืองซีเซ็น ตะวันออก, ป่ากลมกลิ้ง, ถ้ำ, ทะเลสาบ ป๋อมแป๋ม, แม่น้ำจ๋อมแจ๋ม",
              ],
              Season: "ทุกฤดู",
              Note:
                "ความแข็งแรงที่น่าทึ่งตามขนาดของมัน ไม่สามรถหยุดมันได้เมื่อมันทำงานร่วมกัน (6,8 มม. ~ 12,3 มม.)",
            },
             {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/c/c1/Wharfroach.png/revision/latest/scale-to-width-down/100?cb=20200419133808",
              Bug: "แมลงสาบท่าเรือ",
              Location: [
                "หาดซัดซาด",
              ],
              Season: "ทุกฤดู",
              Note:
                "แมลงประหลาดที่อาศัยอยู่ใกล้ฝั่ง ไม่มากเหมือนมัน (34,1 มม. ~ 92,6 มม.)",
            },
             {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/4/43/Centipede.png/revision/latest/scale-to-width-down/100?cb=20200419133840",
              Bug: "ตะขาบ",
              Location: [
                "ป่ากลมกลิ้ง, ป่าตัดฟืน, เมืองซีเซ็น ตะวันออก",
              ],
              Season: "ทุกฤดู",
              Note:
                "ขามากมายของมันยังเป็นอาวุธที่ยิ่งใหญ่ที่สุด มันไม่เคยปล่อยให้เหยื่อหนีไปไหน (87,3 มม. ~ 152,1 มม.)",
            },
             {
              img:"https://vignette.wikia.nocookie.net/hmwikia/images/a/a6/Rolypoly.png/revision/latest/scale-to-width-down/100?cb=20200419133918",
              Bug: "กระสุนพระอินทร์",
              Location: [
                "ฟาร์ม, เมืองซีเซ็น ตะวันตก, ถ้ำ, หุบเขาหีดหวิว, ป่ากลมกลิ้ง",
              ],
              Season: "ทุกฤดู",
              Note:
                "มักพบใต้โขดหิน มันม้วนเป็นลูกบอลน่ารักเมื่อสัมผัส (11 มม. ~ 18,2 มม.)",
            },
          ],
        },
      ],
    };
  },
  methods: {
    datafortable: function(namedata) {
      const result = this.datas.find(({ name }) => name == namedata);
      return result.data;
    },
  },
};
</script>

<style></style>
