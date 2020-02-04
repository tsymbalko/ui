<template>
  <div
    class="tag"
    :class="{ tag_closable: closable }"
    :style="{ '--color': color }"
  >
    <CIcon v-if="icon" :name="icon" class="tag_icon" />
    <span class="tag_text">
      <slot />
      <button
        v-if="closable"
        @click="$emit('close')"
        class="tag_close"
        aria-label="close tag"
      >
        <CIcon width="20" height="20" name="times" />
      </button>
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
    closable: {
      type: Boolean,
      default: false
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
