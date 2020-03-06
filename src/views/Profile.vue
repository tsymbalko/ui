<template>
  <Card class="profile">
    <div class="profile_header">
      <div
        class="profile_header-background"
        :style="{
          'background-image': `url(${require('assets/images/background.jpeg')})`
        }"
      />
      <Avatar
        class="profile_header-avatar"
        :src="`${require('assets/images/avatar.png')}`"
        :size="160"
        shape="square"
        check
      />
      <div class="profile_header-details">
        <Heading divider="right">
          <Indicator type="error">
            Mr. Bean
          </Indicator>
        </Heading>
        <p>
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
        </p>
        <TextLabel>
          Administrator
        </TextLabel>
      </div>
    </div>
    <div class="profile_body">
      <Breadcrumb :routes="routes" class="profile_body-breadcrumb" />
      <div class="profile_body-main">
        <Heading level="2" class="profile_title">General information</Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          explicabo ipsam laborum molestiae nam. A ab adipisci atque enim hic
          laborum molestiae optio quaerat qui, quis rem sapiente sequi unde.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
          blanditiis doloremque, dolorum, eaque eligendi error explicabo illo
          laboriosam nulla odio perspiciatis quas quia rerum sapiente temporibus
          unde vel voluptatem voluptatibus. Lorem ipsum dolor sit amet,
          consectetur
        </p>
        <br />
        <p>
          adipisicing elit. Ab aliquam architecto consequuntur debitis
          doloremque, ducimus eligendi enim error est excepturi itaque magni
          nemo, quam rem repellat soluta tempora velit, voluptate? Lorem ipsum
          dolor sit amet
        </p>
      </div>
      <div class="profile_body-aside">
        <Heading class="profile_title" level="2">
          Personal info
        </Heading>
        <Legend :legend="personalInformation" class="profile_body-legend" />
        <div class="profile_social">
          <a href="#" class="profile_social-link" target="_blank">
            <Icon
              name="envelop"
              class="profile_social-icon"
            />mr.bean@outlook.com
          </a>
          <a href="#" class="profile_social-link" target="_blank">
            <Icon name="phone-alt" class="profile_social-icon" /> +37529 5195686
          </a>
          <a href="#" class="profile_social-link" target="_blank">
            <Icon name="skype" class="profile_social-icon" /> mr-bean
          </a>
          <a href="#" class="profile_social-link" target="_blank">
            <Icon name="linkedin" class="profile_social-icon" /> Mr.Bean
          </a>
          <a href="#" class="profile_social-link" target="_blank">
            <Icon name="twitter" class="profile_social-icon" /> beanOfficial
          </a>
        </div>
      </div>
    </div>
  </Card>
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
  Breadcrumb
} from 'atoms'
export default {
  components: {
    Heading,
    Indicator,
    TextLabel,
    Card,
    Avatar,
    Icon,
    Legend,
    Breadcrumb
  },
  data() {
    return {
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
  }
}
</script>

<style lang="scss">
@import 'profile';
</style>
