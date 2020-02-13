<template>
  <fieldset class="vc-rating">
    <legend>{{ label }}</legend>
    <label
      v-for="(item, index) in quantity"
      class="vc-rating_item"
      :key="index"
    >
      <input
        type="radio"
        class="vc-rating_input"
        :checked="index === 0"
        :name="name"
      />
      <Icon class="vc-rating_icon" name="star" />
    </label>
  </fieldset>
</template>

<script>
import { Icon } from 'atoms'
export default {
  name: 'Rating',
  components: {
    Icon
  },
  props: {
    name: {
      type: String,
      default: 'rating'
    },
    quantity: {
      type: Number,
      default: 5
    },
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import 'rating';
</style>
