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
                    <span class="text-h5">Edit Accommodation</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            label="Accommodation Title*"
                            v-model="hotel.title"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            label="Accommodation Category*"
                            v-model="hotel.category"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            label="Accommodation Stars*"
                            v-model="hotel.star"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            label="Accommodation Phone*"
                            v-model="hotel.number"
                            required
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
                          ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-file-input
                            @change="selectFile"
                            show-size
                            counter
                            multiple
                            required
                            label="Change Image"
                            prepend-icon="mdi-file-image-plus"
                          ></v-file-input>
                          <v-img
                            :src="
                              require(`../../../server/uploads/${hotel.image}`)
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
          </div>
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
export default {
  data() {
    return {
      role: localStorage.getItem('role'),
      hotel: {},
      rules: [(value) => !!value || "This field is required."],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      dialog: false,
      editDialog: false,
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
      role: localStorage.getItem('role')
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
    selectFile(file) {
      this.image = file[0];
    },
    async updateForm() {
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
      formData.append("old_image", this.hotel.image);

      if (this.$refs.form.validate()) {
        const response = await API.updateHotel(this.$route.params.id, formData);
        this.$router.push({ name: "hotels" });
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
