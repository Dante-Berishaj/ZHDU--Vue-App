<template>
<v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        v-for="n in 3"
        :key="n"
        cols="12"
        sm="4"
      >
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      height="200px"
    ></v-img>

    <v-card-title>
    </v-card-title>

    <v-card-subtitle>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
        </v-card-text>
       

      </div>
    </v-expand-transition>
  </v-card>
   </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Attraction",
  props: {
    attraction: {}
  }
}
</script>