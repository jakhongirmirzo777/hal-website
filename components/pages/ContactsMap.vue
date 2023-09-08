<template>
  <div class="contacts__map">
    <ClientOnly>
      <GMap
        ref="gMap"
        language="en"
        :center="{ lat: 41.311081, lng: 69.240562 }"
        :options="{
          fullscreenControl: false,
          styles: {
            height: '250px',
          },
        }"
        :zoom="14"
      />
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'ContactsMap',
}
</script>

<style lang="scss">
@import '../../assets/styles/pages/contacts-map';
</style>
