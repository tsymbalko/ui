<template>
  <div
    :style="{
      background: 'var(--invers, lightgrey)',
      opacity: '.3',
      borderRadius: '4px',
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
      default: 8
    }
  }
}
</script>
