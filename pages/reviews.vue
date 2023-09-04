<template>
  <div>
    <ReviewsHeader />
    <HeroReviews />
    <ReviewsSlider />
  </div>
</template>

<script>
import ReviewsHeader from '~/components/pages/ReviewsHeader'
import HeroReviews from '~/components/pages/HeroReviews'
import ReviewsSlider from '~/components/pages/RreviewsSlider'
export default {
  name: 'ReviewsPage',
  components: { ReviewsSlider, HeroReviews, ReviewsHeader },
}
</script>
