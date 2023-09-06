<template>
  <div>
    <BusinessHeader />
    <BusinessBenefits />
    <BusinessTransparency />
  </div>
</template>

<script>
import BusinessHeader from '~/components/pages/BusinessHeader'
import BusinessBenefits from '~/components/pages/BusinessBenefits'
import BusinessTransparency from '~/components/pages/BusinessTransparency'
export default {
  name: 'WorksPage',
  components: { BusinessTransparency, BusinessBenefits, BusinessHeader },
}
</script>
