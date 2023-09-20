<template>
  <div class="home-form__wrapper">
    <div class="home-form__content">
      <div ref="title" class="home-form__title">
        <div>
          <h1>{{ title }}</h1>
          <p>{{ description }}</p>
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
            Get an instant quote or call us now at
            <a :href="`tel:${phoneLink}`">{{ phoneLinkLong }}</a>
          </h4>
          <div class="home-form__tabs">
            <div
              class="home-form__tab"
              :class="{ active: step === 1 }"
              @click="step = 1"
            >
              Destination
            </div>
            <div
              class="home-form__tab"
              :class="{ active: step === 2 }"
              @click="step = 2"
            >
              Vehicle
            </div>
            <div
              class="home-form__tab"
              :class="{ active: step === 3 }"
              @click="step = 3"
            >
              Owner
            </div>
          </div>
          <div v-show="step === 1" class="home-form__inputs">
            <VInputGoogle
              id="origin"
              v-model="formData.origin"
              class="mb-6"
              vid="origin"
              label="Starting location"
              icon="plane"
              hide-details
            />
            <VInputGoogle
              id="destination"
              v-model="formData.destination"
              class="mb-6"
              vid="destination"
              label="Final destination"
              icon="location"
              hide-details
            />
            <VSelect
              v-model="formData.date"
              class="mb-6"
              vid="date"
              label="Timeframe"
              icon="clock"
              :items="timeframeItems"
              hide-details
            />
            <VSelect
              v-model="formData.property"
              vid="property"
              label="Property type"
              icon="car"
              :items="propertyTypes"
              hide-details
            />
          </div>
          <div v-show="step === 2" class="home-form__inputs">
            <VSelect
              v-model="formData.year"
              class="mb-6"
              vid="year"
              label="Year"
              icon="calendar"
              :items="years"
              hide-details
            />
            <VSelect
              v-model="formData.vehicle_make"
              class="mb-6"
              vid="vehicle_make"
              label="Vehicle make"
              icon="industry"
              :items="[]"
              hide-details
            />
            <VSelect
              v-model="formData.vehicle_model"
              class="mb-6"
              vid="vehicle_model"
              label="Vehicle model"
              icon="car"
              :items="[]"
              hide-details
            />
            <VSelect
              v-model="formData.vehicle_run"
              vid="vehicle_run"
              label="Vehicle Runs?"
              icon="wrench"
              :items="[
                {
                  text: 'Yes',
                  value: 'yes',
                },
                {
                  text: 'No',
                  value: 'no',
                },
              ]"
              hide-details
            />
          </div>
          <div v-show="step === 3" class="home-form__inputs">
            <VInput
              v-model="formData.first_name"
              class="mb-6"
              vid="first_name"
              label="First name"
              icon="user-gray"
              hide-details
            />
            <VInput
              v-model="formData.last_name"
              class="mb-6"
              vid="last_name"
              label="Last name"
              icon="user-gray"
              hide-details
            />
            <VInput
              v-model="formData.email"
              class="mb-6"
              vid="email"
              label="Email"
              icon="envelope"
              hide-details
            />
            <VInput
              v-model="formData.phone"
              vid="phone"
              label="Phone"
              icon="phone"
              hide-details
            />
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
import VSelect from '~/components/ui/VSelect'
import VInput from '~/components/ui/VInput'
import { $generateYears } from '~/utils/helpers'
import VInputGoogle from '~/components/ui/VInputGoogle'

const FORM_DATA = {
  date: null,
  property: null,
  origin: null,
  destination: null,
  first_name: null,
  last_name: null,
  year: null,
  vehicle_make: null,
  vehicle_model: null,
  vehicle_run: null,
}

export default {
  name: 'HomeForm',
  components: { VInputGoogle, VInput, VSelect },
  props: {
    title: {
      type: String,
      default: 'Where Excellence in Transportation Begins',
    },
    description: {
      type: String,
      default: "From Quote to Delivery, We've Got You Covered.",
    },
  },
  data() {
    return {
      step: 1,
      years: $generateYears(1990),
      formData: { ...FORM_DATA },
      timeframeItems: [
        {
          text: 'Within 7 days',
          value: 'Within 7 days',
        },
        {
          text: '1-2 weeks',
          value: '1-2 weeks',
        },
        {
          text: '3-6 weeks',
          value: '3-6 weeks',
        },
        {
          text: 'This month',
          value: 'This month',
        },
        {
          text: '3 Months +',
          value: '3 Months +',
        },
      ],
      propertyTypes: [
        {
          text: 'Open carrier',
          value: 'Open carrier',
        },
        {
          text: 'Enclosed carrier',
          value: 'Enclosed carrier',
        },
        {
          text: 'Drive away',
          value: 'Drive away',
        },
      ],
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
