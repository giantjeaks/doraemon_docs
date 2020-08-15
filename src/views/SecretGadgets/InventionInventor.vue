<template>
  <div class="InventionInventor">

    <v-row justify="center">
      <v-col cols="12">
        <h1>Invention Inventor</h1>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <h2>How to Unlock</h2>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>
            <span>
              Raise Smitty and Blake friendship to ♡♡♡♡ and in Year 1 Fall 1 when you go outside your house, there will be a cut-scene where Noby noticed Blake running through his farm. Once you get this scene, you can buy Makers from Smitty.
            </span>
          </v-card-text>
        </v-responsive>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <h2>Makers</h2>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <v-simple-table dark>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  <h3>Icon</h3>
                </th>
                <th class="text-left">
                  <h3>Maker</h3>
                </th>
                <th class="text-left">
                  <h3>Function</h3>
                </th>
                <th class="text-left">
                  <h3>Materials</h3>
                </th>
                <th class="text-left">
                  <h3>Requirement</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in Makers" :key="item.name">
                <td>{{ item.Icon }}</td>
                <td>{{ item.Maker }}</td>
                <td>{{ item.Function }}</td>
                <td>{{ item.Materials }}</td>
                <td>{{ item.Requirement }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <v-alert
        text
          dense
          outlined
          color="blue"
        >All the output products will be of the same quality as their material. Say you use a 3-star turnip on seeds maker, you will receive 3 bags of a 3-star turnip seed in return.</v-alert>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <v-alert
        text
          dense
          outlined
          color="blue"
        >To unlock Barn and Coop Lv.3 on Carpenter, you have to build House Lv.3 and their respective Silo first.</v-alert>
      </v-col>
    </v-row>

  </div>
</template>

<script>
export default {
    name: "InventionInventor",
    data() {
      return {
        Makers: [{ Icon: "", Maker: "Seeds Maker", Function: "To turn 1 crop to 3 seeds", Materials: "",Requirement: "None" }],
      }
    },
}
</script>

<style>

</style>