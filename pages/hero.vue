<template>
  <div>
    <HomeForm
      title="Get your free quote now"
      description="Have your car shipped to and from any state - safely, fast, with no risk or damage."
    />
    <HeroCTALeft />
    <HeroCTARight />
    <HeroReviews />
    <HeroInfo />
    <HeroWorks />
    <HeroFaq />
    <HeroForm />
    <HomeBlog
      title="Related stories for you"
      description="Have your car shipped to and from any state - safely, fast, with no risk or damage."
      style="margin-top: 100px"
    />
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
import HeroForm from '~/components/pages/HeroForm'
import HomeBlog from '~/components/pages/HomeBlog'

export default {
  name: 'HeroPage',
  components: {
    HomeBlog,
    HeroForm,
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
