<template>
  <Card>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem
      doloremque exercitationem harum laudantium, maxime obcaecati officia
      placeat quae quaerat quam quasi quos reiciendis repudiandae saepe sequi
      similique, sunt voluptatum?Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Autem dolorem doloremque exercitationem harum
      laudantium, maxime obcaecati officia placeat quae quaerat quam quasi quos
      reiciendis repudiandae saepe sequi similique, sunt voluptatum?Lorem ipsum
      dolor sit amet, consectetur adipisicing elit. Autem dolorem doloremque
      exercitationem harum laudantium, maxime obcaecati officia placeat quae
      quaerat quam quasi quos reiciendis repudiandae saepe sequi similique, sunt
      voluptatum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
      dolorem doloremque exercitationem harum laudantium, maxime obcaecati
      officia placeat quae quaerat quam quasi quos reiciendis repudiandae saepe
      sequi similique, sunt voluptatum?Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Autem dolorem doloremque exercitationem harum
      laudantium, maxime obcaecati officia placeat quae quaerat quam quasi quos
      reiciendis repudiandae saepe sequi similique, sunt voluptatum?Lorem ipsum
      dolor sit amet, consectetur adipisicing elit. Autem dolorem doloremque
      exercitationem harum laudantium, maxime obcaecati officia placeat quae
      quaerat quam quasi quos reiciendis repudiandae saepe sequi similique, sunt
      voluptatum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
      dolorem doloremque exercitationem harum laudantium, maxime obcaecati
      officia placeat quae quaerat quam quasi quos reiciendis repudiandae saepe
      sequi similique, sunt voluptatum?
    </p>
    <div style="display: flex; justify-content: flex-end; position: relative;">
      <div style="position: relative; display: inline-block;">
        <Button
          ref="target"
          @click="toggleMenu"
          icon="ellipsis-v"
          shape="square"
        >
          Button
        </Button>
        <transition name="menu-animation" @enter="onEnter">
          <div
            v-if="visibleMenu"
            class="menu"
            ref="container"
            v-click-outside="toggleMenu"
          >
            <ul class="menu_list">
              <li v-for="(item, index) in 6" :key="index" class="menu_item">
                <button class="menu_button" @click="toggleMenu">
                  MenuItem
                </button>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
    <Button>
      Button
    </Button>
    <Button>
      Button
    </Button>
    <Button>
      Button
    </Button>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem
      doloremque exercitationem harum laudantium, maxime obcaecati officia
      placeat quae quaerat quam quasi quos reiciendis repudiandae saepe sequi
      similique, sunt voluptatum?Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Autem dolorem doloremque exercitationem harum
      laudantium, maxime obcaecati officia placeat quae quaerat quam quasi quos
      reiciendis repudiandae saepe sequi similique, sunt voluptatum?Lorem ipsum
      dolor sit amet, consectetur adipisicing elit. Autem dolorem doloremque
      exercitationem harum laudantium, maxime obcaecati officia placeat quae
      quaerat quam quasi quos reiciendis repudiandae saepe sequi similique, sunt
      voluptatum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
      dolorem doloremque exercitationem harum laudantium, maxime obcaecati
      officia placeat quae quaerat quam quasi quos reiciendis repudiandae saepe
      sequi similique, sunt voluptatum?Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Autem dolorem doloremque exercitationem harum
      laudantium, maxime obcaecati officia placeat quae quaerat quam quasi quos
      reiciendis repudiandae saepe sequi similique, sunt voluptatum?Lorem ipsum
      dolor sit amet, consectetur adipisicing elit. Autem dolorem doloremque
      exercitationem harum laudantium, maxime obcaecati officia placeat quae
      quaerat quam quasi quos reiciendis repudiandae saepe sequi similique, sunt
      voluptatum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
      dolorem doloremque exercitationem harum laudantium, maxime obcaecati
      officia placeat quae quaerat quam quasi quos reiciendis repudiandae saepe
      sequi similique, sunt voluptatum?
    </p>
  </Card>
</template>

<script>
import { Card, Button } from 'components'
import domHandlers from './domHandlers.js'
import vClickOutside from 'v-click-outside'

export default {
  components: {
    Card,
    Button
  },
  props: {
    appendTo: {
      type: String,
      default: ''
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      visibleMenu: false
    }
  },
  target: null,
  methods: {
    showMenu(event) {
      this.visibleMenu = true
      this.target = event.currentTarget
    },
    hideMenu() {
      this.visibleMenu = false
      this.target = null
    },
    toggleMenu(event) {
      if (this.visibleMenu) {
        this.hideMenu()
      } else {
        this.showMenu(event)
      }
    },
    onEnter() {
      this.appendContainer()
      this.alignOverlay()
    },
    alignOverlay() {
      domHandlers.relativePosition(this.$refs.container, this.target)
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
    beforeDestroy() {
      this.target = null
    }
  }
}
</script>

<style lang="scss">
@import 'input';
.menu {
  position: absolute;
  z-index: 4;
  width: 12rem;
  max-width: 12rem;
  border-radius: 4px;
  background-color: var(--light-blue);

  &_list {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  &_item {
  }

  &_button {
    width: 100%;
    text-align: left;
    padding: 8px 10px;
  }
}
.menu-animation {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.2s ease-in, transform 0.2s ease-in;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
