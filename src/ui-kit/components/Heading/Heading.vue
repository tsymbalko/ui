<template>
  <component
    :is="`h${level}`"
    :class="[
      'vc-heading',
      {
        'vc-heading__divider': divider
      },
      {
        [`vc-heading__divider-${divider}`]: divider
      }
    ]"
  >
    <span>
      <slot />
    </span>
  </component>
</template>

<script>
export default {
  props: {
    level: {
      type: String,
      default: '1'
    },
    divider: {
      type: String,
      validator: value =>
        ['both', 'left', 'right', 'bottom', ''].includes(value),
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import 'heading';
</style>
