<template>
  <div
    :class="['vc-progress-line', { [`vc-progress-line__${type}`]: type }]"
    :style="{
      '--main-color': color,
      '--stroke': `${stroke}px`,
      '--width': `${percent}%`
    }"
  >
    <div v-if="showInfo" class="vc-progress-line_value">{{ percent }}%</div>
    <div
      :class="[
        'vc-progress-line_bg',
        { [`vc-progress-line_bg__${shape}`]: shape }
      ]"
    >
      <div class="vc-progress-line_bar" />
    </div>
    <div class="vc-progress-line_info" v-if="icon || desc || legend">
      <div class="vc-progress-line_legend">
        <Icon
          v-if="icon"
          class="vc-progress-line_icon"
          :name="icon"
          width="24"
          height="24"
        />
        {{ legend }}
      </div>
      <span v-if="legend" class="vc-progress-line_desc">{{ desc }}</span>
    </div>
  </div>
</template>

<script>
import Icon from '../Icon/Icon'
export default {
  name: 'ProgressLine',
  components: {
    Icon
  },
  //TODO сделать прогресс бар на массив
  props: {
    percent: {
      type: Number,
      default: 0
    },
    icon: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    legend: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    showInfo: {
      type: Boolean,
      default: true
    },
    stroke: {
      type: Number,
      default: 6
    },
    shape: {
      type: String,
      validator: value => ['round', 'rectangle'].includes(value),
      default: 'round'
    },
    type: {
      type: String,
      validator: value =>
        ['warning', 'error', 'success', 'primary', ''].includes(value),
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import 'progress-line';
</style>
