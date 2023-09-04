<template>
  <div>
    <ReviewsHeader />
    <HeroReviews />
  </div>
</template>

<script>
import ReviewsHeader from '~/components/pages/ReviewsHeader'
import HeroReviews from '~/components/pages/HeroReviews'
export default {
  name: 'ReviewsPage',
  components: { HeroReviews, ReviewsHeader },
}
</script>
