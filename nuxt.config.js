export default {

  mode: 'spa',

  target: 'server',

  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
		baseURL: 'http://localhost:8000',
	},

  vuetify: {
    theme: {
      themes: {
        light: {
          primary: "#3477af",
          secondary: "#d6d7df",
          accent: "#2A8FEC",
          accent2: "#456292",
          info: "#009688",
          error: "#EB4B3D",
          warning: "#DC791E",
          success: "#64DD17",
        }
      }
    }
  },

  build: {
  }
}
