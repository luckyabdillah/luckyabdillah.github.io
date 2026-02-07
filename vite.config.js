import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Change this to '/repo-name/' if not using custom domain (luckyabdillah.github.io)
  server: {
    allowedHosts: ['nonangelic-subpreceptoral-kamari.ngrok-free.dev'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
