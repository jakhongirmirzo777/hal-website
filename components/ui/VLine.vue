<template>
  <span
    :style="{
      display: 'block',
      height: '1px',
      width: '100%',
      'background-color': color,
    }"
  />
</template>

<script>
export default {
  name: 'VLine',
  props: {
    color: {
      type: String,
      default: '#DBDBDF',
    },
  },
}
</script>
