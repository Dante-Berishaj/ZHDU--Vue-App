<template>
<v-app>
    <v-app-bar flat>
      <NavBar />
    </v-app-bar>

<v-main>
    <router-view></router-view>
</v-main>
    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import NavDrawer from "./components/common/NavDrawer.vue"

export default {
  name: "App",

  components: {
    NavBar,
    Footer,
    NavDrawer
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
#app{
  width: 100vw;
  min-height: 100vh;
  background: #FFFFFF;
  color: #15202B;
}
</style>