<template>
  <div class="footer__desktop__wrapper">
    <div class="footer__desktop__top">
      <div class="footer__desktop__logo">
        <VIcon icon="logo" size="35" />
        <span>Hyperion</span>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-4 footer__desktop__link">Home</div>
          <div class="col-4 footer__desktop__link">Why Hyperion</div>
          <div class="col-4 footer__desktop__link">For Business</div>
          <div class="col-4 footer__desktop__link">Reviews</div>
          <div class="col-4 footer__desktop__link">How It works</div>
          <div class="col-4 footer__desktop__link">Blog</div>
          <div class="col-4 footer__desktop__link">Guides</div>
          <div class="col-4 footer__desktop__link">Pricing</div>
        </div>
      </div>
      <div class="footer__desktop__right">
        <p>Join our community 🔥</p>
        <div class="footer__desktop__input">
          <input type="text" />
          <div class="footer__desktop__icon">
            <VIcon icon="arrow-right-white" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer__desktop__bottom">
      <div class="footer__desktop__bottom__left">
        <span>Hyperion Auto Logistics LLC 2023. All Rights Reserved</span>
        <span class="mx-16">40 SUTTON PL NEW YORK, NY 10022</span>
        <span>USDOT#: 4036091 | MC#: 1526150</span>
      </div>
      <div class="footer__desktop__bottom__right">
        <VIcon icon="facebook" size="26" />
        <VIcon class="mx-16" icon="instagram" size="26" />
        <VIcon icon="linkedin" size="26" />
      </div>
    </div>
  </div>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
export default {
  name: 'TheFooterDesktop',
  components: { VIcon },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/layouts/the-footer';
</style>
