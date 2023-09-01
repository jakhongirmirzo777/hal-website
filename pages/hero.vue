<template>
  <div>
    <HomeForm />
    <HeroCTALeft />
    <HeroCTARight />
    <HeroReviews />
    <HeroInfo />
  </div>
</template>

<script>
import HomeForm from '~/components/pages/HomeForm'
import HeroCTALeft from '~/components/pages/HeroCTALeft'
import HeroCTARight from '~/components/pages/HeroCTARight'
import HeroReviews from '~/components/pages/HeroReviews'
import HeroInfo from '~/components/pages/HeroInfo'
export default {
  name: 'HeroPage',
  components: { HeroInfo, HeroReviews, HeroCTARight, HeroCTALeft, HomeForm },
}
</script>
