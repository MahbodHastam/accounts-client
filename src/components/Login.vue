<template>
  <div class="login-cmp-wrapper">
    <h2>Welcome to Myren</h2>
    <p>
      In order to use our services you need to sign up or login, if you already
      have an Account
    </p>
    <div class="inputs">
      <select v-model="prefix" name="country" id="country-code">
        <option value="98">IRI (+98)</option>
        <option value="1">US (+1)</option>
      </select>
      <input
        type="tel"
        placeholder="example: 9920800113"
        v-model="phoneNumber"
        id="phone-number"
      />
    </div>
    <div class="bottom-actions">
      <button class="actions">Help</button>
      <button class="actions next" @click="next">Next</button>
    </div>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  data() {
    return {
      prefix: null,
      phoneNumber: null
    }
  },
  methods: {
    next() {
      var self = this
      axios.get('http://192.168.1.103:4433/api/v1/generateCode?phone_number=' + this.prefix + this.phoneNumber)
        .then(response => {
          console.log(response)
          self.$store.commit('updatePhone', self.prefix + self.phoneNumber)
          self.$router.push("verify")
        })
        .catch(error => console.log(error))
        .then(() => {})
    }
  }
}
</script>

<style scoped>
#country-code {
  padding: 8px;
  border: none;
  outline: none;
  height: 38px;
  display: inline-flex;
  align-items: center;
  width: 30%;
  background-color: #eee;
}

#phone-number {
  padding: 8px;
  border: none;
  outline: none;
  height: 38px;
  display: inline-flex;
  align-items: center;
  background-color: #eee;
  width: calc(70% - 8px);
  margin-left: 8px;
}
.inputs {
  margin-top: 16px;
  padding: 8px;
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
