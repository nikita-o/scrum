import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawerState: false
  },
  mutations: {
    toggleDrawerState(state) {
      state.drawerState = !state.drawerState
    }
  },
  actions: {
  },
  modules: {
  }
})
