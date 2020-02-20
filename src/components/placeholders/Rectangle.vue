<template>
  <div
    :style="{
      backgroundColor: 'var(--invers, lightgrey)',
      opacity: '.3',
      padding: '16px',
      borderRadius: '2px',
      height: `${height}px`,
      width: `${width}%`
    }"
  />
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 8
    },
    width: {
      type: Number,
      default: 100
    }
  }
}
</script>
