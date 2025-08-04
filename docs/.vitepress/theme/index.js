import DefaultTheme from 'vitepress/theme'
import { useTUI } from '../../../src'
import ThemeSwitcher from '../../../src/components/ThemeSwitcher.vue'
import ThemeConfig from './components/ThemeConfig.vue'
import { useTuiConfig } from './composables/useTuiConfig.js'
import Layout from './Layout.vue'
import 'virtual:uno.css'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp(ctx) {
    // Initialize TUI styles and theme.
    useTUI({
      theme: 'default',
    })

    useTuiConfig()

    // Custom components.
    ctx.app.component('ThemeSwitcher', ThemeSwitcher)
    ctx.app.component('ThemeConfig', ThemeConfig)
  },
}
