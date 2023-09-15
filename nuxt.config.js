export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'HAL-website',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@400;600;700;800&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/globals/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', ssr: false },
    { src: '@/plugins/vee-validate.js', ssr: false },
    { src: '@/plugins/v-mask.js', ssr: false },
    { src: '@/plugins/scroll.js', ssr: false },
  ],

  // Auto import layouts: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'nuxt-gmaps',
      {
        key: 'AIzaSyB-u-QEPIeu4953EDJEx7x5FjIfKYVSIwY',
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
  },

  env: {
    SUPPORT_PHONE: process.env.SUPPORT_PHONE,
    SUPPORT_PHONE_LONG: process.env.SUPPORT_PHONE_LONG,
  },

  publicRuntimeConfig: {
    SUPPORT_PHONE: process.env.SUPPORT_PHONE,
    SUPPORT_PHONE_LONG: process.env.SUPPORT_PHONE_LONG,
  },
}
