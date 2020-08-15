<template>
  <div class="Foraging">
    <v-row justify="center">
      <v-col cols="12">
        <h1>ท่อนซุงและการฟาร์มของป่า</h1>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <h2>ท่อนซุง</h2>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>
            <span>
              เราสามารถหาท่อนซุงจากต้นไม้ได้ 4 ท่อน/ต้นนะ โดยสามท่อนจะมาจากการตัดต้นไม้ และ อีก 1 ท่อนจะมาจากการตัดตอไม้
            </span>
          </v-card-text>
        </v-responsive>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-img src="https://i.imgur.com/DqKRW4k.jpg"></v-img>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-simple-table dark>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  <h3>Location</h3>
                </th>
                <th class="text-left">
                  <h3>Soft wood</h3>
                </th>
                <th class="text-left">
                  <h3>Normal wood</h3>
                </th>
                <th class="text-left">
                  <h3>Hard wood</h3>
                </th>
                <th class="text-left">
                  <h3>Rock</h3>
                </th>
                <th class="text-left">
                  <h3>Hard Rock</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in Wood" :key="item.name">
                <td>{{ item.Location }}</td>
                <td>{{ item.Soft }}</td>
                <td>{{ item.Normal }}</td>
                <td>{{ item.Hard_W }}</td>
                <td>{{ item.Rock }}</td>
                <td>{{ item.Hard_R }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <h2>ฟาร์มของป่า</h2>
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
                  <h3>สถานที่</h3>
                </th>
                <th class="text-left">
                  <h3>ฤดูใบไม้ผลิ</h3>
                </th>
                <th class="text-left">
                  <h3>ฤดูร้อน</h3>
                </th>
                <th class="text-left">
                  <h3>ฤดูใบไม้ร่วง</h3>
                </th>
                <th class="text-left">
                  <h3>ฤดูหนาว</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in Forages" :key="item.name">
                <td>{{ item.Location }}</td>
                <td>{{ item.Spring }}</td>
                <td>{{ item.Summer }}</td>
                <td>{{ item.Autumn }}</td>
                <td>{{ item.Winter }}</td>
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
  name: "Foraging",
  data() {
    return {
      Wood: [{Location:"1", Soft: "1", Normal : "2", Hard_W: "3", Rock: "4", Hard_R: "4" }],
      Forages: [{Location:"1", Spring: "1", Summer : "2", Autumn: "3", Winter: "4"}],
    };
  }
};
</script>

<style>
</style>