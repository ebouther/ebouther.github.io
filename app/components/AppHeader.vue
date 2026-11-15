<template>
  <header
    class="header"
    :class="{ scrolled: isScrolled, 'menu-open': menuOpen }"
    @keydown.esc="menuOpen = false"
  >
    <div class="container header-inner">
      <NuxtLink to="/" class="logo">EB</NuxtLink>
      <nav id="site-nav" class="nav" :class="{ open: menuOpen }" aria-label="Main">
        <NuxtLink v-for="link in links" :key="link.href" :to="link.href" class="nav-link" @click="menuOpen = false">{{ t(link.key) }}</NuxtLink>
        <NuxtLink to="/case-studies" class="nav-link" @click="menuOpen = false">{{ t('header.caseStudies') }}</NuxtLink>
      </nav>
      <div class="header-actions">
        <button class="lang-toggle" @click="toggleLocale" :title="isFr ? 'Switch to English' : 'Passer en français'">
          <span :class="{ active: isFr }">FR</span>
          <span class="lang-sep">/</span>
          <span :class="{ active: !isFr }">EN</span>
        </button>
        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="site-nav"
          :aria-label="menuOpen ? (isFr ? 'Fermer le menu' : 'Close menu') : (isFr ? 'Ouvrir le menu' : 'Open menu')"
          @click="menuOpen = !menuOpen"
        >
          <span class="menu-bars" aria-hidden="true" />
        </button>
      </div>
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
const menuOpen = ref(false)

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

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
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
  color: var(--text-secondary);
  font-weight: 400;
}

.menu-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-right: -10px;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-bars,
.menu-bars::before,
.menu-bars::after {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: transform 0.2s, background 0.2s;
}

.menu-bars {
  position: relative;
}

.menu-bars::before,
.menu-bars::after {
  content: '';
  position: absolute;
  left: 0;
}

.menu-bars::before {
  top: -6px;
}

.menu-bars::after {
  top: 6px;
}

.menu-open .menu-bars {
  background: transparent;
}

.menu-open .menu-bars::before {
  transform: translateY(6px) rotate(45deg);
}

.menu-open .menu-bars::after {
  transform: translateY(-6px) rotate(-45deg);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    padding: 8px 24px 16px;
    background: var(--bg-primary);
    border-bottom: 1px solid var(--border);
  }

  .nav.open {
    display: flex;
  }

  .nav-link {
    display: flex;
    align-items: center;
    min-height: 48px;
    font-size: 1rem;
    color: var(--text-primary);
  }
}
</style>
