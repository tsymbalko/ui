<template functional>
  <div class="layout">
    <slot name="navigation" />
    <slot name="header" />
    <main class="layout_main" id="main">
      <slot />
    </main>
    <slot name="footer" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import 'base-template';
</style>
