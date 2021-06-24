import { defineConfig, loadEnv } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: loadEnv(mode, process.cwd()).VITE_ASSET_URL,
  plugins: [vuePlugin(), vueJsx()],
  build: {
    minify: false
  },
  server: {
    port: 3009
  }
}))
