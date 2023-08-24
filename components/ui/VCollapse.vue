<template>
  <div>
    <div class="v-collapse__top">
      <slot name="top" :open="isOpen" :toggle="toggle" />
    </div>
    <div
      class="v-collapse__bottom"
      :class="{ open: isOpenContainer }"
      :style="collapseStyle"
    >
      <div ref="bottomWrapper">
        <slot name="bottom" :toggle="toggle" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VCollapse',
  data() {
    return {
      isOpen: false,
      isOpenContainer: false,
      collapseHeight: '0',
    }
  },
  computed: {
    collapseStyle() {
      return {
        height: this.collapseHeight,
        overflow: 'hidden',
        transition: 'all 0.3s',
      }
    },
  },
  methods: {
    toggle() {
      if (this.isOpen) {
        this.collapseHeight = '0'
        this.isOpenContainer = false
      } else {
        this.collapseHeight = this.$refs.bottomWrapper.clientHeight + 'px'
        setTimeout(() => {
          this.isOpenContainer = true
        }, 500)
      }
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/ui/v-collapse';
</style>
