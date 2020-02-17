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
      <h1>Количество: {{ value }}</h1>
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
    <Fieldset legend="fre" />
    <Fieldset legend="Legend"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem
      consectetur consequuntur debitis doloremque facere facilis laudantium
      neque nisi. Ab aut commodi exercitationem modi possimus ratione sint, unde
      vel voluptatem!</Fieldset
    >
    <Fieldset legend="Legend" />
  </div>
</template>

<script>
import { Rating } from 'molecules'
import { Fieldset } from 'atoms'
export default {
  components: {
    Rating,
    Fieldset
  },
  data() {
    return {
      value: 2
    }
  }
}
</script>
