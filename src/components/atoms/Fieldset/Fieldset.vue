<template>
  <fieldset class="vc-fieldset">
    <legend class="vc-fieldset_legend">
      {{ legend }}
    </legend>
    <slot />
  </fieldset>
</template>

<script>
export default {
  props: {
    legend: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import 'fieldset';
</style>
