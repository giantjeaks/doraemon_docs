<template>
  <div class="Mining">
    <v-row justify="center">
      <v-col cols="12">
        <h1>เหมืองและการขุดเหมือง</h1>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <h3>ทำยังไงให้ได้พลั่ว (Pickaxe)</h3>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>
            <span>
              ไปที่ถ้ำขุดเหมือง (ตั้งอยู่ทางเข้าถ้ำในแผนที่เลย) เราจะถูกตัดเข้าคัตซีนที่มีโดราเอมอน สมิธตี้ และเบลคคุยกันอยู่ข้างใน
              จากนั้นไปคุยกับเบลคแล้วเราจะได้พลั่วของเรามา ! เคลียร์ช่องในกระเป๋าก่อนคุยด้วยนะ !
            </span>
            </v-card-text>
        </v-responsive>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <h2>รายการที่สามารถเจอในถ้ำขุดเหมือง</h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-simple-table dark>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  <h3>ไอเทม</h3>
                </th>
                <th class="text-left">
                  <h3>เริ่มจากชั้น</h3>
                </th>
                <th class="text-left">
                  <h3>ราคาขาย</h3>
                </th>
                <th class="text-left">
                  <h3>หมายเหตุ</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in possible" :key="item.name">
                <td>{{ item.Item }}</td>
                <td>{{ item.Floor }}</td>
                <td>{{ item.Price }}</td>
                <td>{{ item.Notes }}</td>
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
  name: "Mining",
  data() {
    return {
      possible : [{Item:"Junk", Floor: "Entrance", Price : "100", Notes: "Feel free to sell this if you aren’t interested in fossils series furniture set." }],
    };
  }
};
</script>

<style>
</style>