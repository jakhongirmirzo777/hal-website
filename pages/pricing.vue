<template>
  <div>
    <WorksDiscover />
    <ReasonsPrices />
    <WorksStepOne />
    <HeroReviews />
    <HomeFaq style="margin-top: -160px" />
    <HeroForm style="margin-bottom: 150px" />
    <HomeBlog />
  </div>
</template>

<script>
import WorksDiscover from '~/components/pages/WorksDiscover'
import ReasonsPrices from '~/components/pages/ReasonsPrices'
import WorksStepOne from '~/components/pages/WorksStepOne'
import HeroReviews from '~/components/pages/HeroReviews'
import HomeFaq from '~/components/pages/HomeFaq'
import HeroForm from '~/components/pages/HeroForm'
import HomeBlog from '~/components/pages/HomeBlog'
export default {
  name: 'PricingPage',
  components: {
    HomeBlog,
    HeroForm,
    HomeFaq,
    HeroReviews,
    WorksStepOne,
    ReasonsPrices,
    WorksDiscover,
  },
}
</script>
