<template>
  <button v-bind="$attrs">
    <svg
      v-if="$attrs.disabled && props.isLoading"
      class="spinner"
      viewBox="0 0 50 50"
    >
      <circle
        class="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke-width="5"
      ></circle>
    </svg>
    <slot />
  </button>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>

<script setup>
import { defineComponent } from 'vue'

const props = defineComponent({
  variant: {
    type: 'string',
    validator: function(value) {
      return ['primary', 'secondary'].includes(value)
    }
  },
  isLoading: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.spinner {
  animation: rotate 2s linear infinite;
  z-index: 2;
  margin-right: 5px;
  width: 16px;
  height: 16px;
  display: inline-block;
}

.spinner .path {
  stroke: #0a0a0a;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>
