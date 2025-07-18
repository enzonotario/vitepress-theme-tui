---
title: TUI Card Component
description: Learn how to use the TUI Card component in vitepress-theme-tui
---

# TUI Card Component

The TUI Card component provides a simple and flexible way to create card-style UI elements with the TUI theme styling. Cards can be used to group related content and actions in a visually distinct container.

## Basic Usage

To create a basic card, use the `tui-card` class on a container element:

```html
<div class="tui-card">
  <div class="tui-card-title">Card Title</div>
  <div class="tui-card-content">This is the content of the card. You can put any HTML elements here.</div>
</div>
```

## Card Variations

The TUI Card component comes with several variations to indicate different types of content:

### Default Card

```html
<div class="tui-card">
  <div class="tui-card-title">Default Card</div>
  <div class="tui-card-content">This is a default card with standard styling.</div>
</div>
```

<div class="tui-card">
  <div class="tui-card-title">Default Card</div>
  <div class="tui-card-content">
    This is a default card with standard styling.
  </div>
</div>

### Primary Card

```html
<div class="tui-card primary">
  <div class="tui-card-title">Primary Card</div>
  <div class="tui-card-content">This is a primary card, typically used for main content or actions.</div>
</div>
```

<div class="tui-card primary">
  <div class="tui-card-title">Primary Card</div>
  <div class="tui-card-content">
    This is a primary card, typically used for main content or actions.
  </div>
</div>

### Info Card

```html
<div class="tui-card info">
  <div class="tui-card-title">Info Card</div>
  <div class="tui-card-content">This is an info card, used to present information to the user.</div>
</div>
```

<div class="tui-card info">
  <div class="tui-card-title">Info Card</div>
  <div class="tui-card-content">
    This is an info card, used to present information to the user.
  </div>
</div>

### Warning Card

```html
<div class="tui-card warning">
  <div class="tui-card-title">Warning Card</div>
  <div class="tui-card-content">This is a warning card, used to alert users about potential issues.</div>
</div>
```

<div class="tui-card warning">
  <div class="tui-card-title">Warning Card</div>
  <div class="tui-card-content">
    This is a warning card, used to alert users about potential issues.
  </div>
</div>

### Danger Card

```html
<div class="tui-card danger">
  <div class="tui-card-title">Danger Card</div>
  <div class="tui-card-content">This is a danger card, used to highlight critical information or errors.</div>
</div>
```

<div class="tui-card danger">
  <div class="tui-card-title">Danger Card</div>
  <div class="tui-card-content">
    This is a danger card, used to highlight critical information or errors.
  </div>
</div>

## Example

Here's an example of how the TUI Card component might look in your documentation:

<div class="tui-card">
  <div class="tui-card-title">Terminal Output</div>
  <div class="tui-card-content">
    <pre>
$ npm install vitepress-theme-tui
+ vitepress-theme-tui@1.0.0
added 1 package, and audited 42 packages in 2s
found 0 vulnerabilities
    </pre>
  </div>
</div>

## Using Cards with Markdown

You can use TUI Cards directly in your Markdown content:

```md
<div class="tui-card">
  <div class="tui-card-title">Markdown Card</div>
  <div class="tui-card-content">
    This card contains **Markdown** content that will be _rendered_ properly.
  </div>
</div>
```
