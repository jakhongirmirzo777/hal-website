<template>
  <div class="blog__wrapper">
    <div class="blog__top">
      <button>
        <VIcon size="16" icon="chevron-left" />
        <span>Go blog</span>
      </button>
      <div class="blog__breadcrumb">
        <nuxt-link to="/blogs">Blog</nuxt-link>
        <VIcon size="16" icon="chevron-right" />
        <span>{{ data.slug }}</span>
      </div>
    </div>
    <img class="blog__image" :src="data.image" alt="image" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-8">
          <div class="blog__content">
            <div v-for="item in data.content" :key="item.id" class="blog__item">
              <h1>{{ item.title }}</h1>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex justify-end blog__form">
          <FillForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/blog-page'
import VIcon from '~/components/ui/VIcon'
import FillForm from '~/components/pages/FillForm'
export default {
  name: 'BlogContent',
  components: { FillForm, VIcon },
  data() {
    return {
      data,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/blog-content';
</style>
