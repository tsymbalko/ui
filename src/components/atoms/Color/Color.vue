<template>
  <div class="vc-color-picker">
    <p class="vc-color-picker_value">{{ value }}</p>
    <label
      class="vc-color-picker_label"
      :style="{ 'background-color': value }"
      tabindex="0"
      @keypress.enter="inputHandler"
      @keypress.space="inputHandler"
    >
      <input
        ref="inputColor"
        class="vc-color-picker_input"
        type="color"
        :value="value"
        @change="changeColor"
        hidden
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'VCColor',
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
    },
    inputHandler() {
      this.$refs.inputColor.click()
    }
  }
}
</script>

<style lang="scss">
@import 'color.scss';
</style>
