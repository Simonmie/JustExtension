<script setup>
defineProps({
  plugin: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="plugin-card">
    <div class="card-header">
      <h3 class="title">{{ plugin.title }}</h3>
      <span :class="['status', plugin.status.toLowerCase()]">{{ plugin.status }}</span>
    </div>
    <p class="description">{{ plugin.description }}</p>
    <div class="tags">
      <span v-for="tag in plugin.tags" :key="tag" class="tag">#{{ tag }}</span>
    </div>
    <div class="actions">
      <a v-if="plugin.links.docs" :href="plugin.links.docs" class="btn primary">Docs</a>
      <a v-if="plugin.links.github" :href="plugin.links.github" target="_blank" class="btn secondary">GitHub</a>
      <a v-if="plugin.links.demo" :href="plugin.links.demo" target="_blank" class="btn secondary">Demo</a>
    </div>
  </div>
</template>

<style scoped>
.plugin-card {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Dark mode adjustment via VitePress CSS vars */
:root.dark .plugin-card {
  background: rgba(30, 30, 30, 0.5);
}

.plugin-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.05);
  border-color: var(--vp-c-brand-1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.status {
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 500;
}

.status.beta {
  background-color: var(--vp-c-yellow-dimm-1);
  color: var(--vp-c-yellow-1);
}

.status.stable {
  background-color: var(--vp-c-green-dimm-1);
  color: var(--vp-c-green-1);
}

.description {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 16px;
  flex-grow: 1;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tag {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-alt);
  padding: 2px 8px;
  border-radius: 4px;
}

.actions {
  display: flex;
  gap: 12px;
}

.btn {
  padding: 6px 16px;
  border-radius: 6px;
  font-size: 0.9rem;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s;
}

.btn.primary {
  background-color: var(--vp-c-brand-1);
  color: var(--vp-c-bg);
}

.btn.primary:hover {
  background-color: var(--vp-c-brand-2);
}

.btn.secondary {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.btn.secondary:hover {
  background-color: var(--vp-c-bg-mute);
}
</style>
