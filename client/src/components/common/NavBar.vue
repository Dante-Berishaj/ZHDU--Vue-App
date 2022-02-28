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
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon> mdi-account-circle </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(list, index) in lists" :key="index">
            <v-list-item-title>{{ list.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
    lists: [
      { title: "My Profile" },
      { title: "Favorites" },
      { title: "Settings" },
      { title: "Dark Mode" },
    ],
  }),
  computed: {
    // TODO: find a better way to do this
    isAdmin() {
      return localStorage.getItem('role') == "[{\"admin\":true}]";
    },
    isLoggedIn() {
      return localStorage.getItem('role');
    }
  },
  mounted() {
    if (this.isLoggedIn) {
      // NOTE: logout button clears `Usertoken` from local storage, but not
      // `role`; a refresh is required for `role` to be deleted
      this.items.push({ title: "LOGOUT", href: "/login" });
    } else {
      this.items.push({ title: "LOGIN", href: "/login" });
      this.items.push({ title: "REGISTER", href: "/register" });
    }
  }
};
</script>

<style scoped>
.btn {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}
</style>
