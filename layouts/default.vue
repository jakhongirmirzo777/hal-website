<template>
  <div>
    <TheHeader />
    <NuxtChild />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/layouts/TheHeader'
import TheFooter from '~/components/layouts/TheFooter'
export default {
  components: { TheFooter, TheHeader },
  mounted() {
    this.makeFullScreen()
  },
  methods: {
    makeFullScreen() {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    },
  },
}
</script>
