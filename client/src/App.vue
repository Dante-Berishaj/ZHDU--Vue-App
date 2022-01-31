<template>
<v-app>
    <v-app-bar flat>
       <v-btn icon @click="toggleDarkMode">
        <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
      <NavBar />
       <v-avatar>
      <v-icon>
        mdi-account-circle
      </v-icon>
    </v-avatar>
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
    Footer,
  },
   methods: {
        toggleDarkMode: function() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            localStorage.setItem("darkTheme", this.$vuetify.theme.dark.toString());
        }
    },
    mounted() {
        const theme = localStorage.getItem("darkTheme");
        if (theme) {
            if (theme === "true") {
                this.$vuetify.theme.dark = true;
            } else {
                this.$vuetify.theme.dark = false;
            }
        } else if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            this.$vuetify.theme.dark = true;
            localStorage.setItem(
                "darkTheme",
                this.$vuetify.theme.dark.toString()
            );
        }
    }
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
}
</style>