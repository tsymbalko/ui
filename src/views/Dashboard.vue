<template>
  <div>
    <h1 class="title">Buttons</h1>
    <div style="margin-bottom: 20px;">
      Buttons has 4 states (warning, success, error, warning)
    </div>
    <div class="buttons-example">
      <Button>Add members</Button>
      <Button icon="archive-alt">Add members</Button>
      <Button icon="archive-alt" shape="square">Add members</Button>
      <Button icon="archive-alt" shape="round">Add members</Button>
      <Button icon="archive-alt" shape="circle">Add members</Button>
    </div>
    <div class="buttons-example">
      <Button type="primary">Add members</Button>
      <Button type="primary" icon="archive-alt">Add members</Button>
      <Button type="primary" icon="archive-alt" shape="square"
        >Add members</Button
      >
      <Button type="primary" icon="archive-alt" shape="round"
        >Add members</Button
      >
      <Button type="primary" icon="archive-alt" shape="circle"
        >Add members</Button
      >
    </div>
    <div class="buttons-example">
      <Button type="warning">Add members</Button>
      <Button icon="archive-alt" type="warning">Add members</Button>
      <Button icon="archive-alt" type="warning" shape="square"
        >Add members</Button
      >
      <Button icon="archive-alt" type="warning" shape="round"
        >Add members</Button
      >
      <Button icon="archive-alt" type="warning" shape="circle"
        >Add members</Button
      >
    </div>
    <div class="buttons-example">
      <Button type="error">Add members</Button>
      <Button icon="archive-alt" type="error">Add members</Button>
      <Button icon="archive-alt" type="error" shape="square"
        >Add members</Button
      >
      <Button icon="archive-alt" type="error" shape="round">Add members</Button>
      <Button icon="archive-alt" type="error" shape="circle"
        >Add members</Button
      >
    </div>
    <div class="buttons-example">
      <Button type="success">Add members</Button>
      <Button icon="archive-alt" type="success">Add members</Button>
      <Button icon="archive-alt" type="success" shape="square"
        >Add members</Button
      >
      <Button icon="archive-alt" type="success" shape="round"
        >Add members</Button
      >
      <Button icon="archive-alt" type="success" shape="circle"
        >Add members</Button
      >
    </div>
    <div class="buttons-example">
      <Button type="success" disabled>Add members</Button>
      <Button icon="archive-alt" type="success" disabled>Add members</Button>
      <Button icon="archive-alt" type="success" disabled shape="square"
        >Add members</Button
      >
      <Button icon="archive-alt" type="success" disabled shape="round"
        >Add members</Button
      >
      <Button icon="archive-alt" type="success" disabled shape="circle"
        >Add members</Button
      >
    </div>
  </div>
</template>

<script>
import { Button } from 'atoms'
export default {
  name: 'home',
  components: {
    Button
  }
}
</script>

<style lang="scss">
.buttons-example {
  display: flex;
  align-items: center;
  margin-bottom: 34px;

  & > button {
    margin-right: 20px;
  }
}
</style>
