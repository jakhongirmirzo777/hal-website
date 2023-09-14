<template>
  <div class="benefits__wrapper">
    <div class="benefits__choose">
      <h2>What makes us the ideal choice?</h2>
      <p>
        Transport your vehicle to and from any state - securely and quickly,
        with peace of mind.
      </p>
    </div>
    <div class="benefits__slides">
      <div class="mobile">
        <ClientOnly>
          <Swiper
            ref="mySwiper"
            :options="swiperOptions"
            @slide-change="onChangeSlide"
          >
            <SwiperSlide v-for="slide in swiperData" :key="slide.id">
              <div class="benefits__slide">
                <div class="benefits__slide__icon">
                  <VIcon :icon="slide.icon" size="32" />
                </div>
                <h4>
                  {{ slide.title }}
                </h4>
                <p>{{ slide.description }}</p>
              </div>
            </SwiperSlide>
          </Swiper>
          <div class="benefits__slides__controllers">
            <button
              class="benefits__slides__controllers__btn mr-8"
              :disabled="isStart"
              :class="{
                disabled: isStart,
              }"
              @click="onClickPrev"
            >
              <VIcon size="24" icon="arrow-left" />
            </button>
            <button
              class="benefits__slides__controllers__btn"
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
      <div class="container-fluid desktop">
        <div class="row">
          <div
            v-for="slide in swiperData"
            :key="slide.id"
            class="benefits__slide col-4"
          >
            <div class="benefits__slide__icon">
              <VIcon :icon="slide.icon" size="32" />
            </div>
            <h4>
              {{ slide.title }}
            </h4>
            <p>{{ slide.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '~/data/home-benefits'
import VIcon from '~/components/ui/VIcon'
export default {
  name: 'HomeBenefits',
  components: { VIcon },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: true,
        },
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
@import '../../assets/styles/pages/home-benefits';
</style>
