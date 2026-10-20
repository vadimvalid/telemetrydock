// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@pinia/nuxt', '@vueuse/nuxt/module', '@nuxt/eslint', '@nuxt/test-utils/module'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
