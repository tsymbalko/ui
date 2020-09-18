<template>
  <Card>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis error
      fuga in ipsam iure mollitia non omnis pariatur, placeat quaerat sapiente
      sint temporibus, vitae. Deserunt dolorum illo magni officiis voluptatem.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis error
      fuga in ipsam iure mollitia non omnis pariatur, placeat quaerat sapiente
      sint temporibus, vitae. Deserunt dolorum illo magni officiis voluptatem.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis error
      fuga in ipsam iure mollitia non omnis pariatur, placeat quaerat sapiente
      sint temporibus, vitae. Deserunt dolorum illo magni officiis voluptatem.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis error
      fuga in ipsam iure mollitia non omnis pariatur, placeat quaerat sapiente
      sint temporibus, vitae. Deserunt dolorum illo magni officiis voluptatem.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis error
      fuga in ipsam iure mollitia non omnis pariatur, placeat quaerat sapiente
      sint temporibus, vitae. Deserunt dolorum illo magni officiis voluptatem.
    </p>
    <div style="text-align: right;">
      <Button @click="toggle" icon="cog" shape="square" />
      <Menu
        append-to="body"
        id="overlay_menu"
        ref="menu"
        :model="items"
        :popup="true"
      />
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis error
      fuga in ipsam iure mollitia non omnis pariatur, placeat quaerat sapiente
      sint temporibus, vitae. Deserunt dolorum illo magni officiis voluptatem.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis error
      fuga in ipsam iure mollitia non omnis pariatur, placeat quaerat sapiente
      sint temporibus, vitae. Deserunt dolorum illo magni officiis voluptatem.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis error
      fuga in ipsam iure mollitia non omnis pariatur, placeat quaerat sapiente
      sint temporibus, vitae. Deserunt dolorum illo magni officiis voluptatem.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis error
      fuga in ipsam iure mollitia non omnis pariatur, placeat quaerat sapiente
      sint temporibus, vitae. Deserunt dolorum illo magni officiis voluptatem.
    </p>
  </Card>
</template>

<script>
import Button from '@/ui-kit/components/Button/Button.vue'
import Card from '@/ui-kit/components/Card/Card.vue'
import Menu from '@/ui-kit/components/Menu/Menu.vue'
export default {
  components: {
    Menu,
    Button,
    Card
  },
  data() {
    return {
      items: [
        {
          label: 'Options',
          items: [
            {
              label: 'Update',
              command: () => {
                //eslint-disable-next-line
                console.log('click in menu')
              }
            },
            {
              label: 'Delete',
              command: () => {
                //eslint-disable-next-line
                console.log('click in menu')
              }
            },
            {
              label: 'sdfsdfsdf',
              command: () => {
                //eslint-disable-next-line
                console.log('click in menu')
              }
            },
            {
              label: 'sdfsdfsdf',
              command: () => {
                //eslint-disable-next-line
                console.log('click in menu')
              }
            },
            {
              label: 'aed',
              command: () => {
                //eslint-disable-next-line
                console.log('click in menu')
              }
            }
          ]
        }
      ]
    }
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event)
    }
  }
}
</script>

<style lang="scss"></style>
