<template>
  <div class="home-form__wrapper">
    <div class="home-form__content">
      <div ref="title" class="home-form__title">
        <div>
          <h1>Where Excellence in Transportation Begins</h1>
          <p>From Quote to Delivery, We've Got You Covered.</p>
        </div>
        <div class="home-form__rating">
          <div class="home-form__rating--top">
            <img class="trustpilot" src="/trustpilot.png" alt="trustpilot" />
            <div class="stars">
              <img src="/star.png" alt="star" />
              <img src="/star.png" alt="star" />
              <img src="/star.png" alt="star" />
              <img src="/star.png" alt="star" />
              <img src="/star-half.png" alt="star-half" />
            </div>
          </div>
          <p class="home-form__rating--bottom">
            4.6 out of 5 based on 245 reviews
          </p>
        </div>
      </div>
      <form ref="form" class="home-form__form" @submit.prevent="">
        <div class="home-form__form__content">
          <h4 class="mb-16">
            Get an instant quote or call us now at (518)855-6577
          </h4>
          <div class="home-form__tabs">
            <div
              class="home-form__tab"
              :class="{ active: step === 1 }"
              @click="step = 1"
            >
              Step 1
            </div>
            <div
              class="home-form__tab"
              :class="{ active: step === 2 }"
              @click="step = 2"
            >
              Step 2
            </div>
            <div
              class="home-form__tab"
              :class="{ active: step === 3 }"
              @click="step = 3"
            >
              Step 3
            </div>
          </div>
          <div v-show="step === 1" class="home-form__inputs">
            <div class="home-form__group">
              <VIcon class="home-form__icon" size="22" icon="plane" />
              <input
                class="home-form__input"
                type="text"
                placeholder="Starting location"
              />
            </div>
            <div class="home-form__group">
              <VIcon class="home-form__icon" size="22" icon="location" />
              <input
                class="home-form__input"
                type="text"
                placeholder="Final destination"
              />
            </div>
            <div class="home-form__group">
              <VIcon class="home-form__icon" size="22" icon="clock" />
              <input
                class="home-form__input"
                type="text"
                placeholder="Timeframe"
              />
            </div>
            <div class="home-form__group">
              <VIcon class="home-form__icon" size="22" icon="car" />
              <input
                class="home-form__input"
                type="text"
                placeholder="Car size"
              />
            </div>
          </div>
          <div v-show="step === 2" class="home-form__inputs">
            <div class="home-form__group">
              <VIcon class="home-form__icon" size="22" icon="calendar" />
              <select class="home-form__input">
                <option value="" selected disabled>Year</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
              </select>
              <VIcon
                class="home-form__icon select"
                size="22"
                icon="chevron-down"
              />
            </div>
            <div class="home-form__group">
              <VIcon class="home-form__icon" size="22" icon="industry" />
              <select class="home-form__input">
                <option value="" selected disabled>Vehicle make</option>
                <option value="volvo">Acura</option>
                <option value="saab">Audi</option>
              </select>
              <VIcon
                class="home-form__icon select"
                size="22"
                icon="chevron-down"
              />
            </div>
            <div class="home-form__group">
              <VIcon class="home-form__icon" size="22" icon="car" />
              <select class="home-form__input">
                <option value="" selected disabled>Vehicle model</option>
                <option value="volvo">Giulia</option>
                <option value="saab">Stelvio</option>
              </select>
              <VIcon
                class="home-form__icon select"
                size="22"
                icon="chevron-down"
              />
            </div>
            <div class="home-form__group">
              <VIcon class="home-form__icon" size="22" icon="wrench" />
              <select class="home-form__input">
                <option value="" selected disabled>Vehicle Runs?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <VIcon
                class="home-form__icon select"
                size="22"
                icon="chevron-down"
              />
            </div>
          </div>
          <div v-show="step === 3" class="home-form__inputs">
            <div class="home-form__group">
              <VIcon class="home-form__icon" size="22" icon="user-gray" />
              <input
                class="home-form__input"
                type="text"
                placeholder="First name"
              />
            </div>
            <div class="home-form__group">
              <VIcon class="home-form__icon" size="22" icon="user-gray" />
              <input
                class="home-form__input"
                type="text"
                placeholder="Last name"
              />
            </div>
            <div class="home-form__group">
              <VIcon class="home-form__icon" size="22" icon="envelope" />
              <input class="home-form__input" type="text" placeholder="Email" />
            </div>
            <div class="home-form__group">
              <VIcon class="home-form__icon" size="22" icon="phone" />
              <input class="home-form__input" type="text" placeholder="Phone" />
            </div>
          </div>
        </div>
        <button type="submit" class="home-form__btn cursor-pointer">
          Let’s go!
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
export default {
  name: 'HomeForm',
  components: { VIcon },
  data() {
    return {
      step: 1,
    }
  },
  mounted() {
    this.addScreenSize()
  },
  methods: {
    addScreenSize() {
      const titleContainer = this.$refs.title
      const formContainer = this.$refs.form
      const titleVh = titleContainer.clientHeight
      const formVh = formContainer.clientHeight
      document.documentElement.style.setProperty(
        '--title-height',
        `${titleVh}px`
      )
      document.documentElement.style.setProperty('--form-height', `${formVh}px`)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/home-form';
</style>
