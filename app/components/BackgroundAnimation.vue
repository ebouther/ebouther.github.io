<template>
  <div class="bg-canvas" aria-hidden="true">
    <div class="gradient-bg" />
    <div class="mesh-bg" />
    <!-- Network graph (div-based for Firefox compatibility) -->
    <div class="network">
      <div
        v-for="(link, i) in links"
        :key="'l'+i"
        class="link"
        :style="{
          left: (link.x1 / 800 * 100) + '%',
          top: (link.y1 / 600 * 100) + '%',
          width: link.len + 'px',
          transform: 'rotate(' + link.angle + 'rad)',
          animationDelay: link.delay + 's',
        }"
      />
      <div
        v-for="(node, i) in nodes"
        :key="'n'+i"
        class="dot"
        :style="{
          left: (node.x / 800 * 100) + '%',
          top: (node.y / 600 * 100) + '%',
          animationDelay: node.delay + 's',
        }"
      />
    </div>

    <!-- Floating infrastructure icons -->
    <div class="float-icons">
      <div
        v-for="(icon, i) in floatIcons"
        :key="'fi'+i"
        class="float-icon"
        :style="{
          left: icon.x + '%',
          top: icon.y + '%',
          opacity: icon.opacity,
          fontSize: icon.size + 'px',
        }"
        v-html="icon.svg"
      />
    </div>

    <!-- Floating particles -->
    <div class="particles">
      <div
        v-for="(p, i) in particleData"
        :key="'pt'+i"
        class="particle"
        :style="{
          left: p.x + '%',
          top: p.y + '%',
          width: p.size + 'px',
          height: p.size + 'px',
          animationDuration: p.duration + 's',
          animationDelay: p.delay + 's',
          opacity: p.opacity,
        }"
      />
    </div>

    <!-- Scanline overlay -->
    <div class="scanlines" />

    <!-- Glowing orbs -->
    <div class="glow g1" />
    <div class="glow g2" />
    <div class="glow g3" />
    <div class="glow g4" />
    <div class="glow g5" />
  </div>
</template>

<script setup lang="ts">
const nodes = [
  { x: 100, y: 80, delay: 0 },
  { x: 300, y: 50, delay: 0.5 },
  { x: 500, y: 100, delay: 1 },
  { x: 700, y: 60, delay: 1.5 },
  { x: 150, y: 250, delay: 2 },
  { x: 400, y: 200, delay: 0.8 },
  { x: 650, y: 220, delay: 1.3 },
  { x: 80, y: 400, delay: 1.8 },
  { x: 250, y: 350, delay: 0.3 },
  { x: 550, y: 380, delay: 0.7 },
  { x: 720, y: 350, delay: 1.2 },
  { x: 400, y: 450, delay: 1.7 },
  { x: 200, y: 500, delay: 0.4 },
  { x: 600, y: 520, delay: 0.9 },
  { x: 350, y: 300, delay: 1.4 },
]

const rawLinks = [
  { x1: 100, y1: 80, x2: 300, y2: 50, delay: 0 },
  { x1: 300, y1: 50, x2: 500, y2: 100, delay: 0.3 },
  { x1: 500, y1: 100, x2: 700, y2: 60, delay: 0.6 },
  { x1: 100, y1: 80, x2: 150, y2: 250, delay: 0.9 },
  { x1: 300, y1: 50, x2: 400, y2: 200, delay: 1.2 },
  { x1: 500, y1: 100, x2: 650, y2: 220, delay: 1.5 },
  { x1: 700, y1: 60, x2: 650, y2: 220, delay: 1.8 },
  { x1: 150, y1: 250, x2: 400, y2: 200, delay: 0.2 },
  { x1: 400, y1: 200, x2: 650, y2: 220, delay: 0.5 },
  { x1: 150, y1: 250, x2: 80, y2: 400, delay: 0.8 },
  { x1: 400, y1: 200, x2: 250, y2: 350, delay: 1.1 },
  { x1: 650, y1: 220, x2: 550, y2: 380, delay: 1.4 },
  { x1: 80, y1: 400, x2: 250, y2: 350, delay: 1.7 },
  { x1: 250, y1: 350, x2: 400, y2: 450, delay: 0.1 },
  { x1: 550, y1: 380, x2: 720, y2: 350, delay: 0.4 },
  { x1: 550, y1: 380, x2: 600, y2: 520, delay: 0.7 },
  { x1: 720, y1: 350, x2: 600, y2: 520, delay: 1.0 },
  { x1: 400, y1: 450, x2: 200, y2: 500, delay: 1.3 },
  { x1: 400, y1: 450, x2: 600, y2: 520, delay: 1.6 },
  { x1: 200, y1: 500, x2: 600, y2: 520, delay: 0.4 },
  { x1: 250, y1: 350, x2: 350, y2: 300, delay: 0.7 },
  { x1: 350, y1: 300, x2: 400, y2: 200, delay: 1.0 },
  { x1: 350, y1: 300, x2: 550, y2: 380, delay: 1.3 },
]

const links = rawLinks.map(l => {
  const dx = l.x2 - l.x1, dy = l.y2 - l.y1;
  return { ...l, len: Math.sqrt(dx*dx + dy*dy), angle: Math.atan2(dy, dx) };
})

const iconSvgs = [
  // Container
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8l9-5 9 5v8l-9 5-9-5V8z"/><path d="M3 8l9 5 9-5"/><path d="M12 13v9"/></svg>`,
  // Database
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  // Cloud
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/></svg>`,
  // Terminal brackets
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  // Server
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><circle cx="6" cy="6" r="1"/><circle cx="6" cy="18" r="1"/></svg>`,
  // Network node
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="12"/><line x1="12" y1="12" x2="19.07" y2="12"/></svg>`,
  // Gear/ settings
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  // Kubernetes
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/></svg>`,
]

const floatIcons = Array.from({ length: 4 }, (_, i) => ({
  x: 5 + Math.random() * 90,
  y: 5 + Math.random() * 90,
  opacity: 0.05 + Math.random() * 0.06,
  size: 20 + Math.random() * 24,
  svg: iconSvgs[i % iconSvgs.length],
}))

const particleData = Array.from({ length: 15 }, (_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 1 + Math.random() * 2.5,
  duration: 4 + Math.random() * 8,
  delay: Math.random() * -10,
  opacity: 0.1 + Math.random() * 0.3,
}))
</script>

<style scoped>
.bg-canvas {
  position: fixed;
  inset: 0;
  overflow: clip;
  pointer-events: none;
  z-index: 0;
  contain: paint;
}

/* Gradient background */
.gradient-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #0b0d1a 0%, #0f1225 20%, #12142d 40%, #0a0c1a 60%, #0b0d1a 100%);
}

/* Mesh grid */
.mesh-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
  background-size: 64px 64px;
}

/* Network graph (div-based) */
.network {
  position: absolute;
  inset: 0;
  opacity: 0.5;
}

.link {
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, rgba(129, 140, 248, 0.6), rgba(129, 140, 248, 0.05));
  transform-origin: 0 0;
  animation: link-pulse 4s ease-in-out infinite;
}

@keyframes link-pulse {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.6; }
}

.dot {
  position: absolute;
  width: 6px;
  height: 6px;
  margin-left: -3px;
  margin-top: -3px;
  border-radius: 50%;
  background: rgba(129, 140, 248, 0.8);
  animation: dot-glow 4s ease-in-out infinite;
}

@keyframes dot-glow {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.7; }
}

/* Floating infrastructure icons */
.float-icons {
  position: absolute;
  inset: 0;
}

.float-icon {
  position: absolute;
  color: var(--accent);
  transform: translate(-50%, -50%);
}

.float-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

/* Floating particles */
.particles {
  position: absolute;
  inset: 0;
}

.particle {
  position: absolute;
  border-radius: 50%;
  background: var(--accent-hover);
  animation: particle-float ease-in-out infinite alternate;
}

@keyframes particle-float {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(15px, -20px) scale(1.5); }
  66% { transform: translate(-10px, -35px) scale(0.8); }
  100% { transform: translate(5px, -15px) scale(1.2); }
}

/* Scanline overlay */
.scanlines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0px,
    rgba(0, 0, 0, 0) 2px,
    rgba(0, 0, 0, 0.08) 2px,
    rgba(0, 0, 0, 0.08) 4px
  );
  pointer-events: none;
  background-size: 100% 4px;
}

/* Glowing orbs */
.glow {
  position: absolute;
  border-radius: 50%;
  animation: glow-float 10s ease-in-out infinite alternate;
}

.g1 {
  width: 500px;
  height: 500px;
  top: -10%;
  left: -10%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, rgba(99, 102, 241, 0.12) 40%, transparent 70%);
}

.g2 {
  width: 450px;
  height: 450px;
  top: 35%;
  right: -10%;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(168, 85, 247, 0.1) 40%, transparent 70%);
  animation-delay: -2s;
}

.g3 {
  width: 400px;
  height: 400px;
  bottom: -5%;
  left: 25%;
  background: radial-gradient(circle, rgba(34, 197, 94, 0.25) 0%, rgba(34, 197, 94, 0.08) 40%, transparent 70%);
  animation-delay: -4s;
}

.g4 {
  width: 350px;
  height: 350px;
  top: 20%;
  left: 35%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(99, 102, 241, 0.08) 40%, transparent 70%);
  animation-delay: -6s;
}

.g5 {
  width: 380px;
  height: 380px;
  bottom: 15%;
  right: 10%;
  background: radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, rgba(249, 115, 22, 0.06) 40%, transparent 70%);
  animation-delay: -3s;
}

@keyframes glow-float {
  0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
  100% { transform: translate(30px, -20px) scale(1.1); opacity: 1; }
}

@media (max-width: 768px) {
  .network { opacity: 0.3; }
  .g3, .g4, .g5 { display: none; }
  .float-icon { display: none; }
  .particle { display: none; }
}
</style>
