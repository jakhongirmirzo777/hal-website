<template>
  <div>
    <BusinessHeader />
    <BusinessBenefits />
    <BusinessTransparency />
    <BusinessPrices />
    <BusinessForm />
    <div style="margin-bottom: -120px">
      <HeroReviews />
    </div>
    <HomeFaq />
    <HomeBlog />
  </div>
</template>

<script>
import BusinessHeader from '~/components/pages/BusinessHeader'
import BusinessBenefits from '~/components/pages/BusinessBenefits'
import BusinessTransparency from '~/components/pages/BusinessTransparency'
import BusinessPrices from '~/components/pages/BusinessPrices'
import BusinessForm from '~/components/pages/BusinessForm'
import HeroReviews from '~/components/pages/HeroReviews'
import HomeFaq from '~/components/pages/HomeFaq'
import HomeBlog from '~/components/pages/HomeBlog'
export default {
  name: 'WorksPage',
  components: {
    HomeBlog,
    HomeFaq,
    HeroReviews,
    BusinessForm,
    BusinessPrices,
    BusinessTransparency,
    BusinessBenefits,
    BusinessHeader,
  },
}
</script>
