<template>
  <div>
    <HomeForm />
    <HeroCTALeft />
    <HeroCTARight />
    <HeroReviews />
  </div>
</template>

<script>
import HomeForm from '~/components/pages/HomeForm'
import HeroCTALeft from '~/components/pages/HeroCTALeft'
import HeroCTARight from '~/components/pages/HeroCTARight'
import HeroReviews from '~/components/pages/HeroReviews'
export default {
  name: 'HeroPage',
  components: { HeroReviews, HeroCTARight, HeroCTALeft, HomeForm },
}
</script>
