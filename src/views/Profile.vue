<template>
  <Card class="profile">
    <div class="profile_header">
      <div
        class="profile_header-background"
        :style="{
          'background-image': `url(${require('assets/images/background.jpeg')})`
        }"
      />
      <div class="profile_header-row">
        <Avatar
          class="profile_header-avatar"
          :src="`${require('assets/images/avatar.png')}`"
          :size="140"
          shape="square"
        />
        <div class="profile_header-details">
          <Heading divider="right">
            <Indicator type="error">
              Profile
            </Indicator>
          </Heading>
          <TextLabel>
            You have
            <Badge :count="101" :overflow-count="999" type="error" />
            messages
          </TextLabel>
        </div>
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
      explicabo ipsam laborum molestiae nam. A ab adipisci atque enim hic
      laborum molestiae optio quaerat qui, quis rem sapiente sequi unde. Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis
      doloremque, dolorum, eaque eligendi error explicabo illo laboriosam nulla
      odio perspiciatis quas quia rerum sapiente temporibus unde vel voluptatem
      voluptatibus.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
      explicabo ipsam laborum molestiae nam. A ab adipisci atque enim hic
      laborum molestiae optio quaerat qui, quis rem sapiente sequi unde. Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis
      doloremque, dolorum, eaque eligendi error explicabo illo laboriosam nulla
      odio perspiciatis quas quia rerum sapiente temporibus unde vel voluptatem
      voluptatibus.
    </p>
  </Card>
</template>

<script>
import { Heading, Indicator, TextLabel, Badge, Card, Avatar } from 'atoms'
export default {
  components: {
    Heading,
    Badge,
    Indicator,
    TextLabel,
    Card,
    Avatar
  }
}
</script>

<style lang="scss">
@import 'profile';
</style>
