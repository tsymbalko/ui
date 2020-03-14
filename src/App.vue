<template>
  <BaseTemplate id="app">
    <template #navigation>
      <Navigation
        :class="{ navigation__active: navigationVisible }"
        @close="toggleNavigation"
      />
    </template>
    <PageTransition>
      <router-view />
    </PageTransition>
    <template #footer>
      <Footer />
      <BackTop />
    </template>
    <template #float>
      <MenuToggle
        :active="navigationVisible"
        shape="circle"
        @click="toggleNavigation"
      />
    </template>
  </BaseTemplate>
</template>

<script>
import { BackTop, PageTransition } from 'components'
import { Navigation, Footer, MenuToggle } from 'organisms'
import { BaseTemplate } from 'templates'
import { LayoutLock } from 'mixins'
export default {
  components: {
    BackTop,
    BaseTemplate,
    Navigation,
    Footer,
    MenuToggle,
    PageTransition
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
      if (window.innerWidth < 1200) {
        this.navigationVisible = !this.navigationVisible
      }
    }
  }
}
</script>

<style>
@import 'assets/css/common.css';
</style>
