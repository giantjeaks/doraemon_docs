<template>
  <v-app>
    <v-app-bar app color="primary" dark clipped-left>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/dora_soss.png"
          transition="scale-transition"
          width="300"
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

    <v-card class="mx-auto overflow-hidden">
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
        app
        clipped
      >
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

          <v-list-group v-for="(item, i) in items" :key="i">
            <template v-slot:activator>
              <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </template>
            <div v-for="(item2, i2) in item.child" :key="i2">
              <v-list-group
                v-if="item2.child.length > 0"
                no-action
                sub-group
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>{{ item2.title }}</v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item
                  v-for="(item3, i3) in item2.child"
                  :key="i3"
                  link
                  dense
                  :to="item3.to"
                >
                  <v-list-item-title>{{ item3.title }}</v-list-item-title>
                  <v-list-item-icon>
                    <v-icon></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-group>

              <v-list-item-group v-else>
                <v-list-item link :to="item2.to">
                  <v-list-item-icon>
                    <v-icon></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title style="padding: 5px 0 5px 0;">{{
                      item2.title
                    }}</v-list-item-title>
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
      <v-container @click.stop="mini=true">
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
        icon: "mdi-alert-circle-outline",
        to: "/",
        child: [
          { title: "พลังงาน", to: "/stamina", child: [], icon: "mdi-home-city" },
          { title: "ความสัมพันธ์", to: "/friendship", child: [], icon: "mdi-home-city" },
          { title: "การเก็บเกี่ยว", to: "/crops", child: [], icon: "mdi-home-city" },
          { title: "สัตว์เลี้ยง", to: "/animals", child: [], icon: "mdi-home-city" },
          {
            title: "ร้านค้า และ การซื้อขาย",
            to: "",
            child: [
              { title: "ร้านค้า", to: "/stores", icon: "mdi-home-city" },
              {
                title: "ร้านช่างตีเหล็ก",
                to: "/blacksmith",
                icon: "mdi-home-city",
              },
              {
                title: "ร้านช่างไม้",
                to: "/carpenter",
                icon: "mdi-home-city",
              },
              { title: "ร้านคนแคระ (ภูติน้อย)", to: "/koropokkur", icon: "mdi-home-city" }
            ],
            icon: "mdi-home-city",
          },
          {
            title: "ชาวบ้านและของขวัญ",
            to: "/villagers",
            child: [],
            icon: "mdi-home-city",
          },
        ],
      },
      {
        title: "กิจกรรม",
        icon: "mdi-run",
        to: "/activities",
        child: [
          {
            title: "ทำอาหาร",
            to: "/cooking",
            icon: "mdi-home-city",
            child: [],
          },
          {
            title: "จับแมลง",
            to: "/bug",
            icon: "mdi-home-city",
            child: [],
          },
          {
            title: "ตกปลา",
            to: "/fish",
            icon: "mdi-home-city",
            child: [],
          },
          {
            title: "ขุดเหมือง",
            to: "/mining",
            icon: "mdi-home-city",
            child: [],
          },
          {
            title: "ฟาร์มของป่า",
            to: "/foraging",
            icon: "mdi-home-city",
            child: [],
          },
        ],
      },
      {
        title: "บทสรุป",
        icon: "mdi-book-open",
        to: "/summary",
        child: [
          {
            title: "เนื้อเรื่องหลัก",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },
          {
            title: "ช่างไม้",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },
          {
            title: "คลีนิค",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },
          {
            title: "ร้านค้าตำราอาหาร",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },
          {
            title: "ร้านช่างตีเหล็ก",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },
          {
            title: "ร้านค้าทั่วไป",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },
          {
            title: "ร้านไก่",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },
          {
            title: "ร้านวัวแกะ",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },
          {
            title: "ร้านขายอุปกรณ์",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },
          {
            title: "นายอำเภอ",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },
          {
            title: "ฮาม่อน",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },
          {
            title: "คนแคระ(ภูติน้อย)",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },
          {
            title: "น้องหมา",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },
          {
            title: "น้องแมว",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },
          {
            title: "หมี",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },
          {
            title: "ลิง",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },
          {
            title: "กระต่าย",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },
          {
            title: "กระรอก",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },
          {
            title: "ของวิเศษ",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },
          {
            title: "ถ้ำ",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },
        ],
      },
      {
        title: "ของวิเศษ",
        icon: "mdi-bell-ring-outline",
        to: "/gadgets",
        child: [
          {
            title: "ถุงมือซูเปอร์",
            to: "/superGloves",
            icon: "mdi-home-city",
            child: [],
          },{
            title: "ประตูไปที่ไหนก็ได้",
            to: "/anywhereDoor",
            icon: "mdi-home-city",
            child: [],
          },{
            title: "ห่วงผ่านตลอด",
            to: "/passLoop",
            icon: "mdi-home-city",
            child: [],
          },{
            title: "แมวกวัก",
            to: "/comeHereCat",
            icon: "mdi-home-city",
            child: [],
          },{
            title: "เครื่องพัฒนาเมล็ดพันธุ์",
            to: "/inventionInventor",
            icon: "mdi-home-city",
            child: [],
          },{
            title: "กำไลเรียกภูติ",
            to: "/spriteSummoner",
            icon: "mdi-home-city",
            child: [],
          },{
            title: "กระเป๋าวิเศษของโดเรม่อน",
            to: "/whateverWeatherBox",
            icon: "mdi-home-city",
            child: [],
          }
        ],
      },
      {
        title: "เทคนิคต่างๆ",
        icon: "mdi-star-face",
        to: "/trick",
        child: [{
            title: "ขุดเหมือง : โหลด และ เซฟ",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },{
            title: "หาเงินฤดูร้อน!",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },{
            title: "ตกปลาในเหมือง!",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },{
            title: "วิธีแบ่งของเป็นกองย่อย",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },{
            title: "หาตังได้ทุกฤดู!",
            to: "",
            icon: "mdi-home-city",
            child: [],
          },],
      },
    ],
    mini: true,
  }),
};
</script>

<style scoped></style>
