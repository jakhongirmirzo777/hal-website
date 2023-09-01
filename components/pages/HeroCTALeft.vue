<template>
  <div class="cta__wrapper">
    <div class="cta__title">
      <h2>Provide best results to your customers.</h2>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
      </p>
    </div>
    <div class="cta__img">
      <VIcon icon="logo" size="380" />
    </div>
  </div>
</template>
<script>
import VIcon from '~/components/ui/VIcon'
export default {
  name: 'HeroCTALeft',
  components: { VIcon },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/hero-cta-left';
</style>
