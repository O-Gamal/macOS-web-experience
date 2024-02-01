import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, '/src/components'),
      '@theme': path.resolve(__dirname, '/src/theme'),
      '@utils': path.resolve(__dirname, '/src/utils'),
      '@assets': path.resolve(__dirname, '/src/assets'),
      '@state': path.resolve(__dirname, '/src/state'),
      '@hooks': path.resolve(__dirname, '/src/hooks'),
      '@animations': path.resolve(__dirname, '/src/animations'),
      '@': path.resolve(__dirname, '/src'),
    },
  },
});
