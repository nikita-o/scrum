<template>
<v-app-bar app clipped-left>
  <v-app-bar-nav-icon @click="toggleDrawer()"/>
  <v-toolbar-title>NIRA</v-toolbar-title>

<v-spacer></v-spacer>

  <v-btn>
    Ваша работа
  </v-btn>
  <v-btn>
    Проекты
  </v-btn>
  <v-btn>
    Фильтры
  </v-btn>
  <v-btn>
    Дашборды
  </v-btn>
  <v-btn>
    Приложения
  </v-btn>
  <v-btn>
    Создать
  </v-btn>

  <v-spacer></v-spacer>

  <v-text-field
    hide-details
    prepend-icon="mdi-magnify"
    single-line
  ></v-text-field>

  <v-btn icon>
    <v-icon>mdi-cannabis</v-icon>
  </v-btn> 

  <v-btn icon>
    <v-icon>mdi-candy</v-icon>
  </v-btn>  

  <v-btn icon>
    <v-icon>mdi-campfire</v-icon>
  </v-btn>  

  <!-- <v-menu
    left
    bottom
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        icon
        v-bind="attrs"
        v-on="on"
      >
        tets
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="n in 5"
        :key="n"
        @click="() => {}"
      >
        <v-list-item-title>Option {{ n }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu> -->
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
