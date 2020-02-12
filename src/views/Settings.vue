<template>
  <div>
    <h1 class="title">Настройки приложения</h1>
    <ul class="example-list">
      <li>
        <Checkbox
          type="switch"
          v-model="checked"
          @change="toggleTheme"
          :label="`On ${isLightTheme ? 'dark' : 'light'} theme`"
        />
      </li>
      <li>
        <Checkbox
          type="switch"
          v-model="radius"
          @change="disabledRadius"
          label="Disable radius ?"
        />
      </li>
      <li>
        <Color v-model="accentColor" @change="setAccentColor" />
        Change brand color:
      </li>
      <li>
        <Checkbox
          v-model="test"
          value="checkbox1"
          label="Checkbox"
          @change="log"
        />
      </li>
      <li>
        <Checkbox v-model="test" value="checkbox2" label="Checkbox" />
      </li>
      <li>
        <Checkbox v-model="test" value="checkbox3" label="Checkbox" />
      </li>
      <li>Selected checkbox {{ test }}</li>
      <li>
        <Radio v-model="test2" label="Radio 1" name="name" value="1" />
      </li>
      <li>
        <Radio v-model="test2" label="Radio 2" name="name" value="2" />
      </li>
    </ul>
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
      test: ['checkbox1', 'checkbox2'],
      test2: '1'
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
.example-list {
  list-style: none;

  li {
    margin-bottom: 20px;
  }
}
</style>
