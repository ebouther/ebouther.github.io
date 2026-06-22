<template>
  <div class="app-wrapper">
    <BackgroundAnimation v-if="showBg" />
    <div class="app-content">
      <AppHeader />
      <NuxtPage />
      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
const showBg = ref(false)

onMounted(() => {
  requestAnimationFrame(() => { showBg.value = true })
})

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

<style>
.app-wrapper {
  position: relative;
  min-height: 100vh;
}

.app-content {
  position: relative;
  z-index: 1;
}
</style>
