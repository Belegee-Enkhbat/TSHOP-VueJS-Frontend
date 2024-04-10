import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // Use `historyApiFallback` to enable history mode for Vue Router
    historyApiFallback: true,
    // For production, specify the base path for your app
    // For development, the base path is '/'
    proxy: {
      '/api': {
        target: 'http://localhost:5173',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    // Specify the base path for your app in production
    base: '/products/'
  }
});
