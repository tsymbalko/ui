<template>
  <label class="vc-radio">
    <input
      type="radio"
      :name="name"
      class="vc-radio_input"
      :disabled="disabled"
      :checked="selected === value"
      :value="value"
      role="switch"
      @change="$emit('change', value)"
    />
    <span v-if="label" class="vc-radio_label">
      {{ label }}
    </span>
  </label>
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
    name: {
      type: String,
      default: 'inputRadioName'
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
