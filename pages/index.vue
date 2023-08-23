<template>
  <div>
    <HomeForm />
    <HomeBenefits />
  </div>
</template>

<script>
import HomeForm from '~/components/pages/HomeForm'
import HomeBenefits from '~/components/pages/HomeBenefits'
export default {
  name: 'IndexPage',
  components: { HomeBenefits, HomeForm },
}
</script>
