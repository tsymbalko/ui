<template>
  <BaseTemplate id="app">
    <template #navigation>
      <Navigation
        :class="{ 'vc-navigation__active': navigationVisible }"
        @close="toggleNavigation"
      />
    </template>
    <Message />
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

import { setCssProperties } from 'helpers/cssProperties'

import { BackTop, PageTransition, Message } from 'components'
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
    Settings,
    Message
  },
  mixins: [layoutLock, focusVisible],
  data() {
    return {
      navigationVisible: false,
      setCssProperties
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
    // get setting in localStorage
    const userSettings = JSON.parse(localStorage.getItem('userSettings'))
    if (userSettings) {
      const { theme, colors } = userSettings
      // set theme
      document.documentElement.dataset.theme = theme
      //set colors
      for (let color in colors) {
        this.setCssProperties(color, colors[color])
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
