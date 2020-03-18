<template>
  <div>
    <SLine :size="['16%', '54px']" />
    <SLine :size="['26%', '18px']" />
    <br />
    <SFrame>
      <div class="settings_s-row">
        <div>
          <SLine :size="['40%', '28px']" />
          <br />
          <SRow align="center" justify="space-between">
            <SLine :size="['20%', '12px']" />
            <SLine :size="['14%', '26px']" />
          </SRow>
          <br />
          <SRow align="center" justify="space-between">
            <SLine :size="['40%', '12px']" />
            <SLine :size="['14%', '26px']" />
          </SRow>
          <br />
          <SRow align="center" justify="space-between">
            <SLine :size="['31%', '12px']" />
            <SLine :size="['8%', '26px']" />
          </SRow>
          <br />
          <SRow align="center" justify="space-between">
            <SLine :size="['56%', '12px']" />
            <SLine :size="['8%', '26px']" />
          </SRow>
          <br />
          <SLine :size="['auto', '24px']" />
        </div>
        <div>
          <SLine :size="['40%', '28px']" />
          <br />
          <SRow align="center" justify="space-between">
            <SLine :size="['20%', '12px']" />
            <SLine :size="['18%', '26px']" />
          </SRow>
          <br />
          <SRow align="center" justify="space-between">
            <SLine :size="['40%', '12px']" />
            <SLine :size="['18%', '26px']" />
          </SRow>
          <br />
          <SRow align="center" justify="space-between">
            <SLine :size="['31%', '12px']" />
            <SLine :size="['18%', '26px']" />
          </SRow>
          <br />
          <SRow align="center" justify="space-between">
            <SLine :size="['56%', '12px']" />
            <SLine :size="['18%', '26px']" />
          </SRow>
          <br />
          <SRow align="center" justify="space-between">
            <SLine :size="['56%', '12px']" />
            <SLine :size="['18%', '26px']" />
          </SRow>
        </div>
      </div>
    </SFrame>
  </div>
</template>

<script>
import { SLine, SFrame, SRow } from 'skeletons'
export default {
  components: {
    SLine,
    SFrame,
    SRow
  }
}
</script>

<style lang="scss">
.settings_s-row {
  display: grid;
  grid-gap: 12px;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 60px;
    padding: 12px;
  }
}
</style>
