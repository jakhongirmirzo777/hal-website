<template>
  <div>
    <HomeForm />
    <HomeBenefits />
    <HomeReviews />
  </div>
</template>

<script>
import HomeForm from '~/components/pages/HomeForm'
import HomeBenefits from '~/components/pages/HomeBenefits'
import HomeReviews from '~/components/pages/HomeReviews'
export default {
  name: 'IndexPage',
  components: { HomeReviews, HomeBenefits, HomeForm },
}
</script>
