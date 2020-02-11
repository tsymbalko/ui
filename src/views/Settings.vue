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
      <CheckboxSwitch v-model="checked" @change="toggleTheme" />
    </div>
    <div>
      <p
        style="margin-right: 40px;
        margin-bottom: 20px;
        display: inline-block;"
      >
        Disable radius ?
      </p>
      <CheckboxSwitch v-model="radius" @change="disabledRadius" />
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
    <div>
      <CheckboxSwitch v-model="radius" @change="disabledRadius" disabled />
    </div>
    <div>
      <CheckboxSwitch v-model="test" @change="disabledRadius" />
    </div>
    <div>
      <Checkbox />
    </div>
    <div>
      <Checkbox disabled />
    </div>
    <div>
      <Radio name="test" id="1" />
    </div>
    <div>
      <Radio name="test" id="2" checked />
    </div>
    <div>
      <Radio name="test" disabled />
    </div>
  </div>
</template>

<script>
import { CheckboxSwitch, Color, Checkbox, Radio } from 'atoms'
export default {
  name: 'settings',
  components: {
    CheckboxSwitch,
    Checkbox,
    Color,
    Radio
  },
  data() {
    return {
      isLightTheme: window.matchMedia('(prefers-color-scheme: light)').matches,
      accentColor: getComputedStyle(document.documentElement)
        .getPropertyValue('--accent-color')
        .trim(),
      checked: false,
      radius: false,
      test: true
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
    }
  },
  beforeDestroy() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
    mediaQuery.removeListener(this.setTheme)
  }
}
</script>
