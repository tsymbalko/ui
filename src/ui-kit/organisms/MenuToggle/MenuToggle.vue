<template>
  <button
    :class="[
      'vc-menu-toggle',
      { 'vc-menu-toggle__active': active },
      { [`vc-menu-toggle__${shape}`]: shape }
    ]"
    @click="$emit('click')"
  >
    <div class="vc-menu-toggle_box">
      <span class="vc-menu-toggle_line" />
    </div>
  </button>
</template>

<script>
export default {
  name: 'MenuToggle',
  model: {
    prop: 'active',
    event: 'click'
  },
  props: {
    active: {
      type: Boolean,
      required: true
    },
    shape: {
      type: String,
      validator: value => ['circle', 'square'].includes(value),
      default: 'square'
    }
  }
}
</script>

<style lang="scss">
@import 'menu-toggle';
</style>
