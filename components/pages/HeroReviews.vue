<template>
  <div class="reviews__wrapper">
    <div class="reviews__title">
      <h2>What Our Customers Are Saying About Us</h2>
      <p>
        Choose Hyperion Auto Logistics for a seamless, worry-free, and luxurious
        vehicle transportation experience. Start your luxury journey with us
        today!
      </p>
    </div>
    <div class="reviews__slides">
      <ClientOnly>
        <Swiper ref="mySwiper" :options="swiperOptions">
          <SwiperSlide v-for="item in swiperData" :key="item.id">
            <div class="reviews__slide">
              <img class="image" :src="item.image" alt="image" />
              <div class="bottom">
                <h4 class="name">{{ item.full_name }}</h4>
                <p class="title">{{ item.title }}</p>
                <p class="comment">{{ item.comment }}</p>
                <div class="rate">
                  <svg
                    v-for="ind in 5"
                    :key="ind"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M7.38772 2.08514C7.61932 1.54844 8.38033 1.54844 8.61193 2.08514L10.0653 5.45307C10.1634 5.68032 10.3793 5.83454 10.626 5.85361L14.3531 6.14161C14.9511 6.18781 15.1887 6.93852 14.7262 7.32038L11.9233 9.63456C11.7256 9.79779 11.639 10.0599 11.7006 10.3088L12.5632 13.7944C12.7051 14.3676 12.0867 14.8286 11.5779 14.529L8.33804 12.6217C8.12931 12.4988 7.87034 12.4988 7.66161 12.6217L4.42179 14.529C3.91292 14.8286 3.29457 14.3676 3.43643 13.7944L4.29905 10.3088C4.36065 10.0599 4.27406 9.79779 4.07636 9.63456L1.27344 7.32038C0.810929 6.93852 1.04853 6.18781 1.64652 6.14161L5.37362 5.85361C5.6204 5.83454 5.8363 5.68032 5.93437 5.45307L7.38772 2.08514Z"
                      fill="#FFD166"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
  </div>
</template>

<script>
import data from '~/data/hero-reviews'

export default {
  name: 'HeroReviews',
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
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/hero-reviews';
</style>
