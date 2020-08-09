<template>
  <div class="Stamina">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <h1>ค่าพลังงาน</h1>
          <v-divider></v-divider>
          <v-responsive>
            <v-card-text
              ><span>ค่าพลังงานที่โนบิตะมีสามารถบริหารจัดการให้ใช้ได้อย่างคุ้มค่าในแต่ละวันนะ
              !</span></v-card-text
            >
          </v-responsive>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12">
          <h3>การนอน</h3>
          <v-divider></v-divider>
          <v-responsive>
            <v-card-text>
              <blockquote class="blockquote font-weight-bold">
                การกระทำทั้งหมดข้างล่างนี้จะทำให้โนบิตะตื่นที่บ้านตอน 06:00
                เสมอแต่ถ้าโนบิตะไม่ได้นอนจน 06:00
                จะทำให้โนบิตะสลบเหมือดแล้วไปตื่นอีกทีที่คลินิคตอน 12:00
                นะพร้อมค่าพลังงาน 100% เลย !
              </blockquote>
              <v-row justify="center">
                <v-col cols="12" sm="9" md="7" lg="5" xl="5">
                  <v-simple-table dark>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-center">
                            <h3>นอนก่อนเวลา</h3>
                          </th>
                          <th class="text-center">
                            <h3>ฟื้นฟู (ของพลังงานทั้งหมด)</h3>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, i) in Sleep" :key="i">
                          <td class="text-center">{{ item.time }}</td>
                          <td class="text-center">{{ item.per }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-col>
              </v-row>
              <br />

              <v-alert border="right" colored-border type="info" elevation="3">
                ถ้าโนบิตะมีพลังงานเต็มเปี่ยม (สูงสุด 150 หน่วย
                โดยการซื้อยาจากคุณหมอ Regis) โนบิตะจะฟื้นฟูพลังงาน 135 หน่วย
                ด้วยการนอนระหว่าง 21:00-00:00
              </v-alert>
              <v-alert border="right" colored-border type="info" elevation="3">
                ถ้าโนบิตะได้กินเครื่องดื่มชูกำลัง (Vigorage) ราคา 1.200 G
                ที่ซื้อจากคลีนิคโนบิตะจะตื่นตอน 06:00 และฟื้นฟูพลังงาน 60 หน่วย
              </v-alert>
            </v-card-text>
          </v-responsive>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12">
          <h3>การงีบหลับ</h3>
          <v-divider></v-divider>
          <v-card-text>
            <v-response><span>
              การงีบหลับ 1 ชั่วโมงจะฟื้นฟูพลังงาน 10 หน่วย</span>
              <span class="font-weight-bold"
                >!! การนับการฟื้นฟูจะนับจากต้นชั่วโมง (นาทีที่ 00-29)
                เท่านั้นไม่งั้นต้องทบชั่วโมงต่อไปนะ !!</span
              ><br />
              ยกตัวอย่างเช่น : <br />
            </v-response>
          </v-card-text>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="9" md="7" lg="5" xl="5">
          <v-simple-table dark>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">
                    <h3>ช่วงเวลาเริ่มงีบ - ตื่น</h3>
                  </th>
                  <th class="text-center">
                    <h3>พลังงาน</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in Naps" :key="item.name">
                  <td class="text-center">{{ item }}</td>
                  <td class="text-center" v-if="i == 2">
                    ไม่ได้พลังงาน (ต้องนอนจน 14:00)
                  </td>
                  <td class="text-center" v-else>10</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12">
          <h3>การเพิ่มหลอดพลังงานของโนบิตะ</h3>
          <v-divider></v-divider>
          <v-responsive>
            <v-card-text ><span>
              เราสามารถเพิ่มขีดจำกัดของหลอดพลังงานโดยการซื้อยาที่คลีนีค<br />
              คุยกับคุณหมอ Regis ในคลินิคสังเกตในรายการจะเจอ Regis Drink ราคา
              8000g.<br />
              หลังจากซื้อแล้วหลอดพลังงานเราจะเพิ่มขีดจำกัดทีละ 5 หน่วย<br /></span>
              <v-row><v-col cols="12">
                <v-alert
                
                  border="right"
                  colored-border
                  type="info"
                  elevation="3"
                >
                  เราสามารถซื้อวนไปจนถึงขีดสูงสุดที่ 150 หน่วยนะ! แต่ราคาก็จะสูงขึ้นตามจำนวนครั้งที่ซื้อ
                </v-alert>
              </v-col></v-row>
              
            </v-card-text>
          </v-responsive>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Stamina",
  data: () => ({
    Naps: ["12:00-13:00", "12:29-13:00", "12:30-13:00", "12:30-14:00"],
    Sleep: [
      { time: "21:00", per: "100%" },
      { time: "00:00", per: "90%" },
      { time: "03:00", per: "60%" },
      { time: "06:00", per: "30%" },
    ],
  }),
  components: {},
};
</script>
