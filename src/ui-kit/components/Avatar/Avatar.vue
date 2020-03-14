<template>
  <div
    :class="['vc-avatar', { [`vc-avatar__${shape}`]: shape }]"
    :style="{
      '--size': `${size}px`,
      'background-image': src && `url('${src}')`
    }"
  >
    <template>
      <span v-if="text && !src">
        {{ text | getName }}
      </span>
      <Icon v-else-if="icon && !src" :name="icon" class="vc-avatar_icon" />
    </template>
    <Icon v-if="check" name="check-circle" class="vc-avatar_check" />
  </div>
</template>

<script>
import Icon from '../Icon/Icon'
export default {
  name: 'Avatar',
  components: {
    Icon
  },
  filters: {
    getName(value) {
      return value
        .split(' ')
        .map(item => item.charAt(0).toUpperCase())
        .join('')
    }
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'user'
    },
    check: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 48
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
