<template>
  <div class="color-picker">
    <p class="color-picker_value">{{ value }}</p>
    <label
      class="color-picker_label"
      :style="{ 'background-color': value }"
      tabindex="0"
      @keypress.enter="$refs.inputColor.click()"
    >
      <input
        ref="inputColor"
        class="color-picker_input"
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

<style lang="scss">
@import 'color.scss';
</style>
