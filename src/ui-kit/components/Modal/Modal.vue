<template>
  <transition name="vc-modal__animation">
    <div
      v-if="visible"
      :class="[
        'vc-modal',
        { 'vc-modal__mask': mask },
        { 'vc-modal__center': center },
        { 'vc-modal__visible': visible }
      ]"
    >
      <div
        class="vc-modal_content"
        role="dialog"
        v-click-outside="closeModal"
        :style="{ '--max-width': maxWidth }"
      >
        <FocusLock :no-focus-guards="true">
          <div class="vc-modal_header">
            <h2 class="vc-modal_title">Simple title</h2>
            <Button
              ref="modalClose"
              class="vc-modal_close"
              icon="multiply"
              shape="square"
              variant="ghost"
              color="secondary"
              aria-label="close"
              @click="closeModal"
            />
          </div>
          <div class="vc-modal_body">
            <slot />
          </div>
          <div class="vc-modal_footer">
            <Button type="bordered" @click="closeModal">
              Cancel
            </Button>
            <Button icon="archive-alt" type="primary">
              Submit
            </Button>
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
  name: 'Modal',
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
        this.closeModal()
        e.preventDefault()
      }
    },
    closeModal() {
      this.$emit('close', false)
    }
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.handleEscapeKey)
  }
}
</script>

<style lang="scss">
@import 'modal';
</style>
