import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeDrawer: ''
  },
  mutations: {
    setActiveDrawer(state, payload) {
      state.activeDrawer = payload
    }
  },
  actions: {},
  modules: {}
})
