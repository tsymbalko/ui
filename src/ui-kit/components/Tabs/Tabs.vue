<template>
  <div class="vc-tabs">
    <div class="vc-tabs_nav">
      <span
        class="vc-tabs_line"
        :style="{
          width: `${activeTabWidth}px`,
          transform: `translateX(${currentTabOffset}px)`
        }"
      />
      <button
        v-for="({ id, title }, index) in tabs"
        :key="index"
        :ref="`tab${id}`"
        :class="['vc-tabs_button', { 'vc-tabs_button__active': active === id }]"
        @click="
          event => {
            setActiveTab(id, event)
          }
        "
      >
        {{ title }}
      </button>
    </div>
    <div class="vc-tabs_content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  model: {
    prop: 'activeTab',
    event: 'change'
  },
  props: {
    activeTab: {
      type: Number,
      default: 0
    },
    tabs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeTabWidth: 0,
      currentTabOffset: 0,
      active: this.activeTab,
      children: []
    }
  },
  mounted() {
    this.currentTabOffset = this.$refs[`tab${this.activeTab}`][0].offsetLeft
    this.activeTabWidth = this.$refs[`tab${this.activeTab}`][0].clientWidth
  },
  methods: {
    setIndicator(selector) {
      this.activeTabWidth = selector.offsetWidth
      this.currentTabOffset = selector.offsetLeft
    },
    setActiveTab(id, event) {
      this.$emit('change', id)
      this.setIndicator(event.target)
      this.active = id
    }
  }
}
</script>

<style lang="scss">
@import 'tabs';
</style>
