<template>
  <div>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Eliot Boutherin',
        jobTitle: 'Platform Engineer AWS',
        url: 'https://ebouther.github.io/',
        email: 'eliot.boutherin@gmail.com',
        sameAs: [
          'https://www.linkedin.com/in/eliot-boutherin/',
          'https://www.malt.fr/profile/eliotboutherin'
        ],
        knowsAbout: [
          'AWS', 'Terraform', 'Node.js', 'TypeScript', 'GraphQL',
          'Docker', 'CI/CD', 'GitHub Actions', 'PostgreSQL', 'MongoDB'
        ]
      })
    }
  ]
})
</script>
