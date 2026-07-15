<template>
  <main>
    <section class="section case-studies-hero">
      <div class="container">
        <Motion
          as="h1"
          class="page-title"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.8 }"
        >
          <span class="gradient-text">{{ t('caseStudies.title') }}</span>
        </Motion>
        <Motion
          as="p"
          class="page-subtitle"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ delay: 0.15, duration: 0.8 }"
        >
          {{ t('caseStudies.subtitle') }}
        </Motion>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="studies-list">
          <Motion
            v-for="(study, i) in studies"
            :key="study.slug"
            as="article"
            class="study-card"
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :in-view-options="{ once: true }"
            :transition="{ delay: i * 0.2, duration: 0.7 }"
          >
            <div class="study-meta">
              <span class="study-date">{{ study.date }}</span>
              <span class="study-type">{{ study.type }}</span>
            </div>
            <h2 class="study-title">{{ study.title }}</h2>
            <p class="study-role">{{ study.role }}</p>
            <p class="study-summary">{{ study.summary }}</p>
            <div class="study-tags">
              <span v-for="tag in study.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <NuxtLink :to="study.href" class="study-link">
              {{ t('caseStudies.readLink') }}
              <span class="arrow">→</span>
            </NuxtLink>
          </Motion>

          <Motion
            as="div"
            class="study-placeholder"
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :in-view-options="{ once: true }"
            :transition="{ delay: studies.length * 0.2, duration: 0.7 }"
          >
            <p class="placeholder-text">{{ t('caseStudies.placeholder') }}</p>
          </Motion>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Études de cas',
  meta: [
    { name: 'description', content: 'Études de cas détaillées — architecture cloud, développement backend et platform engineering par Eliot Boutherin.' },
    { property: 'og:title', content: 'Études de cas | Eliot Boutherin' },
    { property: 'og:description', content: 'Architecture cloud, développement backend et platform engineering — études de cas détaillées.' },
    { property: 'og:url', content: 'https://ebouther.github.io/case-studies/' }
  ]
})

const { t, tv, locale } = useI18n()

interface StudyItem {
  date: string
  type: string
  title: string
  role: string
  summary: string
  tags: string[]
  href: string
  slug: string
}

const studies = computed<StudyItem[]>(() => {
  const raw = tv('caseStudies.items')
  return Array.isArray(raw) ? (raw as unknown as Omit<StudyItem, 'slug'>[]) : []
})
</script>

<style scoped>
.case-studies-hero {
  padding-top: 160px;
  padding-bottom: 48px;
}

.page-title {
  font-size: 2.8rem;
  font-weight: 800;
  text-align: center;
  letter-spacing: -0.03em;
  margin-bottom: 16px;
}

.page-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.studies-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.study-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 32px;
  transition: border-color 0.2s;
}

.study-card:hover {
  border-color: var(--accent);
}

.study-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.study-date {
  font-size: 0.85rem;
  color: var(--accent-hover);
  font-weight: 600;
}

.study-type {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-card);
  padding: 2px 10px;
  border-radius: 6px;
}

.study-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.study-role {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.study-summary {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 20px;
}

.study-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.study-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.study-link:hover {
  color: var(--accent-hover);
}

.study-link .arrow {
  transition: transform 0.2s;
}

.study-link:hover .arrow {
  transform: translateX(4px);
}

.study-placeholder {
  background: var(--bg-secondary);
  border: 1px dashed var(--border);
  border-radius: 16px;
  padding: 48px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-text {
  color: var(--text-secondary);
  font-style: italic;
  font-size: 0.95rem;
}
</style>
