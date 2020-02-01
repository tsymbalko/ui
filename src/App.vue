<template>
  <BaseTemplate id="app">
    <template #navigation>
      <Navigation />
    </template>
    <template #header>
      <Header />
    </template>
    <router-view />
    <template #footer>
      <Footer />
    </template>
  </BaseTemplate>
</template>

<script>
import { Navigation, Header, Footer } from 'organisms'
import { BaseTemplate } from 'templates'
export default {
  components: {
    BaseTemplate,
    Navigation,
    Header,
    Footer
  }
}
</script>

<style>
@import 'assets/css/common.css';
</style>
