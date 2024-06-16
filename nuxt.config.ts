// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/ui"],
  css: ['~/assets/css/fonts.css','~/assets/css/global.css'], //TODO fix css global file
  ui: {
    icons: ['ri', 'heroicons']
  },
  nitro: {
    preset: 'vercel',
  }
})