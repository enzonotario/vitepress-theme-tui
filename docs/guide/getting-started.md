# Getting Started

This guide will help you install and configure VitePress Theme TUI for your documentation site.

## Prerequisites

Before installing VitePress Theme TUI, you need to have:

- A VitePress project set up
- Node.js and npm/yarn/pnpm installed

If you don't have a VitePress project yet, follow the [VitePress installation guide](https://vitepress.dev/guide/getting-started) to create one.

## Installation

1. Install the theme package using your preferred package manager:

::: code-group

```bash [npm]
npm install vitepress-theme-tui
```

```bash [yarn]
yarn add vitepress-theme-tui
```

```bash [pnpm]
pnpm add vitepress-theme-tui
```

:::

## Basic Configuration

2. Create or modify your theme configuration file:

::: code-group

```js [.vitepress/theme/index.js]
import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-tui/style.css'

export default {
  extends: DefaultTheme,
}
```

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-tui/style.css'

export default {
  extends: DefaultTheme,
} satisfies Theme
```

:::

That's it! Your VitePress site now uses the Terminal UI theme.

## Advanced Configuration

### Using the Theme Switcher

To add the theme switcher component to your site, modify your theme configuration:

```js
import { ThemeSwitcher } from 'vitepress-theme-tui'
import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-tui/style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ThemeSwitcher', ThemeSwitcher)
  }
}
```

Then, you can use the component in your layout or any other component:

```vue
<template>
  <div>
    <ThemeSwitcher />
  </div>
</template>
```

### Default Theme

You can set the default theme by modifying your VitePress configuration:

```js [.vitepress/config.js]
import { useTUI } from 'vitepress-theme-tui' // [!code ++]
import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-tui/dist/style.css' // [!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    useTUI({ // [!code ++]
      theme: 'default', // Optionally set a default theme. // [!code ++]
    }) // [!code ++]
  }
}
```

This script will run before the page renders and apply the saved theme or the default theme.

### Configuring Fonts

You can customize the fonts used in your documentation site using either Google Fonts or UnoCSS.

#### Using Google Fonts

To use Google Fonts, add the following to your VitePress configuration:

```js [.vitepress/config.js]
export default {
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap', rel: 'stylesheet' }
    ]
  ],
}
```

For more information, see the [VitePress documentation on adding Google Fonts](https://vitepress.dev/reference/site-config#example-adding-google-fonts).

#### Using UnoCSS

If you prefer to use UnoCSS for font management, you can install the necessary presets and configure them in your UnoCSS configuration file.

```js [uno.config.js]
import { defineConfig, presetWebFonts, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetWebFonts({
      fonts: {
        mono: 'IBM Plex Mono',
      },
    }),
  ],
})
```

## Next Steps

Now that you have installed and configured VitePress Theme TUI, you can:

- Learn about the [custom components](/components/tui-card)
- Check out the [demo page](/guide/demo) to see all the features in action
