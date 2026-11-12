import { defineConfig } from 'vitest/config'

// Separate from vite.config.js so tests do not load the PWA plugin.
export default defineConfig({
  test: { include: ['src/**/*.test.{js,jsx}'], environment: 'node' }
})
