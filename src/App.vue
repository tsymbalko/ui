<template>
  <BaseTemplate id="app">
    <template #navigation>
      <Navigation :class="{ navigation__active: navigationVisible }" />
    </template>
    <router-view />
    <template #footer>
      <Footer />
      <BackTop />
    </template>
    <template #float>
      <MenuToggle shape="circle" @click="toggleNavigation" />
    </template>
  </BaseTemplate>
</template>

<script>
import { BackTop } from 'atoms'
import { Navigation, Footer, MenuToggle } from 'organisms'
import { BaseTemplate } from 'templates'
import { LayoutLock } from 'mixins'
export default {
  components: {
    BackTop,
    BaseTemplate,
    Navigation,
    Footer,
    MenuToggle
  },
  mixins: [LayoutLock],
  data() {
    return {
      navigationVisible: false
    }
  },
  watch: {
    navigationVisible() {
      if (this.navigationVisible) {
        this.toLockLayout()
      } else {
        this.unlockLayout()
      }
    }
  },
  methods: {
    toggleNavigation() {
      this.navigationVisible = !this.navigationVisible
    }
  }
}
</script>

<style>
@import 'assets/css/common.css';
</style>
