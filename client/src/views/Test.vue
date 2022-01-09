<template>
  <div>
    <h2>Test</h2>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios)

export default {
  name: 'Test',
  mounted() {
    Vue.axios.get('http://localhost:5001/api/hotel')
    .then((res) => {
      console.warn(res)
    });
  },
}


</script>
