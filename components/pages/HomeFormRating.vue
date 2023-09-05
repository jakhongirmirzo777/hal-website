<template>
  <div class="home-form__rating">
    <div class="home-form__rating--top">
      <img class="trustpilot" src="/trustpilot.png" alt="trustpilot" />
      <div class="stars">
        <img src="/star.png" alt="star" />
        <img src="/star.png" alt="star" />
        <img src="/star.png" alt="star" />
        <img src="/star.png" alt="star" />
        <img src="/star-half.png" alt="star-half" />
      </div>
    </div>
    <p class="home-form__rating--bottom">4.6 out of 5 based on 245 reviews</p>
  </div>
</template>

<script>
export default {
  name: 'HomeFormRating',
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/home-form-rating';
</style>
