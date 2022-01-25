<template>
  <v-content>
    <Entry />
     <Gallery />
  </v-content>
</template>

<script>
import Entry from "../components/Entry";
import Gallery from "../components/Gallery";
export default {
  name: "Home",

  components: {
    Entry,
    Gallery,
   
  }
};
</script>