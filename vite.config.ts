import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { handleSendEmail } from './server/api-route'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'contact-email-api',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (!req.url?.startsWith('/api/send-email')) {
              next()
              return
            }

            const fullEnv = { ...process.env, ...env }
            void handleSendEmail(req, res, fullEnv)
          })
        },
      },
    ],
  }
})
