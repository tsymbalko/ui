<template>
  <div class="about">
    <div class="about_header">
      <Heading class="about_heading" :indent="0" divider="right">
        Components
      </Heading>
      <TextLabel>
        Set of high quality components and demos for building rich, interactive
        user interfaces
      </TextLabel>
    </div>
    <div class="about_article">
      <Card>
        <Section title="Buttons" class="components-section" id="Buttons">
          <div class="preview-row">
            <Button>Primary</Button>
            <Button color="warning">Warning</Button>
            <Button color="error">Error</Button>
            <Button color="success">Success</Button>
            <Button color="secondary">Secondary</Button>
            <Button disabled>Disabled</Button>
          </div>
          <div class="preview-row">
            <Button variant="bordered">Primary</Button>
            <Button variant="bordered" color="warning">Warning</Button>
            <Button variant="bordered" color="error">Error</Button>
            <Button variant="bordered" color="success">Success</Button>
            <Button variant="bordered" color="secondary">Secondary</Button>
            <Button disabled variant="bordered">Disabled</Button>
          </div>
          <div class="preview-row">
            <Button variant="ghost">Primary</Button>
            <Button variant="ghost" color="warning">Warning</Button>
            <Button variant="ghost" color="error">Error</Button>
            <Button variant="ghost" color="success">Success</Button>
            <Button variant="ghost" color="secondary">Secondary</Button>
            <Button disabled variant="ghost">Disabled</Button>
          </div>
          <div class="preview-row">
            <Button loading>Warning</Button>
            <Button loading color="warning">Warning</Button>
            <Button loading color="error">Error</Button>
            <Button loading color="success">Success</Button>
            <Button loading color="secondary">Primary</Button>
          </div>
          <div class="preview-row">
            <Button loading variant="bordered">Warning</Button>
            <Button loading variant="bordered" color="warning">Warning</Button>
            <Button loading variant="bordered" color="error">Error</Button>
            <Button loading variant="bordered" color="success">Success</Button>
            <Button loading variant="bordered" color="secondary"
              >Primary</Button
            >
          </div>
          <div class="preview-row">
            <Button loading variant="ghost">Warning</Button>
            <Button loading variant="ghost" color="warning">Warning</Button>
            <Button loading variant="ghost" color="error">Error</Button>
            <Button loading variant="ghost" color="success">Success</Button>
            <Button loading variant="ghost" color="secondary">Primary</Button>
          </div>
          <div class="preview-row">
            <Button shape="circle" icon="cog">Button</Button>
            <Button shape="round" icon="cog">Button</Button>
            <Button shape="round" icon="cog" icon-position="right"
              >Button</Button
            >
            <Button shape="square" icon="cog">Button</Button>
            <Button shape="rectangle" icon="cog">Button</Button>
            <Button shape="rectangle" icon="cog" icon-position="right"
              >Button</Button
            >
          </div>
          <div class="preview-row">
            <Button variant="bordered" shape="circle" icon="cog">Button</Button>
            <Button variant="bordered" shape="round" icon="cog">Button</Button>
            <Button
              variant="bordered"
              shape="round"
              icon="cog"
              icon-position="right"
              >Button</Button
            >
            <Button variant="bordered" shape="square" icon="cog">Button</Button>
            <Button variant="bordered" shape="rectangle" icon="cog"
              >Button</Button
            >
            <Button
              variant="bordered"
              shape="rectangle"
              icon="cog"
              icon-position="right"
              >Button</Button
            >
          </div>
          <div class="preview-row">
            <Button variant="ghost" shape="circle" icon="cog">Button</Button>
            <Button variant="ghost" shape="round" icon="cog">Button</Button>
            <Button
              variant="ghost"
              shape="round"
              icon="cog"
              icon-position="right"
              >Button</Button
            >
            <Button variant="ghost" shape="square" icon="cog">Button</Button>
            <Button variant="ghost" shape="rectangle" icon="cog">Button</Button>
            <Button
              variant="ghost"
              shape="rectangle"
              icon="cog"
              icon-position="right"
              >Button</Button
            >
          </div>
          <div class="preview-row">
            <Button loading variant="bordered" shape="circle" icon="cog"
              >Button</Button
            >
            <Button loading variant="bordered" shape="round" icon="cog"
              >Button</Button
            >
            <Button
              loading
              variant="bordered"
              shape="round"
              icon="cog"
              icon-position="right"
              >Button</Button
            >
            <Button loading variant="bordered" shape="square" icon="cog"
              >Button</Button
            >
            <Button loading variant="bordered" shape="rectangle" icon="cog"
              >Button</Button
            >
            <Button
              loading
              variant="bordered"
              shape="rectangle"
              icon="cog"
              icon-position="right"
              >Button</Button
            >
          </div>
          <div class="preview-row">
            <Button :size="3" shape="circle" icon="cog">Button</Button>
            <Button :size="3.5" shape="circle" icon="cog">Button</Button>
            <Button :size="4" shape="circle" icon="cog">Button</Button>
            <Button :size="3" shape="square" icon="cog">Button</Button>
            <Button :size="3.5" shape="square" icon="cog">Button</Button>
            <Button :size="4" shape="square" icon="cog">Button</Button>
          </div>
          <div class="preview-row">
            <Button :size="3.5" shape="circle" icon="cog">Button</Button>
            <Button :size="3.5" shape="round" icon="cog">Button</Button>
            <Button :size="3.5" shape="round" icon="cog" icon-position="right"
              >Button</Button
            >
            <Button :size="3.5" shape="square" icon="cog">Button</Button>
            <Button :size="3.5" shape="rectangle" icon="cog">Button</Button>
            <Button
              :size="3.5"
              shape="rectangle"
              icon="cog"
              icon-position="right"
              >Button</Button
            >
          </div>
        </Section>
      </Card>
      <Card>
        <Section title="Tags" class="components-section" id="Tags">
          <div class="preview-row">
            <Tag>183%</Tag>
            <Tag>Text value</Tag>
            <Tag closable>183%</Tag>
            <Tag icon="archive-alt" closable>183%</Tag>
          </div>
          <div class="preview-row">
            <Tag type="primary">183%</Tag>
            <Tag type="primary">Text value</Tag>
            <Tag type="primary" closable>183%</Tag>
            <Tag type="primary" icon="archive-alt" closable>183%</Tag>
          </div>
          <div class="preview-row">
            <Tag type="warning">183%</Tag>
            <Tag type="warning">Text value</Tag>
            <Tag type="warning" closable>183%</Tag>
            <Tag type="warning" icon="archive-alt" closable>183%</Tag>
          </div>
          <div class="preview-row">
            <Tag type="error">183%</Tag>
            <Tag type="error">Text value</Tag>
            <Tag type="error" closable>183%</Tag>
            <Tag type="error" icon="archive-alt" closable>183%</Tag>
          </div>
          <div class="preview-row">
            <Tag type="success">183%</Tag>
            <Tag type="success">Text value</Tag>
            <Tag type="success" closable>183%</Tag>
            <Tag type="success" icon="archive-alt" closable>183%</Tag>
          </div>
          <div class="preview-row">
            <Tag color="#0070D2" shape="rectangle" closable icon="cog"
              >183%</Tag
            >
            <Tag color="#C23934" shape="rectangle" closable icon="cog"
              >Text</Tag
            >
            <Tag color="#FFB75D" shape="rectangle" closable icon="cog"
              >Text Value</Tag
            >
            <Tag color="#50CC7A" shape="rectangle" closable icon="cog"
              >183%</Tag
            >
            <Tag color="#597BAE" shape="rectangle" closable icon="cog"
              >183%</Tag
            >
          </div>
        </Section>
      </Card>
      <Card>
        <Section
          title="Authentication"
          class="components-section"
          id="authentication"
        >
          <p>Чтобы это сделать, нам необходимо решить:</p>
          <br />
          <div
            style="display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;"
          >
            <ProgressCircle class="progress" animation :value="value1" />
            <ProgressCircle
              class="progress"
              animation
              :value="value2"
              type="warning"
              :stroke-width="6"
            />
            <ProgressCircle
              class="progress"
              animation
              :value="value3"
              type="success"
              :stroke-width="6"
            />
            <ProgressCircle
              class="progress"
              animation
              :value="value4"
              type="error"
              :stroke-width="6"
            />
            <ProgressCircle
              class="progress"
              animation
              :value="value2"
              type="warning"
              :stroke-width="6"
            />
          </div>
          <br />
          <p>
            Если бы нам действительно было необходимо, мы могли бы прибегнуть к
            этому решению (не важно насколько бы ужасно оно ни выглядело), но
            это бы сказалось на производительности. Такие вычисления бы
            производились при каждом событии скролла. Более того, представьте
            что у вас несколько изображений каждое из которых должно вычислить
            находится ли оно в зоне видимости или нет при каждом скролле.
          </p>
        </Section>
      </Card>
      <Card>
        <Section title="Links" class="components-section" id="links">
          <p>Как хранить ссылки изображений не загружая их сразу.</p>
          <p>
            Сегодня изображения (их размер и количество на отдельно взятой
            странице) могут быть главной проблемой, когда дело касается
            производительности. Учитывая что от загрузки страницы напрямую
            зависит конверсия веб-сайта, эту проблему нельзя оставлять без
            внимания.
          </p>
          <p>
            Если вы когда-нибудь встречались с такой задачей, вы, вероятно,
            использовали магию JavaScript’а, которая, в конце-концов выглядела
            чудовищно…
          </p>
          <p>
            Сегодня изображения (их размер и количество на отдельно взятой
            странице) могут быть главной проблемой, когда дело касается
            производительности. Учитывая что от загрузки страницы напрямую
            зависит конверсия веб-сайта, эту проблему нельзя оставлять без
            внимания.
          </p>
          <p>
            Если вы когда-нибудь встречались с такой задачей, вы, вероятно,
            использовали магию JavaScript’а, которая, в конце-концов выглядела
            чудовищно…
          </p>
          <br />
          <div
            style="display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;"
          >
            <ProgressCircle class="progress" animation :value="value1" />
            <ProgressCircle
              class="progress"
              animation
              :value="value2"
              type="warning"
              :stroke-width="6"
            />
            <ProgressCircle
              class="progress"
              animation
              :value="value3"
              type="success"
              :stroke-width="6"
            />
            <ProgressCircle
              class="progress"
              animation
              :value="value4"
              type="error"
              :stroke-width="6"
            />
            <ProgressCircle
              class="progress"
              animation
              :value="value2"
              type="warning"
              :stroke-width="6"
            />
          </div>
          <br />
          <p>
            Сегодня изображения (их размер и количество на отдельно взятой
            странице) могут быть главной проблемой, когда дело касается
            производительности. Учитывая что от загрузки страницы напрямую
            зависит конверсия веб-сайта, эту проблему нельзя оставлять без
            внимания.
          </p>
          <p>
            Если вы когда-нибудь встречались с такой задачей, вы, вероятно,
            использовали магию JavaScript’а, которая, в конце-концов выглядела
            чудовищно…
          </p>
        </Section>
      </Card>
      <Card>
        <Section title="Expanders" class="components-section" id="expanders">
          <p>
            Как определить когда изображение становится видимым (необходимым)
            пользователю и отправить за ним запрос.
          </p>
          <p>
            Сегодня изображения (их размер и количество на отдельно взятой
            странице) могут быть главной проблемой, когда дело касается
            производительности. Учитывая что от загрузки страницы напрямую
            зависит конверсия веб-сайта, эту проблему нельзя оставлять без
            внимания.
          </p>
          <p>
            Если вы когда-нибудь встречались с такой задачей, вы, вероятно,
            использовали магию JavaScript’а, которая, в конце-концов выглядела
            чудовищно…
          </p>

          <p>
            Сегодня изображения (их размер и количество на отдельно взятой
            странице) могут быть главной проблемой, когда дело касается
            производительности. Учитывая что от загрузки страницы напрямую
            зависит конверсия веб-сайта, эту проблему нельзя оставлять без
            внимания.
          </p>
          <p>
            Если вы когда-нибудь встречались с такой задачей, вы, вероятно,
            использовали магию JavaScript’а, которая, в конце-концов выглядела
            чудовищно…
          </p>
          <br />
          <div
            style="display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;"
          >
            <ProgressCircle class="progress" animation :value="value1" />
            <ProgressCircle
              class="progress"
              animation
              :value="value2"
              type="warning"
              :stroke-width="6"
            />
            <ProgressCircle
              class="progress"
              animation
              :value="value3"
              type="success"
              :stroke-width="6"
            />
            <ProgressCircle
              class="progress"
              animation
              :value="value4"
              type="error"
              :stroke-width="6"
            />
            <ProgressCircle
              class="progress"
              animation
              :value="value2"
              type="warning"
              :stroke-width="6"
            />
          </div>
          <br />
          <p>
            Сегодня изображения (их размер и количество на отдельно взятой
            странице) могут быть главной проблемой, когда дело касается
            производительности. Учитывая что от загрузки страницы напрямую
            зависит конверсия веб-сайта, эту проблему нельзя оставлять без
            внимания.
          </p>
          <p>
            Если вы когда-нибудь встречались с такой задачей, вы, вероятно,
            использовали магию JavaScript’а, которая, в конце-концов выглядела
            чудовищно…
          </p>
        </Section>
      </Card>
      <Card>
        <Section title="Filters" class="components-section" id="filters">
          <p>
            Сегодня изображения (их размер и количество на отдельно взятой
            странице) могут быть главной проблемой, когда дело касается
            производительности. Учитывая что от загрузки страницы напрямую
            зависит конверсия веб-сайта, эту проблему нельзя оставлять без
            внимания.
          </p>
          <p>
            Если вы когда-нибудь встречались с такой задачей, вы, вероятно,
            использовали магию JavaScript’а, которая, в конце-концов выглядела
            чудовищно…
          </p>
          <p>
            Сегодня изображения (их размер и количество на отдельно взятой
            странице) могут быть главной проблемой, когда дело касается
            производительности. Учитывая что от загрузки страницы напрямую
            зависит конверсия веб-сайта, эту проблему нельзя оставлять без
            внимания.
          </p>
          <p>
            Если вы когда-нибудь встречались с такой задачей, вы, вероятно,
            использовали магию JavaScript’а, которая, в конце-концов выглядела
            чудовищно…
          </p>
          <p>
            Сегодня изображения (их размер и количество на отдельно взятой
            странице) могут быть главной проблемой, когда дело касается
            производительности. Учитывая что от загрузки страницы напрямую
            зависит конверсия веб-сайта, эту проблему нельзя оставлять без
            внимания.
          </p>
          <p>
            Если вы когда-нибудь встречались с такой задачей, вы, вероятно,
            использовали магию JavaScript’а, которая, в конце-концов выглядела
            чудовищно…
          </p>
          <p>
            Сегодня изображения (их размер и количество на отдельно взятой
            странице) могут быть главной проблемой, когда дело касается
            производительности. Учитывая что от загрузки страницы напрямую
            зависит конверсия веб-сайта, эту проблему нельзя оставлять без
            внимания.
          </p>
          <br />
          <div
            style="display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;"
          >
            <ProgressCircle class="progress" animation :value="value1" />
            <ProgressCircle
              class="progress"
              animation
              :value="value2"
              type="warning"
              :stroke-width="6"
            />
            <ProgressCircle
              class="progress"
              animation
              :value="value3"
              type="success"
              :stroke-width="6"
            />
            <ProgressCircle
              class="progress"
              animation
              :value="value4"
              type="error"
              :stroke-width="6"
            />
            <ProgressCircle
              class="progress"
              animation
              :value="value2"
              type="warning"
              :stroke-width="6"
            />
          </div>
          <br />
          <p>
            Если вы когда-нибудь встречались с такой задачей, вы, вероятно,
            использовали магию JavaScript’а, которая, в конце-концов выглядела
            чудовищно…
          </p>
          <p>
            Сегодня изображения (их размер и количество на отдельно взятой
            странице) могут быть главной проблемой, когда дело касается
            производительности. Учитывая что от загрузки страницы напрямую
            зависит конверсия веб-сайта, эту проблему нельзя оставлять без
            внимания.
          </p>
          <p>
            Если вы когда-нибудь встречались с такой задачей, вы, вероятно,
            использовали магию JavaScript’а, которая, в конце-концов выглядела
            чудовищно…
          </p>
          <p>
            Если вы когда-нибудь встречались с такой задачей, вы, вероятно,
            использовали магию JavaScript’а, которая, в конце-концов выглядела
            чудовищно…
          </p>
        </Section>
      </Card>
    </div>
    <Anchors class="about_anchors" selector="components-section" />
  </div>
</template>

<script>
import {
  Heading,
  Anchors,
  ProgressCircle,
  Card,
  TextLabel,
  Section,
  Button,
  Tag
} from 'components'
export default {
  components: {
    Anchors,
    ProgressCircle,
    Card,
    Heading,
    TextLabel,
    Section,
    Button,
    Tag
  },
  data() {
    return {
      value1: 33,
      value2: 20.2,
      value3: 49,
      value4: 78,
      test2: 12
    }
  }
}
</script>

<style lang="scss">
@import 'about';
.preview-row {
  display: grid;
  grid-gap: 12px;
  grid-auto-flow: column;
  margin-bottom: 12px;
  grid-auto-columns: min-content;
}
</style>
