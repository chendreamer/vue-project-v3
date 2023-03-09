import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    open:true,
    host:'localhost',
    port:9996,
    strictPort:false,
    cors:true,
    force:true,
    //代理
    // proxy: {
    //     '/api':
    //       {
    //         target: 'http://xxx.xxx.xx',
    //         changeOrigin: true,
    //         rewrite:
    //           (path) => path.replace(/^\/api/, '')
    //       }
    //   }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
