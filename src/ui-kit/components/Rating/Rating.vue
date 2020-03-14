<template>
  <fieldset class="vc-rating" :style="{ '--active-color': color }">
    <legend class="vc-rating_legend">Rating</legend>
    <label
      class="vc-rating_item"
      v-for="rating in quantity"
      :class="{
        'vc-rating_item__selected': value >= rating && value != null,
        'vc-rating_item__disabled': disabled
      }"
      @click="setRating(rating)"
      @mouseover="overRating(rating)"
      @mouseout="outRating"
      :key="rating"
    >
      <input
        class="vc-rating_checkbox"
        type="radio"
        :value="rating"
        :name="name"
        :disabled="disabled"
        v-model="value"
      />
      <Icon :name="icon" class="vc-rating_icon" />
    </label>
  </fieldset>
</template>

<script>
import { Icon } from 'components'
export default {
  name: 'Rating',
  model: {
    prop: 'value',
    event: 'change'
  },
  components: {
    Icon
  },
  props: {
    name: {
      type: String,
      default: 'radio-button-group'
    },
    checked: {
      type: String,
      default: '1'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'star'
    },
    quantity: {
      type: Number,
      default: 5
    },
    color: {
      type: String,
      default: '#FF790E'
    }
  },
  data() {
    return {
      value: this.checked,
      temp_value: null
    }
  },
  methods: {
    overRating(value) {
      if (!this.disabled) {
        this.temp_value = this.value
        this.value = value
      }
    },
    outRating() {
      if (!this.disabled) {
        this.value = this.temp_value
      }
    },
    setRating(value) {
      if (!this.disabled) {
        this.temp_value = value
        this.value = value
        this.$emit('change', value)
      }
    }
  }
}
</script>

<style lang="scss">
@import 'rating';
</style>
