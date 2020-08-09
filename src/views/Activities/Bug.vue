<template>
  <div class="Bug">
    <v-row justify="center">
      <v-col cols="12">
        <h1>Bug</h1>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>Work in progess</v-card-text>
        </v-responsive>
      </v-col>
    </v-row>

      <v-row justify="center">
        <v-col cols="12">
          <v-simple-table dark>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    <h3>Image</h3>
                  </th>
                  <th class="text-left">
                    <h3>Bug</h3>
                  </th>
                  <th class="text-left">
                    <h3>Location</h3>
                  </th>
                  <th class="text-left">
                    <h3>Season</h3>
                  </th>
                  <th class="text-left">
                    <h3>Note</h3>
                  </th>
                  <th class="text-left">
                    <h3>0.5 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>1 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>1.5 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>2 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>2.5 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>3 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>3.5 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>4 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>4.5 ★</h3>
                  </th>
                  <th class="text-left">
                    <h3>5 ★</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item) in Bug" :key="item.name">
                  <td>
                    <v-img width="35px" :src="item.img"></v-img>
                  </td>
                  <td>{{ item.Bug }}</td>
                  <td>
                    <span v-for="(ing,i) in item.Location" :key="i">
                      {{ing}}
                      <br />
                    </span>
                  </td>
                  <td>{{ item.Season }}</td>
                  <td>{{ item.Note }}</td>
                  <td>{{ item.S05 }}</td>
                  <td>{{ item.S1 }}</td>
                  <td>{{ item.S15 }}</td>
                  <td>{{ item.S2 }}</td>
                  <td>{{ item.S25 }}</td>
                  <td>{{ item.S3 }}</td>
                  <td>{{ item.S35 }}</td>
                  <td>{{ item.S4 }}</td>
                  <td>{{ item.S45 }}</td>
                  <td>{{ item.S5 }}</td>
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
  name: "Bug",
  computed: {},
  data() {
    return {
      Bug: [
            {
              img: "https://i.imgur.com/q502vsx.jpg",
              Bug: "Tempura",
              Location: ["Pumpkin", "Eggplant", "Shiitake", "Flour", "Oil"],
              Season: "Tempura",
              Note: "Tempura",
              S05: "1231",
              S1: "1231",
              S15: "1231",
              S2: "1231",
              S25: "1231",
              S3: "1231",
              S35: "1231",
              S4: "1231",
              S45: "1231",
              S5: "1231"
            },
          ]
    };
  },
  methods: {
    datafortable: function(namedata) {
      const result = this.datas.find(({ name }) => name == namedata);
      return result.data;
    }
  }
};
</script>

<style>
</style>