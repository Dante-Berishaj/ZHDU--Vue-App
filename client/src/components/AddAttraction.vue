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
            <span class="text-h5">Add Attraction</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12"
                    sm="6"
                    md="4">
                  <v-text-field
                    label="Attraction Title*"
                    v-model="attraction.title"
                    required
                    :rules="rules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12"
                    sm="6"
                    md="4">
                  <v-text-field
                    label="Attraction Category*"
                    v-model="attraction.category"
                    required
                    :rules="rules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12"
                    sm="6"
                    md="4">
                  <v-text-field
                    label="Attraction Stars*"
                    v-model.number="attraction.star"
                    required
                    type = "number"
                    :rules="ratingRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12"
                    sm="6"
                    md="4">
                  <v-text-field
                    label="Attraction Website"
                    v-model="attraction.web"
                  ></v-text-field>
                </v-col>
                <v-col cols="12"
                    sm="6"
                    md="4">
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
                    v-model="attraction.location"
                    :rules="rules"
                  ></v-select>
                </v-col>
                <v-col cols="12"
                    sm="6"
                    md="4">
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
                 <v-col cols="12"
                    >
                  <v-textarea
                    label="Attraction Description"
                    v-model="attraction.content"
                  >
                  </v-textarea>
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
import API from "../api/attractionapi";
export default {
  name: "Form",
  data() {
    return {
      rules: [(value) => !!value || "This field is required."],
      emailRules: [
        (v) =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
      ratingRules: [
        (v) =>
          Number.isInteger(Number(v)) || "The value must be an integer number",
        (v) => v > 0 || "The value must be greater than zero",
        (v) => v <= 5 || "The value must be lower than five",
      ],
      dialog: false,
      attraction: {
        title: "",
        category: "",
        star: "",
        content: "",
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
      formData.append("title", this.attraction.title);
      formData.append("category", this.attraction.category);
      formData.append("star", this.attraction.star);
      formData.append("content", this.attraction.content);
      formData.append("web", this.attraction.web);
      formData.append("location", this.attraction.location);
      if (this.$refs.form.validate()) {
        const response = await API.addAttraction(formData);
        this.$router.push({ name: "attractions" });
      }
    },
  },
};
</script>
