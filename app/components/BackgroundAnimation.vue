<template>
  <div class="bg-anim" aria-hidden="true">
    <div class="gradient-bg" />
    <div class="mesh-bg" />
    <div class="noise-overlay" />

    <svg class="network" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <g class="links">
        <line v-for="(link, i) in links" :key="i" :x1="link.x1" :y1="link.y1" :x2="link.x2" :y2="link.y2" class="link" :style="{ animationDelay: link.delay + 's' }" />
      </g>
      <g class="nodes">
        <circle v-for="(node, i) in nodes" :key="i" :cx="node.x" :cy="node.y" r="3" class="dot" :style="{ animationDelay: node.delay + 's' }" />
      </g>
    </svg>

    <div class="glow g1" />
    <div class="glow g2" />
    <div class="glow g3" />
    <div class="glow g4" />
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

const links = [
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
</script>

<style scoped>
.bg-anim {
  position: absolute;
  inset: 0;
  overflow: clip;
  pointer-events: none;
  z-index: 0;
}

.gradient-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 20% 30%, rgba(30, 27, 75, 0.6) 0%, transparent 60%),
    radial-gradient(ellipse 60% 50% at 80% 70%, rgba(15, 23, 42, 0.8) 0%, transparent 50%),
    radial-gradient(ellipse 50% 40% at 50% 50%, rgba(30, 41, 59, 0.5) 0%, transparent 50%),
    linear-gradient(180deg, #0b0d1a 0%, #0f1225 30%, #12142d 60%, #0a0c1a 100%);
  animation: gradient-shift 12s ease-in-out infinite alternate;
}

@keyframes gradient-shift {
  0% { background-position: 0% 0%; opacity: 1; }
  100% { background-position: 5% 3%; opacity: 0.85; }
}

.mesh-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
  background-size: 64px 64px;
  animation: mesh-drift 20s linear infinite;
}

@keyframes mesh-drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(64px, 64px); }
}

.noise-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}

.network {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.35;
}

.link {
  stroke: rgba(99, 102, 241, 0.15);
  stroke-width: 1;
  animation: link-pulse 4s ease-in-out infinite;
}

@keyframes link-pulse {
  0%, 100% { stroke-opacity: 0.1; }
  50% { stroke-opacity: 0.35; }
}

.dot {
  fill: var(--accent-hover);
  animation: dot-glow 4s ease-in-out infinite;
  filter: drop-shadow(0 0 4px rgba(99, 102, 241, 0.3));
}

@keyframes dot-glow {
  0%, 100% { opacity: 0.25; }
  50% { opacity: 0.75; }
}

/* Glowing orbs */
.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  animation: glow-float 8s ease-in-out infinite alternate;
}

.g1 {
  width: 400px;
  height: 400px;
  top: -5%;
  left: -5%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.12), transparent);
}

.g2 {
  width: 350px;
  height: 350px;
  top: 40%;
  right: -5%;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.08), transparent);
  animation-delay: -2s;
}

.g3 {
  width: 300px;
  height: 300px;
  bottom: 0;
  left: 30%;
  background: radial-gradient(circle, rgba(34, 197, 94, 0.06), transparent);
  animation-delay: -4s;
}

.g4 {
  width: 250px;
  height: 250px;
  top: 25%;
  left: 40%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.06), transparent);
  animation-delay: -6s;
}

@keyframes glow-float {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(30px, -20px) scale(1.1); }
}

@media (max-width: 768px) {
  .network { opacity: 0.2; }
  .glow { filter: blur(40px); }
  .g3, .g4 { display: none; }
}
</style>
