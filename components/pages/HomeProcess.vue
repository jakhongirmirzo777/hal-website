<template>
  <div class="process__wrapper">
    <div class="process__title">
      <h2>How it work</h2>
      <p>Keep calm & travel on</p>
    </div>
    <div class="process__box__wrapper">
      <div v-for="item in data" :key="item.id" class="process__box">
        <div class="process__icon" :style="{ backgroundColor: item.color }">
          <VIcon size="24" :icon="item.icon" />
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
import data from '~/data/home-process'
export default {
  name: 'HomeProcess',
  components: { VIcon },
  data() {
    return {
      data,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/home-process';
</style>
