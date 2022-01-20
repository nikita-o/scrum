<template>
  <div>
    <v-row>
      <v-col v-for="(item, i) in 8" :key="i" cols="2">
        <v-card>
          {{i}}
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>