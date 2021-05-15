<template>
  <div>
    <div class="section">
      <h4>Activity Control</h4>
      <div class="boxes">
        <p>Audiofy History</p>
        <div
          class="check"
          :class="{ active: audiofyHistory }"
          @click="audiofyHistory = !audiofyHistory"
        >
          <div
            :class="{ innerActive: audiofyHistory }"
            class="check-inner"
          ></div>
        </div>
      </div>
      <div class="boxes">
        <p>Vidible History</p>
        <div
          class="check"
          :class="{ active: vidibleHistory }"
          @click="vidibleHistory = !vidibleHistory"
        >
          <div
            :class="{ innerActive: vidibleHistory }"
            class="check-inner"
          ></div>
        </div>
      </div>
    </div>
    <div class="section">
      <h4>Ad Settings</h4>
      <div class="boxes">
        <p>Show Ads</p>
        <div class="check" :class="{ active: showAds }" @click="changeShowAds">
          <div :class="{ innerActive: showAds }" class="check-inner"></div>
        </div>
      </div>
      <div class="boxes">
        <p>Ads Personalization</p>
        <div
          class="check"
          :class="{ active: adPersonalization && showAds }"
          @click="changeAdsPersonalization"
        >
          <div
            :class="{ innerActive: adPersonalization && showAds }"
            class="check-inner"
          ></div>
        </div>
      </div>
      <div class="boxes">
        <p>Ads Earnings</p>
        <div
          class="check"
          :class="{ active: adsEarnings && showAds }"
          @click="changeAdsEarnings"
        >
          <div
            :class="{ innerActive: adsEarnings && showAds }"
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
</template>
<script>
import axios from 'axios'

export default {
  methods: {
    save() {
      var self = this
      axios
        .get(
          `https://accounts.myren.xyz/api/v1/updateSettings?audiofy_history=${String(
            self.audiofyHistory
          )}&vidible_history=${String(self.vidibleHistory)}&show_ads=${String(
            self.showAds
          )}&ads_personalization=${String(
            self.adPersonalization
          )}&ads_earnings=${String(self.adsEarnings)}`,
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
      this.showAds = !this.showAds
      if (this.showAds == false) {
        this.adPersonalization = false
        this.adsEarnings = false
      }
    },
    changeAdsEarnings() {
      if (this.showAds) {
        this.adsEarnings = !this.adsEarnings
      }
    },
    changeAdsPersonalization() {
      if (this.showAds) {
        this.adPersonalization = !this.adPersonalization
      }
    },
    back() {
      this.$router.push('/')
    }
  },
  data: function() {
    return {
      audiofyHistory: this.$store.state.userInfo.audiofy_history,
      vidibleHistory: this.$store.state.userInfo.vidible_history,
      showAds: this.$store.state.userInfo.show_ads,
      adPersonalization: this.$store.state.userInfo.ads_personalization,
      adsEarnings: this.$store.state.userInfo.ads_earnings
    }
  }
}
</script>
<style scoped>
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
  position: absolute;
  bottom: 8px;
  width: calc(100vw - 32px);
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
</style>
