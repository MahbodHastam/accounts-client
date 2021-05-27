<template>
  <div class="data">
    <div class="borders">
      <div class="topper">
        <h4>Privacy and Personalization</h4>
      </div>
      <div class="section">
        <h4>Activity Control</h4>
        <div class="boxes">
          <p>Audiofy History</p>
          <div
            class="check"
            :class="{ active: userInfo.audiofy_history }"
            @click="userInfo.audiofy_history = !userInfo.audiofy_history"
          >
            <div
              :class="{ innerActive: userInfo.audiofy_history }"
              class="check-inner"
            ></div>
          </div>
        </div>
        <div class="boxes">
          <p>Vidible History</p>
          <div
            class="check"
            :class="{ active: userInfo.vidible_history }"
            @click="userInfo.vidible_history = !userInfo.vidible_history"
          >
            <div
              :class="{ innerActive: userInfo.vidible_history }"
              class="check-inner"
            ></div>
          </div>
        </div>
      </div>
      <div class="section">
        <h4>Ad Settings</h4>
        <div class="boxes">
          <p>Show Ads</p>
          <div
            class="check"
            :class="{ active: userInfo.show_ads }"
            @click="changeShowAds"
          >
            <div
              :class="{ innerActive: userInfo.show_ads }"
              class="check-inner"
            ></div>
          </div>
        </div>
        <div class="boxes">
          <p>Ads Personalization</p>
          <div
            class="check"
            :class="{
              active: userInfo.ads_personalization && userInfo.show_ads
            }"
            @click="changeAdsPersonalization"
          >
            <div
              :class="{
                innerActive: userInfo.ads_personalization && userInfo.show_ads
              }"
              class="check-inner"
            ></div>
          </div>
        </div>
        <div class="boxes">
          <p>Ads Earnings</p>
          <div
            class="check"
            :class="{ active: userInfo.ads_earnings && userInfo.show_ads }"
            @click="changeAdsEarnings"
          >
            <div
              :class="{
                innerActive: userInfo.ads_earnings && userInfo.show_ads
              }"
              class="check-inner"
            ></div>
          </div>
        </div>
      </div>

      <div class="bottom-actions">
        <button class="actions" @click="back">Back</button>
        <button class="actions next" @click="save">Save</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
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
  },
  methods: {
    save() {
      var self = this
      axios
        .get(
          `https://accounts.myren.xyz/api/v1/updateSettings?audiofy_history=${String(
            self.userInfo.audiofy_history
          )}&vidible_history=${String(
            self.userInfo.vidible_history
          )}&show_ads=${String(
            self.userInfo.show_ads
          )}&ads_personalization=${String(
            self.userInfo.ads_personalization
          )}&ads_earnings=${String(self.userInfo.ads_earnings)}`,
          { withCredentials: true }
        )
        .then(response => {
          console.log(response)
          if (response.data.ok) {
            console.log('done!')
            //go to show all products!
            self.$router.push('/')
          }
        })
        .catch(error => console.log(error))
        .then()
    },
    changeShowAds() {
      this.userInfo.show_ads = !this.userInfo.show_ads
      if (this.userInfo.show_ads == false) {
        this.userInfo.ads_personalization = false
        this.userInfo.ads_earnings = false
      }
    },
    changeAdsEarnings() {
      if (this.userInfo.show_ads) {
        this.userInfo.ads_earnings = !this.userInfo.ads_earnings
      }
    },
    changeAdsPersonalization() {
      if (this.userInfo.show_ads) {
        this.userInfo.ads_personalization = !this.userInfo.ads_personalization
      }
    },
    back() {
      this.$router.push('/')
    }
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
.section {
  margin: 32px 16px;
  border: 0.01rem solid #d6d6d6;
  padding: 16px;
  border-radius: 12px;
}
.boxes {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.section h4 {
  margin-bottom: 10px;
}
.boxes p {
  padding-left: 8px;
  line-height: 28px;
}
.check {
  margin-top: 8px;
  margin-bottom: 8px;
  width: 64px;
  height: 32px;
  background-color: #c0c0c0;
  border-radius: 19px;
  display: flex;
  padding: 2px;
  transition: all 0.3s;
}
.check-inner {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #eee;
  transition: all 0.3s;
}
.active {
  background-color: rgb(51, 99, 255);
}
.innerActive {
  transform: translateX(32px);
}

.bottom-actions {
  /* position: absolute; */
  margin-top: 16px;
  width: calc(100% - 32px);
  margin-left: 16px;
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
