<template>
  <div
    class="skill-block"
    :class="{ wide }"
    :style="{ '--accent': domain.accent }"
  >
    <div class="skill-block-header">
      <div class="skill-block-icon" v-html="domain.icon" />
      <div>
        <div class="skill-block-title">{{ domain.title }}</div>
        <div class="skill-block-subtitle">{{ domain.subtitle }}</div>
      </div>
    </div>
    <div
      v-for="group in domain.groups"
      :key="group.label"
      class="skill-group"
    >
      <div class="skill-group-label">{{ group.label }}</div>
      <div class="skill-group-items">
        <span
          v-for="item in group.items"
          :key="item"
          class="skill-tag"
        >{{ item }}</span>
      </div>
    </div>
  </div>
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

defineProps<{
  domain: Domain
  wide?: boolean
}>()
</script>

<style scoped>
.skill-block {
  background: rgba(26, 26, 38, 0.5);
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-radius: 10px;
  padding: 16px;
  position: relative;
  overflow: hidden;
  flex: 1;
  min-width: 0;
  max-width: 300px;
  transition: border-color 0.25s, box-shadow 0.25s;
}

.skill-block.wide {
  max-width: 540px;
  width: 100%;
}

.skill-block::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--accent);
  opacity: 0.5;
  transition: opacity 0.25s;
}

.skill-block:hover {
  border-color: var(--accent);
  box-shadow: 0 0 24px color-mix(in srgb, var(--accent) 8%, transparent);
}

.skill-block:hover::before {
  opacity: 0.9;
}

.skill-block-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.skill-block-icon {
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

.skill-block:hover .skill-block-icon {
  background: color-mix(in srgb, var(--accent) 12%, transparent);
}

.skill-block-icon :deep(svg) {
  width: 17px;
  height: 17px;
  color: var(--accent);
}

.skill-block-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
}

.skill-block-subtitle {
  font-size: 0.68rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.5;
}

.skill-group {
  margin-bottom: 10px;
}

.skill-group:last-child {
  margin-bottom: 0;
}

.skill-group-label {
  font-size: 0.6rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 5px;
  opacity: 0.5;
  font-family: 'SF Mono', 'Fira Code', monospace;
}

.skill-group-items {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.skill-tag {
  display: inline-block;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.68rem;
  font-weight: 500;
  background: rgba(99, 102, 241, 0.06);
  color: var(--accent);
  border: 1px solid rgba(99, 102, 241, 0.08);
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;
}

.skill-block:hover .skill-tag {
  background: color-mix(in srgb, var(--accent) 8%, transparent);
  border-color: color-mix(in srgb, var(--accent) 15%, transparent);
}
</style>
