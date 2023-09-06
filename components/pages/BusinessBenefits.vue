<template>
  <div class="benefits__wrapper">
    <div class="benefits__title">
      <h2>Full transparency in prices</h2>
      <p>
        Have your car shipped to and from any state - safely, fast, with no risk
        or damage.
      </p>
    </div>
    <div class="benefits__cards">
      <div class="benefits__box">
        <div class="benefits__card">
          <div class="icon">
            <VIcon size="45" icon="check-black" />
          </div>
          <h3>Get a Quote and Secure Your Contract</h3>
          <p>
            Our seamless process allows you to receive an accurate service quote
            and sign the contract online. Minimal effort, maximum transparency.
          </p>
        </div>
        <div class="benefits__line" />
      </div>
      <div class="benefits__box">
        <div class="benefits__card">
          <div class="icon">
            <VIcon size="45" icon="date-black" />
          </div>
          <h3>Get a Quote and Secure Your Contract</h3>
          <p>
            Our seamless process allows you to receive an accurate service quote
            and sign the contract online. Minimal effort, maximum transparency.
          </p>
        </div>
        <div class="benefits__line" />
      </div>
      <div class="benefits__box">
        <div class="benefits__card">
          <div class="icon">
            <VIcon size="45" icon="truck-black" />
          </div>
          <h3>Get a Quote and Secure Your Contract</h3>
          <p>
            Our seamless process allows you to receive an accurate service quote
            and sign the contract online. Minimal effort, maximum transparency.
          </p>
        </div>
        <div class="benefits__line" />
      </div>
    </div>
  </div>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
export default {
  name: 'BusinessBenefits',
  components: { VIcon },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/business-benefits';
</style>
