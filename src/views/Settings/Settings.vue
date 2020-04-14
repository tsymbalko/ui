<template>
  <span>
    <SkeletonSettings v-if="loading" />
    <div v-else class="settings">
      <header class="settings_header">
        <Heading divider="right">Settings</Heading>
        <TextLabel>Настройка цветовой схемы приложения и тд и тп</TextLabel>
      </header>
      <Card class="settings_body">
        <div class="settings_list">
          <Heading class="settings_title" level="2">Основные настройки</Heading>
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
          <!--          <div class="settings_item">-->
          <!--            <p>Включить что-нибудь</p>-->
          <!--            <Checkbox v-model="test" value="checkbox1" />-->
          <!--          </div>-->
          <!--          <div class="settings_item">-->
          <!--            <p>Включить что-нибудь</p>-->
          <!--            <Checkbox v-model="test" value="checkbox2" />-->
          <!--          </div>-->
          <!--          <div>-->
          <!--            <Range-->
          <!--              v-model="test3"-->
          <!--              label="Установить border-radius:"-->
          <!--              legend-->
          <!--              :min="2"-->
          <!--              :max="12"-->
          <!--            />-->
          <!--          </div>-->
        </div>
        <div class="settings_footer">
          <Button type="bordered">Закрыть</Button>
          <Button type="primary">Сохранить</Button>
        </div>
      </Card>
    </div>
  </span>
</template>

<script>
import { Color, Heading, TextLabel, Card, Button } from 'components'
import SkeletonSettings from './components/SkeletonSettings'
import { SwitchTheme } from 'organisms'
export default {
  name: 'settings',
  components: {
    Color,
    Heading,
    TextLabel,
    Card,
    SkeletonSettings,
    SwitchTheme,
    Button
  },
  data() {
    return {
      accentColor: getComputedStyle(document.documentElement)
        .getPropertyValue('--accent-color')
        .trim(),
      selectionColor: getComputedStyle(document.documentElement)
        .getPropertyValue('--selection')
        .trim(),
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
    setAccentColor(value) {
      this.accentColor = value
      document.documentElement.style.setProperty('--accent-color', value)
      localStorage.setItem('accent-color', value)
    },
    setSelectionColor(value) {
      this.selectionColor = value
      document.documentElement.style.setProperty('--selection', value)
      localStorage.setItem('selection', value)
    }
  }
}
</script>

<style lang="scss">
@import 'settings';
</style>
