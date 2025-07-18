<script>
import { onMounted, ref } from 'vue'
import { getCurrentTheme, setTheme, themes } from '../themes'

export default {
  name: 'ThemeSwitcher',
  setup() {
    const currentTheme = ref('default')

    onMounted(() => {
      currentTheme.value = getCurrentTheme()
    })

    const onThemeChange = () => {
      setTheme(currentTheme.value)
    }

    return {
      currentTheme,
      themes,
      onThemeChange,
    }
  },
}
</script>

<template>
  <div class="tui-card xs">
    <label for="theme-select" class="tui-card-title">Theme</label>
    <div class="tui-card-content">
      <select id="theme-select" v-model="currentTheme" @change="onThemeChange">
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
  font-family: var(--vp-tui-font-family);
}
</style>
