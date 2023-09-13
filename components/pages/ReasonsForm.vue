<template>
  <div class="reasons-form__wrapper">
    <VIcon
      id="map-blue"
      class="reasons-form__icon"
      icon="map-blue"
      height="196"
      width="322"
    />
    <div id="tooltip-map-blue"></div>
    <FillForm class="reasons-form__form" />
  </div>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
import FillForm from '~/components/pages/FillForm'
import states from '~/utils/states'
export default {
  name: 'ReasonsForm',
  components: { FillForm, VIcon },
  mounted() {
    setTimeout(() => {
      const mapBlack = document.getElementById('map-blue')
      mapBlack.addEventListener('mouseover', this.placeTooltip)
      mapBlack.addEventListener('mouseleave', this.removeTooltip)
    }, 1000)
  },
  destroyed() {
    const mapBlack = document.getElementById('map-blue')
    mapBlack.removeEventListener('mouseover', this.placeTooltip)
    mapBlack.removeEventListener('mouseleave', this.removeTooltip)
  },
  methods: {
    placeTooltip(e) {
      const text = e.target.dataset.tooltip
      const tooltip = document.getElementById('tooltip-map-blue')
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
      const tooltip = document.getElementById('tooltip-map-blue')
      tooltip.style.opacity = '0'
    },
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/pages/reasons-form';
</style>
