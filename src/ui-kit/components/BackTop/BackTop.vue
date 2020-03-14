<template>
  <transition name="vc-back-top__animation">
    <button
      v-show="active"
      ref="backTop"
      class="vc-back-top"
      @click="backToTop"
    >
      <svg
        class="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          ref="backTopCircle"
          class="vc-back-top_circle"
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          :style="{
            strokeDasharray: `${pathLength}`,
            strokeDashoffset: `${progress}`
          }"
        />
      </svg>
      <div class="vc-back-top_arrow" />
    </button>
  </transition>
</template>

<script>
export default {
  name: 'BackTop',
  props: {
    offset: {
      type: Number,
      default: 50
    }
  },
  mounted() {
    this.pathLength = this.$refs.backTopCircle.getTotalLength()
    this.updateProgress()
    window.addEventListener('scroll', this.updateProgress)
    window.addEventListener('scroll', this.setActive)
  },
  data() {
    return {
      active: false,
      progress: 0,
      pathLength: 0
    }
  },
  methods: {
    updateProgress() {
      const height = document.body.clientHeight - window.innerHeight
      this.progress =
        this.pathLength - (window.scrollY * this.pathLength) / height
    },
    setActive() {
      this.active = window.pageYOffset > this.offset ? true : false
    },
    backToTop(event) {
      event.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateProgress)
    window.removeEventListener('scroll', this.setActive)
  }
}
</script>

<style lang="scss">
@import 'backtop';
</style>
