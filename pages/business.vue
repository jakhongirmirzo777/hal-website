<template>
  <div>
    <BusinessHeader />
    <BusinessBenefits />
  </div>
</template>

<script>
import BusinessHeader from '~/components/pages/BusinessHeader'
import BusinessBenefits from '~/components/pages/BusinessBenefits'
export default {
  name: 'WorksPage',
  components: { BusinessBenefits, BusinessHeader },
}
</script>
