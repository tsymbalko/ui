<template>
  <div>
    <div class="grid-presentation">
      <Card type="primary"> </Card>
      <Card type="error">
        <div class="section-example">
          <div class="section-example">
            <Spinner type="bounce" />
            <Spinner type="plane" />
            <Spinner type="ring" />
            <Spinner type="pulse" />
          </div>
          <div class="section-example">
            <Spinner :size="30" type="plane" color="#ff790e" />
            <Spinner :size="30" type="bounce" color="#ff790e" />
            <Spinner :size="30" type="ring" color="#ff790e" />
            <Spinner :size="30" type="pulse" color="#ff790e" />
          </div>
          <div class="section-example">
            <Spinner :size="20" type="plane" color="#ec547a" />
            <Spinner :size="20" type="bounce" color="#ec547a" />
            <Spinner :size="20" type="ring" color="#ec547a" />
            <Spinner :size="20" type="pulse" color="#ec547a" />
          </div>
        </div>
        <div class="section-example">
          <div class="section-example">
            <Spinner type="bounce" />
            <Spinner type="plane" />
            <Spinner type="ring" />
            <Spinner type="pulse" />
          </div>
          <div class="section-example">
            <Spinner :size="30" type="plane" color="#ff790e" />
            <Spinner :size="30" type="bounce" color="#ff790e" />
            <Spinner :size="30" type="ring" color="#ff790e" />
            <Spinner :size="30" type="pulse" color="#ff790e" />
          </div>
          <div class="section-example">
            <Spinner :size="20" type="plane" color="#ec547a" />
            <Spinner :size="20" type="bounce" color="#ec547a" />
            <Spinner :size="20" type="ring" color="#ec547a" />
            <Spinner :size="20" type="pulse" color="#ec547a" />
          </div>
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
            <ProgressLine
              type="error"
              shape="rectangle"
              icon="cog"
              :stroke="8"
            />
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
      <div style="padding: 20px 0;">
        <Button type="success" @click="toggleModal">
          Open modal
        </Button>
        <Modal center :visible="visibleModal" @close="closeModal" />
      </div>
      <div style="padding: 20px 0;">
        <Button type="success" @click="visible2Modal = true" icon="user">
          Messages
          <Badge :count="99" type="success" />
        </Button>
        <Modal :visible="visible2Modal" @close="visible2Modal = false">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
          eveniet, sunt. Adipisci, aut autem deserunt dolore, explicabo impedit
          iste maiores mollitia nobis odio placeat quia quidem sapiente,
          suscipit voluptate voluptates? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dolor, eveniet, sunt. Adipisci, aut autem deserunt
          dolore, explicabo impedit iste maiores mollitia nobis odio placeat
          quia quidem sapiente, suscipit voluptate voluptates? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Dolor, eveniet, sunt.
          Adipisci, aut autem deserunt dolore, explicabo impedit iste maiores
          mollitia nobis odio placeat quia quidem sapiente, suscipit voluptate
          voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolor, eveniet, sunt. Adipisci, aut autem deserunt dolore, explicabo
          impedit iste maiores mollitia nobis odio placeat quia quidem sapiente,
          suscipit voluptate voluptates? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dolor, eveniet, sunt. Adipisci, aut autem deserunt
          dolore, explicabo impedit iste maiores mollitia nobis odio placeat
          quia quidem sapiente, suscipit voluptate voluptates? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Dolor, eveniet, sunt.
          Adipisci, aut autem deserunt dolore, explicabo impedit iste maiores
          mollitia nobis odio placeat quia quidem sapiente, suscipit voluptate
          voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolor, eveniet, sunt. Adipisci, aut autem deserunt dolore, explicabo
          impedit iste maiores mollitia nobis odio placeat quia quidem sapiente,
          suscipit voluptate voluptates? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dolor, eveniet, sunt. Adipisci, aut autem deserunt
          dolore, explicabo impedit iste maiores mollitia nobis odio placeat
          quia quidem sapiente, suscipit voluptate voluptates? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Dolor, eveniet, sunt.
          Adipisci, aut autem deserunt dolore, explicabo impedit iste maiores
          mollitia nobis odio placeat quia quidem sapiente, suscipit voluptate
          voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolor, eveniet, sunt. Adipisci, aut autem deserunt dolore, explicabo
          impedit iste maiores mollitia nobis odio placeat quia quidem sapiente,
          suscipit voluptate voluptates? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dolor, eveniet, sunt. Adipisci, aut autem deserunt
          dolore, explicabo impedit iste maiores mollitia nobis odio placeat
          quia quidem sapiente, suscipit voluptate voluptates? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Dolor, eveniet, sunt.
          Adipisci, aut autem deserunt dolore, explicabo impedit iste maiores
          mollitia nobis odio placeat quia quidem sapiente, suscipit voluptate
          voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolor, eveniet, sunt. Adipisci, aut autem deserunt dolore, explicabo
          impedit iste maiores mollitia nobis odio placeat quia quidem sapiente,
          suscipit voluptate voluptates? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dolor, eveniet, sunt. Adipisci, aut autem deserunt
          dolore, explicabo impedit iste maiores mollitia nobis odio placeat
          quia quidem sapiente, suscipit voluptate voluptates? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Dolor, eveniet, sunt.
          Adipisci, aut autem deserunt dolore, explicabo impedit iste maiores
          mollitia nobis odio placeat quia quidem sapiente, suscipit voluptate
          voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolor, eveniet, sunt. Adipisci, aut autem deserunt dolore, explicabo
          impedit iste maiores mollitia nobis odio placeat quia quidem sapiente,
          suscipit voluptate voluptates? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dolor, eveniet, sunt. Adipisci, aut autem deserunt
          dolore, explicabo impedit iste maiores mollitia nobis odio placeat
          quia quidem sapiente, suscipit voluptate voluptates? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Dolor, eveniet, sunt.
          Adipisci, aut autem deserunt dolore, explicabo impedit iste maiores
          mollitia nobis odio placeat quia quidem sapiente, suscipit voluptate
          voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolor, eveniet, sunt. Adipisci, aut autem deserunt dolore, explicabo
          impedit iste maiores mollitia nobis odio placeat quia quidem sapiente,
          suscipit voluptate voluptates? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dolor, eveniet, sunt. Adipisci, aut autem deserunt
          dolore, explicabo impedit iste maiores mollitia nobis odio placeat
          quia quidem sapiente, suscipit voluptate voluptates? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Dolor, eveniet, sunt.
          Adipisci, aut autem deserunt dolore, explicabo impedit iste maiores
          mollitia nobis odio placeat quia quidem sapiente, suscipit voluptate
          voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolor, eveniet, sunt. Adipisci, aut autem deserunt dolore, explicabo
          impedit iste maiores mollitia nobis odio placeat quia quidem sapiente,
          suscipit voluptate voluptates? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dolor, eveniet, sunt. Adipisci, aut autem deserunt
          dolore, explicabo impedit iste maiores mollitia nobis odio placeat
          quia quidem sapiente, suscipit voluptate voluptates? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Dolor, eveniet, sunt.
          Adipisci, aut autem deserunt dolore, explicabo impedit iste maiores
          mollitia nobis odio placeat quia quidem sapiente, suscipit voluptate
          voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolor, eveniet, sunt. Adipisci, aut autem deserunt dolore, explicabo
          impedit iste maiores mollitia nobis odio placeat quia quidem sapiente,
          suscipit voluptate voluptates? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dolor, eveniet, sunt. Adipisci, aut autem deserunt
          dolore, explicabo impedit iste maiores mollitia nobis odio placeat
          quia quidem sapiente, suscipit voluptate voluptates? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Dolor, eveniet, sunt.
          Adipisci, aut autem deserunt dolore, explicabo impedit iste maiores
          mollitia nobis odio placeat quia quidem sapiente, suscipit voluptate
          voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolor, eveniet, sunt. Adipisci, aut autem deserunt dolore, explicabo
          impedit iste maiores mollitia nobis odio placeat quia quidem sapiente,
          suscipit voluptate voluptates? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dolor, eveniet, sunt. Adipisci, aut autem deserunt
          dolore, explicabo impedit iste maiores mollitia nobis odio placeat
          quia quidem sapiente, suscipit voluptate voluptates? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Dolor, eveniet, sunt.
          Adipisci, aut autem deserunt dolore, explicabo impedit iste maiores
          mollitia nobis odio placeat quia quidem sapiente, suscipit voluptate
          voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolor, eveniet, sunt. Adipisci, aut autem deserunt dolore, explicabo
          impedit iste maiores mollitia nobis odio placeat quia quidem sapiente,
          suscipit voluptate voluptates? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dolor, eveniet, sunt. Adipisci, aut autem deserunt
          dolore, explicabo impedit iste maiores mollitia nobis odio placeat
          quia quidem sapiente, suscipit voluptate voluptates? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Dolor, eveniet, sunt.
          Adipisci, aut autem deserunt dolore, explicabo impedit iste maiores
          mollitia nobis odio placeat quia quidem sapiente, suscipit voluptate
          voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolor, eveniet, sunt. Adipisci, aut autem deserunt dolore, explicabo
          impedit iste maiores mollitia nobis odio placeat quia quidem sapiente,
          suscipit voluptate voluptates? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dolor, eveniet, sunt. Adipisci, aut autem deserunt
          dolore, explicabo impedit iste maiores mollitia nobis odio placeat
          quia quidem sapiente, suscipit voluptate voluptates? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Dolor, eveniet, sunt.
          Adipisci, aut autem deserunt dolore, explicabo impedit iste maiores
          mollitia nobis odio placeat quia quidem sapiente, suscipit voluptate
          voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolor, eveniet, sunt. Adipisci, aut autem deserunt dolore, explicabo
          impedit iste maiores mollitia nobis odio placeat quia quidem sapiente,
          suscipit voluptate voluptates? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dolor, eveniet, sunt. Adipisci, aut autem deserunt
          dolore, explicabo impedit iste maiores mollitia nobis odio placeat
          quia quidem sapiente, suscipit voluptate voluptates? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Dolor, eveniet, sunt.
          Adipisci, aut autem deserunt dolore, explicabo impedit iste maiores
          mollitia nobis odio placeat quia quidem sapiente, suscipit voluptate
          voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolor, eveniet, sunt. Adipisci, aut autem deserunt dolore, explicabo
          impedit iste maiores mollitia nobis odio placeat quia quidem sapiente,
          suscipit voluptate voluptates? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dolor, eveniet, sunt. Adipisci, aut autem deserunt
          dolore, explicabo impedit iste maiores mollitia nobis odio placeat
          quia quidem sapiente, suscipit voluptate voluptates? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Dolor, eveniet, sunt.
          Adipisci, aut autem deserunt dolore, explicabo impedit iste maiores
          mollitia nobis odio placeat quia quidem sapiente, suscipit voluptate
          voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolor, eveniet, sunt. Adipisci, aut autem deserunt dolore, explicabo
          impedit iste maiores mollitia nobis odio placeat quia quidem sapiente,
          suscipit voluptate voluptates? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dolor, eveniet, sunt. Adipisci, aut autem deserunt
          dolore, explicabo impedit iste maiores mollitia nobis odio placeat
          quia quidem sapiente, suscipit voluptate voluptates? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Dolor, eveniet, sunt.
          Adipisci, aut autem deserunt dolore, explicabo impedit iste maiores
          mollitia nobis odio placeat quia quidem sapiente, suscipit voluptate
          voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolor, eveniet, sunt. Adipisci, aut autem deserunt dolore, explicabo
          impedit iste maiores mollitia nobis odio placeat quia quidem sapiente,
          suscipit voluptate voluptates? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dolor, eveniet, sunt. Adipisci, aut autem deserunt
          dolore, explicabo impedit iste maiores mollitia nobis odio placeat
          quia quidem sapiente, suscipit voluptate voluptates? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Dolor, eveniet, sunt.
          Adipisci, aut autem deserunt dolore, explicabo impedit iste maiores
          mollitia nobis odio placeat quia quidem sapiente, suscipit voluptate
          voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolor, eveniet, sunt. Adipisci, aut autem deserunt dolore, explicabo
          impedit iste maiores mollitia nobis odio placeat quia quidem sapiente,
          suscipit voluptate voluptates? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dolor, eveniet, sunt. Adipisci, aut autem deserunt
          dolore, explicabo impedit iste maiores mollitia nobis odio placeat
          quia quidem sapiente, suscipit voluptate voluptates? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Dolor, eveniet, sunt.
          Adipisci, aut autem deserunt dolore, explicabo impedit iste maiores
          mollitia nobis odio placeat quia quidem sapiente, suscipit voluptate
          voluptates?
        </Modal>
      </div>
      <div style="padding: 20px 0;">
        <Button type="success" @click="visibleFullModal = true">
          Open fuulscreen modal
        </Button>
        <Modal
          fullscreen
          animation="fade-left"
          :visible="visibleFullModal"
          @close="visibleFullModal = false"
        />
      </div>
    </div>
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
        <Tabs :tabs="tabs" v-model="activeTab">
          <div
            v-for="{ id, content } in tabs"
            v-show="activeTab === id"
            :key="id"
            role="tabpanel"
          >
            {{ content }}
          </div>
        </Tabs>
      </Card>
      <Avatar size="1.5" />
      <Avatar size="2" />
      <Avatar size="3" icon="user" />
      <Avatar shape="square" size="3.5" icon="user" />
      <Badge :count="99" type="success">
        <Avatar size="2" icon="user" />
      </Badge>
      <Indicator type="success" text="Text" placement="bottom">
        <Avatar size="3" icon="user" />
      </Indicator>
      <Badge :count="99" type="success">
        <Avatar shape="square" size="3" icon="user" />
      </Badge>
      <Indicator type="success" text="Text">
        <Avatar shape="square" size="3" icon="user" />
      </Indicator>
      <Badge :count="99" type="success">
        <Avatar src="https://i.pravatar.cc/50" size="3" icon="user" />
      </Badge>
      <Indicator type="success" text="Text">
        <Avatar src="https://i.pravatar.cc/50" size="3" icon="user" />
      </Indicator>
      <Badge :count="99" type="success">
        <Avatar
          src="https://i.pravatar.cc/50"
          shape="square"
          size="3"
          icon="user"
        />
      </Badge>
      <Indicator type="success" text="Text">
        <Avatar
          src="https://i.pravatar.cc/50"
          shape="square"
          size="3"
          icon="user"
        />
      </Indicator>
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
      <Avatar :size="2" />
      <Avatar :size="3" />
      <Avatar :size="4" icon="user" />
      <Avatar shape="square" :size="5" icon="user" />
      <Badge :count="99" type="success">
        <Avatar :size="4" icon="user" />
      </Badge>
      <Indicator type="success" text="Text">
        <Avatar :size="4" icon="user" />
      </Indicator>
      <Badge :count="99" type="success">
        <Avatar shape="square" :size="4" icon="user" />
      </Badge>
      <Indicator type="success" text="Text">
        <Avatar shape="square" :size="4" icon="user" />
      </Indicator>
      <Badge :count="99" type="success">
        <Avatar src="https://i.pravatar.cc/50" :size="4" icon="user" />
      </Badge>
      <Indicator type="success" text="Text">
        <Avatar src="https://i.pravatar.cc/50" :size="4" icon="user" />
      </Indicator>
      <Badge :count="99" type="success">
        <Avatar
          src="https://i.pravatar.cc/50"
          shape="square"
          :size="4"
          icon="user"
        />
      </Badge>
      <Indicator type="success" text="Text">
        <Avatar
          src="https://i.pravatar.cc/50"
          shape="square"
          :size="4"
          icon="user"
        />
      </Indicator>
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
    <div class="1about">
      <h1>This is an about page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        aliquam amet aperiam doloremque ducimus eligendi, expedita facilis fuga
        hic nulla numquam perspiciatis placeat qui ratione reiciendis tempore
        veniam vero voluptate.
      </p>
      <div>
        <Rating label="Label" :quantity="4" checked="2" name="name1" />
      </div>
      <div>
        <Rating label="Label" name="name10" icon="star-mono" />
      </div>
      <div>
        <h1>Количество: + {{ value }}</h1>
        <div>
          <Rating
            label="Label"
            :quantity="8"
            checked="2"
            name="name2"
            icon="user-plus"
            v-model="value"
          />
        </div>
      </div>
      <div>
        <Rating
          label="Label"
          :quantity="6"
          checked="2"
          name="name5"
          color="var(--green)"
          icon="archive-alt"
        />
      </div>
      <div>
        <Rating
          label="Label"
          :quantity="6"
          checked="4"
          name="name3"
          icon="cog"
          color="var(--red)"
          disabled
        />
      </div>

      <Card>
        <Fieldset legend="Legend">
          <Empty></Empty>
        </Fieldset>
      </Card>
      <Card>
        <SFigure shape="circle" />
        <SBlock :size="8" :amount="20" />
      </Card>

      <SFrame>
        <SRow>
          <SFigure />
          <SBlock :size="8" :amount="20" />
        </SRow>
      </SFrame>
      <br />
      <SFrame>
        <SLine :size="['60%', '40px']" />
        <SRow>
          <SBlock :size="8" :amount="20" />
          <SBlock :size="8" :amount="20" />
        </SRow>
        <br />
        <SRow>
          <SFigure size="80px" shape="circle" />
          <SBlock :size="8" :amount="15" />
        </SRow>
        <SBlock :size="8" :amount="16" />
      </SFrame>
      <br />
      <SFrame>
        <SRow>
          <SFigure size="80px" />
          <SBlock :size="8" :amount="15" />
        </SRow>
        <SLine />
        <SBlock :size="8" :amount="20" />
      </SFrame>
      <br />
      <SFrame>
        <SRow align="center">
          <SFigure shape="circle" />
          <SLine :size="['90%', '40px']" />
        </SRow>
        <SRow align="center">
          <SBlock :size="8" :amount="16" />
          <div style="width: 60%;">
            <SLine :size="['90%', '40px']" />
            <SLine :size="['90%', '40px']" />
          </div>
        </SRow>
      </SFrame>
      <br />
      <SFrame>
        <SRow align="center">
          <SFigure shape="circle" />
          <div style="width: 90%;">
            <SLine :size="['auto', '20px']" />
            <SLine :size="['auto', '20px']" />
          </div>
        </SRow>
        <SRow align="center">
          <SBlock :size="8" :amount="32" />
          <div style="width: 60%;">
            <SLine :size="['90%', '220px']" />
          </div>
        </SRow>
        <SBlock :size="8" :amount="16" />
      </SFrame>
    </div>
    <Card>
      <Range v-model="testValue" :max="100" legend />
    </Card>
  </div>
</template>

<script>
import {
  Badge,
  Button,
  Indicator,
  Collapse,
  Avatar,
  Breadcrumb,
  Icon,
  Card,
  Tabs,
  Heading,
  TextLabel,
  Spinner,
  ProgressLine,
  Modal,
  Rating,
  Fieldset,
  Empty,
  Range
} from 'components'
import { SRow, SBlock, SLine, SFrame, SFigure } from 'skeletons'
export default {
  components: {
    Badge,
    Button,
    Indicator,
    Card,
    Collapse,
    Avatar,
    Breadcrumb,
    Icon,
    Tabs,
    Heading,
    TextLabel,
    Spinner,
    ProgressLine,
    Modal,
    SRow,
    SBlock,
    SLine,
    SFrame,
    SFigure,
    Rating,
    Fieldset,
    Empty,
    Range
  },
  data() {
    return {
      value: 2,
      testValue: 10,
      openCollapse: false,
      openCollapse2: false,
      openCollapse3: false,
      loading: false,
      ProgressLine: 10,
      visibleModal: false,
      visibleFullModal: false,
      visible2Modal: false,
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
.section-example {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

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
  grid-gap: 32px;
}
</style>
