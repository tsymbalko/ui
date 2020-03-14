<template>
  <svg
    class="vc-icon"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
    :fill="fill"
    aria-hidden="true"
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
      default: 'archive-alt'
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
      default: 'currentColor'
    }
  }
}
</script>
