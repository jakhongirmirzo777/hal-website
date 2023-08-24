<template>
  <div class="offer__wrapper">
    <div class="offer__title">
      <h2>Whats we offer</h2>
      <p>Keep calm & travel on</p>
    </div>
    <div class="offer__slides">
      <ClientOnly>
        <Swiper
          ref="mySwiper"
          :options="swiperOptions"
          @slide-change="onChangeSlide"
        >
          <SwiperSlide v-for="slide in swiperData" :key="slide.id">
            <div class="offer__slide">
              <div class="offer__slide__image">
                <img :src="slide.image" alt="image" />
              </div>
              <h4>
                {{ slide.title }}
              </h4>
              <p>{{ slide.description }}</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="offer__slides__controllers">
          <button
            class="offer__slides__controllers__btn mr-8"
            :disabled="isStart"
            :class="{
              disabled: isStart,
            }"
            @click="onClickPrev"
          >
            <VIcon size="24" icon="arrow-left" />
          </button>
          <button
            class="offer__slides__controllers__btn"
            :disabled="isEnd"
            :class="{
              disabled: isEnd,
            }"
            @click="onClickNext"
          >
            <VIcon size="24" icon="arrow-right" />
          </button>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
import data from '~/data/home-offer'
export default {
  name: 'HomeOffer',
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
@import '../../assets/styles/pages/home-offer';
</style>
