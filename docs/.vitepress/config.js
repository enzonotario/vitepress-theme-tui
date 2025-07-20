import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'

const gaId = process.env.GA_ID || 'G-TEST'

export default defineConfig({
  title: 'VitePress Theme TUI',
  description: 'Bring the beauty of Terminal UIs to your documentation',
  themeConfig: {
    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Demo', link: '/guide/demo' },
          { text: 'Themes', link: '/themes' },
          {
            text: 'Components',
            link: '/components/tui-card',
            items: [
              { text: 'TUI Card', link: '/components/tui-card' },
            ],
          },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/enzonotario/vitepress-theme-tui' },
    ],
    footer: {
      message: 'Released under the <a href="https://github.com/enzonotario/vitepress-theme-tui/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2025-present <a href="https://enzonotario.me">Enzo Notario</a>',
    },
    head: [
      [
        'script',
        { async: '', src: `https://www.googletagmanager.com/gtag/js?id=${gaId}` },
      ],
      [
        'script',
        {},
        `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}');`,
      ],
    ],
  },
  vite: {
    plugins: [
      UnoCSS(),
    ],
  },
})
