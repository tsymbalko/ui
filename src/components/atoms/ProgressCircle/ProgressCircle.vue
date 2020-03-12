<template>
  <div class="vc-progress-circle">
    <svg class="vc-progress-circle_box" viewBox="0 0 100 100">
      <circle class="vc-progress-circle_underlay" cx="50" cy="50" r="48" />
      <circle
        ref="circle"
        class="vc-progress-circle_overlay"
        cx="50"
        cy="50"
        r="48"
        :style="{
          strokeDasharray: `${pathLength}`,
          strokeDashoffset: `${progress}`
        }"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0,
      pathLength: 0,
      value: 10
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
    //eslint-disable-next-line
    console.log(this.$refs.circle.getTotalLength())
    this.pathLength = this.$refs.circle.getTotalLength()
    this.getValue()
    setTimeout(() => {
      this.value = 30
    }, 10000)
    // normalizedValue (): number {
    //   if (this.value < 0) {
    //     return 0
    //   }
    //
    //   if (this.value > 100) {
    //     return 100
    //   }
    //
    //   return parseFloat(this.value)
    // },
    // calculatedSize(): number {
    //   return Number(this.size) + (this.button ? 8 : 0)
    // },
    //
    // circumference(): number {
    //   return 2 * Math.PI * this.radius
    // },
    // strokeDashArray (): number {
    //   return Math.round(this.circumference * 1000) / 1000
    // },
    //
    // strokeDashOffset (): string {
    //   return ((100 - this.normalizedValue) / 100) * this.circumference + 'px'
    // },
    //
    // strokeWidth (): number {
    //   return Number(this.width) / +this.size * this.viewBoxSize * 2
    // }
  }
}
</script>

<style lang="scss">
@import 'progress-circle';
</style>
