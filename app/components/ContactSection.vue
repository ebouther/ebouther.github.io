<template>
  <section id="contact" class="section">
    <div class="container">
      <Motion
        as="h2"
        class="section-title"
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true }"
        :transition="{ duration: 0.5 }"
      >
        Me <span>contacter</span>
      </Motion>
      <div class="contact-content">
        <Motion
          as="p"
          class="contact-text"
          :initial="{ opacity: 0, y: 15 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.5 }"
        >
          Vous avez un projet cloud ou backend ? Discutons-en.
        </Motion>
        <div class="contact-links">
          <Motion
            v-for="(link, i) in contactLinks"
            :key="link.label"
            as="a"
            :href="link.href"
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noopener' : undefined"
            class="contact-card"
            :initial="{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }"
            :while-in-view="{ opacity: 1, x: 0 }"
            :viewport="{ once: true }"
            :transition="{ delay: 0.2 + i * 0.1, duration: 0.4, ease: 'easeOut' }"
            :while-hover="{ x: 6, transition: { duration: 0.2 } }"
          >
            <span class="contact-icon">{{ link.icon }}</span>
            <span class="contact-label">{{ link.label }}</span>
            <span class="contact-value">{{ link.value }}</span>
          </Motion>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const email = 'eliot.boutherin@gmail.com'

const contactLinks = [
  { label: 'Email', icon: '✉️', value: email, href: `mailto:${email}`, external: false },
  { label: 'LinkedIn', icon: '💼', value: 'in/eliot-boutherin', href: 'https://www.linkedin.com/in/eliot-boutherin/', external: true },
  { label: 'Malt', icon: '🏆', value: 'eliotboutherin', href: 'https://www.malt.fr/profile/eliotboutherin', external: true },
]
</script>

<style scoped>
.contact-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.contact-text {
  font-size: 1.15rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  text-decoration: none;
  transition: all 0.2s;
}

.contact-card:hover {
  border-color: var(--accent);
  background: var(--bg-card);
  transform: translateX(4px);
}

.contact-icon {
  font-size: 1.4rem;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-dim);
  border-radius: 12px;
}

.contact-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  min-width: 72px;
  text-align: left;
}

.contact-value {
  font-size: 1rem;
  color: var(--text-primary);
  font-weight: 500;
}
</style>