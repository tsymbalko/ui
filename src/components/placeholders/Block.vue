<template>
  <div
    :style="{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: justify,
      width: '100%',
      opacity: '.3'
    }"
  >
    <div
      v-for="(item, index) in amount"
      :key="index"
      :style="{
        marginBottom: '8px',
        marginRight: '8px',
        width: `${random(1, 5) * 10}%`
      }"
    >
      <div
        :style="{
          background: background,
          borderRadius: '9999px',
          height: `${size}px`,
          width: '100%'
        }"
      />
    </div>
  </div>
</template>

<script>
import random from '@/helpers/random'

export default {
  props: {
    background: {
      type: String,
      default: 'var(--invers, lightgrey)'
    },
    size: {
      type: Number,
      default: 4
    },
    justify: {
      type: String,
      default: 'flex-start'
    },

    amount: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      random
    }
  }
}
</script>
