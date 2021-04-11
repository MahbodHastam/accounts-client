<template>
  <div class="services">
    <div class="topper">
      <div>
        <div id="avatar"></div>
        <h3>
          Our Products
        </h3>
      </div>
    </div>
    <div class="section">
      <h4>Audiofy</h4>
      <p>
        A fair place for both users and artists! buy and sell tracks without
        limitations from everywhere in the world!
      </p>
      <router-link to="/data">see more >></router-link>
    </div>
  </div>
</template>
<style scoped>
.topper {
  height: 30vh;
  display: flex;
  place-content: center;
  place-items: center;
}
h3 {
  text-align: center;
  margin-top: 16px;
  margin-bottom: 16px;
}
.section {
  margin: 0 16px 26px 16px;
  border: 0.01rem solid #d6d6d6;
  padding: 10px 16px;
  border-radius: 12px;
}
p {
  margin-top: 10px;
  line-height: 22px;
}
a {
  display: block;
  margin-top: 10px;
  text-decoration: none;
  font-weight: bold;
  font-family: 'Poppins';
  color: rgb(0, 60, 255);
}
</style>
