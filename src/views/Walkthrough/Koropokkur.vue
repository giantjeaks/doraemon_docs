<template>
  <div class="Koropokkur">

    <v-row justify="center">
      <v-col cols="12">
        <h1>Koropokkur</h1>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <h2>Ch.1 Koropokkur</h2>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-alert text dense outlined color="blue">
          Requirement:
          <br />● Have seen General Store story Ch.5
          <br />● Doraemon must have at least ♡♡♡
        </v-alert>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>
            <span>
              Go to Rolin Forest between 06:00 - 17:59 to get the scene.
              <br>There you will meet the first Koropokkur, <img src="https://i.imgur.com/kvM9V9p.png">  Scarlet.
            </span>
          </v-card-text>
        </v-responsive>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-img src="https://i.imgur.com/4CuYh2A.jpg"></v-img>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="3">
        <v-card-text center>
          <span>Koropokkur’s House (Rollin Forrest)</span>
        </v-card-text>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>
            <span>
              Afterwards, you will be asked by Scarlet to find the other four Koropokkur.
            </span>
          </v-card-text>
        </v-responsive>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-alert dense color="#FFFDE7">
          You can trigger Ch.2 to Ch.5 randomly (don’t need to be in order).
        </v-alert>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <h2>Ch.2 Found Violet!</h2>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-img src="https://i.imgur.com/yUBPPlv.jpg"></v-img>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="3">
        <v-card-text center>
          <span>Mayor’s House</span>
        </v-card-text>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <h2>Ch.3 Found Amber!</h2>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-img src="https://i.imgur.com/iowM2q4.jpg"></v-img>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="3">
        <v-card-text center>
          <span>Knick Knacks GenStore</span>
        </v-card-text>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <h2>Ch.4 Found Sky!</h2>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-img src="https://i.imgur.com/qWCO9jD.jpg"></v-img>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="3">
        <v-card-text center>
          <span>Sandy’s Tackle Shop</span>
        </v-card-text>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <h2>Ch.5 Found Jade!</h2>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-img src="https://i.imgur.com/NPeRT2s.jpg"></v-img>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="3">
        <v-card-text center>
          <span>Cafe Delish</span>
        </v-card-text>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <h2>Ch.6 Meet Up!</h2>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-alert text dense outlined color="blue">
          Requirement:
          <br />● Have found all Koroppokur
        </v-alert>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>
            <span>
              Head inside Koropokkur’s House after you found the last missing Koropokkur (whoever it is you find the last).
            </span>
          </v-card-text>
        </v-responsive>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-alert dense color="#FFFDE7">
          Head back inside Koropokkur’s House several times after you triggered Ch.6 Meet Up! until you don’t get scene anymore. I kind of forget how many times, but as far as I remember, there’ll be scene where Scarlet informed you that she will give you rewards. Talk to her to get Hopter. Then once again go inside their house and you will trigger a scene where they tell you they will help on your farm if you asked them. Listed below.
        </v-alert>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="7">
        <v-simple-table dark>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  <h3>Koropokkur</h3>
                </th>
                <th class="text-left">
                  <h3>What they help</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in Koropokkur" :key="item.name">
                <td>
                  <v-row justify="center">
                    <v-col cols="12">
                      <v-img :src="item.img" width="70"></v-img>
                    </v-col>
                    <v-col cols="12">
                      <span>{{ item.name }}</span>
                    </v-col>
                  </v-row>
                </td>
                <td>{{ item.help }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <v-alert text dense outlined color="green">
          End 🎉
        </v-alert>
      </v-col>
    </v-row>

  </div>
</template>

<script>
export default {
    name: "Koropokkur",
    data() {
      return {
        Koropokkur:[
          {img:"https://i.imgur.com/kvM9V9p.png",name:"Scarlet",help:"Water Crops"},
          {img:"https://i.imgur.com/douDAs2.png",name:"Sky",help:"Feed in Chicken Coop"},
          {img:"https://i.imgur.com/C9bEMBx.png",name:"Jade",help:"Gather in Chicken Coop"},
          {img:"https://i.imgur.com/GADU6ye.png",name:"Amber",help:"Feed in Cattle Shed"},
          {img:"https://i.imgur.com/Pm3DxrK.png",name:"Violet",help:"Gather in Cattle Shed"},
        ]
      }
    },
}
</script>

<style>

</style>