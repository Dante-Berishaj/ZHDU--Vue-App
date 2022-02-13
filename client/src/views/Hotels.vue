<template>
  <div>
    <v-container>
      <v-alert border="left" close-text="Close Alert" color="green accent-4" 
      dark dismissable
      v-if="this.$route.params.message">
{{ this.$route.params.message }}
     </v-alert>
      <v-row no-gutters>
        <v-col cols="12" sm="4" v-for="hotel in hotels" v-bind:key="hotel._id">
          <v-card class="mx-auto" max-width="344">
            <v-img
              height="200px"
              :src="require(`../../../server/uploads/${hotel.image}`)"
            >
            </v-img>

            <v-card-title>
              {{ hotel.title }}
            </v-card-title>

            <v-card-subtitle>
              {{ hotel.content.substring(0, 100) + "..." }}
            </v-card-subtitle>

            <v-card-text class="text--primary text-right">
              <div>{{ hotel.category }}</div>
              <div>{{ hotel.location }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange lighten-2" text> Explore </v-btn>

              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
      </v-col>
       
      </v-row>
      
  <Form />
    </v-container>
  </div>
</template>

<script>
import Form from "../components/AddHotel.vue"
import API from "../api/hotelapi";


export default {
  name: "Hotel",
  components: {
    Form,
  },
  data() {
    
    return { 
      hotels: [],
      };
  },
async created(){
  this.hotels = await API.getAllHotels();
},
};
</script>
