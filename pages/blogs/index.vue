<template>
  <div>
    <BlogsCard
      :loading="loading"
      :blogs="blogs"
      :links="links"
      @next="loadMore"
    />
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
  async asyncData({ $axios }) {
    try {
      const {
        data: { data, links },
      } = await $axios.get('/articles?per_page=4')
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
        } = await this.$axios.get(`/articles?per_page=4&page=${page}`)
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
