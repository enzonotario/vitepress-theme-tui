import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'

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
  },
  vite: {
    plugins: [
      UnoCSS(),
    ],
  },
})
