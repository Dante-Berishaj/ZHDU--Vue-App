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
      <v-form
        ref="form"
        v-model="isFormValid"
        @submit="submitForm"
        enctype="mutipart/form-data"
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">Add Accommodation</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Accommodation Title*"
                    v-model="hotel.title"
                    required
                    :rules="rules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Accommodation Category*"
                    v-model="hotel.category"
                    required
                    :rules="rules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Accommodation Stars*"
                    v-model.number="hotel.star"
                    type = "number"
                    required
                    :rules="ratingRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Accommodation Phone*"
                    v-model.number="hotel.number"
                    required
                    :rules="numberRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    label="Accommodation Description"
                    v-model="hotel.content"
                  >
                  </v-textarea>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Accommodation E-Mail*"
                    v-model="hotel.email"
                    required
                    :rules="emailRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Accommodation Website"
                    v-model="hotel.web"
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
                    v-model="hotel.location"
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
              :disabled="!isFormValid"
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
import API from "../api/hotelapi";
export default {
  name: "Form",
  data() {
    return {
      isFormValid: false,
      rules: [(value) => !!value || "This field is required."],
      emailRules: [
        (v) =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
      numberRules: [
        (v) =>
          Number.isInteger(Number(v)) || "The value must be an integer number",
        (v) => v > 0 || "The value must be greater than zero",
      ],
      ratingRules: [
        (v) =>
          Number.isInteger(Number(v)) || "The value must be an integer number",
        (v) => v > 0 || "The value must be greater than zero",
        (v) => v <= 5 || "The value must be lower than five",
      ],
      dialog: false,
      hotel: {
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
      formData.append("title", this.hotel.title);
      formData.append("category", this.hotel.category);
      formData.append("star", this.hotel.star);
      formData.append("number", this.hotel.number);
      formData.append("content", this.hotel.content);
      formData.append("email", this.hotel.email);
      formData.append("web", this.hotel.web);
      formData.append("location", this.hotel.location);
      if (this.$refs.form.validate()) {
        const response = await API.addHotel(formData);
        this.$router.push({ name: "hotels" });
      }
    },
  },
};
</script>
