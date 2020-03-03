<template>
  <BaseTemplate id="app">
    <template #navigation>
      <Navigation />
    </template>
    <router-view />
    <template #footer>
      <Footer />
    </template>
    <BackTop />
  </BaseTemplate>
</template>

<script>
import { BackTop } from 'atoms'
import { Navigation, Footer } from 'organisms'
import { BaseTemplate } from 'templates'
export default {
  components: {
    BackTop,
    BaseTemplate,
    Navigation,
    Footer
  }
}
</script>

<style>
@import 'assets/css/common.css';
</style>
