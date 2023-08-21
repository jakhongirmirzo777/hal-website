<template>
  <div class="d-flex justify-between align-center header">
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
</template>
<script>
import VIcon from '~/components/ui/VIcon'
export default {
  components: { VIcon },
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    setIsMenuOpen() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/components/the-header';
</style>
