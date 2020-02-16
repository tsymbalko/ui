Vue component example:

```vue
<Button type="warning">Add members</Button>
<Button type="error">Add members</Button>
<Button type="success">Add members</Button>
<Button type="primary">Add members</Button>
<Button>Add members</Button>
```

One more with generic code fence:

```vue
<Button type="warning" icon="star">Add members</Button>
<Button type="warning" icon="star">Add members</Button>
<Button type="warning" icon="star">Add members</Button>
```

You can also initialize vue to construct more complex examples in two ways:

1. Create a new Vue instance

2. Single-file components with a language tag of vue (supports <style scoped>)

Examples with all other languages are rendered only as highlighted source code, not an actual component:

```vue
<Button :size="50" type="primary"  shape="circle" icon="code">Add members</Button>
```

Any [Markdown](http://daringfireball.net/projects/markdown/) is **allowed** _here_.
