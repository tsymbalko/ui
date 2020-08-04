<template>
  <span>
    <SkeletonProfile v-if="loading" />
    <Card v-else class="profile">
      <header class="profile_header">
        <div
          class="profile_header-background"
          :style="{
            'background-image': `url(${require('assets/images/background.jpeg')})`
          }"
        />
        <Avatar
          class="profile_header-avatar"
          :src="`${require('assets/images/avatar.png')}`"
          size="10rem"
          shape="square"
          check
        />
        <div class="profile_header-details">
          <Heading class="profile_heading" divider="right">
            <Indicator type="error">
              Mr. Bean
            </Indicator>
          </Heading>
          <div>
            <span class="profile_header-text">WebDeveloper</span>
            <span class="profile_header-text">
              <Icon
                width="18"
                height="18"
                name="map-marker"
                fill="var(--orange)"
                class="profile_icon"
              />
              Minsk P178, 720
            </span>
          </div>
          <TextLabel>
            Administrator
          </TextLabel>
        </div>
      </header>
      <div class="profile_body">
        <Breadcrumb :routes="routes" class="profile_body-breadcrumb" />
        <section class="profile_body-main">
          <Heading level="2" class="profile_title">General information</Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur explicabo ipsam laborum molestiae nam. A ab adipisci
            atque enim hic laborum molestiae optio quaerat qui, quis rem
            sapiente sequi unde. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At blanditiis doloremque, dolorum, eaque eligendi
            error explicabo illo laboriosam nulla odio perspiciatis quas quia
            rerum sapiente temporibus unde vel voluptatem voluptatibus. Lorem
            ipsum dolor sit amet, consectetur
          </p>
          <p>
            adipisicing elit. Ab aliquam architecto consequuntur debitis
            doloremque, ducimus eligendi enim error est excepturi itaque magni
            nemo, quam rem repellat soluta tempora velit, voluptate? Lorem ipsum
            dolor sit amet
          </p>
        </section>
        <section class="profile_body-aside">
          <Heading class="profile_title" level="2">
            Personal info
          </Heading>
          <Legend :legend="personalInformation" class="profile_body-legend" />
          <div class="profile_social">
            <VLink
              href="mailto:mr.bean@outlook.com"
              target="_blank"
              icon="envelop"
            >
              mr.bean@outlook.com
            </VLink>
            <VLink href="tel:+375295195686" target="_blank" icon="phone-alt">
              +37529 5195686
            </VLink>
            <VLink href="#" target="_blank" icon="linkedin">Mr.Bean</VLink>
            <VLink href="#" target="_blank" icon="twitter">beanOfficial</VLink>
            <VLink href="#" target="_blank" icon="skype">Mr.Bean</VLink>
          </div>
        </section>
      </div>
    </Card>
  </span>
</template>

<script>
import {
  Heading,
  Indicator,
  TextLabel,
  Card,
  Avatar,
  Icon,
  Legend,
  Breadcrumb,
  VLink
} from 'components'
import SkeletonProfile from './components/SkeletonProfile'
export default {
  components: {
    Heading,
    Indicator,
    TextLabel,
    Card,
    Avatar,
    Icon,
    Legend,
    Breadcrumb,
    VLink,
    SkeletonProfile
  },
  data() {
    return {
      loading: true,
      routes: [
        {
          href: '#',
          label: 'Wargaming',
          id: 1
        },
        {
          href: '#',
          label: 'MS-1',
          id: 2
        },
        {
          href: '#',
          label: 'WoT Blitz Development',
          id: 3
        },
        {
          href: '#',
          label: 'Customization & Game Grids',
          id: 4
        },
        {
          href: '#',
          label: 'Customization, WoT Blitz',
          id: 5
        }
      ],
      personalInformation: [
        {
          id: 1,
          title: 'Direct Report Manager',
          value: 'Marina Marina'
        },
        {
          id: 2,
          title: 'Country / Country',
          value: 'Belarus, Minsk'
        },
        {
          id: 3,
          title: 'Office address, Room',
          value: 'P178, 720'
        },
        {
          id: 4,
          title: 'Personal ID',
          value: '231-342-32'
        }
      ]
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 5000)
  }
}
</script>

<style lang="scss">
@import 'profile';
</style>
