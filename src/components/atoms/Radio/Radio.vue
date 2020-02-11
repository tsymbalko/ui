<template>
  <input
    type="radio"
    class="vc-radio"
    :disabled="disabled"
    :checked="checked"
    role="switch"
    @change="$emit('change', $event.target.checked)"
  />
</template>

<script>
export default {
  name: 'Radio',
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
@import 'radio';
</style>
