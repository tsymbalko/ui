<template>
  <section
    :class="[
      'vc-collapse',
      {
        ['vc-collapse__open']: opened
      }
    ]"
  >
    <button
      class="vc-collapse_header"
      type="button"
      @click="$emit('change', !opened)"
    >
      <p class="vc-collapse_title">
        <slot name="title" />
      </p>
      <i aria-hidden="true" class="vc-collapse_arrow" />
    </button>
    <div v-show="opened" class="vc-collapse_content">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Collapse',
  model: {
    prop: 'opened',
    event: 'change'
  },
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import 'collapse';
</style>
