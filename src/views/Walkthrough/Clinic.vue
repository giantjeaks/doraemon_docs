<template>
  <div class="Clinic">
    <v-row justify="center">
      <v-col cols="12">
        <h1>คลีนิค</h1>
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
                  <h3>CHAPTER</h3>
                </th>
                <th class="text-left">
                  <h3>สถานที่ และ เงื่อนไข</h3>
                </th>
                <th class="text-left">
                  <h3>มิตรภาพ</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in Clinic" :key="item.name">
                <td>{{ item.CHAPTER }}</td>
                <td>{{ item.LOCATION }}</td>
                <td>
                  <span v-for="(friend,i) in item.FRIENDSHIP" :key="i">
                    {{friend}}
                    <br />
                  </span>
                </td>
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
    name: "Clinic",
    data() {
      return {
        Clinic:[
          {CHAPTER:"Chapter 1 : Helping Big G",LOCATION:"Opening & Tutorial",FRIENDSHIP:["-"]},
          {CHAPTER:"Chapter 2 : Quiet Artisan",LOCATION:"Road between Harappa Square and East Natura, 11:00 - 13:00",FRIENDSHIP:["Giant 1 ♥","Pent 1 ♥"]},
        ]
      }
    },
}
</script>

<style>

</style>