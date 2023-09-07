<template>
  <div>
    <ReasonsHeader />
    <ReasonsPrices />
  </div>
</template>

<script>
import ReasonsHeader from '~/components/pages/ReasonsHeader'
import ReasonsPrices from '~/components/pages/ReasonsPrices'
export default {
  name: 'ReasonsPage',
  components: { ReasonsPrices, ReasonsHeader },
}
</script>
