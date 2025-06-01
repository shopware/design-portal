<template>
  <div class="values-marquee-outer">
    <div class="values-marquee-track" :style="{ animationDuration: duration + 's' }" @mouseenter="pause" @mouseleave="play" :class="{ paused }">
      <div v-for="(pill, i) in pills1Doubled" :key="'pill1-' + i" class="values-pill">
        <span>{{ pill }}</span>
      </div>
    </div>
    <div class="values-marquee-track reverse" :style="{ animationDuration: duration + 's' }" @mouseenter="pause" @mouseleave="play" :class="{ paused }">
      <div v-for="(pill, i) in pills2Doubled" :key="'pill2-' + i" class="values-pill">
        <span>{{ pill }}</span>
      </div>
    </div>
    <div class="values-marquee-fade left"></div>
    <div class="values-marquee-fade right"></div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const pills1 = [
  'Research',
  'Accessibility',
  'User Flows',
  'Personas',
  'Design System',
  'Visual Design',
  'UX Writing',
  'Information Architecture',
  'Prototyping',
  'Motion Design',
  'Usability Testing',
  'Wireframing',
  'Journey Mapping',
  'Interaction Design',
  'UI Design',
  'Microcopy',
  'Content Strategy',
]
const pills2 = [
  'Brand Strategy',
  'Storytelling',
  'Logo Design',
  'Brand Guidelines',
  'Typography',
  'Color Systems',
  'Photography',
  'Videography',
  'Illustration',
  'Iconography',
  'Design Ops',
  'Workshop Facilitation',
  'Concepts',
  'Daydreaming',
  'Empathy',
  'User Research',
  'Creative Direction',
]
const pills1Doubled = computed(() => [...pills1, ...pills1, ...pills1])
const pills2Doubled = computed(() => [...pills2, ...pills2, ...pills2])
const duration = 90
const paused = ref(false)
function pause() { paused.value = true }
function play() { paused.value = false }
</script>

<style lang="scss">
.values-marquee-outer {
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  height: 120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.values-marquee-track {
  display: flex;
  align-items: center;
  gap: 16px;
  width: max-content;
  animation: values-marquee 90s linear infinite;
  will-change: transform;
}
.values-marquee-track.reverse {
  animation-direction: reverse;
}
.values-marquee-track.paused {
  animation-play-state: paused;
}
.values-pill {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  height: 48px;
  border-radius: 999px;
  background: linear-gradient(90deg, #f0f4ff 0%, #e0e7ff 100%);
  border: 2.5px solid #2563eb;
  box-shadow: 0 2px 12px 0 rgba(37,99,235,0.08);
  font-family: Inter, sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  letter-spacing: 0.02em;
  transition: border 0.2s, box-shadow 0.2s, background 0.2s;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
}
.values-pill:hover {
  border-color: #0ea5e9;
  background: linear-gradient(90deg, #e0e7ff 0%, #f0f4ff 100%);
  box-shadow: 0 4px 24px 0 rgba(14,165,233,0.12);
}
.values-marquee-fade {
  position: absolute;
  top: 0;
  width: 80px;
  height: 100%;
  pointer-events: none;
  z-index: 2;
}
.values-marquee-fade.left {
  left: 0;
  background: linear-gradient(90deg, var(--vp-c-bg, #fff) 0%, rgba(255,255,255,0) 100%);
}
.values-marquee-fade.right {
  right: 0;
  background: linear-gradient(-90deg, var(--vp-c-bg, #fff) 0%, rgba(255,255,255,0) 100%);
}
@media (prefers-color-scheme: dark) {
  .values-marquee-fade.left {
    background: linear-gradient(90deg, var(--vp-c-bg) 0%, rgba(0,0,0,0) 100%);
  }
  .values-marquee-fade.right {
    background: linear-gradient(-90deg, var(--vp-c-bg) 0%, rgba(0,0,0,0) 100%);
  }
  .values-pill {
    background: linear-gradient(90deg, #232a36 0%, #1a1f26 100%);
    color: #e0e7ff;
    border-color: #60a5fa;
  }
  .values-pill:hover {
    border-color: #38bdf8;
    background: linear-gradient(90deg, #1a1f26 0%, #232a36 100%);
  }
}
@keyframes values-marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.333%);
  }
}
@media (max-width: 640px) {
  .values-marquee-outer {
    height: 80px;
    gap: 8px;
  }
  .values-pill {
    font-size: 1rem;
    height: 36px;
    padding: 0 1.25rem;
  }
  .values-marquee-fade {
    width: 40px;
  }
}
</style>