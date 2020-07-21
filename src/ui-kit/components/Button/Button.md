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
