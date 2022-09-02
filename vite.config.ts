import { defineConfig } from 'vite'
import {VitePWA} from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      srcDir: 'src',
      filename: 'sw.ts',
      strategies: 'injectManifest',
      registerType: 'autoUpdate',
      injectRegister: null,
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Vite example',
        description: 'Vite pwa example',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      },
      injectManifest: {
        globPatterns: ['*']
      }
    })
  ]
})
