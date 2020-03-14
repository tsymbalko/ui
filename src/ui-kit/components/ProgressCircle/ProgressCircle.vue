<template>
  <div class="vc-progress-circle" ref="progressCircle">
    <div v-if="showValue" class="vc-progress-circle_value">{{ value }}%</div>
    <svg
      class="vc-progress-circle_box"
      :viewBox="`0 0 ${size} ${size}`"
      :style="{ width: `${size}px`, height: `${size}px` }"
    >
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
          strokeDasharray: `${pathLength}, ${pathLength}`,
          strokeDashoffset: `${progress}`,
          strokeWidth: strokeWidth
        }"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 140
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    animation: {
      type: Boolean,
      default: false
    },
    showValue: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      validator: value =>
        ['warning', 'error', 'success', 'primary'].includes(value),
      default: 'primary'
    }
  },
  data() {
    return {
      progress: 0,
      pathLength: 0,
      observer: {}
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
  mounted() {
    this.pathLength = this.progress = 2 * Math.PI * this.radius
    if (this.animation) {
      this.observerCircle()
      return
    }
    this.calculateProgress()
  },
  watch: {
    value() {
      this.calculateProgress()
    }
  },
  methods: {
    toggleActive(circle) {
      if (circle.intersectionRatio >= 0.5) {
        this.calculateProgress()
        return
      }
      this.progress = 0
    },
    calculateProgress() {
      if (this.value >= 100) {
        this.progress = 0
        return
      }
      this.progress = this.pathLength - (this.value * this.pathLength) / 100
    },
    observerCircle() {
      this.observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            this.toggleActive(entry)
          })
        },
        { threshold: 0.5 }
      )
      this.observer.observe(this.$refs.progressCircle)
    }
  },
  beforeDestroy() {
    if (this.animation) {
      this.observer.disconnect()
    }
  }
}
</script>

<style lang="scss">
@import 'progress-circle';
</style>
