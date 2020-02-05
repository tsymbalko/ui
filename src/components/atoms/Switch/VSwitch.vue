<template>
  <button
    ref="switch"
    class="vc-switch"
    :class="{ 'vc-switch__checked': checked, 'vc-switch__disabled': disabled }"
    :disabled="disabled"
    role="switch"
    @click="changeChecked"
  />
</template>

<script>
export default {
  name: 'VCSwitch',
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
