<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" sm="4" v-for="attraction in attractions" v-bind:key="attraction._id">
          <v-card class="mx-auto" max-width="344">
            <v-img
              height="200px"
              :src="require(`../../../server/uploads/${attraction.image}`)"
            >
            </v-img>

            <v-card-title>
              {{ attraction.title }}
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-subtitle>
              {{ attraction.content.substring(0, 100) + "..." }}
            </v-card-subtitle>
            <v-card-text class="text--primary text-left">
             <div> <span>{{ attraction.category }}</span></div>
             <div class="text-right"> <span>{{ attraction.location }}</span></div>
            </v-card-text>
           <v-card-actions class="pa-4">
           <v-btn 
              color="orange lighten-2" 
              text
              :to="{ name: 'attractionDetails', params: { id: attraction._id } }"
              > Explore
               </v-btn>
     
      <v-spacer></v-spacer>
      <span class="grey--text text--lighten-2 text-caption mr-2">
        ({{ attraction.star }})
      </span>
      <v-rating
        v-model="attraction.star"
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

      <Form  v-if='role === "[{\"admin\":true}]"' />
    </v-container>
  </div>
</template>

<script>
import Form from "../components/AddAttraction.vue";
import API from "../api/attractionapi";

export default {
  name: "Attraction",
  components: {
    Form,
  },
  data() {
    return {
      attractions: [],
      role: localStorage.getItem('role')
    };
  },
  async created() {
    this.attractions = await API.getAllAttractions();
  },
};
</script>
