<template>
  <button
    :type="type"
    :class="[
      'vc-button',
      {
        [`vc-button__${shape}`]: shape,
        [`vc-button__${color}`]: color,
        [`vc-button__${variant}`]: variant,
        'vc-button__loading': loading,
        'vc-button__disabled': disabled
      }
    ]"
    :style="{ '--size': `${size}px` }"
    :disabled="disabled || loading"
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
 */
export default {
  name: 'Button',
  components: {
    Icon
  },
  props: {
    /**
     * Установка type of button, см.: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type)
     */
    type: {
      type: String,
      validator: value => ['button', 'reset', 'submit'].includes(value),
      default: 'button'
    },
    /**
     * Геометрическая форма кнопки
     */
    shape: {
      type: String,
      validator: value =>
        ['circle', 'round', 'square', 'rectangle'].includes(value),
      default: 'rectangle'
    },
    /**
     * Установить размер кнопки через CSS custom properties `--size`, см. [MDN](https://developer.mozilla.org/ru/docs/Web/CSS/Using_CSS_custom_properties)
     */
    size: {
      type: Number,
      default: 44
    },
    /**
     * Установить цвет кнопки
     */
    color: {
      type: String,
      validator: value =>
        ['warning', 'error', 'success', 'primary', 'secondary'].includes(value),
      default: 'primary'
    },
    /**
     * Установить оформление кнопки
     */
    variant: {
      type: String,
      validator: value => ['ghost', 'bordered', 'normal'].includes(value),
      default: 'normal'
    },
    /**
     * Установить иконку см.: компонент `Icon`
     */
    icon: {
      type: String,
      default: ''
    },
    /**
     * Установить расположение компонента `Icon` в кнопке
     */
    iconPosition: {
      type: String,
      validator: value => ['left', 'right'].includes(value),
      default: 'left'
    },
    /**
     * Установить состояние загрузки кнопки
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * Блокирует доступ и изменение кнопки, см.: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#disabled)
     */
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
