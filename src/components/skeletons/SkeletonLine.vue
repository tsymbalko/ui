<template>
  <div
    :style="{
      background: background,
      borderRadius: '4px',
      opacity: '.3',
      width: size[0],
      height: size[1]
    }"
  />
</template>

<script>
export default {
  props: {
    size: {
      type: Array,
      default: () => ['100%', '1px']
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
