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
      <Rating label="Label" :quantity="4" name="name1" />
    </div>
    <div>
      <Rating label="Label" :quantity="10" name="name2" />
    </div>
    <div>
      <Rating label="Label" :quantity="6" name="name3" />
    </div>
  </div>
</template>

<script>
import { Rating } from 'molecules'
export default {
  components: {
    Rating
  }
}
</script>
