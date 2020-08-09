<template>
  <div class="Animals">
    <v-row justify="center">
      <v-col cols="12">
        <h1>Animals</h1>
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
                  <h3>Action</h3>
                </th>
                <th class="text-left">
                  <h3>Affection</h3>
                </th>
                <th class="text-left">
                  <h3>Stress</h3>
                </th>
                <th class="text-left">
                  <h3>Animals</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in Animals" :key="item.name">
                <td>{{ item.Action }}</td>
                <td>{{ item.Affection }}</td>
                <td>{{ item.Stress }}</td>
                <td>{{ item.Animals }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-alert border="right" colored-border type="info" elevation="3">
          Once your animals reach stress value 60, they will get sick.
          And once your animals reach stress value 500, they will die.
        </v-alert>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-alert
          border="right"
          colored-border
          type="info"
          elevation="3"
        >Disaster grazing means grazing animals during extreme bad weather like typhoon.</v-alert>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>Affection and stress from grazing is calculated every 60 minutes on minutes 00, 10, 20, 30, 40, and 50. The time at the start of that 60 minutes determines the affection and stress modifier.</v-card-text>
        </v-responsive>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="8">
        <v-simple-table dark>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  <h3>Weather</h3>
                </th>
                <th class="text-left">
                  <h3>Grazing Hour</h3>
                </th>
                <th class="text-left">
                  <h3>Affection</h3>
                </th>
                <th class="text-left">
                  <h3>Stress</h3>
                </th>
                <th class="text-left">
                  <h3>Animal</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in Weather" :key="item.name">
                <td>{{ item.Weather }}</td>
                <td>{{ item.Grazing }}</td>
                <td>{{ item.Affection }}</td>
                <td>{{ item.Stress }}</td>
                <td>{{ item.Animal }}</td>
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
  name: "Animals",
  data() {
    return {
      Animals: [{ Action: "1", Affection: "2", Stress: "3", Animals: "4" }],
      Weather: [
        { Weather: "1", Grazing: "2", Affection: "3", Stress: "4", Animal: "5" }
      ]
    };
  }
};
</script>

<style>
</style>