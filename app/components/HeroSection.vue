<template>
  <section class="hero">
    <div class="container hero-inner">
        <div class="hero-content">
          <Motion as="p" class="hero-badge" :initial="{ opacity: 0, y: -12 }" :animate="{ opacity: 1, y: 0 }" :transition="{ delay: 0.05, duration: 0.3, ease: 'easeOut' }">
          <span class="status-dot" />
          Disponible en freelance
        </Motion>

        <Motion as="h1" class="hero-title" :initial="{ opacity: 0, y: 30 }" :animate="{ opacity: 1, y: 0 }" :transition="{ delay: 0.15, duration: 0.45, ease: 'easeOut' }">
          Eliot <span class="gradient-text">Boutherin</span>
        </Motion>

        <Motion as="p" class="hero-subtitle" :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :transition="{ delay: 0.2, duration: 0.35 }">
          <span class="prompt-sign">$</span>
          <span class="typing-text">{{ typedText }}</span>
          <span class="typing-cursor" :class="{ blink: cursorBlink }">▌</span>
        </Motion>

        <Motion as="p" class="hero-description" :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }" :transition="{ delay: 0.1, duration: 0.35, ease: 'easeOut' }">
          J'aide les entreprises à concevoir, automatiser et faire évoluer leurs infrastructures AWS avec Terraform, tout en développant des API backend performantes et maintenables.
        </Motion>

        <Motion as="div" class="hero-actions" :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }" :transition="{ delay: 0.3, duration: 0.35, ease: 'easeOut' }">
          <a href="#contact" class="btn btn-primary">Me contacter</a>
          <a href="#experience" class="btn btn-secondary">Voir mon parcours</a>
        </Motion>

        <!-- Pseudo-terminal deployment log -->
        <Motion as="div" class="deploy-log" :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :transition="{ delay: 0.6, duration: 0.5 }">
          <div class="deploy-header">
            <span class="deploy-dot red" />
            <span class="deploy-dot yellow" />
            <span class="deploy-dot green" />
            <span class="deploy-title">deploy.log</span>
          </div>
          <div class="deploy-body">
            <div
              v-for="(line, i) in visibleLogs"
              :key="i"
              class="deploy-line"
              :class="line.type"
            >
              <span class="log-time">{{ line.time }}</span>
              <span class="log-bracket">[</span><span class="log-level">{{ line.level }}</span><span class="log-bracket">]</span>
              <span class="log-msg">{{ line.msg }}</span>
            </div>
            <span class="deploy-cursor">▌</span>
          </div>
        </Motion>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { display: typedText, cursor: cursorBlink } = useTypewriter([
  'Platform Engineer AWS',
  'Terraform & Infrastructure as Code',
  'CI/CD & DevOps',
  'Node.js / TypeScript',
  'Cloud Architecture',
], { speed: 50, deleteSpeed: 25, pause: 2500 })

interface LogEntry {
  time: string
  level: string
  msg: string
  type: string
}

const logs: LogEntry[] = [
  { time: '2024-06-19 09:00:01', level: 'INFO', msg: 'Initializing infrastructure deployment...', type: 'info' },
  { time: '2024-06-19 09:00:02', level: 'OK', msg: 'Terraform backend configured', type: 'ok' },
  { time: '2024-06-19 09:00:03', level: 'OK', msg: 'Provider aws.region = eu-west-3', type: 'ok' },
  { time: '2024-06-19 09:00:05', level: 'INFO', msg: 'Planning changes: +12 ~3 -0', type: 'info' },
  { time: '2024-06-19 09:00:06', level: 'OK', msg: 'VPC: complete', type: 'ok' },
  { time: '2024-06-19 09:00:07', level: 'OK', msg: 'ECS cluster: online', type: 'ok' },
  { time: '2024-06-19 09:00:08', level: 'OK', msg: 'RDS instance: accepting connections', type: 'ok' },
  { time: '2024-06-19 09:00:09', level: 'OK', msg: 'ElastiCache: online', type: 'ok' },
  { time: '2024-06-19 09:00:10', level: 'INFO', msg: 'Deploying application containers...', type: 'info' },
  { time: '2024-06-19 09:00:12', level: 'OK', msg: 'Deployment complete (12 resources)', type: 'ok' },
  { time: '2024-06-19 09:00:13', level: 'OK', msg: 'Health checks passed ✓', type: 'ok' },
  { time: '2024-06-19 09:00:14', level: 'OK', msg: 'Infrastructure is healthy', type: 'ok' },
]

const visibleLogs = ref<LogEntry[]>([])
let logIndex = 0

function pushLog() {
  if (logIndex < logs.length) {
    visibleLogs.value.push(logs[logIndex++])
    if (visibleLogs.value.length > 6) {
      visibleLogs.value.shift()
    }
    const delay = logIndex <= 3 ? 1000 : 1500 + Math.random() * 2000
    setTimeout(pushLog, delay)
  }
}

onMounted(() => {
  setTimeout(pushLog, 2000)
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.hero-inner {
  width: 100%;
  padding-top: 64px;
}

.hero-content {
  max-width: 720px;
}

/* Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.2);
  margin-bottom: 24px;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
  50% { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
}

/* Title */
.hero-title {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 16px;
}

/* Subtitle with typewriter */
.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 24px;
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
}

.prompt-sign {
  color: #22c55e;
  margin-right: 8px;
}

.typing-text {
  color: var(--accent-hover);
}

.typing-cursor {
  color: var(--accent-hover);
  font-size: 1.3rem;
  margin-left: 2px;
  opacity: 1;
}

.typing-cursor.blink {
  animation: cursor-blink 0.53s step-end infinite;
}

@keyframes cursor-blink {
  50% { opacity: 0; }
}

/* Description */
.hero-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 40px;
  line-height: 1.7;
}

/* Buttons */
.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 14px 28px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}

.btn-primary {
  background: var(--accent);
  color: #fff;
}

.btn-primary:hover {
  background: var(--accent-hover);
  transform: translateY(-1px);
}

.btn-secondary {
  background: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  border-color: var(--accent);
  color: var(--accent-hover);
  transform: translateY(-1px);
}

/* Pseudo-terminal deployment log */
.deploy-log {
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 10px;
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
  font-size: 0.78rem;
  max-width: 520px;
  overflow: hidden;
  backdrop-filter: blur(4px);
}

.deploy-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(99, 102, 241, 0.15);
}

.deploy-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.deploy-dot.red { background: #ef4444; }
.deploy-dot.yellow { background: #eab308; }
.deploy-dot.green { background: #22c55e; }

.deploy-title {
  margin-left: 8px;
  color: var(--text-secondary);
  font-size: 0.75rem;
}

.deploy-body {
  padding: 10px 12px;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.deploy-line {
  display: flex;
  gap: 6px;
  align-items: baseline;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  animation: log-fade-in 0.3s ease-out;
}

@keyframes log-fade-in {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}

.log-time {
  color: var(--text-secondary);
  opacity: 0.5;
  font-size: 0.7rem;
  min-width: 62px;
}

.log-bracket {
  color: var(--text-secondary);
  opacity: 0.4;
}

.log-level {
  font-weight: 600;
  min-width: 40px;
}

.log-msg {
  color: var(--text-secondary);
}

.deploy-line.ok .log-level {
  color: #22c55e;
}

.deploy-line.ok .log-msg {
  color: #a3e3b0;
}

.deploy-line.info .log-level {
  color: var(--accent-hover);
}

.deploy-line.info .log-msg {
  color: var(--text-secondary);
}

.deploy-cursor {
  color: #22c55e;
  animation: cursor-blink 0.53s step-end infinite;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .deploy-log {
    max-width: 100%;
    font-size: 0.7rem;
  }

  .log-time {
    display: none;
  }
}
</style>
