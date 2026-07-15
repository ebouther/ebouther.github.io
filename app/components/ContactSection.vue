<template>
  <section id="contact" class="section">
    <div class="container">
      <Motion
        as="h2"
        class="section-title"
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true }"
        :transition="{ duration: 0.8 }"
      >
        {{ t('contact.title') }}<span>{{ t('contact.titleHighlight') }}</span>
      </Motion>
      <div class="contact-content">
        <Motion
          as="p"
          class="contact-text"
          :initial="{ opacity: 0, y: 15 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.8 }"
        >
          {{ t('contact.subtitle') }}
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
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :in-view-options="{ once: true }"
            :transition="{ delay: 0.3 + i * 0.15, duration: 0.6, ease: 'easeOut' }"
            :while-hover="{
              x: 4,
              borderColor: link.hoverColor,
              transition: { duration: 0.2 },
            }"
          >
            <span class="contact-icon" v-html="link.icon" />
            <div class="contact-info">
              <span class="contact-label">{{ link.labelKey }}</span>
              <span class="contact-value">
                <span class="prompt">$</span>
                <span class="cmd">{{ link.cmd }}</span>
              </span>
            </div>
            <div class="contact-action">
              <span class="arrow">→</span>
            </div>
          </Motion>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()

const email = 'eliot.boutherin@gmail.com'

const mailIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/></svg>`
const linkedinIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`
const maltIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`

const contactLinks = computed(() => [
  {
    labelKey: t('contact.email'),
    icon: mailIcon,
    cmd: `mail ${email}`,
    href: `mailto:${email}`,
    hoverColor: '#22c55e',
    external: false,
  },
  {
    labelKey: t('contact.linkedin'),
    icon: linkedinIcon,
    cmd: 'connect /in/eliot-boutherin',
    href: 'https://www.linkedin.com/in/eliot-boutherin/',
    hoverColor: '#818cf8',
    external: true,
  },
  {
    labelKey: t('contact.malt'),
    icon: maltIcon,
    cmd: 'hire eliotboutherin',
    href: 'https://www.malt.fr/profile/eliotboutherin',
    hoverColor: '#f59e0b',
    external: true,
  },
])
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
  gap: 14px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.contact-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 12px;
  opacity: 0;
  transition: opacity 0.3s;
  background: linear-gradient(135deg, transparent 60%, rgba(99, 102, 241, 0.04));
}

.contact-card:hover::before {
  opacity: 1;
}

.contact-card:hover {
  box-shadow: 0 0 24px rgba(99, 102, 241, 0.06);
}

.contact-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-dim);
  border-radius: 12px;
  flex-shrink: 0;
  transition: transform 0.2s, background 0.2s;
}

.contact-icon :deep(svg) {
  width: 22px;
  height: 22px;
  color: var(--accent-hover);
  transition: color 0.2s;
}

.contact-card:hover .contact-icon {
  transform: scale(1.05);
  background: rgba(99, 102, 241, 0.18);
}

.contact-card:hover .contact-icon :deep(svg) {
  color: var(--accent);
}

.contact-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
  min-width: 0;
}

.contact-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.6;
}

.contact-value {
  font-size: 0.95rem;
  color: var(--text-primary);
  font-weight: 500;
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
  display: flex;
  align-items: center;
  gap: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.prompt {
  color: #22c55e;
  font-weight: 400;
  opacity: 0.7;
}

.cmd {
  color: var(--accent-hover);
  overflow: hidden;
  text-overflow: ellipsis;
}

.contact-action {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.arrow {
  font-size: 1.1rem;
  color: var(--text-secondary);
  opacity: 0.3;
  transition: opacity 0.2s, transform 0.2s;
}

.contact-card:hover .arrow {
  opacity: 0.8;
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .contact-card {
    padding: 14px 16px;
    gap: 12px;
  }

  .contact-value {
    font-size: 0.85rem;
  }

  .cmd {
    font-size: 0.8rem;
  }
}
</style>
