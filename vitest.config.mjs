import { defineConfig } from 'vitest/config'

// Server tests. The client has its own config in client/.
export default defineConfig({
  test: {
    include: ['tests/**/*.test.js'],
    environment: 'node'
  }
})
