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
}
</script>
