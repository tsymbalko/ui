<template>
  <div
    :class="['vc-tag', { 'vc-tag_closable': closable }]"
    :style="{ '--color': color }"
  >
    <CIcon v-if="icon" :name="icon" class="vc-tag_icon" />
    <span class="vc-tag_text">
      <slot />
      <button
        v-if="closable"
        class="vc-tag_close"
        aria-label="close tag"
        @click="$emit('close')"
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
