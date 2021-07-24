<template>
  <div :class="classes">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    message: [String, Boolean],
    type: String
  },
  computed: {
    classes() {
      return {
        alert: true,
        'alert-danger': this.type === 'danger',
        'alert-success': this.type === 'success',
        'alert-warning': this.type === 'warning'
      }
    }
  }
}
</script>

<style scoped>
.alert {
  width: 100%;
  padding: 1em;
  border-radius: 24px;
  margin: 8px 0;
  font-size: 11pt;
  font-family: 'Mulish', sans-serif;
}

.alert-danger {
  color: #e2413e;
  background: #ffe5e4;
}

.alert-success {
  color: #43e23e;
  background: #e4ffe8;
}

.alert-warning {
  color: #e2a93e;
  background: #fff6e4;
}
</style>
