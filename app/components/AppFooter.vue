<template>
  <footer class="footer">
    <div class="container footer-inner">
      <p class="footer-text">&copy; {{ year }} Eliot Boutherin. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 32px 0;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-text {
  font-size: 0.85rem;
  color: var(--text-secondary);
}
</style>
