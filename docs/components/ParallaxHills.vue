<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const mouseX = ref(0)
const windowWidth = ref(0)

const handleMouseMove = (e) => {
  mouseX.value = e.clientX
}

const handleResize = () => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('resize', handleResize)
  }
})

// Calculate offset based on mouse position from center
// Range: -1 to 1
const normalizedMouseX = computed(() => {
  if (!windowWidth.value) return 0
  return (mouseX.value / windowWidth.value) * 2 - 1
})

// Parallax styles
// Factor determines movement scale (negative for reverse direction)
const layer1Style = computed(() => ({
  transform: `translateX(${normalizedMouseX.value * 20}px)`
}))

const layer2Style = computed(() => ({
  transform: `translateX(${normalizedMouseX.value * 40}px)`
}))

const layer3Style = computed(() => ({
  transform: `translateX(${normalizedMouseX.value * 80}px)`
}))
</script>

<template>
  <div class="hills-container">
    <svg class="hills-svg" viewBox="0 0 1440 400" preserveAspectRatio="none">
      <defs>
        <linearGradient id="fade-overlay" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="var(--vp-c-bg)" stop-opacity="0" />
          <stop offset="100%" stop-color="var(--vp-c-bg)" stop-opacity="1" />
        </linearGradient>
      </defs>

      <!-- Back Layer (Slowest) -->
      <g :style="layer1Style" class="hill-layer layer-1">
        <path
          d="M-100,250 C200,100 400,300 600,200 C800,100 1100,300 1540,150 L1540,400 L-100,400 Z"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          opacity="0.2"
        />
      </g>

      <!-- Middle Layer -->
      <g :style="layer2Style" class="hill-layer layer-2">
        <path
          d="M-100,300 C100,200 300,350 500,250 C700,150 1000,350 1540,200 L1540,400 L-100,400 Z"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          opacity="0.4"
        />
      </g>

      <!-- Front Layer (Fastest) -->
      <g :style="layer3Style" class="hill-layer layer-3">
        <path
          d="M-100,400 C150,300 450,380 750,280 C1050,180 1350,350 1540,300 L1540,400 L-100,400 Z"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          opacity="0.6"
        />
      </g>
    </svg>
    <!-- Fade out at bottom to blend with content -->
    <div class="bottom-fade"></div>
  </div>
</template>

<style scoped>
.hills-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.hills-svg {
  width: 120%; /* Wider than container to allow movement without gaps */
  height: 100%;
  position: absolute;
  bottom: 0;
  left: -10%; /* Center the wider SVG */
  color: var(--vp-c-text-1);
}

.hill-layer {
  transition: transform 0.1s ease-out;
  will-change: transform;
}

.bottom-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to bottom, transparent, var(--vp-c-bg));
}
</style>
