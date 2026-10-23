import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// base '/' porque o site roda na raiz do domínio chrismagalhaes.com.br
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
