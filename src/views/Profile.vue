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
      />
      <div class="profile_header-details">
        <Heading divider="right">
          <Indicator type="error">
            Mr. Bean
          </Indicator>
        </Heading>
        <p>
          <span class="profile_header-text">UI/UX Designer@spotify</span>
          <span class="profile_header-text">
            <Icon
              width="18"
              height="18"
              name="map-marker"
              fill="var(--orange)"
              class="profile_icon"
            />
            Minsk
          </span>
        </p>
        <TextLabel>
          You have messages
        </TextLabel>
      </div>
    </div>
    <div class="profile_body">
      <div class="profile_body-main">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
        explicabo ipsam laborum molestiae nam. A ab adipisci atque enim hic
        laborum molestiae optio quaerat qui, quis rem sapiente sequi unde. Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis
        doloremque, dolorum, eaque eligendi error explicabo illo laboriosam
        nulla odio perspiciatis quas quia rerum sapiente temporibus unde vel
        voluptatem voluptatibus. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Ab aliquam architecto consequuntur debitis doloremque,
        ducimus eligendi enim error est excepturi itaque magni nemo, quam rem
        repellat soluta tempora velit, voluptate? Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Debitis, quisquam, repellat. Ab eveniet
        harum minus molestias, nam numquam omnis, pariatur quam quas quasi
        quisquam reiciendis, repellat sunt tempore tenetur veniam? Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Consectetur explicabo
        ipsam laborum molestiae nam. A ab adipisci atque enim hic laborum
        molestiae optio quaerat qui, quis rem sapiente sequi unde. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. At blanditiis doloremque,
        dolorum, eaque eligendi error explicabo illo laboriosam nulla odio
        perspiciatis quas quia rerum sapiente temporibus unde vel voluptatem
        voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Ab aliquam architecto consequuntur debitis doloremque, ducimus eligendi
        enim error est excepturi itaque magni nemo, quam rem repellat soluta
        tempora velit, voluptate? Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Debitis, quisquam, repellat. Ab eveniet harum minus
        molestias, nam numquam omnis, pariatur quam quas quasi quisquam
        reiciendis, repellat sunt tempore tenetur veniam?
      </div>
      <div class="profile_body-aside">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
        explicabo ipsam laborum molestiae nam. A ab adipisci atque enim hic
        laborum molestiae optio quaerat qui, quis rem sapiente sequi unde. Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis
        doloremque, dolorum, eaque eligendi error explicabo illo laboriosam
        nulla odio perspiciatis quas quia rerum sapiente temporibus unde vel
        voluptatem voluptatibus. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Dignissimos dolores ipsam necessitatibus obcaecati
        perspiciatis ratione temporibus! Beatae dolorum expedita facere modi
        necessitatibus nihil obcaecati porro praesentium quasi, quis
        reprehenderit veniam! Lorem ipsum dolor sit amet
      </div>
    </div>
  </Card>
</template>

<script>
import { Heading, Indicator, TextLabel, Card, Avatar, Icon } from 'atoms'
export default {
  components: {
    Heading,
    Indicator,
    TextLabel,
    Card,
    Avatar,
    Icon
  }
}
</script>

<style lang="scss">
@import 'profile';
</style>
