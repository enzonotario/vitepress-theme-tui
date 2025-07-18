import './styles/vitepress-theme-tui.css';
import useTUI from './useTUI.js';
import ThemeSwitcher from './components/ThemeSwitcher.vue';
import {getCurrentTheme, setTheme, themes} from './themes';

export const styles = {
  base: './styles/base.css',
  components: {
    table: './styles/components/table.css',
    codeGroup: './styles/components/code-group.css',
    inlineCode: './styles/components/inline-code.css',
    customBlocks: './styles/components/custom-blocks.css',
    hero: './styles/components/hero.css',
    blockquote: './styles/components/blockquote.css',
    link: './styles/components/link.css',
    sidebar: './styles/components/sidebar.css',
    aside: './styles/components/aside.css',
    heading: './styles/components/heading.css',
    rule: './styles/components/rule.css',
  },
  themes: {
    base: './styles/themes/base.css',
    ...Object.fromEntries(themes.map(theme => [theme.name, theme.styles]))
  }
};

export { themes, getCurrentTheme, setTheme };

export { useTUI };

export { ThemeSwitcher };
