<template>
  <div class="form__wrapper">
    <div class="form__container">
      <div class="form__content">
        <h2>Get your free quote now</h2>
        <p>
          Have your car shipped to and from any state - safely, fast, with no
          risk or damage.
        </p>
      </div>
      <form ref="form" class="hero-form__form" @submit.prevent="">
        <div class="hero-form__form__content">
          <h4 class="mb-16">
            Get an instant quote or call us now at
            <a :href="`tel:${phoneLink}`">{{ phoneLinkLong }}</a>
          </h4>
          <div class="hero-form__tabs">
            <div
              class="hero-form__tab"
              :class="{ active: step === 1 }"
              @click="step = 1"
            >
              Step 1
            </div>
            <div
              class="hero-form__tab"
              :class="{ active: step === 2 }"
              @click="step = 2"
            >
              Step 2
            </div>
            <div
              class="hero-form__tab"
              :class="{ active: step === 3 }"
              @click="step = 3"
            >
              Step 3
            </div>
          </div>
          <div v-show="step === 1" class="hero-form__inputs">
            <div class="hero-form__group">
              <VIcon class="hero-form__icon" size="22" icon="plane" />
              <input
                class="hero-form__input"
                type="text"
                placeholder="Starting location"
              />
            </div>
            <div class="hero-form__group">
              <VIcon class="hero-form__icon" size="22" icon="location" />
              <input
                class="hero-form__input"
                type="text"
                placeholder="Final destination"
              />
            </div>
            <div class="hero-form__group">
              <VIcon class="hero-form__icon" size="22" icon="clock" />
              <input
                class="hero-form__input"
                type="text"
                placeholder="Timeframe"
              />
            </div>
            <div class="hero-form__group">
              <VIcon class="hero-form__icon" size="22" icon="car" />
              <input
                class="hero-form__input"
                type="text"
                placeholder="Car size"
              />
            </div>
          </div>
          <div v-show="step === 2" class="hero-form__inputs">
            <div class="hero-form__group">
              <VIcon class="hero-form__icon" size="22" icon="calendar" />
              <select class="hero-form__input">
                <option value="" selected disabled>Year</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
              </select>
              <VIcon
                class="hero-form__icon select"
                size="22"
                icon="chevron-down"
              />
            </div>
            <div class="hero-form__group">
              <VIcon class="hero-form__icon" size="22" icon="industry" />
              <select class="hero-form__input">
                <option value="" selected disabled>Vehicle make</option>
                <option value="volvo">Acura</option>
                <option value="saab">Audi</option>
              </select>
              <VIcon
                class="hero-form__icon select"
                size="22"
                icon="chevron-down"
              />
            </div>
            <div class="hero-form__group">
              <VIcon class="hero-form__icon" size="22" icon="car" />
              <select class="hero-form__input">
                <option value="" selected disabled>Vehicle model</option>
                <option value="volvo">Giulia</option>
                <option value="saab">Stelvio</option>
              </select>
              <VIcon
                class="hero-form__icon select"
                size="22"
                icon="chevron-down"
              />
            </div>
            <div class="hero-form__group">
              <VIcon class="hero-form__icon" size="22" icon="wrench" />
              <select class="hero-form__input">
                <option value="" selected disabled>Vehicle Runs?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <VIcon
                class="hero-form__icon select"
                size="22"
                icon="chevron-down"
              />
            </div>
          </div>
          <div v-show="step === 3" class="hero-form__inputs">
            <div class="hero-form__group">
              <VIcon class="hero-form__icon" size="22" icon="user-gray" />
              <input
                class="hero-form__input"
                type="text"
                placeholder="First name"
              />
            </div>
            <div class="hero-form__group">
              <VIcon class="hero-form__icon" size="22" icon="user-gray" />
              <input
                class="hero-form__input"
                type="text"
                placeholder="Last name"
              />
            </div>
            <div class="hero-form__group">
              <VIcon class="hero-form__icon" size="22" icon="envelope" />
              <input class="hero-form__input" type="text" placeholder="Email" />
            </div>
            <div class="hero-form__group">
              <VIcon class="hero-form__icon" size="22" icon="phone" />
              <input class="hero-form__input" type="text" placeholder="Phone" />
            </div>
          </div>
        </div>
        <button type="submit" class="hero-form__btn cursor-pointer">
          Let’s go!
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
export default {
  name: 'HeroForm',
  components: { VIcon },
  data() {
    return {
      step: 1,
    }
  },
  computed: {
    phoneLink() {
      return process.env.SUPPORT_PHONE
    },
    phoneLinkLong() {
      return process.env.SUPPORT_PHONE_LONG
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/hero-form';
</style>
