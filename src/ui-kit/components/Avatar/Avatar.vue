<template>
  <div
    :class="['vc-avatar', { [`vc-avatar__shape-${shape}`]: shape }]"
    :style="{ '--size': `${size}rem` }"
  >
    <template>
      <slot>
        <img v-if="src" class="vc-avatar_image" :src="src" alt="avatar" />
        <Icon v-else-if="icon" :name="icon" class="vc-avatar_icon" />
      </slot>
    </template>
  </div>
</template>

<script>
import Icon from '../Icon/Icon'
/**
 * Компонент для создания списка якорных ссылок
 */
export default {
  name: 'Avatar',
  components: {
    Icon
  },
  props: {
    src: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'user'
    },
    size: {
      type: Number,
      default: 3
    },
    shape: {
      type: String,
      validator: value => ['circle', 'square'].includes(value),
      default: 'circle'
    }
  }
}
</script>

<style lang="scss">
@import 'avatar';
</style>
