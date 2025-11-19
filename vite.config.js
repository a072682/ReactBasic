import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/xxx/' : '/',
  plugins: [react()],
})

//xxx為要上傳的暫存器名稱
