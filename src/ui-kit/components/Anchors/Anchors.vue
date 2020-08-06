<template>
  <nav class="about_anchor vc-anchor">
    <div class="vc-anchor_list">
      <a
        v-for="{ id, dataset: { title } } in anchorsList"
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
/**
 * Компонент для создания списка якорных ссылок
 */
export default {
  props: {
    /**
     * `class` секций для которых необходимы якорные ссылки ( секция должна иметь обязательные аттрибуты `data-title` `id`)
     */
    selector: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      anchorsList: {},
      observer: {}
    }
  },
  mounted() {
    this.anchorsList = document.querySelectorAll(`.${this.selector}`)
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

      this.anchorsList.forEach(section => {
        this.observer.observe(section)
      })
    }
  },
  beforeDestroy() {
    this.anchorsList.forEach(() => {
      this.observer.disconnect()
    })
  }
}
</script>

<style lang="scss">
@import 'anchors';
</style>
