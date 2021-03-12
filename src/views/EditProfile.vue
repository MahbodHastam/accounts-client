<template>
    <div class="profile">
      <p>Firstname :</p>
      <input
        type="text"
        placeholder="example: Mehrdad"
        v-model="firstName"
      />
      <p>Lastname :</p>
      <input
        type="text"
        placeholder="example: Akbari"
        v-model="lastName"
      />
      <button @click="complete">Save</button>
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
        axios.get(`https://accounts.myren.xyz/api/v1/completeProfile?user_firstname=${self.firstName}&user_lastname=${self.lastName}`, {withCredentials: true})
          .then( response => {
            console.log(response)
            if(response.data.ok){
              console.log("done!");
              //go to show all products!
              self.$router.push("welcome")
            }
          })
          .catch( error => console.log(error) )
          .then()
      }
    }
}
</script>

<style scoped>
.profile {
    padding: 16px 8px;
}
input {
  padding: 8px;
  border: none;
  outline: none;
  height: 38px;
  display: block;
  align-items: center;
  background-color: #eee;
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
}
button{
  border: none;
  outline: none;
  font-size: 16px;
  padding: 8px;
  background: none;
  color: blue;
  border-radius: 0px;
  display: block;
  background-color: #eee;
}
</style>