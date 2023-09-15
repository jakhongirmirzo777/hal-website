<template>
  <div class="banner__wrapper">
    <div class="banner__top">
      <span class="banner__span">supercharge your planning powers</span>
      <h2>Car Shipping Cost Estimator</h2>
      <p>
        Utilize our intuitive cost estimation tool to get an instant, accurate
        quote for your vehicle's transportation. This user-friendly calculator
        considers various factors such as distance, vehicle type, and delivery
        preferences to provide you with a comprehensive estimate. Navigate the
        world of auto logistics with ease and transparency with Hyperion Auto
        Logistics
      </p>
      <div class="banner__input">
        <button @click="$scroll('home-form')">
          Get your Car Shipping Estimate
        </button>
      </div>
    </div>
    <div class="banner__bottom">
      <img src="/phone-mockup.webp" alt="photo" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/home-banner';
</style>
