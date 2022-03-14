<template>
    <v-footer padless>
      <v-card flat class="text-center">
        <v-card-text>
          <v-btn v-for="item in items"
           :key="item.href" 
           :href="item.href"  
           class="mx-4" 
           icon>
            <v-icon size="24px">{{ item.icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text
          class="pt-0"
        >Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          {{ new Date().getFullYear() }} —
          <strong>Adventour</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    items: [
      {icon: "fab fa-facebook", href: "https://www.facebook.com/"},
      {icon: "fab fa-twitter", href: "https://twitter.com/"},
      {icon: "fab fa-linkedin", href: "https://www.linkedin.com/"},
      {icon: "fab fa-instagram", href: "https://www.instagram.com/"},
    ]
  })
};
</script>