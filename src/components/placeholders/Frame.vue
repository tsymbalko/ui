<template>
  <div
    :style="{
      border: '1px solid rgba(0, 0, 0, 0.3)',
      borderRadius: 'var(--border-radius)',
      padding: '16px',
      boxShadow:
        'rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px',
      width: '100%'
    }"
  >
    <slot />
  </div>
</template>
