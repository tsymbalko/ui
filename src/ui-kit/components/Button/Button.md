```vue
    <img src="data:image/png;base64,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" alt="">
```
### Examples:
**`data-theme="light"`, `data-theme="dark"` в примерах используется для отображения компонента в соотв. цветовой схеме**
```vue
<div data-theme="light">
    <div data-grid="row">
        <Button>Primary</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Error</Button>
        <Button color="success">Success</Button>
        <Button color="secondary">Secondary</Button>
        <Button disabled >Disabled</Button>
    </div>
    <div data-grid="row">
        <Button variant="bordered">Primary</Button>
        <Button variant="bordered" color="warning">Warning</Button>
        <Button variant="bordered" color="error">Error</Button>
        <Button variant="bordered" color="success">Success</Button>
        <Button variant="bordered" color="secondary">Secondary</Button>
        <Button disabled variant="bordered" >Disabled</Button>
    </div>
    <div data-grid="row">
        <Button variant="ghost">Primary</Button>
        <Button variant="ghost" color="warning">Warning</Button>
        <Button variant="ghost" color="error">Error</Button>
        <Button variant="ghost" color="success">Success</Button>
        <Button variant="ghost" color="secondary">Secondary</Button>
        <Button disabled variant="ghost" >Disabled</Button>
    </div>
</div>
<div data-theme="dark">
    <div data-grid="row">
        <Button>Primary</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Error</Button>
        <Button color="success">Success</Button>
        <Button color="secondary">Secondary</Button>
        <Button disabled  >Disabled</Button>
    </div>
    <div data-grid="row">
        <Button variant="bordered">Primary</Button>
        <Button variant="bordered" color="warning">Warning</Button>
        <Button variant="bordered" color="error">Error</Button>
        <Button variant="bordered" color="success">Success</Button>
        <Button variant="bordered" color="secondary">Secondary</Button>
        <Button disabled variant="bordered"  >Disabled</Button>
    </div>
    <div data-grid="row">
        <Button variant="ghost">Primary</Button>
        <Button variant="ghost" color="warning">Warning</Button>
        <Button variant="ghost" color="error">Error</Button>
        <Button variant="ghost" color="success">Success</Button>
        <Button variant="ghost" color="secondary">Secondary</Button>
        <Button disabled variant="ghost"  >Disabled</Button>
    </div>
</div>
```
```vue
<div data-theme="light">
    <div data-grid="row">
        <Button shape="circle" icon="cog">Button</Button>
        <Button shape="round" icon="cog">Button</Button>
        <Button shape="round" icon="cog" icon-position="right">Button</Button>
        <Button shape="square" icon="cog">Button</Button>
        <Button shape="rectangle" icon="cog">Button</Button>
        <Button shape="rectangle" icon="cog" icon-position="right">Button</Button>
    </div>
    <div data-grid="row">
        <Button variant="bordered" shape="circle" icon="cog">Button</Button>
        <Button variant="bordered" shape="round" icon="cog">Button</Button>
        <Button variant="bordered" shape="round" icon="cog" icon-position="right">Button</Button>
        <Button variant="bordered" shape="square" icon="cog">Button</Button>
        <Button variant="bordered" shape="rectangle" icon="cog">Button</Button>
        <Button variant="bordered" shape="rectangle" icon="cog" icon-position="right">Button</Button>
    </div>
    <div data-grid="row">
        <Button variant="ghost" shape="circle" icon="cog">Button</Button>
        <Button variant="ghost" shape="round" icon="cog">Button</Button>
        <Button variant="ghost" shape="round" icon="cog" icon-position="right">Button</Button>
        <Button variant="ghost" shape="square" icon="cog">Button</Button>
        <Button variant="ghost" shape="rectangle" icon="cog">Button</Button>
        <Button variant="ghost" shape="rectangle" icon="cog" icon-position="right">Button</Button>
    </div>
</div>
<div data-theme="dark">
    <div data-grid="row">
        <Button shape="circle"   icon="cog">Button</Button>
        <Button shape="round"   icon="cog">Button</Button>
        <Button shape="round"   icon="cog" icon-position="right">Button</Button>
        <Button shape="square"   icon="cog">Button</Button>
        <Button shape="rectangle"   icon="cog">Button</Button>
        <Button shape="rectangle"   icon="cog" icon-position="right">Button</Button>
    </div>
    <div data-grid="row">
        <Button variant="bordered" shape="circle"   icon="cog">Button</Button>
        <Button variant="bordered" shape="round"   icon="cog">Button</Button>
        <Button variant="bordered" shape="round"   icon="cog" icon-position="right">Button</Button>
        <Button variant="bordered" shape="square"   icon="cog">Button</Button>
        <Button variant="bordered" shape="rectangle"   icon="cog">Button</Button>
        <Button variant="bordered" shape="rectangle"   icon="cog" icon-position="right">Button</Button>
    </div>
    <div data-grid="row">
        <Button variant="ghost" shape="circle"   icon="cog">Button</Button>
        <Button variant="ghost" shape="round"   icon="cog">Button</Button>
        <Button variant="ghost" shape="round"   icon="cog" icon-position="right">Button</Button>
        <Button variant="ghost" shape="square"   icon="cog">Button</Button>
        <Button variant="ghost" shape="rectangle"   icon="cog">Button</Button>
        <Button variant="ghost" shape="rectangle"   icon="cog" icon-position="right">Button</Button>
    </div>
</div>
```

```vue
<div data-theme="light">
    <div data-grid="row">
        <Button loading>Warning</Button>
        <Button loading color="warning">Warning</Button>
        <Button loading color="error">Error</Button>
        <Button loading color="success">Success</Button>
        <Button loading color="secondary">Primary</Button>
    </div>
    <div data-grid="row">
        <Button loading variant="bordered">Warning</Button>
        <Button loading variant="bordered" color="warning">Warning</Button>
        <Button loading variant="bordered" color="error">Error</Button>
        <Button loading variant="bordered" color="success">Success</Button>
        <Button loading variant="bordered" color="secondary">Primary</Button>
    </div>
    <div data-grid="row">
        <Button loading variant="ghost">Warning</Button>
        <Button loading variant="ghost" color="warning">Warning</Button>
        <Button loading variant="ghost" color="error">Error</Button>
        <Button loading variant="ghost" color="success">Success</Button>
        <Button loading variant="ghost" color="secondary">Primary</Button>
    </div>
    <div data-grid="row">
        <Button loading variant="bordered" shape="circle"   icon="cog">Button</Button>
        <Button loading variant="bordered" shape="round"   icon="cog">Button</Button>
        <Button loading variant="bordered" shape="round"   icon="cog" icon-position="right">Button</Button>
        <Button loading variant="bordered" shape="square"   icon="cog">Button</Button>
        <Button loading variant="bordered" shape="rectangle"   icon="cog">Button</Button>
        <Button loading variant="bordered" shape="rectangle"   icon="cog" icon-position="right">Button</Button>
    </div>
</div>
<div data-theme="dark">
    <div data-grid="row">
        <Button loading>Warning</Button>
        <Button loading color="warning">Warning</Button>
        <Button loading color="error">Error</Button>
        <Button loading color="success">Success</Button>
        <Button loading color="secondary">Primary</Button>
    </div>
    <div data-grid="row">
        <Button loading variant="bordered">Warning</Button>
        <Button loading variant="bordered" color="warning">Warning</Button>
        <Button loading variant="bordered" color="error">Error</Button>
        <Button loading variant="bordered" color="success">Success</Button>
        <Button loading variant="bordered" color="secondary">Primary</Button>
    </div>
    <div data-grid="row">
        <Button loading variant="ghost">Warning</Button>
        <Button loading variant="ghost" color="warning">Warning</Button>
        <Button loading variant="ghost" color="error">Error</Button>
        <Button loading variant="ghost" color="success">Success</Button>
        <Button loading variant="ghost" color="secondary">Primary</Button>
    </div>
    <div data-grid="row">
        <Button loading variant="bordered" shape="circle" icon="cog">Button</Button>
        <Button loading variant="bordered" shape="round" icon="cog">Button</Button>
        <Button loading variant="bordered" shape="round" icon="cog" icon-position="right">Button</Button>
        <Button loading variant="bordered" shape="square" icon="cog">Button</Button>
        <Button loading variant="bordered" shape="rectangle" icon="cog">Button</Button>
        <Button loading variant="bordered" shape="rectangle" icon="cog" icon-position="right">Button</Button>
    </div>
</div>
```

```vue
<div data-theme="light">
  <div data-grid="row">
    <Button :size="3" shape="circle" icon="cog">Button</Button>
    <Button :size="3.5" shape="circle" icon="cog">Button</Button>
    <Button :size="4" shape="circle" icon="cog">Button</Button>
    <Button :size="3" shape="square" icon="cog">Button</Button>
    <Button :size="3.5" shape="square" icon="cog">Button</Button>
    <Button :size="4" shape="square" icon="cog">Button</Button>
  </div>
  <div data-grid="row">
    <Button :size="3.5" shape="circle" icon="cog">Button</Button>
    <Button :size="3.5" shape="round" icon="cog">Button</Button>
    <Button :size="3.5" shape="round" icon="cog" icon-position="right">Button</Button>
    <Button :size="3.5" shape="square" icon="cog">Button</Button>
    <Button :size="3.5" shape="rectangle" icon="cog">Button</Button>
    <Button :size="3.5" shape="rectangle" icon="cog" icon-position="right">Button</Button>
  </div>
</div>
```
