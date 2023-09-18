<template>
  <div>
    <HomeForm id="home-form" />
    <HomeBenefits />
    <HomeReviews />
    <HomeProcess />
    <HomeOffer />
    <HomePartners />
    <HomeFaq />
    <HomeBanner />
    <HomeBlog
      :loading="loading"
      :blogs="blogs"
      :links="links"
      @next="loadMore"
    />
  </div>
</template>

<script>
import HomeForm from '~/components/pages/HomeForm'
import HomeBenefits from '~/components/pages/HomeBenefits'
import HomeReviews from '~/components/pages/HomeReviews'
import HomeProcess from '~/components/pages/HomeProcess'
import HomeOffer from '~/components/pages/HomeOffer'
import HomePartners from '~/components/pages/HomePartners'
import HomeFaq from '~/components/pages/HomeFaq'
import HomeBlog from '~/components/pages/HomeBlog'
import HomeBanner from '~/components/pages/HomeBanner'
export default {
  name: 'IndexPage',
  components: {
    HomeBanner,
    HomeBlog,
    HomeFaq,
    HomePartners,
    HomeOffer,
    HomeProcess,
    HomeReviews,
    HomeBenefits,
    HomeForm,
  },
  async asyncData({ $axios }) {
    try {
      const {
        data: { data, links },
      } = await $axios.get('/articles?per_page=3')
      return {
        blogs: data,
        links,
      }
    } catch (err) {
      console.log(err)
    }
  },
  data() {
    return {
      blogs: [],
      links: {},
      loading: false,
    }
  },
  methods: {
    async loadMore(page) {
      try {
        this.loading = true
        const {
          data: { data, links },
        } = await this.$axios.get(`/articles?per_page=3&page=${page}`)
        this.blogs = [...this.blogs, ...data]
        this.links = links
      } catch (err) {
        console.log(err)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
