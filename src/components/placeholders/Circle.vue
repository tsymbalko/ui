<template>
  <div
    :style="{
      background,
      borderRadius: '100%',
      height: `${size}px`,
      width: `${size}px`
    }"
  />
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 16
    },
    background: {
      type: String,
      default: 'rgba(0, 0, 0, .3)'
    }
  }
}
</script>
