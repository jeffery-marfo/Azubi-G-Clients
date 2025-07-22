
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'https://tmp-se-projectapi.azurewebsites.net',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path,
      },
    },
  },
});
