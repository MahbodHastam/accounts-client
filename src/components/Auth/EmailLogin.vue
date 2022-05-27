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
        <AppButton
          class="actions next"
          :disabled="loading"
          :isLoading="loading"
          @click="next"
        >
          <span v-show="!loading">Next</span>
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from '../Alert.vue'
import AppButton from '../AppButton.vue'
import useAxios from '@/composables/useAxios'

export default {
  components: { Alert, AppButton },
  data: function() {
    return {
      email: null,
      errors: {
        email: { message: null },
        request: { message: null }
      },
      loading: false
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

    next: async function() {
      if (!this.validateInputs()) return null

      const { get, loading, error, payload } = useAxios()

      this.loading = loading

      await get(`generateCode/email/${this.email}`).then(() => {
        this.$store.commit('UPDATE_EMAIL', this.email)
        this.$store.commit('UPDATE_SELECTED_METHOD', 'email-login')
        this.$router.push('verify')
      })

      if (!payload.value?.data?.ok || error.value) {
        this.errors.request.message = payload.value?.data || null
      } else this.errors.request.message = null
    }
  }
}
</script>
