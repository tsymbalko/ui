<template>
  <button
    :type="htmlType"
    :class="[
      'vc-button',
      {
        [`vc-button__${shape}`]: shape,
        [`vc-button__${type}`]: type && !background,
        'vc-button__loading': loading
      }
    ]"
    :style="{ '--background': background, '--size': `${size}px` }"
    :disabled="disabled"
    @click="$emit('click')"
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
/**
 * The only true button.
 * @displayName Button
 */
export default {
  name: 'Button',
  components: {
    Icon
  },
  props: {
    /**
     * A test for default function Object
     */
    icon: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 44
    },
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      validator: value => ['left', 'right'].includes(value),
      default: 'right'
    },
    type: {
      type: String,
      validator: value =>
        [
          'warning',
          'error',
          'success',
          'primary',
          'ghost',
          'bordered'
        ].includes(value),
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
