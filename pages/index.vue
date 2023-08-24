<template>
  <div>
    <HomeForm />
    <HomeBenefits />
    <HomeReviews />
    <HomeProcess />
    <HomeOffer />
    <HomePartners />
  </div>
</template>

<script>
import HomeForm from '~/components/pages/HomeForm'
import HomeBenefits from '~/components/pages/HomeBenefits'
import HomeReviews from '~/components/pages/HomeReviews'
import HomeProcess from '~/components/pages/HomeProcess'
import HomeOffer from '~/components/pages/HomeOffer'
import HomePartners from '~/components/pages/HomePartners'
export default {
  name: 'IndexPage',
  components: {
    HomePartners,
    HomeOffer,
    HomeProcess,
    HomeReviews,
    HomeBenefits,
    HomeForm,
  },
}
</script>
