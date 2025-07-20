import ThemeSwitcher from './components/ThemeSwitcher.vue'
import { getCurrentTheme, setTheme, themes } from './themes'
import useTUI from './useTUI.js'
import './styles/index.css'

export const styles = {
  base: './styles/base.css',
  components: {
    aside: './styles/components/aside.css',
    blockquote: './styles/components/blockquote.css',
    codeGroup: './styles/components/code-group.css',
    customBlocks: './styles/components/custom-blocks.css',
    footer: './styles/components/footer.css',
    heading: './styles/components/heading.css',
    hero: './styles/components/hero.css',
    inlineCode: './styles/components/inline-code.css',
    link: './styles/components/link.css',
    rule: './styles/components/rule.css',
    sidebar: './styles/components/sidebar.css',
    table: './styles/components/table.css',
    tuiCard: './styles/components/tui-card.css',
  },
  themes: {
    ...Object.fromEntries(themes.map(theme => [theme.name, `./styles/themes/${theme.name}.css`])),
  },
}

export { getCurrentTheme, setTheme, themes }

export { useTUI }

export { ThemeSwitcher }
