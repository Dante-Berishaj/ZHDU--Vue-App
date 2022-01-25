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

export default {
  name: "App",

  components: {
    NavBar,
    Footer
  }
}
</script>
