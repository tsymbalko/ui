<template>
  <div
    :style="{
      display: 'flex',
      alignItems: align,
      justifyContent: justify
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SRow',
  props: {
    align: {
      type: String,
      validate: value =>
        ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'].includes(
          value
        ),
      default: 'flex-start '
    },
    justify: {
      type: String,
      validate: value =>
        [
          'flex-start',
          'flex-end',
          'center',
          'baseline',
          'stretch',
          'space-between',
          'space-around',
          'space-evenly'
        ].includes(value),
      default: 'flex-start '
    }
  }
}
</script>
