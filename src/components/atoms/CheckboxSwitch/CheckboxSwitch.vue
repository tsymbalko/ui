<template>
  <input
    type="checkbox"
    class="vc-switch"
    :disabled="disabled"
    :checked="checked"
    role="switch"
    @change="$emit('change', $event.target.checked)"
  />
</template>

<script>
export default {
  name: 'CheckboxSwitch',
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
  }
}
</script>

<style lang="scss">
@import 'checkbox-switch';
</style>
