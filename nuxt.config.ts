// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/ui"],
  css: ['~/assets/css/fonts.css','~/assets/css/global.css'], //TODO fix css global file
  ui: {
    icons: ['ri', 'heroicons']
  } //TODO prio high: FIX VERCEL
  // ,
  // nitro: {
  //   preset: 'vercel',
  // }
})