<template>
  <div class="login-cmp-wrapper">
    <div class="borders">
      <div class="inputs">
        <select-box
          :options="['IRI (+98)', 'US (+1)']"
          :default="'IRI (+98)'"
          @selectedOption="prefix = $event"
        />
        <p id="code-model">{{ this.getPrefix() }}</p>
        <input
          type="tel"
          placeholder="example: 9920800113"
          v-model="phoneNumber"
          id="phone-number"
        />
        <alert
          v-for="(error, index) in errors"
          :key="index"
          v-show="error.message"
          :message="error.message"
          type="danger"
        />
      </div>

      <div class="bottom-actions">
        <button class="actions" @click="$emit('selectedMethod', 'email-login')">
          Continue using E-Mail
        </button>
        <button class="actions next" @click="next">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from '../Alert.vue'
import SelectBox from '../SelectBox.vue'
import axios from 'axios'

export default {
  components: {
    Alert,
    SelectBox
  },

  data() {
    return {
      prefix: '+98',
      phoneNumber: null,
      errors: {
        phoneNumber: { message: false },
        prefix: { message: false }
      }
    }
  },

  methods: {
    validateInputs() {
      const isValid =
        this.getPrefix() === '+98'
          ? new RegExp('^(\\98|0)?9\\d{9}$').test(this.phoneNumber)
          : false

      if (!isValid) {
        this.errors.phoneNumber.message = 'Your phone-number is incorrect.'

        return false
      } else this.errors.phoneNumber.message = false

      if (this.getPrefix() === '+' || !this.getPrefix()) {
        this.errors.prefix.message = 'Please select your country.'

        return false
      } else this.errors.prefix.message = false

      return true
    },

    getPrefix() {
      let prefix = this.prefix.search(/\+\d+/g)

      return this.prefix.slice(prefix).replace(')', '')
    },

    next() {
      var self = this
      const phoneNumber = this.getPrefix() + +this.phoneNumber
      const url = `https://accounts.myren.xyz/api/v1/generateCode?phone_number=${phoneNumber}`
      console.log(url)

      if (!this.validateInputs()) return null

      axios
        .get(url, { withCredentials: true })
        .then(response => {
          console.log(response)
          self.$store.commit('updatePhone', phoneNumber)
          self.$router.push('verify')
        })
        .catch(error => console.log(error))
        .then(() => {})
    }
  }
}
</script>

<style scoped>
.borders {
  width: 100%;
}
#country-code {
  padding: 10px;
  border: none;
  outline: none;
  height: 48px;
  display: inline-flex;
  align-items: center;
  width: 100%;
  background-color: #eee;
  border-radius: 24px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: normal;
  font-family: 'Mulish', sans-serif;
}
</style>
