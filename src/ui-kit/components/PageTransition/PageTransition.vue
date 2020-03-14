<template>
  <transition name="page-transition" mode="out-in">
    <slot />
  </transition>
</template>

<style lang="scss">
@import 'page-transition';
</style>
