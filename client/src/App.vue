<template>
  <div id="app">
    <NavBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import City from './components/City.vue'

export default {
  name: 'App',
  components: { NavBar, City },
  props: {
  },
  data() {
    return {
    }
  }
}
</script>

<style>
#app {
  width: 90%;
  margin: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}
</style>
