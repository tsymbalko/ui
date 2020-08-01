<template>
  <div class="vc-switch-theme">
    <label class="vc-switch-theme_label">
      <input
        type="radio"
        class="vc-switch-theme_input vc-switch-theme_input__light"
        name="switch-theme"
        value="light"
        :checked="theme === 'light'"
        @change="toggleTheme('light')"
      />
      Светлое
    </label>
    <label class="vc-switch-theme_label">
      <input
        type="radio"
        class="vc-switch-theme_input vc-switch-theme_input__dark"
        name="switch-theme"
        value="dark"
        :checked="theme === 'dark'"
        @change="toggleTheme('dark')"
      />
      Темное
    </label>
    <label class="vc-switch-theme_label">
      <input
        type="radio"
        class="vc-switch-theme_input vc-switch-theme_input__no-preference"
        name="switch-theme"
        value="no-preference"
        :checked="theme === 'no-preference'"
        @change="toggleTheme('no-preference')"
      />
      Системное
    </label>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'theme',
    event: 'change'
  },
  data() {
    return {
      theme: null
    }
  },
  mounted() {
    const userSettings = JSON.parse(localStorage.getItem('userSettings'))
    // TODO  почему не работает userSettings.theme
    userSettings
      ? (this.theme = userSettings.theme)
      : (this.theme = 'no-preference')
    this.$emit('change', this.theme)
  },
  methods: {
    toggleTheme(value) {
      document.documentElement.dataset.theme = value
      this.$emit('change', value)
    }
  }
}
</script>

<style lang="scss">
@import 'switch-theme';
</style>
