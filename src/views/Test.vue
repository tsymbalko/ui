<template>
  <div style="padding: 20px;">
    <Button type="success" @click="toggleModal">
      Open modal
    </Button>
    <Modal :visible="visibleModal" @close="closeModal" />
  </div>
</template>

<script>
import { Button } from 'atoms'
import Modal from 'molecules/Modal/Modal'
export default {
  components: {
    Modal,
    Button
  },
  data() {
    return {
      visibleModal: false
    }
  },
  methods: {
    toggleModal() {
      this.visibleModal = !this.visibleModal
    },
    closeModal(value) {
      this.visibleModal = value
    }
  }
}
</script>
<style lang="scss">
@import 'test';
</style>
