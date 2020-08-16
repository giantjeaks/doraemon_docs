<template>
  <div class="Blacksmith">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <h1>ร้านช่างตีเหล็ก</h1>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12">
          <h2>อัพเกรดอุปกรณ์</h2>
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
                    <h3>ขั้น</h3>
                  </th>
                  <th class="text-left">
                    <img
                      src="../../../assets/Ore/BuildingStone.jpg"
                      width="50px"
                      style="padding-top: 2px"
                    />
                    <h3>หินก่อสร้าง</h3>
                  </th>
                  <th class="text-left">
                    <img
                      src="../../../assets/Ore/Copper.jpg"
                      width="50px"
                      style="padding-top: 2px"
                    />
                    <h3>แร่ทองแดง</h3>
                  </th>
                  <th class="text-left">
                    <img
                      src="../../../assets/Ore/Iron.jpg"
                      width="50px"
                      style="padding-top: 2px"
                    />
                    <h3>แร่เหล็ก</h3>
                  </th>
                  <th class="text-left">
                    <img
                      src="../../../assets/Ore/Siver.jpg"
                      width="50px"
                      style="padding-top: 2px"
                    />
                    <h3>แร่เงิน</h3>
                  </th>
                  <th class="text-left">
                    <img
                      src="../../../assets/Ore/Gold.jpg"
                      width="50px"
                      style="padding-top: 2px"
                    />
                    <h3>แร่ทอง</h3>
                  </th>
                  <th class="text-left">
                    <img
                      src="../../../assets/Ore/Ruby.jpg"
                      width="50px"
                      style="padding-top: 2px"
                    />
                    <h3>แร่ทับทิม</h3>
                  </th>
                  <th class="text-left">
                    <h3>ราคา</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in Tool" :key="item.name">
                  <td>
                    {{ item.Tier }}
                  </td>
                  <td>{{ item.Building }}</td>
                  <td>{{ item.Copper }}</td>
                  <td>{{ item.Iron }}</td>
                  <td>{{ item.Silver }}</td>
                  <td>{{ item.Gold }}</td>
                  <td>{{ item.Ruby }}</td>
                  <td>{{ item.Cost }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-responsive>
            <v-card-text
              ><span
                >ระดับซูเปอร์เป็นระดับพิเศษ ราคา 167000 ต้องใช้ไพลิน 15 ชิ้น,
                มรกต 15 ชิ้น, เพชร 15 ชิ้น และเศษขยะ 30 ชิ้น</span
              ></v-card-text
            >
          </v-responsive>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12">
          <h2>ความสามารถหลังอัพเกรด</h2>
          <v-divider></v-divider>
        </v-col>
      </v-row>

      <v-row justify="center" v-for="table in tables" :key="table.name">
        <v-col cols="8">
          <v-simple-table dark>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    <h3>{{ table[1] }}</h3>
                  </th>
                  <th class="text-left">
                    <h3>ความสามารถ</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in datafortable(table[0])" :key="item.name">
                  <td>
                    <v-img :src="item.img" width="50px"></v-img>{{ item.type }}
                  </td>
                  <td>{{ item.Effects }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="8">
          <v-simple-table dark>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    <h3>ขวาน</h3>
                  </th>
                  <th class="text-left">
                    <h3>ไม้อ่อน</h3>
                  </th>
                  <th class="text-left">
                    <h3>ไม้</h3>
                  </th>
                  <th class="text-left">
                    <h3>ไม้แข็ง</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in Axe" :key="item.name">
                  <td><v-img :src="item.img" width="50px"></v-img>{{ item.Axe }}</td>
                  <td>{{ item.Soft }}</td>
                  <td>{{ item.Normal }}</td>
                  <td>{{ item.Hard }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Blacksmith",
  components: {},
  data() {
    return {
      Tool: [
        {
          Tier: "ทองแดง",
          Building: "30",
          Copper: "30",
          Iron: "-",
          Silver: "-",
          Gold: "-",
          Ruby: "-",
          Cost: "1600 G",
        },
        {
          Tier: "เหล็ก",
          Building: "50",
          Copper: "40",
          Iron: "50",
          Silver: "-",
          Gold: "-",
          Ruby: "-",
          Cost: "3100 G",
        },
        {
          Tier: "เงิน",
          Building: "-",
          Copper: "60",
          Iron: "80",
          Silver: "50",
          Gold: "-",
          Ruby: "-",
          Cost: "6100 G",
        },
        {
          Tier: "ทอง",
          Building: "-",
          Copper: "-",
          Iron: "80",
          Silver: "60",
          Gold: "50",
          Ruby: "5",
          Cost: "8300 G",
        },
      ],
      tables: [
        ["Hoe", "จอบ"],
        ["Hammer", "ค้อน"],
        ["Water", "บัวรดน้ำ"],
        ["Scythe", "เคียว"],
        ["Axe", "ขวาน"],
        ["Pick", "จอบขุดแร่"],
        ["Rod", "เบ็ดตกปลา"],
      ],
      datas: [
        {
          name: "Hoe",
          data: [
            {
              type: "เก่า",
              Effects: "ขุด 1 ช่อง / 1 พลังกาย",
              img: require("../../../assets/Tools/Hoe_O.jpg"),
            },
            {
              type: "ทองแดง",
              Effects: "ชาร์จและขุดได้ 1x2 ช่อง (ใช้ 2 พลังกาย)",
              img: require("../../../assets/Tools/Hoe_C.jpg"),
            },
            {
              type: "เหล็ก",
              Effects: "ชาร์จและขุดได้ 1x3 ช่อง (ใช้ 3 พลังกาย)",
              img: require("../../../assets/Tools/Hoe_I.jpg"),
            },
            {
              type: "เงิน",
              Effects: "ชาร์จไวขึ้นและขุดได้ 1x3 ช่อง (ใช้ 2 พลังกาย)",
              img: require("../../../assets/Tools/Hoe_S.jpg"),
            },
            {
              type: "ทอง",
              Effects: "ชาร์จและขุดได้ 3x3 ช่อง (ใช้ 4 พลังกาย)",
              img: require("../../../assets/Tools/Hoe_G.jpg"),
            },
            {
              type: "ซูเปอร์",
              Effects: "ชาร์จไวสุดและขุดได้ 3x3 ช่อง (ใช้ 4 พลังกาย)",
              img: require("../../../assets/Tools/Hoe_Su.jpg"),
            }
           
          ]
        },
        {
          name: "Hammer",
          data: [
            {
              type: "เก่า",
              Effects: "หินกลาง (6),หินใหญ่ (18)",
              img: require("../../../assets/Tools/Ham_O.jpg"),
            },
           {
              type: "ทองแดง",
              Effects: "ชาร์จ = 2 ครั้ง/พลังกาย หินกลาง (2x3), หินใหญ่ (2x9)",
              img: require("../../../assets/Tools/Ham_C.jpg"),
            },
            {
              type: "เหล็ก",
              Effects: "ชาร์จ = 3 ครั้ง/พลังกาย หินกลาง (3x2), หินใหญ่ (3x5)",
              img: require("../../../assets/Tools/Ham_I.jpg"),
            },
            {
              type: "เงิน",
              Effects: "ชาร์จไวขึ้น หินกลาง (2x3), หินใหญ่ (2x9)",
              img: require("../../../assets/Tools/Ham_S.jpg"),
            },
            {
              type: "ทอง",
              Effects: "ชาร์จ = 4 ครั้ง/พลังกาย หินกลาง (4x1), หินใหญ่ (4x3)",
              img: require("../../../assets/Tools/Ham_G.jpg"),
            },
            {
              type: "ซูเปอร์",
              Effects: "ชาร์จไวสุด หินกลาง (4x1), หินใหญ่ (4x3)",
              img: require("../../../assets/Tools/Ham_Su.jpg"),
            }
          ]
        },
        {
          name: "Water",
          data: [
            {
              type: "เก่า",
              Effects: "รด 1 ช่อง / 1 พลังกาย รดได้ 20 ช่อง",
              img: require("../../../assets/Tools/Can_O.jpg"),
            },
            {
              type: "ทองแดง",
              Effects: "ชาร์จและรด 1x2 ช่อง/ 2 พลังกาย รดได้ 40 ช่อง",
              img: require("../../../assets/Tools/Can_C.jpg"),
            },
            {
              type: "เหล็ก",
              Effects: "ชาร์จและรด 1x3 ช่อง/ 3 พลังกาย รดได้ 60 ช่อง",
              img: require("../../../assets/Tools/Can_I.jpg"),
            },
            {
              type: "เงิน",
              Effects: "ชาร์จไวขึ้นและรด 1x3 ช่อง/ 3 พลังกาย รดได้ 80 ช่อง",
              img: require("../../../assets/Tools/Can_S.jpg"),
            },
            {
              type: "ทอง",
              Effects: "ชาร์จและรด 3x3 ช่อง/ 4 พลังกาย รดได้ 100 ช่อง",
              img: require("../../../assets/Tools/Can_G.jpg"),
            },
            {
              type: "ซูเปอร์",
              Effects: "ชาร์จไวสุด รด 3x3 ช่อง/ 4 พลังกาย รดได้ 120 ช่อง",
              img: require("../../../assets/Tools/Can_Su.jpg"),
            }
          ]
        },
        {
          name: "Scythe",
          data: [
            {
              type: "เก่า",
              Effects: "ตัดได้ 1 ช่อง / 1 พลังกาย",
              img: require("../../../assets/Tools/Sy_O.png"),
            },
            {
              type: "ทองแดง",
              Effects: "ชาร์จและตัด 1x2 ช่อง/ 2 พลังกาย",
              img: require("../../../assets/Tools/Sy_C.jpg"),
            },
            {
              type: "เหล็ก",
              Effects: "ชาร์จและตัด 1x3 ช่อง/ 3 พลังกาย",
              img: require("../../../assets/Tools/Sy_I.jpg"),
            },
            {
              type: "เงิน",
              Effects: "ชาร์จไวขึ้นและตัด 1x3 ช่อง/ 3 พลังกาย",
              img: require("../../../assets/Tools/Sy_S.jpg"),
            },
            {
              type: "ทอง",
              Effects: "ชาร์จและตัด 3x3 ช่อง/ 4 พลังกาย",
              img: require("../../../assets/Tools/Sy_G.jpg"),
            },
            {
              type: "ซูเปอร์",
              Effects: "ชาร์จไวสุดและตัด 3x3 ช่อง/ 4 พลังกาย",
              img: require("../../../assets/Tools/Sy_Su.jpg"),
            }
          ]
        },
        {
          name: "Pick",
          data: [
            {
              type: "เก่า",
              Effects: "ขุด 1 ช่อง / 1 พลังกาย (ขุดช่องเทากับช่องดำไม่ได้)",
              img: require("../../../assets/Tools/Pick_O.jpg"),
            },
            {
              type: "ทองแดง",
              Effects: "ชาร์จและขุด 2 ครั้ง/พลังกาย (ขุดช่องเทาได้)",
              img: require("../../../assets/Tools/Pick_C.jpg"),
            },
            {
              type: "เหล็ก",
              Effects: "ชาร์จไวขึ้น (ขุดช่องเทาได้)",
              img: require("../../../assets/Tools/Pick_I.jpg"),
            },
            {
              type: "เงิน",
              Effects: "ชาร์จและขุด 4 ครั้ง/ 3 พลังกาย (ขุดช่องเทากับช่องดำได้)",
              img: require("../../../assets/Tools/Pick_S.jpg"),
            },
            {
              type: "ทอง",
              Effects: "ชาร์จไวสุด (ขุดช่องเทากับช่องดำได้)",
              img: require("../../../assets/Tools/Pick_G.jpg"),
            },
            {
              type: "ซูเปอร์",
              Effects: "ขุดทุกอย่างได้ในทีเดียวไม่ต้องชาร์จ",
              img: require("../../../assets/Tools/Pick_Su.jpg"),
            }
          ]
        },
        {
          name: "Rod",
          data:[
            {
              type: "เก่า",
              Effects: "-",
              img: require("../../../assets/Tools/Rod_O.jpg"),
            },
            {
              type: "ทองแดง",
              Effects: "จับปลาเงาใหญ่ได้",
              img: require("../../../assets/Tools/Rod_C.jpg"),
            },
            {
              type: "เหล็ก",
              Effects: "-",
              img: require("../../../assets/Tools/Rod_I.jpg"),
            },
            {
              type: "เงิน",
              Effects: "-",
              img: require("../../../assets/Tools/Rod_S.jpg"),
            },
            {
              type: "ทอง",
              Effects: "-",
              img: require("../../../assets/Tools/Rod_G.jpg"),
            },
            {
              type: "ซูเปอร์",
              Effects: "-",
              img: require("../../../assets/Tools/Rod_Su.jpg"),
            }
          ]
        },
      ],
      Axe: [
        {
          Axe: "เก่า",
          Soft: "6 ครั้ง (6 พลังกาย)",
          Normal: "12 ครั้ง (12 พลังกาย)",
          Hard: "18 ครั้ง (18 พลังกาย)",
          img: require("../../../assets/Tools/Axe_O.jpg")
        },
        {
          Axe: "ทองแดง",
          Soft: "3 ครั้ง (6 stamina)",
          Normal: "6 ครั้ง (12 stamina)",
          Hard: "9 ครั้ง (18 stamina)",
          img: require("../../../assets/Tools/Axe_C.jpg")
        },
        {
          Axe: "เหล็ก",
          Soft: "2 ครั้ง (6 พลังกาย)",
          Normal: "3 ครั้ง (9 พลังกาย)",
          Hard: "5 ครั้ง (15 พลังกาย)",
          img: require("../../../assets/Tools/Axe_I.jpg")
        },
        {
          Axe: "เงิน",
          Soft: "ชาร์จไวขึ้น 3 ครั้ง (6 พลังกาย)",
          Normal: "ชาร์จไวขึ้น 6 ครั้ง (12 พลังกาย)",
          Hard: "ชาร์จไวขึ้น 9 ครั้ง (18 พลังกาย)",
          img: require("../../../assets/Tools/Axe_S.jpg")
        },
        {
          Axe: "ทอง",
          Soft: "1 ครั้ง (4 พลังกาย)",
          Normal: "2 ครั้ง (8 พลังกาย)",
          Hard: "3 ครั้ง (12 พลังกาย)",
          img: require("../../../assets/Tools/Axe_G.jpg")
        },
        {
          Axe: "ซูเปอร์",
          Soft: "ชาร์จไวสุด 3 hits (6 พลังกาย)",
          Normal: "ชาร์จไวสุด 6 hits (12 พลังกาย)",
          Hard: "ชาร์จไวสุด 9 hits (18 พลังกาย)",
          img: require("../../../assets/Tools/Axe_Su.jpg")
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
