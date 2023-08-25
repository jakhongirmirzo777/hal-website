<template>
  <div>
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
