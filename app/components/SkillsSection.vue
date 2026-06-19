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
        <Motion
          as="div"
          class="arch-layer"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.4 }"
        >
          <SkillBlock :domain="domains[0]" />
          <div class="connector-v" />
        </Motion>

        <Motion
          as="div"
          class="arch-layer arch-layer-row"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.4, delay: 0.1 }"
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
          :viewport="{ once: true }"
          :transition="{ duration: 0.4, delay: 0.2 }"
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
          :viewport="{ once: true }"
          :transition="{ duration: 0.4, delay: 0.3 }"
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

const icons = {
  cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/></svg>`,
  infra: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><circle cx="6" cy="6" r="1"/><circle cx="6" cy="18" r="1"/></svg>`,
  cicd: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  observability: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 16l4-8 4 4 4-6"/></svg>`,
  backend: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  arch: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/></svg>`,
}

const domains: Domain[] = [
  {
    title: 'Cloud', subtitle: 'AWS', accent: '#6366f1', icon: icons.cloud,
    groups: [
      { label: 'Compute', items: ['EC2', 'ECS', 'EKS', 'Lambda', 'Batch'] },
      { label: 'Networking', items: ['VPC', 'Route53', 'CloudFront', 'API Gateway', 'ELB'] },
      { label: 'Security', items: ['IAM', 'Cognito', 'KMS', 'Secrets Manager', 'WAF'] },
      { label: 'Storage & DB', items: ['S3', 'RDS', 'ElastiCache', 'DynamoDB', 'EFS'] },
      { label: 'Integration', items: ['AppSync', 'SQS', 'SNS', 'EventBridge', 'Step Functions'] },
    ],
  },
  {
    title: 'Infrastructure', subtitle: 'as Code', accent: '#22c55e', icon: icons.infra,
    groups: [
      { label: 'Provisioning', items: ['Terraform', 'Terragrunt', 'OpenTofu'] },
      { label: 'Cloud SDK', items: ['AWS CDK', 'CloudFormation', 'Pulumi'] },
      { label: 'Configuration', items: ['Ansible', 'Packer'] },
      { label: 'Orchestration', items: ['Docker', 'Kubernetes', 'Helm', 'Docker Compose'] },
    ],
  },
  {
    title: 'CI / CD', subtitle: 'Pipelines', accent: '#f59e0b', icon: icons.cicd,
    groups: [
      { label: 'Platforms', items: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'Buildkite'] },
      { label: 'Containers', items: ['Docker', 'ECR', 'Docker Hub', 'Kaniko'] },
      { label: 'Runners', items: ['Self-hosted', 'ECS Runners', 'K8s Runners'] },
    ],
  },
  {
    title: 'Observability', subtitle: 'Monitoring', accent: '#ef4444', icon: icons.observability,
    groups: [
      { label: 'Metrics', items: ['Prometheus', 'Grafana', 'CloudWatch'] },
      { label: 'Logging', items: ['ELK Stack', 'Loki', 'CloudWatch Logs'] },
      { label: 'APM & Errors', items: ['Sentry', 'Datadog', 'OpenTelemetry'] },
      { label: 'Tracing', items: ['X-Ray', 'Jaeger'] },
    ],
  },
  {
    title: 'Backend', subtitle: 'API & Data', accent: '#06b6d4', icon: icons.backend,
    groups: [
      { label: 'Languages', items: ['Node.js', 'TypeScript', 'Python', 'Go'] },
      { label: 'Frameworks', items: ['Express', 'NestJS', 'Fastify', 'FastAPI'] },
      { label: 'APIs', items: ['GraphQL', 'REST', 'tRPC', 'WebSockets'] },
      { label: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB'] },
      { label: 'Messaging', items: ['SQS', 'RabbitMQ', 'Kafka'] },
    ],
  },
  {
    title: 'Architecture', subtitle: 'Design', accent: '#a855f7', icon: icons.arch,
    groups: [
      { label: 'Patterns', items: ['Serverless', 'Microservices', 'Event-Driven', 'CQRS'] },
      { label: 'Methodologies', items: ['Clean Architecture', 'Domain-Driven Design', '12-Factor App'] },
      { label: 'Cloud Native', items: ['Well-Architected', 'FinOps', 'Chaos Engineering'] },
    ],
  },
]
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
