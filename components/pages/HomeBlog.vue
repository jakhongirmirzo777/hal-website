<template>
  <div class="blog__wrapper">
    <div class="blog__title">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
    <div class="blog__content">
      <div v-for="item in 3" :key="item" class="blog__item">
        <img src="/placeholder.webp" alt="photo" />
        <div class="blog__item__bottom">
          <div class="d-flex justify-between align-center mb-4">
            <h4>The grand resort</h4>
            <span>Tue, Jul 20</span>
          </div>
          <p>Yasminfurt</p>
        </div>
      </div>
    </div>
    <div class="d-flex justify-center align-center">
      <button class="blog__btn">All news</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBlog',
  props: {
    title: {
      type: String,
      default: 'Latest stories for you',
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/home-blog';
</style>
