<template>
  <div class="about">
    <div class="about_header">
      <Heading>Settings you application</Heading>
      <TextLabel>Настройка цветовой схемы приложения и тд и тп</TextLabel>
    </div>
    <div class="about_article">
      <Card>
        <Section title="Introduction" class="test-Section" id="introduction">
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
          class="test-Section"
          id="request-response"
        >
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
          class="test-Section"
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
        <Section title="Links" class="test-Section" id="links">
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
        <Section title="Expanders" class="test-Section" id="expanders">
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
        <Section title="Filters" class="test-Section" id="filters">
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
    <Anchors class="about_anchors" :selector="'.test-Section[id]'" />
  </div>
</template>

<script>
import {
  Heading,
  Anchors,
  ProgressCircle,
  Card,
  TextLabel,
  Section
} from 'components'
export default {
  components: {
    Anchors,
    ProgressCircle,
    Card,
    Heading,
    TextLabel,
    Section
  },
  data() {
    return {
      value1: 33,
      value2: 20.2,
      value3: 49,
      value4: 78
    }
  }
}
</script>

<style lang="scss">
@import 'about';
</style>
