<template>
  <button
    :class="[
      'menu-toggle',
      {
        'menu-toggle__active': active
      }
    ]"
    @click="active = !active"
  >
    <div class="menu-toggle_box">
      <span class="menu-toggle_line"></span>
    </div>
  </button>
</template>

<script>
export default {
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
