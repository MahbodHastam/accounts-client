<template>
  <div class="login-cmp-wrapper">
    <div class="borders">
      <div class="inputs">
        <input
          type="email"
          placeholder="example: example@myren.xyz"
          v-model="email"
          id="email"
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
        <!-- <button class="actions" @click="$emit('selectedMethod', 'phone-login')">
          Continue using Phone number
        </button> -->
        <button class="actions next" @click="next">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from '../Alert.vue'
import axios from 'axios'

export default {
  components: { Alert },
  data: function() {
    return {
      email: null,
      errors: {
        email: { message: null }
      }
    }
  },
  methods: {
    validateInputs() {
      let res = true
      if (!this.email) res = false

      if (/\S+@\S+\.\S+/.test(String(this.email).toLowerCase())) res = true
      else res = false

      if (!res) this.errors.email.message = 'Your E-Mail is incorrect.'
      else this.errors.email.message = null

      return res
    },

    next: function() {
      if (!this.validateInputs()) return null

      const url = `https://accounts.myren.xyz/api/v1/generateCode/email/${this.email}`

      axios
        .get(url, { withCredentials: true })
        .then(() => {
          this.$store.commit('UPDATE_EMAIL', this.email)
          this.$store.commit('UPDATE_SELECTED_METHOD', 'email-login')
          this.$router.push('verify')
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
