<template>
  <transition :name="`vc-modal_animation__${animation}`">
    <div
      v-if="visible"
      :class="[
        'vc-modal',
        { 'vc-modal__mask': mask && !fullscreen },
        { 'vc-modal__center': center },
        { 'vc-modal__fullscreen': fullscreen }
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
              class="vc-modal__close-btn"
              icon="multiply"
              shape="square"
              type="ghost"
              aria-label="close modal"
              @click="closeModal"
            />
          </div>
          <div class="vc-modal_body">
            e consectetur consequatur culpa enim incidunt laboriosam officiis
            recusandae sit. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Accusantium at distinctio eaque ullam vero. Asperiores beatae,
            excepturi fugiat hic officia reiciendis rerum sint. Dolorum eos
            illum incidunt laboriosam nam officia. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Aspernatur blanditiis commodi
            corporis, ea eos ipsa minus, possimus quaerat quam quibusdam rerum,
            sapiente sunt! Commodi enim harum, magnam qui tempora ut? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Animi aut
            consectetur, consequuntur ea enim est hic incidunt labore,
            laboriosam maiores nulla obcaecati quam quas quod sunt totam veniam!
            Ipsa, quaerat.
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
import { Button } from 'atoms'
import { LayoutLock } from 'mixins'

export default {
  components: {
    Button,
    FocusLock
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  mixins: [LayoutLock],
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: true
    },
    animation: {
      type: String,
      validate: value => ['fade-left', 'scale'].includes(value),
      default: 'scale'
    },
    center: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: '650px'
    },
    fullscreen: {
      type: Boolean,
      default: false
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
