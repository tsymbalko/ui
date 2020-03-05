<template>
  <div
    :class="['vc-card', { [`vc-card__${type}`]: type }]"
    :style="{ '--border-color': borderColor }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
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
    }
  }
}
</script>

<style lang="scss">
@import 'card';
</style>
