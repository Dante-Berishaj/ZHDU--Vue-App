<template>
  <div>
    <h2>Test</h2>
    <table border="1px">
      <tr v-for="item in list" v-bind:key="item._id">
        <td>{{item.title}}</td>
        <td>{{item.category}}</td>
        <td>{{item.content}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios)

export default {
  name: 'Test',
  data(){
    return {list: undefined}
  },
  mounted() {
    Vue.axios.get('http://localhost:5001/api/hotel')
    .then((res) => {
      this.list = res.data;
      console.warn(res.data)
    });
  },
}


</script>
