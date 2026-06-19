<template>
  <section id="experience" class="section">
    <div class="container">
      <h2 class="section-title">Mon <span>parcours</span></h2>
      <div class="timeline">
        <div v-for="(exp, i) in experiences" :key="i" class="timeline-card">
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const experiences = [
  {
    date: '2020 - Présent',
    type: 'Mission',
    role: 'DevOps & Développeur Backend',
    company: 'IEA Paris · Centres de recherche',
    description: 'Infrastructure as Code (IaC) AWS + Terraform/Terragrunt sur environnements dev/stage/prod. Mise en place de bases MongoDB Atlas, pipelines CI/CD GitHub Actions avec runners self-hosted sur ECS, APIs GraphQL via AWS AppSync, mailing avec SES & Workmail, et monitoring/error tracking sur EC2 (Grafana, Sentry, Ackee).',
    tags: ['AWS', 'Terraform', 'Terragrunt', 'MongoDB Atlas', 'GraphQL', 'AppSync', 'GitHub Actions', 'ECS', 'Node.js']
  },
  {
    date: '2017 - 2020',
    type: 'Mission',
    role: 'Développeur Backend / DevOps',
    company: 'Euler Hermes & Moody\'s · Courbevoie',
    description: 'Développement Backend et DevOps pour le projet TRIBRating. Administration de bases de données PostgreSQL, déploiement serverless sur AWS, automatisation Terraform, pipelines Jenkins, stack Elasticsearch/Kibana pour la recherche et l\'analytique.',
    tags: ['Node.js', 'PostgreSQL', 'Terraform', 'AWS', 'Python', 'Bash', 'Serverless', 'Elasticsearch', 'Kibana', 'Jenkins', 'REST API']
  },
  {
    date: '2016',
    type: 'Stage',
    role: 'Conception protocole réseau',
    company: 'CNRS-IN2P3-CSNSM · Orsay',
    description: 'Création du protocole réseau RATP (Reliable Asynchronous Transport Protocol) en Ada. RATP fiabilise UDP tout en assurant l\'ordre et l\'intégrité des données à haut débit (10 Gb/s), avec une gestion asynchrone des pertes contrairement à TCP.',
    tags: ['Ada', 'UDP', 'Réseau', 'Protocole', 'Haut débit']
  }
]
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
</style>
