<template>
  <div>
    <h1 class="title">Настройки приложения</h1>
    <div>
      <p
        style="margin-right: 40px;
        margin-bottom: 20px;
        display: inline-block;"
      >
        On {{ isLightTheme ? 'dark' : 'light' }} theme:
      </p>
      <ASwitch v-model="checked" @change="toggleTheme" />
    </div>
    <div>
      <p
        style="margin-right: 40px;
        display: inline-block;"
      >
        Change brand color:
      </p>
      <Color v-model="accentColor" @change="setAccentColor" />
    </div>
  </div>
</template>

<script>
import { ASwitch, Color } from 'atoms'
export default {
  name: 'settings',
  components: {
    ASwitch,
    Color
  },
  data() {
    return {
      isLightTheme: window.matchMedia('(prefers-color-scheme: light)').matches,
      accentColor: getComputedStyle(document.documentElement)
        .getPropertyValue('--accent-color')
        .trim(),
      checked: false
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
    setAccentColor(value) {
      this.accentColor = value
      document.documentElement.style.setProperty('--accent-color', value)
    },
    setTheme(event) {
      this.isLightTheme = event.matches
      this.checked = false
      delete document.documentElement.dataset.theme
    }
  },
  beforeDestroy() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
    mediaQuery.removeListener(this.setTheme)
  }
}
</script>
