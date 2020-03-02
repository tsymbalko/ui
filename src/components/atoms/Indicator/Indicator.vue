<template>
  <span
    :class="[
      'vc-indicator',
      {
        [`vc-indicator__${type}`]: type,
        'vc-indicator__empty': !$slots.default
      }
    ]"
  >
    <sup
      :class="[
        'vc-indicator_dot',
        {
          [`vc-indicator_dot__${animation}`]: animation
        }
      ]"
    />
    <slot>
      <span v-if="text" class="vc-indicator_text">
        {{ text }}
      </span>
    </slot>
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      validator: value =>
        ['warning', 'error', 'success', 'primary'].includes(value),
      default: 'primary'
    },
    animation: {
      type: String,
      validator: value => ['pulse', 'blink', ''].includes(value),
      default: 'pulse'
    }
  }
}
</script>

<style lang="scss">
@import 'indicator';
</style>
