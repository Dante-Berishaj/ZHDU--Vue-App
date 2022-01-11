<template>
  <div class="hotels">
    <h1>Hotels</h1>
    <v-container class="d-flex grey lighten-5">
      <v-row>
        <Hotel
          v-for="h in hotels"
          v-bind:hotel="h"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Hotel from '../components/Hotel.vue'
import axios from 'axios'

export default {
  name: "Hotels",
  components: { Hotel },
  data() {
    return {
      hotels: ['asdfasdf']
    };
  },
  mounted() {
    axios.get('http://localhost:5001/api/hotel')
      .then(res => this.hotels = res.data);
  }
}
</script>
