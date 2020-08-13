<template>
  <div class="Crops">
    <v-row justify="center">
      <v-col cols="12">
        <h1>Crops</h1>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>Below are cooking recipes, their ingredients, cooking tools, and selling prices.</v-card-text>
        </v-responsive>
      </v-col>
    </v-row>
    <div v-for="(table,i) in tables" :key="i">
      <v-row>
        <!-- <v-col cols="1">
          <v-img width="35px" :src="table[2]"></v-img>
        </v-col> -->
        <v-col cols="11">
          <h2>{{table[1]}}</h2>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12">
          <v-simple-table dark>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    <h3>Seed</h3>
                  </th>
                  <th class="text-left">
                    <h3>Growth Days</h3>
                  </th>
                  <th class="text-left">
                    <h3>Buying Price</h3>
                  </th>
                  <th class="text-left">
                    <h3>Multiple Harvest</h3>
                  </th>
                  <th class="text-left">
                    <h3>Unlock</h3>
                  </th>
                  <th class="text-left">
                    <h3>0.5 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>1 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>1.5 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>2 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>2.5 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>3 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>3.5 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>4 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>4.5 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>5 ★</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item) in datafortable(table[0])" :key="item.name">
                  <td>
                    <v-img width="35px" :src="item.img"></v-img>
                    {{ item.Seed }}
                  </td>
                  <td>{{ item.Growth }}</td>
                  <td>{{ item.Buying }}</td>
                  <td><v-icon :color="item.Harvest=='YES'? 'green':'red'">{{item.Harvest=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon>{{ item.Harvest }}</td>
                  <td>{{ item.Unlock }}</td>

                  <td>{{ item.S05 }}</td>
                  <td>{{ item.S1 }}</td>
                  <td>{{ item.S15 }}</td>
                  <td>{{ item.S2 }}</td>
                  <td>{{ item.S25 }}</td>
                  <td>{{ item.S3 }}</td>
                  <td>{{ item.S35 }}</td>
                  <td>{{ item.S4 }}</td>
                  <td>{{ item.S45 }}</td>
                  <td>{{ item.S5 }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Crops",
  computed: {},
  data() {
    return {
      tables: [
        ["Spring", "🌺Spring Crops","https://i.imgur.com/YX0nOCB.png"],
        ["Summer", "🌞Summer Crops","https://i.imgur.com/mQxODft.png"],
        ["Autumn", "🍂Autumn Crops","https://i.imgur.com/UaODini.png"],
        ["Winter", "⛄Winter Crops","https://i.imgur.com/sTbnGEp.png"],
        ["All", "☁All Season Crops Crops","https://i.imgur.com/CQ0GUAD.png"]
      ],
      datas: [
        {
          name: "Spring",
          data: [
            {
              img: "https://i.imgur.com/2zrTpt8.png",
              Seed: "Tempura",
              Growth: "Tempura",
              Buying: "Tempura",
              Harvest: "YES",
              Unlock: "Tempura",
              S05: "1231",
              S1: "1231",
              S15: "1231",
              S2: "1231",
              S25: "1231",
              S3: "1231",
              S35: "1231",
              S4: "1231",
              S45: "1231",
              S5: "1231"
            },
            {
              img: "https://i.imgur.com/2zrTpt8.png",
              Seed: "Tempura",
              Growth: "Tempura",
              Buying: "Tempura",
              Harvest: "NO",
              Unlock: "Tempura",
              S05: "1231",
              S1: "1231",
              S15: "1231",
              S2: "1231",
              S25: "1231",
              S3: "1231",
              S35: "1231",
              S4: "1231",
              S45: "1231",
              S5: "1231"
            },
          ]
        },
        {
          name: "Summer",
          data: [
            {
              img: "https://i.imgur.com/2zrTpt8.png",
              Seed: "Tempura",
              Growth: "Tempura",
              Buying: "Tempura",
              Harvest: "YES",
              Unlock: "Tempura",
              S05: "1231",
              S1: "1231",
              S15: "1231",
              S2: "1231",
              S25: "1231",
              S3: "1231",
              S35: "1231",
              S4: "1231",
              S45: "1231",
              S5: "1231"
            },
            {
              img: "https://i.imgur.com/2zrTpt8.png",
              Seed: "Tempura",
              Growth: "Tempura",
              Buying: "Tempura",
              Harvest: "NO",
              Unlock: "Tempura",
              S05: "1231",
              S1: "1231",
              S15: "1231",
              S2: "1231",
              S25: "1231",
              S3: "1231",
              S35: "1231",
              S4: "1231",
              S45: "1231",
              S5: "1231"
            },
          ]
        },
        {
          name: "Autumn",
          data: [
            {
              img: "https://i.imgur.com/2zrTpt8.png",
              Seed: "Tempura",
              Growth: "Tempura",
              Buying: "Tempura",
              Harvest: "YES",
              Unlock: "Tempura",
              S05: "1231",
              S1: "1231",
              S15: "1231",
              S2: "1231",
              S25: "1231",
              S3: "1231",
              S35: "1231",
              S4: "1231",
              S45: "1231",
              S5: "1231"
            },
            {
              img: "https://i.imgur.com/2zrTpt8.png",
              Seed: "Tempura",
              Growth: "Tempura",
              Buying: "Tempura",
              Harvest: "NO",
              Unlock: "Tempura",
              S05: "1231",
              S1: "1231",
              S15: "1231",
              S2: "1231",
              S25: "1231",
              S3: "1231",
              S35: "1231",
              S4: "1231",
              S45: "1231",
              S5: "1231"
            },
          ]
        },
        {
          name: "Winter",
          data: [
            {
              img: "https://i.imgur.com/2zrTpt8.png",
              Seed: "Tempura",
              Growth: "Tempura",
              Buying: "Tempura",
              Harvest: "YES",
              Unlock: "Tempura",
              S05: "1231",
              S1: "1231",
              S15: "1231",
              S2: "1231",
              S25: "1231",
              S3: "1231",
              S35: "1231",
              S4: "1231",
              S45: "1231",
              S5: "1231"
            },
            {
              img: "https://i.imgur.com/2zrTpt8.png",
              Seed: "Tempura",
              Growth: "Tempura",
              Buying: "Tempura",
              Harvest: "NO",
              Unlock: "Tempura",
              S05: "1231",
              S1: "1231",
              S15: "1231",
              S2: "1231",
              S25: "1231",
              S3: "1231",
              S35: "1231",
              S4: "1231",
              S45: "1231",
              S5: "1231"
            },
          ]
        },
        {
          name: "All",
          data: [
            {
              img: "https://i.imgur.com/2zrTpt8.png",
              Seed: "Tempura",
              Growth: "Tempura",
              Buying: "Tempura",
              Harvest: "YES",
              Unlock: "Tempura",
              S05: "1231",
              S1: "1231",
              S15: "1231",
              S2: "1231",
              S25: "1231",
              S3: "1231",
              S35: "1231",
              S4: "1231",
              S45: "1231",
              S5: "1231"
            },
            {
              img: "https://i.imgur.com/2zrTpt8.png",
              Seed: "Tempura",
              Growth: "Tempura",
              Buying: "Tempura",
              Harvest: "NO",
              Unlock: "Tempura",
              S05: "1231",
              S1: "1231",
              S15: "1231",
              S2: "1231",
              S25: "1231",
              S3: "1231",
              S35: "1231",
              S4: "1231",
              S45: "1231",
              S5: "1231"
            },
          ]
        },
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