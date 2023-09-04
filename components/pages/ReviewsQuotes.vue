<template>
  <div class="quotes__wrapper">
    <div class="quotes__slides">
      <ClientOnly>
        <Swiper
          ref="mySwiper"
          :options="swiperOptions"
          @slide-change="onChangeSlide"
        >
          <SwiperSlide v-for="(_, index) in 5" :key="index">
            <div class="quotes__slide">
              <VIcon icon="quote" />
              <p class="comment">
                Lesser Replenish bearing they’re him cattle kind dominion. You
                which fill place. Land she’d subdue divided gathering blessed
                seasons it. Without, wherein days.
              </p>
              <p class="name">Lukan Depina</p>
              <p class="title">Ceo And Head Of Idea</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
    <div class="quotes__slides__controllers">
      <button
        class="quotes__slides__controllers__btn mr-8"
        :disabled="isStart"
        :class="{
          disabled: isStart,
        }"
        @click="onClickPrev"
      >
        <VIcon size="24" icon="arrow-left" />
      </button>
      <button
        class="quotes__slides__controllers__btn"
        :disabled="isEnd"
        :class="{
          disabled: isEnd,
        }"
        @click="onClickNext"
      >
        <VIcon size="24" icon="arrow-right" />
      </button>
    </div>
  </div>
</template>

<script>
import data from '~/data/home-offer'
import VIcon from '~/components/ui/VIcon'

export default {
  name: 'ReviewsQuotes',
  components: { VIcon },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
      },
      swiperData: data,
      isStart: true,
      isEnd: false,
    }
  },
  methods: {
    onChangeSlide() {
      this.isStart = this.$refs.mySwiper.$swiper.isBeginning
      this.isEnd = this.$refs.mySwiper.$swiper.isEnd
    },
    onClickPrev() {
      const index = this.$refs.mySwiper.$swiper.realIndex
      this.$refs.mySwiper.$swiper.slideTo(index - 1)
      this.isStart = this.$refs.mySwiper.$swiper.isBeginning
      this.isEnd = this.$refs.mySwiper.$swiper.isEnd
    },
    onClickNext() {
      const index = this.$refs.mySwiper.$swiper.realIndex
      this.$refs.mySwiper.$swiper.slideTo(index + 1)
      this.isStart = this.$refs.mySwiper.$swiper.isBeginning
      this.isEnd = this.$refs.mySwiper.$swiper.isEnd
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/reviews-quotes';
</style>
