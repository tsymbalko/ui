<template>
  <ul class="vc-legend">
    <li v-for="{ id, title, value } in legend" class="vc-legend_item" :key="id">
      <p class="vc-legend_title">
        <b class="vc-legend_text">
          {{ title }}
        </b>
      </p>
      <span class="vc-legend_value">
        {{ value }}
      </span>
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
