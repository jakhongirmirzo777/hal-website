<template>
  <div>
    <BlogContent />
    <BlogArticles />
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
}
</script>
