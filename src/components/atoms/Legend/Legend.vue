<template>
  <ul class="vc-legend">
    <li v-for="{ id, title, value } in legend" class="vc-legend_item" :key="id">
      <p class="vc-legend_title">
        <span class="vc-legend_text">
          {{ title }}
        </span>
      </p>
      <b class="vc-legend_value">
        {{ value }}
      </b>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Legend',
  props: {
    legend: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
@import 'legend';
</style>
