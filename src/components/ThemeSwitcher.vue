<script setup lang="ts">
import { currentTheme, setTheme, themes } from '../themes'
</script>

<template>
  <div class="tui-card xs">
    <label for="theme-select" class="tui-card-title">Theme</label>
    <div class="tui-card-content">
      <select id="theme-select" :value="currentTheme" @change="setTheme($event.target.value)">
        <option v-for="theme in themes" :key="theme.name" :value="theme.name">
          {{ theme.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<style>
.vp-tui-theme-switcher {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: var(--vp-tui-c-bg);
}

.vp-tui-theme-switcher select {
  padding: 0.25rem 0.5rem;
  border: var(--vp-tui-border-width) solid var(--vp-tui-border-color);
  background-color: var(--vp-tui-c-bg);
  color: var(--vp-tui-link-fg);
}
</style>
