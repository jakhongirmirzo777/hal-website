<template>
  <div>
    <HomeForm />
    <HomeBenefits />
    <HomeReviews />
    <HomeProcess />
    <HomeOffer />
  </div>
</template>

<script>
import HomeForm from '~/components/pages/HomeForm'
import HomeBenefits from '~/components/pages/HomeBenefits'
import HomeReviews from '~/components/pages/HomeReviews'
import HomeProcess from '~/components/pages/HomeProcess'
import HomeOffer from '~/components/pages/HomeOffer'
export default {
  name: 'IndexPage',
  components: { HomeOffer, HomeProcess, HomeReviews, HomeBenefits, HomeForm },
}
</script>
