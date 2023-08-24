<template>
  <div class="faq__wrapper">
    <div class="faq__title">
      <h2>FAQ</h2>
      <p>Keep calm & travel on</p>
    </div>
    <div class="faq__content">
      <VCollapse>
        <template #top="{ toggle }">
          <div class="faq__collapse__top">
            <p>Word</p>
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
            Консалтинг (консультирование) — деятельность по консультированию
            руководителей, управленцев по широкому кругу вопросов в сфере
            финансовой, коммерческой, юридической, технологической, технической,
            экспертной деятельностей. Цель консалтинга — помочь системе
            управления (менеджменту) в достижении заявленных целей.
          </p>
        </template>
      </VCollapse>
      <VLine class="my-24" color="#E6E7EB" />
      <VCollapse>
        <template #top="{ toggle }">
          <div class="faq__collapse__top">
            <p>MegaWork</p>
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
            Консалтинг (консультирование) — деятельность по консультированию
            руководителей, управленцев по широкому кругу вопросов в сфере
            финансовой, коммерческой, юридической, технологической, технической,
            экспертной деятельностей. Цель консалтинга — помочь системе
            управления (менеджменту) в достижении заявленных целей.
          </p>
        </template>
      </VCollapse>
    </div>
  </div>
</template>

<script>
import VCollapse from '~/components/ui/VCollapse'
import VIcon from '~/components/ui/VIcon'
import VLine from '~/components/ui/VLine'
export default {
  name: 'HomeFaq',
  components: { VLine, VIcon, VCollapse },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/home-faq';
</style>
