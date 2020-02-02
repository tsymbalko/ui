<template>
  <label class="color-picker" :style="{ 'background-color': value }">
    <input type="color" :value="value" @change="changeColor" hidden />
  </label>
</template>

<script>
export default {
  name: 'Color',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: String,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeColor(event) {
      this.$emit('change', event.target.value)
    }
  }
}
</script>

<style>
@import 'color.scss';
</style>
