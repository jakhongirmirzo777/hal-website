<template>
  <div class="works__wrapper">
    <div class="works__container">
      <div ref="title" class="works__title">
        <h1>{{ title }}</h1>
        <p>
          {{ description }}
        </p>
      </div>
      <div ref="container" class="works__body">
        <div class="works__rating">
          <VIcon
            id="map-2"
            class="works__map"
            icon="map-2"
            height="190"
            width="312"
          />
          <HomeFormRating />
        </div>
        <div class="works__form">
          <FillForm />
        </div>
      </div>
    </div>
    <div id="tooltip-map-2"></div>
  </div>
</template>

<script>
import HomeFormRating from '~/components/pages/HomeFormRating'
import FillForm from '~/components/pages/FillForm'
import VIcon from '~/components/ui/VIcon'
import states from '~/utils/states'
export default {
  name: 'WorksDiscover',
  components: { VIcon, FillForm, HomeFormRating },
  props: {
    title: {
      type: String,
      default: 'Discover how it works!',
    },
    description: {
      type: String,
      default:
        "We've simplified the auto transportation process into three easy steps",
    },
  },
  mounted() {
    this.addScreenSize()
    setTimeout(() => {
      const mapBlack = document.getElementById('map-2')
      mapBlack.addEventListener('mouseover', this.placeTooltip)
      mapBlack.addEventListener('mouseleave', this.removeTooltip)
    }, 1000)
  },
  destroyed() {
    const mapBlack = document.getElementById('map-2')
    mapBlack.removeEventListener('mouseover', this.placeTooltip)
    mapBlack.removeEventListener('mouseleave', this.removeTooltip)
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
    placeTooltip(e) {
      const text = e.target.dataset.tooltip
      const tooltip = document.getElementById('tooltip-map-2')
      if (text) {
        tooltip.textContent = states[text]
        tooltip.style.left = e.clientX + 20 + 'px'
        tooltip.style.top = e.clientY + 20 + 'px'
        tooltip.style.opacity = '1'
      } else {
        tooltip.style.opacity = '0'
      }
    },
    removeTooltip() {
      const tooltip = document.getElementById('tooltip-map-2')
      tooltip.style.opacity = '0'
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/works-discover';
</style>
