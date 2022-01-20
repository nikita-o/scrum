<template>
  <div>
    <v-row>
      <v-col v-for="(item, i) in 4" :key="i" cols="2">
        <v-card
            max-width="450"
            class="mx-auto"
          >
            <v-toolbar
              color="cyan"
              dark
            >
              <v-toolbar-title>Задачи</v-toolbar-title>
            </v-toolbar>

            <v-list three-line>
              <template v-for="(item, index) in items">
                <v-divider
                  :key="index"
                  v-if="index"
                ></v-divider>

                <v-list-item
                  :key="item.title"
                >
                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-card>
      </v-col>
      <v-col>
        <v-btn
          elevation="5"
          icon
          x-large
        ><v-icon>mdi-plus</v-icon></v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          title: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        {
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        {
          title: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        {
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
    }),
  }
</script>