<template>
  <div class="banner__wrapper">
    <div class="banner__top">
      <span class="banner__span">supercharge your planning powers</span>
      <h2>Travel to make memories all around the world</h2>
      <p>
        Stacks is a production-ready library of stackable content blocks built
        in React Native.
      </p>
      <div class="banner__input">
        <input placeholder="Your phone number" type="text" />
        <span class="banner__input__icon">
          <VIcon icon="arrow-right-white" />
        </span>
      </div>
    </div>
    <div class="banner__bottom">
      <img src="/phone-mockup.webp" alt="photo" />
    </div>
  </div>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
export default {
  name: 'HomeBanner',
  components: { VIcon },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/home-banner';
</style>
