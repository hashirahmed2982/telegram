import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https:{
      key:'./telegram-privateKey.key',
      cert:'./telegram.crt' ,
    },
    host: true,
    port: 5173
  }
})
