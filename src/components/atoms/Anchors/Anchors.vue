<template>
  <nav class="about_anchor vc-anchor">
    <div class="vc-anchor_list">
      <a
        v-for="{ id, dataset: { title } } in nodeList"
        :key="id"
        :href="`#${id}`"
        class="vc-anchor_link"
      >
        {{ title }}
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    selector: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      nodeList: {},
      observer: {}
    }
  },
  mounted() {
    this.nodeList = document.querySelectorAll(this.selector)
    this.observerAnchors()
  },
  methods: {
    toggleActive(link) {
      const id = link.target.getAttribute('id')
      if (link.intersectionRatio > 0) {
        document
          .querySelector(`.vc-anchor_list a[href="#${id}"]`)
          .classList.add('vc-anchor_link__active')
      } else {
        document
          .querySelector(`.vc-anchor_list a[href="#${id}"]`)
          .classList.remove('vc-anchor_link__active')
      }
    },
    observerAnchors() {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          this.toggleActive(entry)
        })
      })

      this.nodeList.forEach(section => {
        this.observer.observe(section)
      })
    }
  },
  beforeDestroy() {
    this.nodeList.forEach(section => {
      this.observer.disconnect(section)
    })
  }
}
</script>

<style lang="scss">
@import 'anchors';
</style>
