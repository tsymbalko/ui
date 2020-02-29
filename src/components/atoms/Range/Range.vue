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
      <span>
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
  computed: {
    trackWidth() {
      return this.calcTrackWidth()
    }
  },
  watch: {
    value() {
      this.calcTrackWidth()
    }
  },
  data() {
    return {
      tempTrackWidth: 0
    }
  },
  methods: {
    calcTrackWidth() {
      return this.value !== ''
        ? ((this.value - this.min) * 100) / (this.max - this.min)
        : 50
    },
    calcTempTrackWidth(event) {
      this.tempTrackWidth = (
        ((event.clientX - event.target.offsetLeft) * 100) /
        event.target.offsetWidth
      ).toFixed(2)
    },
    resetTempTrackWidth() {
      this.tempTrackWidth = 0
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
