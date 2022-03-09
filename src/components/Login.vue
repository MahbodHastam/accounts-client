<template>
  <keep-alive>
    <component
      :is="$store.state.selectedMethod"
      @selectedMethod="$store.commit('UPDATE_SELECTED_METHOD', $event)"
    ></component>
  </keep-alive>
</template>

<script>
import PhoneLogin from './Auth/PhoneLogin.vue'
import EmailLogin from './Auth/EmailLogin.vue'

export default {
  components: { PhoneLogin, EmailLogin }
}
</script>

<style>
#code-model {
  padding: 10px;
  border: none;
  outline: none;
  height: 48px;
  align-items: center;
  width: 30%;
  background-color: #eee;
  border-radius: 24px;
  display: inline-flex;
  place-items: center;
  place-content: center;
}

.inputs {
  padding: 8px;
}

.inputs input {
  padding: 10px;
  border: none;
  outline: none;
  height: 48px;
  display: inline-flex;
  align-items: center;
  background-color: #eee;
  border-radius: 24px;
}

.inputs #phone-number {
  width: calc(70% - 8px);
  margin-left: 8px;
}

.inputs #email {
  width: 100%;
}

.bottom-actions {
  /* position: absolute; */
  margin-top: 16px;
  /* width: calc(100% - 32px); */
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}

.actions {
  border: none;
  outline: none;
  font-size: 12pt;
  background: none;
  height: 48px;
  /* padding: 15px 26px; */
  border-radius: 24px;
  display: flex;
  place-content: center;
  place-items: center;
  font-family: 'Mullish', sans-serif;
  font-weight: bold;
  min-width: 85px;
  cursor: pointer;
}

.next {
  color: #003cff;
  background: #edf1ff;
}
</style>
