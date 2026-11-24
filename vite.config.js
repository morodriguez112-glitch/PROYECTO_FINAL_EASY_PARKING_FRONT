import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Conecta Tailwind v4 con Vite

// Solo debe haber un "export default defineConfig" en todo el archivo
export default defineConfig({
  plugins: [
    react(),       // Permite usar componentes y el jsx de React
    tailwindcss(), // Activa las clases de Tailwind CSS en el proyecto
  ],
})


