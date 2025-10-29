import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwinbdcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(),tailwinbdcss()],
})
