import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/frontend_massive/", //nama repository github
  plugins: [react()],
})
