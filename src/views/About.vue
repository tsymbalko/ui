<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
      aliquam amet aperiam doloremque ducimus eligendi, expedita facilis fuga
      hic nulla numquam perspiciatis placeat qui ratione reiciendis tempore
      veniam vero voluptate.
    </p>
    <Button :loading="loading" type="warning">Add members</Button>
    <Button :loading="loading" icon="archive-alt" type="warning">
      Add members
    </Button>
    <Button :loading="loading" icon="archive-alt" type="warning" shape="square">
      Add members
    </Button>
  </div>
</template>

<script>
import { Button } from 'atoms'
export default {
  components: {
    Button
  }
}
</script>
