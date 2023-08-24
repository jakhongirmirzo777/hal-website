<template>
  <div>
    <HomeForm />
    <HomeBenefits />
    <HomeReviews />
    <HomeProcess />
    <HomeOffer />
    <HomePartners />
    <HomeFaq />
    <HomeBlog />
  </div>
</template>

<script>
import HomeForm from '~/components/pages/HomeForm'
import HomeBenefits from '~/components/pages/HomeBenefits'
import HomeReviews from '~/components/pages/HomeReviews'
import HomeProcess from '~/components/pages/HomeProcess'
import HomeOffer from '~/components/pages/HomeOffer'
import HomePartners from '~/components/pages/HomePartners'
import HomeFaq from '~/components/pages/HomeFaq'
import HomeBlog from '~/components/pages/HomeBlog'
export default {
  name: 'IndexPage',
  components: {
    HomeBlog,
    HomeFaq,
    HomePartners,
    HomeOffer,
    HomeProcess,
    HomeReviews,
    HomeBenefits,
    HomeForm,
  },
}
</script>
