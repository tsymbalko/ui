<template>
  <div
    :style="{ color: color, '--size': `${size}px` }"
    :class="['vc-spinner', { [`vc-spinner__${type}`]: type }]"
    aria-label="loading"
  >
    <template v-if="type === 'bounce'">
      <div class="vc-spinner_dot" />
      <div class="vc-spinner_dot" />
    </template>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
  props: {
    color: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 40
    },
    type: {
      type: String,
      validator: value => ['plane', 'bounce', 'pulse', 'ring'].includes(value),
      default: 'plane'
    }
  }
}
</script>

<style lang="scss">
@import 'spinner';
</style>
