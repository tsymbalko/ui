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
          '--track-width': `${trackWidth}%`,
          '--temp-track-width': `${tempTrackWidth}%`
        }"
        @input="setValue"
        @mousemove="calcTempTrackWidth"
        @mouseleave="resetTempTrackWidth"
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
      this.currentTrackWidth = this.calcTrackWidth()
      this.trackWidth = this.currentTrackWidth
      this.tempTrackWidth = this.currentTrackWidth
    }
  },
  data() {
    return {
      currentTrackWidth: this.calcTrackWidth(),
      trackWidth: this.calcTrackWidth(),
      tempTrackWidth: 0
    }
  },
  methods: {
    calcTrackWidth() {
      return ((Number(this.value) - this.min) * 100) / (this.max - this.min)
    },
    calcTempTrackWidth(event) {
      if (!this.disabled) {
        const width = Number(
          (
            (event.clientX - event.target.offsetLeft) /
            (event.target.offsetWidth / 100)
          ).toFixed(2)
        )
        this.tempTrackWidth = width
        if (this.tempTrackWidth < this.currentTrackWidth) {
          this.tempTrackWidth = this.currentTrackWidth
          this.trackWidth = width
        }
      }
    },
    resetTempTrackWidth() {
      this.tempTrackWidth = this.currentTrackWidth
      this.trackWidth = this.currentTrackWidth
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
