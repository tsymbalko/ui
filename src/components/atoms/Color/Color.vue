<template>
  <label class="vc-color-picker">
    <p class="vc-color-picker_value">{{ value }}</p>
    <input
      ref="inputColor"
      class="vc-color-picker_input"
      type="color"
      :value="value"
      id="color"
      @change="changeColor"
      :style="{ 'background-color': value }"
    />
  </label>
</template>

<script>
export default {
  name: 'ColorPicker',
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

<style lang="scss">
@import 'color.scss';
</style>
