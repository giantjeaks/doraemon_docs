<template>
  <div class="Stores">
    <v-row justify="center">
      <v-col cols="12">
        <h1>ร้านค้า และ แหล่งช็อปปิ้ง</h1>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <h2>เมืองซีเซ็น ตะวันออก</h2>
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
                  <h3>ชื่อร้าน</h3>
                </th>
                <th class="text-left">
                  <h3>อา</h3>
                </th>
                <th class="text-left">
                  <h3>จ</h3>
                </th>
                <th class="text-left">
                  <h3>อ</h3>
                </th>
                <th class="text-left">
                  <h3>พ</h3>
                </th>
                <th class="text-left">
                  <h3>พฤ</h3>
                </th>
                <th class="text-left">
                  <h3>ศ</h3>
                </th>
                <th class="text-left">
                  <h3>ส</h3>
                </th>
                <th class="text-left">
                  <h3>ช่วงเวลาเปิด</h3>
                </th>
                <th class="text-left">
                  <h3>คุยกับ</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in East" :key="item.name">
                <td>
                  <v-row align="center">
                    <v-col cols="2" style="max-width: none;padding: 0px;">
                      <v-img width="40px" :src="item.img"></v-img>
                    </v-col>
                    <v-col cols="10" style="max-width: none;padding: 0px;">{{ item.Name }}</v-col>
                  </v-row>
                </td>
                <!-- <td>{{ item.SU }}</td>
                <td>{{ item.MO }}</td>
                <td>{{ item.TU }}</td>
                <td>{{ item.WE }}</td>
                <td>{{ item.TH }}</td>
                <td>{{ item.FR }}</td>
                <td>{{ item.SA }}</td> -->
                <td><v-icon :color="item.SU=='Yes'? 'green':'red'">{{item.SU=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.MO=='Yes'? 'green':'red'">{{item.MO=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.TU=='Yes'? 'green':'red'">{{item.TU=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.WE=='Yes'? 'green':'red'">{{item.WE=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.TH=='Yes'? 'green':'red'">{{item.TH=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.FR=='Yes'? 'green':'red'">{{item.FR=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.SA=='Yes'? 'green':'red'">{{item.SA=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td>
                  <span v-for="(hour,i) in item.Hours" :key="i">
                    {{hour}}
                    <br />
                  </span>
                </td>
                <td>{{ item.Talk}}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>
            <span>
              คุณสามารถซื้อหรือทำอะไรที่ร้านได้บ้าง ?
              <br />🌱 ร้านขายของชำ นิคแน็ค ⇒ เมล็ดพันธุ์, ปุ๋ย, กระเป๋าใบใหญ่ และ ตาข่ายจับแมลง (ครั้งเดียวเท่านั้น)
              <br />🍴 ร้านอาหาร ง่ำง่ำ ⇒ ผลผลิต, อาหาร, วัตถุดิบ, ตำราทำอาหาร, เครื่องครัว
              <br />🏥 โรงพยาบาลของคุณโลค็อด ⇒ ยาฟื้นฟูพลังกาย, ยาเพิ่มขีดจำกัดพลังกาย, ยารักษาสัตว์
              <br />💎 ร้านตีเหล็ก กิ๊งก๊องแก๊ง ⇒ อัพเกรดเครื่องมือ, แร่, เครื่องทำต่างๆ (ต้องผ่านเหตุการณ์ฤดูใบไม้ร่วง 1 ปี 1 และ เบลคกับสมิกมีหัวใจอย่างน้อย 4 ดวง ♡♡♡♡)
            </span>
          </v-card-text>
        </v-responsive>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <h2>เมืองซีเซ็น ตะวันตก</h2>
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
                  <h3>ชื่อร้านค้า</h3>
                </th>
                <th class="text-left">
                  <h3>อา</h3>
                </th>
                <th class="text-left">
                  <h3>จ</h3>
                </th>
                <th class="text-left">
                  <h3>อ</h3>
                </th>
                <th class="text-left">
                  <h3>พ</h3>
                </th>
                <th class="text-left">
                  <h3>พฤ</h3>
                </th>
                <th class="text-left">
                  <h3>ศ</h3>
                </th>
                <th class="text-left">
                  <h3>ส</h3>
                </th>
                <th class="text-left">
                  <h3>ช่วงเวลาเปิด</h3>
                </th>
                <th class="text-left">
                  <h3>คุยกับ</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in West" :key="item.name">
                <td>
                  <v-row align="center">
                    <v-col cols="2" style="max-width: none;padding: 0px;">
                      <v-img width="40px" :src="item.img"></v-img>
                    </v-col>
                    <v-col cols="10" style="max-width: none;padding: 0px;">{{ item.Name }}</v-col>
                  </v-row>
                </td>
                <td><v-icon :color="item.SU=='Yes'? 'green':'red'">{{item.SU=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.MO=='Yes'? 'green':'red'">{{item.MO=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.TU=='Yes'? 'green':'red'">{{item.TU=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.WE=='Yes'? 'green':'red'">{{item.WE=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.TH=='Yes'? 'green':'red'">{{item.TH=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.FR=='Yes'? 'green':'red'">{{item.FR=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.SA=='Yes'? 'green':'red'">{{item.SA=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td>
                  <span v-for="(hour,i) in item.Hours" :key="i">
                    {{hour}}
                    <br />
                  </span>
                </td>
                <td>{{ item.Talk}}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>
            <span>
              สามารถซื้ออะไรได้บ้าง
              <br />🐮 ร้านขายสัตว์ กูเตมอค ⇒ วัว แกะ ม้า, เครื่องดูแลพวกสัตว์, อาหารสัตว์, ขนมสัตว์
              <br />🐔 ร้านขายไก่ เอ้กอีเอ้กเฮาส์ ⇒ ไก่, อาหารสัตว์, ขนมสัตว์
            </span>
          </v-card-text>
        </v-responsive>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <h2>ป่าตัดฟืน</h2>
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
                  <h3>ชื่อร้าน</h3>
                </th>
                <th class="text-left">
                  <h3>อา</h3>
                </th>
                <th class="text-left">
                  <h3>จ</h3>
                </th>
                <th class="text-left">
                  <h3>อ</h3>
                </th>
                <th class="text-left">
                  <h3>พ</h3>
                </th>
                <th class="text-left">
                  <h3>พฤ</h3>
                </th>
                <th class="text-left">
                  <h3>ศ</h3>
                </th>
                <th class="text-left">
                  <h3>ส</h3>
                </th>
                <th class="text-left">
                  <h3>ช่วงเวลาเปิด</h3>
                </th>
                <th class="text-left">
                  <h3>คุยกับ</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in Forest" :key="item.name">
                <td>
                  <v-row align="center">
                    <v-col cols="2" style="max-width: none;padding: 0px;">
                      <v-img width="40px" :src="item.img"></v-img>
                    </v-col>
                    <v-col cols="10" style="max-width: none;padding: 0px;">{{ item.Name }}</v-col>
                  </v-row>
                </td>
                <td><v-icon :color="item.SU=='Yes'? 'green':'red'">{{item.SU=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.MO=='Yes'? 'green':'red'">{{item.MO=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.TU=='Yes'? 'green':'red'">{{item.TU=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.WE=='Yes'? 'green':'red'">{{item.WE=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.TH=='Yes'? 'green':'red'">{{item.TH=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.FR=='Yes'? 'green':'red'">{{item.FR=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.SA=='Yes'? 'green':'red'">{{item.SA=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td>
                  <span v-for="(hour,i) in item.Hours" :key="i">
                    {{hour}}
                    <br />
                  </span>
                </td>
                <td>{{ item.Talk}}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>
            <span>
              ซื้ออะไรได้บ้าง ?
              <br />🌲 ร้านช่างไม้ ป๊อกป๊อกป๊อก ⇒ อัพเกรดสิ่งก่อสร้าง, เฟอร์นิเจอร์, ของตกแต่งฟาร์ม, ไม้และหิน
            </span>
          </v-card-text>
        </v-responsive>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <h2>ถ้ำ</h2>
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
                  <h3>ชื่อร้าน</h3>
                </th>
                <th class="text-left">
                  <h3>อา</h3>
                </th>
                <th class="text-left">
                  <h3>จ</h3>
                </th>
                <th class="text-left">
                  <h3>อ</h3>
                </th>
                <th class="text-left">
                  <h3>พ</h3>
                </th>
                <th class="text-left">
                  <h3>พฤ</h3>
                </th>
                <th class="text-left">
                  <h3>ศ</h3>
                </th>
                <th class="text-left">
                  <h3>ส</h3>
                </th>
                <th class="text-left">
                  <h3>ช่วงเวลาเปิด</h3>
                </th>
                <th class="text-left">
                  <h3>คุยกับ</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in Zazan" :key="item.name">
                <td>
                  <v-row align="center">
                    <v-col cols="2" style="max-width: none;padding: 0px;">
                      <v-img width="40px" :src="item.img"></v-img>
                    </v-col>
                    <v-col cols="10" style="max-width: none;padding: 0px;">{{ item.Name }}</v-col>
                  </v-row>
                </td>
                <td><v-icon :color="item.SU=='Yes'? 'green':'red'">{{item.SU=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.MO=='Yes'? 'green':'red'">{{item.MO=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.TU=='Yes'? 'green':'red'">{{item.TU=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.WE=='Yes'? 'green':'red'">{{item.WE=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.TH=='Yes'? 'green':'red'">{{item.TH=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.FR=='Yes'? 'green':'red'">{{item.FR=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.SA=='Yes'? 'green':'red'">{{item.SA=='Yes'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td>
                  <span v-for="(hour,i) in item.Hours" :key="i">
                    {{hour}}
                    <br />
                  </span>
                </td>
                <td>{{ item.Talk}}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>
            <span>
              สามารถซื้ออะไรได้บ้าง
              <br /> 🐟 ร้านตกปลาของคุณซีฟี่ ⇒ อุปกรณ์ตกปลา
            </span>
          </v-card-text>
        </v-responsive>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Stores",
  data() {
    return {
      East: [
        {
          img:"https://i.imgur.com/zXfBmc5.png",
          Name: "🌱 ร้านขายของชำ นิคแน๊ค",
          SU: "Yes",
          MO: "Yes",
          TU: "Yes",
          WE: "Yes",
          TH: "No",
          FR: "Yes",
          SA: "Yes",
          Hours: ["03:00 PM - 08:00 PM"],
          Talk: "เอตี้"
        },
        {
          img:"https://i.imgur.com/euK3t3D.png",
          Name: " 🍴 ร้านอาหาร ง่ำง่ำ",
          SU: "Yes",
          MO: "NO",
          TU: "Yes",
          WE: "Yes",
          TH: "Yes",
          FR: "NO",
          SA: "Yes",
          Hours: ["เที่ยง - 04:00 PM", "06:00 PM - 10:00 PM"],
          Talk: "เลสเตอร์"
        },
        {
          img:"https://i.imgur.com/ae937aF.png",
          Name: "🏥 โรงพยาบาลของคุณโลค็อด",
          SU: "NO",
          MO: "Yes",
          TU: "Yes",
          WE: "Yes",
          TH: "NO",
          FR: "Yes",
          SA: "Yes",
          Hours: ["10:00 AM - เที่ยง", "02:00 PM - 05:00 PM","10:00 AM - เที่ยง (เฉพาะวันเสาร์)"],
          Talk: "โลค็อด"
        },
        {
          img:"https://i.imgur.com/0zWMlkT.png",
          Name: "💎 ร้านตีเหล็ก กิ๊งก๊องแก๊ง",
          SU: "No",
          MO: "No",
          TU: "Yes",
          WE: "Yes",
          TH: "Yes",
          FR: "Yes",
          SA: "Yes",
          Hours: ["10:00 AM - เที่ยง", "01:00 PM - 04:00 PM"],
          Talk: "สมิก"
        }
      ],
      West: [
        {
          img:"https://i.imgur.com/smB2a5V.png",
          Name: "🐮 ร้านขายสัตว์ กูเตมอค",
          SU: "Yes",
          MO: "Yes",
          TU: "Yes",
          WE: "NO",
          TH: "Yes",
          FR: "NO",
          SA: "Yes",
          Hours: ["09:00 AM - เที่ยง", "01:00 PM - 04:00 PM"],
          Talk: "ยู"
        },
        {
          img:"https://i.imgur.com/43IHxf3.png",
          Name: "🐔 ร้านขายไก่ เอ้กอีเอ้กเฮาส์",
          SU: "Yes",
          MO: "Yes",
          TU: "NO",
          WE: "Yes",
          TH: "Yes",
          FR: "NO",
          SA: "Yes",
          Hours: ["09:00 AM - 03:00 PM"],
          Talk: "เฮเลน"
        }
      ],
      Forest: [
        {
          img:"https://i.imgur.com/KnBVI7G.png",
          Name: "🌲 ร้านช่างไม้ ป๊อกแป๊ก",
          SU: "Yes",
          MO: "Yes",
          TU: "NO",
          WE: "Yes",
          TH: "Yes",
          FR: "Yes",
          SA: "NO",
          Hours: ["10:00 AM - เที่ยง,", "04:00 PM - 08:00 PM"],
          Talk: "เพ็นเตอร์"
        }
      ],
      Zazan: [
        {
          img:"https://i.imgur.com/2j0uBy8.png",
          Name: "🐟 ร้านตกปลาของคุณซีฟี่",
          SU: "Yes",
          MO: "NO",
          TU: "Yes",
          WE: "NO",
          TH: "Yes",
          FR: "NO",
          SA: "Yes",
          Hours: ["08:00 AM - เที่ยง, ", "02:00 PM - 04:00 PM"],
          Talk: "ซีฟี่"
        }
      ]
    };
  }
};
</script>

<style>
</style>