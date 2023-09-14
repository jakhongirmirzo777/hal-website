<template>
  <div>
    <ReviewsHeader />
    <HeroReviews />
    <ReviewsSlider />
    <ReviewsQuotes />
    <HeroForm />
    <HomeBlog style="margin-top: 100px" />
  </div>
</template>

<script>
import ReviewsHeader from '~/components/pages/ReviewsHeader'
import HeroReviews from '~/components/pages/HeroReviews'
import ReviewsSlider from '~/components/pages/RreviewsSlider'
import ReviewsQuotes from '~/components/pages/ReviewsQuotes'
import HeroForm from '~/components/pages/HeroForm'
import HomeBlog from '~/components/pages/HomeBlog'
export default {
  name: 'ReviewsPage',
  components: {
    HomeBlog,
    HeroForm,
    ReviewsQuotes,
    ReviewsSlider,
    HeroReviews,
    ReviewsHeader,
  },
}
</script>
