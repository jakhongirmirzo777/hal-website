<template>
  <div class="step__container">
    <div class="step__wrapper">
      <div class="step__left">
        <button>Step 1</button>
        <h3>Schedule a vehicle shipment with Hyperion</h3>
        <p>
          The best car transport service for you should make scheduling
          shipments simple. Thats how we do!
        </p>
        <div class="step__item">
          <div class="icon">
            <VIcon icon="ways" size="37" />
          </div>
          <div class="content">
            <h4>ZIP code</h4>
            <p>Enter your car pickup and car delivery zip codes</p>
          </div>
        </div>
        <div class="step__item">
          <div class="icon">
            <VIcon icon="car-blue" size="34" />
          </div>
          <div class="content">
            <h4>Vehicle info</h4>
            <p>Select your vehicle type and size</p>
          </div>
        </div>
        <div class="step__item">
          <div class="icon">
            <VIcon icon="check-solid" size="36" />
          </div>
          <div class="content">
            <h4>Open or Enclosed</h4>
            <p>Choose between open or enclosed auto transport</p>
          </div>
        </div>
      </div>
      <div class="step__right">
        <FillForm />
      </div>
    </div>
    <div class="step__wrapper">
      <div class="step__left">
        <button>Step 2</button>
        <h3>We pick you vehicle and journey begins.</h3>
        <p>
          Our expert Hyperion auto transport coordinators are starting by to
          book your spot with one of our experienced, safe vehicle transporters.
        </p>
        <div class="step__item">
          <div class="icon">
            <VIcon icon="ways" size="37" />
          </div>
          <div class="content">
            <h4>Get ready</h4>
            <p>Enter your car pickup and car delivery zip codes</p>
          </div>
        </div>
        <div class="step__item">
          <div class="icon">
            <VIcon icon="car-blue" size="34" />
          </div>
          <div class="content">
            <h4>Be prepared</h4>
            <p>Select your vehicle type and size</p>
          </div>
        </div>
        <div class="step__item">
          <div class="icon">
            <VIcon icon="check-solid" size="36" />
          </div>
          <div class="content">
            <h4>Time to go</h4>
            <p>Choose between open or enclosed auto transport</p>
          </div>
        </div>
      </div>
      <div class="step__right image">
        <img src="/step-1.webp" alt="image" />
      </div>
    </div>
    <div class="step__wrapper">
      <div class="step__left">
        <button>Step 3</button>
        <h3>
          Our car hauling service delivers your vehicle to its destination.
        </h3>
        <p>
          Hyperion Auto Logistics is a vehicle transportation firm designed with
          you in mind. At any time, you have the freedom to connect with your
          car transporter for any information related to your vehicle's
          shipment.
        </p>
        <div class="step__item">
          <div class="icon">
            <VIcon icon="ways" size="37" />
          </div>
          <div class="content">
            <h4>Get ready</h4>
            <p>Enter your car pickup and car delivery zip codes</p>
          </div>
        </div>
        <div class="step__item">
          <div class="icon">
            <VIcon icon="car-blue" size="34" />
          </div>
          <div class="content">
            <h4>Be prepared</h4>
            <p>Select your vehicle type and size</p>
          </div>
        </div>
        <div class="step__item">
          <div class="icon">
            <VIcon icon="check-solid" size="36" />
          </div>
          <div class="content">
            <h4>Time to go</h4>
            <p>Choose between open or enclosed auto transport</p>
          </div>
        </div>
      </div>
      <div class="step__right image">
        <img src="/step-2.webp" alt="image" />
      </div>
    </div>
  </div>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
import FillForm from '~/components/pages/FillForm'
export default {
  name: 'WorksStepOne',
  components: { FillForm, VIcon },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/works-step-one';
</style>
