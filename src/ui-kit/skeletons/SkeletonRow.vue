<template>
  <div
    :style="{
      display: 'flex',
      alignItems: align
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
    }
  }
}
</script>
