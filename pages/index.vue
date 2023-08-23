<template>
  <div>
    <HomeForm />
    <HomeBenefits />
    <HomeReviews />
    <HomeProcess />
  </div>
</template>

<script>
import HomeForm from '~/components/pages/HomeForm'
import HomeBenefits from '~/components/pages/HomeBenefits'
import HomeReviews from '~/components/pages/HomeReviews'
import HomeProcess from '~/components/pages/HomeProcess'
export default {
  name: 'IndexPage',
  components: { HomeProcess, HomeReviews, HomeBenefits, HomeForm },
}
</script>
