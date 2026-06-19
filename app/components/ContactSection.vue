<template>
  <section id="contact" class="section">
    <div class="container">
      <h2 class="section-title">Me <span>contacter</span></h2>
      <div class="contact-content">
        <p class="contact-text">
          Vous avez un projet cloud ou backend ? Discutons-en.
        </p>
        <div class="contact-links">
          <a :href="`mailto:${email}`" class="contact-card">
            <span class="contact-icon">✉️</span>
            <span class="contact-label">Email</span>
            <span class="contact-value">{{ email }}</span>
          </a>
          <a href="https://www.linkedin.com/in/eliot-boutherin/" target="_blank" rel="noopener" class="contact-card">
            <span class="contact-icon">💼</span>
            <span class="contact-label">LinkedIn</span>
            <span class="contact-value">in/eliot-boutherin</span>
          </a>
          <a href="https://www.malt.fr/profile/eliotboutherin" target="_blank" rel="noopener" class="contact-card">
            <span class="contact-icon">🏆</span>
            <span class="contact-label">Malt</span>
            <span class="contact-value">eliotboutherin</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const email = 'eliot.boutherin@gmail.com'
</script>

<style scoped>
.contact-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.contact-text {
  font-size: 1.15rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  text-decoration: none;
  transition: all 0.2s;
}

.contact-card:hover {
  border-color: var(--accent);
  background: var(--bg-card);
  transform: translateX(4px);
}

.contact-icon {
  font-size: 1.4rem;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-dim);
  border-radius: 12px;
}

.contact-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  min-width: 72px;
  text-align: left;
}

.contact-value {
  font-size: 1rem;
  color: var(--text-primary);
  font-weight: 500;
}
</style>
