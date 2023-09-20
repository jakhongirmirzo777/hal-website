<template>
  <ValidationProvider
    v-slot="{ errors }"
    class="v-select"
    tag="div"
    :rules="rules"
    :vid="vid"
    :name="name || label"
  >
    <div class="v-select__box">
      <div class="v-select__box__input">
        <VIcon
          v-if="icon"
          class="v-select__icon"
          :icon="icon"
          :size="iconSize"
        />
        <input
          :id="id"
          class="v-select__input"
          type="text"
          :value="value"
          :placeholder="placeholder || label"
          @input="onInput"
          @focus="isFocused = true"
        />
      </div>
      <div
        v-if="!hideDetails"
        class="v-select__error"
        :class="{ focused: isFocused }"
      >
        {{ errors[0] }}
      </div>
    </div>
  </ValidationProvider>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
export default {
  name: 'VInput',
  components: { VIcon },
  props: {
    id: {
      type: String,
      default: '',
    },
    vid: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    rules: {
      type: [Object, String],
      default: '',
    },
    hideDetails: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    iconSize: {
      type: String,
      default: '22',
    },
    value: {
      type: [String, Object],
      default: '',
    },
  },
  data() {
    return {
      isFocused: false,
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.v-select {
  width: 100%;
  position: relative;

  &__box__input {
    height: 56px;
    display: flex;
    align-items: center;
    position: relative;
  }

  &__icon {
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
  }

  &__input {
    font-family: 'Poppins', sans-serif;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    padding-left: 56px;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.2s;
    border: 2px solid var(--color-gray-light);
    color: var(--color-gray);
    background-color: var(--color-white);

    &:focus {
      border-color: var(--color-blue);
    }
  }

  &__error {
    font-size: 14px;
    height: 20px;
    display: flex;
    align-items: center;
    color: var(--color-red);
    opacity: 1;

    &.focused {
      opacity: 0;
    }
  }
}
</style>
