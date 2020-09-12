<template>
  <div class="Mining">
    <v-row justify="center">
      <v-col cols="12">
        <h1>เหมืองและการขุดแร่</h1>
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
            <v-alert border="right" colored-border type="info" elevation="3">
              เราสามารถมาขุดแร่ต่างๆได้ในถ้ำนี้มีทั้งหมด 11 ชั้นและที่ชั้นสุดท้ายสามารถตกปลาในตำนานได้
            </v-alert> 
             <v-alert border="right" colored-border type="info" elevation="3">
              สามารถใช้เทคนิค เขียนบันทึก และ อ่านบันทึก เพื่อประหยัดพลังกายได้ หลักการคือให้ บันทึก ก่อนเริ่มขุด เมื่อขุดเจอทางลงให้ อ่านบันทึก เพื่อทำการเจาะจงขุดไปที่ช่่องทางลงเลยทำไปเรื่อยๆจะทำให้ถึงชั้น ที่ต้องการเอง
              สำหรับใครที่อยากคำนวนแร่ให้คุ้มมีลิงค์สำหรับจดโน๊ตตำแหน่งของแร่ที่ขุดพบด้วยนะ >> <a href="https://gamingph.com/doraemon/mine.html" target="_blank">คลิกจ้า</a>
            </v-alert>
            
            </v-card-text>
        </v-responsive>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <h2>รายการที่สามารถเจอในถ้ำขุดแร่</h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-simple-table dark>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  <h3>รูป</h3>
                </th>
                <th class="text-left">
                  <h3>ไอเทม</h3>
                </th>
                <th class="text-left">
                  <h3>ชั้นที่พบ</h3>
                </th>
                <th class="text-left">
                  <h3>ราคาขาย</h3>
                </th>
                <th class="text-left">
                  <h3>คำอธิบาย</h3>
                </th>
                <th class="text-left">
                  <h3>หมายเหตุ</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in possible" :key="index">
                <td>
                  <v-img width="5.5rem" :src="item.img"></v-img>
                </td>
                <td>{{ item.Item }}</td>
                <td>{{ item.Floor }}</td>
                <td>{{ item.Price }}</td>
                <td>{{ item.Desc }}</td>
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
import ore from "../../const/ore.js"

export default {
  name: "Mining",
  data() {
    return {
      possible : ore.ore,
    };
  }
};
</script>

<style>
</style>