<template>
  <a :href="`tel:${phoneLink}`" class="phone__call__btn">
    <VIcon icon="phone-solid" style="fill: #ffffff" />
  </a>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
export default {
  name: 'ThePhone',
  components: { VIcon },
  computed: {
    phoneLink() {
      return process.env.SUPPORT_PHONE
    },
  },
}
</script>

<style lang="scss">
.phone__call__btn {
  position: fixed;
  right: 50px;
  bottom: 50px;
  background-color: var(--color-blue);
  border: none;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 15px rgb(59, 113, 254, 0.6);
  animation: bounce 0.9s infinite linear;

  &:active {
    transform: scale(1.2);
  }
}

@keyframes bounce {
  0% {
    bottom: 65px;
  }

  50% {
    bottom: 50px;
  }

  100% {
    bottom: 65px;
  }
}
</style>
