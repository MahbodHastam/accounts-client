<template>
  <div class="home">
    <div class="borders">
      <div class="topper">
        <h4>Sign In</h4>
      </div>
      <Login />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'Signin',
  components: {
    Login
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
.home {
  padding: 16px !important;
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
