<template>
  <v-row justify="center">
    <v-dialog v-model="editDialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-fab-transition>
          <v-btn 
          v-bind="attrs" 
          v-on="on" 
          color="blue darken-1" 
          text
        >
            <v-icon left>mdi-pencil-outline</v-icon>
            Edit
          </v-btn>
        </v-fab-transition>
      </template>
      <v-form ref="form" @submit="updateForm" enctype="mutipart/form-data">
        <v-card>
          <v-card-title>
            <span class="text-h5">Edit Accommodation</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
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
                    v-model="hotel.star"
                    required
                    :rules="rules"
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
                    label="Add Image"
                    prepend-icon="mdi-file-image-plus"
                  ></v-file-input>
                  <v-img :src="require(`../../../server/uploads/${hotel.image}`)" width="100"></v-img>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="editDialog = false">
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
  </v-row>
</template>

<script>
import API from "../api/hotelapi";
export default {
  name: "Form",
  data() {
    return {
      rules: [(value) => !!value || "This field is required."],
      editDialog: false,
      hotel: {
        title: "",
        category: "",
        star: "",
        content: "",
        location: "",
        image: "",
      },
      image: "",
    };
  },
  async created() {
    const response = await API.getHotelsByID(this.$route.params.id);
    this.hotel = response;
  },
  methods: {
    selectFile(file) {
      this.image = file[0];
    },
    async updateForm() {
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("title", this.hotel.title);
      formData.append("category", this.hotel.category);
      formData.append("star", this.hotel.star);
      formData.append("content", this.hotel.content);
      formData.append("location", this.hotel.location);
      formData.append("old_image", this.hotel.image);

      if (this.$refs.form.validate()) {
        const response = await API.updateHotel(this.$route.params.id, formData);
        this.$router.push({ name: "hotels" });
      }
    },
  },
};
</script>
