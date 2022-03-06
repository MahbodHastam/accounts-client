import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phoneNumber: null,
    email: null,
    selectedMethod: 'phone-login',
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
    updateEmail(state, email) {
      state.email = email
    },
    updateSelectedMethod(state, method) {
      state.selectedMethod = method
    },
    updateUserInfo(state, payload) {
      state.userInfo = payload
    }
  },
  actions: {},
  modules: {}
})
