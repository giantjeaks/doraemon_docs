<template>
  <div class="Horse">
    <v-row justify="center">
      <v-col cols="12">
        <h1>ม้า</h1>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <h2>Ch.1</h2>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <v-alert text dense outlined color="blue">
          Requirement:
          <br />● Finished building the stable from Carpenter
        </v-alert>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>
            <span>
              Go to West Natura to trigger the scene and you will get a horse from Rem.
            </span>
          </v-card-text>
        </v-responsive>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <h2>Ch.2</h2>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <v-alert text dense outlined color="blue">
          Requirement:
          <br />● Horse heart at 1.5
        </v-alert>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>
            <span>
              Enter the stable (if the scene doesn’t triggered, try putting your horse inside the stable). A scene will be triggered where Noby fainted while taking care of the horse.
            </span>
          </v-card-text>
        </v-responsive>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <h2>Ch.3</h2>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <v-alert text dense outlined color="blue">
          Requirement:
          <br />● Horse heart at 2.5
        </v-alert>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>
            <span>
              Enter the stable. You will lose your horse temporarily. No need to be afraid.
            </span>
          </v-card-text>
        </v-responsive>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <h2>Ch.4</h2>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <v-card-text>
            <span>
              This will be automatically triggered the next day after Ch.3 occured. You will get your horse back.
            </span>
          </v-card-text>
        </v-responsive>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <v-alert text dense outlined color="green">
          End 🎉
        </v-alert>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    name: "Horse",
}
</script>

<style>

</style>