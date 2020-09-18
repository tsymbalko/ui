<template>
  <li>
    <button @click="onClick">
      {{ item.label }}
    </button>
  </li>
</template>

<script>
export default {
  props: {
    item: null
  },
  methods: {
    onClick(event) {
      this.$emit('click', {
        originalEvent: event,
        item: this.item
      })
    }
  }
}
</script>
