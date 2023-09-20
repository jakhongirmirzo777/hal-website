<template>
  <ValidationProvider
    v-slot="{ errors }"
    class="v-select"
    tag="div"
    :rules="rules"
    :vid="vid ? vid : label"
    v-click-outside="onClickOutside"
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
          class="v-select__input"
          type="text"
          :value="value"
          :placeholder="placeholder || label"
          @input="onInput"
          @focus="isFocused = true"
        />
        <VIcon
          class="v-select__chevron"
          :class="{ open: isFocused }"
          icon="chevron-down"
          size="22"
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
    <ul
      v-if="isFocused"
      class="v-select__list"
      :class="{ 'one-item': parsedItems.length === 1 }"
    >
      <li
        v-for="item in parsedItems"
        :key="item[itemValue]"
        class="v-select__item"
        @click="selectItem(item[itemValue])"
      >
        {{ item[itemText] }}
      </li>
    </ul>
  </ValidationProvider>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
export default {
  name: 'VSelect',
  components: { VIcon },
  props: {
    vid: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
    itemText: {
      type: String,
      default: 'text',
    },
    itemValue: {
      type: String,
      default: 'value',
    },
    placeholder: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
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
  computed: {
    parsedItems() {
      const items = this.items.slice(0)
      return !this.value
        ? items
        : items.filter((item) =>
            item[this.itemText].toLowerCase().includes(this.value.toLowerCase())
          )
    },
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
    },
    selectItem(val) {
      this.isFocused = false
      this.$emit('input', val)
    },
    onClickOutside() {
      this.isFocused = false
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

  &__chevron {
    position: absolute;
    top: 0;
    right: 15px;
    transition: all 0.2s;
    height: 56px !important;

    &.open {
      transform: rotate(180deg);
    }
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

  &__list {
    position: absolute;
    top: 60px;
    left: 0;
    z-index: 4;
    list-style: none;
    background-color: var(--color-white);
    width: 100%;
    border: 1px solid var(--color-gray-light);
    border-radius: 12px;
    min-height: 100px;

    &.one-item {
      .v-select__item:last-child {
        border-radius: 12px 12px 0 0;
      }
    }
  }

  &__item {
    padding: 8px 15px;
    cursor: pointer;

    &:first-child {
      border-radius: 12px 12px 0 0;
    }

    &:last-child {
      border-radius: 0 0 12px 12px;
    }

    &:hover {
      background-color: rgba(183, 219, 239, 0.4);
    }
  }
}
</style>
