<template>
  <transition name="vc-navigation__animation">
    <nav class="vc-navigation">
      <a class="vc-navigation_link vc-navigation_link__skip" href="#main"
        >Skip</a
      >
      <a class="vc-navigation_link vc-navigation_link__home" href="/">
        <Icon
          class="vc-navigation_logotype"
          width="40"
          height="40"
          name="vue-alternate"
        />
      </a>
      <router-link
        to="/profile"
        class="vc-navigation_link vc-navigation_link__avatar"
        active-class="vc-navigation_link__active"
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
      <ul class="vc-navigation_list">
        <li class="vc-navigation_item">
          <router-link
            to="/dashboard"
            class="vc-navigation_link"
            active-class="vc-navigation_link__active"
            title="Dashboard"
            @click.native="closeNavigation"
          >
            <Icon
              class="vc-navigation_icon"
              width="24"
              height="24"
              name="analytics"
            />
          </router-link>
        </li>
        <li class="vc-navigation_item">
          <router-link
            to="/about"
            class="vc-navigation_link"
            active-class="vc-navigation_link__active"
            title="About"
            @click.native="closeNavigation"
          >
            <Icon
              class="vc-navigation_icon"
              width="24"
              height="24"
              name="align-justify"
            />
          </router-link>
        </li>
        <li class="vc-navigation_item">
          <router-link
            to="/table"
            class="vc-navigation_link"
            active-class="vc-navigation_link__active"
            title="About"
            @click.native="closeNavigation"
          >
            <Icon
              class="vc-navigation_icon"
              width="24"
              height="24"
              name="table"
            />
          </router-link>
        </li>
        <li class="vc-navigation_item">
          <router-link
            to="/test"
            class="vc-navigation_link"
            active-class="vc-navigation_link__active"
            title="Test"
            @click.native="closeNavigation"
          >
            <Icon
              class="vc-navigation_icon"
              width="24"
              height="24"
              name="archive-alt"
            />
          </router-link>
        </li>
        <li class="vc-navigation_item vc-navigation_item__separator">
          <button
            class="vc-navigation_link vc-navigation_link__settings"
            title="settings"
            @click="setActiveDrawer('settings')"
          >
            <Icon
              class="vc-navigation_icon"
              width="24"
              height="24"
              name="cog"
            />
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
