<template>
  <div>
    <BusinessHeader />
    <BusinessBenefits />
    <BusinessTransparency />
    <BusinessPrices />
  </div>
</template>

<script>
import BusinessHeader from '~/components/pages/BusinessHeader'
import BusinessBenefits from '~/components/pages/BusinessBenefits'
import BusinessTransparency from '~/components/pages/BusinessTransparency'
import BusinessPrices from '~/components/pages/BusinessPrices'
export default {
  name: 'WorksPage',
  components: {
    BusinessPrices,
    BusinessTransparency,
    BusinessBenefits,
    BusinessHeader,
  },
}
</script>
