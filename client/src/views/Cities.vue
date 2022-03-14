<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" sm="4" v-for="city in cities" v-bind:key="city._id">
          <v-card class="mx-auto" max-width="344">
            <v-img class="align-end" height="400px" :src="city.src"> </v-img>

            <v-card-title>
              {{ city.title }}
            </v-card-title>

            <v-card-subtitle>
              {{ city.content.substring(0, 100) + "..." }}
            </v-card-subtitle>

            <v-card-text class="text--primary text-right">
              <div>{{ city.location }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn
                class="btn"
                :href="city.href"
                color="orange lighten-2"
                text
              >
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "City",
  data() {
    return {
      cities: [
        {
          id: 1,
          title: "Prishtina",
          location: "Kosove",
          content:
            "His ubique laboramus ne. Expetenda assueverit sed ad. Id nec malis lucilius delicatissimi. Nec assum sonet suscipit ex, diam deterruisset ut usu, ad dicat fabellas aliquando eam.",
          src: require("@/assets/images/prishtina.jpeg"),
          href: "/prishtina",
        },
        {
          id: 2,
          title: "Prizreni",
          location: "Kosove",
          content:
            "His ubique laboramus ne. Expetenda assueverit sed ad. Id nec malis lucilius delicatissimi. Nec assum sonet suscipit ex, diam deterruisset ut usu, ad dicat fabellas aliquando eam.",
          src: require("@/assets/images/prizren.jpg"),
          href: "/prizreni",
        },
        {
          id: 3,
          title: "Peja",
          location: "Kosove",
          content:
            "His ubique laboramus ne. Expetenda assueverit sed ad. Id nec malis lucilius delicatissimi. Nec assum sonet suscipit ex, diam deterruisset ut usu, ad dicat fabellas aliquando eam.",
          src: require("@/assets/images/peja.jpg"),
          href: "/peja",
        },
        {
          id: 4,
          title: "Gjakova",
          location: "Kosove",
          content:
            "His ubique laboramus ne. Expetenda assueverit sed ad. Id nec malis lucilius delicatissimi. Nec assum sonet suscipit ex, diam deterruisset ut usu, ad dicat fabellas aliquando eam.",
          src: require("@/assets/images/gjakova.jpg"),
          href: "/gjakova"
        },
        {
          id: 5,
          title: "Mitrovica",
          location: "Kosove",
          content:
            "His ubique laboramus ne. Expetenda assueverit sed ad. Id nec malis lucilius delicatissimi. Nec assum sonet suscipit ex, diam deterruisset ut usu, ad dicat fabellas aliquando eam.",
          src: require("@/assets/images/mitrovica.jpg"),
          href: "/mitrovica",
        },
      ],
    };
  },
};
</script>
