<template>
  <div class="Friendship">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <h1>ความสัมพันธ์</h1>
          <v-divider></v-divider>
          <v-responsive>
            <v-card-text><span>การปฏิสัมพันธ์ของคุณกับ ชาวบ้าน, คนแคระ(ภูติน้อย), สัตวเลี้ยง, สัตว์ป่า, ปศุสัตว์ สามารถเปลี่ยนความชื่นชอบของพวกเขาที่มีต่อคุณได้ ค่าความสัมพันธ์จะแสดงเป็นรูปแบบสีของหัวใจในแต่ละระดับเมื่อเราสนทนากับพวกเขา</span></v-card-text>
          </v-responsive>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12">
          <h2>ระดับความสัมพันธ์</h2>
          <v-divider></v-divider>
          <v-responsive>
            <v-card-text><span>คนแคระ นับเป็นชาวบ้านนะ! สัตว์ป่า ได้แก่ น้องลิง, น้องกระต่าย, กระรอก, หมี</span></v-card-text>
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
                    <h3>ระดับ</h3>
                  </th>
                  <th class="text-left">
                    <h3>หัวใจ</h3>
                  </th>
                  <th class="text-left">
                    <h3>ชาวบ้าน</h3>
                  </th>
                  <th class="text-left">
                    <h3>สัตว์ป่า</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,i) in Likability" :key="item.name">
                  <td>{{ i+1 }}</td>
                  <td>
                    <v-img width="40px" :src="item.img"></v-img>
                  </td>
                  <td>{{ item.Villagers }}</td>
                  <td>{{ item.Animals }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12">
          <h2>การกระทำที่ส่งผลต่อหัวใจ♥</h2>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="5">
          <v-simple-table dark>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    <h3>การกระทำ</h3>
                  </th>
                  <th class="text-left">
                    <h3>แต้ม</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item) in ActionsHearts" :key="item.name">
                  <td>{{ item.Action }}</td>
                  <td>{{ item.Points }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12">
          <h2>คนแคระ (ภูติน้อย)</h2>
          <v-divider></v-divider>
          <v-responsive>
            <v-card-text><span>การทำงานให้เราของภูติน้อยขึ้นกับผลของหัวใจ♥</span></v-card-text>
          </v-responsive>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="9" md="7" lg="5" 	xl="3">
          <v-simple-table dark>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    <h3>ระดับ</h3>
                  </th>
                  <th class="text-center">
                    <h3>สี</h3>
                  </th>
                  <th class="text-left">
                    <h3>วัน</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ '1-5' }}</td>
                  <td>
                    <v-row >
                      <v-col cols="1" sm="2" style="max-width: none;padding: 0px;">
                        <v-img width="40px" :src="Likability[0].img"></v-img>
                      </v-col>
                      <v-col cols="2" style="max-width: none;padding: 0px;">
                        <v-img width="40px" :src="Likability[1].img"></v-img>
                      </v-col>
                      <v-col cols="2" style="max-width: none;padding: 0px;">
                        <v-img width="40px" :src="Likability[2].img"></v-img>
                      </v-col>
                      <v-col cols="2" style="max-width: none;padding: 0px;">
                        <v-img width="40px" :src="Likability[3].img"></v-img>
                      </v-col>
                      <v-col cols="2" style="max-width: none;padding: 0px;">
                        <v-img width="40px" :src="Likability[4].img"></v-img>
                      </v-col>
                    </v-row>
                  </td>
                  <td>{{ 2 }}</td>
                </tr>
                <tr>
                  <td>{{ '6-8' }}</td>
                  <td>
                    <v-row >
                      <v-col cols="2" style="max-width: none;padding: 0px;">
                        <v-img width="40px" :src="Likability[5].img"></v-img>
                      </v-col>
                      <v-col cols="2" style="max-width: none;padding: 0px;">
                        <v-img width="40px" :src="Likability[6].img"></v-img>
                      </v-col>
                      <v-col cols="2" style="max-width: none;padding: 0px;">
                        <v-img width="40px" :src="Likability[7].img"></v-img>
                      </v-col>
                    </v-row>
                  </td>
                  <td>{{ 4 }}</td>
                </tr>
                <tr>
                  <td>{{ '9-10' }}</td>
                  <td>
                    <v-row >
                      <v-col cols="2" style="max-width: none;padding: 0px;">
                        <v-img width="40px" :src="Likability[8].img"></v-img>
                      </v-col>
                      <v-col cols="2" style="max-width: none;padding: 0px;">
                        <v-img width="40px" :src="Likability[9].img"></v-img>
                      </v-col>
                    </v-row>
                  </td>
                  <td>{{ 7 }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-row justify="center"></v-row>
        </v-col>
      </v-row>
      <v-col cols="12">
        <v-responsive>
          <v-card-text><span>ทุกครั้งที่ขอให้ภูติน้อยมาช่วย แต้มหัวใจจะลดลง 120 แต้มนะ จะมีผลหลังจากวันที่ทำงานวันสุดท้าย !</span></v-card-text>
        </v-responsive>
      </v-col>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Friendship",
  components: {},
  data() {
    return {
      Likability: [
        {
          img: "https://i.imgur.com/6SLdSRp.png",
          Villagers: 0,
          Animals: 0
        },
        {
          img: "https://i.imgur.com/liMDPLE.png",
          Villagers: 100,
          Animals: 100
        },
        {
          img: "https://i.imgur.com/K4igqSS.png",
          Villagers: 400,
          Animals: 200
        },
        {
          img: "https://i.imgur.com/D3tY59B.png",
          Villagers: 900,
          Animals: 400
        },
        {
          img: "https://i.imgur.com/Zp8e3sI.png",
          Villagers: 1700,
          Animals: 700
        },
        {
          img: "https://i.imgur.com/zZgEr2q.png",
          Villagers: 2800,
          Animals: 1100
        },
        {
          img: "https://i.imgur.com/SAPo0gs.png",
          Villagers: 4200,
          Animals: 1700
        },
        {
          img: "https://i.imgur.com/KFmBjOK.png",
          Villagers: 5900,
          Animals: 2600
        },
        {
          img: "https://i.imgur.com/0BtTzgw.png",
          Villagers: 7900,
          Animals: 3800
        },
        {
          img: "https://i.imgur.com/2fxnvye.png",
          Villagers: 10000,
          Animals: 5000
        }
      ],
      ActionsHearts: [
        {
          Action: "คุย (ครั้งแรก)",
          Points: "+25"
        },
        {
          Action: "ทักทาย (คุยครบ 3 ครั้ง)",
          Points: "+5"
        },
        {
          Action: "ให้ของขวัญ (ปกติ)",
          Points: "+5"
        },
        {
          Action: "ให้ของขวัญ (ของดี/ชอบ)",
          Points: "+25"
        },
        {
          Action: "ให้ของขวัญ (ของโปรด/ของรัก)",
          Points: "+60"
        },
        {
          Action: "ให้ของขวัญ (ของไม่ดี/ของที่ไม่ชอบ)",
          Points: "-10"
        },
        {
          Action: "เข้าร่วมเทศกาล",
          Points: "+10"
        }
      ]
    };
  }
};
</script>
