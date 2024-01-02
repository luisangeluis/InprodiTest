import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      google: {
        families: [
          {name: 'Roboto',styles: 'ital,wght@0,400;0,700;1,400;1,700'},
          {name:'Open Sans',styles: 'ital,wght@0,400;0,600;1,400;1,600'}
        ]
      },
    })
  ],
})
