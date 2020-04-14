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
    <Settings :visible="activeDrawer === 'settings'" />
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
import { mapState } from 'vuex'

import { BackTop, PageTransition } from 'components'
import { Navigation, Footer, MenuToggle, Settings } from 'organisms'
import { BaseTemplate } from 'templates'
import { layoutLock, focusVisible } from 'mixins'
export default {
  components: {
    BackTop,
    BaseTemplate,
    Navigation,
    Footer,
    MenuToggle,
    PageTransition,
    Settings
  },
  mixins: [layoutLock, focusVisible],
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
  computed: {
    ...mapState(['activeDrawer'])
  },
  mounted() {
    this.focusVisible()
    // set theme while loading
    const theme = localStorage.getItem('theme')
    if (theme) {
      document.documentElement.dataset.theme = theme
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
