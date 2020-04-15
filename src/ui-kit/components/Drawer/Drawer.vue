<template>
  <transition name="vc-drawer_animation">
    <div
      v-if="visible"
      :class="[
        'vc-drawer',
        { 'vc-drawer__mask': mask },
        { 'vc-drawer__center': center }
      ]"
    >
      <div
        class="vc-drawer_content"
        v-click-outside="closeDrawer"
        :style="{ '--max-width': maxWidth }"
      >
        <FocusLock :no-focus-guards="true">
          <div class="vc-drawer_header">
            <h2 class="vc-drawer_title">
              <slot name="title" />
            </h2>
            <Button
              ref="drawerClose"
              class="vc-drawer__close-btn"
              icon="multiply"
              shape="square"
              type="ghost"
              aria-label="close modal"
              @click="closeDrawer"
            />
          </div>
          <div class="vc-drawer_body">
            <slot />
          </div>
          <div class="vc-drawer_footer">
            <slot name="footer" />
          </div>
        </FocusLock>
      </div>
    </div>
  </transition>
</template>

<script>
import FocusLock from 'vue-focus-lock'
import vClickOutside from 'v-click-outside'
import { Button } from 'components'
import { layoutLock } from 'mixins'

export default {
  name: 'modal',
  components: {
    Button,
    FocusLock
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  mixins: [layoutLock],
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: true
    },
    center: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: '650px'
    }
  },
  watch: {
    visible() {
      if (this.visible) {
        this.toLockLayout()
        window.addEventListener('keyup', this.handleEscapeKey)
      } else {
        this.unlockLayout()
      }
    }
  },
  methods: {
    handleEscapeKey(e) {
      if (e.code === 'Escape') {
        this.closeDrawer()
        e.preventDefault()
      }
    },
    closeDrawer() {
      this.$emit('close', false)
    }
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.handleEscapeKey)
  }
}
</script>

<style lang="scss">
@import 'drawer';
</style>
