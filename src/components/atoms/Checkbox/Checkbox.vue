<template>
  <input
    type="checkbox"
    class="vc-checkbox"
    :disabled="disabled"
    :checked="checked"
    role="switch"
    @change="$emit('change', $event.target.checked)"
  />
</template>

<script>
export default {
  name: 'Checkbox',
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
@import 'checkbox';
</style>
