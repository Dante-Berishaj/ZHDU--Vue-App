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
        <Overview v-if="selectedTab === 'Overview'" />
        <Stats v-else-if="selectedTab === 'Stats'" />
        <Admins v-else />
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import Overview from '../components/dashboard/Overview.vue';
import Stats from '../components/dashboard/Stats.vue';
import Admins from '../components/dashboard/Admins.vue';

export default {
  components: {
    Overview,
    Stats,
    Admins,
  },
  data() {
    return {
      selectedTab: "Overview",
      items: [
        {
          text: "Overview",
          icon: "mdi-home",
          href: "/dashboard/overview",
        },
        {
          text: "Stats",
          icon: "mdi-chart-donut",
          href: "/dashboard/stats",
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
