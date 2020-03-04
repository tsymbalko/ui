<template>
  <ul class="vc-breadcrumb">
    <li
      class="vc-breadcrumb_item"
      v-for="({ id, path, icon, label }, index) in routes"
      :key="id"
    >
      <router-link
        :to="path"
        active-class="vc-breadcrumb_link__active"
        exact-active-class="vc-breadcrumb_link__active-exact"
        class="vc-breadcrumb_link"
      >
        <Icon
          v-if="icon"
          width="16"
          height="16"
          class="vc-breadcrumb_icon"
          :name="icon"
        />
        {{ label }}
      </router-link>
      <span v-if="index < routes.length - 1" class="vc-breadcrumb_separator">
        <slot name="separator">/</slot>
      </span>
    </li>
  </ul>
</template>

<script>
import { Icon } from 'atoms'
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
