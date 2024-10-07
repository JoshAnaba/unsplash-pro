// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  css: ['@/assets/global.css'],
  runtimeConfig: {
    public: {
      apiBaseUrl: 'https://api.unsplash.com',
      ACCESS_TOKEN: '0jqbvwfWZzyihGAqXrXQCdleqPwfd9BdZ03K-Kujtp4',
    }
  },
  image: {
    domains: ['unsplash.com'],
    fastly: {
      baseURL: 'https://images.unsplash.com'
    }
  }
})
