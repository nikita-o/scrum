<template>
<v-app-bar app clipped-left>
  <v-app-bar-nav-icon @click="toggleDrawer()"/>
</v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  methods: {
    toggleDrawer: function() {
      this.$store.commit('toggleDrawerState')
    }
  }
}
</script>
