<template>
  <div class="verify">
    <div class="borders">
      <div class="topper">
        <h4>Verify</h4>
      </div>

      <p>
        Verification code has been sent to
        <span v-if="$store.selectedMethod === 'phone-login'">
          {{ this.$store.state.phoneNumber }}
        </span>
        <span v-else>{{ $store.state.email }}</span>
        please check it and enter it in input below and make sure you are not
        entering it wrong.
      </p>

      <div class="inputs">
        <input
          type="tel"
          placeholder="------"
          v-model="code"
          id="code"
          maxlength="6"
          autocomplete="off"
        />
        <alert
          v-for="(error, index) in errors"
          :key="index"
          v-show="error.message"
          :message="error.message"
          type="danger"
        />

        <p class="std">
          Didn't Received Yet?
          <span @click="requestAgain($store.state.selectedMethod)"
            >Request Again</span
          >
        </p>
      </div>
      <div class="bottom-actions">
        <button class="actions" @click="back">
          <span v-if="$store.state.selectedMethod === 'phone-login'"
            >Wrong Number?</span
          >
          <span v-else>Wrong E-Mail?</span>
        </button>
        <button class="actions next" @click="next">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Alert from '@/components/Alert.vue'

export default {
  name: 'VerifyPage',
  components: { Alert },
  data() {
    return {
      code: null,
      errors: {
        code: { message: null }
      }
    }
  },
  methods: {
    next() {
      if (this.code == null || this.code.length != 6) {
        this.errors.code.message = 'You entered a wrong code'
        return null
      } else this.errors.code.message = null

      let url
      if (this.$store.state.selectedMethod === 'phone-login')
        url = `https://accounts.myren.xyz/api/v1/verifyCode?phone_number=${this.$store.state.phoneNumber}&verification_code=${this.code}`
      else
        url = `https://accounts.myren.xyz/api/v1/verifyCode/email/${this.$store.state.email}/${this.code}`

      var self = this
      axios
        .get(url, { withCredentials: true })
        .then(response => {
          console.log(response)
          if (response.data.ok) {
            // get cookie and parse it
            let token = document.cookie.replace(
              /(?:(?:^|.*;\s*)MYREN_TOKEN\s*\=\s*([^;]*).*$)|^.*$/,
              '$1'
            )
            // token split by .
            let tokenSplit = token.split('.')
            let tokenDecoded = JSON.parse(atob(tokenSplit[1]))

            this.$store.commit('UPDATE_USER_INFO', tokenDecoded)
            // if user firstname and lastname is null, redirect to complete profile
            if (
              this.$store.state.userInfo.firstName == null ||
              this.$store.state.userInfo.lastName == null
            ) {
              this.$router.push('/edit-profile')
            } else {
              this.$router.push('/')
            }
          }
        })
        .catch(error => console.log(error))
        .then()
    },
    back() {
      this.$router.push('/sign-in')
    },
    requestAgain(method) {
      let url
      if (method === 'phone-login')
        url = `https://accounts.myren.xyz/api/v1/generateCode?phone_number=${this.$store.state.phoneNumber}`
      else
        url = `https://accounts.myren.xyz/api/v1/generateCode?email=${this.$store.state.email}`

      axios
        .get(url, { withCredentials: true })
        .then(response => {
          console.log(response)
        })
        .catch(error => console.log(error))
        .then()
    }
  }
}
</script>

<style scoped>
.topper {
  height: 30vh;
  display: flex;
  place-content: center;
  place-items: center;
}
.topper h4 {
  font-size: 22px;
  font-weight: bold;
}

.verify {
  padding: 16px !important;
}

#code {
  padding: 10px;
  border: none;
  outline: none;
  height: 48px;
  display: flex;
  place-items: center;
  place-content: center;
  text-align: center;
  background-color: #eee;
  letter-spacing: 12px;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  border-radius: 24px;
}
.inputs {
  margin-top: 25px;
  padding: 8px;
  width: 100%;
}
.bottom-actions {
  /* position: absolute; */
  margin-top: 16px;
  width: calc(100% - 32px);
  display: flex;
  justify-content: space-between;
}
.actions {
  border: none;
  outline: none;
  font-size: 16px;
  background: none;
  height: 48px;
  padding: 15px 26px;
  border-radius: 24px;
  display: flex;
  place-content: center;
  place-items: center;
  font-family: 'Mullish', sans-serif;
  font-weight: bold;
  min-width: 85px;
}
.next {
  color: #003cff;
  background: #edf1ff;
}

.std {
  margin-top: 25px;
  text-align: center;
  font-size: 13px;
}
.std span {
  color: #003cff;
  cursor: pointer;
}
.borders {
  width: 100%;
}
@media screen and (min-width: 500px) {
  .borders {
    width: 500px;
    margin: 0 auto;
  }
}
</style>
