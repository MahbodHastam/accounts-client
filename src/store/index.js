import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phoneNumber: null,
    backTo: '',
    userInfo: {
      ok: null,
      ads_earnings: null,
      ads_personalization: null,
      audiofy_history: null,
      id: null,
      show_ads: null,
      user_firstname: null,
      user_lastname: null,
      vidible_history: null
    }
  },
  mutations: {
    updatePhone(state, number) {
      state.phoneNumber = number
    },
    updateUserInfo(state, payload) {
      state.userInfo = payload
    }
  },
  actions: {},
  modules: {}
})
