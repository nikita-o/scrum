<template>
  <v-navigation-drawer 
  app 
  clipped
  v-model="drawerState"
  >

    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            John Leider
          </v-list-item-title>
          <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-icon>mdi-menu-down</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list
      nav
      dense
    >
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          link
          :to="item.url"
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
    <v-divider></v-divider>
    <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark">
      <v-icon>mdi-moon-waning-crescent</v-icon>
      dark | light
    </v-btn>
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
  },
  data: () => ({
      selectedItem: 0, // здесь типо id выбранного пункта меню (пригодится мб)
      items: [
        { text: 'Облачное хранилище', icon: 'mdi-folder', url: {name: "CloudFile"}},
        // { text: 'Дорожная карта', icon: 'mdi-account-multiple', url: {name: "RoadMap"} },
        { text: 'Бэклог', icon: 'mdi-star', url: {name: "Backlog"}},
        { text: 'Доска', icon: 'mdi-history', url: {name: "Board"} },
        { text: 'Код', icon: 'mdi-upload', url: {name: "Repositories"} },
        { text: 'Чат', icon: 'mdi-cloud-upload', url: 'Chat' },
        { text: 'Настройки', icon: 'mdi-check-circle', url: 'Setting' },
      ],
    }),
}
</script>