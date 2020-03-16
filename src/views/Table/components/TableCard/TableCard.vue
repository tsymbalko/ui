<template>
  <div :class="['collapse-card', { [`collapse-card__${type}`]: type }]">
    <div class="collapse-card_header" ёё>
      <Button
        :class="[
          'collapse-card_toggle',
          {
            'collapse-card_toggle__active': visible
          }
        ]"
        type="ghost"
        shape="square"
        icon="angle-down"
        @click="toggleVisible"
      />
      <Checkbox class="collapse-card_switch" type="switch" />
      <div class="collapse-card_name">
        <VLink class="elipsis" href="#"
          >Lorem ipsue skjdfnksdj kjnfksjd skdjnfksjdnfj sdkjfnksdjn</VLink
        >
        <TextLabel class="collapse-card_date">
          id: 523934482
        </TextLabel>
      </div>
      <ul class="collapse-card_info">
        <li class="collapse-card_info-item">
          <TextLabel class="collapse-card_date">
            Prototype:
          </TextLabel>
          <span>DNPT</span>
        </li>
        <li class="collapse-card_info-item">
          <TextLabel class="collapse-card_date">
            Version:
          </TextLabel>
          <Badge count="6.8-6.9" type="primary" />
        </li>
        <li class="collapse-card_info-item">
          <TextLabel class="collapse-card_date">
            Chests:
          </TextLabel>
          <Badge :count="120" :overflowCount="100" type="success" />
        </li>
      </ul>
      <TextLabel class="collapse-card_date">
        12:53 09-03-2020
      </TextLabel>
      <Button
        class="collapse-card_menu"
        type="ghost"
        shape="square"
        icon="ellipsis-v"
      />
    </div>
    <div v-if="visible" class="collapse-card_body">
      <div>
        <TextLabel class="collapse-card_date">
          Tags:
        </TextLabel>
        <div class="collapse-card_tags">
          <Tag type="warning" v-for="(item, index) in 14" :key="index">
            #{{ `tag`.repeat(random(1, 3)) }}
          </Tag>
        </div>
      </div>
      <div>
        <TextLabel class="collapse-card_date">
          3 last comment:
        </TextLabel>
        <ul class="collapse-card_comments">
          <li class="collapse-card_comments-item">
            <Avatar
              :size="32"
              class="collapse-card_comments-avatar"
              text="User Tr"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </li>
          <li class="collapse-card_comments-item">
            <Avatar
              :size="32"
              class="collapse-card_comments-avatar"
              text="E u"
            />
            <p>
              Lorem ipsum dolor sit amet
            </p>
          </li>
          <li class="collapse-card_comments-item">
            <Avatar
              :size="32"
              class="collapse-card_comments-avatar"
              text="m a"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              asperiores cumque expedita
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
  </div>
</template>

<script>
import random from '@/helpers/random'
import {
  Button,
  Checkbox,
  VLink,
  TextLabel,
  Badge,
  Avatar,
  Tag,
  ProgressCircle
} from 'components'
export default {
  components: {
    Button,
    Checkbox,
    VLink,
    TextLabel,
    Badge,
    Avatar,
    Tag,
    ProgressCircle
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
      random
    }
  },
  methods: {
    toggleVisible() {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss">
@import 'table-card';
</style>
