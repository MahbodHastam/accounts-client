<template>
  <div class="login-cmp-wrapper">
    <div class="borders">
      <div class="inputs">
        <select v-model="prefix" name="country" id="country-code" required>
          <option value="+" disabled hidden selected
            >Select Your Country</option
          >
          <option value="+98">IRI (+98)</option>
          <option value="+1">US (+1)</option>
        </select>
        <p id="code-model">{{ prefix }}</p>
        <input
          type="tel"
          placeholder="example: 9920800113"
          v-model="phoneNumber"
          id="phone-number"
        />
      </div>

      <!-- for going back and help -->
      <div class="bottom-actions">
        <button class="actions">Help</button>
        <button class="actions next" @click="next">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  data() {
    return {
      prefix: '+',
      phoneNumber: null
    }
  },
  methods: {
    next() {
      var self = this
      var url =
        'https://accounts.myren.xyz/api/v1/generateCode?phone_number=' +
        this.prefix.substring(1) +
        this.phoneNumber
      console.log(url)
      axios
        .get(url, { withCredentials: true })
        .then(response => {
          console.log(response)
          self.$store.commit(
            'updatePhone',
            self.prefix.substring(1) + self.phoneNumber
          )
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
#code-model {
  padding: 10px;
  border: none;
  outline: none;
  height: 48px;
  align-items: center;
  width: 30%;
  background-color: #eee;
  border-radius: 24px;

  display: inline-flex;
  place-items: center;
  place-content: center;
}

#phone-number {
  padding: 10px;
  border: none;
  outline: none;
  height: 48px;
  display: inline-flex;
  align-items: center;
  background-color: #eee;
  width: calc(70% - 8px);
  margin-left: 8px;
  border-radius: 24px;
}
.inputs {
  padding: 8px;
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
</style>
