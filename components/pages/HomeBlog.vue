<template>
  <div class="blog__wrapper">
    <div class="blog__title">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
    <div class="blog__content">
      <nuxt-link
        v-for="blog in blogs"
        :key="blog.id"
        :to="`blogs/${blog.slug}`"
        class="blog__item"
      >
        <img :src="blog.image" alt="photo" />
        <div class="blog__item__bottom">
          <div class="d-flex justify-between align-center mb-4">
            <h4>{{ blog.title }}</h4>
            <span>{{ $formatDate(blog.created_at) }}</span>
          </div>
          <p>{{ blog.description }}</p>
        </div>
      </nuxt-link>
    </div>
    <div
      v-if="links.current_page !== links.last_page"
      class="d-flex justify-center align-center"
    >
      <button
        class="blog__btn d-flex justify-center align-center"
        @click="nextPage"
      >
        <VIcon
          v-if="loading"
          class="mr-5 spinner"
          icon="spinner-white"
          size="16"
        />
        <span>Load more</span>
      </button>
    </div>
  </div>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
export default {
  name: 'HomeBlog',
  components: { VIcon },
  props: {
    title: {
      type: String,
      default: 'Latest stories for you',
    },
    description: {
      type: String,
      default: '',
    },
    blogs: {
      type: Array,
      default: () => [],
    },
    links: {
      type: Object,
      default: () => ({}),
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    nextPage() {
      this.$emit('next', this.links.current_page + 1)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/home-blog';
</style>
