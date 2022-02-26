<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-fab-transition>
          <v-btn
            v-bind="attrs"
            v-on="on"
            color="indigo"
            fab
            class="mx-2"
            absolute
            bottom
            right
          >
            <v-icon>mdi-plus</v-icon>
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
  </v-row>
</template>

<script>
import API from "../api/restaurantapi";
export default {
  name: "Form",
  data() {
    return {
      rules: [(value) => !!value || "This field is required."],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
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
  methods: {
    selectFile(file) {
      this.image = file[0];
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
        this.$router.push({ name: "restaurants" });
      }
    },
  },
};
</script>
