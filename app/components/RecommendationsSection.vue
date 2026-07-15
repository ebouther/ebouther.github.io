<template>
  <section id="recommendations" class="section">
    <div class="container">
      <Motion
        as="h2"
        class="section-title"
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true }"
        :transition="{ duration: 0.8 }"
      >
        {{ t('recommendations.title') }}
      </Motion>
      <div class="recommendations-grid">
        <Motion
          v-for="(rec, i) in recommendations"
          :key="i"
          as="div"
          class="rec-card"
          :initial="{ opacity: 0, y: 30, scale: 0.97 }"
          :while-in-view="{ opacity: 1, y: 0, scale: 1 }"
          :in-view-options="{ once: true }"
          :transition="{ delay: i * 0.15, duration: 0.7, ease: 'easeOut' }"
          :while-hover="{ y: -4, transition: { duration: 0.2 } }"
        >
          <div class="rec-header">
            <div class="rec-avatar">{{ rec.initials }}</div>
            <div>
              <p class="rec-name">{{ rec.name }}</p>
              <p class="rec-role">{{ rec.role }}</p>
              <p class="rec-date">{{ rec.date }}</p>
            </div>
          </div>
          <p class="rec-text">{{ rec.text }}</p>
          <p v-if="rec.highlight" class="rec-highlight">{{ rec.highlight }}</p>
        </Motion>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Recommendation {
  initials: string
  name: string
  role: string
  date: string
  text: string
  highlight?: string
}

const { t, tv, locale } = useI18n()

const recommendations = computed<Recommendation[]>(() => {
  const raw = tv('recommendations.items')
  return Array.isArray(raw) ? (raw as unknown as Recommendation[]) : []
})
</script>

<style scoped>
.recommendations-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.rec-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 28px;
  transition: border-color 0.2s;
}

.rec-card:hover {
  border-color: var(--accent);
}

.rec-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}

.rec-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--accent-dim);
  color: var(--accent-hover);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 700;
  flex-shrink: 0;
}

.rec-name {
  font-size: 1rem;
  font-weight: 600;
}

.rec-role {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.rec-date {
  font-size: 0.75rem;
  color: var(--text-secondary);
  opacity: 0.7;
}

.rec-text {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 12px;
}

.rec-highlight {
  font-size: 0.88rem;
  color: var(--text-primary);
  line-height: 1.6;
  padding: 12px 16px;
  background: var(--accent-dim);
  border-radius: 10px;
  border-left: 3px solid var(--accent);
  margin-bottom: 12px;
}

.rec-source {
  font-size: 0.75rem;
  color: var(--accent-hover);
  font-weight: 500;
}

@media (max-width: 768px) {
  .recommendations-grid {
    grid-template-columns: 1fr;
  }
}
</style>
