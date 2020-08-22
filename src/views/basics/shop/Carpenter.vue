<template>
  <div class="Carpenter">
    <v-row justify="center">
      <v-col cols="12">
        <h1>ร้านช่างไม้</h1>
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
                  <h3>สิ่งก่อสร้าง</h3>
                </th>
                <th class="text-left">
                  <h3>การก่อสร้าง</h3>
                </th>
                <th class="text-left">
                  <h3>วัสดุอุปกรณ์</h3>
                </th>
                <th class="text-left">
                  <h3>ราคา</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in Carpenter" :key="item.name">
                <td>{{ item.Building }}</td>
                <td>{{ item.Construction }}</td>
                <td>
                  <span v-for="(Mat,i) in item.Materials" :key="i">
                    {{Mat}}
                    <br />
                  </span>
                </td>
                <td>{{ item.Cost }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="5">
        <v-simple-table dark>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  <h3>วัสดุ</h3>
                </th>
                <th class="text-left">
                  <h3>ราคา</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in Materials" :key="item.name">
                <td>{{ item.Material }}</td>
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
  name: "Carpenter",
  data() {
    return {
      Carpenter: [
        {
          Building: "Roomy House",
          Construction: "7 วัน",
          Materials: [
            "48 ไม้อ่อน",
            "36 ไม้",
            "27 ไม้แข็ง",
            "24 หินก่อสร้าง",
            "41 แร่ทองแดง"
          ],
          Cost: "3,200 G"
        },
                {
          Building: "Large House",
          Construction: "7 วัน",
          Materials: [
            "121 ไม้อ่อน",
            "88 ไม้",
            "58 ไม้แข็ง",
            "30 แร่ทอง",
            "4 แร่มรกต"
          ],
          Cost: "15,500 G"
        },
                {
          Building: "Green House",
          Construction: "7 วัน",
          Materials: [
            "242 ไม้อ่อน",
            "440 ไม้",
            "352 ไม้แข็ง",
            "36 แร่ทอง",
            "12 แร่เพชร"
          ],
          Cost: "70,200 G"
        },
                {
          Building: "Roomy Shed",
          Construction: "7 วัน",
          Materials: [
            "60 ไม้อ่อน",
            "31 ไม้",
            "19 ไม้แข็ง",
            "45 แร่ทองแดง",
            "46 แร่เหล็ก"
          ],
          Cost: "5,900 G"
        },
                {
          Building: "Large Shed",
          Construction: "7 วัน",
          Materials: [
            "121 ไม้อ่อน",
            "146 ไม้",
            "176 ไม้แข็ง",
            "45 แร่ทอง",
            "6 แร่ทับทิม"
          ],
          Cost: "30,400 G"
        },
                {
          Building: "Shed Silo",
          Construction: "3 วัน",
          Materials: [
            "69 ไม้อ่อน",
            "48 ไม้",
            "44 ไม้แข็ง",
            "35 แร่เงิน",
            "22 แร่ทอง"
          ],
          Cost: "9,700 G"
        },
                {
          Building: "Roomy Chicken Coop",
          Construction: "7 วัน",
          Materials: [
            "40 ไม้อ่อน",
            "31 ไม้",
            "32 ไม้แข็ง",
            "45 แร่ทองแดง",
            "41 แร่เหล็ก"
          ],
          Cost: "6,400 G"
        },
                {
          Building: "Large Chicken Coop",
          Construction: "7 วัน",
          Materials: [
            "161 ไม้อ่อน",
            "110 ไม้",
            "117 ไม้แข็ง",
            "36 แร่ทอง",
            "6 ไพลิน"
          ],
          Cost: "6,400 G"
        },
                {
          Building: "Chicken Silo",
          Construction: "3 วัน",
          Materials: [
            "53 ไม้อ่อน",
            "55 ไม้",
            "50 ไม้แข็ง",
            "40 แร่เงิน",
            "25 แร่ทอง"
          ],
          Cost: "10,200 G"
        },
                {
          Building: "Material Shack",
          Construction: "2 วัน",
          Materials: [
            "48 ไม้อ่อน",
            "40 ไม้",
            "29 ไม้แข็ง",
            "20 หินก่อสร้าง",
            "27 แร่ทองแดง"
          ],
          Cost: "7,000 G"
        },
                {
          Building: "Horse Stable",
          Construction: "5 วัน",
          Materials: [
            "40 ไม้อ่อน",
            "31 ไม้",
            "19 ไม้แข็ง",
            "12 หินก่อสร้าง",
            "30 แร่ทองแดง"
          ],
          Cost: "6,400 G"
        }

      ],
      Materials: [
        {
          Material: "ไม้อ่อน",
          Cost: "200 G"
        },{
          Material: "ไม้",
          Cost: "320 G"
        },{
          Material: "ไม้แข็ง",
          Cost: "480 G"
        },{
          Material: "หินก่อสร้าง",
          Cost: "50 G"
        },
      ]
    };
  }
};
</script>

<style>
</style>