<script setup>
import { setTheme } from 'vitepress-theme-tui'
</script>

# Themes

The `vitepress-theme-tui` package provides a flexible theming system for VitePress sites, allowing you to easily switch between themes and customize the appearance of your documentation.

## Set the default theme

Use the `useTUI` function in `enhanceApp` to apply a default theme at startup:

```js [.vitepress/config.js]{9}
import { useTUI } from 'vitepress-theme-tui'
import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-tui/style.css'

export default {
  extends: DefaultTheme,
  enhanceApp() {
    useTUI({
      theme: 'default', // Set the default theme
    })
  },
}
```

## Change the theme programmatically

You can change the theme at runtime using `setTheme` and check the current one with `getCurrentTheme`:

```js
import { setTheme, getCurrentTheme } from 'vitepress-theme-tui'

console.log(getCurrentTheme()) // e.g. 'default'
setTheme('monokai')            // Change to 'monokai' theme
```

> [!Note]
> - `setTheme` accepts any name; if it isn't one of the built-in themes, you'll see a console warning but the class will still be applied.
> - The active theme is saved in `localStorage` (`vp-tui-theme`).

## Built-in themes

<!--@include: ./parts/themes-list.md-->

> [!Note]
> These classes are applied to the `<html>` element as `tui-theme-{themeName}`. For example, the `default` theme applies `tui-theme-default`.

## Customize theme CSS variables

Each theme defines a set of CSS variables prefixed with `--vp-tui-` to tune colors, borders, typography, and components. See [default theme CSS](https://github.com/enzonotario/vitepress-theme-tui/blob/main/src/styles/themes/default.css) for the full list.

## Create your own theme

1) Create a CSS file (for example, `.vitepress/theme/custom.css`) and import it after the package CSS:

```js [.vitepress/theme/index.js]
import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-tui/style.css'
import './custom.css' // your CSS

export default { extends: DefaultTheme }
```

2) Define your theme using the `tui-theme-<name>` class. You can use `@layer theme` to integrate with the package's layer system:

```css [.vitepress/theme/custom.css]
@layer theme {
  .tui-theme-mytheme {
    /* Site base colors (optional, used by VitePress) */
    --vp-c-bg: #0b1020;
    --vp-c-text-1: #e6edf3;
    --vp-c-text-2: #b3c0d1;

    /* TUI theme variables */
    --vp-tui-font-family: 'IBM Plex Mono', monospace;
    --vp-tui-c-bg: var(--vp-c-bg);
    --vp-tui-border-color: #3b82f6;
    --vp-tui-border-width: 2px;
    --vp-tui-border-radius: 0;

    --vp-tui-link-fg: #93c5fd;
    --vp-tui-link-hover-bg: #3b82f6;
    --vp-tui-link-hover-fg: #0b1020;

    /* ...any other variables you want to adjust... */
  }

  /* Optional: tweaks for dark mode when the site has .dark on <html> */
  .dark.tui-theme-mytheme {
    --vp-c-bg: #0b1020;
    --vp-c-text-1: #e6edf3;
    /* ...dark-specific overrides... */
  }
}
```

3) Activate your theme:

```js
import { setTheme } from 'vitepress-theme-tui'
setTheme('mytheme')
```
