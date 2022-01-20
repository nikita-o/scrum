<template>
  <v-card>
    <v-card-title>
      Репозитории
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Поиск"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Название',
            align: 'start',
            sortable: false,
            value: 'summary',
          },
          { text: 'Описание', sortable: false, value: 'description' },
          { text: 'Последнее обновление', value: 'updated' },
        ],
        desserts: [
          {
            summary: 'Frozen Yogurt',
            description: 'test',
            updated: 1,
          },
          {
            summary: 'Frozen Yogurt',
            description: 'test',
            updated: 1,
          },
        ],
      }
    },
  }
</script>
