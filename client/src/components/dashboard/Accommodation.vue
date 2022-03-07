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
      <v-toolbar
        flat
      >
        <v-toolbar-title>Accommodations</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Title*"
                      v-model="editedItem.title"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Category*"
                      v-model="editedItem.category"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Stars*"
                      v-model="editedItem.star"
                      type="number"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Phone*"
                      v-model="editedItem.number"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-textarea
                      label="Description"
                      v-model="editedItem.content"
                      no-resize
                      rows="1"
                    >
                    </v-textarea>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="E-Mail*"
                      v-model="editedItem.email"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Website"
                      v-model="editedItem.web"
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
                      v-model="editedItem.location"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-file-input
                      @change="selectFile"
                      show-size
                      counter
                      multiple
                      required
                      label="Change Image*"
                      prepend-icon="mdi-file-image-plus"
                    ></v-file-input>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-spacer></v-spacer>
              <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
      <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        color="blue darken-1"
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        color="red darken-1"
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import API from "../../api/hotelapi";

  export default {
    data: () => ({
      search: "",
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Name',
          align: 'start',
          value: 'title',
        },
        { text: 'Category', value: 'category' },
        { text: 'Location', value: 'location' },
        { text: 'Created', value: 'created' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      hotels: [],
      editedIndex: -1,
      editedItem: {
        title: '',
        category: '',
        star: 0,
        number: 0,
        content: '',
        email: '',
        web: '',
        location: '',
        image: '',
      },
      image: '',
      hotel: {
        title: '',
        category: '',
        star: 0,
        number: 0,
        content: '',
        email: '',
        web: '',
        location: '',
        image: '',
      },
      image: '',
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
    },
  async mounted() {
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
        this.$router.push({ name: "Dashboard" });
      }
    },
      
      editItem (item) {
        this.editedIndex = this.hotels.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.hotels.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.hotels.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.hotels[this.editedIndex], this.editedItem)
        } else {
          this.hotels.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>