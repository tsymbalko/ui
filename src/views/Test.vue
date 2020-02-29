<template>
  <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
    doloribus, error eveniet explicabo iste iure modi molestias nobis porro
    quaerat quia quo repellat tempore. Dignissimos doloremque fugit nisi sed
    sint.
    <Range v-model="test2" />
    <br />
    <Range v-model="test" :min="0" :max="1" :step="0.01" legend disabled />
    <br />
    <Range v-model="test3" label="Label:" :min="20" :step="10" legend />
  </div>
</template>

<script>
import { Range } from 'atoms'
export default {
  components: {
    Range
  },
  data() {
    return {
      test: 0.01,
      test2: 0,
      test3: 10
    }
  }
}
</script>

<style lang="scss">
@import 'test';
</style>
