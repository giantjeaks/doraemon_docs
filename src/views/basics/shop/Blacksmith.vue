<template>
  <div class="Blacksmith">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <h1>Anvil - Blacksmith Shop</h1>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12">
          <h2>Tool Upgrade</h2>
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
                    <h3>Tier</h3>
                  </th>
                  <th class="text-left">
                    <h3>Building Stone</h3>
                  </th>
                  <th class="text-left">
                    <h3>Copper</h3>
                  </th>
                  <th class="text-left">
                    <h3>Iron</h3>
                  </th>
                  <th class="text-left">
                    <h3>Silver</h3>
                  </th>
                  <th class="text-left">
                    <h3>Gold</h3>
                  </th>
                  <th class="text-left">
                    <h3>Ruby</h3>
                  </th>
                  <th class="text-left">
                    <h3>Cost</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item) in Tool" :key="item.name">
                  <td>{{ item.Tier }}</td>
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
            <v-card-text><span>The Super tier is special. It costs 16700 and requires 15 Sapphire, 15 Emerald, 15 Diamond, and 30 Junk.</span></v-card-text>
          </v-responsive>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12">
          <h2>Upgrade effects</h2>
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
                    <h3>{{table[1]}}</h3>
                  </th>
                  <th class="text-left">
                    <h3>Effects</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item) in datafortable(table[0])" :key="item.name">
                  <td>{{ item.type }}</td>
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
                    <h3>Axe</h3>
                  </th>
                  <th class="text-left">
                    <h3>Soft wood</h3>
                  </th>
                  <th class="text-left">
                    <h3>Normal wood</h3>
                  </th>
                  <th class="text-left">
                    <h3>	Hard wood</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item) in Axe" :key="item.name">
                  <td>{{ item.Axe }}</td>
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
      Tool:[{Tier:"1111",Building:"1111",Copper:"1111",Iron:"1111",Silver:"1111",Gold:"1111",Ruby:"1111",Cost:"1111"}],
      tables: [
        ["Hoe", "Hoe"],
        ["Hammer", "Hammer"],
        ["Water", "Water Can"],
        ["Scythe", "Scythe"],
        ["Axe", "Axe"],
        ["Pick", "Pick Axe"],
        ["Rod", "Rod"],
      ],
      datas:[
        {name:"Hoe",data:[{type:"111",Effects:"222"},{type:"111",Effects:"222"}]},
        {name:"Hammer",data:[{type:"111",Effects:"222"},{type:"111",Effects:"222"}]},
        {name:"Water",data:[{type:"111",Effects:"222"},{type:"111",Effects:"222"}]},
        {name:"Scythe",data:[{type:"111",Effects:"222"},{type:"111",Effects:"222"}]},
        {name:"Pick",data:[{type:"111",Effects:"222"},{type:"111",Effects:"222"}]},
        {name:"Rod",data:[{type:"111",Effects:"222"},{type:"111",Effects:"222"}]},
        ],
      Axe:[{Axe:"Copper",Soft:"3 hits (6 stamina)",Normal:"6 hits (12 stamina)",Hard:"9 hits (18 stamina)"},]
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
