<template>
  <button
    class="button"
    :class="{
      [`button__${type}`]: type,
      [`button__${shape}`]: shape
    }"
    :disabled="disabled"
  >
    <span class="button_text">
      <slot />
    </span>
    <Icon v-if="icon" :name="icon" class="button_icon" />
  </button>
</template>

<script>
import { Icon } from 'atoms'
export default {
  name: 'Button',
  components: {
    Icon
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      validator: value =>
        ['warning', 'error', 'success', 'primary'].includes(value),
      default: 'primary'
    },
    shape: {
      type: String,
      validator: value => ['circle', 'round', ''].includes(value),
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import 'button';
</style>
