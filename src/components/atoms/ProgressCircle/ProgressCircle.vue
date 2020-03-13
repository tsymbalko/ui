<template>
  <div class="vc-progress-circle">
    <div class="vc-progress-circle_value">{{ value }}%</div>
    <svg
      class="vc-progress-circle_box"
      :viewBox="`0 0 ${size} ${size}`"
      :style="{ width: size, height: size }"
    >
      <g>
        <circle
          class="vc-progress-circle_underlay"
          :cx="circleCoord"
          :cy="circleCoord"
          :r="radius"
          :style="{
            strokeWidth: strokeWidth
          }"
        />
        <circle
          ref="circle"
          :class="[
            'vc-progress-circle_overlay',
            {
              [`vc-progress-circle_overlay__${type}`]: type
            }
          ]"
          :cx="circleCoord"
          :cy="circleCoord"
          :r="radius"
          :style="{
            strokeDasharray: `${pathLength} ${pathLength}`,
            strokeDashoffset: `${progress}`,
            strokeWidth: strokeWidth
          }"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 10
    },
    size: {
      type: Number,
      default: 140
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      validator: value =>
        ['warning', 'error', 'success', 'primary'].includes(value),
      default: 'primary'
    }
  },
  computed: {
    circleCoord() {
      return this.size / 2
    },
    radius() {
      return this.size / 2 - this.strokeWidth / 2
    }
  },
  data() {
    return {
      progress: 0,
      pathLength: 0
    }
  },
  watch: {
    value() {
      this.getValue()
    }
  },
  methods: {
    getValue() {
      this.progress = this.pathLength - (this.value * this.pathLength) / 100
    }
  },
  mounted() {
    this.pathLength = this.$refs.circle.getTotalLength()
    this.getValue()
  }
}
</script>

<style lang="scss">
@import 'progress-circle';
</style>
