[//]: # (# Theme Switcher)

[//]: # ()
[//]: # (The Theme Switcher is a Vue component that allows users to switch between the different color themes available in VitePress Theme TUI. It provides a dropdown menu with all available themes and automatically saves the user's preference.)

[//]: # ()
[//]: # (## Basic Usage)

[//]: # ()
[//]: # (To use the Theme Switcher component, you first need to register it in your theme configuration:)

[//]: # ()
[//]: # (```js)

[//]: # (// .vitepress/theme/index.js)

[//]: # (import DefaultTheme from 'vitepress/theme')

[//]: # (import { ThemeSwitcher } from 'vitepress-theme-tui')

[//]: # (import 'vitepress-theme-tui/style.css')

[//]: # ()
[//]: # (export default {)

[//]: # (  extends: DefaultTheme,)

[//]: # (  enhanceApp&#40;{ app }&#41; {)

[//]: # (    app.component&#40;'ThemeSwitcher', ThemeSwitcher&#41;)

[//]: # (  })

[//]: # (})

[//]: # (```)

[//]: # ()
[//]: # (Once registered, you can use the component in your layout or any other component:)

[//]: # ()
[//]: # (```vue)

[//]: # (<template>)

[//]: # (  <div>)

[//]: # (    <ThemeSwitcher />)

[//]: # (  </div>)

[//]: # (</template>)

[//]: # (```)

[//]: # ()
[//]: # (## Component Features)

[//]: # ()
[//]: # (The Theme Switcher component:)

[//]: # ()
[//]: # (- Displays a dropdown with all available themes)

[//]: # (- Shows the current active theme)

[//]: # (- Automatically saves the selected theme to localStorage)

[//]: # (- Applies the selected theme immediately)

[//]: # (- Is styled as a TUI Card with the extra small &#40;xs&#41; size variant)

[//]: # ()
[//]: # (## Available Themes)

[//]: # ()
[//]: # (The Theme Switcher includes all the themes available in VitePress Theme TUI:)

[//]: # ()
[//]: # (- Default)

[//]: # (- Monokai)

[//]: # (- Dracula)

[//]: # (- Solarized)

[//]: # (- Nord)

[//]: # (- Material)

[//]: # (- Material Oceanic)

[//]: # (- Vitesse)

[//]: # ()
[//]: # (For more information about the available themes, see the [Themes]&#40;/themes&#41; page.)

[//]: # ()
[//]: # (## Customizing the Theme Switcher)

[//]: # ()
[//]: # (### Placement)

[//]: # ()
[//]: # (You can place the Theme Switcher component anywhere in your layout. Common locations include:)

[//]: # ()
[//]: # (- In the navbar)

[//]: # (- In the sidebar)

[//]: # (- In the footer)

[//]: # (- On a dedicated settings page)

[//]: # ()
[//]: # (### Styling)

[//]: # ()
[//]: # (The Theme Switcher is styled as a TUI Card with the extra small &#40;xs&#41; size variant. You can customize its appearance by targeting the component with CSS:)

[//]: # ()
[//]: # (```css)

[//]: # (/* Custom styles for the Theme Switcher */)

[//]: # (.tui-card.xs {)

[//]: # (  /* Your custom styles here */)

[//]: # (})

[//]: # ()
[//]: # (.tui-card.xs select {)

[//]: # (  /* Custom styles for the select dropdown */)

[//]: # (})

[//]: # (```)

[//]: # ()
[//]: # (## Programmatic Theme Switching)

[//]: # ()
[//]: # (If you prefer to create your own theme switching UI, you can use the exported functions from the theme:)

[//]: # ()
[//]: # (```js)

[//]: # (import { switchTheme, getCurrentTheme, availableThemes } from 'vitepress-theme-tui')

[//]: # ()
[//]: # (// Get the current theme)

[//]: # (const currentTheme = getCurrentTheme&#40;&#41;)

[//]: # ()
[//]: # (// Switch to a different theme)

[//]: # (switchTheme&#40;'dracula'&#41;)

[//]: # ()
[//]: # (// Get all available themes)

[//]: # (console.log&#40;availableThemes&#41;)

[//]: # (```)

[//]: # ()
[//]: # (## Example)

[//]: # ()
[//]: # (Here's an example of how to add the Theme Switcher to a custom layout component:)

[//]: # ()
[//]: # (```vue)

[//]: # (<template>)

[//]: # (  <div class="custom-layout">)

[//]: # (    <header>)

[//]: # (      <h1>My Documentation</h1>)

[//]: # (      <div class="theme-switcher-container">)

[//]: # (        <ThemeSwitcher />)

[//]: # (      </div>)

[//]: # (    </header>)

[//]: # (    <main>)

[//]: # (      <Content />)

[//]: # (    </main>)

[//]: # (    <footer>)

[//]: # (      <p>© 2025 My Project</p>)

[//]: # (    </footer>)

[//]: # (  </div>)

[//]: # (</template>)

[//]: # ()
[//]: # (<style>)

[//]: # (.custom-layout {)

[//]: # (  max-width: 1200px;)

[//]: # (  margin: 0 auto;)

[//]: # (  padding: 2rem;)

[//]: # (})

[//]: # ()
[//]: # (header {)

[//]: # (  display: flex;)

[//]: # (  justify-content: space-between;)

[//]: # (  align-items: center;)

[//]: # (  margin-bottom: 2rem;)

[//]: # (})

[//]: # ()
[//]: # (.theme-switcher-container {)

[//]: # (  margin-left: auto;)

[//]: # (})

[//]: # (</style>)

[//]: # (```)

[//]: # ()
[//]: # (## Default Theme)

[//]: # ()
[//]: # (By default, the Theme Switcher will use the theme stored in localStorage, or fall back to the 'default' theme if no preference is saved. You can set a different default theme by modifying your VitePress configuration as described in the [Themes]&#40;/themes#setting-a-default-theme&#41; documentation.)
