# Getting Started

This guide will help you install and configure VitePress Theme TUI for your documentation site.

## Prerequisites

Before installing VitePress Theme TUI, you need to have:

- A VitePress project set up
- Node.js and npm/yarn/pnpm/bun installed

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

```bash [bun]
bun add vitepress-theme-tui
```

:::

## Basic Configuration

2. Create or modify your theme configuration file:

::: code-group

```js [.vitepress/theme/index.js]
import DefaultTheme from 'vitepress/theme'
import { useTUI } from 'vitepress-theme-tui' // [!code ++]
import 'vitepress-theme-tui/style.css' // [!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    useTUI({ // [!code ++]
      theme: 'default', // Optionally set a default theme. // [!code ++]
    }) // [!code ++]
  }
}
```

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useTUI } from 'vitepress-theme-tui' // [!code ++]
import 'vitepress-theme-tui/style.css' // [!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    useTUI({ // [!code ++]
      theme: 'default', // Optionally set a default theme. // [!code ++]
    }) // [!code ++]
  }
} satisfies Theme
```

:::

## Configuring Fonts

You can customize the fonts used in your documentation site using either Google Fonts or UnoCSS.

### Using Google Fonts

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

### Using UnoCSS

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

## Style Isolation with `vp-tui-raw`

VitePress Theme TUI includes a feature that allows you to isolate content from the theme's styles. This is useful when you want to display content with the default VitePress styling instead of the terminal-inspired styling.

To use this feature, wrap your content in a div with the `vp-tui-raw` class:

```md
<div class="vp-tui-raw">

# This content is not affected by the theme's styles

Regular markdown content here will use the default VitePress styling.

\`\`\`javascript
// Code blocks will use default styling
const example = 'Hello, world!';
\`\`\`

> Blockquotes will use default styling

</div>
```
