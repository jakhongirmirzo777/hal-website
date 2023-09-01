<template>
  <div class="hero__wrapper row">
    <div class="hero__left col-6 pr-20">
      <h2>An Exceptionally unique experience tailored to you</h2>
      <p>
        We are idea generators, goal seekers, challenge-thirsty professionals,
        creators of unique Internet projects. We deliver unconventional
        solutions
      </p>
      <div class="hero__boxes">
        <div class="hero__box">
          <VIcon icon="mail" size="48" />
          <h4>Minimal Design</h4>
          <p>
            There are many variations passages Ipsum available, but the
            majority.
          </p>
        </div>
        <div class="hero__box">
          <VIcon icon="notification" size="48" />
          <h4>Minimal Design</h4>
          <p>
            There are many variations passages Ipsum available, but the
            majority.
          </p>
        </div>
      </div>
    </div>
    <div class="hero__right col-6 pl-20 text-right">
      <img class="image1" src="/truck-4.webp" alt="truck" />
      <img class="image2" src="/truck-5.webp" alt="truck" />
    </div>
  </div>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
export default {
  name: 'HeroInfo',
  components: { VIcon },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/hero-info';
</style>
