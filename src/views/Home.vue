<template>
  <div>
    <div class="topper">
      <div>
        <div id="avatar"></div>
        <h3>
          Welcome {{ this.userInfo.user_firstname }}
          {{ this.userInfo.user_lastname }}
        </h3>
      </div>
    </div>

    <div class="section">
      <h4>Our Products</h4>
      <p>Here you can find all Myren products that are available!</p>
      <router-link to="/services">see more >></router-link>
    </div>
    <div class="section">
      <h4>Privacy & Personalization</h4>
      <p>choose what activity is saved to personalize your Myren experience!</p>
      <router-link to="/data">see more >></router-link>
    </div>
    <div class="section dis">
      <h4>We value your security</h4>
      <p>
        The security service is designed to give you personalized
        recommendations to secure your accounnts and wallets
      </p>
      <router-link to="">check up >></router-link>
    </div>
    <div class="outer">
      <p>
        Only you can see your settings. You might also want to review your
        settings for Audiofy, Vidible, or whichever Myren services you use most.
        Myren keeps your data private, safe, and secure
      </p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed: mapState(['userInfo']),
  beforeCreate() {
    var self = this
    axios
      .get('https://accounts.myren.xyz/api/v1/getProfile', {
        withCredentials: true
      })
      .then(response => {
        //   console.log(response.data)
        if (response.data.ok) {
          self.$store.commit('updateUserInfo', response.data)
        } else {
          // self.$router.push('/intro')
          self.$router.push('/signin')
        }
        //   self.$store.state
      })
      .catch(error => console.log(error))
      .then(() => {})
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
.outer {
  margin: 32px 16px;
  padding: 10px 16px;
}
.outer p {
  color: #8b8b8b;
}
#avatar {
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #2a2a2a, #5e5e5e);
  border-radius: 50%;
  margin: 16px auto 0 auto;
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
.dis {
  opacity: 0.5;
}
</style>
