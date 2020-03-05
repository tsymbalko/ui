<template>
  <h3
    :is="`h${level}`"
    :class="[
      'vc-heading',
      {
        'vc-heading__separator': separator
      },
      {
        [`vc-heading__separator-${separator}`]: separator
      }
    ]"
  >
    <span>
      <slot />
    </span>
  </h3>
</template>

<script>
export default {
  props: {
    level: {
      type: String,
      default: '3'
    },
    separator: {
      type: String,
      validator: value => ['both', 'left', 'right', 'bottom'].includes(value),
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import 'heading';
</style>
