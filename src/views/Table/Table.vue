<template>
  <div class="table">
    <div class="table_list">
      <TableCard />
      <TableCard />
      <TableCard />
      <TableCard />
      <TableCard />
      <TableCard />
      <TableCard />
      <TableCard />
      <TableCard />
      <TableCard />
    </div>
  </div>
</template>

<script>
import TableCard from './components/TableCard/TableCard'
export default {
  components: {
    TableCard
  }
}
</script>

<style lang="scss">
@import 'table';
</style>
