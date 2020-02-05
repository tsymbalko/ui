<template>
  <div
    :style="{ color: color }"
    :class="['vc-spinner', { [`vc-spinner__${type}`]: type }]"
  >
    <template v-if="type === 'bounce'">
      <div class="vc-spinner_dot" />
      <div class="vc-spinner_dot" />
    </template>
  </div>
</template>

<script>
export default {
  name: 'VCSpinner',
  props: {
    color: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      validator: value => ['plane', 'bounce', 'pulse'].includes(value),
      default: 'plane'
    }
  }
}
</script>

<style lang="scss">
@import 'spinner';
</style>
