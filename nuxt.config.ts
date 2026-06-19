export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'static'
  },
  app: {
    head: {
      title: 'Eliot Boutherin - DevOps AWS & Développeur Backend',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Portfolio de Eliot Boutherin - Expert DevOps AWS et Développeur Backend en freelance' }
      ]
    }
  },
  css: ['~/assets/main.css']
})
