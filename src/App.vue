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

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

     <v-card>
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
        app
        clipped
      >
        <v-list dense>
          <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content >
              <v-list-item-title style="font-size:15px; padding: 2px 0 2px 0;"> {{ item.title }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
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
      <router-view></router-view>
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
      { title: "ข้อมูลพื้นฐาน", icon: "mdi-home-city",to: "/" },
      { title: "กิจกรรม", icon: "mdi-account",to: "/activities" },
      { title: "บทสรุป", icon: "mdi-account-group-outline",to:"/summary"},
      { title: "ของวิเศษ", icon: "mdi-account-group-outline",to:"/gadgets" },
      { title: "เทคนิคต่างๆ", icon: "mdi-account-group-outline",to:"/trick" },
    ],
    mini: true,
  }),
};
</script>

<style scoped>
 
</style>
