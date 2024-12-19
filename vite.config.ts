import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  root: './demo',
  server: {
    port: 3000,
  },
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  base: './',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js', // Remove hash for entry files
        chunkFileNames: '[name].js', // Remove hash for chunks
        assetFileNames: '[name][extname]', // Remove hash for assets (e.g., CSS, images)
      },
    },
  },
});
