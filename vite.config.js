import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'vitepress-theme-tui',
      fileName: 'vitepress-theme-tui',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue', 'vitepress'],
      output: {
        globals: {
          vue: 'Vue',
          vitepress: 'VitePress',
        },
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
})
