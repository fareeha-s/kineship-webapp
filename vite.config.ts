import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/kineship-webapp/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
  server: {
    port: 3000,
    host: true, // listen on all addresses
    open: true  // open browser automatically
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
