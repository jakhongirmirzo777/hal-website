<template>
  <div class="blogs__wrapper">
    <h1 class="blogs__title">Hyperion Blog</h1>
    <div class="blogs__box mobile">
      <div class="blogs__cards">
        <div v-for="item in allData" :key="item.id" class="blogs__card">
          <img :src="item.image" alt="blog" />
          <div class="blogs__content">
            <div class="blogs__card__title">
              <p class="title">{{ item.title }}</p>
              <p class="date">{{ item.date }}</p>
            </div>
            <span class="place">{{ item.place }}</span>
          </div>
        </div>
      </div>
      <div class="blogs__btn">
        <button @click="showMore">
          <VIcon icon="spinner" size="16" />
          <span>{{ isShowMore ? 'Show less' : 'Show more' }}</span>
        </button>
      </div>
    </div>
    <div class="blogs__box desktop row container-fluid">
      <div class="blogs__cards col-8">
        <div class="container-fluid">
          <div class="row">
            <div
              v-for="item in allData"
              :key="item.id"
              class="blogs__card col-6"
            >
              <img :src="item.image" alt="blog" />
              <div class="blogs__content">
                <div class="blogs__card__title">
                  <p class="title">{{ item.title }}</p>
                  <p class="date">{{ item.date }}</p>
                </div>
                <span class="place">{{ item.place }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="blogs__btn">
          <button @click="showMore">
            <VIcon icon="spinner" size="16" />
            <span>{{ isShowMore ? 'Show less' : 'Show more' }}</span>
          </button>
        </div>
      </div>
      <div class="col-4">
        <form ref="form" class="blogs-form__form" @submit.prevent="">
          <div class="blogs-form__form__content">
            <h4 class="mb-16">
              Get an instant quote or call us now at
              <a :href="`tel:${phoneLink}`">{{ phoneLinkLong }}</a>
            </h4>
            <div class="blogs-form__tabs">
              <div
                class="blogs-form__tab"
                :class="{ active: step === 1 }"
                @click="step = 1"
              >
                Destination
              </div>
              <div
                class="blogs-form__tab"
                :class="{ active: step === 2 }"
                @click="step = 2"
              >
                Vehicle
              </div>
              <div
                class="blogs-form__tab"
                :class="{ active: step === 3 }"
                @click="step = 3"
              >
                Date
              </div>
            </div>
            <div v-show="step === 1" class="blogs-form__inputs">
              <div class="blogs-form__group">
                <VIcon class="blogs-form__icon" size="22" icon="plane" />
                <input
                  class="blogs-form__input"
                  type="text"
                  placeholder="Starting location"
                />
              </div>
              <div class="blogs-form__group">
                <VIcon class="blogs-form__icon" size="22" icon="location" />
                <input
                  class="blogs-form__input"
                  type="text"
                  placeholder="Final destination"
                />
              </div>
              <div class="blogs-form__group">
                <VIcon class="blogs-form__icon" size="22" icon="clock" />
                <input
                  class="blogs-form__input"
                  type="text"
                  placeholder="Timeframe"
                />
              </div>
              <div class="blogs-form__group">
                <VIcon class="blogs-form__icon" size="22" icon="car" />
                <input
                  class="blogs-form__input"
                  type="text"
                  placeholder="Car size"
                />
              </div>
            </div>
            <div v-show="step === 2" class="blogs-form__inputs">
              <div class="blogs-form__group">
                <VIcon class="blogs-form__icon" size="22" icon="calendar" />
                <select class="blogs-form__input">
                  <option value="" selected disabled>Year</option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                </select>
                <VIcon
                  class="blogs-form__icon select"
                  size="22"
                  icon="chevron-down"
                />
              </div>
              <div class="blogs-form__group">
                <VIcon class="blogs-form__icon" size="22" icon="industry" />
                <select class="blogs-form__input">
                  <option value="" selected disabled>Vehicle make</option>
                  <option value="volvo">Acura</option>
                  <option value="saab">Audi</option>
                </select>
                <VIcon
                  class="blogs-form__icon select"
                  size="22"
                  icon="chevron-down"
                />
              </div>
              <div class="blogs-form__group">
                <VIcon class="blogs-form__icon" size="22" icon="car" />
                <select class="blogs-form__input">
                  <option value="" selected disabled>Vehicle model</option>
                  <option value="volvo">Giulia</option>
                  <option value="saab">Stelvio</option>
                </select>
                <VIcon
                  class="blogs-form__icon select"
                  size="22"
                  icon="chevron-down"
                />
              </div>
              <div class="blogs-form__group">
                <VIcon class="blogs-form__icon" size="22" icon="wrench" />
                <select class="blogs-form__input">
                  <option value="" selected disabled>Vehicle Runs?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <VIcon
                  class="blogs-form__icon select"
                  size="22"
                  icon="chevron-down"
                />
              </div>
            </div>
            <div v-show="step === 3" class="blogs-form__inputs">
              <div class="blogs-form__group">
                <VIcon class="blogs-form__icon" size="22" icon="user-gray" />
                <input
                  class="blogs-form__input"
                  type="text"
                  placeholder="First name"
                />
              </div>
              <div class="blogs-form__group">
                <VIcon class="blogs-form__icon" size="22" icon="user-gray" />
                <input
                  class="blogs-form__input"
                  type="text"
                  placeholder="Last name"
                />
              </div>
              <div class="blogs-form__group">
                <VIcon class="blogs-form__icon" size="22" icon="envelope" />
                <input
                  class="blogs-form__input"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div class="blogs-form__group">
                <VIcon class="blogs-form__icon" size="22" icon="phone" />
                <input
                  class="blogs-form__input"
                  type="text"
                  placeholder="Phone"
                />
              </div>
            </div>
          </div>
          <button type="submit" class="blogs-form__btn cursor-pointer">
            Let’s go!
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/blogs-card'
import VIcon from '~/components/ui/VIcon'

export default {
  name: 'BlogsCard',
  components: { VIcon },
  data() {
    return {
      data,
      isShowMore: false,
      step: 1,
    }
  },
  computed: {
    allData() {
      return this.isShowMore ? this.data.slice(0) : this.data.slice(0, 4)
    },
    phoneLink() {
      return process.env.SUPPORT_PHONE
    },
    phoneLinkLong() {
      return process.env.SUPPORT_PHONE_LONG
    },
  },
  methods: {
    showMore() {
      this.isShowMore = !this.isShowMore
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/pages/blogs-card';
</style>
