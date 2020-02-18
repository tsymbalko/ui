<template>
  <div
    :style="{
      background: 'rgba(0, 0, 0, 0.3)',
      borderRadius: '4px',
      height: '100%',
      width: '100%'
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
