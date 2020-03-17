<template>
  <div class="table">
    <div class="table_list">
      <CollapseCard
        v-for="{ id, type } in collapseCards"
        :key="id"
        :type="type"
      />
    </div>
  </div>
</template>

<script>
import CollapseCard from './components/CollapseCard/CollapseCard'
export default {
  components: {
    CollapseCard
  },
  data() {
    return {
      collapseCards: [
        { id: 1, type: 'warning' },
        { id: 2, type: 'success' },
        { id: 3, type: 'warning' },
        { id: 4, type: 'primary' },
        { id: 5, type: 'success' },
        { id: 6, type: 'error' },
        { id: 7, type: 'error' },
        { id: 8, type: 'primary' },
        { id: 9, type: 'warning' },
        { id: 10, type: 'success' }
      ]
    }
  }
}
</script>

<style lang="scss">
@import 'table';
</style>
