<template>
  <div class="prices__wrapper">
    <div class="prices__title">
      <h1>Full transparency in prices</h1>
      <p>
        Have your car shipped to and from any state - safely, fast, with no risk
        or damage.
      </p>
    </div>
    <div class="prices__cards">
      <div class="prices__card">
        <div class="icon">
          <VIcon icon="check-blue" size="45" />
        </div>
        <h4>Get a Quote and Secure Your Contract</h4>
        <p>
          Our seamless process allows you to receive an accurate service quote
          and sign the contract online. Minimal effort, maximum transparency.
        </p>
      </div>
      <div class="prices__card">
        <div class="icon">
          <VIcon icon="date" size="45" />
        </div>
        <h4>Convenient Car Pickup Service From Any Location</h4>
        <p>
          No matter where your car is located, our team is ready to pick it up.
          We provide a hassle-free car pickup service, saving your time and
          effort.
        </p>
      </div>
      <div class="prices__card">
        <div class="icon">
          <VIcon icon="truck-blue" size="45" />
        </div>
        <h4>Safe and Timely Car Delivery</h4>
        <p>
          Your car is delivered to you securely and on time. We pay special
          attention to safety during transportation, ensuring your car reaches
          you in pristine condition.
        </p>
      </div>
      <div class="prices__card">
        <div class="icon">
          <VIcon icon="check-blue" size="45" />
        </div>
        <h4>Get a Quote and Secure Your Contract</h4>
        <p>
          Our seamless process allows you to receive an accurate service quote
          and sign the contract online. Minimal effort, maximum transparency.
        </p>
      </div>
      <div class="prices__card">
        <div class="icon">
          <VIcon icon="date" size="45" />
        </div>
        <h4>Convenient Car Pickup Service From Any Location</h4>
        <p>
          No matter where your car is located, our team is ready to pick it up.
          We provide a hassle-free car pickup service, saving your time and
          effort.
        </p>
      </div>
      <div class="prices__card">
        <div class="icon">
          <VIcon icon="truck-blue" size="45" />
        </div>
        <h4>Safe and Timely Car Delivery</h4>
        <p>
          Your car is delivered to you securely and on time. We pay special
          attention to safety during transportation, ensuring your car reaches
          you in pristine condition.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
export default {
  name: 'ReasonsPrices',
  components: { VIcon },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/reasons-prices';
</style>
