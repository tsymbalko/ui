<template>
  <div class="dashboard">
    <header class="dashboard_header">
      <Heading divider="right">
        Beko
      </Heading>
      <TextLabel>Organisation overview</TextLabel>
    </header>
    <section class="dashboard_overview">
      <TextLabel level="3">Quick overview</TextLabel>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        commodi consectetur deserunt esse, exercitationem fuga fugiat harum, id
        impedit iste labore magnam maxime minima officiis praesentium ratione
        repellendus totam unde?
      </div>
    </section>
    <section class="dashboard_progress">
      <TextLabel level="3">Education Progress</TextLabel>
      <div class="dashboard_progress-group">
        <Card>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          alias aliquid corporis culpa cumque delectus doloremque ipsa iste iure
        </Card>
        <Card>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          alias aliquid corporis culpa cumque delectus doloremque ipsa iste iure
          <Button icon="user-plus" type="warning">Add members</Button>
        </Card>
      </div>
    </section>
    <section class="dashboard_information">
      <TextLabel level="3">Information</TextLabel>
      <Card>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa
        delectus deleniti dolor, esse excepturi illum, in iusto laudantium
        mollitia possimus quae ratione reiciendis vitae voluptates? Doloremque
        eum laboriosam suscipit?
      </Card>
    </section>
    <section class="dashboard_activity">
      <TextLabel level="3">Activity</TextLabel>
      <Card>
        <div class="dashboard_activity-group">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium atque beatae consequatur cupiditate dolorem doloribus
            eaque esse facilis illum omnis optio, quam qui quo recusandae
            reprehenderit rerum sequi ut voluptatum?
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem
            debitis delectus dicta dignissimos, dolor enim error eum fugiat ipsa
            maiores nobis odit officiis quos repellat sed, sint totam voluptas?
          </div>
        </div>
      </Card>
    </section>
  </div>
</template>

<script>
import { Card, Heading, TextLabel, Button } from 'components'
export default {
  name: 'home',
  components: {
    Card,
    Heading,
    TextLabel,
    Button
  }
}
</script>

<style lang="scss">
@import 'dashboard';
</style>
