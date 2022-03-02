<template>
  <v-container>
    <v-row>

      <v-col cols="3">
        <v-card>
          <v-list>
            <v-list-item-group v-model="model" mandatory color="indigo">
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                @click="select(item)"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>

      <v-col> 
        <Accommodation v-if="selectedTab === 'Accommodation'" />
        <Attraction v-else-if="selectedTab === 'Attraction'" />
        <Restaurant v-else-if="selectedTab === 'Restaurant'" />
        <Admins v-else />
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import Accommodation from '../components/dashboard/Accommodation.vue';
import Attraction from '../components/dashboard/Attraction.vue';
import Restaurant from '../components/dashboard/Restaurant.vue';
import Admins from '../components/dashboard/Admins.vue';

export default {
  components: {
    Accommodation,
    Attraction,
    Admins,
    Restaurant,
  },
  data() {
    return {
      selectedTab: "Accommodation",
      items: [
        {
          text: "Accommodation",
          icon: "mdi-bed",
          href: "/dashboard/accommodation",
        },
        {
          text: "Attraction",
          icon: "mdi-image-filter-hdr",
          href: "/dashboard/attraction",
        },
         {
          text: "Restaurant",
          icon: "mdi-silverware",
          href: "/dashboard/restaurant",
        },
        {
          text: "Admins",
          icon: "mdi-account",
          href: "/dashboard/users",
        },
      ],
      model: 0,
    };
  },
  methods: {
    select(item) {
      this.selectedTab = item.text;
    }
  }
};
</script>
