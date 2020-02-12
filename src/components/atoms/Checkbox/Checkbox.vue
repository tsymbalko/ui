<template>
  <input
    type="checkbox"
    class="vc-checkbox"
    :class="`vc-checkbox__${type}`"
    :value="value"
    :disabled="disabled"
    :checked="shouldBeChecked"
    @change="updateInput"
  />
</template>

<script>
export default {
  name: 'Checkbox',
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      validator: value => ['checkbox', 'switch'].includes(value),
      default: 'checkbox'
    },
    selected: {
      validator: value => Array.isArray(value) || typeof value === 'boolean',
      default: false
    },
    value: {
      validator: value =>
        typeof value === 'number' ||
        typeof value === 'string' ||
        typeof value === 'boolean',
      default: ''
    }
  },

  computed: {
    shouldBeChecked() {
      return Array.isArray(this.selected)
        ? this.selected.includes(this.value)
        : this.selected
    }
  },
  methods: {
    updateInput(event) {
      const checked = event.target.checked
      if (Array.isArray(this.selected)) {
        if (this.single) {
          this.$emit('change', [this.value])
          return
        }

        const selected = checked
          ? [...this.selected, this.value]
          : this.selected.filter(value => value !== this.value)

        this.$emit('change', selected)
      } else {
        this.$emit('change', checked)
      }
    }
  }
}
</script>

<style lang="scss">
@import 'checkbox';
</style>
