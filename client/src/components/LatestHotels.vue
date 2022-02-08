<template>
  <div class="block txt">
    <v-container>
      <h2 class="text-center">Accommodation</h2>
      <v-row>
        <v-col  v-for="item in items" :key="item.id" cols="12" md="4">
          <v-card dark outlined class="mx-auto">
              <v-img
               class="align-end"
               height="200px"    
              :src="item.src">
            </v-img>
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-subtitle class="pb-0">{{ item.content.substring(0,100) + "..." }}</v-card-subtitle>
            <v-card-text class="white-text text-right">
              <div>{{ item.location }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify = "end">
           <router-link style="text-decoration: none"
        to="/hotels"
      >
     <v-btn align="right" text color="primary">
      More<v-icon right dark>mdi-bed</v-icon>
    </v-btn>
           </router-link>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "LatestAttraction",
  data: () => ({
    show: false,
    items: [
      {
        id: 1,
        title: "Swiss Diamond Hotel",
        location: "Prishtine",
        content: "His ubique laboramus ne. Expetenda assueverit sed ad. Id nec malis lucilius delicatissimi. Nec assum sonet suscipit ex, diam deterruisset ut usu, ad dicat fabellas aliquando eam.",
        src: require("../assets/images/img8.jpg")
      },
      {
        id: 2,
        title: "Premium Park Hotel",
        location: "Prizren",
        content: "Sea ad habemus assueverit, omnes platonem convenire sit et, at integre pericula quo. Facete adolescens definitionem cu qui, in putant aliquid fierent ius.",
        src: require("../assets/images/img13.jpg")
      },
      {
        id: 3,
        title: "Ujevara e Drinit Resort",
        location: "Peje",
        content: "Aliquam albucius mei ei, debitis torquatos et pro, eos natum scribentur no. Putant verear constituto te qui. Adolescens persequeris vim ei. Vel nullam reprimique te.",
        src: require("../assets/images/img14.jpg")
      }
    ]
  })
};

</script>

<style scoped>
.block {
  padding: 60px 0;
  border-bottom: 1px solid darken(white, 10%);
}
.txt {
  font-weight: 800;
  font-size: 30px;
  border-bottom: 1px;
}
.txt:after {
      content: '';
      width: 60px;
      height: 1px;
      position: absolute;
      bottom: 10;
      left: 50%;
      transform: translateX(-50%);
}
</style>