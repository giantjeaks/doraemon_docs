<template>
  <div class="Mining">
    <v-row justify="center">
      <v-col cols="12">
        <h1>Mine and mining</h1>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <h3>How to get pickaxe</h3>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>Go to the mining cave (located at Mine Entrance in the map), you will get a scene where Doraemon, Smitty, and Blake are talking inside. Next, talk to Blake to get your pickaxe and make sure you have an empty slot in your bag.</v-card-text>
        </v-responsive>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <h2>List of possible items</h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-simple-table dark>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  <h3>Item</h3>
                </th>
                <th class="text-left">
                  <h3>Starting Floor</h3>
                </th>
                <th class="text-left">
                  <h3>Selling Price</h3>
                </th>
                <th class="text-left">
                  <h3>Notes</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in possible" :key="item.name">
                <td>{{ item.Item }}</td>
                <td>{{ item.Floor }}</td>
                <td>{{ item.Price }}</td>
                <td>{{ item.Notes }}</td>
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
  name: "Mining",
  data() {
    return {
      possible : [{Item:"Junk", Floor: "Entrance", Price : "100", Notes: "Feel free to sell this if you aren’t interested in fossils series furniture set." }],
    };
  }
};
</script>

<style>
</style>