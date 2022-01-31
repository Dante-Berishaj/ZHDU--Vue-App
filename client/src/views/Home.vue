<template>
  <v-main dark>
    <Entry />
     <Gallery />
     <LatestAttractions />
  </v-main>
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

<style scoped>
#home{
  font-family: 'Montserrat', sans-serif;
}
</style>