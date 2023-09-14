<template>
  <div class="error__wrapper">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.error {
  &__wrapper {
    min-height: calc(100vh - 82px - 366px);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;

    h1 {
      font-size: 48px;
      font-weight: 700;
      letter-spacing: -0.64px;
      margin-bottom: 20px;
    }

    a {
      background-color: var(--color-blue);
      color: var(--color-white);
      font-size: 16px;
      padding: 10px;
      text-decoration: none;
      border-radius: 10px;
    }
  }
}
</style>
