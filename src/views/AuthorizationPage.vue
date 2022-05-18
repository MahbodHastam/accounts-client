<template>
  <div class="main">
    <div class="container">
      <div class="logo-container">
        <img src="/logo.svg" alt="logo" />
        <p>MYREN</p>
      </div>
      <p class="text">
        Hi, <a href="#">{{ route.query.source || 'UNDEFINED' }}</a> wants to
        sign you in via Myren Account.
      </p>
      <div class="account-details font-mulish">
        <img
          src=""
          alt="user avatar"
          width="32px"
          height="32px"
          v-if="userInfo.user_avatar"
        />
        <div class="user-avatar" v-else>
          {{
            userInfo.user_firstname.charAt(0, 1) +
              userInfo.user_lastname.charAt(0, 1)
          }}
        </div>
        <div class="name">
          <span class="small">continue as</span>
          <h3>{{ userInfo.user_firstname + ' ' + userInfo.user_lastname }}</h3>
        </div>
      </div>
      <div class="action-buttons">
        <button type="button">Deny</button>
        <button type="button" class="allow-btn">Allow</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
// import { useStore } from 'vuex'

const route = useRoute()
// const store = useStore()
// const userInfo = store.state.userInfo
const userInfo = {
  user_avatar: null,
  user_firstname: 'Mahbod',
  user_lastname: 'Ahmadi'
}

onMounted(() => {
  if (!route.query.source) console.log('"source" not defined on url')
})
</script>

<style scoped>
.main {
  min-width: 100vw;
  min-height: 100vh;
  background: #e5e5e5;
  padding: 2rem;
  display: grid;
}

.container {
  width: 100%;
  max-width: 992px;
  margin: auto;
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  padding-bottom: 1.5rem;
}

.logo-container {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-container img {
  width: 240px;
  height: 160px;
}

.logo-container p {
  color: #0d0d0d;
  display: block;
  letter-spacing: 10px;
  margin-right: -10px;
  font-size: 1.2em;
  font-weight: 300;
}

.text {
  color: #0d0d0d;
  margin-top: 4rem;
  margin-bottom: 1.5rem;
}

.text a {
  color: #3b3bff;
}

.account-details {
  width: 100%;
  border: 1px solid #c5c5c5;
  padding: 1rem;
  border-radius: 1rem;
  user-select: none;
}

.account-details .user-avatar {
  border-radius: 9999px;
  background: #c4c4c4;
  width: 64px;
  height: 64px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.account-details .name {
  display: inline-block;
  vertical-align: middle;
  padding-left: 1rem;
}

.account-details .name h3 {
  margin: 0;
  padding: 0;
  font-size: 1.125em;
}

.action-buttons {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  margin-top: 2rem;
  gap: 0.3rem;
}

.action-buttons button {
  color: #0d0d0d;
  background: none;
  padding: 0.8rem 1.5rem;
  border-radius: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: 'Mulish', sans-serif;
  font-weight: bold;
}

.action-buttons .allow-btn {
  background: #edf1ff;
  color: #003CFF;
}
</style>
