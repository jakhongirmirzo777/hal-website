<template>
  <div class="faq__wrapper">
    <div class="faq__title">
      <h2>FAQ</h2>
      <p>
        Have your car shipped to and from any state - safely, fast, with no risk
        or damage.
      </p>
    </div>
    <div class="faq__content">
      <div v-for="item in data" :key="item.id">
        <VCollapse>
          <template #top="{ toggle }">
            <div class="faq__collapse__top">
              <p>{{ item.title }}</p>
              <VIcon
                class="cursor-pointer"
                icon="chevron-down"
                size="34"
                @click="toggle"
              />
            </div>
          </template>
          <template #bottom>
            <p class="faq__collapse__bottom">
              {{ item.content }}
            </p>
          </template>
        </VCollapse>
        <VLine v-if="item.id !== data.length" class="my-24" color="#E6E7EB" />
      </div>
    </div>
  </div>
</template>

<script>
import VCollapse from '~/components/ui/VCollapse'
import VIcon from '~/components/ui/VIcon'
import VLine from '~/components/ui/VLine'
import data from '~/data/faq-page'

export default {
  name: 'HomeFaq',
  components: { VLine, VIcon, VCollapse },
  data() {
    return {
      data,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/home-faq';
</style>
