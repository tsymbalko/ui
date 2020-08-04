<template>
  <transition name="vc-navigation__animation">
    <nav class="vc-navigation">
      <a class="vc-navigation_link vc-navigation_link__skip" href="#main"
        >Skip</a
      >
      <a class="vc-navigation_link vc-navigation_link__home" href="/">
        <Icon
          class="vc-navigation_logotype"
          width="2.5rem"
          height="2.5rem"
          name="vue-alternate"
        />
      </a>
      <router-link
        to="/profile"
        class="vc-navigation_link vc-navigation_link__avatar"
        active-class="vc-navigation_link__active"
        title="Profile"
      >
        <Badge :count="101" :overflow-count="99" type="error">
          <Avatar
            :src="`${require('assets/images/avatar.png')}`"
            size="3rem"
            icon="user"
          />
        </Badge>
      </router-link>
      <ul class="vc-navigation_list">
        <li class="vc-navigation_item">
          <router-link
            to="/dashboard"
            class="vc-navigation_link"
            active-class="vc-navigation_link__active"
            title="Dashboard"
          >
            <Icon class="vc-navigation_icon" name="analytics" />
          </router-link>
        </li>
        <li class="vc-navigation_item">
          <router-link
            to="/about"
            class="vc-navigation_link"
            active-class="vc-navigation_link__active"
            title="About"
          >
            <Icon class="vc-navigation_icon" name="align-justify" />
          </router-link>
        </li>
        <li class="vc-navigation_item">
          <router-link
            to="/table"
            class="vc-navigation_link"
            active-class="vc-navigation_link__active"
            title="About"
          >
            <Icon class="vc-navigation_icon" name="table" />
          </router-link>
        </li>
        <li class="vc-navigation_item">
          <router-link
            to="/test"
            class="vc-navigation_link"
            active-class="vc-navigation_link__active"
            title="Test"
          >
            <Icon class="vc-navigation_icon" name="archive-alt" />
          </router-link>
        </li>
        <li class="vc-navigation_item vc-navigation_item__separator">
          <button
            class="vc-navigation_link vc-navigation_link__settings"
            title="settings"
            @click="setActiveDrawer('settings')"
          >
            <Icon class="vc-navigation_icon" name="cog" />
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
