<template>
<div>
<v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col cols="12" sm="4"
        v-for="attraction in list" v-bind:key="attraction._id"
      >
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
     height="200px"    
     :src="require(`../../../server/uploads/${attraction.image}`)">
    </v-img>

    <v-card-title>
     {{ attraction.title}}
    </v-card-title>

    <v-card-subtitle>
      {{attraction.content.substring(0,100) + "..."}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{attraction.location}}</div>
      <div>{{attraction.category}}</div>

    </v-card-text>


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

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>    
      </div>
    </v-expand-transition>
  </v-card>
   </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios)

export default {
  name: 'Attraction',
  data(){
    return {list: undefined}
  },
  mounted() {
    Vue.axios.get('http://localhost:5001/api/attraction')
    .then((res) => {
      this.list = res.data;
      console.warn(res.data)
    });
  },
}


</script>
