Vue component example:

```vue
<div data-theme="light">
  <div data-grid="row">
    <Avatar />
    <Avatar :size="4" />
    <Avatar :size="5" />
  </div>
  <div data-grid="row">
    <Avatar>Ua</Avatar>
    <Avatar :size="4" text="Ru">Ru</Avatar>
    <Avatar :size="5" text="Long Text">BU</Avatar>
  </div>
  <div data-grid="row">
    <Avatar src="https://i.pravatar.cc/50" />
    <Avatar src="https://i.pravatar.cc/100" :size="4" />
    <Avatar src="https://i.pravatar.cc/200" :size="5" />
  </div>
  <div data-grid="row">
    <Avatar src="https://i.pravatar.cc/50" shape="square" />
    <Avatar src="https://i.pravatar.cc/100" shape="square" :size="4" />
    <Avatar src="https://i.pravatar.cc/200" shape="square" :size="5" />
  </div>
  <div data-grid="row">
    <Badge :count="99" type="success">
        <Avatar shape="square" icon="user" />
    </Badge>
    <Indicator type="success">
      <Avatar shape="square" icon="user" />
    </Indicator>
    <Badge :count="99" type="success">
        <Avatar icon="user" />
    </Badge>
    <Indicator type="success">
      <Avatar icon="user" />
    </Indicator>
  </div>
</div>
<div data-theme="dark">
  <div data-grid="row">
    <Avatar />
    <Avatar :size="4" />
    <Avatar :size="5" />
  </div>
  <div data-grid="row">
    <Avatar>Ua</Avatar>
    <Avatar :size="4" text="Ru">Ru</Avatar>
    <Avatar :size="5" text="Long Text">BU</Avatar>
  </div>
  <div data-grid="row">
    <Avatar src="https://i.pravatar.cc/50" />
    <Avatar src="https://i.pravatar.cc/100" :size="4" />
    <Avatar src="https://i.pravatar.cc/200" :size="5" />
  </div>
  <div data-grid="row">
    <Avatar src="https://i.pravatar.cc/50" shape="square" />
    <Avatar src="https://i.pravatar.cc/100" shape="square" :size="4" />
    <Avatar src="https://i.pravatar.cc/200" shape="square" :size="5" />
  </div>
  <div data-grid="row">
    <Badge :count="99" type="success">
        <Avatar shape="square" icon="user" />
    </Badge>
    <Indicator type="success">
      <Avatar shape="square" icon="user" />
    </Indicator>
    <Badge :count="99" type="success">
        <Avatar icon="user" />
    </Badge>
    <Indicator type="success">
      <Avatar icon="user" />
    </Indicator>
  </div>
</div>
```
