import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Todo lo que empiece por /api se reenvía al servidor Express (puerto 3000)
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
