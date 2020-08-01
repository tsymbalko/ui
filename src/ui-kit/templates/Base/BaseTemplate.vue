<template functional>
  <div class="vc-layout">
    <slot name="navigation" />
    <div class="vc-layout_float">
      <slot name="float" />
    </div>
    <slot name="header" />
    <main class="vc-layout_main" id="main">
      <slot />
    </main>
    <slot name="footer" />
  </div>
</template>

<style lang="scss">
@import 'base-template';
</style>
