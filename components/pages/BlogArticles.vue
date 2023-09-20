<template>
  <div class="blog__wrapper">
    <h2>Related Articles</h2>
    <div class="blog__articles">
      <nuxt-link
        v-for="item in blogs"
        :key="item.id"
        :to="`/blogs/${item.slug}`"
        class="blog__blog"
      >
        <img class="image" :src="item.image" alt="image" />
        <div class="content">
          <div class="top">
            <p>{{ item.title }}</p>
            <span>{{ $formatDate(item.created_at) }}</span>
          </div>
          <p class="place">{{ item.description }}</p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import data from '../../data/blog-page'
export default {
  name: 'BlogArticles',
  props: {
    blogs: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      data,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/blog-articles';
</style>
