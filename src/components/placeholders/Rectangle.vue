<template>
  <div
    :style="{
      backgroundColor: 'rgba(0, 0, 0, .3)',
      borderRadius: '2px',
      height: `${height}px`,
      width: '100%'
    }"
  />
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 8
    }
  }
}
</script>
