<template>
  <a class="vc-link">
    <Icon v-if="icon" :name="icon" class="vc-link_icon" />
    <slot />
  </a>
</template>

<script>
import Icon from '../Icon/Icon'
export default {
  name: 'Link',
  components: {
    Icon
  },
  props: {
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import 'link';
</style>
