<template>
  <div class="steps__wrapper">
    <div class="steps__title">
      <h2>How it works</h2>
      <p>
        Obtain a no-obligation quote, enjoy convenient vehicle pick-up, and rest
        assured with our safe, timely delivery
      </p>
    </div>
    <div class="steps__cards">
      <div class="steps__card">
        <div class="icon">
          <VIcon icon="check-blue" size="45" />
        </div>
        <h4>Get a Quote and Secure Your Contract</h4>
        <p>
          Our seamless process allows you to receive an accurate service quote
          and sign the contract online. Minimal effort, maximum transparency.
        </p>
      </div>
      <div class="steps__card">
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
      <div class="steps__card">
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
  name: 'WorksSteps',
  components: { VIcon },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/works-steps';
</style>
