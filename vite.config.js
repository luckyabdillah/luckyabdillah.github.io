import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  base: '/', // Change this to '/repo-name/' if not using custom domain (luckyabdillah.github.io)
  server: {
    allowedHosts: ['nonangelic-subpreceptoral-kamari.ngrok-free.dev'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
