<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel 
        v-for="(item,i) in sprints"
        :key="i"
      >
        <v-expansion-panel-header>
          <v-row>
            <v-col>
            <span>Спринт {{i}}</span>
            <span> 23 сент. - 7 окт.</span> 
            <span>(задач 2)</span>
            </v-col>
            <v-col>
              <v-btn>Завершить спринт</v-btn>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content 
          v-for="(item,i) in 3"
          :key="i"
        >
          контент
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          Беклог (задач: {{backlog.length}})
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div
            v-for="(item,i) in backlog"
            :key="i"          
          >
            test {{i}}
          </div>
          <v-btn v-on:click="backlog.push({})">
            Создать задачу
          </v-btn>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-btn v-on:click="sprints.push({})">Создать спринт</v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    backlog: [],
    sprints: []
  }),
}
</script>

<style>

</style>