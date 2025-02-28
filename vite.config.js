import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-lt",
    project: "javascript-react"
  })],
  base: '/Apple_clone/',

  build: {
    sourcemap: true
  }
})
