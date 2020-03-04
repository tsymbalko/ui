<template>
  <div>
    <div>
      <Avatar :size="24" />
      <Avatar :size="32" />
      <Avatar :size="48" icon="user" />
      <Avatar shape="square" :size="56" icon="user" />
      <Badge :count="99" type="success">
        <Avatar :size="48" icon="user" />
      </Badge>
      <Indicator type="success" text="Text">
        <Avatar :size="48" icon="user" />
      </Indicator>
      <Badge :count="99" type="success">
        <Avatar shape="square" :size="48" icon="user" />
      </Badge>
      <Indicator type="success" text="Text">
        <Avatar shape="square" :size="48" icon="user" />
      </Indicator>
      <Badge :count="99" type="success">
        <Avatar src="https://i.pravatar.cc/50" :size="48" icon="user" />
      </Badge>
      <Indicator type="success" text="Text">
        <Avatar src="https://i.pravatar.cc/50" :size="48" icon="user" />
      </Indicator>
      <Badge :count="99" type="success">
        <Avatar
          src="https://i.pravatar.cc/50"
          shape="square"
          :size="48"
          icon="user"
        />
      </Badge>
      <Indicator type="success" text="Text">
        <Avatar
          src="https://i.pravatar.cc/50"
          shape="square"
          :size="48"
          icon="user"
        />
      </Indicator>
      <div>
        <MenuToggle />
        <br />
        <MenuToggle shape="circle" />
      </div>
      <br />
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
        <Indicator animation="blink" type="error" text="Text" />
        <Indicator animation="blink" type="success" text="Text" />
        <Indicator animation="blink" text="Text" />
      </div>
      <br />
      <div>
        <Indicator animation="blink" type="success" text="Text">
          <Button type="warning">
            Add members
          </Button>
        </Indicator>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        blanditiis commodi dolor nostrum tempore! Aliquid, ea eius. Hic
        inventore laboriosam obcaecati reiciendis sapiente! Ipsam magnam nulla
        odit quo reiciendis vero?Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Asperiores blanditiis commodi dolor nostrum tempore!
        Aliquid, ea eius. Hic inventore laboriosam obcaecati reiciendis
        sapiente! Ipsam magnam nulla odit quo reiciendis vero?Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Asperiores blanditiis commodi
        dolor nostrum tempore! Aliquid, ea eius. Hic inventore laboriosam
        obcaecati reiciendis sapiente! Ipsam magnam nulla odit quo reiciendis
        vero?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Asperiores blanditiis commodi dolor nostrum tempore! Aliquid, ea eius.
        Hic inventore laboriosam obcaecati reiciendis sapiente! Ipsam magnam
        nulla odit quo reiciendis vero?Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Asperiores blanditiis commodi dolor nostrum tempore!
        Aliquid, ea eius. Hic inventore laboriosam obcaecati reiciendis
        sapiente! Ipsam magnam nulla odit quo reiciendis vero?Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Asperiores blanditiis commodi
        dolor nostrum tempore! Aliquid, ea eius. Hic inventore laboriosam
        obcaecati reiciendis sapiente! Ipsam magnam nulla odit quo reiciendis
        vero?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        <Collapse :opened="openCollapse" @change="openCollapse = !openCollapse">
          <template #title>Title</template>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          aliquid consectetur deleniti dolores doloribus ducimus et
          exercitationem explicabo facilis fugiat laborum molestiae, nihil
          officiis porro quae rerum sequi soluta vel.
        </Collapse>
        <Collapse
          :opened="openCollapse2"
          @change="openCollapse2 = !openCollapse2"
        >
          <template #title>Title</template>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          aliquid consectetur deleniti dolores doloribus ducimus et
          exercitationem explicabo facilis fugiat laborum molestiae, nihil
          officiis porro quae rerum sequi soluta vel.
        </Collapse>
        <Collapse
          :opened="openCollapse3"
          @change="openCollapse3 = !openCollapse3"
        >
          <template #title>Title</template>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          aliquid consectetur deleniti dolores doloribus ducimus et
          exercitationem explicabo facilis fugiat laborum molestiae, nihil
          officiis porro quae rerum sequi soluta vel.
        </Collapse>
      </div>
    </div>
    <Card>
      <Avatar :size="24" />
      <Avatar :size="32" />
      <Avatar :size="48" icon="user" />
      <Avatar shape="square" :size="56" icon="user" />
      <Badge :count="99" type="success">
        <Avatar :size="48" icon="user" />
      </Badge>
      <Indicator type="success" text="Text">
        <Avatar :size="48" icon="user" />
      </Indicator>
      <Badge :count="99" type="success">
        <Avatar shape="square" :size="48" icon="user" />
      </Badge>
      <Indicator type="success" text="Text">
        <Avatar shape="square" :size="48" icon="user" />
      </Indicator>
      <Badge :count="99" type="success">
        <Avatar src="https://i.pravatar.cc/50" :size="48" icon="user" />
      </Badge>
      <Indicator type="success" text="Text">
        <Avatar src="https://i.pravatar.cc/50" :size="48" icon="user" />
      </Indicator>
      <Badge :count="99" type="success">
        <Avatar
          src="https://i.pravatar.cc/50"
          shape="square"
          :size="48"
          icon="user"
        />
      </Badge>
      <Indicator type="success" text="Text">
        <Avatar
          src="https://i.pravatar.cc/50"
          shape="square"
          :size="48"
          icon="user"
        />
      </Indicator>
      <div>
        <MenuToggle />
        <br />
        <MenuToggle shape="circle" />
      </div>
      <br />
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
        <Indicator animation="blink" type="error" text="Text" />
        <Indicator animation="blink" type="success" text="Text" />
        <Indicator animation="blink" text="Text" />
      </div>
      <br />
      <div>
        <Indicator animation="blink" type="success" text="Text">
          <Button type="warning">
            Add members
          </Button>
        </Indicator>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        blanditiis commodi dolor nostrum tempore! Aliquid, ea eius. Hic
        inventore laboriosam obcaecati reiciendis sapiente! Ipsam magnam nulla
        odit quo reiciendis vero?Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Asperiores blanditiis commodi dolor nostrum tempore!
        Aliquid, ea eius. Hic inventore laboriosam obcaecati reiciendis
        sapiente! Ipsam magnam nulla odit quo reiciendis vero?Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Asperiores blanditiis commodi
        dolor nostrum tempore! Aliquid, ea eius. Hic inventore laboriosam
        obcaecati reiciendis sapiente! Ipsam magnam nulla odit quo reiciendis
        vero?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Asperiores blanditiis commodi dolor nostrum tempore! Aliquid, ea eius.
        Hic inventore laboriosam obcaecati reiciendis sapiente! Ipsam magnam
        nulla odit quo reiciendis vero?Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Asperiores blanditiis commodi dolor nostrum tempore!
        Aliquid, ea eius. Hic inventore laboriosam obcaecati reiciendis
        sapiente! Ipsam magnam nulla odit quo reiciendis vero?Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Asperiores blanditiis commodi
        dolor nostrum tempore! Aliquid, ea eius. Hic inventore laboriosam
        obcaecati reiciendis sapiente! Ipsam magnam nulla odit quo reiciendis
        vero?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        <Collapse :opened="openCollapse" @change="openCollapse = !openCollapse">
          <template #title>Title</template>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          aliquid consectetur deleniti dolores doloribus ducimus et
          exercitationem explicabo facilis fugiat laborum molestiae, nihil
          officiis porro quae rerum sequi soluta vel.
        </Collapse>
        <Collapse
          :opened="openCollapse2"
          @change="openCollapse2 = !openCollapse2"
        >
          <template #title>Title</template>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          aliquid consectetur deleniti dolores doloribus ducimus et
          exercitationem explicabo facilis fugiat laborum molestiae, nihil
          officiis porro quae rerum sequi soluta vel.
        </Collapse>
        <Collapse
          :opened="openCollapse3"
          @change="openCollapse3 = !openCollapse3"
        >
          <template #title>Title</template>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          aliquid consectetur deleniti dolores doloribus ducimus et
          exercitationem explicabo facilis fugiat laborum molestiae, nihil
          officiis porro quae rerum sequi soluta vel.
        </Collapse>
      </div>
    </Card>
  </div>
</template>

<script>
import { Badge, Button, Indicator, MenuToggle, Collapse, Avatar } from 'atoms'
import { Card } from 'molecules'
export default {
  components: {
    Badge,
    Button,
    Indicator,
    Card,
    MenuToggle,
    Collapse,
    Avatar
  },
  data() {
    return {
      openCollapse: false,
      openCollapse2: false,
      openCollapse3: false
    }
  }
}
</script>

<style lang="scss">
@import 'test';
</style>
