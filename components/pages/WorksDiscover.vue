<template>
  <div class="works__wrapper">
    <div class="works__container">
      <div ref="title" class="works__title">
        <h1>Discover how it works!</h1>
        <p>
          Here we will write catchy sub-heading, it will take a long time...
        </p>
      </div>
      <div ref="container" class="works__body">
        <div class="works__rating">
          <VIcon class="works__map" icon="map-2" height="190" width="312" />
          <HomeFormRating />
        </div>
        <div class="works__form">
          <FillForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeFormRating from '~/components/pages/HomeFormRating'
import FillForm from '~/components/pages/FillForm'
import VIcon from '~/components/ui/VIcon'
export default {
  name: 'WorksDiscover',
  components: { VIcon, FillForm, HomeFormRating },
  mounted() {
    this.addScreenSize()
  },
  methods: {
    addScreenSize() {
      const titleContainer = this.$refs.title
      const containerContainer = this.$refs.container
      const titleVh = titleContainer.clientHeight
      const containerVh = containerContainer.clientHeight
      document.documentElement.style.setProperty(
        '--title-height',
        `${titleVh}px`
      )
      document.documentElement.style.setProperty(
        '--container-height',
        `${containerVh}px`
      )
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/works-discover';
</style>
