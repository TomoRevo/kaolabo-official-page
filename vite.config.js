import { defineConfig } from 'vite'

export default defineConfig({
  base: '/kaolabo-official-page/',
  build: {
    outDir: 'dist'
  },
  publicDir: 'public' // ← これでpublic配下の静的ファイルを確実にコピー
})
