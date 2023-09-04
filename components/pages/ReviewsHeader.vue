<template>
  <div class="reviews__wrapper">
    <div class="reviews__image__box">
      <img class="reviews__image" src="/hero.webp" alt="image" />
    </div>
    <div class="reviews__stars">
      <VIcon icon="star" size="22" />
      <VIcon icon="star" size="22" />
      <VIcon icon="star" size="22" />
      <VIcon icon="star" size="22" />
      <VIcon icon="star" size="22" />
    </div>
    <div class="reviews_content">
      <h1>Get your free quote now</h1>
      <p>
        Have your car shipped to and from any state - safely, fast, with no risk
        or damage.
      </p>
      <button>Read more</button>
    </div>
  </div>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
export default {
  name: 'ReviewsHeader',
  components: { VIcon },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/reviews-header';
</style>
