<template>
  <main class="study-page">
    <section class="section hero-section">
      <div class="container">
        <Motion
          as="div"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.8 }"
        >
          <NuxtLink to="/case-studies" class="back-link">{{ t('caseStudyIea.backLink') }}</NuxtLink>
        </Motion>

        <Motion
          as="h1"
          class="hero-title"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ delay: 0.1, duration: 0.8 }"
        >
          {{ t('caseStudyIea.hero.title') }}
        </Motion>
        <Motion
          as="p"
          class="hero-subtitle"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ delay: 0.2, duration: 0.8 }"
        >
          {{ t('caseStudyIea.hero.subtitle') }}
        </Motion>
        <Motion
          as="div"
          class="hero-meta"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ delay: 0.3, duration: 0.8 }"
        >
          <template v-for="(m, i) in heroMeta" :key="i">
            <span v-if="i > 0" class="meta-sep">·</span>
            <span class="meta-item">{{ m }}</span>
          </template>
        </Motion>
      </div>
    </section>

    <section class="section content-section">
      <div class="container content-container">
        <Motion
          as="div"
          class="content-block"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.8 }"
        >
          <div class="overview-grid">
            <div class="overview-card">
              <span class="overview-label">{{ t('caseStudyIea.overview.roleLabel') }}</span>
              <span class="overview-value">{{ t('caseStudyIea.overview.role') }}</span>
            </div>
            <div class="overview-card overview-card-wide">
              <span class="overview-label">{{ t('caseStudyIea.overview.responsibilitiesLabel') }}</span>
              <div class="overview-tags">
                <span v-for="r in responsibilities" :key="r" class="tag">{{ r }}</span>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </section>

    <section v-for="(section, idx) in sections" :key="idx" class="section content-section">
      <div class="container content-container">
        <Motion
          as="div"
          class="content-block"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.8 }"
        >
          <h2 class="section-heading">{{ section.heading }}</h2>
          <p v-for="(p, pidx) in section.paragraphs" :key="pidx">{{ p }}</p>

          <pre v-if="section.diagram" class="arch-diagram">{{ section.diagram }}</pre>

          <h3 v-if="section.sharedHeading" class="subsection-heading">{{ section.sharedHeading }}</h3>
          <p v-if="section.sharedText">{{ section.sharedText }}</p>
          <ul v-if="section.layerItems" class="bullet-list">
            <li v-for="(item, iidx) in section.layerItems" :key="iidx">{{ item }}</li>
          </ul>

          <h3 v-if="section.provisionedHeading" class="subsection-heading">{{ section.provisionedHeading }}</h3>
          <ul v-if="section.provisionedItems" class="bullet-list">
            <li v-for="(item, iidx) in section.provisionedItems" :key="iidx">{{ item }}</li>
          </ul>

          <div v-if="section.accounts" class="table-wrapper">
            <table class="account-table">
              <thead>
                <tr>
                  <th>Account</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in section.accounts" :key="row.account">
                  <td>{{ row.account }}</td>
                  <td>{{ row.purpose }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p v-if="section.modules">{{ section.modules }}</p>
          <ul v-if="section.moduleItems" class="bullet-list">
            <li v-for="(item, iidx) in section.moduleItems" :key="iidx">{{ item }}</li>
          </ul>

          <p v-if="section.changeAware" class="outcome-line">{{ section.changeAware }}</p>

          <p v-if="section.closing" class="outcome-line">{{ section.closing }}</p>
        </Motion>
      </div>
    </section>

    <section class="section content-section">
      <div class="container content-container">
        <Motion
          as="div"
          class="content-block"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.8 }"
        >
          <h2 class="section-heading">{{ t('caseStudyIea.architecture.heading') }}</h2>
          <pre class="arch-diagram">{{ t('caseStudyIea.architecture.diagram') }}</pre>
        </Motion>
      </div>
    </section>

    <section class="section content-section">
      <div class="container content-container">
        <Motion
          as="div"
          class="content-block"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.8 }"
        >
          <h2 class="section-heading">{{ t('caseStudyIea.achievements.heading') }}</h2>
          <ul class="bullet-list">
            <li v-for="(item, i) in achievements" :key="i">{{ item }}</li>
          </ul>
        </Motion>
      </div>
    </section>

    <section class="section content-section">
      <div class="container content-container">
        <Motion
          as="div"
          class="content-block"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.8 }"
        >
          <h2 class="section-heading">{{ t('caseStudyIea.technologies.heading') }}</h2>
          <div class="tech-tags">
            <span v-for="(item, i) in technologies" :key="i" class="tag">{{ item }}</span>
          </div>
        </Motion>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { t, tv, isFr } = useI18n()

useHead({
  title: computed(() => isFr.value ? 'IEA Paris Platform — Étude de cas' : 'IEA Paris Platform — Case Study'),
  meta: [
    { name: 'description', content: computed(() => isFr.value
      ? 'Conception et évolution d\'une plateforme cloud multi-tenant serverless sur AWS. Architecture GraphQL, Terraform, CI/CD, et platform engineering pour l\'Institut d\'Études Avancées de Paris.'
      : 'Building a multi-tenant serverless platform on AWS. GraphQL architecture, Terraform IaC, CI/CD platform engineering, and production observability for the Paris Institute for Advanced Study.'
    )},
    { property: 'og:title', content: computed(() => isFr.value ? 'IEA Paris Platform — Étude de cas | Eliot Boutherin' : 'IEA Paris Platform — Case Study | Eliot Boutherin')},
    { property: 'og:description', content: computed(() => isFr.value
      ? 'Plateforme multi-tenant serverless AWS — AppSync, Lambda, Terraform, CI/CD et platform engineering.'
      : 'Multi-tenant serverless platform on AWS — AppSync, Lambda, Terraform, CI/CD, and platform engineering.'
    )},
    { property: 'og:url', content: 'https://ebouther.github.io/case-studies/iea-paris' }
  ]
})

const heroMeta = computed(() => {
  const raw = tv('caseStudyIea.hero.meta')
  return Array.isArray(raw) ? raw as string[] : []
})

const responsibilities = computed(() => {
  const raw = tv('caseStudyIea.overview.responsibilities')
  return Array.isArray(raw) ? raw as string[] : []
})

const achievements = computed(() => {
  const raw = tv('caseStudyIea.achievements.items')
  return Array.isArray(raw) ? raw as string[] : []
})

const technologies = computed(() => {
  const raw = tv('caseStudyIea.technologies.items')
  return Array.isArray(raw) ? raw as string[] : []
})

interface SectionData {
  heading: string
  paragraphs: string[]
  diagram?: string
  sharedHeading?: string
  sharedText?: string
  layerItems?: string[]
  provisionedHeading?: string
  provisionedItems?: string[]
  accounts?: { account: string; purpose: string }[]
  modules?: string
  moduleItems?: string[]
  changeAware?: string
  closing?: string
}

const sections = computed<SectionData[]>(() => {
  const keys = ['challenge', 'challenge1', 'challenge2', 'challenge3', 'challenge4', 'dataEvolution', 'modelGen', 'observability'] as const
  return keys.map((key) => {
    const raw = tv(`caseStudyIea.${key}`) as Record<string, unknown>
    return {
      heading: raw.heading as string,
      paragraphs: Array.isArray(raw.paragraphs) ? raw.paragraphs as string[] : [],
      diagram: typeof raw.diagram === 'string' ? raw.diagram : undefined,
      sharedHeading: typeof raw.sharedHeading === 'string' ? raw.sharedHeading : undefined,
      sharedText: typeof raw.sharedText === 'string' ? raw.sharedText : undefined,
      layerItems: Array.isArray(raw.layerItems) ? raw.layerItems as string[] : undefined,
      provisionedHeading: typeof raw.provisionedHeading === 'string' ? raw.provisionedHeading : undefined,
      provisionedItems: Array.isArray(raw.provisionedItems) ? raw.provisionedItems as string[] : undefined,
      accounts: Array.isArray(raw.accounts) ? raw.accounts as { account: string; purpose: string }[] : undefined,
      modules: typeof raw.modules === 'string' ? raw.modules : undefined,
      moduleItems: Array.isArray(raw.moduleItems) ? raw.moduleItems as string[] : undefined,
      changeAware: typeof raw.changeAware === 'string' ? raw.changeAware : undefined,
      closing: typeof raw.closing === 'string' ? raw.closing : undefined,
    }
  })
})
</script>

<style scoped>
.study-page {
  padding-top: 40px;
}

.hero-section {
  padding-top: 120px;
  padding-bottom: 48px;
}

.back-link {
  display: inline-block;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  margin-bottom: 32px;
  transition: color 0.2s;
}

.back-link:hover {
  color: var(--accent);
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin-bottom: 12px;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 16px;
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--accent-hover);
}

.meta-sep {
  color: var(--border);
}

.content-container {
  max-width: 800px;
}

.content-block {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 40px;
}

.content-block + .content-block {
  margin-top: 32px;
}

.section-heading {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}

.subsection-heading {
  font-size: 1.15rem;
  font-weight: 600;
  margin-top: 24px;
  margin-bottom: 12px;
  color: var(--accent-hover);
}

.content-block p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 16px;
}

.content-block p:last-child {
  margin-bottom: 0;
}

.bullet-list {
  list-style: none;
  padding: 0;
  margin: 16px 0;
}

.bullet-list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.bullet-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: 600;
}

.outcome-line {
  font-style: italic;
  margin-top: 16px !important;
  color: var(--accent-hover) !important;
}

.arch-diagram {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
  margin: 20px 0;
  font-family: 'SF Mono', 'Fira Code', 'Fira Mono', Menlo, Consolas, monospace;
  font-size: 0.82rem;
  line-height: 1.6;
  color: var(--text-secondary);
  overflow-x: auto;
  white-space: pre;
}

.overview-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.overview-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.overview-card-wide {
  grid-column: 1 / -1;
}

.overview-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent-hover);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.overview-value {
  font-size: 0.95rem;
  color: var(--text-primary);
}

.overview-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  display: inline-block;
  padding: 4px 12px;
  font-size: 0.82rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 20px;
  color: var(--text-secondary);
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.table-wrapper {
  overflow-x: auto;
  margin: 20px 0;
}

.account-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.account-table th {
  text-align: left;
  padding: 12px 16px;
  background: var(--bg-card);
  color: var(--text-primary);
  font-weight: 600;
  border-bottom: 2px solid var(--accent);
}

.account-table td {
  padding: 10px 16px;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border);
}

.account-table tr:last-child td {
  border-bottom: none;
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .meta-sep {
    display: none;
  }

  .content-block {
    padding: 24px;
  }

  .overview-grid {
    grid-template-columns: 1fr;
  }
}
</style>
