<template>
  <Card :type="type" class="collapse-card">
    <div class="collapse-card_header">
      <Button
        :class="[
          'collapse-card_header-toggle',
          {
            'collapse-card_header-toggle__active': visible
          }
        ]"
        type="ghost"
        shape="square"
        icon="angle-down"
        @click="toggleVisible"
      />
      <Checkbox
        v-model="checked"
        class="collapse-card_header-switch"
        type="switch"
      />
      <div class="collapse-card_header-title">
        <VLink class="elipsis" href="#"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
          consequuntur cum dolore doloribus iste iusto neque obcaecati, quae
          quam quia? Animi distinctio, eaque eos impedit magni porro sequi! A,
          harum?
        </VLink>
        <TextLabel class="collapse-card_date">
          id: 523934482
        </TextLabel>
      </div>
      <ul class="collapse-card_header-info">
        <li class="collapse-card_header-info-item">
          <TextLabel>
            Prototype:
          </TextLabel>
          <Tag type="ghost">DNDP</Tag>
        </li>
        <li class="collapse-card_header-info-item">
          <TextLabel>
            Version:
          </TextLabel>
          <Tag type="primary">6.8-6.9</Tag>
        </li>
        <li class="collapse-card_header-info-item">
          <TextLabel>
            Chests:
          </TextLabel>
          <Tag type="success">120</Tag>
        </li>
      </ul>
      <TextLabel class="collapse-card_header-date">
        12:53 09-03-2020
      </TextLabel>
      <Button
        class="collapse-card_header-menu"
        type="ghost"
        shape="circle"
        icon="ellipsis-v"
      />
    </div>
    <div v-if="visible" class="collapse-card_body">
      <div>
        <TextLabel>
          Tags:
        </TextLabel>
        <div class="collapse-card_body-tags">
          <Tag type="warning" v-for="(item, index) in 14" :key="index">
            #{{ `tag`.repeat(random(1, 3)) }}
          </Tag>
        </div>
      </div>
      <div>
        <TextLabel>
          3 last comment:
        </TextLabel>
        <ul class="collapse-card_body-comments">
          <li
            class="collapse-card_body-comments-item"
            v-for="(item, index) in 3"
            :key="index"
          >
            <Avatar
              :size="32"
              class="collapse-card_body-comments-avatar"
              text="User Tr"
            />
            <p>
              {{ getRandomString() }}
            </p>
          </li>
        </ul>
      </div>
      <div>
        <TextLabel>
          Progress:
        </TextLabel>
        <ProgressCircle
          class="progress"
          animation
          :value="76"
          type="success"
          :stroke-width="6"
        />
      </div>
    </div>
  </Card>
</template>

<script>
import random from '@/helpers/random'
import {
  Button,
  Checkbox,
  VLink,
  TextLabel,
  Avatar,
  Tag,
  ProgressCircle,
  Card
} from 'components'
export default {
  components: {
    Button,
    Checkbox,
    VLink,
    TextLabel,
    Avatar,
    Tag,
    ProgressCircle,
    Card
  },
  props: {
    type: {
      type: String,
      validator: value =>
        ['warning', 'error', 'success', 'primary', 'ghost'].includes(value),
      default: 'primary'
    }
  },
  data() {
    return {
      visible: false,
      checked: this.randomBoolean(),
      random
    }
  },
  methods: {
    toggleVisible() {
      this.visible = !this.visible
    },

    randomBoolean() {
      return Math.random() >= 0.5
    },

    getRandomString() {
      return 'Lorem ipsum dolor sit amet'.repeat(random(1, 5))
    }
  }
}
</script>

<style lang="scss">
@import 'collapse-card';
</style>
