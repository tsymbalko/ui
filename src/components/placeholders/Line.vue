<template>
  <div
    :style="{
      background: background,
      height: '1px',
      width: '100%'
    }"
  />
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default: 'rgba(0, 0, 0, 0.3)'
    }
  }
}
</script>
