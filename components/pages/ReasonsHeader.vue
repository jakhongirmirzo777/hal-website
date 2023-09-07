<template>
  <div class="reasons-header__wrapper">
    <div class="reasons-header__container">
      <div class="reasons-header__top">
        <div class="reasons-header__title">
          <h1>Reasons why you should choice us!</h1>
          <p>Here we will write catchy sub-heading which is not found yet(</p>
        </div>
        <HomeFormRating class="desktop" />
      </div>
      <div>
        <VIcon class="reasons-header__icon" icon="logo-white" size="305" />
        <HomeFormRating class="reasons-header__trustpilot mobile" />
      </div>
    </div>
  </div>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
import HomeFormRating from '~/components/pages/HomeFormRating'
export default {
  name: 'ReasonsHeader',
  components: { HomeFormRating, VIcon },
}
</script>

<style lang="scss">
@import '../../assets/styles/pages/reasons-header';
</style>
