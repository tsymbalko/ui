<template>
  <div
    :style="{
      background: background,
      opacity: '.3',
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
      default: 'var(--invers, lightgrey)'
    }
  }
}
</script>
