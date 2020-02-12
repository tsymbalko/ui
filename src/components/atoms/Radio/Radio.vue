<template>
  <input
    type="radio"
    class="vc-radio"
    :disabled="disabled"
    :checked="selected === value"
    :value="value"
    role="switch"
    @change="$emit('change', value)"
  />
</template>

<script>
export default {
  name: 'Radio',
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      validator: v =>
        typeof v === 'string' || v === null || typeof v === 'number',
      default: null
    },
    value: {
      validator: v =>
        typeof v === 'string' || v === null || typeof v === 'number',
      required: true
    }
  }
}
</script>

<style lang="scss">
@import 'radio';
</style>
