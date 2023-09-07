<template>
  <div>
    <ReasonsHeader />
    <ReasonsPrices />
    <ReasonsException />
    <HeroReviews />
    <ReasonsForm />
    <HeroForm style="margin-bottom: 150px" />
  </div>
</template>

<script>
import ReasonsHeader from '~/components/pages/ReasonsHeader'
import ReasonsPrices from '~/components/pages/ReasonsPrices'
import ReasonsException from '~/components/pages/ReasonsException'
import HeroReviews from '~/components/pages/HeroReviews'
import HeroForm from '~/components/pages/HeroForm'
import ReasonsForm from '~/components/pages/ReasonsForm'
export default {
  name: 'ReasonsPage',
  components: {
    ReasonsForm,
    HeroForm,
    HeroReviews,
    ReasonsException,
    ReasonsPrices,
    ReasonsHeader,
  },
}
</script>
