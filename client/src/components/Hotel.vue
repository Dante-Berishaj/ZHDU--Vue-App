<template>
  <v-col cols="12" sm="4">
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-img
        :src="require(`../../../server/uploads/${hotel.image}`)"
        height="400px"
      ></v-img>

      <v-card-title>
       {{ hotel.title }}
      </v-card-title>

      <v-card-subtitle>
        {{ hotel.content }}
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
        <v-icon>{{ show ? 'mdi-heart' : 'mdi-heart' }}</v-icon>
      </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Hotel",
  props: { 
    hotel: {}
  }
}
</script>

<style>
</style>
