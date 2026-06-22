<template>
  <header
    class="header"
    :class="{ scrolled: isScrolled }"
  >
    <div class="container header-inner">
      <a href="#" class="logo">EB</a>
      <nav class="nav">
        <a v-for="link in links" :key="link.href" :href="link.href" class="nav-link">{{ link.label }}</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const links = [
  { href: '#skills', label: 'Compétences' },
  { href: '#experience', label: 'Expérience' },
  { href: '#recommendations', label: 'Recommandations' },
  { href: '#contact', label: 'Contact' },
]

const isScrolled = ref(false)

let ticking = false
onMounted(() => {
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        isScrolled.value = window.scrollY > 20
        ticking = false
      })
      ticking = true
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 72px;
  background: rgba(10, 10, 15, 0.92);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  transition: height 0.15s ease;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
}

.header.scrolled {
  height: 56px;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--accent);
  text-decoration: none;
  letter-spacing: -0.05em;
  transition: font-size 0.15s ease;
}

.header.scrolled .logo {
  font-size: 1.2rem;
}

.nav {
  display: flex;
  gap: 32px;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: var(--text-primary);
}
</style>