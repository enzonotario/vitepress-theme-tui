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
import DefaultTheme from 'vitepress/theme'
import { ThemeSwitcher } from 'vitepress-theme-tui'
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
import DefaultTheme from 'vitepress/theme';
import { tuiEnhanceApp } from 'vitepress-theme-tui'; // [!code ++]
import 'vitepress-theme-tui/dist/style.css'; // [!code ++]

export default {
    extends: DefaultTheme,
    enhanceApp(ctx) {
        tuiEnhanceApp({ // [!code ++]
            theme: 'default', // Optionally set a default theme. // [!code ++]
        }); // [!code ++]
    }
};

```

This script will run before the page renders and apply the saved theme or the default theme.

## Next Steps

Now that you have installed and configured VitePress Theme TUI, you can:

- Explore the [available themes](/themes)
- Learn about the [custom components](/components/tui-card)
- Check out the [demo page](/guide/demo) to see all the features in action
