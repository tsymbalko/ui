<template>
  <div
    :style="{
      background: background,
      borderRadius: '4px',
      margin: '8px',
      opacity: '.3',
      width: size[0],
      height: size[1]
    }"
  />
</template>

<script>
export default {
  name: 'SLine',
  props: {
    size: {
      type: Array,
      default: () => ['auto', '1px']
    },
    background: {
      type: String,
      default: 'var(--invers, lightgrey)'
    },
    position: {
      type: String,
      validate: value => ['horizontal', 'vertical'].includes(value),
      default: 'horizontal'
    }
  }
}
</script>
