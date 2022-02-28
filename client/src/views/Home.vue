<template>
  <v-main dark>
    <Entry />
     <Gallery />
     <LatestAttractions />
     <LatestHotels />
     <LatestRestaurants />
  </v-main>
</template>

<script>
import Entry from "../components/Entry";
import Gallery from "../components/Gallery";
import LatestAttractions from "../components/LatestAttraction.vue"
import LatestHotels from "../components/LatestHotels.vue"
import LatestRestaurants from "../components/LatestRestaurants.vue"

export default {
  name: "Home",

  components: {
    Entry,
    Gallery,
    LatestAttractions,
    LatestHotels,
    LatestRestaurants
   
  },

  mounted(){
        vm.$forceUpdate();
  }
};
</script>

<style scoped>
#home{
  font-family: 'Montserrat', sans-serif;
}
</style>