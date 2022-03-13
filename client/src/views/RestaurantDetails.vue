<template>
  <v-main>
    <v-img
      class="img"
      :src="require(`../../../server/uploads/${restaurant.image}`)"
      height="450px"
    >
      <v-btn right absolute class="ml-4 mt-3" color="blue darken-4">
        {{ restaurant.star }}
        <v-icon color="yellow darken-2" small>mdi-star</v-icon>
      </v-btn>
    </v-img>
    <v-spacer></v-spacer>
    <v-container>
      <v-row >
        <v-col>
          <h1 class="text text-left">
            {{ restaurant.title }}
          </h1>
        </v-col>
        <v-col align="right">
          <div v-if='role === "[{\"admin\":true}]"'>
          <v-btn text>
            <v-dialog v-model="editDialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">

                 <v-fab-transition>
                  <v-btn 
                  v-if='role === "[{\"admin\":true}]"' 
                  v-bind="attrs" v-on="on" color="blue darken-1" text>
                    <v-icon left>mdi-pencil-outline</v-icon>
                    Edit
                  </v-btn>  
                          
                </v-fab-transition>
                
              </template>
              <v-form
                ref="form"
                @submit="updateForm"
                enctype="mutipart/form-data"
              >
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Edit Restaurant</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            label="Restaurant Title*"
                            v-model="restaurant.title"
                            required
                            :rules="rules"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            label="Restaurant Category*"
                            v-model="restaurant.category"
                            required
                            :rules="rules"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            label="Restaurant Stars*"
                            v-model="restaurant.star"
                            required
                            :rules="rules"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            label="Restaurant Phone*"
                            v-model="restaurant.number"
                            required
                            :rules="rules"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-textarea
                            label="Restaurant Description"
                            v-model="restaurant.content"
                          >
                          </v-textarea>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            label="Restaurant E-Mail*"
                            v-model="restaurant.email"
                            required
                            :rules="emailRules"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            label="Restaurant Website"
                            v-model="restaurant.web"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-select
                            :items="[
                              'Prishtine',
                              'Prizren',
                              'Peje',
                              'Gjakove',
                              'Mitrovice',
                            ]"
                            label="Location*"
                            required
                            v-model="restaurant.location"
                            :rules="rules"
                          ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-file-input
                            @change="selectFile"
                            show-size
                            counter
                            multiple
                            required
                            :rules="rules"
                            label="Change Image"
                            prepend-icon="mdi-file-image-plus"
                          ></v-file-input>
                          <v-img
                            :src="
                              require(`../../../server/uploads/${restaurant.image}`)
                            "
                            width="100"
                          ></v-img>
                        </v-col>
                      </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="red darken-1"
                      text
                      @click="editDialog = false"
                    >
                      Close
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      type="submit"
                      @click="editDialog = false"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-form>
            </v-dialog>
          </v-btn>
          <v-btn text>
            <v-dialog v-model="dialog" persistent max-width="440">
              <template v-slot:activator="{ on, attrs }">
                <v-btn 
                v-if='role === "[{\"admin\":true}]"' 
                color="red darken-1" v-bind="attrs" v-on="on" text>
                  <v-icon color="red darken-1"> mdi-trash-can-outline </v-icon>
                  Delete
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="text-h5">
                  Are you sure you want to delete this restaurant?
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
                    @click="removeRestaurant(restaurant._id)"
                  >
                    Delete
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>

    <v-container>
      <v-row>
        <v-col>
          <v-sheet max-height="70vh" rounded="lg">
            {{ restaurant.content }}
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
                      v-model="restaurant.star"
                      background-color="white"
                      color="yellow accent-4"
                      dense
                      half-increments
                      hover
                      size="18"
                    ></v-rating>
                  </v-list-item-subtitle>
                  <span class="grey--text text--lighten-2 text-caption mr-2">
                    ({{ restaurant.star }})
                  </span>
                </v-list-item-content>
              </v-list-item>
              <v-divider class="my-2"></v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Category</v-list-item-title>
                  <v-list-item-subtitle>
                    {{ restaurant.category }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider class="my-2"></v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Location</v-list-item-title>
                  <v-list-item-subtitle>
                    {{ restaurant.location }}
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
                  <v-list-item-title>+ {{ restaurant.number }}</v-list-item-title>
                  <v-list-item-subtitle>Phone Number</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider class="my-2"></v-divider>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="indigo"> mdi-at </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ restaurant.email }}</v-list-item-title>
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
                    <a style="text-decoration: none" :href="restaurant.web">{{
                      restaurant.web
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
import API from "../api/restaurantapi";
export default {
  data() {
    return {
      role: localStorage.getItem('role'),
      restaurant: {},
      dialog: false,
      editDialog: false,
      restaurant: {
        title: "",
        category: "",
        star: "",
        number: "",
        content: "",
        email: "",
        web: "",
        location: "",
        image: "",
      },
      image: "",
      role: localStorage.getItem('role')
    };
  },
  async created() {
    const response = await API.getResturantsByID(this.$route.params.id);
    this.restaurant = response;
  },
  async created() {
    const response = await API.getRestaurantsByID(this.$route.params.id);
    this.restaurant = response;
  },
  methods: {
    async removeRestaurant(id) {
      const response = await API.deleteRestaurant(id);
      this.$router.push({ name: "restaurants" });
    },
    selectFile(file) {
      this.image = file[0];
    },
    async updateForm() {
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("title", this.restaurant.title);
      formData.append("category", this.restaurant.category);
      formData.append("star", this.restaurant.star);
      formData.append("number", this.restaurant.number);
      formData.append("content", this.restaurant.content);
      formData.append("email", this.restaurant.email);
      formData.append("web", this.restaurant.web);
      formData.append("location", this.restaurant.location);
      formData.append("old_image", this.restaurant.image);

      if (this.$refs.form.validate()) {
        const response = await API.updateRestaurant(this.$route.params.id, formData);
        this.$router.push({ name: "restaurantDetails" });
      }
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
