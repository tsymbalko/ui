<template>
  <button
    :class="[
      'menu-toggle',
      { 'menu-toggle__active': active },
      { [`menu-toggle__${shape}`]: shape }
    ]"
    @click="$emit('click')"
  >
    <div class="menu-toggle_box">
      <span class="menu-toggle_line" />
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
