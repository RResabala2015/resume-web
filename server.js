import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import { createServer as createViteServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function createServer() {
  const app = express()

  // Crea servidor Vite en modo middleware y configura el tipo de aplicación como
  // 'custom', deshabilitando la propia lógica de servicio HTML de Vite para que el servidor principal
  // puede tomar el control
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  })

  // Usa la instancia de Connect de Vite como middleware. Si usas tu propio
  // router de Express (express.Router()), debes usar router.use
  // Cuando el servidor se reinicia (por ejemplo, después de que el usuario modifica
  // vite.config.js), `vite.middlewares` seguirá siendo la misma
  // referencia (con una nueva cola interna de middlewares de Vite e inyectados por complementos).
  // Lo siguiente es válido incluso después de reinicios.
  app.use(vite.middlewares)

  app.use('*', async (req, res) => {
    // serve index.html - Se modificará despues
  })

  app.listen(5173)
}

createServer()