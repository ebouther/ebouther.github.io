<template>
  <header
    class="header"
    :class="{ scrolled: isScrolled }"
  >
    <div class="container header-inner">
      <NuxtLink to="/" class="logo">EB</NuxtLink>
      <nav class="nav">
        <NuxtLink v-for="link in links" :key="link.href" :to="link.href" class="nav-link">{{ t(link.key) }}</NuxtLink>
        <NuxtLink to="/case-studies" class="nav-link">{{ t('header.caseStudies') }}</NuxtLink>
      </nav>
      <button class="lang-toggle" @click="toggleLocale" :title="isFr ? 'Switch to English' : 'Passer en français'">
        <span :class="{ active: isFr }">FR</span>
        <span class="lang-sep">/</span>
        <span :class="{ active: !isFr }">EN</span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const { t, isFr, toggleLocale } = useI18n()

const links = [
  { href: '/#skills', key: 'header.skills' },
  { href: '/#experience', key: 'header.experience' },
  { href: '/#recommendations', key: 'header.recommendations' },
  { href: '/#contact', key: 'header.contact' },
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

.lang-toggle {
  display: flex;
  align-items: center;
  gap: 4px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 6px 12px;
  color: var(--text-secondary);
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
  font-family: inherit;
  letter-spacing: 0.04em;
}

.lang-toggle:hover {
  border-color: var(--accent);
}

.lang-toggle .active {
  color: var(--accent-hover);
}

.lang-sep {
  color: var(--border);
  font-weight: 400;
}
</style>
