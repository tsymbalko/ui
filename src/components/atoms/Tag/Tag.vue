<template>
  <div class="tag" :style="{ '--color': color }">
    <CIcon v-if="icon" :name="icon" class="tag_icon" />
    <span class="tag_text">
      <slot />
    </span>
  </div>
</template>

<script>
import CIcon from '../Icon/Icon'
export default {
  name: 'Tag',
  components: {
    CIcon
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import 'tag';
</style>
