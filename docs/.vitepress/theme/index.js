import DefaultTheme from 'vitepress/theme'
import { useTUI } from '../../../src'
import ThemeSwitcher from '../../../src/components/ThemeSwitcher.vue'
import Layout from './Layout.vue'
import 'virtual:uno.css'
import '../../../src/styles/index.css'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp(ctx) {
    // Initialize TUI styles and theme.
    useTUI({
      theme: 'default',
    })

    // Custom components.
    ctx.app.component('ThemeSwitcher', ThemeSwitcher)
  },
}
