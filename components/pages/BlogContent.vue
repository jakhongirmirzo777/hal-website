<template>
  <div class="blog__wrapper">
    <div class="blog__top">
      <button class="cursor-pointer" @click="$router.push('/blogs')">
        <VIcon size="16" icon="chevron-left" />
        <span>Go blog</span>
      </button>
      <div class="blog__breadcrumb">
        <nuxt-link to="/blogs">Blogs</nuxt-link>
        <VIcon size="16" icon="chevron-right" />
        <span>{{ blog.title }}</span>
      </div>
    </div>
    <img class="blog__image" :src="blog.image" alt="image" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-8">
          <div class="blog__content" v-html="blog.content"></div>
        </div>
        <div class="col-md-4 d-flex justify-end blog__form">
          <FillForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
import FillForm from '~/components/pages/FillForm'
export default {
  name: 'BlogContent',
  components: { FillForm, VIcon },
  props: {
    blog: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/blog-content';
</style>
