<template>
  <div class="block txt">
    <v-container>
      <h2 class="text-center">Accommodation</h2>
      <v-row>
        <v-col  v-for="hotel in hotels.slice(0,3)" :key="hotel._id" cols="12" md="4">
          <v-card dark outlined class="mx-auto"
           :to="{ name: 'hotelDetails', params: { id: hotel._id } }">
              <v-img
               class="align-end"
               height="200px"    
              :src="require(`../../../server/uploads/${hotel.image}`)">
            </v-img>
            <v-card-title>{{ hotel.title }}
              <v-btn right absolute class="ml-4 mt-3" color="blue darken-4">
                {{ hotel.star }}
                <v-icon color="yellow darken-2" small>mdi-star</v-icon>
              </v-btn>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-subtitle class="pb-0">{{ hotel.content.substring(0,100) + "..." }}</v-card-subtitle>
            <v-card-text class="white-text text-right">
              <div>{{ hotel.location }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify = "end">
           <router-link style="text-decoration: none"
        to="/hotels"
      >
     <v-btn align="right" text color="primary">
      More<v-icon right dark>mdi-bed</v-icon>
    </v-btn>
           </router-link>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import API from "../api/hotelapi";

export default {
  name: "LatestHotels",
  data() {
    return {
      hotels: [],
    };
  },
  async created() {
    this.hotels = await API.getAllHotels();
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