<template>
  <div class="business-form__wrapper">
    <VIcon
      class="business-form__icon"
      icon="map-black"
      height="196"
      width="322"
    />
    <FillForm class="business-form__form" />
  </div>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
import FillForm from '~/components/pages/FillForm'
export default {
  name: 'BusinessForm',
  components: { FillForm, VIcon },
}
</script>

<style lang="scss">
@import '../../assets/styles/pages/business-form';
</style>
