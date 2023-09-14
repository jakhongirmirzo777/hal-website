<template>
  <form ref="form" class="fill-form__form" @submit.prevent="">
    <div class="fill-form__form__content">
      <h4 class="mb-16">
        Get an instant quote or call us now at (518)855-6577
      </h4>
      <div class="fill-form__tabs">
        <div
          class="fill-form__tab"
          :class="{ active: step === 1 }"
          @click="step = 1"
        >
          Step 1
        </div>
        <div
          class="fill-form__tab"
          :class="{ active: step === 2 }"
          @click="step = 2"
        >
          Step 2
        </div>
        <div
          class="fill-form__tab"
          :class="{ active: step === 3 }"
          @click="step = 3"
        >
          Step 3
        </div>
      </div>
      <div v-show="step === 1" class="fill-form__inputs">
        <div class="fill-form__group">
          <VIcon class="fill-form__icon" size="22" icon="plane" />
          <input
            class="fill-form__input"
            type="text"
            placeholder="Starting location"
          />
        </div>
        <div class="fill-form__group">
          <VIcon class="fill-form__icon" size="22" icon="location" />
          <input
            class="fill-form__input"
            type="text"
            placeholder="Final destination"
          />
        </div>
        <div class="fill-form__group">
          <VIcon class="fill-form__icon" size="22" icon="clock" />
          <input class="fill-form__input" type="text" placeholder="Timeframe" />
        </div>
        <div class="fill-form__group">
          <VIcon class="fill-form__icon" size="22" icon="car" />
          <input class="fill-form__input" type="text" placeholder="Car size" />
        </div>
      </div>
      <div v-show="step === 2" class="fill-form__inputs">
        <div class="fill-form__group">
          <VIcon class="fill-form__icon" size="22" icon="calendar" />
          <select class="fill-form__input">
            <option value="" selected disabled>Year</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
          </select>
          <VIcon class="fill-form__icon select" size="22" icon="chevron-down" />
        </div>
        <div class="fill-form__group">
          <VIcon class="fill-form__icon" size="22" icon="industry" />
          <select class="fill-form__input">
            <option value="" selected disabled>Vehicle make</option>
            <option value="volvo">Acura</option>
            <option value="saab">Audi</option>
          </select>
          <VIcon class="fill-form__icon select" size="22" icon="chevron-down" />
        </div>
        <div class="fill-form__group">
          <VIcon class="fill-form__icon" size="22" icon="car" />
          <select class="fill-form__input">
            <option value="" selected disabled>Vehicle model</option>
            <option value="volvo">Giulia</option>
            <option value="saab">Stelvio</option>
          </select>
          <VIcon class="fill-form__icon select" size="22" icon="chevron-down" />
        </div>
        <div class="fill-form__group">
          <VIcon class="fill-form__icon" size="22" icon="wrench" />
          <select class="fill-form__input">
            <option value="" selected disabled>Vehicle Runs?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <VIcon class="fill-form__icon select" size="22" icon="chevron-down" />
        </div>
      </div>
      <div v-show="step === 3" class="fill-form__inputs">
        <div class="fill-form__group">
          <VIcon class="fill-form__icon" size="22" icon="user-gray" />
          <input
            class="fill-form__input"
            type="text"
            placeholder="First name"
          />
        </div>
        <div class="fill-form__group">
          <VIcon class="fill-form__icon" size="22" icon="user-gray" />
          <input class="fill-form__input" type="text" placeholder="Last name" />
        </div>
        <div class="fill-form__group">
          <VIcon class="fill-form__icon" size="22" icon="envelope" />
          <input class="fill-form__input" type="text" placeholder="Email" />
        </div>
        <div class="fill-form__group">
          <VIcon class="fill-form__icon" size="22" icon="phone" />
          <input class="fill-form__input" type="text" placeholder="Phone" />
        </div>
      </div>
    </div>
    <button type="submit" class="fill-form__btn cursor-pointer">
      Let’s go!
    </button>
  </form>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
export default {
  name: 'FillForm',
  components: { VIcon },
  data() {
    return {
      step: 1,
    }
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/pages/fill-form';
</style>
