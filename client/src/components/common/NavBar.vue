<template>
  <v-toolbar flat>
    <router-link to="/">
      <img :src="require('@/assets/logo.png')" alt="logo" height="60" />
    </router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn
        class="btn"
        v-for="item in items"
        :key="item.href"
        :href="item.href"
        text
      >
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
    <div class="hidden-sm-and-up">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
        </template>
        <v-list class="responsiveMenu">
          <v-list-item-group color="primary">
            <v-list-item
              v-for="item in items"
              :key="item.href"
              :href="item.href"
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </div>
  </v-toolbar>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    items: [
      { title: "HOME", href: "/" },
      { title: "CITIES", href: "/cities" },
      { title: "ABOUT", href: "/about" },
      { title: "DASHBOARD", href: "/dashboard" },
    ],
  }),
};
</script>

<style scoped>
.btn {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}
</style>
