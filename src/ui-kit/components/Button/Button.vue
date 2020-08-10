<template>
  <button
    :type="type"
    :class="[
      'vc-button',
      {
        [`vc-button__shape-${shape}`]: shape,
        [`vc-button__color-${color}`]: color,
        [`vc-button__variant-${variant}`]: variant,
        'vc-button__loading': loading,
        'vc-button__disabled': disabled
      }
    ]"
    :style="{ '--size': `${size}rem` }"
    :disabled="disabled || loading"
    v-on="$listeners"
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
     * Геометрическая форма кнопки. Кнопкам с `shape` равным `circle`, `square` указывается текст который скрыт с помощью `visibility-hidden`, для обеспечения доступности контента.
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
      default: 2.75
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
     * Добавляет элементу аттрибут `disabled` без добавления классов и изменение стилей кроме `cursor`
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * Добавляет элементу одноименный аттрибут и class `vc-button__disabled` отвечающий за визуальное отображение состояния (изменение `bg, color, cursor`)
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
