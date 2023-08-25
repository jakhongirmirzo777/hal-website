<template>
  <div class="form__wrapper" :class="{ active: isScrolled }">
    <div class="form__top">
      <span
        class="form__step"
        :class="{ active: step === 1 }"
        @click="step = 1"
      >
        Location
      </span>
      <span
        class="form__step"
        :class="{ active: step === 2 }"
        @click="step = 2"
      >
        Destination
      </span>
      <span
        class="form__step"
        :class="{ active: step === 3 }"
        @click="step = 3"
      >
        Property type
      </span>
      <span
        class="form__step"
        :class="{ active: step === 4 }"
        @click="step = 4"
      >
        Timeframe
      </span>
    </div>
    <div class="form__content">
      <div v-if="step === 1" class="form__box">
        <div class="form__group">
          <label for="location">Location</label>
          <input
            id="location"
            type="text"
            placeholder="Enter the origin location"
          />
        </div>
        <button @click="next">
          <span>Continue</span>
          <VIcon size="16" icon="search" />
        </button>
      </div>
      <div v-if="step === 2" class="form__box">
        <div class="form__group">
          <label for="destination">Destination</label>
          <input
            id="destination"
            type="text"
            placeholder="Enter the destination location"
          />
        </div>
        <button @click="next">
          <span>Continue</span>
          <VIcon size="16" icon="search" />
        </button>
      </div>
      <div v-if="step === 3" class="form__box">
        <div class="form__group">
          <label for="property">Property type</label>
          <select id="property">
            <option value="volvo">Open carrier</option>
            <option value="saab">Enclosed carrier</option>
            <option value="saabs">Drive away</option>
          </select>
        </div>
        <button @click="next">
          <span>Continue</span>
          <VIcon size="16" icon="search" />
        </button>
      </div>
      <div v-if="step === 4" class="form__box">
        <div class="form__group">
          <label for="timeframe">Timeframe</label>
          <select id="timeframe">
            <option value="1">Within 7 days</option>
            <option value="2">1-2 weeks</option>
            <option value="3">3-6 weeks</option>
            <option value="4">This month</option>
            <option value="5">3 months +</option>
            <option value="6">Just browsing</option>
          </select>
        </div>
        <button @click="next">
          <span>Continue</span>
          <VIcon size="16" icon="search" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
export default {
  name: 'TheForm',
  components: { VIcon },
  props: {
    isScrolled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      step: 1,
    }
  },
  methods: {
    next() {
      if (this.step === 4) {
        this.step = 1
      } else {
        this.step = this.step + 1
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/layouts/the-form';
</style>
