<template>
  <div class="Stores">
    <v-row justify="center">
      <v-col cols="12">
        <h1>Stores and shopping</h1>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <h2>East Natura</h2>
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
                  <h3>Store Name</h3>
                </th>
                <th class="text-left">
                  <h3>SU</h3>
                </th>
                <th class="text-left">
                  <h3>MO</h3>
                </th>
                <th class="text-left">
                  <h3>TU</h3>
                </th>
                <th class="text-left">
                  <h3>WE</h3>
                </th>
                <th class="text-left">
                  <h3>TH</h3>
                </th>
                <th class="text-left">
                  <h3>FR</h3>
                </th>
                <th class="text-left">
                  <h3>SA</h3>
                </th>
                <th class="text-left">
                  <h3>Hours Open</h3>
                </th>
                <th class="text-left">
                  <h3>Talk to</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in East" :key="item.name">
                <td>
                  <v-row align="center">
                    <v-col cols="2" style="max-width: none;padding: 0px;">
                      <v-img width="40px" :src="item.img"></v-img>
                    </v-col>
                    <v-col cols="10" style="max-width: none;padding: 0px;">{{ item.Name }}</v-col>
                  </v-row>
                </td>
                <!-- <td>{{ item.SU }}</td>
                <td>{{ item.MO }}</td>
                <td>{{ item.TU }}</td>
                <td>{{ item.WE }}</td>
                <td>{{ item.TH }}</td>
                <td>{{ item.FR }}</td>
                <td>{{ item.SA }}</td> -->
                <td><v-icon :color="item.SU=='YES'? 'green':'red'">{{item.SU=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.MO=='YES'? 'green':'red'">{{item.MO=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.TU=='YES'? 'green':'red'">{{item.TU=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.WE=='YES'? 'green':'red'">{{item.WE=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.TH=='YES'? 'green':'red'">{{item.TH=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.FR=='YES'? 'green':'red'">{{item.FR=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.SA=='YES'? 'green':'red'">{{item.SA=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td>
                  <span v-for="(hour,i) in item.Hours" :key="i">
                    {{hour}}
                    <br />
                  </span>
                </td>
                <td>{{ item.Talk}}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>
            <span>
              What you can buy
              <br />:ear_of_rice: Knick Knack General Store ⇒ seeds, fertilizer, larger bag and bug net (one time only)
              <br />:fork_and_knife: Cafe Delish ⇒ crops, meals, ingredients, recipes, cookwares
              <br />:hospital: Regis’ Clinic ⇒ potions to recover stamina, potions to increase max stamina, animal medicine
              <br />:gem: Blacksmith Shop ⇒ upgrade tools, ores, makers (must trigger event in Fall 1 Year 1 first and Blake and Smitty have at least ♡♡♡♡)
            </span>
          </v-card-text>
        </v-responsive>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <h2>West Natura</h2>
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
                  <h3>Store Name</h3>
                </th>
                <th class="text-left">
                  <h3>SU</h3>
                </th>
                <th class="text-left">
                  <h3>MO</h3>
                </th>
                <th class="text-left">
                  <h3>TU</h3>
                </th>
                <th class="text-left">
                  <h3>WE</h3>
                </th>
                <th class="text-left">
                  <h3>TH</h3>
                </th>
                <th class="text-left">
                  <h3>FR</h3>
                </th>
                <th class="text-left">
                  <h3>SA</h3>
                </th>
                <th class="text-left">
                  <h3>Hours Open</h3>
                </th>
                <th class="text-left">
                  <h3>Talk to</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in West" :key="item.name">
                <td>
                  <v-row align="center">
                    <v-col cols="2" style="max-width: none;padding: 0px;">
                      <v-img width="40px" :src="item.img"></v-img>
                    </v-col>
                    <v-col cols="10" style="max-width: none;padding: 0px;">{{ item.Name }}</v-col>
                  </v-row>
                </td>
                <td><v-icon :color="item.SU=='YES'? 'green':'red'">{{item.SU=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.MO=='YES'? 'green':'red'">{{item.MO=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.TU=='YES'? 'green':'red'">{{item.TU=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.WE=='YES'? 'green':'red'">{{item.WE=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.TH=='YES'? 'green':'red'">{{item.TH=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.FR=='YES'? 'green':'red'">{{item.FR=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.SA=='YES'? 'green':'red'">{{item.SA=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td>
                  <span v-for="(hour,i) in item.Hours" :key="i">
                    {{hour}}
                    <br />
                  </span>
                </td>
                <td>{{ item.Talk}}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>
            <span>
              What you can buy
              <br />:cow: Gouter Mawk ⇒ barn animals, tools for taking care of them, fodder, animal snack
              <br />:chicken: Cuckoo House ⇒ chicken, fodder, animal snack
            </span>
          </v-card-text>
        </v-responsive>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <h2>Lumberjack Forest</h2>
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
                  <h3>Store Name</h3>
                </th>
                <th class="text-left">
                  <h3>SU</h3>
                </th>
                <th class="text-left">
                  <h3>MO</h3>
                </th>
                <th class="text-left">
                  <h3>TU</h3>
                </th>
                <th class="text-left">
                  <h3>WE</h3>
                </th>
                <th class="text-left">
                  <h3>TH</h3>
                </th>
                <th class="text-left">
                  <h3>FR</h3>
                </th>
                <th class="text-left">
                  <h3>SA</h3>
                </th>
                <th class="text-left">
                  <h3>Hours Open</h3>
                </th>
                <th class="text-left">
                  <h3>Talk to</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in Forest" :key="item.name">
                <td>
                  <v-row align="center">
                    <v-col cols="2" style="max-width: none;padding: 0px;">
                      <v-img width="40px" :src="item.img"></v-img>
                    </v-col>
                    <v-col cols="10" style="max-width: none;padding: 0px;">{{ item.Name }}</v-col>
                  </v-row>
                </td>
                <td><v-icon :color="item.SU=='YES'? 'green':'red'">{{item.SU=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.MO=='YES'? 'green':'red'">{{item.MO=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.TU=='YES'? 'green':'red'">{{item.TU=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.WE=='YES'? 'green':'red'">{{item.WE=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.TH=='YES'? 'green':'red'">{{item.TH=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.FR=='YES'? 'green':'red'">{{item.FR=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.SA=='YES'? 'green':'red'">{{item.SA=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td>
                  <span v-for="(hour,i) in item.Hours" :key="i">
                    {{hour}}
                    <br />
                  </span>
                </td>
                <td>{{ item.Talk}}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>
            <span>
              What you can buy
              <br />:evergreen_tree: Carpenter Shop ⇒ upgrade buildings, furnitures, farm decorations, woods and stones
            </span>
          </v-card-text>
        </v-responsive>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <h2>Zazan Cape</h2>
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
                  <h3>Store Name</h3>
                </th>
                <th class="text-left">
                  <h3>SU</h3>
                </th>
                <th class="text-left">
                  <h3>MO</h3>
                </th>
                <th class="text-left">
                  <h3>TU</h3>
                </th>
                <th class="text-left">
                  <h3>WE</h3>
                </th>
                <th class="text-left">
                  <h3>TH</h3>
                </th>
                <th class="text-left">
                  <h3>FR</h3>
                </th>
                <th class="text-left">
                  <h3>SA</h3>
                </th>
                <th class="text-left">
                  <h3>Hours Open</h3>
                </th>
                <th class="text-left">
                  <h3>Talk to</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in Zazan" :key="item.name">
                <td>
                  <v-row align="center">
                    <v-col cols="2" style="max-width: none;padding: 0px;">
                      <v-img width="40px" :src="item.img"></v-img>
                    </v-col>
                    <v-col cols="10" style="max-width: none;padding: 0px;">{{ item.Name }}</v-col>
                  </v-row>
                </td>
                <td><v-icon :color="item.SU=='YES'? 'green':'red'">{{item.SU=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.MO=='YES'? 'green':'red'">{{item.MO=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.TU=='YES'? 'green':'red'">{{item.TU=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.WE=='YES'? 'green':'red'">{{item.WE=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.TH=='YES'? 'green':'red'">{{item.TH=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.FR=='YES'? 'green':'red'">{{item.FR=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td><v-icon :color="item.SA=='YES'? 'green':'red'">{{item.SA=='YES'? 'mdi-check':'mdi-window-close'}}</v-icon></td>
                <td>
                  <span v-for="(hour,i) in item.Hours" :key="i">
                    {{hour}}
                    <br />
                  </span>
                </td>
                <td>{{ item.Talk}}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>
            <span>
              What you can buy
              <br /> Sandy’s Tackle Shop ⇒ fishing bait
            </span>
          </v-card-text>
        </v-responsive>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Stores",
  data() {
    return {
      East: [
        {
          img:
            "https://assets.hackmd.io/build/emojify.js/dist/images/basic/ear_of_rice.png",
          Name: ":cow: Gouter Mawk",
          SU: "YES",
          MO: "YES",
          TU: "YES",
          WE: "NO",
          TH: "YES",
          FR: "NO",
          SA: "YES",
          Hours: ["9AM-Noon", "1PM-4PM"],
          Talk: "Aries"
        },
        {
          img:
            "https://assets.hackmd.io/build/emojify.js/dist/images/basic/ear_of_rice.png",
          Name: ":cow: Gouter Mawk",
          SU: "YES",
          MO: "YES",
          TU: "YES",
          WE: "NO",
          TH: "YES",
          FR: "NO",
          SA: "YES",
          Hours: ["9AM-Noon", "1PM-4PM"],
          Talk: "Aries"
        },
        {
          img:
            "https://assets.hackmd.io/build/emojify.js/dist/images/basic/ear_of_rice.png",
          Name: ":cow: Gouter Mawk",
          SU: "YES",
          MO: "YES",
          TU: "YES",
          WE: "NO",
          TH: "YES",
          FR: "NO",
          SA: "YES",
          Hours: ["9AM-Noon", "1PM-4PM"],
          Talk: "Aries"
        },
        {
          img:
            "https://assets.hackmd.io/build/emojify.js/dist/images/basic/ear_of_rice.png",
          Name: ":cow: Gouter Mawk",
          SU: "YES",
          MO: "YES",
          TU: "YES",
          WE: "NO",
          TH: "YES",
          FR: "NO",
          SA: "YES",
          Hours: ["9AM-Noon", "1PM-4PM"],
          Talk: "Aries"
        }
      ],
      West: [
        {
          img:
            "https://assets.hackmd.io/build/emojify.js/dist/images/basic/ear_of_rice.png",
          Name: ":cow: Gouter Mawk",
          SU: "YES",
          MO: "YES",
          TU: "NO",
          WE: "NO",
          TH: "YES",
          FR: "NO",
          SA: "YES",
          Hours: ["9AM-Noon", "1PM-4PM"],
          Talk: "Aries"
        },
        {
          img:
            "https://assets.hackmd.io/build/emojify.js/dist/images/basic/ear_of_rice.png",
          Name: ":cow: Gouter Mawk",
          SU: "YES",
          MO: "YES",
          TU: "YES",
          WE: "NO",
          TH: "YES",
          FR: "NO",
          SA: "YES",
          Hours: ["9AM-Noon", "1PM-4PM"],
          Talk: "Aries"
        }
      ],
      Forest: [
        {
          img:
            "https://assets.hackmd.io/build/emojify.js/dist/images/basic/ear_of_rice.png",
          Name: ":cow: Gouter Mawk",
          SU: "YES",
          MO: "YES",
          TU: "YES",
          WE: "NO",
          TH: "YES",
          FR: "NO",
          SA: "NO",
          Hours: ["9AM-Noon", "1PM-4PM"],
          Talk: "Aries"
        }
      ],
      Zazan: [
        {
          img:
            "https://assets.hackmd.io/build/emojify.js/dist/images/basic/ear_of_rice.png",
          Name: ":cow: Gouter Mawk",
          SU: "NO",
          MO: "YES",
          TU: "YES",
          WE: "NO",
          TH: "YES",
          FR: "NO",
          SA: "YES",
          Hours: ["9AM-Noon", "1PM-4PM"],
          Talk: "Aries"
        }
      ]
    };
  }
};
</script>

<style>
</style>