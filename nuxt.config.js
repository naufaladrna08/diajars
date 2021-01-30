export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'diajars',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }
    ]
  },

  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/scss/colors.scss',
    '~assets/scss/library.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  axios: {
    baseURL: 'http://localhost:8000/api/'
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:8000/api/'
  },

  auth: {
    redirect: {
      login: '/'
    },
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'token' },
          user: { url: '/me', method: 'get', propertyName: 'data' },
          logout: { method: 'get', url: '/logout', method: 'get' }
        }
      }
    }
  }
}
