<template>
  <header
    class="header"
    :style="{
      height: headerHeight + 'px',
    }"
  >
    <div class="container header-inner">
      <a
        href="#"
        class="logo"
        :style="{ fontSize: logoSize + 'rem' }"
      >
        EB
      </a>
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

const { scrollY } = useScroll()
const headerHeight = useSpring(
  useTransform(scrollY, [0, 100], [72, 56]),
  { stiffness: 200, damping: 20 }
)
const logoSize = useSpring(
  useTransform(scrollY, [0, 100], [1.5, 1.2]),
  { stiffness: 200, damping: 20 }
)
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
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

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--accent);
  text-decoration: none;
  letter-spacing: -0.05em;
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