import DefaultTheme from 'vitepress/theme';
import {useTUI, ThemeSwitcher} from '../../../src';
import 'virtual:uno.css';
import '../../../src/styles/vitepress-theme-tui.css';
import './style.css';
import Layout from './Layout.vue';

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp(ctx) {
    // Initialize TUI styles and theme.
    useTUI({
      theme: 'default',
    });

    // Custom components.
    ctx.app.component('ThemeSwitcher', ThemeSwitcher);
  }
};
