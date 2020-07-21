Vue component example:

```vue
<div data-theme="light">
  <div data-title="Expanders" class="test-section" id="expanders">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at consectetur eius est exercitationem, nam nisi porro unde. A architecto at consequuntur, culpa doloribus eos fugit ipsam nulla omnis sequi.
  </div>
  <div data-title="test" class="test-section" id="Test">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at consectetur eius est exercitationem, nam nisi porro unde. A architecto at consequuntur, culpa doloribus eos fugit ipsam nulla omnis sequi.
  </div>
  <Anchors class="about_anchors" :selector="'.test-section[id]'" />
</div>
<div data-theme="dark">
  <div data-title="Expanders2" class="test-section2" id="expanders2">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at consectetur eius est exercitationem, nam nisi porro unde. A architecto at consequuntur, culpa doloribus eos fugit ipsam nulla omnis sequi.
  </div>
  <div data-title="test2" class="test-section2" id="Test2">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at consectetur eius est exercitationem, nam nisi porro unde. A architecto at consequuntur, culpa doloribus eos fugit ipsam nulla omnis sequi.
  </div>
  <Anchors class="about_anchors" :selector="'.test-section2[id]'" />
</div>
```

One more with generic code fence:

You can also initialize vue to construct more complex examples in two ways:

1. Create a new Vue instance

2. Single-file components with a language tag of vue (supports <style scoped>)

Examples with all other languages are rendered only as highlighted source code, not an actual component:

Any [Markdown](http://daringfireball.net/projects/markdown/) is **allowed** _here_.
