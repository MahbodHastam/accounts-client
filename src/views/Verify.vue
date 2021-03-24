<template>
  <div class="verify">
    <h2>SMS has been sent!</h2>
    <p>
      verification code has been sent to you, please check it and enter it, in
      input below and make sure you are not entering it wrong
    </p>
    <div class="inputs">
      <input
        type="tel"
        placeholder=" ------"
        v-model="code"
        id="code"
        maxlength="6"
      />
    </div>
    <div class="bottom-actions">
      <button class="actions">Help</button>
      <button class="actions" @click="back">Change Number</button>
      <button class="actions next" @click="next">Next</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      code: null
    }
  },
  methods: {
    next() {
      if (this.code == null || this.code.length != 6) {
        // console.log(this.code)
        return
      }

      var self = this
      axios
        .get(
          `https://accounts.myren.xyz/api/v1/verifyCode?phone_number=${self.$store.state.phoneNumber}&verification_code=${self.code}`,
          { withCredentials: true }
        )
        .then(response => {
          console.log(response)
          if (response.data.ok) {
            self.$router.push('completeprofile')
          }
        })
        .catch(error => console.log(error))
        .then()
    },
    back() {
      this.$router.push('/signin')
    }
  }
}
</script>

<style scoped>
.verify {
  padding: 16px 8px !important;
}

#code {
  text-align: center;
  padding: 8px;
  border: none;
  outline: none;
  height: 38px;
  display: flex;
  align-items: center;
  background-color: #eee;
  letter-spacing: 12px;
  margin-left: 8px;
  margin: 0 auto;
  font-size: 18px;
  width: 100%;
}
.inputs {
  margin-top: 16px;
  padding: 8px;
  width: 100%;
}
.bottom-actions {
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
}
.actions {
  border: none;
  outline: none;
  font-size: 16px;
  padding: 8px;
  background: none;
}
.next {
  color: blue;
  border-radius: 0px;
}
</style>
