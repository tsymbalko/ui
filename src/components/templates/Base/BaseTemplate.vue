<template functional>
  <div class="layout">
    <slot name="navigation" />
    <div class="layout_float">
      <slot name="float" />
    </div>
    <slot name="header" />
    <main class="layout_main" id="main">
      <slot />
    </main>
    <slot name="footer" />
  </div>
</template>

<style lang="scss">
@import 'base-template';
</style>
