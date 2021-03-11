<template>
  <div id="app">
    <div id="nav">
      <div class="nav-item">
        <ion-icon name="menu-outline"></ion-icon>
      </div>
      <div class="nav-item">
        <h2>ACCOUNTS</h2>
      </div>
      <div class="nav-item">
        <ion-icon name="person-circle-outline"></ion-icon>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  watch: {
    '$route':{
        handler: (to) => {
          document.title = to.meta.title || 'Your Website'
        },
         immediate: true
      }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500&family=Poppins:wght@600;700&display=swap');

*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#nav {
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  background-color: #0d0d0d;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
}
a,
p {
  font-family: 'Mulish', sans-serif;
}
.nav-item {
  width: 48px;
  height: 48px;
  display: flex;
  place-items: center;
  place-content: center;
}
.nav-item h2 {
  color: #fff;
  font-size: 11px;
  letter-spacing: 10px;
}
#nav .nav-item ion-icon {
  color: #eee !important;
  font-size: 30px;
}
input, select, option {
  font-family: mulish;
  font-weight: 300;
}
</style>
