<template>
  <div>
    <h1 class="title">Buttons</h1>
    <p style="margin-bottom: 20px;">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eaque
      inventore ipsum maxime omnis quasi quos. Consequatur ex fuga incidunt
      libero necessitatibus odio, quia sapiente sequi soluta suscipit voluptate
      voluptatibus.
    </p>
    <div class="section-example">
      <Tag>183%</Tag>
      <Tag>Text value</Tag>
      <Tag closable>183%</Tag>
      <Tag icon="archive-alt" closable>183%</Tag>
    </div>
    <div class="section-example">
      <Tag type="primary">183%</Tag>
      <Tag type="primary">Text value</Tag>
      <Tag type="primary" closable>183%</Tag>
      <Tag type="primary" icon="archive-alt" closable>183%</Tag>
    </div>
    <div class="section-example">
      <Tag type="warning">183%</Tag>
      <Tag type="warning">Text value</Tag>
      <Tag type="warning" closable>183%</Tag>
      <Tag type="warning" icon="archive-alt" closable>183%</Tag>
    </div>
    <div class="section-example">
      <Tag type="error">183%</Tag>
      <Tag type="error">Text value</Tag>
      <Tag type="error" closable>183%</Tag>
      <Tag type="error" icon="archive-alt" closable>183%</Tag>
    </div>
    <div class="section-example">
      <Tag type="success">183%</Tag>
      <Tag type="success">Text value</Tag>
      <Tag type="success" closable>183%</Tag>
      <Tag type="success" icon="archive-alt" closable>183%</Tag>
    </div>
    <div class="section-example">
      <Tag color="#0070D2" shape="rectangle" closable icon="cog">183%</Tag>
      <Tag color="#C23934" shape="rectangle" closable icon="cog">Text</Tag>
      <Tag color="#FFB75D" shape="rectangle" closable icon="cog"
        >Text Value</Tag
      >
      <Tag color="#50CC7A" shape="rectangle" closable icon="cog">183%</Tag>
      <Tag color="#597BAE" shape="rectangle" closable icon="cog">183%</Tag>
    </div>
    <div class="section-example">
      <div class="section-example">
        <Spinner type="plane" />
        <Spinner type="bounce" />
        <Spinner type="pulse" />
      </div>
      <div class="section-example">
        <Spinner type="plane" color="#ff790e" />
        <Spinner type="bounce" color="#ff790e" />
        <Spinner type="pulse" color="#ff790e" />
      </div>
      <div class="section-example">
        <Spinner type="plane" color="#ec547a" />
        <Spinner type="bounce" color="#ec547a" />
        <Spinner type="pulse" color="#ec547a" />
      </div>
    </div>
    <div class="section-example">
      <Button icon="archive-alt">Add members</Button>
      <Button icon="archive-alt" icon-position="left">Add members</Button>
      <Button icon="cog" shape="square">Add members</Button>
      <Button icon="ellipsis-v" shape="square">Add members</Button>
      <Button icon="archive-alt" shape="round">Add members</Button>
      <Button icon="archive-alt" shape="circle">Add members</Button>
    </div>
    <div class="section-example">
      <Button type="primary">Add members</Button>
      <Button type="primary" icon="archive-alt" icon-position="left"
        >Add members</Button
      >
      <Button type="primary" icon="archive-alt">Add members</Button>
      <Button type="primary" icon="cog" shape="square">Add members</Button>
      <Button type="primary" icon="archive-alt" shape="round"
        >Add members</Button
      >
      <Button type="primary" icon="archive-alt" shape="circle"
        >Add members</Button
      >
    </div>
    <div class="section-example">
      <Button type="warning">Add members</Button>
      <Button icon="archive-alt" type="warning" icon-position="left"
        >Add members</Button
      >
      <Button icon="archive-alt" type="warning">Add members</Button>
      <Button icon="cog" type="warning" shape="square">Add members</Button>
      <Button icon="archive-alt" type="warning" shape="round"
        >Add members</Button
      >
      <Button icon="archive-alt" type="warning" shape="circle"
        >Add members</Button
      >
    </div>
    <div class="section-example">
      <Button type="error">Add members</Button>
      <Button icon="archive-alt" type="error" icon-position="left"
        >Add members</Button
      >
      <Button icon="archive-alt" type="error">Add members</Button>
      <Button icon="cog" type="error" shape="square">Add members</Button>
      <Button icon="archive-alt" type="error" shape="round">Add members</Button>
      <Button icon="archive-alt" type="error" shape="circle"
        >Add members</Button
      >
    </div>
    <div class="section-example">
      <Button type="success">Add members</Button>
      <Button icon="archive-alt" type="success" icon-position="left"
        >Add members</Button
      >
      <Button icon="archive-alt" type="success">Add members</Button>
      <Button icon="cog" type="success" shape="square">Add members</Button>
      <Button icon="archive-alt" type="success" shape="round"
        >Add members</Button
      >
      <Button icon="archive-alt" type="success" shape="circle"
        >Add members</Button
      >
    </div>
    <div class="section-example">
      <Button type="success" disabled>Add members</Button>
      <Button icon="archive-alt" type="success" icon-position="left" disabled
        >Add members</Button
      >
      <Button icon="archive-alt" type="success" disabled>Add members</Button>
      <Button icon="cog" type="success" disabled shape="square"
        >Add members</Button
      >
      <Button icon="archive-alt" type="success" disabled shape="round"
        >Add members</Button
      >
      <Button icon="archive-alt" type="success" disabled shape="circle"
        >Add members</Button
      >
    </div>
    <div class="section-example">
      <Button color="linear-gradient(#e66465, #9198e5)">Add members</Button>
      <Button color="linear-gradient(#e66465, #9198e5)" icon="archive-alt"
        >Add members</Button
      >
      <Button color="#597BAE" icon="archive-alt" icon-position="left"
        >Add members</Button
      >
      <Button color="#597BAE" icon="cog" shape="square">Add members</Button>
      <Button
        color="linear-gradient(#e66465, #9198e5)"
        icon="ellipsis-v"
        shape="square"
        >Add members</Button
      >
      <Button
        color="linear-gradient(#e66465, #9198e5)"
        icon="archive-alt"
        shape="round"
        >Add members</Button
      >
      <Button
        color="linear-gradient(#e66465, #9198e5)"
        icon="archive-alt"
        shape="circle"
        >Add members</Button
      >
    </div>
    <div class="section-example">
      <Button
        color="linear-gradient(#e66465, #9198e5)"
        :loading="loading"
        type="primary"
        >Add members</Button
      >
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
    <div class="section-example">
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
.section-example {
  display: flex;
  align-items: center;
  margin-bottom: 34px;

  & > .section-example {
    margin-bottom: 0;
  }

  & > .vc-button {
    margin-right: 16px;
  }

  & > .vc-spinner {
    margin-right: 16px;
  }

  & > .vc-tag {
    margin-right: 10px;
  }
}
</style>
