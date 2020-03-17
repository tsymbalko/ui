<template>
  <div class="settings">
    <header class="settings_header">
      <Heading divider="right">Settings you application</Heading>
      <TextLabel>Настройка цветовой схемы приложения и тд и тп</TextLabel>
    </header>
    <Card class="settings_body">
      <div>
        <Heading class="settings_title" level="2">Основные настройки</Heading>
        <div class="settings_item">
          <p>Включить {{ `${isLightTheme ? 'dark' : 'light'}` }} тему</p>
          <Checkbox type="switch" v-model="checked" @change="toggleTheme" />
        </div>
        <div class="settings_item">
          <p>Выключить border-radius</p>
          <Checkbox type="switch" v-model="radius" @change="disabledRadius" />
        </div>
        <div class="settings_item">
          <p>Включить что-нибудь</p>
          <Checkbox v-model="test" value="checkbox1" @change="log" />
        </div>
        <div class="settings_item">
          <p>Включить что-нибудь</p>
          <Checkbox v-model="test" value="checkbox2" />
        </div>
        <div>
          <Range
            v-model="test3"
            label="Установить border-radius:"
            legend
            :min="2"
            :max="12"
          />
        </div>
      </div>
      <div>
        <Heading class="settings_title" level="2">Натсройка темы</Heading>
        <div class="settings_item">
          <p>Установить цвет приложения</p>
          <Color v-model="accentColor" @change="setAccentColor" />
        </div>
        <div class="settings_item">
          <p>Установить цвет приложения</p>
          <Color v-model="accentColor" @change="setAccentColor" />
        </div>
        <div class="settings_item">
          <p>Установить цвет приложения</p>
          <Color v-model="accentColor" @change="setAccentColor" />
        </div>
        <div class="settings_item">
          <p>Установить цвет приложения</p>
          <Color v-model="accentColor" @change="setAccentColor" />
        </div>
        <div class="settings_item">
          <p>Установить цвет приложения</p>
          <Color v-model="accentColor" @change="setAccentColor" />
        </div>
        <div>Выбранные элементы {{ test }}</div>
      </div>
    </Card>
  </div>
</template>

<script>
import {
  Color,
  Checkbox,
  Range,
  Heading,
  TextLabel,
  Card
} from '@/ui-kit/components'
export default {
  name: 'settings',
  components: {
    Checkbox,
    Color,
    Range,
    Heading,
    TextLabel,
    Card
  },
  data() {
    return {
      isLightTheme: window.matchMedia('(prefers-color-scheme: light)').matches,
      accentColor: getComputedStyle(document.documentElement)
        .getPropertyValue('--accent-color')
        .trim(),
      checked: false,
      radius: false,
      test: ['checkbox1', 'checkbox2'],
      test2: '1',
      test3: 4,
      test4: 10,
      test5: 0.02
    }
  },
  mounted() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
    mediaQuery.addListener(this.setTheme)
  },
  methods: {
    toggleTheme(value) {
      this.checked = value
      const theme = this.isLightTheme ? 'dark' : 'light'
      value
        ? (document.documentElement.dataset.theme = theme)
        : delete document.documentElement.dataset.theme
    },

    disabledRadius(value) {
      this.radius = value
      const radius = value ? '0px' : '4px'
      document.documentElement.style.setProperty('--border-radius', radius)
    },

    setAccentColor(value) {
      this.accentColor = value
      document.documentElement.style.setProperty('--accent-color', value)
    },
    setTheme(event) {
      this.isLightTheme = event.matches
      this.checked = false
      delete document.documentElement.dataset.theme
    },
    log() {
      //eslint-disable-next-line
      console.log(123)
    }
  },
  beforeDestroy() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
    mediaQuery.removeListener(this.setTheme)
  }
}
</script>

<style lang="scss">
@import 'settings';
</style>
