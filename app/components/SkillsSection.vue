<template>
  <section id="skills" class="section">
    <div class="container">
      <Motion
        as="h2"
        class="section-title"
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true }"
        :transition="{ duration: 0.8 }"
      >
        <span class="section-hash">#</span> infrastructure <span class="section-dot">.</span>stack
      </Motion>

      <div class="arch-flow">
        <Motion
          as="div"
          class="arch-layer"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.6 }"
        >
          <SkillBlock :domain="domains[0]" />
          <div class="connector-v" />
        </Motion>

        <Motion
          as="div"
          class="arch-layer arch-layer-row"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6, delay: 0.15 }"
        >
          <div class="connector-bar top" />
          <SkillBlock v-for="d in domains.slice(1, 4)" :key="d.title" :domain="d" />
          <div class="connector-bar bottom" />
        </Motion>

        <Motion
          as="div"
          class="arch-layer"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.6, delay: 0.3 }"
        >
          <div class="connector-v" />
          <SkillBlock :domain="domains[4]" wide />
          <div class="connector-v" />
        </Motion>

        <Motion
          as="div"
          class="arch-layer"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6, delay: 0.45 }"
        >
          <SkillBlock :domain="domains[5]" wide />
        </Motion>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface DomainGroup {
  label: string
  items: string[]
}

interface Domain {
  title: string
  subtitle: string
  accent: string
  icon: string
  groups: DomainGroup[]
}

const { t, tv, locale } = useI18n()

const icons = {
  cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/></svg>`,
  infra: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><circle cx="6" cy="6" r="1"/><circle cx="6" cy="18" r="1"/></svg>`,
  cicd: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  observability: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 16l4-8 4 4 4-6"/></svg>`,
  backend: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  arch: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/></svg>`,
}

const accents = ['#6366f1', '#22c55e', '#f59e0b', '#ef4444', '#06b6d4', '#a855f7']

const domains = computed<Domain[]>(() => {
  const raw = tv('skills.domains')
  const data = (Array.isArray(raw) ? raw : []) as unknown as DomainGroup[]
  return data.map((d: any, i: number) => ({
    title: d.title,
    subtitle: d.subtitle,
    accent: accents[i],
    icon: [icons.cloud, icons.infra, icons.cicd, icons.observability, icons.backend, icons.arch][i],
    groups: d.groups.map((g: DomainGroup) => ({
      label: g.label,
      items: g.items,
    })),
  }))
})
</script>

<style scoped>
.section-hash {
  color: #22c55e;
  font-family: 'SF Mono', 'Fira Code', monospace;
}
.section-dot {
  color: var(--accent);
}

.arch-flow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  max-width: 960px;
  margin: 0 auto;
}

.arch-layer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
}

.arch-layer-row {
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  align-items: stretch;
}

.connector-v {
  width: 2px;
  height: 20px;
  background: linear-gradient(to bottom, rgba(99, 102, 241, 0.25), transparent);
  flex-shrink: 0;
}

.connector-bar {
  position: absolute;
  height: 2px;
  left: 12%;
  right: 12%;
  background: rgba(99, 102, 241, 0.1);
  pointer-events: none;
}
.connector-bar.top { top: -12px; }
.connector-bar.bottom { bottom: -12px; }

@media (max-width: 768px) {
  .arch-layer-row {
    flex-direction: column;
    align-items: center;
  }
  .connector-bar { display: none; }
  .connector-v { height: 14px; }
}
</style>
