<template>
    <v-carousel cycle hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row class="title fill-height hidden-xs-only white--text"
        align="center" 
        justify="center">{{ item.title }}</v-row>
      </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
  name: "Entry",
  data() {
    return {
      items: [
        {
          src: require("../assets/images/rugove.jpg"),
          title: "Explore Kosovo with us"
        },
        {
          src: require("../assets/images/kalaja.jpg"),
          title: "History loves company"
        },
        {
          src: require("../assets/images/shpella.jpg"),
          title: "Hide away from the world"
        }
      ]
    };
  }
};
</script>
<style scoped>
.title{
    font-family:'Montserrat'!important;
    font-weight:300;
    font-size: 50px;
    }
</style>