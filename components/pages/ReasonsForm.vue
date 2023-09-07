<template>
  <div class="reasons-form__wrapper">
    <VIcon
      class="reasons-form__icon"
      icon="map-blue"
      height="196"
      width="322"
    />
    <FillForm class="reasons-form__form" />
  </div>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
import FillForm from '~/components/pages/FillForm'
export default {
  name: 'ReasonsForm',
  components: { FillForm, VIcon },
}
</script>

<style lang="scss">
@import '../../assets/styles/pages/reasons-form';
</style>
