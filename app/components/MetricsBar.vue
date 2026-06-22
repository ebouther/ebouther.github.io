<template>
  <div class="metrics-bar" aria-hidden="true">
    <div class="container metrics-inner">
      <div v-for="m in metrics" :key="m.label" class="metric">
        <span class="metric-value" :style="{ color: m.color }">{{ displayValues[m.label] || m.value }}</span>
        <span class="metric-label">{{ m.label }}</span>
        <span v-if="m.suffix" class="metric-suffix">{{ m.suffix }}</span>
      </div>
      <div class="metric-divider" />
      <div class="metric status-group">
        <span class="status-track">●</span>
        <span class="metric-label">All systems operational</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Metric {
  label: string
  value: string
  color: string
  suffix?: string
}

const metrics: Metric[] = [
  { label: 'uptime', value: '99.97', suffix: '%', color: '#22c55e' },
  { label: 'deployments', value: '847', color: '#818cf8' },
  { label: 'infra', value: '124', suffix: 'resources', color: '#f59e0b' },
  { label: 'pipeline', value: '1.2', suffix: 's avg', color: '#22c55e' },
  { label: 'response', value: '42', suffix: 'ms', color: '#22c55e' },
]

const displayValues = ref<Record<string, string>>({})

function startMetricsInterval() {
  metrics.forEach(m => { displayValues.value[m.label] = m.value })
  const interval = setInterval(() => {
    metrics.forEach(m => {
      if (m.suffix === '%') {
        displayValues.value[m.label] = (99.9 + Math.random() * 0.09).toFixed(2)
      } else if (m.label === 'deployments') {
        displayValues.value[m.label] = (847 + Math.floor(Math.random() * 10)).toString()
      } else if (m.label === 'infra') {
        displayValues.value[m.label] = Math.round(124 + (Math.random() - 0.5) * 4).toString()
      } else if (m.suffix === 's avg') {
        displayValues.value[m.label] = (0.8 + Math.random() * 0.8).toFixed(1)
      } else if (m.suffix === 'ms') {
        displayValues.value[m.label] = Math.round(25 + Math.random() * 40).toString()
      }
    })
  }, 3000)
  onUnmounted(() => clearInterval(interval))
}

if (import.meta.client) {
  onMounted(startMetricsInterval)
}
</script>

<style scoped>
.metrics-bar {
  border-top: 1px solid rgba(99, 102, 241, 0.1);
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);
  background: rgba(10, 10, 15, 0.5);
  backdrop-filter: blur(8px);
  padding: 10px 0;
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
  font-size: 0.8rem;
}

.metrics-inner {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.metric {
  display: flex;
  align-items: baseline;
  gap: 6px;
}

.metric-value {
  font-weight: 700;
  font-size: 0.95rem;
  transition: color 0.3s;
}

.metric-label {
  color: var(--text-secondary);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.metric-suffix {
  color: #7878a0;
  font-size: 0.7rem;
}

.metric-divider {
  width: 1px;
  height: 20px;
  background: rgba(99, 102, 241, 0.2);
}

.status-group {
  margin-left: auto;
}

.status-track {
  color: #22c55e;
  animation: pulse-dot 2s ease-in-out infinite;
  font-size: 0.6rem;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

@media (max-width: 768px) {
  .metrics-inner {
    gap: 12px;
    justify-content: center;
  }
  .metric-divider {
    display: none;
  }
  .status-group {
    margin-left: 0;
    width: 100%;
    justify-content: center;
  }
}
</style>
