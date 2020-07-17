<template>
  <transition name="navigation__animation">
    <nav class="navigation">
      <a class="navigation_link navigation_link__skip" href="#main">Skip</a>
      <a class="navigation_link navigation_link__home" href="/">
        <Icon
          class="navigation_logotype"
          width="40"
          height="40"
          name="vue-alternate"
        />
      </a>
      <router-link
        to="/profile"
        class="navigation_link navigation_link__avatar"
        active-class="navigation_link__active"
        title="Profile"
        @click.native="closeNavigation"
      >
        <Badge :count="101" :overflow-count="99" type="error">
          <Avatar
            :src="`${require('assets/images/avatar.png')}`"
            :size="48"
            icon="user"
          />
        </Badge>
      </router-link>
      <ul class="navigation_list">
        <li class="navigation_item">
          <router-link
            to="/dashboard"
            class="navigation_link"
            active-class="navigation_link__active"
            title="Dashboard"
            @click.native="closeNavigation"
          >
            <Icon
              class="navigation_icon"
              width="24"
              height="24"
              name="analytics"
            />
          </router-link>
        </li>
        <li class="navigation_item">
          <router-link
            to="/about"
            class="navigation_link"
            active-class="navigation_link__active"
            title="About"
            @click.native="closeNavigation"
          >
            <Icon
              class="navigation_icon"
              width="24"
              height="24"
              name="align-justify"
            />
          </router-link>
        </li>
        <li class="navigation_item">
          <router-link
            to="/table"
            class="navigation_link"
            active-class="navigation_link__active"
            title="About"
            @click.native="closeNavigation"
          >
            <Icon class="navigation_icon" width="24" height="24" name="table" />
          </router-link>
        </li>
        <li class="navigation_item">
          <router-link
            to="/test"
            class="navigation_link"
            active-class="navigation_link__active"
            title="Test"
            @click.native="closeNavigation"
          >
            <Icon
              class="navigation_icon"
              width="24"
              height="24"
              name="archive-alt"
            />
          </router-link>
        </li>
        <li class="navigation_item navigation_item__separator">
          <button
            class="navigation_link navigation_link__settings"
            title="settings"
            @click="setActiveDrawer('settings')"
          >
            <Icon class="navigation_icon" width="24" height="24" name="cog" />
          </button>
        </li>
      </ul>
    </nav>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex'

import { Icon, Badge, Avatar } from 'components'
export default {
  name: 'Navigation',
  components: {
    Icon,
    Badge,
    Avatar
  },
  methods: {
    ...mapMutations(['setActiveDrawer']),
    closeNavigation() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
@import 'navigation';
</style>
