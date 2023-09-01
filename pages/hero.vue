<template>
  <div>
    <HomeForm />
    <HeroCTALeft />
    <HeroCTARight />
    <HeroReviews />
    <HeroInfo />
    <HeroWorks />
    <HeroFaq />
  </div>
</template>

<script>
import HomeForm from '~/components/pages/HomeForm'
import HeroCTALeft from '~/components/pages/HeroCTALeft'
import HeroCTARight from '~/components/pages/HeroCTARight'
import HeroReviews from '~/components/pages/HeroReviews'
import HeroInfo from '~/components/pages/HeroInfo'
import HeroWorks from '~/components/pages/HeroWorks'
import HeroFaq from '~/components/pages/HeroFaq'

export default {
  name: 'HeroPage',
  components: {
    HeroFaq,
    HeroWorks,
    HeroInfo,
    HeroReviews,
    HeroCTARight,
    HeroCTALeft,
    HomeForm,
  },
}
</script>
