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
      <Checkbox type="switch" v-model="checked" @change="toggleTheme" />
    </div>
    <div>
      <p
        style="margin-right: 40px;
        margin-bottom: 20px;
        display: inline-block;"
      >
        Disable radius ?
      </p>
      <Checkbox type="switch" v-model="radius" @change="disabledRadius" />
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
    <div style="margin-bottom: 14px;">
      <Checkbox v-model="checked" type="switch" />
      <Checkbox v-model="test" value="test1" @change="log" />
      <Checkbox v-model="test" value="test2" />
      <Checkbox v-model="test" value="2" />
      {{ test }}
    </div>
    <div style="margin-bottom: 14px;">
      <Radio name="test" id="1" value="test1" selected="test1" />
    </div>
    <div style="margin-bottom: 14px;">
      <Radio name="test" id="2" value="test2" />
    </div>
  </div>
</template>

<script>
import { Color, Checkbox, Radio } from 'atoms'
export default {
  name: 'settings',
  components: {
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
      test: ['1', '2']
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
