import { createStore } from 'vuex'

export default createStore({
  state: {
    phoneNumber: null,
    email: null,
    selectedMethod: 'phone-login',
    backTo: null,
    userInfo: {
      user_id: null,
      email: null,
      first_name: null,
      last_name: null,
      phone_number:  null,
      exp: null,
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
