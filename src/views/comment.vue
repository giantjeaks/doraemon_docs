<template>
  <div class="comment">
    <v-row justify="center">
      <v-col cols="12">
        <h1>แสดงความคิดเห็น</h1>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-textarea outlined name="input-7-4" label="Comment" v-model="comment"></v-textarea>
      </v-col>
    </v-row>
    
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-btn
          class="ma-2"
          :loading="loading"
          :disabled="loading"
          color="secondary"
          @click="SendData()"
        >Accept Terms</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "comment",
  data() {
    return {
      comment: "",
      loading: false
    };
  },
  methods: {
    async SendData() {
      this.loading = true;
      await axios
        .post("https://bot2test2nodejs.herokuapp.com/webDoraemon", {
          msg: this.comment
        })
        .then(response => {
          console.log(response);
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        });
    }
  }
};
</script>

<style>
</style>