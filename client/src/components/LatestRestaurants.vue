<template>
 <div class="block txt">
    <v-container>
      <h2 class="text-center">Restaurants</h2>
      <v-row>
        <v-col cols="12" sm="4" v-for="restaurant in restaurants.slice(0,3)" v-bind:key="restaurant._id">
          <v-card dark outlined class="mx-auto"
           :to="{ name: 'restaurantDetails', params: { id: restaurant._id } }">
              <v-img
               class="align-end"
               height="200px"    
              :src="require(`../../../server/uploads/${restaurant.image}`)">
            </v-img>
            <v-card-title>{{ restaurant.title }}
              <v-btn right absolute class="ml-4 mt-3" color="blue darken-4">
                {{ restaurant.star }}
                <v-icon color="yellow darken-2" small>mdi-star</v-icon>
              </v-btn>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-subtitle class="pb-0">{{ restaurant.content.substring(0,100) + "..." }}</v-card-subtitle>
            <v-card-text class="white-text text-right">
              <div>{{ restaurant.location }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  <v-row justify = "end">
           <router-link style="text-decoration: none"
        to="/restaurants"
      >
     <v-btn align="right" text color="primary">
      More<v-icon right dark>mdi-silverware-fork-knife</v-icon>
    </v-btn>
           </router-link>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import API from "../api/restaurantapi";

export default {
  name: "LatestRestaurants",
  
  data() {
    return {
      restaurants: [],
    };
  },
  async created() {
    this.restaurants = await API.getAllRestaurants();
  },
 
};
</script>

<style scoped>
.block {
  padding: 60px 0;
  border-bottom: 1px solid darken(white, 10%);
}
.txt {
  font-weight: 800;
  font-size: 30px;
  border-bottom: 1px;
}
.txt:after {
      content: '';
      width: 60px;
      height: 1px;
      position: absolute;
      bottom: 10;
      left: 50%;
      transform: translateX(-50%);
}
</style>
