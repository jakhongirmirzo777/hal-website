<template>
  <div class="home-form__wrapper">
    <div class="home-form__content">
      <h1>Get your free quote now</h1>
      <p>
        Have your car shipped to and from any state - safely, fast, with no risk
        or damage.
      </p>
      <form class="home-form__form" @submit.prevent="">
        <div class="home-form__form__content">
          <h4>Fill out the form</h4>
          <p>Fill out the form now and get a discount!</p>
          <div class="home-form__tabs">
            <div class="home-form__tab active">Step 1</div>
            <div class="home-form__tab">Step 2</div>
            <div class="home-form__tab">Step 3</div>
          </div>
          <div class="home-form__inputs">
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
        </div>
        <button type="submit" class="home-form__btn">Let’s go!</button>
      </form>
    </div>
  </div>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
export default {
  name: 'HomeForm',
  components: { VIcon },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/home-form';
</style>
