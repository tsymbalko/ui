<template>
  <Drawer
    class="settings"
    :visible="visible"
    @action="saveSettings"
    @close="closeSettings"
  >
    <template #title>
      Настройки
    </template>
    <div class="settings_list">
      <div class="settings_item">
        <p>Оформление:</p>
        <SwitchTheme v-model="userSettings.theme" />
      </div>
      <div class="settings_item">
        <p>Цветовой акцент:</p>
        <Color
          v-model="userSettings.accent"
          @change="value => setColor('accent', value)"
        />
      </div>
      <div class="settings_item">
        <p>Цвет выделения:</p>
        <Color
          v-model="userSettings.selection"
          @change="value => setColor('selection', value)"
        />
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
      userSettings: {
        theme: null,
        accent: null,
        selection: null
      }
    }
  },
  updated() {
    this.userSettings.accent = getComputedStyle(document.documentElement)
      .getPropertyValue('--accent')
      .trim()
    this.userSettings.selection = getComputedStyle(document.documentElement)
      .getPropertyValue('--selection')
      .trim()
  },
  methods: {
    ...mapMutations(['setActiveDrawer']),

    setColor(name, value) {
      this.userSettings[name] = value
      document.documentElement.style.setProperty(`--${name}`, value)
    },
    closeSettings() {
      this.setActiveDrawer(null)
    },
    saveSettings() {
      //eslint-disable-next-line
      localStorage.setItem('userSettings', JSON.stringify(this.userSettings))
    }
  }
}
</script>

<style lang="scss">
@import 'settings';
</style>
