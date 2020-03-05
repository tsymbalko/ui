<template>
  <button
    :class="[
      'menu-toggle',
      { 'menu-toggle__active': active },
      { [`vc-avatar__${shape}`]: shape }
    ]"
    @click="active = !active"
  >
    <div class="menu-toggle_box">
      <span class="menu-toggle_line" />
    </div>
  </button>
</template>

<script>
export default {
  name: 'MenuToggle',
  props: {
    shape: {
      type: String,
      validator: value => ['circle', 'square'].includes(value),
      default: 'square'
    }
  },
  data() {
    return {
      active: false
    }
  }
}
</script>

<style lang="scss">
@import 'menu-toggle';
</style>
