<template>
  <button
    class="button"
    :class="{
      [`button__${type}`]: type,
      [`button__${shape}`]: shape,
      button__loading: loading
    }"
    :disabled="disabled"
  >
    <span class="button_text">
      <slot />
    </span>
    <Icon
      v-if="icon"
      :name="icon"
      class="button_icon"
      :class="{ [`icon__${iconPosition}`]: iconPosition }"
    />
    <Icon v-if="loading" name="spinner" class="button_spinner" />
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
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      validator: value => ['left', 'right', ''].includes(value),
      default: 'right'
    },
    type: {
      type: String,
      validator: value =>
        ['warning', 'error', 'success', 'primary', ''].includes(value),
      default: ''
    },
    shape: {
      type: String,
      validator: value => ['circle', 'round', 'square', ''].includes(value),
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
