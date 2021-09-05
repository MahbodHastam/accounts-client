<template>
  <div class="select-box" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option
          open = false
          $emit('selectedOption', option)
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectBox',

  props: {
    options: {
      type: Array,
      required: true
    },
    default: {
      type: String,
      requried: false,
      default: null
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0
    }
  },

  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false
    }
  }
}
</script>

<style scoped>
.select-box {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
  font-family: 'Mulish', sans-serif;
  margin-bottom: 0.5em;
}

.select-box .selected {
  background-color: #eee;
  border-radius: 24px;
  color: #3d3d3d;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.select-box .selected.open {
  border-radius: 24px 24px 0px 0px;
}

.select-box .selected:after {
  position: absolute;
  content: '';
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #0d0d0d transparent transparent transparent;
}

.select-box .items {
  color: #fff;
  border-radius: 0px 0px 24px 24px;
  overflow: hidden;
  position: absolute;
  background-color: #0d0d0d;
  left: 0;
  right: 0;
  z-index: 1;
}

.select-box .items div {
  color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.select-box .items div:hover {
  background-color: #222222;
}

.selectHide {
  display: none;
}
</style>
