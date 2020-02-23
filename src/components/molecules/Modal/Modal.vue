<template>
  <div v-if="visible" class="vc-modal">
    <div class="vc-modal_mask">
      <div
        tabindex="-1"
        class="vc-modal_content vc-modal_content--md"
        role="dialog"
        v-click-outside="close"
        style="transform: translate(-50%, 0);"
      >
        <Trap>
          <div class="vc-modal_header">
            <h2 class="vc-modal_title">Simple title</h2>
            <Button
              ref="modalClose"
              class="vc-modal__close-btn"
              icon="multiply"
              shape="square"
              type="ghost"
              aria-label="close modal"
              @click="$emit('close', false)"
            />
          </div>
          <div class="vc-modal_body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in
            obcaecati optio pariatur perferendis porro quasi quisquam soluta
            vero, vitae voluptas voluptate. Accusantium dolor dolorem, molestias
            neque quidem tenetur? Soluta? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Accusamus adipisci consequuntur
            debitis, deserunt ea esse expedita fuga inventore ipsam itaque
            necessitatibus nesciunt nisi nostrum obcaecati perferendis provident
            quia quod tempora! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Atque delectus id minus quisquam reiciendis
            reprehenderit sapiente tempora tenetur! Aperiam esse iure minima
            necessitatibus nisi odit possimus ratione similique voluptas
            voluptatem.
          </div>
          <div class="vc-modal_footer">
            <Button type="bordered" @click="$emit('close', false)">
              Cancel
            </Button>
            <Button icon="archive-alt" type="primary">
              Submit
            </Button>
          </div>
        </Trap>
      </div>
    </div>
  </div>
</template>

<script>
import Trap from 'vue-focus-lock'
import vClickOutside from 'v-click-outside'
import { Button } from 'atoms'
import { LayoutLock } from 'mixins'

export default {
  components: {
    Button,
    Trap
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  mixins: [LayoutLock],
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    visible() {
      if (this.visible) {
        this.toLockLayout()
        this.focusedCloseButton()
        window.addEventListener('keyup', this.handleEscapeKey)
      } else {
        this.unlockLayout()
      }
    }
  },
  methods: {
    handleEscapeKey(e) {
      if (e.code === 'Escape') {
        this.$emit('close', false)
        e.preventDefault()
      }
    },
    focusedCloseButton() {
      //eslint-disable-next-line
      console.log(this.$refs.modalClose)
      this.$nextTick(function() {
        this.$refs.modalClose.$el.focus()
      })
    },
    close() {
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
