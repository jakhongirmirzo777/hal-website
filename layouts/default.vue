<template>
  <div>
    <TheHeaderDesktop />
    <TheHeaderMobile />
    <NuxtChild />
    <TheFooterDesktop />
    <TheFooterMobile />
  </div>
</template>

<script>
import TheHeaderDesktop from '~/components/layouts/TheHeaderDesktop'
import TheFooterDesktop from '~/components/layouts/TheFooterDesktop'
import TheHeaderMobile from '~/components/layouts/TheHeaderMobile'
import TheFooterMobile from '~/components/layouts/TheFooterMobile'
export default {
  components: {
    TheFooterMobile,
    TheHeaderMobile,
    TheFooterDesktop,
    TheHeaderDesktop,
  },
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
