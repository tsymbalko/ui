<template>
  <SFrame>
    <SLine :size="['auto', '260px']" class="profile_s-background" />
    <div class="profile_s-content">
      <SRow align="flex-end" class="profile_s-header profile_s-row">
        <SFigure size="160px" />
        <div style="flex: 1 1 auto;">
          <SLine :size="['20%', '54px']" />
          <SLine :size="['40%', '16px']" />
          <SBlock :size="8" :amount="1" />
        </div>
      </SRow>
      <br />
      <SLine :size="['70%', '30px']" />
      <br />
      <SRow class="profile_s-body profile_s-row">
        <div style="flex: 1 1 auto;">
          <SLine :size="['90%', '20px']" />
          <br />
          <SBlock :size="8" :amount="40" />
        </div>
        <div
          style="flex: 1 1 auto;
        max-width: 420px;"
        >
          <SLine :size="['90%', '20px']" />
          <br />
          <SBlock :size="20" :amount="12" />
          <br />
          <SBlock :size="12" :amount="5" />
        </div>
      </SRow>
    </div>
  </SFrame>
</template>

<script>
import { SBlock, SLine, SFrame, SRow, SFigure } from 'skeletons'
export default {
  components: {
    SBlock,
    SLine,
    SFrame,
    SRow,
    SFigure
  }
}
</script>

<style lang="scss">
.profile {
  //TODO remove comment (решить конфликнт Prettier и Stylelint)

  &_s-background {
    display: none;

    @media (min-width: 600px) {
      display: block;
    }
  }

  &_s-content {
    //TODO remove comment (решить конфликнт Prettier и Stylelint)

    @media (min-width: 600px) {
      padding-left: 40px;
      margin-top: -60px;
    }
  }

  &_s-row {
    flex-wrap: wrap;

    & > div {
      width: 100%;
      flex-basis: 100%;
    }
  }

  &_s-header {
    //TODO remove comment (решить конфликнт Prettier и Stylelint)

    @media (min-width: 600px) {
      flex-wrap: nowrap;
    }
  }

  &_s-body {
    //TODO remove comment (решить конфликнт Prettier и Stylelint)

    @media (min-width: 1200px) {
      flex-wrap: nowrap;
    }
  }
}
</style>
