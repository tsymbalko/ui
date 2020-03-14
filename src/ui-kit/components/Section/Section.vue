<template>
  <section :id="id" :data-title="title" class="vc-section">
    <h2 class="vc-section_title">
      <template v-if="hiddenTitle">{{ title }}</template>
      <a class="vc-section_link" v-else :href="`#${id}`">
        {{ title }}
      </a>
      <Icon width="30" height="30" name="link" class="vc-section_icon" />
    </h2>
    <slot />
  </section>
</template>

<script>
import { Icon } from 'components'
export default {
  components: {
    Icon
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    hiddenTitle: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import 'section';
</style>
