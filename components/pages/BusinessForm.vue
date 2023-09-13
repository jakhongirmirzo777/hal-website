<template>
  <div class="business-form__wrapper">
    <VIcon
      id="map-black"
      class="business-form__icon"
      icon="map-black"
      height="196"
      width="322"
    />
    <div id="tooltip-map-black"></div>
    <FillForm class="business-form__form" />
  </div>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
import FillForm from '~/components/pages/FillForm'
import states from '~/utils/states'
export default {
  name: 'BusinessForm',
  components: { FillForm, VIcon },
  mounted() {
    setTimeout(() => {
      const mapBlack = document.getElementById('map-black')
      mapBlack.addEventListener('mouseover', this.placeTooltip)
      mapBlack.addEventListener('mouseleave', this.removeTooltip)
    }, 1000)
  },
  destroyed() {
    const mapBlack = document.getElementById('map-black')
    mapBlack.removeEventListener('mouseover', this.placeTooltip)
    mapBlack.removeEventListener('mouseleave', this.removeTooltip)
  },
  methods: {
    placeTooltip(e) {
      const text = e.target.dataset.tooltip
      const tooltip = document.getElementById('tooltip-map-black')
      if (text) {
        tooltip.textContent = states[text]
        tooltip.style.left = e.clientX + 'px'
        tooltip.style.top = e.clientY - 20 + 'px'
        tooltip.style.opacity = '1'
      } else {
        tooltip.style.opacity = '0'
      }
    },
    removeTooltip() {
      const tooltip = document.getElementById('tooltip-map-black')
      tooltip.style.opacity = '0'
    },
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/pages/business-form';
</style>
