<template>
  <div class="header__desktop__wrapper">
    <div class="header__desktop__left">
      <nuxt-link
        to="/"
        class="header__desktop__logo"
        style="text-decoration: none"
      >
        <VIcon class="mr-8" icon="logo" size="42" />
        <span class="header__desktop__logo__text">Hyperion</span>
      </nuxt-link>
      <ul class="header__desktop__menus">
        <li
          v-for="(menu, index) in menus"
          :key="index"
          class="header__desktop__menu"
        >
          <span
            class="header__desktop__menu__title"
            @click="activeMenu = index"
            :data-id="index"
          >
            <component
              :is="
                menu && menu.children && menu.children.length
                  ? 'span'
                  : 'nuxt-link'
              "
              :to="menu.link"
            >
              {{ menu.title }}
            </component>
            <VIcon
              v-if="menu.children && menu.children.length"
              icon="chevron-down-solid"
              size="24"
            />
          </span>
          <div
            v-if="menu.children && menu.children.length"
            class="header__desktop__menu__items"
            :class="{ active: activeMenu === index }"
            :data-id="index"
          >
            <span class="header__desktop__menu__top">{{ menu.title }}</span>
            <table class="header__desktop__menu__bottom">
              <tbody>
                <tr v-for="(_, ind) in menu.children.length / 3" :key="ind">
                  <td>
                    <nuxt-link :to="menu.children[ind * 3].link">
                      {{ menu.children[ind * 3].title }}
                    </nuxt-link>
                  </td>
                  <td>
                    <nuxt-link :to="menu.children[ind * 3 + 1].link">
                      {{ menu.children[ind * 3 + 1].title }}
                    </nuxt-link>
                  </td>
                  <td>
                    <nuxt-link :to="menu.children[ind * 3 + 2].link">
                      {{ menu.children[ind * 3 + 2].title }}
                    </nuxt-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </li>
      </ul>
    </div>
    <span class="header__desktop__right">
      <a class="header__desktop__phone" :href="`tel:${phoneLink}`">Call us</a>
      <nuxt-link to="/support"> Support </nuxt-link>
    </span>
  </div>
</template>

<script>
import VIcon from '~/components/ui/VIcon'
export default {
  name: 'TheHeaderDesktop',
  components: { VIcon },
  data() {
    return {
      activeMenu: null,
      menus: [
        {
          title: 'Home',
          link: '/',
        },
        {
          title: 'Reviews',
          link: '/reviews',
        },
        {
          title: 'Guides',
          link: '/guides',
          children: [
            {
              title: 'How-to guides',
              link: '/guides',
            },
            {
              title: 'Shipping costs',
              link: '/guides',
            },
            {
              title: 'About auto auctions',
              link: '/guides',
            },
            {
              title: 'Safety guides',
              link: '/guides',
            },
            {
              title: 'Buying car online',
              link: '/guides',
            },
            {
              title: 'Best time to ship a vehicle',
              link: '/guides',
            },
            {
              title: 'Market price insights',
              link: '/guides',
            },
            {
              title: 'Selling car online',
              link: '/guides',
            },
            {
              title: 'Hyperion VS',
              link: '/guides',
            },
          ],
        },
        {
          title: 'Why Hyperion',
          link: '/guides',
        },
        {
          title: 'How It works',
          link: '/guides',
        },
        {
          title: 'Pricing',
          link: '/guides',
        },
        {
          title: 'For Business',
          link: '/guides',
        },
        {
          title: 'Blog',
          link: '/guides',
        },
      ],
    }
  },
  computed: {
    phoneLink() {
      return process.env.SUPPORT_PHONE
    },
  },
  watch: {
    activeMenu(val) {
      if (typeof val !== 'object') {
        setTimeout(() => {
          document.body.addEventListener('click', this.closeMenu)
        }, 100)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    },
  },
  methods: {
    closeMenu(e) {
      const isOpen = e.target.closest('.header__desktop__menu__items')
      if (!isOpen) this.activeMenu = null
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/layouts/the-header';
</style>
