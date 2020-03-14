<template>
  <div>
    <Heading divider="right">Settings you application</Heading>
    <TextLabel>Настройка цветовой схемы приложения и тд и тп</TextLabel>
    <br />
    <br />
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
      <li>
        <Checkbox v-model="test" value="checkbox4" label="Checkbox" disabled />
      </li>
      <li>Selected checkbox {{ test }}</li>
      <li>
        <Radio v-model="test2" label="Radio 1" name="name" value="1" />
      </li>
      <li>
        <Radio v-model="test2" label="Radio 2" name="name" value="2" />
      </li>
      <li>
        <Radio v-model="test2" label="Radio 3" name="name" value="3" disabled />
      </li>
      <li>
        <Range v-model="test3" legend />
        <br />
        <Range v-model="test5" :min="0" :max="1" :step="0.01" legend />
        <Range v-model="test5" :min="0" :max="1" :step="0.01" legend disabled />
        <br />
        <Range v-model="test4" label="Label:" :min="20" :step="10" legend />
      </li>
    </ul>
  </div>
</template>

<script>
import { Color, Checkbox, Radio, Range, Heading, TextLabel } from 'components'
export default {
  name: 'settings',
  components: {
    Checkbox,
    Color,
    Radio,
    Range,
    Heading,
    TextLabel
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
      test3: 34,
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
.example-list {
  list-style: none;

  li {
    margin-bottom: 20px;
  }
}
</style>
