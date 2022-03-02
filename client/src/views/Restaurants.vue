<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" sm="4" v-for="restaurant in restaurants" v-bind:key="restaurant._id">
          <v-card class="mx-auto" max-width="344">
            <v-img
              height="200px"
              :src="require(`../../../server/uploads/${restaurant.image}`)"
            >
            </v-img>

            <v-card-title>
              {{ restaurant.title }}
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-subtitle>
              {{ restaurant.content.substring(0, 100) + "..." }}
            </v-card-subtitle>
            <v-card-text class="text--primary text-left">
             <div> <span>{{ restaurant.category }}</span></div>
             <div class="text-right"> <span>{{ restaurant.location }}</span></div>
            </v-card-text>
           <v-card-actions class="pa-4">
           <v-btn 
              color="orange lighten-2" 
              text
              :to="{ name: 'restaurantDetails', params: { id: restaurant._id } }"
              > Explore
               </v-btn>
     
      <v-spacer></v-spacer>
      <span class="grey--text text--lighten-2 text-caption mr-2">
        ({{ restaurant.star }})
      </span>
      <v-rating
        v-model="restaurant.star"
        background-color="white"
        color="yellow accent-4"
        dense
        half-increments
        hover
        size="18"
      ></v-rating>   
    </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <Form v-if='role === "[{\"admin\":true}]"' />
    </v-container>
  </div>
</template>

<script>
import Form from "../components/AddRestaurant.vue";
import API from "../api/restaurantapi";

export default {
  name: "Restaurant",
  components: {
    Form,
  },
  data() {
    return {
      restaurants: [],
      role: localStorage.getItem('role')
    };
  },
  async created() {
    this.restaurants = await API.getAllRestaurants();
  },
};
</script>
