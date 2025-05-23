/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons-ng'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/shared/assets/icons')],
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/shared/test/setup.ts'],
  },

  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['motion', 'react-dropzone', 'react-dropdown-select'],
          'state-vendor': ['@reduxjs/toolkit', 'react-redux'],
          'ag-grid': ['ag-grid-community', 'ag-grid-react'],
          utils: ['date-fns'],
        },
      },
    },
    // Оптимизация изображений
    assetsInlineLimit: 4096, // 4kb
  },

  server: {
    port: 5173,
    strictPort: true /* Фиксированный порт 5173 */,
    hmr: true,
    watch: {
      usePolling: true /* polling для более надежного отслеживания изменений */,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    open: true,
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    },
    proxy: {
      '/api': {
        target: 'https://t0rrapi.npotau.ru',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
