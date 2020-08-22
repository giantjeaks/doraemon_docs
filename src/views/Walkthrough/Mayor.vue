<template>
  <div class="Mayor">
    <v-row justify="center">
      <v-col cols="12">
        <h1>นายอำเภอ</h1>
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
              <tr v-for="(item) in Mayor" :key="item.name">
                <td>{{ item.CHAPTER }}</td>
                <td>
                  <span v-for="(loca,i) in item.LOCATION" :key="i">
                    {{loca}}
                    <br />
                  </span>
                </td>
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
    name: "Mayor",
    data() {
      return {
        Mayor:[
          {CHAPTER:"Chapter 1 : Seed & Study",LOCATION:["Opening & Tutorial"],FRIENDSHIP:["-"]},
          {CHAPTER:"Chapter 2 : Storm Town",LOCATION:["Opening & Tutorial"],FRIENDSHIP:["-"]},
          {CHAPTER:"Chapter 3 : Helping Noby",LOCATION:["Opening & Tutorial"],FRIENDSHIP:["-"]},
          {CHAPTER:"Chapter 4 : Goddess Story",LOCATION:["West Natura, 06:00 - 15:00 After 10th Spring, Sunny Days"],FRIENDSHIP:["-"]},
          {CHAPTER:"Chapter 5 : The Goddess",LOCATION:["West Natura, 06:00 - 15:00 After 10th Spring, Sunny Days"],FRIENDSHIP:["-"]},
          {CHAPTER:"Chapter 6 : Showers",LOCATION:['*Clearing "Harmon Chapter 4 : Sprite Summoner"','*Give Sprite Summoner to Vera at Big Tree Root'],FRIENDSHIP:[""]},
          {CHAPTER:"Chapter 7 : An Offering",LOCATION:['*Clearing "Recipe Shop Chapter 5 : Come-Here-Cat"','*Give Come-Here-Cat to Vera at Big Tree Root'],FRIENDSHIP:[""]},
          {CHAPTER:"Chapter 8 : Assignments",LOCATION:['*Clearing "Carpenter Chapter 5 : Time TV"','*Give Time TV to Vera at Big Tree Root'],FRIENDSHIP:[""]},
          {CHAPTER:"Chapter 9 : Big Problem",LOCATION:['*Clearing "Clinic Chapter 5 : Realization Pen"','*Give Realization Pen to Vera at Big Tree Root'],FRIENDSHIP:[""]},
          {CHAPTER:"Chapter 10 : Lightning",LOCATION:['West Natura, 10:00'],FRIENDSHIP:["Harmon 7♥","Ravi 5♥"]},
          {CHAPTER:"Chapter 11 : Future Town",LOCATION:['Big Tree Root'],FRIENDSHIP:["Vera 5♥"]},
          {CHAPTER:"Chapter 12 : Storm & Reunion",LOCATION:['*Clearing "Koropokkur Chapter 6 : Meet Up!"','*Go to Big Tree Root with Hopter'],FRIENDSHIP:["Vera 5♥"]},
          {CHAPTER:"Chapter 13 : The Future",LOCATION:['Ending'],FRIENDSHIP:["-"]},
          {CHAPTER:"Chapter 14 : The Holder",LOCATION:['*View "Cave Chapter 4 : '+"Venture's"+'End" and Leave The Seed'],FRIENDSHIP:["-"]},
        ]
      }
    },
}
</script>

<style>

</style>