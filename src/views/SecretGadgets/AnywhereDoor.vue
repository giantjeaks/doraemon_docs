<template>
  <div class="AnywhereDoor">
    <v-row justify="center">
      <v-col cols="12">
        <h1>Anywhere Door</h1>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>
            <span>
              This one is simple.<br />
              <br />First, you have to be at least in Year 1 Summer 1.<br />
              <br />Raise Doraemon, Ryam, and Pent heart to ♡♡.<br />
              <br />Go to Ryam’s house to trigger the scene.<br />
              <br />Give the gold ore to Pent, and the rest of the event will be triggered. After the event, the Anywhere Door will be yours to be used as you please.
            </span>
          </v-card-text>
        </v-responsive>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-alert
        text
          dense
          outlined
          color="green"
        >Anywhere Door event ended! 🎉</v-alert>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "AnywhereDoor"
};
</script>

<style>
</style>