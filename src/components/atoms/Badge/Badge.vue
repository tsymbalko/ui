<template>
  <span
    :class="[
      'vc-badge',
      {
        'vc-badge__empty': !$slots.default
      }
    ]"
  >
    <slot />
    <sup
      :class="[
        'vc-badge_value',
        {
          [`vc-badge_value__${type}`]: type,
          [`vc-badge_value__${shape}`]: shape
        }
      ]"
    >
      {{ count | overflowCount(overflowCount) }}
    </sup>
  </span>
</template>

<script>
export default {
  filters: {
    overflowCount(value, overflowCount) {
      return value > overflowCount ? `${overflowCount}+` : value
    }
  },
  props: {
    count: {
      type: Number,
      default: 0
    },
    overflowCount: {
      type: Number,
      default: 99
    },
    type: {
      type: String,
      validator: value =>
        ['warning', 'error', 'success', 'primary'].includes(value),
      default: 'primary'
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
@import 'badge';
</style>
