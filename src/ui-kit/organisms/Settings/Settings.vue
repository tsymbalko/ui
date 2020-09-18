<template>
  <Drawer
    class="settings"
    :visible="visible"
    @action="saveSettings"
    @close="closeSettings"
  >
    <template #title> Настройки </template>
    <div class="settings_list">
      <div class="settings_item">
        <p class="settings_label">Оформление:</p>
        <SwitchTheme v-model="userSettings.theme" />
      </div>
      <div class="settings_item">
        <p class="settings_label">Цветовой акцент:</p>
        <Color
          v-model="userSettings.colors.accent"
          @change="value => setColor('accent', value)"
        />
      </div>
      <div class="settings_item">
        <p class="settings_label">Цвет выделения:</p>
        <Color
          v-model="userSettings.colors.selection"
          @change="value => setColor('selection', value)"
        />
      </div>
    </div>
    <template slot="footer">
      <Button
        type="error"
        shape="rectangle"
        icon="trash-alt"
        @click="resetSettings"
      >
        Сбросить
      </Button>
      <Button type="primary" @click="saveSettings">
        Сохранить
      </Button>
    </template>
  </Drawer>
</template>

<script>
import { mapMutations } from 'vuex'

import DomHandler from 'helpers/DomHandler'

import { Drawer, Color, Button } from 'components'
import { SwitchTheme } from 'organisms'

export default {
  components: {
    SwitchTheme,
    Drawer,
    Color,
    Button
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
        colors: {
          accent: null,
          selection: null
        }
      }
    }
  },
  watch: {
    // TODO как нормально чекать изменения
    visible() {
      if (this.visible) {
        for (let key in this.userSettings.colors) {
          this.userSettings.colors[key] = DomHandler.getCssProperties(key)
        }
      }
    }
  },
  methods: {
    ...mapMutations(['setActiveDrawer']),

    closeSettings() {
      this.setActiveDrawer(null)
    },
    saveSettings() {
      localStorage.setItem('userSettings', JSON.stringify(this.userSettings))
      this.$eventBus.$emit('message', {
        type: 'success',
        message: 'Настройки сохранены'
      })
      this.closeSettings()
    },
    setColor(name, value) {
      this.userSettings.colors[name] = value
      DomHandler.setCssProperties(name, value)
    },
    resetSettings() {
      localStorage.removeItem('userSettings')
      this.$eventBus.$emit('message', {
        type: 'error',
        message: 'Страница будет перезагружена'
      })
      setTimeout(() => {
        document.location.reload()
      }, 4000)
      this.closeSettings()
    }
  }
}
</script>

<style lang="scss">
@import 'settings';
</style>
