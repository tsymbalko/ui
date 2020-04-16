<template>
  <transition name="vc-message__animation">
    <div v-if="show && data" class="vc-message">
      <div :class="['vc-message_content', `vc-message_content__${data.type}`]">
        <Button
          class="vc-message_close"
          icon="multiply"
          shape="square"
          @click="close"
        >
          Закрыть
        </Button>
        {{ data.message }}
      </div>
    </div>
  </transition>
</template>

<script>
import Button from '../Button/Button'
export default {
  components: {
    Button
  },
  data() {
    return {
      data: {
        message: '',
        type: 'success'
      },
      show: false,
      timeout: 3000
    }
  },
  created() {
    this.$eventBus.$on('message', data => {
      this.data = data
      this.show = true
      setTimeout(() => {
        this.show = false
      }, this.timeout)
    })
  },
  methods: {
    close() {
      this.show = false
    }
  }
}
</script>

<style lang="scss">
@import 'message';
</style>
