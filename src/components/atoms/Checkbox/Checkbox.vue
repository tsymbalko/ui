<template>
  <label class="vc-checkbox">
    <input
      type="checkbox"
      class="vc-checkbox_input"
      :class="`vc-checkbox_input__${type}`"
      :value="value"
      :disabled="disabled"
      :checked="shouldBeChecked"
      @change="updateInput"
    />
    <span v-if="label" class="vc-checkbox_label">
      {{ label }}
    </span>
  </label>
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
    },
    label: {
      type: String,
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
