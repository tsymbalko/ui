<template>
  <div
    :style="{
      borderRadius: 'var(--border-radius)',
      padding: '8px',
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      width: '100%'
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SFrame'
}
</script>
