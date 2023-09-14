<template>
  <div class="reviews__wrapper">
    <div class="reviews__title">
      <h2>
        What they say <br />
        about us
      </h2>
      <p>
        Have your car shipped to and from any state - safely, fast, with no risk
        or damage.
      </p>
    </div>
    <div class="reviews__slides">
      <ClientOnly>
        <Swiper ref="mySwiper" :options="swiperOptions">
          <SwiperSlide v-for="slide in swiperData" :key="slide.id">
            <div class="reviews__slide">
              <div class="reviews__slide__header">
                <div class="d-flex align-center">
                  <img class="mr-5" :src="slide.image" alt="photo" />
                  <p>
                    {{ slide.first_name }} <br />
                    {{ slide.last_name }}
                  </p>
                </div>
                <div class="reviews__slide__stars">
                  <VIcon
                    v-for="star in slide.rating"
                    :key="star"
                    size="16"
                    icon="star"
                  />
                </div>
              </div>
              <p class="reviews__slide__comment">
                {{ slide.comment }}
              </p>
              <p class="reviews__slide__date">{{ slide.date }}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
  </div>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
import data from '~/data/home-reviews'
export default {
  name: 'HomeReviews',
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
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/home-reviews';
</style>
