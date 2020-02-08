<template>
  <div
    :class="[
      'vc-card',
      { [`vc-card__${type}`]: type },
      { [`vc-card__${shape}`]: shape }
    ]"
    :style="{ '--border-color': borderColor }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      validator: value =>
        ['warning', 'error', 'success', 'primary', 'ghost'].includes(value),
      default: 'ghost'
    },
    borderColor: {
      type: String,
      default: undefined
    },
    shape: {
      type: String,
      validator: value => ['round', 'rectangle'].includes(value),
      default: 'round'
    }
  }
}
</script>

<style lang="scss">
@import 'card';
</style>
