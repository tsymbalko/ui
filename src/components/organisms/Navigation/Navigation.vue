<template>
  <nav class="navigation">
    <a class="navigation_skip" href="#main">Skip</a>
    <a class="navigation_home" href="/">
      <Icon
        class="navigation_logotype"
        width="40"
        height="40"
        name="vue-alternate"
      />
    </a>
    <Badge
      class="navigation_avatar"
      :count="101"
      :overflow-count="99"
      type="error"
    >
      <Avatar src="https://i.pravatar.cc/100" :size="48" icon="user" />
    </Badge>
    <ul class="navigation_list">
      <li class="navigation_item">
        <router-link
          to="/dashboard"
          class="navigation_link"
          active-class="navigation_link__active"
          title="Dashboard"
        >
          <Icon class="navigation_icon" width="24" height="24" name="apps" />
        </router-link>
      </li>
      <li class="navigation_item">
        <router-link
          to="/about"
          class="navigation_link"
          active-class="navigation_link__active"
          title="About"
        >
          <Icon class="navigation_icon" width="24" height="24" name="code" />
        </router-link>
      </li>
      <li class="navigation_item">
        <router-link
          to="/test"
          class="navigation_link"
          active-class="navigation_link__active"
          title="Test"
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
        <router-link
          to="/setting"
          class="navigation_link"
          active-class="navigation_link__active"
          title="settings"
        >
          <Icon class="navigation_icon" width="24" height="24" name="cog" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { Icon, Badge, Avatar } from 'atoms'
export default {
  name: 'Navigation',
  components: {
    Icon,
    Badge,
    Avatar
  }
}
</script>

<style lang="scss">
@import 'navigation';
</style>
