<template>
  <div class="benefits__wrapper">
    <div class="benefits__title">
      <h2>Honest pricing for premium services</h2>
      <p>
        Experience the epitome of luxury with our transparent pricing structure
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
          <h3>Convenient Car Pickup Service From Any Location</h3>
          <p>
            No matter where your car is located, our team is ready to pick it
            up. We provide a hassle-free car pickup service, saving your time
            and effort.
          </p>
        </div>
        <div class="benefits__line" />
      </div>
      <div class="benefits__box">
        <div class="benefits__card">
          <div class="icon">
            <VIcon size="45" icon="truck-black" />
          </div>
          <h3>Safe and Timely Car Delivery</h3>
          <p>
            Your car is delivered to you securely and on time. We pay special
            attention to safety during transportation, ensuring your car reaches
            you in pristine condition.
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
