<template>
  <div class="slider__wrapper">
    <div class="slider__slides">
      <ClientOnly>
        <Swiper
          ref="mySwiper"
          :options="swiperOptions"
          @slide-change="onChangeSlide"
        >
          <SwiperSlide v-for="slide in swiperData" :key="slide.id">
            <div class="slider__slide">
              <img :src="slide.image" alt="image" />
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
    <div class="slider__trustpilot">
      <div class="slider__trustpilot__top">
        <img class="trust" src="/trustpilot.png" alt="trustpilot" />
        <div class="stars">
          <img class="star" src="/star.png" alt="star" />
          <img class="star" src="/star.png" alt="star" />
          <img class="star" src="/star.png" alt="star" />
          <img class="star" src="/star.png" alt="star" />
          <img class="star" src="/star-half.png" alt="star" />
        </div>
      </div>
      <div class="slider__trustpilot__bottom">
        <h2>Get your free quote now</h2>
        <p>
          Have your car shipped to and from any state - safely, fast, with no
          risk or damage.
        </p>
        <button>Read more</button>
      </div>
    </div>
    <div class="slider__slides__controllers">
      <button
        class="slider__slides__controllers__btn mr-8"
        :disabled="isStart"
        :class="{
          disabled: isStart,
        }"
        @click="onClickPrev"
      >
        <VIcon size="24" icon="arrow-left" />
      </button>
      <button
        class="slider__slides__controllers__btn"
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
import VIcon from '~/components/ui/VIcon'
import data from '~/data/home-offer'
export default {
  name: 'ReviewsSlider',
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
@import '../../assets/styles/pages/reviews-slider';
</style>
