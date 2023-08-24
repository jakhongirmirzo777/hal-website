<template>
  <div class="footer__wrapper">
    <div class="footer__top">
      <div class="footer__logo">
        <VIcon icon="logo" size="35" />
        <span>Hyperion</span>
      </div>
      <div class="d-flex align-center">
        <VIcon icon="facebook" size="26" />
        <VIcon class="mx-16" icon="instagram" size="26" />
        <VIcon icon="linkedin" size="26" />
      </div>
    </div>
    <div class="footer__bottom">
      <ul class="footer__bottom__list">
        <li>Home</li>
        <li>Reviews</li>
        <li>Guides</li>
        <li>Why Hyperion</li>
      </ul>
      <ul class="footer__bottom__list">
        <li>How It works</li>
        <li>Pricing</li>
        <li>For Business</li>
        <li>Blog</li>
      </ul>
    </div>
    <h4 class="footer__cta">Join our community 🔥</h4>
    <div class="footer__input">
      <input type="text" />
      <div class="footer__icon">
        <VIcon icon="arrow-right-white" />
      </div>
    </div>
    <VLine class="my-24" />
    <p class="footer__tc">
      <span>Hyperion Auto Logistics LLC 2023. All Rights Reserved</span>
      <br />
      <span>40 SUTTON PL NEW YORK, NY 10022</span>
      <br />
      <span>USDOT#: 4036091 | MC#: 1526150</span>
    </p>
  </div>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
import VLine from '~/components/ui/VLine'
export default {
  name: 'TheFooter',
  components: { VLine, VIcon },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/layouts/the-footer';
</style>
