<template>
  <div class="works__wrapper">
    <div class="works__title">
      <h2>How it work</h2>
      <p>
        Have your car shipped to and from any state - safely, fast, with no risk
        or damage.
      </p>
    </div>
    <div class="works__boxes">
      <div class="works__box">
        <div class="icon">
          <VIcon icon="check-blue" size="45" />
        </div>
        <h4>Get a Quote and Secure Your Contract</h4>
        <p>
          Our seamless process allows you to receive an accurate service quote
          and sign the contract online. Minimal effort, maximum transparency.
        </p>
      </div>
      <div class="works__box">
        <div class="icon">
          <VIcon icon="date" size="45" />
        </div>
        <h4>Get a Quote and Secure Your Contract</h4>
        <p>
          Our seamless process allows you to receive an accurate service quote
          and sign the contract online. Minimal effort, maximum transparency.
        </p>
      </div>
      <div class="works__box">
        <div class="icon">
          <VIcon icon="truck-blue" size="45" />
        </div>
        <h4>Get a Quote and Secure Your Contract</h4>
        <p>
          Our seamless process allows you to receive an accurate service quote
          and sign the contract online. Minimal effort, maximum transparency.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
export default {
  name: 'HeroWorks',
  components: { VIcon },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/hero-works';
</style>
