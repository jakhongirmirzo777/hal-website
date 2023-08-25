<template>
  <div class="header__wrapper">
    <div
      class="d-flex justify-between align-center header header__top"
      :class="{ active: isMenuOpen, 'is-fixed': isScrolled }"
    >
      <div class="d-flex align-center">
        <VIcon class="mr-8" icon="logo" size="35" />
        <span class="header__logo__text">Hyperion</span>
      </div>
      <div
        class="d-flex flex-column justify-center align-center header__menu"
        @click="setIsMenuOpen"
      >
        <span class="header__menu__left" :class="{ open: isMenuOpen }" />
        <span class="header__menu__right" :class="{ open: isMenuOpen }" />
      </div>
    </div>
    <TheForm :is-scrolled="isScrolled" />
    <div v-if="isMenuOpen" style="height: 107px" />
    <transition name="fade">
      <div v-if="isMenuOpen" class="header__menu__opened">
        <ul class="header__menu__list">
          <li
            v-for="(nav, index) in navs"
            :key="index"
            class="header__menu__list__item"
          >
            <nuxt-link :to="nav.url">
              {{ nav.title }}
            </nuxt-link>
          </li>
        </ul>
        <div class="d-flex flex-column align-center">
          <div class="d-flex align-center justify-center mb-30">
            <VIcon icon="facebook" size="32" />
            <VIcon class="mx-24" icon="instagram" size="32" />
            <VIcon icon="linkedin" size="32" />
          </div>
          <p class="header__menu__rights">
            Copyright © 2023. All rights reserved
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import VIcon from '~/components/ui/VIcon'
import TheForm from '~/components/layouts/TheForm'

const navs = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Reviews',
    url: '/reviews',
  },
  {
    title: 'Guides',
    url: '/guides',
  },
  {
    title: 'Why Hyperion',
    url: '/why-hyperion',
  },
  {
    title: 'How it works',
    url: '/how-works',
  },
  {
    title: 'Pricing',
    url: '/pricing',
  },
  {
    title: 'For Business',
    url: '/business',
  },
  {
    title: 'Blog',
    url: '/blog',
  },
]
export default {
  name: 'TheHeaderMobile',
  components: { TheForm, VIcon },
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false,
      navs,
    }
  },
  mounted() {
    document.addEventListener('scroll', this.toggleHeaderFixed)
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.toggleHeaderFixed)
  },
  methods: {
    toggleHeaderFixed() {
      const { scrollY } = window
      this.isScrolled = scrollY > 107
    },
    setIsMenuOpen() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/layouts/the-header';
</style>
