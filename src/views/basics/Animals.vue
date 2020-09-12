<template>
  <div class="Animals">
    <v-row justify="center">
      <v-col cols="12">
        <h1>สัตว์เลี้ยง</h1>
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
                  <h3>การกระทำ</h3>
                </th>
                <th class="text-left">
                  <h3>ความรัก</h3>
                </th>
                <th class="text-left">
                  <h3>ความเครียด</h3>
                </th>
                <th class="text-left">
                  <h3>สัตว์เลี้ยง</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in Animals" :key="item.name">
                <td>{{ item.Action }}</td>
                <td>{{ item.Affection }}</td>
                <td>{{ item.Stress }}</td>
                <td>{{ item.Animals }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-alert
          dense
          color="#FFFDE7"
        >📢  ถ้าสัตว์ที่เลี้ยงไว้มีความเครียดถึง 60 หน่วยจะป่วยนะ และถ้าปล่อยให้เครียดจน 500 ก็จะตาย!</v-alert>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-alert
          text dense outlined color="red"
        >น้อง สามารถป่วยได้ด้วยนะถ้าปล่อยให้แทะเล็มหญ้านอกบ้าน (เลี้ยงนอกบ้าน) ตอนมีพายุเข้า!</v-alert>
      </v-col>
    </v-row>
    <v-row justify="center">
        <v-col cols="12">
          <v-responsive>
            <v-card-text><span>ความรักและความเครียดจากการปล่อยน้องกินหญ้าจะคำนวณทุกๆ 60 นาทีในนาทีที่ 00, 10, 20, 30, 40 และ 50 เวลาที่เริ่มต้น 60 นาทีนั้นจะเป็นตัวกำหนดตัวปรับความรักและความเครียดของน้อง</span></v-card-text>
          </v-responsive>
        </v-col>
      </v-row>

    <v-row justify="center">
      <v-col cols="8">
        <v-simple-table dark>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  <h3>สภาพอากาศ</h3>
                </th>
                <th class="text-left">
                  <h3>เวลาที่ปล่อยไว้ข้างนอก</h3>
                </th>
                <th class="text-left">
                  <h3>ความรัก</h3>
                </th>
                <th class="text-left">
                  <h3>ความดเครียด</h3>
                </th>
                <th class="text-left">
                  <h3>สัตว์เลี้ยง</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in Weather" :key="item.name">
                <td>{{ item.Weather }}</td>
                <td>{{ item.Grazing }}</td>
                <td>{{ item.Affection }}</td>
                <td>{{ item.Stress }}</td>
                <td>{{ item.Animal }}</td>
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
  name: "Animals",
  data() {
    return {
      Animals: [{ Action: "พูดคุย", Affection: "2", Stress: "-12", Animals: "ไก่ กุ๊กๆ" },
      { Action: "พูดคุย", Affection: "4", Stress: "0", Animals: "น้องแมว" },
      { Action: "พูดคุย", Affection: "2", Stress: "-4", Animals: "สัตว์อื่นๆ ยกเว้น ไก่ และ แมว" },
      { Action: "แปรงขน", Affection: "2", Stress: "-4", Animals: "วัว แกะ ม้า" },
      { Action: "เก็บเกี่ยวผลผลิตจากน้อง", Affection: "2", Stress: "-4", Animals: "ทุกตัว (ที่เก็บได้นะ)" },
      { Action: "ให้อาหาร", Affection: "2", Stress: "-4", Animals: "ทุกตัว" },
      { Action: "ให้ขนม", Affection: "1", Stress: "-4", Animals: "ทุกตัวยกเว้น แมว" },
      { Action: "ให้ขนม", Affection: "4", Stress: "0", Animals: "น้องแมว" },
      { Action: "งดอาหาร", Affection: "-5", Stress: "50", Animals: "ทุกตัว" },
      { Action: "งดคุย", Affection: "-1", Stress: "4", Animals: "ทุกตัวยกเว้น แมว" },
      { Action: "งดคุย", Affection: "-1", Stress: "0", Animals: "น้องแมว" },
      { Action: "ไม่เก็บผลผลิตจากน้อง", Affection: "0", Stress: "50", Animals: "ทุกตัว" },
      { Action: "ให้ยา", Affection: "-1", Stress: "50", Animals: "ทุกตัว" },
      { Action: "ไข้จากพายุ", Affection: "-20", Stress: "20", Animals: "ทุกตัว" },
      { Action: "ป่วย", Affection: "0", Stress: "1", Animals: "ทุกตัว" }],
      Weather: [{Weather:"มีแดด",Grazing :"06:00-19:00",Affection:"1",Stress:"-1",Animal:"ม้า วัว แกะ ไก่"},
      {Weather:"",Grazing :"19:00-00:00",Affection:"0",Stress:"0",Animal:""},
      {Weather:"",Grazing :"00:00-06:00",Affection:"-2",Stress:"2",Animal:""},
      {Weather:"ฝนตก",Grazing :"06:00-19:00",Affection:"-1",Stress:"0",Animal:"ม้า วัว แกะ ไก่่"},
      {Weather:"",Grazing :"19:00-00:00",Affection:"-1",Stress:"0",Animal:""},
      {Weather:"",Grazing :"00:00-06:00",Affection:"-3",Stress:"3",Animal:""},
      {Weather:"มีแดด",Grazing :"06:00-19:00",Affection:"1",Stress:"-1",Animal:"หมา แมว"},
      {Weather:"",Grazing :"19:00-00:00",Affection:"0",Stress:"0",Animal:""},
      {Weather:"",Grazing :"00:00-06:00",Affection:"0",Stress:"1",Animal:""},
      {Weather:"ฝนตก",Grazing :"06:00-19:00",Affection:"0",Stress:"1",Animal:"หมา แมว"},
      {Weather:"",Grazing :"19:00-00:00",Affection:"0",Stress:"1",Animal:""},
      {Weather:"",Grazing :"00:00-06:00",Affection:"0",Stress:"1",Animal:""},]
    };
  }
};
</script>

<style>
</style>