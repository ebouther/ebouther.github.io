<template>
  <div class="bg-canvas" aria-hidden="true">
    <div class="gradient-bg" />
    <div class="mesh-bg" />
    <div class="noise-overlay" />

    <!-- Network graph -->
    <svg class="network" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <g class="links">
        <line v-for="(link, i) in links" :key="'l'+i" :x1="link.x1" :y1="link.y1" :x2="link.x2" :y2="link.y2" class="link" :style="{ animationDelay: link.delay + 's' }" />
      </g>
      <g class="nodes">
        <circle v-for="(node, i) in nodes" :key="'n'+i" :cx="node.x" :cy="node.y" r="3" class="dot" :style="{ animationDelay: node.delay + 's' }" />
      </g>
      <!-- Data packets traveling along network -->
      <g class="packets">
        <circle
          v-for="(pkt, i) in packets"
          :key="'p'+i"
          :r="pkt.size"
          class="packet"
          :style="{
            '--x1': pkt.x1,
            '--y1': pkt.y1,
            '--x2': pkt.x2,
            '--y2': pkt.y2,
            '--duration': pkt.duration + 's',
            '--delay': pkt.delay + 's',
          }"
        />
      </g>
    </svg>

    <!-- Floating infrastructure icons -->
    <div class="float-icons">
      <div
        v-for="(icon, i) in floatIcons"
        :key="'fi'+i"
        class="float-icon"
        :style="{
          left: icon.x + '%',
          top: icon.y + '%',
          animationDuration: icon.duration + 's',
          animationDelay: icon.delay + 's',
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

const packets = computed(() =>
  links.map((link, i) => ({
    x1: link.x1,
    y1: link.y1,
    x2: link.x2,
    y2: link.y2,
    size: 2 + Math.random() * 2,
    duration: 3 + Math.random() * 4,
    delay: link.delay + Math.random() * 2,
  }))
)

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

const floatIcons = Array.from({ length: 16 }, (_, i) => ({
  x: 5 + Math.random() * 90,
  y: 5 + Math.random() * 90,
  duration: 20 + Math.random() * 30,
  delay: Math.random() * -30,
  opacity: 0.03 + Math.random() * 0.07,
  size: 18 + Math.random() * 24,
  svg: iconSvgs[i % iconSvgs.length],
}))

const particleData = Array.from({ length: 40 }, (_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 1 + Math.random() * 2.5,
  duration: 4 + Math.random() * 8,
  delay: Math.random() * -10,
  opacity: 0.1 + Math.random() * 0.4,
}))
</script>

<style scoped>
.bg-canvas {
  position: fixed;
  inset: 0;
  overflow: clip;
  pointer-events: none;
  z-index: 0;
}

/* Gradient background */
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

/* Mesh grid */
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

/* Noise */
.noise-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}

/* Network SVG */
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

/* Data packets traveling along network */
.packet {
  fill: rgba(129, 140, 248, 0.6);
  filter: drop-shadow(0 0 6px rgba(99, 102, 241, 0.5));
  offset-path: path('M var(--x1) var(--y1) L var(--x2) var(--y2)');
  animation: packet-travel var(--duration) linear infinite;
  animation-delay: var(--delay);
}

@keyframes packet-travel {
  0% { offset-distance: 0%; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { offset-distance: 100%; opacity: 0; }
}

/* Floating infrastructure icons */
.float-icons {
  position: absolute;
  inset: 0;
}

.float-icon {
  position: absolute;
  color: var(--accent);
  animation: float-icon linear infinite;
  transform: translate(-50%, -50%);
}

.float-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

@keyframes float-icon {
  0% { transform: translate(-50%, -50%) translateY(0) rotate(0deg); }
  25% { transform: translate(-50%, -50%) translateY(-20px) rotate(5deg); }
  50% { transform: translate(-50%, -50%) translateY(-10px) rotate(-3deg); }
  75% { transform: translate(-50%, -50%) translateY(-25px) rotate(4deg); }
  100% { transform: translate(-50%, -50%) translateY(0) rotate(0deg); }
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
  animation: scanline-move 8s linear infinite;
}

@keyframes scanline-move {
  0% { background-position: 0 0; }
  100% { background-position: 0 4px; }
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

.g5 {
  width: 280px;
  height: 280px;
  bottom: 20%;
  right: 15%;
  background: radial-gradient(circle, rgba(249, 115, 22, 0.04), transparent);
  animation-delay: -3s;
}

@keyframes glow-float {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(30px, -20px) scale(1.1); }
}

@media (max-width: 768px) {
  .network { opacity: 0.2; }
  .glow { filter: blur(40px); }
  .g3, .g4, .g5 { display: none; }
  .float-icon { display: none; }
  .particle { display: none; }
}
</style>
