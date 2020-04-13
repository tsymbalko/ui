<template>
  <div class="switch-theme">
    <label class="switch-theme_label">
      <input
        type="radio"
        class="switch-theme_input switch-theme_input__light"
        name="switch-theme"
        value="light"
        :checked="theme === 'light'"
        @change="toggleTheme('light')"
      />
      Светлое
    </label>
    <label class="switch-theme_label">
      <input
        type="radio"
        class="switch-theme_input switch-theme_input__dark"
        name="switch-theme"
        value="dark"
        :checked="theme === 'dark'"
        @change="toggleTheme('dark')"
      />
      Темное
    </label>
    <label class="switch-theme_label">
      <input
        type="radio"
        class="switch-theme_input switch-theme_input__no-preference"
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
import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['theme'])
  },
  methods: {
    ...mapMutations(['setTheme']),

    toggleTheme(value) {
      document.documentElement.dataset.theme = value
      this.setTheme(value)
      localStorage.setItem('theme', value)
    }
  }
}
</script>

<style lang="scss">
@import 'switch-theme';
</style>
