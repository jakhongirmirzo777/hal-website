<template>
  <div class="partners__wrapper">
    <div class="partners__title">
      <h2>Our partners</h2>
      <p>
        Trust in our expertise and commitment to deliver exceptional service
        every time
      </p>
    </div>
    <div class="partners__slides">
      <ClientOnly>
        <Swiper ref="mySwiper" :options="swiperOptions">
          <SwiperSlide v-for="(_, index) in 8" :key="index">
            <div class="partners__slide">
              <img
                class="partners__slide__top"
                :src="swiperData[index].image"
                alt="image"
              />
              <img
                class="partners__slide__bottom"
                :src="swiperData[7 - index].image"
                alt="image"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
  </div>
</template>

<script>
import data from '~/data/home-partners'
export default {
  name: 'HomePartners',
  data() {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
      },
      swiperData: data,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/home-partners';
</style>
