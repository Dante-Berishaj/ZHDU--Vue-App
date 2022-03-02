<template>
  <v-card>
    <v-card-title>
      <v-toolbar-title>Restaurants</v-toolbar-title>
      <v-divider class="mx-4" inset vertical></v-divider>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-fab-transition>
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              New Item
            </v-btn>
          </v-fab-transition>
        </template>
        <v-form ref="form" @submit="submitForm" enctype="mutipart/form-data">
          <v-card>
            <v-card-title>
              <span class="text-h5">Add Restaurant</span>
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
                      label="Add Image*"
                      prepend-icon="mdi-file-image-plus"
                    ></v-file-input>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="dialog = false">
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                type="submit"
                @click="dialog = false"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-dialog>

      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table 
    :headers="headers" 
    :items="restaurants" 
    :search="search" 
    item-key="title"
    show-expand
    class="elevation-1"
    >
    <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <v-row>
            <v-col left cols="12" md="8">
              <h1>{{ item.title }}</h1>
              <v-container>
                <v-img
                align="left"
                  class="img"
                  :src="require(`../../../../server/uploads/${item.image}`)"
                  height="200px"
                  width="200px"
                ></v-img>
              </v-container>
            </v-col>
          </v-row>
        </td>
      </template>
      <template v-slot:[`item.action`]="{ item }">
        <v-icon small color="blue darken-1" class="mr-2"> mdi-pencil </v-icon>
         <v-dialog v-model="deleteDialog" persistent max-width="440">
              <template v-slot:activator="{ on, attrs }">
              <v-icon small color="red darken-1" v-bind="attrs" v-on="on"> mdi-delete </v-icon>
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
                  <v-btn color="blue darken-1" text @click="deleteDialog = false">
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
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import API from "../../api/restaurantapi";

export default {
  name: "Restaurant",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Name",
          align: "start",
          value: "title",
        },
        { text: "Category", value: "category" },
        { text: "Location", value: "location" },
        { text: "E-mail", value: "email" },
        { text: "Actions", value: "action", sortable: false },
      ],
      restaurants: [],
      rules: [(value) => !!value || "This field is required."],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      deleteDialog: false,
      dialog: false,
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
    };
  },
  async created() {
    this.restaurants = await API.getAllRestaurants();
  },
  methods: {
    selectFile(file) {
      this.image = file[0];
    },
    async removeRestaurant(id) {
      const response = await API.deleteRestaurant(id);
    },
    async submitForm() {
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
      if (this.$refs.form.validate()) {
        const response = await API.addRestaurant(formData);
      }
    },
  },
};
</script>
