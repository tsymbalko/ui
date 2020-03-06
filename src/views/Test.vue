<template>
  <div>
    <div>
      <Card>
        <Heading level="1" divider="bottom">
          <Badge :count="99" type="success">
            Heading
          </Badge>
        </Heading>
        <Heading level="2" divider="both">
          <Indicator type="success">
            Heading
          </Indicator>
        </Heading>
        <Heading level="3" divider="left">Heading</Heading>
        <p>
          Text lorem ipsum
        </p>
        <TextLabel>
          Label
        </TextLabel>
        <Heading level="4" divider="right">Heading</Heading>
        <Heading level="5" divider="both">Heading</Heading>
        <Heading level="6" divider="both">Heading</Heading>
        <Heading level="1">Heading</Heading>
        <Heading level="2">Heading</Heading>
        <Heading level="3">Heading</Heading>
        <Heading level="4">Heading</Heading>
        <Heading level="5">Heading</Heading>
        <Heading level="6">Heading</Heading>
      </Card>
    </div>
    <div>
      <Breadcrumb :routes="routes" />
      <Breadcrumb :routes="routes">
        <template #separator>
          <Icon width="12" height="12" name="user" />
        </template>
      </Breadcrumb>
      <Card>
        <Breadcrumb :routes="routes" />
        <Breadcrumb :routes="routes">
          <template #separator>
            <Icon width="12" height="12" name="user" />
          </template>
        </Breadcrumb>
        <Tabs :tabs="tabs" v-model="activeTab" />
        <div class="vc-tabs_content" style="padding: 14px;">
          <div
            v-for="{ id, content } in tabs"
            v-show="activeTab === id"
            :key="id"
          >
            {{ content }}
          </div>
        </div>
      </Card>
      <Avatar :size="24" />
      <Avatar :size="32" />
      <Avatar :size="48" icon="user" />
      <Avatar shape="square" :size="56" icon="user" />
      <Badge :count="99" type="success">
        <Avatar :size="48" icon="user" />
      </Badge>
      <Indicator type="success" text="Text" placement="bottom">
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
import {
  Badge,
  Button,
  Indicator,
  MenuToggle,
  Collapse,
  Avatar,
  Breadcrumb,
  Icon,
  Card,
  Tabs,
  Heading,
  TextLabel
} from 'atoms'
export default {
  components: {
    Badge,
    Button,
    Indicator,
    Card,
    MenuToggle,
    Collapse,
    Avatar,
    Breadcrumb,
    Icon,
    Tabs,
    Heading,
    TextLabel
  },
  data() {
    return {
      openCollapse: false,
      openCollapse2: false,
      openCollapse3: false,
      routes: [
        {
          to: '/dashboard',
          label: 'Dashboard',
          id: 1,
          href: '',
          icon: 'apps'
        },
        {
          to: '/test',
          label: 'Test',
          id: 2,
          href: '',
          icon: 'archive-alt'
        }
      ],
      activeTab: 2,
      tabs: [
        {
          id: 1,
          title: 'Pictures',
          content: '1 Lorem ipsum dolor'
        },
        {
          id: 2,
          title: 'Music',
          content:
            '2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis culpa dicta distinctio eveniet fugiat incidunt omnis quas, similique tempore? Ad aperiam autem deleniti earum ipsam molestias, pariatur porro reprehenderit.'
        },
        {
          id: 3,
          title: 'Videos',
          content: '3 Lorem ipsum dolor sit amet'
        },
        {
          id: 4,
          title: 'Documents',
          content:
            '4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis culpa dicta distinctio eveniet fugiat incidunt omnis quas, similique tempore? Ad aperiam autem deleniti earum ipsam molestias, pariatur porro reprehenderit.'
        }
      ]
    }
  }
}
</script>
