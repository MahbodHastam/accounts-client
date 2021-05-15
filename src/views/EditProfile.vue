<template>
  <div class="profile">
    <div class="topper">
      <h4>Edit Profile</h4>
    </div>
    <p>
      Complete your profile, minimum info needed are your firstname and
      lastname.
    </p>
    <span>Firstname</span>
    <input type="text" placeholder="example: Mehrdad" v-model="firstName" />
    <span>Lastname</span>
    <input type="text" placeholder="example: Akbari" v-model="lastName" />

    <div class="bottom-actions">
      <button class="actions">Privacy</button>
      <button class="actions next" @click="complete">Save</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      firstName: null,
      lastName: null
    }
  },
  methods: {
    complete() {
      var self = this
      axios
        .get(
          `https://accounts.myren.xyz/api/v1/completeProfile?user_firstname=${self.firstName}&user_lastname=${self.lastName}`,
          { withCredentials: true }
        )
        .then(response => {
          console.log(response)
          if (response.data.ok) {
            console.log('done!')
            self.$router.push('/')
          }
        })
        .catch(error => console.log(error))
        .then()
    }
  }
}
</script>

<style scoped>
p {
  margin-bottom: 25px;
}
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
.profile {
  padding: 16px;
}
input {
  padding: 10px;
  border: none;
  outline: none;
  height: 48px;
  display: block;
  align-items: center;
  background-color: #eee;
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 24px;
}

.bottom-actions {
  position: absolute;
  bottom: 8px;
  width: calc(100vw - 32px);
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
span {
  display: block;
  font-family: 'Mulish', sans-serif;
  font-size: 12px;
  transform: translate(15px, 10px);
}
</style>
