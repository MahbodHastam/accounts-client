import { createStore } from 'vuex'

export default createStore({
  state: {
    phoneNumber: null,
    email: null,
    selectedMethod: 'phone-login',
    backTo: null,
    userInfo: {
      ok: null,
      ads_earnings: null,
      ads_personalization: null,
      audiofy_history: null,
      id: null,
      show_ads: null,
      user_firstname: null,
      user_lastname: null,
      user_avatar: null,
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
    },
    UPDATE_BACK_TO_URL(state, url) {
      state.backTo = url
    }
  },
  actions: {},
  modules: {}
})
