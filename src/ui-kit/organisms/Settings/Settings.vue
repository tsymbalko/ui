<template>
  <Drawer :visible="visible" class="settings" @close="closeSettings">
    <template #title>
      Настройки
    </template>
    <div class="settings_list">
      <div class="settings_item">
        <p>Оформление</p>
        <SwitchTheme />
      </div>
      <div class="settings_item">
        <p>Цветовой акцент</p>
        <Color v-model="accentColor" @change="setAccentColor" />
      </div>
      <div class="settings_item">
        <p>Цвет выделения</p>
        <Color v-model="selectionColor" @change="setSelectionColor" />
      </div>
    </div>
  </Drawer>
</template>

<script>
import { mapMutations } from 'vuex'

import { Drawer, Color } from 'components'
import { SwitchTheme } from 'organisms'
export default {
  components: {
    SwitchTheme,
    Drawer,
    Color
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      accentColor: getComputedStyle(document.documentElement)
        .getPropertyValue('--accent-color')
        .trim(),
      selectionColor: getComputedStyle(document.documentElement)
        .getPropertyValue('--selection')
        .trim()
    }
  },
  methods: {
    ...mapMutations(['setActiveDrawer']),
    setAccentColor(value) {
      this.accentColor = value
      document.documentElement.style.setProperty('--accent-color', value)
      localStorage.setItem('accent-color', value)
    },
    setSelectionColor(value) {
      this.selectionColor = value
      document.documentElement.style.setProperty('--selection', value)
      localStorage.setItem('selection', value)
    },
    closeSettings() {
      this.setActiveDrawer(' ')
    }
  }
}
</script>

<style lang="scss">
@import 'settings';
</style>
