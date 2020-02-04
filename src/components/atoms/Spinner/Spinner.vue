<template>
  <div
    :style="{ color: color }"
    class="spinner"
    :class="{ [`spinner__${type}`]: type }"
  >
    <template v-if="type === 'bounce'">
      <div class="spinner_dot" />
      <div class="spinner_dot" />
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
