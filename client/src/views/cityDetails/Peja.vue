<template>
  <v-main>
    <v-carousel cycle hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row
          class="text fill-height hidden-xs-only white--text"
          align="center"
          justify="center"
          >{{ item.title }}</v-row
        >
      </v-carousel-item>
    </v-carousel>
    <v-spacer></v-spacer>
    <v-container>
      <h1 class="text text-center">Peja</h1>
      <v-divider></v-divider>
      <v-container>
        <v-row>
          <v-col>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
              voluptate ullam dolorem quisquam facilis culpa deleniti ipsa fugit
              architecto expedita? Animi ad in rem non! Ut necessitatibus
              laboriosam possimus culpa!Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Est voluptate ullam dolorem quisquam facilis
              culpa deleniti ipsa fugit architecto expedita? Animi ad in rem
              non! Ut necessitatibus laboriosam possimus culpa!Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Est voluptate ullam
              dolorem quisquam facilis culpa deleniti ipsa fugit architecto
              expedita? Animi ad in rem non! Ut necessitatibus laboriosam
              possimus culpa!Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Est voluptate ullam dolorem quisquam facilis culpa deleniti
              ipsa fugit architecto expedita? Animi ad in rem non! Ut
              necessitatibus laboriosam possimus culpa!
            </p>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <h1 class="text text-center">Accommodation</h1>
        <v-divider></v-divider>
        <v-container>
          <v-row>
            <v-col>
              <v-row no-gutters>
                <v-col
                  cols="12"
                  sm="4"
                  v-for="hotel in hotels"
                  v-bind:key="hotel._id"
                >
                  <span v-if="hotel.location == 'Peje'">
                    <v-card class="mx-auto" max-width="344"
                    :to="{ name: 'hotelDetails', params: { id: hotel._id } }">
                      <v-img
                        height="200px"
                        :src="
                          require(`../../../../server/uploads/${hotel.image}`)
                        "
                      >
                      </v-img>

                      <v-card-title>
                        {{ hotel.title }}
                        <v-btn
                          right
                          absolute
                          class="ml-4 mt-3"
                          color="blue darken-4"
                        >
                          {{ hotel.star }}
                          <v-icon color="yellow darken-2" small
                            >mdi-star</v-icon
                          >
                        </v-btn>
                      </v-card-title>
                      <v-spacer></v-spacer>
                      <v-card-subtitle>
                        {{ hotel.content.substring(0, 100) + "..." }}
                      </v-card-subtitle>

                      <v-card-text class="text--primary text-right">
                        <div>{{ hotel.category }}</div>
                        <div>{{ hotel.location }}</div>
                      </v-card-text>
                    </v-card>
                  </span>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
      <v-container>
        <h1 class="text text-center">Attractions</h1>
        <v-divider></v-divider>
      <v-container>
        <v-row>
          <v-col>
        <v-row no-gutters>
          <v-col
            cols="12"
            sm="4"
            v-for="attraction in attractions"
            v-bind:key="attraction._id"
          >
            <span v-if="attraction.location == 'Peje'">
              <v-card class="mx-auto" max-width="344">
                <v-img
                  height="200px"
                  :src="
                    require(`../../../../server/uploads/${attraction.image}`)
                  "
                >
                </v-img>

                <v-card-title>
                  {{ attraction.title }}
                </v-card-title>

                <v-card-subtitle>
                  {{ attraction.content.substring(0, 100) + "..." }}
                </v-card-subtitle>

                <v-card-text class="text--primary text-right">
                  <div>{{ attraction.category }}</div>
                  <div>{{ attraction.location }}</div>
                </v-card-text>
              </v-card>
            </span>
          </v-col>
        </v-row>
          </v-col>
        </v-row>
      </v-container>
      </v-container>
    </v-container>
  </v-main>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
export default {
  name: "Peja",
  data() {
    return {
      items: [
        {
          src: require("@/assets/images/img10.jpg"),
          title: "The City of Mountains"
        },
        {
          src: require("@/assets/images/img18.jpg"),
          title: "Home of Tahir Beg"
        },
        {
          src: require("@/assets/images/img19.jpg"),
          title: "Liqenat"
        },
        
      ],
     hotels: [],
      attractions: [],
    };
  },
  mounted() {
    Vue.axios.get("http://localhost:5001/api/hotel").then((res) => {
      this.hotels = res.data;
      console.warn(res.data);
    });
  },
  created() {
    Vue.axios.get("http://localhost:5001/api/attraction").then((res) => {
      this.attractions = res.data;
      console.warn(res.data);
    });
  },
};
</script>
<style scoped>
.text{
    font-family:'Montserrat', sans-serif;
    font-weight:600;
    font-size: 50px;
    }
</style>