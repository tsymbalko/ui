<template>
  <div class="vc-progress-circle" ref="progressCircle">
    <div class="vc-progress-circle_value">{{ value }}%</div>
    <svg
      class="vc-progress-circle_box"
      :viewBox="`0 0 ${size} ${size}`"
      :style="{ width: size, height: size }"
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
          strokeDasharray: `${pathLength}`,
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
      pathLength: 0,
      observer: {}
    }
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
      } else {
        this.progress = this.pathLength
      }
    },
    calculateProgress() {
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
  mounted() {
    this.pathLength = this.progress = this.$refs.circle.getTotalLength()
    this.observerCircle()
  },
  beforeDestroy() {
    this.observer.disconnect(this.$refs.progressCircle)
  }
}
</script>

<style lang="scss">
@import 'progress-circle';
</style>
