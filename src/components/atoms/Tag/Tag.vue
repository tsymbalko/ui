<template>
  <div
    :class="[
      'vc-tag',
      { 'vc-tag__closable': closable },
      { [`vc-tag__${type}`]: type },
      { [`vc-tag__${shape}`]: shape }
    ]"
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
    },
    shape: {
      type: String,
      validator: value => ['round', 'rectangle'].includes(value),
      default: 'round'
    },
    type: {
      type: String,
      validator: value =>
        ['warning', 'error', 'success', 'primary', 'ghost'].includes(value),
      default: 'ghost'
    }
  }
}
</script>

<style lang="scss">
@import 'tag';
</style>
