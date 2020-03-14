<template>
  <div
    :style="{
      background: 'var(--invers, lightgrey)',
      opacity: '.3',
      flex: '0 0 auto',
      margin: '8px',
      borderRadius: shape === 'circle' ? '50%' : '4px',
      width: size,
      height: size
    }"
  />
</template>

<script>
export default {
  name: 'SFigure',
  props: {
    size: {
      type: String,
      default: '80px'
    },
    shape: {
      type: String,
      validator: value => ['circle', 'square'].includes(value),
      default: 'square'
    }
  }
}
</script>
