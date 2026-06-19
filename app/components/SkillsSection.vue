<template>
  <section id="skills" class="section">
    <div class="container">
      <Motion
        as="h2"
        class="section-title"
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true }"
        :transition="{ duration: 0.5 }"
      >
        <span class="section-hash">#</span> infrastructure <span class="section-dot">.</span>stack
      </Motion>

      <div class="arch-flow">
        <!-- Layer 1: Cloud -->
        <Motion
          as="div"
          class="arch-layer"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.4 }"
        >
          <div class="service-block" style="--block-accent: #6366f1">
            <div class="service-block-header">
              <div class="service-block-icon" v-html="cloudBlock.icon" />
              <div>
                <div class="service-block-title">{{ cloudBlock.title }}</div>
                <div class="service-block-subtitle">{{ cloudBlock.subtitle }}</div>
              </div>
            </div>
            <div class="service-block-items">
              <span v-for="item in cloudBlock.items" :key="item" class="service-tag">{{ item }}</span>
            </div>
          </div>
          <div class="connector-v" />
        </Motion>

        <!-- Layer 2: Infrastructure | CI/CD | Observability -->
        <Motion
          as="div"
          class="arch-layer arch-layer-row"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.4, delay: 0.1 }"
        >
          <div class="connector-horizontal-bar top" />
          <div class="service-block" style="--block-accent: #22c55e">
            <div class="service-block-header">
              <div class="service-block-icon" v-html="infraBlock.icon" />
              <div>
                <div class="service-block-title">{{ infraBlock.title }}</div>
                <div class="service-block-subtitle">{{ infraBlock.subtitle }}</div>
              </div>
            </div>
            <div class="service-block-items">
              <span v-for="item in infraBlock.items" :key="item" class="service-tag">{{ item }}</span>
            </div>
          </div>
          <div class="service-block" style="--block-accent: #f59e0b">
            <div class="service-block-header">
              <div class="service-block-icon" v-html="cicdBlock.icon" />
              <div>
                <div class="service-block-title">{{ cicdBlock.title }}</div>
                <div class="service-block-subtitle">{{ cicdBlock.subtitle }}</div>
              </div>
            </div>
            <div class="service-block-items">
              <span v-for="item in cicdBlock.items" :key="item" class="service-tag">{{ item }}</span>
            </div>
          </div>
          <div class="service-block" style="--block-accent: #ef4444">
            <div class="service-block-header">
              <div class="service-block-icon" v-html="observabilityBlock.icon" />
              <div>
                <div class="service-block-title">{{ observabilityBlock.title }}</div>
                <div class="service-block-subtitle">{{ observabilityBlock.subtitle }}</div>
              </div>
            </div>
            <div class="service-block-items">
              <span v-for="item in observabilityBlock.items" :key="item" class="service-tag">{{ item }}</span>
            </div>
          </div>
          <div class="connector-horizontal-bar bottom" />
        </Motion>

        <!-- Layer 3: Backend -->
        <Motion
          as="div"
          class="arch-layer"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.4, delay: 0.2 }"
        >
          <div class="connector-v" />
          <div class="service-block service-block-wide" style="--block-accent: #06b6d4">
            <div class="service-block-header">
              <div class="service-block-icon" v-html="backendBlock.icon" />
              <div>
                <div class="service-block-title">{{ backendBlock.title }}</div>
                <div class="service-block-subtitle">{{ backendBlock.subtitle }}</div>
              </div>
            </div>
            <div class="service-block-items">
              <span v-for="item in backendBlock.items" :key="item" class="service-tag">{{ item }}</span>
            </div>
          </div>
          <div class="connector-v" />
        </Motion>

        <!-- Layer 4: Architecture -->
        <Motion
          as="div"
          class="arch-layer"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.4, delay: 0.3 }"
        >
          <div class="service-block service-block-wide" style="--block-accent: #a855f7">
            <div class="service-block-header">
              <div class="service-block-icon" v-html="architectureBlock.icon" />
              <div>
                <div class="service-block-title">{{ architectureBlock.title }}</div>
                <div class="service-block-subtitle">{{ architectureBlock.subtitle }}</div>
              </div>
            </div>
            <div class="service-block-items">
              <span v-for="item in architectureBlock.items" :key="item" class="service-tag">{{ item }}</span>
            </div>
          </div>
        </Motion>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cloudIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/></svg>`
const infraIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><circle cx="6" cy="6" r="1"/><circle cx="6" cy="18" r="1"/></svg>`
const cicdIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`
const observabilityIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 16l4-8 4 4 4-6"/></svg>`
const backendIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`
const archIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/></svg>`

const cloudBlock = {
  icon: cloudIcon, title: 'Cloud', subtitle: 'AWS',
  items: ['EC2', 'ECS', 'EKS', 'Lambda', 'VPC', 'IAM', 'Route53', 'CloudFront', 'S3', 'RDS', 'ElastiCache', 'AppSync', 'API Gateway'],
}
const infraBlock = {
  icon: infraIcon, title: 'Infrastructure', subtitle: 'as Code',
  items: ['Terraform', 'Terragrunt', 'AWS CDK', 'CloudFormation'],
}
const cicdBlock = {
  icon: cicdIcon, title: 'CI / CD', subtitle: 'Pipelines',
  items: ['GitHub Actions', 'Jenkins', 'Docker', 'Self-hosted Runners', 'Bash'],
}
const observabilityBlock = {
  icon: observabilityIcon, title: 'Observability', subtitle: 'Monitoring',
  items: ['Grafana', 'Prometheus', 'ELK Stack', 'Sentry'],
}
const backendBlock = {
  icon: backendIcon, title: 'Backend', subtitle: 'API & Data',
  items: ['Node.js', 'TypeScript', 'Python', 'GraphQL', 'REST APIs', 'PostgreSQL', 'MongoDB Atlas', 'Redis'],
}
const architectureBlock = {
  icon: archIcon, title: 'Architecture', subtitle: 'Design Patterns',
  items: ['Serverless', 'Microservices', 'Clean Architecture'],
}
</script>

<style scoped>
.section-hash {
  color: #22c55e;
  font-family: 'SF Mono', 'Fira Code', monospace;
}
.section-dot {
  color: var(--accent);
}

/* Flow layout */
.arch-flow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  max-width: 900px;
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

/* Connectors */
.connector-v {
  width: 2px;
  height: 20px;
  background: linear-gradient(to bottom, rgba(99, 102, 241, 0.25), transparent);
  flex-shrink: 0;
}

.connector-horizontal-bar {
  position: absolute;
  height: 2px;
  left: 15%;
  right: 15%;
  background: rgba(99, 102, 241, 0.12);
  pointer-events: none;
}

.connector-horizontal-bar.top {
  top: -12px;
}

.connector-horizontal-bar.bottom {
  bottom: -12px;
}

/* Service block */
.service-block {
  background: rgba(26, 26, 38, 0.5);
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-radius: 10px;
  padding: 16px 18px;
  position: relative;
  overflow: hidden;
  flex: 1;
  min-width: 0;
  max-width: 280px;
  transition: border-color 0.25s, box-shadow 0.25s;
}

.service-block-wide {
  max-width: 500px;
  width: 100%;
}

.service-block::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--block-accent);
  opacity: 0.5;
  transition: opacity 0.25s;
}

.service-block:hover {
  border-color: var(--block-accent);
  box-shadow: 0 0 24px color-mix(in srgb, var(--block-accent) 8%, transparent);
}

.service-block:hover::before {
  opacity: 0.9;
}

.service-block-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.service-block-icon {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(99, 102, 241, 0.06);
  border-radius: 8px;
  flex-shrink: 0;
  transition: background 0.25s;
}

.service-block:hover .service-block-icon {
  background: color-mix(in srgb, var(--block-accent) 12%, transparent);
}

.service-block-icon :deep(svg) {
  width: 17px;
  height: 17px;
  color: var(--block-accent);
}

.service-block-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
}

.service-block-subtitle {
  font-size: 0.68rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.5;
}

.service-block-items {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.service-tag {
  display: inline-block;
  padding: 2px 7px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 500;
  background: rgba(99, 102, 241, 0.06);
  color: var(--block-accent);
  border: 1px solid rgba(99, 102, 241, 0.08);
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;
}

.service-block:hover .service-tag {
  background: color-mix(in srgb, var(--block-accent) 8%, transparent);
  border-color: color-mix(in srgb, var(--block-accent) 15%, transparent);
}

@media (max-width: 768px) {
  .arch-layer-row {
    flex-direction: column;
    align-items: center;
  }

  .service-block {
    max-width: 100% !important;
    width: 100%;
  }

  .connector-horizontal-bar {
    display: none;
  }

  .connector-v {
    height: 14px;
  }
}
</style>
