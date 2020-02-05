<template>
  <button
    :type="htmlType"
    :class="[
      'vc-button',
      {
        [`vc-button__${shape}`]: shape,
        [`vc-button__${type}`]: type,
        'vc-button__loading': loading
      }
    ]"
    :style="{ '--color': color }"
    :disabled="disabled"
  >
    <span class="vc-button_text">
      <slot />
    </span>
    <Icon
      v-if="icon"
      :name="icon"
      :class="[
        'vc-button_icon',
        { [`vc-button_icon__${iconPosition}`]: iconPosition }
      ]"
    />
    <Icon v-if="loading" class="vc-button_spinner" name="spinner" />
  </button>
</template>

<script>
import Icon from '../Icon/Icon'
export default {
  name: 'VCButton',
  components: {
    Icon
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    color: {
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
        ['warning', 'error', 'success', 'primary', 'ghost'].includes(value),
      default: 'ghost'
    },
    htmlType: {
      type: String,
      validator: value => ['button', 'reset', 'submit'].includes(value),
      default: 'button'
    },
    shape: {
      type: String,
      validator: value =>
        ['circle', 'round', 'square', 'rectangle'].includes(value),
      default: 'rectangle'
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
