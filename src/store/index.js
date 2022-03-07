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
    UPDATE_PHONE(state, number) {
      state.phoneNumber = number
    },
    UPDATE_EMAIL(state, email) {
      state.email = email
    },
    UPDATE_SELECTED_METHOD(state, method) {
      state.selectedMethod = method
    },
    UPDATE_USER_INFO(state, payload) {
      state.userInfo = payload
    }
  },
  actions: {},
  modules: {}
})
