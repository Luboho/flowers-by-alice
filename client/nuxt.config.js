export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'client',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // {
      //   hid: 'fb:app_id',
      //   property: 'fb:app_id',
      //   content: '899591764284265'
      // },
      {
        hid: 'title',
        name: 'title',
        content: 'Flowers by Alice'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'flower, wedding, funeral, birthday, home-design'
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '625px'
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '415px'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Flowers by Alice'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
      { rel: "stylesheet", href: 'https://fonts.googleapis.com/css2?family=Overlock+SC&family=Overlock:wght@400;700;900&family=Roboto:wght@300;400;500;700;900&display=swap'},
      { rel: "preconnect", href: 'https://fonts.gstatic.com crossorigin'},
      { rel: "preconnect", href: 'https://fonts.googleapis.com'}
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/styles/fonts.css",
    "~/assets/styles/index.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/coolLightBox.client.js', mode: 'client'},
    { src: '~/plugins/masonry-wall.client.js', mode: 'client', ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/vuetify',
    // '@aceforth/nuxt-optimized-images',
  ],

  // optimizedImages: {
  //   optimizeImages: true
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['vue-social-sharing/nuxt', {
        networks: {
          fakeblock: 'https://fakeblock.com/share?url=@url&title=@title'
        }
      }
    ],
    [
      'nuxt-fontawesome', {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set:'@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],
  vuetify: {
    customVariables: ['~/assets/variables.scss']
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:8000',
    credentials: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
