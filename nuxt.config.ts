// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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