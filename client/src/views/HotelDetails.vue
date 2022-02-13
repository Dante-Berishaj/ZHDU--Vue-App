<template>
  <v-main>
    <v-img
      class="img"
      :src="require(`../../../server/uploads/${hotel.image}`)"
      height="450px"
    >
      <v-btn right absolute class="ml-4 mt-3" color="blue darken-4">
        {{ hotel.star }}
        <v-icon color="yellow darken-2" small>mdi-star</v-icon>
      </v-btn>
    </v-img>
    <v-spacer></v-spacer>
    <v-container>
      <h1 class="text text-left">
        {{ hotel.title }}
      </h1>
      <v-spacer></v-spacer>
      <v-container>
        <v-row>
          <v-col>
            <v-sheet max-height="70vh" rounded="lg">
              {{ hotel.content }}
            </v-sheet>
          </v-col>
          <v-col cols="3">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Rating</v-list-item-title>
                    <v-list-item-subtitle>
                      <v-rating
                        v-model="hotel.star"
                        background-color="white"
                        color="yellow accent-4"
                        dense
                        half-increments
                        hover
                        size="18"
                      ></v-rating>
                    </v-list-item-subtitle>
                    <span class="grey--text text--lighten-2 text-caption mr-2">
                      ({{ hotel.star }})
                    </span>
                  </v-list-item-content>
                </v-list-item>
                <v-divider class="my-2"></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Category</v-list-item-title>
                    <v-list-item-subtitle>
                      {{ hotel.category }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider class="my-2"></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Location</v-list-item-title>
                    <v-list-item-subtitle>
                      {{ hotel.location }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-sheet max-height="70vh" rounded="lg">
              <v-list>
                <h3>Contact</h3>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-dialpad</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>+38349123456</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-at</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>accommodation@example.com</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                 <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-web</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>www.accommodationexample.com</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-main>
</template>

<script>
import API from "../api/hotelapi";
import EditHotel from "../components/EditHotel.vue"
export default {
      components: {
    EditHotel,
      },
  data() {
    
    return {
      hotel: {},
    };
  },
  async created() {
    const response = await API.getHotelsByID(this.$route.params.id);
    this.hotel = response;
  },
};
</script>
<style>
.text {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 50px;
}
</style>
