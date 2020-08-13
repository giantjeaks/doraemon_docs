<template>
  <div class="Carpenter">
    <v-row justify="center">
      <v-col cols="12">
        <h1>Hammer - Carpenter Shop</h1>
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
                  <h3>Building</h3>
                </th>
                <th class="text-left">
                  <h3>Construction</h3>
                </th>
                <th class="text-left">
                  <h3>Materials</h3>
                </th>
                <th class="text-left">
                  <h3>Cost</h3>
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
                  <h3>Material</h3>
                </th>
                <th class="text-left">
                  <h3>Cost</h3>
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
          Construction: "7 Days",
          Materials: [
            "48 Soft Wood",
            "36 Normal Wood",
            "27 Hard Wood",
            "24 Building Stone",
            "41 Copper Ore"
          ],
          Cost: "3.200 G"
        }
      ],
      Materials: [
        {
          Material: "Soft Wood",
          Cost: "200 G"
        },{
          Material: "Normal Wood",
          Cost: "320 G"
        },{
          Material: "Hard Wood",
          Cost: "480 G"
        },{
          Material: "Building Stone",
          Cost: "50 G"
        },
      ]
    };
  }
};
</script>

<style>
</style>