<template>
  <div class="verify">
    <div class="borders">
      <div class="topper">
        <h4>Verify</h4>
      </div>

      <p>
        Verification code has been sent to {{ this.$store.state.phoneNumber }},
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

        <p class="std">
          Didn't Received Yet? <span @click="requestAgain">Request Again</span>
        </p>
      </div>
      <div class="bottom-actions">
        <button class="actions" @click="back">Wrong Number?</button>
        <button class="actions next" @click="next">Next</button>
      </div>
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
            //get name and last name if it has default value route to editprofile
            axios
              .get('https://accounts.myren.xyz/api/v1/getProfile', {
                withCredentials: true
              })
              .then(response => {
                //   console.log(response.data)
                if (
                  response.data.user_firstname == 'Guest' &&
                  response.data.user_lastname == 'User'
                ) {
                  self.$router.push('editprofile')
                } else {
                  self.$router.push('/')
                }
              })
              .catch(error => console.log(error))
              .then(() => {})
          }
        })
        .catch(error => console.log(error))
        .then()
    },
    back() {
      this.$router.push('/signin')
    },
    requestAgain() {
      axios
        .get(
          `https://accounts.myren.xyz/api/v1/generateCode?phone_number=${this.$store.state.phoneNumber}`,
          { withCredentials: true }
        )
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
}
.borders {
  width: 100%;
}
@media screen and (min-width: 500px){
  .borders {
    width: 500px;
    margin: 0 auto;
  }
}
</style>
