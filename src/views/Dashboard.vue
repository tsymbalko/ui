<template>
  <div>
    <h1 class="title">Buttons</h1>
    <div style="margin-bottom: 20px;">
      Buttons has 4 states (warning, success, error, warning)
    </div>
    <div class="example-spinner">
      <Tag icon="archive-alt">183%</Tag>
      <Tag icon="archive-alt" color="#3796f6">Text</Tag>
      <Tag icon="archive-alt" color="#ff790e">Text Value</Tag>
      <Tag icon="archive-alt" color="#ec547a">183%</Tag>
      <Tag icon="archive-alt" color="#5bceae">183%</Tag>
    </div>
    <div class="example-spinner">
      <Tag closable icon="archive-alt">183%</Tag>
      <Tag closable icon="archive-alt" color="#3796f6">Text</Tag>
      <Tag closable icon="archive-alt" color="#ff790e">Text Value</Tag>
      <Tag closable icon="archive-alt" color="#ec547a">183%</Tag>
      <Tag closable icon="archive-alt" color="#5bceae">183%</Tag>
    </div>
    <div class="example-spinner">
      <div class="buttons-example">
        <Spinner type="plane" />
        <Spinner type="bounce" />
        <Spinner type="pulse" />
      </div>
      <div class="buttons-example">
        <Spinner type="plane" color="#ff790e" />
        <Spinner type="bounce" color="#ff790e" />
        <Spinner type="pulse" color="#ff790e" />
      </div>
      <div class="buttons-example">
        <Spinner type="plane" color="#ec547a" />
        <Spinner type="bounce" color="#ec547a" />
        <Spinner type="pulse" color="#ec547a" />
      </div>
    </div>
    <div class="buttons-example">
      <Button type="primary">Add members</Button>
      <Button type="primary" icon="archive-alt" icon-position="left"
        >Add members</Button
      >
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
      <Button icon="archive-alt" type="warning" icon-position="left"
        >Add members</Button
      >
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
      <Button icon="archive-alt" type="error" icon-position="left"
        >Add members</Button
      >
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
      <Button icon="archive-alt" type="success" icon-position="left"
        >Add members</Button
      >
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
      <Button icon="archive-alt" type="success" icon-position="left" disabled
        >Add members</Button
      >
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
    <div class="buttons-example">
      <Button>Add members</Button>
      <Button icon="archive-alt">Add members</Button>
      <Button icon="archive-alt" icon-position="left">Add members</Button>
      <Button icon="archive-alt" shape="square">Add members</Button>
      <Button icon="ellipsis-v" shape="square">Add members</Button>
      <Button icon="archive-alt" shape="round">Add members</Button>
      <Button icon="archive-alt" shape="circle">Add members</Button>
    </div>
    <div class="buttons-example">
      <Button :loading="loading" type="primary">Add members</Button>
      <Button :loading="loading" type="primary" icon="archive-alt"
        >Add members</Button
      >
      <Button
        :loading="loading"
        type="primary"
        icon="archive-alt"
        shape="square"
        >Add members</Button
      >
      <Button :loading="loading" type="primary" icon="archive-alt" shape="round"
        >Add members</Button
      >
      <Button
        :loading="loading"
        type="primary"
        icon="archive-alt"
        shape="circle"
        >Add members</Button
      >
    </div>
    <div class="buttons-example">
      <Button :loading="loading" type="warning">Add members</Button>
      <Button :loading="loading" icon="archive-alt" type="warning"
        >Add members</Button
      >
      <Button
        :loading="loading"
        icon="archive-alt"
        type="warning"
        shape="square"
        >Add members</Button
      >
      <Button :loading="loading" icon="archive-alt" type="warning" shape="round"
        >Add members</Button
      >
      <Button
        :loading="loading"
        icon="archive-alt"
        type="warning"
        shape="circle"
        >Add members</Button
      >
    </div>
  </div>
</template>

<script>
import { Button, Spinner, Tag } from 'atoms'
export default {
  name: 'home',
  components: {
    Button,
    Spinner,
    Tag
  },
  data() {
    return {
      loading: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = true
    }, 2000)
  }
}
</script>

<style lang="scss">
.example-spinner {
  display: flex;
  margin-bottom: 20px;

  & > div {
    margin-right: 20px;
  }
}

.buttons-example {
  display: flex;
  align-items: center;
  margin-bottom: 34px;

  & > button {
    margin-right: 14px;
  }

  & > .spinner {
    margin-right: 10px;
  }

  & > .tag {
    margin-right: 10px;
  }
}
</style>
