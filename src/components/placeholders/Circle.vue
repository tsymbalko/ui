<template>
  <div
    :style="{
      background,
      borderRadius: '100%',
      height: `${size}px`,
      width: `${size}px`,
      opacity: '.3'
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
      default: 'var(--invers, lightgrey)'
    }
  }
}
</script>
