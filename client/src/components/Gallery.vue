<template>
  <div class="block txt">
    <v-container dark>
      <h2 class="text-center">Gallery</h2>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.id"
          class="d-flex child-flex"
          cols="6"
          sm="4"
        >
          <v-card flat tile class="d-flex">
            <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/images/img1.jpeg"),
        },
        {
          id: 2,
          src: require("../assets/images/img2.jpg"),
        },
        {
          id: 3,
          src: require("../assets/images/img3.jpg"),
        },
        {
          id: 4,
          src: require("../assets/images/img4.jpg"),
        },
        {
          id: 5,
          src: require("../assets/images/img5.jpg"),
        },
        {
          id: 6,
          src: require("../assets/images/img6.jpg"),
        },
        {
          id: 7,
          src: require("../assets/images/img7.jpg"),
        },
        {
          id: 8,
          src: require("../assets/images/img8.jpg"),
        },
        {
          id: 9,
          src: require("../assets/images/img9.jpg"),
        },
      ],
    };
  },
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
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
}
</style>
