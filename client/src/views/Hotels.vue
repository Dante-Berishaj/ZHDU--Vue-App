<template>
  <div>
    <v-container>
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
              <v-btn right absolute class="ml-4 mt-3" color="blue">
                {{ hotel.star }}
                <v-icon color="yellow darken-2">mdi-star</v-icon>
              </v-btn>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-subtitle>
              {{ hotel.content.substring(0, 100) + "..." }}
            </v-card-subtitle>
            <v-card-text class="text--primary text-right">
              <div>{{ hotel.category }}</div>
              <div>{{ hotel.location }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn 
              color="orange lighten-2" 
              text
              :to="{ name: 'hotelDetails', params: { id: hotel._id } }"
              > Explore
               </v-btn>

              <v-spacer></v-spacer>
              <EditHotel />
              <v-btn icon>
                <v-icon color="red darken-1">{{
                  "mdi-trash-can-outline"
                }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <Form />
    </v-container>
  </div>
</template>

<script>
import Form from "../components/AddHotel.vue";
import EditHotel from "../components/EditHotel.vue";
import API from "../api/hotelapi";

export default {
  name: "Hotel",
  components: {
    Form,
    EditHotel,
  },
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
