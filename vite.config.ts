import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-expect-error Node.js 'fs' module is not typed for Vite config, but needed for HTTPS setup
import fs from 'fs'

export default defineConfig({
  plugins: [react()],
  base: '/recipe-pal/',
  server: {
    https: {
      key: fs.readFileSync('localhost-key.pem'),
      cert: fs.readFileSync('localhost.pem'),
    },
    host: '0.0.0.0',
  },
  preview: {
    https: {
      key: fs.readFileSync('localhost-key.pem'),
      cert: fs.readFileSync('localhost.pem'),
    },
    host: '0.0.0.0',
  },
})
