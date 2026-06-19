<template>
  <section id="skills" class="section">
    <div class="container">
      <h2 class="section-title">Mes <span>compétences</span></h2>
      <div class="skills-grid">
        <div v-for="category in skills" :key="category.title" class="skill-card">
          <h3 class="skill-category">{{ category.title }}</h3>
          <div class="skill-items">
            <span v-for="item in category.items" :key="item" class="tag">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
  {
    title: 'Cloud',
    subtitle: 'AWS',
    items: ['EC2', 'ECS', 'EKS', 'Lambda', 'VPC', 'IAM', 'Route53', 'CloudFront', 'S3', 'RDS', 'ElastiCache', 'AppSync', 'API Gateway']
  },
  {
    title: 'Infrastructure',
    items: ['Terraform', 'Terragrunt', 'AWS CDK', 'CloudFormation']
  },
  {
    title: 'CI/CD',
    items: ['GitHub Actions', 'Jenkins', 'Docker', 'Self-hosted Runners', 'Bash']
  },
  {
    title: 'Observability',
    items: ['Grafana', 'Prometheus', 'ELK Stack', 'Sentry']
  },
  {
    title: 'Backend',
    items: ['Node.js', 'TypeScript', 'Python', 'GraphQL', 'REST APIs', 'PostgreSQL', 'MongoDB Atlas', 'Redis']
  },
  {
    title: 'Architecture',
    items: ['Serverless', 'Microservices', 'Clean Architecture']
  }
]
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.skill-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 32px;
  transition: border-color 0.2s;
}

.skill-card:hover {
  border-color: var(--accent);
}

.skill-category {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--text-primary);
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
