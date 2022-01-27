<template>
  <v-content>
    <Entry />
     <Gallery />
     <LatestAttractions />
  </v-content>
</template>

<script>
import Entry from "../components/Entry";
import Gallery from "../components/Gallery";
import LatestAttractions from "../components/LatestAttraction.vue"
export default {
  name: "Home",

  components: {
    Entry,
    Gallery,
    LatestAttractions
   
  }
};
</script>