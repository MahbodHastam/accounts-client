import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phoneNumber: null
  },
  mutations: {
    updatePhone(state, number) {
      state.phoneNumber = number
    }
  },
  actions: {},
  modules: {}
})
