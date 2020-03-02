<template>
  <div>
    <div>
      <Badge :count="1" type="error" shape="rectangle">
        <Button type="warning" icon="ellipsis-v">
          Add members
        </Button>
      </Badge>
    </div>
    <br />
    <div>
      <Badge :count="99" type="success">
        <Button type="warning" icon="ellipsis-v">
          Add members
        </Button>
      </Badge>
    </div>
    <br />
    <div>
      <Badge :count="1000">
        <Button type="warning">
          Add members
        </Button>
      </Badge>
    </div>
    <br />
    <div>
      <Badge :count="1000" :overflow-count="102" />
    </div>
    <br />
    <div>
      <Indicator type="error">
        <Button type="warning" icon="ellipsis-v">
          Add members
        </Button>
      </Indicator>
    </div>
    <br />
    <div>
      <Indicator>
        <Button type="warning">
          Add members
        </Button>
      </Indicator>
    </div>
    <br />
    <div>
      <Indicator type="warning" text="Text" />
    </div>
    <br />
    <div>
      <Indicator animation="blink" type="warning" text="Text" />
    </div>
    <br />
    <div>
      <Indicator animation="blink" type="success" text="Text">
        <Button type="warning">
          Add members
        </Button>
      </Indicator>
    </div>
  </div>
</template>

<script>
import { Badge, Button, Indicator } from 'atoms'
export default {
  components: {
    Badge,
    Button,
    Indicator
  }
}
</script>

<style lang="scss">
@import 'test';
</style>
