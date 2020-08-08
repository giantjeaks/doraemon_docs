<template>
  <v-app>
    <v-app-bar app color="primary" dark clipped-left>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-card class="mx-auto overflow-hidden">
      <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent app clipped>
        <!-- <v-list dense>
          <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title style="font-size:15px; padding: 2px 0 2px 0;">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>-->

        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-group value="true" v-for="(item,i) in items" :key="i">
            <template v-slot:activator>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </template>
            <div v-for="(item2,i2) in item.child" :key="i2">
              <v-list-group v-if="item2.child.length > 0" no-action sub-group value="true">
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>{{item2.title}}</v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item v-for="(item3, i3) in item2.child" :key="i3" link>
                  <v-list-item-title v-text="item3.title"></v-list-item-title>
                  <v-list-item-icon>
                    <v-icon v-text="item3.title"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-group>

              <v-list-item-group v-else>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item2.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </div>
          </v-list-group>
        </v-list>

        <v-divider></v-divider>
        <v-list-item class="px-2">
          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
      </v-navigation-drawer>
    </v-card>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="10">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},
  data: () => ({
    //
    drawer: true,
    items: [
      {
        title: "ข้อมูลพื้นฐาน",
        icon: "mdi-home-city",
        to: "/",
        child: [
          { title: "Stamina", to: "", child: [], icon: "mdi-home-city" },
          { title: "Friendship", to: "", child: [], icon: "mdi-home-city" },
          { title: "Crops", to: "", child: [], icon: "mdi-home-city" },
          { title: "Animals", to: "", child: [], icon: "mdi-home-city" },
          {
            title: "Stores and shopping",
            to: "",
            child: [
              {
                title: "Anvil - Blacksmith Shop",
                to: "",
                icon: "mdi-home-city"
              },
              {
                title: "Hammer - Carpenter Shop",
                to: "",
                icon: "mdi-home-city"
              },
              { title: "Koropokkur’s Shop", to: "", icon: "mdi-home-city" }
            ],
            icon: "mdi-home-city"
          },
          {
            title: "Villagers And Gifts",
            to: "",
            child: [],
            icon: "mdi-home-city"
          }
        ]
      },
      {
        title: "กิจกรรม",
        icon: "mdi-account",
        to: "/activities",
        child: [
          {
            title: "Cooking",
            to: "",
            icon: "mdi-home-city",
            child: []
          },
          {
            title: "Bug Catching",
            to: "",
            icon: "mdi-home-city",
            child: []
          },
          {
            title: "Fishing",
            to: "",
            icon: "mdi-home-city",
            child: []
          },
          {
            title: "Mining",
            to: "",
            icon: "mdi-home-city",
            child: []
          },
          {
            title: "Foraging",
            to: "",
            icon: "mdi-home-city",
            child: []
          }
        ]
      },
      {
        title: "บทสรุป",
        icon: "mdi-account-group-outline",
        to: "/summary",
        child: []
      },
      {
        title: "ของวิเศษ",
        icon: "mdi-account-group-outline",
        to: "/gadgets",
        child: []
      },
      {
        title: "เทคนิคต่างๆ",
        icon: "mdi-account-group-outline",
        to: "/trick",
        child: []
      }
    ],
    mini: true,
    basics: [
      ["Management", "people_outline"],
      ["Settings", "settings"]
    ],

    cruds: [
      ["Create", "add"],
      ["Read", "insert_drive_file"],
      ["Update", "update"],
      ["Delete", "delete"]
    ]
  })
};
</script>

<style scoped>
</style>
