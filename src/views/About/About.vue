<template>
  <div class="about">
    <div class="about_header">
      <Heading divider="right">Article</Heading>
      <TextLabel>Lorem ipsum dolor sit amet, consectetur</TextLabel>
    </div>
    <div class="about_article">
      <Card>
        <Section title="Introduction" class="test-section" id="introduction">
          <p>
            Если вы когда-нибудь встречались с такой задачей, вы, вероятно,
            использовали магию JavaScript’а, которая, в конце-концов выглядела
            чудовищно…
          </p>
          <Blockquote>
            Сегодня изображения (их размер и количество на отдельно взятой
            странице) могут быть главной проблемой, когда дело касается
            производительности. Учитывая что от загрузки страницы напрямую
            зависит конверсия веб-сайта, эту проблему нельзя оставлять без
            внимания.
          </Blockquote>
          <p>
            Если вы когда-нибудь встречались с такой задачей, вы, вероятно,
            использовали магию JavaScript’а, которая, в конце-концов выглядела
            чудовищно…
          </p>
          <img
            loading="lazy"
            height="1401"
            src="https://images.unsplash.com/photo-1587903667455-930f632433d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            alt=""
          />
          <Blockquote>
            Сегодня изображения (их размер и количество на отдельно взятой
            странице) могут быть главной проблемой, когда дело касается
            производительности. Учитывая что от загрузки страницы напрямую
            зависит конверсия веб-сайта, эту проблему нельзя оставлять без
            внимания.
          </Blockquote>
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
        </Section>
      </Card>
      <Card>
        <Section
          title="Request &amp; Response"
          class="test-section"
          id="request-response"
        >
          <p>
            Сегодня изображения (их размер и количество на отдельно взятой
            странице) могут быть главной проблемой, когда дело касается
            производительности. Учитывая что от загрузки страницы напрямую
            зависит конверсия веб-сайта, эту проблему нельзя оставлять без
            внимания.
          </p>
          <img
            loading="lazy"
            height="1175"
            src="https://images.unsplash.com/photo-1587917998402-c8ddc8d84b5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
            alt=""
          />
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
            Если вы когда-нибудь встречались с такой задачей, вы, вероятно,
            использовали магию JavaScript’а, которая, в конце-концов выглядела
            чудовищно…
          </p>
          <p>
            Например, мы могли использовать события и функции отслеживающие
            позицию скролла, значение отступа, высоту элемента и высоту вьюпорта
            чтобы вычислить находится ли картинка в нём или нет. Звучит безумно,
            не так ли?
          </p>
        </Section>
      </Card>
      <Card>
        <Section
          title="Authentication"
          class="test-section"
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
        <Section title="Links" class="test-section" id="links">
          <p>Как хранить ссылки изображений не загружая их сразу.</p>
          <p>
            Сегодня изображения (их размер и количество на отдельно взятой
            странице) могут быть главной проблемой, когда дело касается
            производительности. Учитывая что от загрузки страницы напрямую
            зависит конверсия веб-сайта, эту проблему нельзя оставлять без
            внимания.
          </p>
          <img
            loading="lazy"
            height="1175"
            src="https://images.unsplash.com/photo-1587614222350-286dd1a0e619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
            alt=""
          />
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
          <img
            loading="lazy"
            height="1300"
            src="https://images.unsplash.com/photo-1587901307373-8caf8b1dee5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
            alt=""
          />
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
          <img
            loading="lazy"
            height="1365"
            src="https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=947&q=80"
            alt=""
          />
          <p>
            Если вы когда-нибудь встречались с такой задачей, вы, вероятно,
            использовали магию JavaScript’а, которая, в конце-концов выглядела
            чудовищно…
          </p>
        </Section>
      </Card>
      <Card>
        <Section title="Expanders" class="test-section" id="expanders">
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
        <Section title="Filters" class="test-section" id="filters">
          <p>
            Сегодня изображения (их размер и количество на отдельно взятой
            странице) могут быть главной проблемой, когда дело касается
            производительности. Учитывая что от загрузки страницы напрямую
            зависит конверсия веб-сайта, эту проблему нельзя оставлять без
            внимания.
          </p>
          <img
            loading="lazy"
            height="1401"
            src="https://images.unsplash.com/photo-1587695627142-19c8c51be969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            alt=""
          />
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
          <img
            loading="lazy"
            height="1175"
            src="https://images.unsplash.com/photo-1587836584895-df171114dbea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
            alt=""
          />
          <p>
            Если вы когда-нибудь встречались с такой задачей, вы, вероятно,
            использовали магию JavaScript’а, которая, в конце-концов выглядела
            чудовищно…
          </p>
        </Section>
      </Card>
    </div>
    <Anchors class="about_anchors" selector="test-section" />
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
  Blockquote
} from 'components'
export default {
  components: {
    Anchors,
    ProgressCircle,
    Card,
    Heading,
    TextLabel,
    Section,
    Blockquote
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
</style>
