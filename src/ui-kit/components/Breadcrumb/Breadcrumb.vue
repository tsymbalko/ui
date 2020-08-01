<template>
  <ul class="vc-breadcrumb">
    <li
      class="vc-breadcrumb_item"
      v-for="({ id, to, icon, label, href }, index) in routes"
      :key="id"
    >
      <component
        :to="to"
        :href="href"
        :is="to ? 'router-link' : 'a'"
        active-class="vc-breadcrumb_link__active"
        exact-active-class="vc-breadcrumb_link__active-exact"
        class="vc-breadcrumb_link"
      >
        <Icon v-if="icon" class="vc-breadcrumb_icon" :name="icon" />
        {{ label }}
      </component>
      <span v-if="index < routes.length - 1" class="vc-breadcrumb_separator">
        <slot name="separator">/</slot>
      </span>
    </li>
  </ul>
</template>

<script>
import { Icon } from 'components'
export default {
  name: 'Breadcrumb',
  components: {
    Icon
  },
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
@import 'breadcrumb';
</style>
