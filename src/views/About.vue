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

    <Card>
      <Fieldset legend="Legend">
        <Empty></Empty>
      </Fieldset>
    </Card>
    <Card>
      <SkeletonFigure shape="circle" />
      <SkeletonBlock :size="8" :amount="20" />
    </Card>

    <SkeletonFrame>
      <SkeletonFigure />
      <br />
      <SkeletonLine />
      <br />
      <div>
        <SkeletonFigure />
        <br />
        <SkeletonBlock :size="8" :amount="20" />
      </div>
    </SkeletonFrame>
    <SkeletonFrame>
      <SkeletonRow>
        <SkeletonBlock :size="8" :amount="20" />
        <SkeletonBlock :size="8" :amount="20" />
      </SkeletonRow>
      <br />
      <SkeletonRow>
        <SkeletonFigure size="80px" shape="circle" />
        <SkeletonBlock :size="8" :amount="15" />
      </SkeletonRow>
      <SkeletonBlock :size="8" :amount="16" />
    </SkeletonFrame>
    <div>
      <SkeletonFigure size="80px" />
      <br />
      <SkeletonLine />
      <br />

      <br />
    </div>
    <SkeletonRow align="center">
      <SkeletonFigure shape="circle" />
      <SkeletonLine :size="['90%', '40px']" />
    </SkeletonRow>
    <SkeletonRow align="center">
      <SkeletonLine :size="['90%', '40px']" />
      <SkeletonBlock :size="8" :amount="16" />
    </SkeletonRow>
  </div>
</template>

<script>
import { Rating, Empty, Card } from 'molecules'
import { Fieldset } from 'atoms'
import {
  SkeletonRow,
  SkeletonBlock,
  SkeletonLine,
  SkeletonFrame,
  SkeletonFigure
} from 'skeletons'

export default {
  components: {
    SkeletonRow,
    SkeletonBlock,
    SkeletonLine,
    SkeletonFrame,
    SkeletonFigure,
    Rating,
    Fieldset,
    Empty,
    Card
  },
  data() {
    return {
      value: 2
    }
  }
}
</script>
