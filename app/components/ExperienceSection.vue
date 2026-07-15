<template>
  <section id="experience" class="section">
    <div class="container">
      <Motion
        as="h2"
        class="section-title"
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true }"
        :transition="{ duration: 0.8 }"
      >
        {{ t('experience.title') }}<span>{{ t('experience.titleHighlight') }}</span>
      </Motion>
      <div class="timeline">
        <Motion
          v-for="(exp, i) in experiences"
          :key="i"
          as="div"
          class="timeline-card"
          :initial="{ opacity: 0, x: -20 }"
          :while-in-view="{ opacity: 1, x: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ delay: i * 0.2, duration: 0.7, ease: 'easeOut' }"
        >
          <div class="timeline-dot" />
          <div v-if="i < experiences.length - 1" class="timeline-line" />
          <div class="timeline-content">
            <div class="timeline-meta">
              <span class="timeline-date">{{ exp.date }}</span>
              <span class="timeline-type">{{ exp.type }}</span>
            </div>
            <h3 class="timeline-company">{{ exp.company }}</h3>
            <p class="timeline-role">{{ exp.role }}</p>
            <p class="timeline-desc">{{ exp.description }}</p>
            <div class="timeline-tags">
              <span v-for="tag in exp.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <NuxtLink v-if="exp.studyHref" :to="exp.studyHref" class="study-link">
              {{ t('experience.studyLink') }}
            </NuxtLink>
          </div>
        </Motion>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Experience {
  date: string
  type: string
  role: string
  company: string
  description: string
  tags: string[]
  studyHref?: string
}

const { t, tv, locale } = useI18n()

const experiences = computed<Experience[]>(() => {
  const raw = tv('experience.items')
  return Array.isArray(raw) ? (raw as unknown as Experience[]) : []
})
</script>

<style scoped>
.timeline {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
}

.timeline-card {
  position: relative;
  padding-left: 40px;
  padding-bottom: 48px;
}

.timeline-dot {
  position: absolute;
  left: 0;
  top: 6px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--accent);
  border: 3px solid var(--bg-primary);
  box-shadow: 0 0 0 2px var(--accent);
  z-index: 1;
}

.timeline-line {
  position: absolute;
  left: 6px;
  top: 20px;
  bottom: 0;
  width: 2px;
  background: var(--border);
}

.timeline-content {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 28px;
  transition: border-color 0.2s;
}

.timeline-content:hover {
  border-color: var(--accent);
}

.timeline-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.timeline-date {
  font-size: 0.85rem;
  color: var(--accent-hover);
  font-weight: 600;
}

.timeline-type {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-card);
  padding: 2px 10px;
  border-radius: 6px;
}

.timeline-company {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.timeline-role {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.timeline-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 16px;
}

.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.study-link {
  display: inline-block;
  margin-top: 16px;
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.study-link:hover {
  color: var(--accent-hover);
}
</style>
