<template>
  <svg
    viewBox="0 0 24 24"
    class="icon"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :fill="fill"
  >
    <use :xlink:href="`${require('assets/sprites/icons.svg')}#${name}`" />
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      default: 'placeholder'
    },
    width: {
      type: [String, Number],
      default: 24
    },
    height: {
      type: [String, Number],
      default: 24
    },
    fill: {
      type: String,
      default: 'currenColor'
    }
  }
}
</script>

<style lang="scss">
@import 'icon';
</style>
