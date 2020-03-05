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
      <SFigure shape="circle" />
      <SBlock :size="8" :amount="20" />
    </Card>

    <SFrame>
      <SRow>
        <SFigure />
        <SBlock :size="8" :amount="20" />
      </SRow>
    </SFrame>
    <br />
    <SFrame>
      <SLine :size="['60%', '40px']" />
      <SRow>
        <SBlock :size="8" :amount="20" />
        <SBlock :size="8" :amount="20" />
      </SRow>
      <br />
      <SRow>
        <SFigure size="80px" shape="circle" />
        <SBlock :size="8" :amount="15" />
      </SRow>
      <SBlock :size="8" :amount="16" />
    </SFrame>
    <br />
    <SFrame>
      <SRow>
        <SFigure size="80px" />
        <SBlock :size="8" :amount="15" />
      </SRow>
      <SLine />
      <SBlock :size="8" :amount="20" />
    </SFrame>
    <br />
    <SFrame>
      <SRow align="center">
        <SFigure shape="circle" />
        <SLine :size="['90%', '40px']" />
      </SRow>
      <SRow align="center">
        <SBlock :size="8" :amount="16" />
        <div style="width: 60%;">
          <SLine :size="['90%', '40px']" />
          <SLine :size="['90%', '40px']" />
        </div>
      </SRow>
    </SFrame>
    <br />
    <SFrame>
      <SRow align="center">
        <SFigure shape="circle" />
        <div style="width: 90%;">
          <SLine :size="['auto', '20px']" />
          <SLine :size="['auto', '20px']" />
        </div>
      </SRow>
      <SRow align="center">
        <SBlock :size="8" :amount="32" />
        <div style="width: 60%;">
          <SLine :size="['90%', '220px']" />
        </div>
      </SRow>
      <SBlock :size="8" :amount="16" />
    </SFrame>
  </div>
</template>

<script>
import { Fieldset, Rating, Empty, Card } from 'atoms'
import { SRow, SBlock, SLine, SFrame, SFigure } from 'skeletons'

export default {
  components: {
    SRow,
    SBlock,
    SLine,
    SFrame,
    SFigure,
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
