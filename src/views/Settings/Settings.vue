<template>
  <span>
    <SkeletonSettings v-if="loading" />
    <div v-else class="settings">
      <header class="settings_header">
        <Heading divider="right">Settings</Heading>
        <TextLabel>Настройка цветовой схемы приложения и тд и тп</TextLabel>
      </header>
      <Card class="settings_body">
        <div>
          <Heading class="settings_title" level="2">Основные настройки</Heading>
          <div class="settings_item">
            <p>Оформление</p>
            <SwitchTheme />
          </div>
          <div class="settings_item">
            <p>Выключить border-radius</p>
            <Checkbox type="switch" v-model="radius" @change="disabledRadius" />
          </div>
          <div class="settings_item">
            <p>Включить что-нибудь</p>
            <Checkbox v-model="test" value="checkbox1" />
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
  </span>
</template>

<script>
import { Color, Checkbox, Range, Heading, TextLabel, Card } from 'components'
import SkeletonSettings from './components/SkeletonSettings'
import { SwitchTheme } from 'organisms'
export default {
  name: 'settings',
  components: {
    Checkbox,
    Color,
    Range,
    Heading,
    TextLabel,
    Card,
    SkeletonSettings,
    SwitchTheme
  },
  data() {
    return {
      accentColor: getComputedStyle(document.documentElement)
        .getPropertyValue('--accent-color')
        .trim(),
      radius: false,
      test: ['checkbox1', 'checkbox2'],
      test3: 4,
      loading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  methods: {
    disabledRadius(value) {
      this.radius = value
      const radius = value ? '0px' : '4px'
      document.documentElement.style.setProperty('--border-radius', radius)
    },

    setAccentColor(value) {
      this.accentColor = value
      document.documentElement.style.setProperty('--accent-color', value)
    }
  }
}
</script>

<style lang="scss">
@import 'settings';
</style>
