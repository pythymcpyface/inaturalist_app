// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', 'nuxt-highcharts', 'nuxt-mapbox'],
  mapbox: {
    accessToken: 'pk.eyJ1IjoiYWdpYnNvbjEiLCJhIjoiY2tpNmVqOGh3MHRleTJ2bWhoY3BybWl3dyJ9.Hc2ErYd0lEKyIdo5KCjfcA'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})