<template>
  <div class="vc-range">
    <label>
      {{ label }}
      <input
        type="range"
        class="vc-range_input"
        :value="value"
        :min="min"
        :max="max"
        :step="step"
        :disabled="disabled"
        :style="{
          '--before-value': `${widthBeforeValue}%`,
          '--after-value': `${widthAfterValue}%`
        }"
        @input="setValue"
        @mousemove="setWidthValues"
        @mouseleave="resetWidthValues"
      />
    </label>
    <div v-if="legend" class="vc-range_legend">
      <span>
        {{ min }}
        <sup>min</sup>
      </span>
      <span class="vc-range_value">
        {{ value }}
      </span>
      <span>
        {{ max }}
        <sup>max</sup>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Range',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      validator: v =>
        typeof v === 'string' || v === null || typeof v === 'number',
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    legend: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    }
  },
  //TODO Связать минмальное значение и значение
  watch: {
    value() {
      this.widthValue = this.calcWidthValue()
      this.widthBeforeValue = this.widthAfterValue = this.widthValue
    }
  },
  data() {
    return {
      widthValue: this.calcWidthValue(),
      widthBeforeValue: this.calcWidthValue(),
      widthAfterValue: 0
    }
  },
  methods: {
    calcWidthValue() {
      return ((Number(this.value) - this.min) * 100) / (this.max - this.min)
    },
    setWidthValues(event) {
      if (!this.disabled) {
        const width = Number(
          event.offsetX / (event.target.offsetWidth / 100)
        ).toFixed(2)
        if (width < this.widthValue) {
          this.widthAfterValue = this.widthValue
          this.widthBeforeValue = width
        } else {
          this.widthAfterValue = width
        }
      }
    },
    resetWidthValues() {
      this.widthAfterValue = this.widthBeforeValue = this.widthValue
    },
    setValue(event) {
      if (event.target.value >= this.max) {
        this.$emit('input', this.max)
      } else if (event.target.value <= this.min) {
        this.$emit('input', this.min)
      } else {
        this.$emit('input', event.target.value)
      }
    }
  }
}
</script>

<style lang="scss">
@import 'range';
</style>
