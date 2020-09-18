<template>
  <transition name="p-connected-overlay" @enter="onEnter" @leave="onLeave">
    <div class="p-menu-list" ref="container" v-if="visibleMenu">
      <ul role="menu">
        <template v-for="(item, i) of model">
          <template v-for="(child, j) of item.items">
            <menu-item
              :key="child.label + i + j"
              :item="child"
              @click="itemClick"
            />
          </template>
        </template>
      </ul>
    </div>
  </transition>
</template>

<script>
import DomHandler from 'helpers/DomHandler'
import MenuItem from './MenuItem.vue'

export default {
  props: {
    model: {
      type: Array,
      default: null
    },
    appendTo: {
      type: String,
      default: null
    },
    autoZIndex: {
      type: Boolean,
      default: true
    },
    baseZIndex: {
      type: Number,
      default: 0
    }
  },
  components: {
    MenuItem
  },
  data() {
    return {
      visibleMenu: false
    }
  },
  target: null,
  outsideClickListener: null,
  resizeListener: null,
  relativeAlign: false,
  beforeDestroy() {
    this.restoreAppend()
    this.unbindResizeListener()
    this.unbindOutsideClickListener()
    this.target = null
  },
  methods: {
    itemClick(event) {
      const item = event.item
      if (item.disabled) {
        return
      }

      if (item.command) {
        item.command(event)
        event.originalEvent.preventDefault()
      }
      this.hide()
    },
    toggle(event) {
      if (this.visibleMenu) this.hide()
      else this.show(event)
    },
    show(event) {
      this.visibleMenu = true
      this.relativeAlign = event.relativeAlign
      //eslint-disable-next-line
      console.log(event.relativeAlign)
      this.target = event.currentTarget
    },
    hide() {
      this.visibleMenu = false
      this.target = false
      this.relativeAlign = false
    },
    onEnter() {
      this.appendContainer()
      this.alignOverlay()
      this.bindOutsideClickListener()
      this.bindResizeListener()

      if (this.autoZIndex) {
        this.$refs.container.style.zIndex = String(
          this.baseZIndex + DomHandler.generateZIndex()
        )
      }
    },
    onLeave() {
      this.unbindOutsideClickListener()
      this.unbindResizeListener()
    },
    alignOverlay() {
      if (this.relativeAlign) {
        DomHandler.relativePosition(this.$refs.container, this.target)
      } else {
        DomHandler.absolutePosition(this.$refs.container, this.target)
        //eslint-disable-next-line
        console.log('absoluteposition')
      }
    },
    bindOutsideClickListener() {
      if (!this.outsideClickListener) {
        this.outsideClickListener = event => {
          if (
            this.visibleMenu &&
            this.$refs.container &&
            !this.$refs.container.contains(event.target) &&
            !this.isTargetClicked(event)
          ) {
            this.hide()
          }
        }
        document.addEventListener('click', this.outsideClickListener)
      }
    },
    unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener('click', this.outsideClickListener)
        this.outsideClickListener = null
      }
    },
    bindResizeListener() {
      if (!this.resizeListener) {
        this.resizeListener = () => {
          if (this.visibleMenu) {
            this.hide()
          }
        }
        window.addEventListener('resize', this.resizeListener)
      }
    },
    unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener('resize', this.resizeListener)
        this.resizeListener = null
      }
    },
    isTargetClicked() {
      return (
        this.target &&
        (this.target === event.target || this.target.contains(event.target))
      )
    },
    appendContainer() {
      if (this.appendTo) {
        if (this.appendTo === 'body')
          document.body.appendChild(this.$refs.container)
        else
          document
            .getElementById(this.appendTo)
            .appendChild(this.$refs.container)
      }
    },
    restoreAppend() {
      if (this.$refs.container && this.appendTo) {
        if (this.appendTo === 'body')
          document.body.removeChild(this.$refs.container)
        else
          document
            .getElementById(this.appendTo)
            .removeChild(this.$refs.container)
      }
    },
    beforeDestroy() {
      this.restoreAppend()
      this.unbindResizeListener()
      this.unbindOutsideClickListener()
      this.target = null
    }
  }
}
</script>

<style>
.p-menu-list {
  position: absolute;
  background-color: var(--base-background);
  border: 1px solid var(--base-border);
  min-width: 12rem;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 1rem;
}
.p-menu-list ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
