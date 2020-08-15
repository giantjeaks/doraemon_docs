<template>
  <div class="SuperGloves">
    <v-row justify="center">
      <v-col cols="12">
        <h1>Super Gloves</h1>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <v-alert text dense outlined color="blue">
          There are 5 steps to complete this chain of event.
          <br />1.Trigger busy children cut-scene
          <br />2.Sell 3 kinds of crop
          <br />3.Trigger Ryam cut-scene
          <br />4.Get the gloves
          <br />Step 3 may happen before step 2.
        </v-alert>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>
            <span>
              <h3>1. Trigger busy children cut-scene</h3>To trigger this cut-scene, you must have Sue, Rem, and Jemma heart at least ♡♡.
              Go to West Natura before 6PM to trigger the cut-scene.
            </span>
          </v-card-text>
        </v-responsive>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>
            <span>
              <h3>2. Sell 3 kinds of crop</h3>Sell at least 3 kinds of crop, at least 1 each. For faster completion, you can sell 1 turnip, 1 potato, and 1 p. daisy. So start growing them on your field early in the Spring.
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
          color="blue"
        >📢 Seems like early players can have free seeds by doing a quest from Gennie. When you talk to her during General Store open hours, scroll down and you’ll see 2 items that cost 0. One is the quest to deliver that bag to Ryam, while the other is from Gennie. Buy the latter, then talk to Jemma several times afterward to get the seeds. Make sure your bag isn’t full.</v-alert>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>
            <span>
              <h3>3. Trigger Ryam cut-scene</h3>Ryam must have at least ♡♡♡ to trigger this scene.
              Go to Ryam’s house before 6PM to trigger it.
            </span>
          </v-card-text>
        </v-responsive>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>
            <span>
              <h3>4. Get the Super Gloves!</h3>Early in the morning when you walk out from your house, Ryam will be there to give you the Super Gloves. Now you can go to Mount Whistle to save the dog, and you will be taking care of him.
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
        >Super Gloves event ended! 🎉 Now you can show seeds faster with Super Gloves by holding the action button longer.</v-alert>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "SuperGloves"
};
</script>

<style>
</style>