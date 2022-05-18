import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    },
    extensions: ['.js', '.json', '.vue'],
  },
  server: {
    port: 3000,
    origin: 'https://accounts.myren.xyz',
    host: 'dev.accounts.myren.xyz',
    https: true,
  }
})

