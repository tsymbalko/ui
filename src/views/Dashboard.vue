<template>
  <div class="grid-presentation">
    <Card type="primary">
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
    </Card>
    <Card type="error">
      <div class="section-example">
        <div class="section-example">
          <Spinner type="plane" />
          <Spinner type="bounce" />
          <Spinner type="pulse" />
        </div>
        <div class="section-example">
          <Spinner :size="30" type="plane" color="#ff790e" />
          <Spinner :size="30" type="bounce" color="#ff790e" />
          <Spinner :size="30" type="pulse" color="#ff790e" />
        </div>
        <div class="section-example">
          <Spinner :size="20" type="plane" color="#ec547a" />
          <Spinner :size="20" type="bounce" color="#ec547a" />
          <Spinner :size="20" type="pulse" color="#ec547a" />
        </div>
      </div>
    </Card>
    <Card type="success">
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
        <Button icon="archive-alt" type="error" shape="round"
          >Add members</Button
        >
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
        <Button :size="50" type="success" disabled>Add members</Button>
        <Button
          :size="50"
          icon="archive-alt"
          type="success"
          icon-position="left"
          disabled
          >Add members</Button
        >
        <Button :size="50" icon="archive-alt" type="success" disabled
          >Add members</Button
        >
        <Button :size="50" icon="cog" type="success" disabled shape="square"
          >Add members</Button
        >
        <Button
          :size="50"
          icon="archive-alt"
          type="success"
          disabled
          shape="round"
          >Add members</Button
        >
        <Button
          :size="50"
          icon="archive-alt"
          type="success"
          disabled
          shape="circle"
          >Add members</Button
        >
      </div>
      <div class="section-example">
        <Button background="linear-gradient(#e66465, #9198e5)"
          >Add members</Button
        >
        <Button
          background="linear-gradient(#e66465, #9198e5)"
          icon="archive-alt"
          >Add members</Button
        >
        <Button background="#597BAE" icon="archive-alt" icon-position="left"
          >Add members</Button
        >
        <Button background="#597BAE" icon="cog" shape="square"
          >Add members</Button
        >
        <Button
          background="linear-gradient(#e66465, #9198e5)"
          icon="ellipsis-v"
          shape="square"
          >Add members</Button
        >
        <Button
          background="linear-gradient(#e66465, #9198e5)"
          icon="archive-alt"
          shape="round"
          >Add members</Button
        >
        <Button
          background="linear-gradient(#e66465, #9198e5)"
          icon="archive-alt"
          shape="circle"
          >Add members</Button
        >
      </div>
      <div class="section-example">
        <Button
          background="linear-gradient(#e66465, #9198e5)"
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
        <Button
          :loading="loading"
          type="primary"
          icon="archive-alt"
          shape="round"
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
        <Button
          :loading="loading"
          icon="archive-alt"
          type="warning"
          shape="round"
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
    </Card>
    <Card
      type="warning"
      shape="rectangle"
      border-color="linear-gradient(var(--orange), var(--blue))"
    >
      <div class="progress-list">
        <div class="progress-list_item">
          <ProgressLine type="primary" />
        </div>
        <div class="progress-list_item">
          <ProgressLine
            type="error"
            :percent="ProgressLine"
            :show-info="false"
          />
        </div>
        <div class="progress-list_item">
          <ProgressLine type="success" :percent="50" />
        </div>
        <div class="progress-list_item">
          <ProgressLine type="warning" :percent="ProgressLine" />
        </div>
        <div class="progress-list_item">
          <ProgressLine type="primary" :percent="50" desc="Total: 200" />
        </div>
        <div class="progress-list_item">
          <ProgressLine
            type="error"
            :percent="ProgressLine"
            desc="Total: 200"
          />
        </div>
        <div class="progress-list_item">
          <ProgressLine type="success" :percent="50" icon="cog" />
        </div>
        <div class="progress-list_item">
          <ProgressLine
            type="warning"
            :percent="ProgressLine"
            desc="Total: 200"
            icon="cog"
            :stroke="4"
          />
        </div>

        <div class="progress-list_item">
          <ProgressLine
            color="#9198e5"
            :percent="50"
            desc="Total: 200"
            icon="cog"
            :stroke="4"
          />
        </div>
        <div class="progress-list_item">
          <ProgressLine type="error" shape="rectangle" icon="cog" :stroke="8" />
        </div>
        <div class="progress-list_item">
          <ProgressLine
            type="warning"
            shape="rectangle"
            :percent="31.1"
            icon="cog"
            :stroke="8"
          />
        </div>
        <div class="progress-list_item">
          <ProgressLine
            type="success"
            shape="round"
            :percent="ProgressLine"
            desc="Total: 200"
            legend="Food"
            icon="cog"
            :stroke="8"
          />
        </div>
        <div class="progress-list_item">
          <ProgressLine
            type="success"
            shape="round"
            :percent="40"
            desc="Total: 200"
            legend="Food"
            icon="cog"
            :stroke="10"
          />
        </div>
      </div>
    </Card>
    <Card type="warning" shape="rectangle"> </Card>
  </div>
</template>

<script>
import { Button, Spinner, Tag, ProgressLine } from 'atoms'
import { Card } from 'molecules'
export default {
  name: 'home',
  components: {
    Button,
    Spinner,
    Tag,
    ProgressLine,
    Card
  },
  data() {
    return {
      loading: false,
      ProgressLine: 10
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = true
      this.ProgressLine = 22.4
    }, 2000)
    setTimeout(() => {
      this.loading = false
      this.ProgressLine = 79.8
    }, 6000)
    setTimeout(() => {
      this.loading = true
      this.ProgressLine = 0
    }, 10000)
    setTimeout(() => {
      this.loading = false
      this.ProgressLine = 100
    }, 12000)
    setTimeout(() => {
      this.loading = true
      this.ProgressLine = 42.2
    }, 14000)
  }
}
</script>

<style lang="scss">
.section-example {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  & + & {
    margin-top: 12px;
  }

  & > .section-example {
    margin-bottom: 0;
  }

  & > .vc-button {
    margin-right: 16px;
    margin-bottom: 8px;
  }

  & > .vc-spinner {
    margin-right: 16px;
    margin-bottom: 8px;
  }

  & > .vc-tag {
    margin-right: 10px;
    margin-bottom: 8px;
  }
}

.progress-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  &_item {
    width: 46%;
    margin-bottom: 10px;
  }
}

.grid-presentation {
  display: grid;
  grid-gap: 36px;
}
</style>
