<template>
  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-content">
        <Motion
          as="p"
          class="hero-badge"
          :initial="{ opacity: 0, y: -12 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.2, duration: 0.6, ease: 'easeOut' }"
        >
          Disponible en freelance
        </Motion>
        <Motion
          as="h1"
          class="hero-title"
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.4, type: 'spring', stiffness: 100, damping: 15 }"
        >
          Eliot <span class="gradient-text">Boutherin</span>
        </Motion>
        <Motion
          as="p"
          class="hero-subtitle"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ delay: 0.6, duration: 0.5 }"
        >
          Platform Engineer AWS | Terraform | Node.js
        </Motion>
        <Motion
          as="p"
          class="hero-description"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.8, duration: 0.6, ease: 'easeOut' }"
        >
          J'aide les entreprises à concevoir, automatiser et faire évoluer leurs infrastructures AWS avec Terraform, tout en développant des API backend performantes et maintenables.
        </Motion>
        <Motion
          as="div"
          class="hero-actions"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 1, duration: 0.5, ease: 'easeOut' }"
        >
          <a href="#contact" class="btn btn-primary">Me contacter</a>
          <a href="#experience" class="btn btn-secondary">Voir mon parcours</a>
        </Motion>
      </div>
    </div>
  </section>
</template>

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

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.2);
  margin-bottom: 24px;
}

.hero-badge::before {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 16px;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 40px;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
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

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }
}
</style>