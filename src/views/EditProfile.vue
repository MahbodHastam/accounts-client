<template>
  <div class="profile">
    <div class="borders">
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
        <AppButton
          class="actions next"
          :disabled="loading"
          :isLoading="loading"
          @click="complete"
        >
          <span v-show="!loading">Save</span>
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script>
import useAxios from '@/composables/useAxios'
import AppButton from '@/components/AppButton.vue'

export default {
  components: { AppButton },
  data() {
    return {
      firstName: null,
      lastName: null
    }
  },
  methods: {
    complete() {
      var self = this

      const { get, success, loading } = useAxios()

      this.loading = loading

      get(`completeProfile/${self.firstName}/${self.lastName}`).then(() => {
        if (success.value) {
          if (this.$store.state.backTo) {
            window.location.href = this.$store.state.backTo
          } else {
            self.$router.push('/')
          }
        }
      })
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
  /* position: absolute; */
  margin-top: 32px;
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
span {
  display: block;
  font-family: 'Mulish', sans-serif;
  font-size: 12px;
  transform: translate(15px, 10px);
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
