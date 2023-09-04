<template>
  <div>
    <BlogsCard />
    <HeroReviews />
    <HeroForm style="margin-bottom: 150px" />
  </div>
</template>

<script>
import BlogsCard from '~/components/pages/BlogsCard'
import HeroReviews from '~/components/pages/HeroReviews'
import HeroForm from '~/components/pages/HeroForm'
export default {
  name: 'BlogsPage',
  components: { HeroForm, HeroReviews, BlogsCard },
}
</script>
