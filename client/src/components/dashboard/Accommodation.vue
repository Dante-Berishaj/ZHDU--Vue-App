<template>
  <v-data-table
    :headers="headers"
    :items="hotels"
    :search="search"
    class="elevation-1"
    item-key="title"
    show-expand
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Accommodations</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>

        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              New Item
            </v-btn>
          </template>
          <v-form ref="form" @submit="submitForm" enctype="mutipart/form-data">
            <v-card>
              <v-card-title>
                <span class="text-h5">New Item</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Title*"
                        v-model="hotel.title"
                        required
                        :rules="rules"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Category*"
                        v-model="hotel.category"
                        required
                        :rules="rules"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Stars*"
                        v-model="hotel.star"
                        required
                        type="number"
                        :rules="ratingRules"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Phone*"
                        v-model="hotel.number"
                        required
                        :rules="numberRules"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-textarea
                        label="Description"
                        v-model="hotel.content"
                        no-resize
                        rows="1"
                      >
                      </v-textarea>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="E-Mail*"
                        v-model="hotel.email"
                        required
                        :rules="emailRules"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Website"
                        v-model="hotel.web"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
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
                    <v-col cols="12" sm="6" md="4">
                      <v-file-input
                        @change="selectFile"
                        show-size
                        counter
                        multiple
                        required
                        :rules="rules"
                        label="Image*"
                        prepend-icon="mdi-file-image-plus"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                </v-container>
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
      </v-toolbar>
    </template>
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
        <v-row>
          <v-col cols="12" md="8">
            <h1>{{ item.title }}</h1>
            <v-container>
              <v-img
                class="img"
                :src="require(`../../../../server/uploads/${item.image}`)"
                height="200px"
                width="200px"
              ></v-img>
            </v-container>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card flat>
              <v-card-title class="text-center"> Description </v-card-title>
              <v-card-subtitle>
                {{ item.content.substring(0, 250) + "..." }}
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </td>
    </template>
    <template v-slot:[`item.action`]="{ item }">
      <v-btn
        color="primary"
        text
        small
        class="mr-2"
        :to="{ name: 'hotelDetails', params: { id: item._id } }"
      >
        Details
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import API from "../../api/hotelapi";

export default {
  name: "Accommodation",
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
        { text: "Created", value: "created" },
        { text: "Actions", value: "action", sortable: false },
      ],
      hotels: [],
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
  async created() {
    this.hotels = await API.getAllHotels();
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
      }
    },
  },
};
</script>
