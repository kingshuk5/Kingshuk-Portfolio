import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host:'0.0.0.0',
    port:5173,
  },
  define: {
    'process.env': process.env, // Optional: If you're using legacy code relying on `process.env`
  },
})
