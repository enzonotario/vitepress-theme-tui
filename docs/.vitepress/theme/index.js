import DefaultTheme from 'vitepress/theme'
import { ThemeSwitcher, useTUI } from '../../../src'
import Layout from './Layout.vue'
import 'virtual:uno.css'
import '../../../src/styles/vitepress-theme-tui.css'
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
