<template>
  <BaseTemplate id="app">
    <template #navigation>
      <Navigation />
    </template>
    <router-view />
    <template #footer>
      <Footer />
    </template>
  </BaseTemplate>
</template>

<script>
import { Navigation, Footer } from 'organisms'
import { BaseTemplate } from 'templates'
export default {
  components: {
    BaseTemplate,
    Navigation,
    Footer
  }
}
</script>

<style>
@import 'assets/css/common.css';
</style>
