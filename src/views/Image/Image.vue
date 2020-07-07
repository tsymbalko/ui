<template>
  <Card class="loading">
    <h1 class="loading_title">{{ message }}</h1>
    <picture>
      <source
        media="(max-width: 600px)"
        :srcset="`${require('assets/picture/png-mobile.png')}`"
      />
      <source
        type="image/webp"
        :srcset="`${require('assets/picture/webp.webp')}`"
      />
      <img :srcset="`${require('assets/picture/jpg.jpg')}`" />
    </picture>
    <img
      loading="lazy"
      height="1401"
      src="https://images.unsplash.com/photo-1587908009123-01351914c2fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      alt=""
    />
    <img
      loading="lazy"
      height="828"
      src="https://images.unsplash.com/photo-1587917998402-c8ddc8d84b5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
      alt=""
    />
    <img
      loading="lazy"
      height="1401"
      src="https://images.unsplash.com/photo-1587835556138-294639b047be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      alt=""
    />
    <img
      loading="lazy"
      height="1401"
      src="https://images.unsplash.com/photo-1587864594459-db0e553325be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      alt=""
    />
    <img
      loading="lazy"
      height="828"
      src="https://images.unsplash.com/photo-1587614222350-286dd1a0e619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
      alt=""
    />
    <img
      loading="lazy"
      height="1401"
      src="https://images.unsplash.com/photo-1587860238287-9186c98aa254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      alt=""
    />
    <img
      loading="lazy"
      height="1401"
      src="https://images.unsplash.com/photo-1587861344894-c55be78d7fa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
      alt=""
    />
    <img
      loading="lazy"
      height="1401"
      src="https://images.unsplash.com/photo-1587901307373-8caf8b1dee5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
      alt=""
    />
    <img
      loading="lazy"
      height="1365"
      src="https://images.unsplash.com/photo-1587860874265-39ab69a14cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      alt=""
    />
    <img
      loading="lazy"
      height="1401"
      src="https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=947&q=80"
      alt=""
    />
    <img
      loading="lazy"
      height="1401"
      src="https://images.unsplash.com/photo-1587695627142-19c8c51be969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      alt=""
    />
    <img
      loading="lazy"
      height="828"
      src="https://images.unsplash.com/photo-1587836584895-df171114dbea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
      alt=""
    />
  </Card>
</template>

<script>
import { Card } from 'components'
export default {
  components: {
    Card
  },
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    if ('loading' in HTMLImageElement.prototype) {
      this.message = 'Your browser support image attr loading'
    } else {
      this.message = 'Do not support image attr loading'
    }
  }
}
</script>

<style lang="scss">
.loading {
  position: relative;

  &_title {
    color: var(--base-title);
    font-size: 30px;
    margin-bottom: 20px;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
}
</style>
