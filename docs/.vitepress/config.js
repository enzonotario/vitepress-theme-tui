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
          { text: 'Example', link: '/example' },
          { text: 'Themes', link: '/themes' },
          {
            text: 'Components',
            link: '/components/tui-card',
            items: [
              { text: 'Card', link: '/components/tui-card' },
              { text: 'Timeline', link: '/components/tui-timeline' },
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
  },
  vite: {
    plugins: [
      UnoCSS(),
    ],
  },
  head: [
    // Google Analytics
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

    // OG Tags
    ['meta', { property: 'og:title', content: 'VitePress Theme TUI' }],
    ['meta', { property: 'og:description', content: 'Bring the beauty of Terminal UIs to your documentation' }],
    ['meta', { property: 'og:image', content: 'https://vitepress-theme-tui.vercel.app/og.png' }],
    ['meta', { property: 'og:url', content: 'https://vitepress-theme-tui.vercel.app/' }],
    ['meta', { property: 'og:type', content: 'website' }],

    // Twitter Tags
    ['meta', { name: 'twitter:title', content: 'VitePress Theme TUI' }],
    ['meta', { name: 'twitter:description', content: 'Bring the beauty of Terminal UIs to your documentation' }],
    ['meta', { name: 'twitter:image', content: 'https://vitepress-theme-tui.vercel.app/og.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],
})
