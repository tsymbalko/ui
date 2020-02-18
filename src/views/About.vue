<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
      aliquam amet aperiam doloremque ducimus eligendi, expedita facilis fuga
      hic nulla numquam perspiciatis placeat qui ratione reiciendis tempore
      veniam vero voluptate.
    </p>
    <div>
      <Rating label="Label" :quantity="4" checked="2" name="name1" />
    </div>
    <div>
      <Rating label="Label" name="name10" icon="star-mono" />
    </div>
    <div>
      <h1>Количество: + {{ value }}</h1>
      <div>
        <Rating
          label="Label"
          :quantity="8"
          checked="2"
          name="name2"
          icon="user-plus"
          v-model="value"
        />
      </div>
    </div>
    <div>
      <Rating
        label="Label"
        :quantity="6"
        checked="2"
        name="name5"
        color="var(--green)"
        icon="archive-alt"
      />
    </div>
    <div>
      <Rating
        label="Label"
        :quantity="6"
        checked="4"
        name="name3"
        icon="cog"
        color="var(--red)"
        disabled
      />
    </div>
    <Fieldset legend="Legend">
      <Empty></Empty>
    </Fieldset>
    <Block :size="8" :amount="20" />

    <PFrame>
      <VerticalLine />
    </PFrame>
    <PLine />

    <PCircle :size="60" />
    <Rectangle :height="20" />
    <div
      style="width: 100px;
      height: 100px;"
    >
      <Square />
    </div>
  </div>
</template>

<script>
import { Rating, Empty } from 'molecules'
import { Fieldset } from 'atoms'
import Block from '@/components/placeholders/Block'
import PCircle from '@/components/placeholders/Circle'
import PFrame from '@/components/placeholders/Frame'
import PLine from '@/components/placeholders/Line'
import VerticalLine from '@/components/placeholders/VerticalLine'
import Rectangle from '@/components/placeholders/Rectangle'
import Square from '@/components/placeholders/Square'

export default {
  components: {
    Rating,
    Fieldset,
    Empty,
    Block,
    PCircle,
    PFrame,
    PLine,
    VerticalLine,
    Rectangle,
    Square
  },
  data() {
    return {
      value: 2
    }
  }
}
</script>
