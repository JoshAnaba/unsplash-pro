// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      charset: "utf-8",
      htmlAttrs: {
        lang: "en",
      },
      viewport: "initial-scale=1",
      title: "Acumen",
      meta: [
        {
          name: "description",
          content:
            "Acumen is a digital agency and venture studio dedicated to building, co-creating and investing in the world's most promising early-stage companies.",
        },
        { name: "format-detection", content: "telephone=no" },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          name: "google-site-verification",
          content: "wVcTZ37Z2rwHtm8snZFtdSbu_i6geTKM6d2t1gsSgts"
        },
        { hid: "og-url", name: "og:url", content: "https://acumen.digital" },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://acumen-website.s3.us-east-2.amazonaws.com/acumen.webp",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://acumen-website.s3.us-east-2.amazonaws.com/acumen.webp",
        },
        {
          hid: "twitter:site",
          name: "twitter:site",
          content: "@AcumenDigital_",
        },
        {
          hid: "twitter:domain",
          name: "twitter:domain",
          content: "acumen.digital",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Acumen - Award-Winning Digital Agency & Venture Studio",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Acumen is a digital agency and venture studio dedicated to building, co-creating and investing in the world's most promising early-stage companies.",
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: "https://acumen.digital",
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@pinia/nuxt', '@nuxtjs/seo'],
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