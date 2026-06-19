export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['motion-v/nuxt'],
  ssr: true,
  nitro: {
    preset: 'static'
  },
  app: {
    head: {
      title: 'Eliot Boutherin - Platform Engineer AWS & Développeur Backend',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Platform Engineer AWS spécialisé en Terraform, CI/CD et développement backend Node.js/TypeScript. Accompagne les entreprises dans la conception et l\'automatisation de leurs infrastructures cloud.' },
        { name: 'keywords', content: 'Platform Engineer, AWS, Terraform, Node.js, DevOps, freelance, Paris, infrastructure cloud, CI/CD' },
        { property: 'og:title', content: 'Eliot Boutherin - Platform Engineer AWS' },
        { property: 'og:description', content: 'J\'aide les entreprises à concevoir, automatiser et faire évoluer leurs infrastructures AWS avec Terraform, tout en développant des API backend performantes.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://ebouther.github.io/' },
        { property: 'og:locale', content: 'fr_FR' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Eliot Boutherin - Platform Engineer AWS' },
        { name: 'twitter:description', content: 'J\'aide les entreprises à concevoir, automatiser et faire évoluer leurs infrastructures AWS avec Terraform.' },
        { name: 'author', content: 'Eliot Boutherin' },
        { name: 'google-site-verification', content: 'eKKVOix-9e7mlubFa8RyXHe3v3MPgWvSjqEir9_8tYo' }
      ],
      link: [
        { rel: 'canonical', href: 'https://ebouther.github.io/' }
      ]
    }
  },
  css: ['~/assets/main.css']
})
