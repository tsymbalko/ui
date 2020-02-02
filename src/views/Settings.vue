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
      <ASwitch v-model="checked" @change="toggleAppTheme" />
    </div>
    <div>
      <p
        style="margin-right: 40px;
        display: inline-block;"
      >
        Change brand color:
      </p>
      <Color v-model="brandColor" @change="changeBrandColor" />
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
      checked: false,
      brandColor: getComputedStyle(document.documentElement)
        .getPropertyValue('--secondary')
        .trim()
    }
  },
  mounted() {
    window
      .matchMedia('(prefers-color-scheme: light)')
      .addListener(({ matches }) => {
        this.isLightTheme = matches
        this.checked = false
        delete document.documentElement.dataset.theme
      })
  },
  methods: {
    toggleAppTheme(value) {
      const theme = this.isLightTheme ? 'dark' : 'light'
      this.checked = value
      if (value) {
        document.documentElement.dataset.theme = theme
      } else {
        delete document.documentElement.dataset.theme
      }
    },
    changeBrandColor(value) {
      this.brandColor = value
      document.documentElement.style.setProperty('--secondary', value)
    }
  }
}
</script>
