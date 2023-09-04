<template>
  <div>
    <ReviewsHeader />
    <HeroReviews />
    <ReviewsSlider />
    <ReviewsQuotes />
  </div>
</template>

<script>
import ReviewsHeader from '~/components/pages/ReviewsHeader'
import HeroReviews from '~/components/pages/HeroReviews'
import ReviewsSlider from '~/components/pages/RreviewsSlider'
import ReviewsQuotes from '~/components/pages/ReviewsQuotes'
export default {
  name: 'ReviewsPage',
  components: { ReviewsQuotes, ReviewsSlider, HeroReviews, ReviewsHeader },
}
</script>
