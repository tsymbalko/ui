<template>
  <div :style="frameStyles">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SFrame',
  data() {
    return {
      frameStyles: {
        borderRadius: 'var(--border-radius)',
        padding: '8px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        width: '100%',
        background:
          'linear-gradient(90deg, transparent 25%, var(--skeleton) 37%, transparent 63%)',
        backgroundSize: '400% 100%',
        animation: 'skeleton-loading 2s ease infinite'
      }
    }
  }
}
</script>
