---
outline: [1,2,3]
---

# `vitepress-theme-tui` Demo

This page demonstrates the various Markdown extensions available in VitePress with `vitepress-theme-tui`.

## Headers and Anchors

# H1 Header

## H2 Header

### H3 Header

#### H4 Header

##### H5 Header

###### H6 Header

## Horizontal Rule

---

## Blockquotes

> This is a blockquote.
>
> It can span multiple lines.
>
> You can also include code blocks inside blockquotes.
>
> ```js
> console.log('This is a code block inside a blockquote.')
> ```

## Links

### Internal Links

- [Home](/) - Links to the home page
- [This Guide](/guide/) - Links to this guide

### External Links

- [GitHub](https://github.com)
- [VitePress](https://vitepress.dev)

## Frontmatter

This page uses frontmatter for metadata (not visible in the content).

## Tables

| Feature       | Description                         | Support |
| ------------- | ----------------------------------- | ------: |
| Headers       | Support for H1-H6 headers           |     Yes |
| Links         | Internal and external links         |     Yes |
| Tables        | GitHub-style tables                 |     Yes |
| Code Blocks   | Syntax highlighting                 |     Yes |
| Custom Blocks | Info, tip, warning, danger, details |     Yes |

## Emoji Support

:tada: :rocket: :smile: :computer: :sparkles:

## Table of Contents

[[toc]]

## Custom Containers

### Default Containers

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### Custom Titles

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code

```js
console.log('Hello, Terminal UI!')
```

:::

## GitHub-flavored Alerts

> [!NOTE]
> This is a note alert.

> [!TIP]
> This is a tip alert.

> [!IMPORTANT]
> This is an important alert.

> [!WARNING]
> This is a warning alert.

> [!CAUTION]
> This is a caution alert.

## Code Blocks with Syntax Highlighting

```js
// JavaScript code
function hello() {
  console.log('Hello, Terminal UI!')
}
```

```html
<!-- HTML code -->
<div class="terminal">
  <h1>Terminal UI</h1>
  <p>This is a terminal-style UI theme.</p>
</div>
```

```css
/* CSS code */
.terminal {
  background-color: #000;
  color: #0f0;
  font-family: monospace;
}
```

## Line Highlighting in Code Blocks

```js{2,4-6}
function highlightDemo() {
  // This line is highlighted
  const message = 'Terminal UI';
  // These lines are also highlighted
  console.log(message);
  return message;
}
```

## Focus in Code Blocks

```js
function focusDemo() {
  const message = 'Terminal UI' // [!code focus]
  console.log(message)
  return message
}
```

## Colored Diffs in Code Blocks

```js
function diffDemo() {
  const oldMessage = 'VitePress' // [!code --]
  const newMessage = 'Terminal UI' // [!code ++]
  console.log(message)
}
```

## Errors and Warnings in Code Blocks

```js
function errorWarningDemo() {
  const error = 'This is an error' // [!code error]
  const warning = 'This is a warning' // [!code warning]
  console.log(error, warning)
}
```

## Code Groups

::: code-group

```js [config.js]
// JavaScript configuration
export default {
  theme: 'terminal-ui',
  title: 'My Documentation'
}
```

```ts [config.ts]
// TypeScript configuration
interface Config {
  theme: string;
  title: string;
}

const config: Config = {
  theme: 'terminal-ui',
  title: 'My Documentation'
}

export default config;
```

:::
