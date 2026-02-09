<script setup>
import { plugins } from "../data/plugins";
import PluginCard from "./PluginCard.vue";
import ParallaxHills from "./ParallaxHills.vue";
</script>

<template>
  <div class="home-container">
    <section class="hero">
      <ParallaxHills />
      <div class="hero-content">
        <h1 class="hero-title">JustExtension</h1>
        <p class="hero-subtitle">浏览器插件工具集与学习指南</p>
        <div class="hero-actions">
          <a href="/guide/" class="btn primary">开始学习</a>
          <a
            href="https://github.com/Simonmie/JustExtension"
            target="_blank"
            class="btn secondary"
            >GitHub</a
          >
        </div>
      </div>
    </section>

    <section class="plugins-grid">
      <div class="container">
        <div class="grid">
          <PluginCard
            v-for="plugin in plugins"
            :key="plugin.title"
            :plugin="plugin"
          />
        </div>
      </div>
    </section>

    <footer class="footer">
      <p>MIT Licensed | Copyright © 2024 JustExtension</p>
    </footer>
  </div>
</template>

<style scoped>
.home-container {
  min-height: 100vh;
}

.hero {
  padding: 80px 24px;
  text-align: center;
  position: relative;
  overflow: hidden;
  background-color: var(--vp-c-bg);
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
    circle at 50% 50%,
    var(--vp-c-bg-alt) 0%,
    transparent 70%
  );
  z-index: 0;
}

.hero::after {
  content: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  /* Glassmorphism for hero container */
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 40px;
  border-radius: 24px;
  border: 1px solid var(--vp-c-divider);
}

:root.dark .hero-content {
  background: rgba(0, 0, 0, 0.2);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 16px;
  line-height: 1.2;
  padding-bottom: 4px;
  background: -webkit-linear-gradient(
    315deg,
    var(--vp-c-brand-1) 25%,
    var(--vp-c-brand-2)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--vp-c-text-2);
  margin-bottom: 32px;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.btn {
  padding: 10px 24px;
  border-radius: 24px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}

.btn.primary {
  background-color: var(--vp-c-brand-1);
  color: var(--vp-c-bg);
}

.btn.primary:hover {
  background-color: var(--vp-c-brand-2);
  transform: translateY(-2px);
}

.btn.secondary {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.btn.secondary:hover {
  background-color: var(--vp-c-bg-mute);
}

.plugins-grid {
  padding: 40px 24px;
}

.container {
  max-width: 1152px;
  margin: 0 auto;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.footer {
  padding: 40px;
  text-align: center;
  color: var(--vp-c-text-3);
  border-top: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-alt);
}
</style>
