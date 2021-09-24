<template>
  <v-navigation-drawer 
  app 
  clipped
  v-model="drawerState"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Application
        </v-list-item-title>
        <v-list-item-subtitle>
          subtext
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  computed: {
    drawerState: {
      get: function() { return this.$store.state.drawerState },
      set: () => null
    }
  }
}
</script>