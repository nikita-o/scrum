<template>
  <v-app>
    <Nav/>
    <Roof/>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <Footer/>
  </v-app>
</template>

<script>
import Nav from '@/components/navigation'
import Roof from '@/components/roof'
import Footer from '@/components/footer'

export default {
  components: {
    Nav,
    Roof,
    Footer
  },  
}
</script>
