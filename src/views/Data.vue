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
        <div
          class="check"
          :class="{ active: showAds }"
          @click="showAds = !showAds"
        >
          <div :class="{ innerActive: showAds }" class="check-inner"></div>
        </div>
      </div>
      <div class="boxes">
        <p>Ads Personalization</p>
        <div
          class="check"
          :class="{ active: adPersonalization && showAds }"
          @click="adPersonalization = !adPersonalization"
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
          @click="adsEarnings = !adsEarnings"
        >
          <div
            :class="{ innerActive: adsEarnings && showAds }"
            class="check-inner"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {},
  data: function() {
    return {
      audiofyHistory: true,
      vidibleHistory: true,
      showAds: true,
      adPersonalization: true,
      adsEarnings: false
    }
  }
}
</script>
<style scoped>
.section {
  margin: 32px 16px;
  border: 0.01rem solid #d6d6d6;
  padding: 10px 16px;
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
</style>
