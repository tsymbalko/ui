<template>
  <button
    ref="switch"
    class="switch"
    :class="{ switch__checked: checked, switch__disabled: disabled }"
    :disabled="disabled"
    role="switch"
    @click="changeChecked"
  ></button>
</template>

<script>
export default {
  name: 'CSwitch',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeChecked() {
      this.$emit('change', !this.checked)
    }
  }
}
</script>

<style lang="scss">
@import 'switch';
</style>
