<template>
  <div class="Koropokkur">
    <v-row justify="center">
      <v-col cols="12">
        <h1>Koropokkur’s Shop</h1>
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
                  <h3>Item</h3>
                </th>
                <th class="text-left">
                  <h3>Description</h3>
                </th>
                <th class="text-left">
                  <h3>Cost (Junk)</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in items" :key="item.name">
                <td>
                  <v-row align="center">
                      <v-col cols="2" style="max-width: none;padding: 0px;">
                        <v-img width="40px" :src="item.img"></v-img>
                      </v-col>
                      <v-col cols="10" style="max-width: none;padding: 0px;">
                        {{ item.Item }}
                      </v-col>
                    </v-row>
                </td>
                <td>{{ item.Description }}</td>
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
  name: "Koropokkur",
  data() {
    return {
      items: [{img:"https://i.imgur.com/ex6qSg7.png", Item: "Canned Spring", Description: "Changes greenhouse to spring", Cost: "8" }],
    };
  }
};
</script>

<style>
</style>