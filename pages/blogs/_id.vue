<template>
  <div>
    <BlogContent :blog="blog" />
    <BlogArticles v-if="blogs && blogs.length" :blogs="blogs" />
    <HeroForm style="margin-bottom: 150px" />
  </div>
</template>

<script>
import BlogContent from '~/components/pages/BlogContent'
import BlogArticles from '~/components/pages/BlogArticles'
import HeroForm from '~/components/pages/HeroForm'
export default {
  name: 'BlogPage',
  components: { HeroForm, BlogArticles, BlogContent },
  async asyncData({ $axios, params, error }) {
    try {
      const reqBlogs = $axios.get(`/articles?category_slug=${params.id}`)
      const reqBlog = $axios.get(`/articles/${params.id}`)
      const [resBlogs, resBlog] = await Promise.all([reqBlogs, reqBlog])
      return {
        blogs: resBlogs.data.data,
        blog: resBlog.data.data,
      }
    } catch (err) {
      error({ statusCode: err.response.status })
    }
  },
  data() {
    return {
      blogs: [],
      blog: {},
    }
  },
}
</script>
