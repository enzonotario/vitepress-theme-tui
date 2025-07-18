<script setup>
import { themes } from '../src/themes'
</script>

# Themes

VitePress Theme TUI comes with a variety of themes that you can use to customize the look and feel of your documentation site. Each theme is designed to provide a unique aesthetic while maintaining readability and usability.

## Available Themes

VitePress Theme TUI includes the following themes:

<div>
  <ul>
    <li v-for="theme in themes" :key="theme.name">
      {{ theme.label }}
    </li>
  </ul>
</div>

## Setting a Default Theme

You can set a default theme for your site by adding a script to your VitePress configuration. See the [Getting Started](/guide/getting-started#default-theme) guide for instructions.

[//]: # (## Programmatically Switching Themes)

[//]: # ()
[//]: # (You can also switch themes programmatically using the exported functions from the theme:)

[//]: # ()
[//]: # (```js)

[//]: # (import { switchTheme, getCurrentTheme } from 'vitepress-theme-tui')

[//]: # (import { themes } from 'vitepress-theme-tui/themes')

[//]: # ()
[//]: # (// Get the current theme)

[//]: # (const currentTheme = getCurrentTheme&#40;&#41;)

[//]: # (console.log&#40;'Current theme:', currentTheme&#41;)

[//]: # ()
[//]: # (// Switch to a different theme)

[//]: # (switchTheme&#40;'dracula'&#41;)

[//]: # ()
[//]: # (// Get all available themes)

[//]: # (console.log&#40;'Available themes:', themes.map&#40;theme => theme.name&#41;&#41;)

[//]: # ()
[//]: # (// Get theme details)

[//]: # (const draculaTheme = themes.find&#40;theme => theme.name === 'dracula'&#41;)

[//]: # (console.log&#40;'Dracula theme details:', draculaTheme&#41;)

[//]: # (```)

[//]: # ()
[//]: # (## Creating Custom Theme Styles)

[//]: # ()
[//]: # (If you want to customize the theme colors or create your own theme, you can create a CSS file with your custom styles:)

[//]: # ()
[//]: # (```css)

[//]: # (/* my-custom-theme.css */)

[//]: # (:root.tui-theme-custom {)

[//]: # (  --tui-color-background: #1a1a1a;)

[//]: # (  --tui-color-text: #f0f0f0;)

[//]: # (  --tui-color-primary: #ff5f56;)

[//]: # (  --tui-color-secondary: #ffbd2e;)

[//]: # (  --tui-color-accent: #27c93f;)

[//]: # (  --tui-color-border: #333333;)

[//]: # (  --tui-color-code-background: #252525;)

[//]: # (  --tui-color-code-text: #f0f0f0;)

[//]: # (  /* Add other color variables as needed */)

[//]: # (})

[//]: # (```)

[//]: # ()
[//]: # (Then import your custom theme CSS file in your theme configuration:)

[//]: # ()
[//]: # (```js)

[//]: # (import DefaultTheme from 'vitepress/theme')

[//]: # (import 'vitepress-theme-tui/style.css')

[//]: # (import './my-custom-theme.css' // Import your custom theme)

[//]: # ()
[//]: # (export default {)

[//]: # (  extends: DefaultTheme,)

[//]: # (})

[//]: # (```)

[//]: # ()
[//]: # (To use your custom theme, you'll need to add it to the themes array:)

[//]: # ()
[//]: # (```js)

[//]: # (import { themes } from 'vitepress-theme-tui/themes')

[//]: # ()
[//]: # (// Add your custom theme to the themes array)

[//]: # (themes.push&#40;{)

[//]: # (  name: 'custom',)

[//]: # (  label: 'Custom Theme',)

[//]: # (  description: 'My custom theme with unique colors',)

[//]: # (  className: 'tui-theme-custom',)

[//]: # (  styles: './my-custom-theme.css')

[//]: # (}&#41;)

[//]: # (```)

[//]: # ()
[//]: # (Now your custom theme will be available in the theme switcher.)
