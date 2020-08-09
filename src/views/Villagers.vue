<template>
  <div class="Villagers">
    <v-row justify="center">
      <v-col cols="12">
        <h1>Villagers And Gifts</h1>
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
                  <h3>Villager</h3>
                </th>
                <th class="text-left">
                  <h3>Love</h3>
                </th>
                <th class="text-left">
                  <h3>Like</h3>
                </th>
                <th class="text-left">
                  <h3>Dislike</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in Villagers" :key="item.name">
                <td>
                  <v-row align="center">
                      <v-col cols="2" style="max-width: none;padding: 0px;">
                        <v-img width="40px" :src="item.img"></v-img>
                      </v-col>
                      <v-col cols="2" style="max-width: none;padding: 0px;">
                        {{ item.Villager }}
                      </v-col>
                    </v-row>
                </td>
                <td>{{ item.Love }}</td>
                <td>{{ item.Like }}</td>
                <td>{{ item.Dislike }}</td>
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
  name: "Villagers",
  data() {
    return {
      Villagers: [{img:"https://i.imgur.com/ozbz98T.png", Villager: "1", Love: "2", Like: "3", Dislike: "4" }],
    };
  }
};
</script>

<style>
</style>