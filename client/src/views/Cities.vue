<template>
<div>
<h1>City</h1>
<v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        v-for="item in list" v-bind:key="item._id"
      >
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
     height="400px"    
     :src="require(`../../../server/uploads/${item.image}`)">
    </v-img>

    <v-card-title>
     {{ item.title}}
    </v-card-title>

    <v-card-subtitle>
      {{item.content}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{item.location}}</div>
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
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
  name: 'City',
  data(){
    return {list: undefined}
  },
  mounted() {
    Vue.axios.get('http://localhost:5001/api/city')
    .then((res) => {
      this.list = res.data;
      console.warn(res.data)
    });
  },
}


</script>
