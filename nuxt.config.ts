// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Photo Library by Jon Doe',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'A photo library viewing and sharing photos' },
        { property: 'og:title', content: 'Photo Library by Jon Doe' },
        { property: 'og:description', content: 'A photo library viewing and sharing photos' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@pinia/nuxt'],
  css: ['@/assets/global.css'],
  runtimeConfig: {
    public: {
      apiBaseUrl: 'https://api.unsplash.com',
      ACCESS_TOKEN: process.env.CLIENT_ID
    }
  },
  image: {
    domains: ['unsplash.com'],
    fastly: {
      baseURL: 'https://images.unsplash.com'
    }
  }
})