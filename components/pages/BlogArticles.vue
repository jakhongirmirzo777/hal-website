<template>
  <div class="blog__wrapper">
    <h2>Related Articles</h2>
    <div class="blog__articles">
      <div v-for="item in data.blogs" :key="item.id" class="blog__blog">
        <img class="image" :src="item.image" alt="image" />
        <div class="content">
          <div class="top">
            <p>{{ item.title }}</p>
            <span>{{ item.date }}</span>
          </div>
          <p class="place">{{ item.place }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/blog-page'
export default {
  name: 'BlogArticles',
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
