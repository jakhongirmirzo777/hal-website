<template>
  <component
    :is="importedIcon"
    class="svg-icon"
    v-bind="$attrs"
    :style="styles"
    v-on="$listeners"
  />
</template>
<script>
export default {
  name: 'VIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: '',
    },
    width: {
      type: [Number, String],
      default: '',
    },
  },
  computed: {
    importedIcon() {
      return () => import(`@/assets/icons/${this.icon}.svg?inline`)
    },
    styles() {
      return {
        width: this.width ? this.width + 'px' : this.size + 'px',
        height: this.height ? this.height + 'px' : this.size + 'px',
      }
    },
  },
}
</script>
