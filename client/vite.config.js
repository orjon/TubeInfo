import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// One .env at the repo root is shared by the server and the client.
// Only VITE_* variables are exposed to the browser.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '..', '')
  const base = (env.BASE_PATH || '/setoff').replace(/\/$/, '') + '/'
  const name = env.VITE_APP_NAME || 'Off You Pop'
  const shortName = env.VITE_APP_SHORT_NAME || name
  const tagline = env.VITE_APP_TAGLINE || 'London train times'
  const apiTarget = `http://localhost:${env.PORT || 5005}`

  return {
    base,
    envDir: '..',
    plugins: [
      react(),
      {
        // Fills the name and tagline into index.html, using the defaults above
        // when .env does not set them
        name: 'app-identity-html',
        transformIndexHtml: (html) =>
          html
            .replaceAll('%APP_NAME%', name)
            .replaceAll('%APP_TAGLINE%', tagline)
      },
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: `${name} - ${tagline}`,
          short_name: shortName,
          description: tagline,
          start_url: base,
          scope: base,
          display: 'standalone',
          theme_color: '#000000',
          background_color: '#ffffff',
          icons: [
            { src: 'tubeinfo.png', sizes: '192x192', type: 'image/png' }
          ]
        }
      })
    ],
    server: {
      proxy: { [`${base}api`]: apiTarget }
    },
    build: { outDir: 'dist' }
  }
})
