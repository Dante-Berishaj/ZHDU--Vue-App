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
      <v-row>
        <v-col>
          <h1 class="text text-left">
            {{ hotel.title }}
          </h1>
        </v-col>
        <v-col align="right">
          <v-btn text>
            <EditHotel/>
          </v-btn>
          <v-btn text>
            <v-dialog v-model="dialog" persistent max-width="440">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="red darken-1" v-bind="attrs" v-on="on" text>
                  <v-icon color="red darken-1"> mdi-trash-can-outline </v-icon>
                  Delete
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="text-h5">
                  Are you sure you want to delete this accommodation?
                </v-card-title>
                <v-card-text color="red darken-1"
                  >This action cannot be reversed!</v-card-text
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    color="red darken-1"
                    text
                    @click="removeHotel(hotel._id)"
                  >
                    Delete
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>

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
            <v-list two-line>
              <h1 class="pl-10">Contact</h1>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="indigo"> mdi-phone </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>+ {{ hotel.number }}</v-list-item-title>
                  <v-list-item-subtitle>Phone Number</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider class="my-2"></v-divider>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="indigo"> mdi-at </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ hotel.email }}</v-list-item-title>
                  <v-list-item-subtitle>E-Mail Address</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider class="my-2"></v-divider>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="indigo"> mdi-web </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                    <a style="text-decoration: none" :href="hotel.web">{{
                      hotel.web
                    }}</a>
                  </v-list-item-title>
                  <v-list-item-subtitle>Website</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import API from "../api/hotelapi";
import EditHotel from "../components/EditHotel.vue";
export default {
  components: {
    EditHotel,
  },
  data() {
    return {
      hotel: {},
      dialog: false,
    };
  },
  async created() {
    const response = await API.getHotelsByID(this.$route.params.id);
    this.hotel = response;
  },
  methods: {
    async removeHotel(id) {
      const response = await API.deleteHotel(id);
      this.$router.push({ name: "hotels" });
    },
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
