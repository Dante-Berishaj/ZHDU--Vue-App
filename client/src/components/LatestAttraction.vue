<template>
  <div class="block latestPostBlock">
    <v-container>
      <h2 class="text-center">Attractions</h2>
      <v-row>
        <v-col  v-for="item in items" :key="item.id" cols="12" md="4">
          <v-card outlined class="mx-auto">
              <v-img
               class="align-end"
               height="200px"    
              :src="item.src">
            </v-img>
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-subtitle class="pb-0">{{ item.content.substring(0,100) + "..." }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{ item.location }}</div>
              <div>{{item.category}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" text>More</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify = "end">
           <router-link
        to="/attractions"
      >
     <v-btn align="right" text color="primary">
      More<v-icon right dark>mdi-hiking</v-icon>
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
        title: "Drini Waterfall",
        category: "Waterfall",
        location: "Peje",
        content: "His ubique laboramus ne. Expetenda assueverit sed ad. Id nec malis lucilius delicatissimi. Nec assum sonet suscipit ex, diam deterruisset ut usu, ad dicat fabellas aliquando eam.",
        src: require("../assets/images/img10.jpg")
      },
      {
        id: 2,
        title: "Germia Park",
        category: "Regional Park",
        location: "Prishtine",
        content: "Sea ad habemus assueverit, omnes platonem convenire sit et, at integre pericula quo. Facete adolescens definitionem cu qui, in putant aliquid fierent ius.",
        src: require("../assets/images/img11.jpg")
      },
      {
        id: 3,
        title: "Prevalla",
        category: "Ski Resort and Touristic village",
        location: "Prizren",
        content: "Aliquam albucius mei ei, debitis torquatos et pro, eos natum scribentur no. Putant verear constituto te qui. Adolescens persequeris vim ei. Vel nullam reprimique te.",
        src: require("../assets/images/img12.jpg")
      }
    ]
  })
};

</script>